# 2. K0s Configuration

## Specifying the hosts

You may want to [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [Cluster Factory CE repository](https://github.com/SquareFactory/cluster-factory-ce), so you could use ArgoCD on your own repository.

For now, let's just clone the repository:

```shell title="user@local:/"
git clone https://github.com/SquareFactory/cluster-factory-ce.git
```

Edit the `k0sctl.yaml` file. Start with the `hosts` field :

```yaml title=k0sctl.yaml
apiVersion: k0sctl.k0sproject.io/v1beta1
kind: Cluster
metadata:
  name: my-home-cluster
spec:
  hosts:
    - ssh:
        address: 10.10.2.16
        user: root
        port: 22
        keyPath: ~/.ssh/id_ed25519
      role: controller+worker
      privateInterface: eno2
      privateAddress: 10.10.2.16
      installFlags:
        - --debug
        - --labels="topology.kubernetes.io/region=my-home,topology.kubernetes.io/zone=my-home-1"
      hooks:
        apply:
          after:
            - mkdir -p /var/lib/k0s/kubelet
            - ln -s /var/lib/kubelet /var/lib/k0s/kubelet
            - sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config
            - setenforce 0
    - ssh:
        address: 172.24.0.4
        user: root
        port: 22
        keyPath: ~/.ssh/id_ed25519
      role: worker
      privateInterface: priv0
      privateAddress: 172.24.0.4
      installFlags:
        - --debug
        - --labels="topology.kubernetes.io/region=at-vie,topology.kubernetes.io/zone=at-vie-1"
      hooks:
        apply:
          after:
            - mkdir -p /var/lib/k0s/kubelet
            - ln -s /var/lib/kubelet /var/lib/k0s/kubelet
            - sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config
            - setenforce 0
  ...
```

Provide each host with a valid IP address that is reachable by k0ctl, and the connection details for an SSH connection.

[The `k0sctl.yaml` specification is written in the repository of k0sctl](https://github.com/k0sproject/k0sctl#spec-fields).

**You should read the specification carefully as the modification of one the host field won't be allowed in the future**.

If you wish to use a HA setup, please follow [this guide](https://docs.k0sproject.io/v1.23.6+k0s.0/high-availability/).

## Configuring the k0s architecture

After you set the `hosts` field, you must configure the k0s architecture by editing the `k0s` field:

```yaml title="k0sctl.yaml > spec > k0s"
k0s:
  version: 1.23.5+k0s.0
  dynamicConfig: false
  config:
    apiVersion: k0s.k0sproject.io/v1beta1
    kind: Cluster
    metadata:
      name: k8s.my.home
    spec:
      api:
        k0sApiPort: 9443
        port: 6443
      installConfig:
        users:
          etcdUser: etcd
          kineUser: kube-apiserver
          konnectivityUser: konnectivity-server
          kubeAPIserverUser: kube-apiserver
          kubeSchedulerUser: kube-scheduler
      konnectivity:
        adminPort: 8133
        agentPort: 8132
      network:
        calico:
          mode: 'vxlan'
          overlay: Always
          mtu: 0
          wireguard: false
        kubeProxy:
          disabled: false
          mode: iptables
        kuberouter:
          autoMTU: true
          mtu: 0
          peerRouterASNs: ''
          peerRouterIPs: ''
        podCIDR: 10.244.0.0/16
        provider: calico
        serviceCIDR: 10.96.0.0/12
      podSecurityPolicy:
        defaultPolicy: 00-k0s-privileged
      storage:
        type: etcd
      telemetry:
        enabled: false
```

Check the CIDR and make sure it doesn't conflict with any IP range of your network.

Again, **You should read the specification carefully as the modification of one the k0s field won't be allowed in the future**.

If you wish to use a HA setup, please follow [this guide](https://docs.k0sproject.io/v1.23.6+k0s.0/high-availability/).

After setting up k0s, you can change the `extensions` field. This field can be changed at any time. You can add or change extensions. However, removing an extension is permanent.

## Configuring MetalLB

Start with `metallb`. MetalLB is a L2/L3 load balancer designed for bare metal Kubernetes clusters. It exposes the kubernetes `Services` to the external network. It uses either L2 or BGP to advertise routes. The network indicated by `metallb` must be outside the network when using BGP. Otherwise, when using L2, the network must be the same as your private network. For multi-zone clusters, you MUST use BGP.

![k0s_metallb_loadbalancer](02-k0s-configuration.assets/k0s_metallb_loadbalancer.png)

:::note

MetalLB 0.13.0 will allow you to create "zoned" L2 announcements, which means you can make ARP calls by zone.

More precisely, this means that you can allow `10.10.2.100` in the network `10.10.2.0/24` in one zone, and `172.24.0.100` in the network `172.24.0.18` in an another zone, which means that you wouldn't need BGP anymore.

However, MetalLB 0.13.0 is not yet available at the time of writing.

:::

Your router must be capable of using BGP. If not, you should use an appliance with BGP capabilities (like pfSense, or just a Linux machine with BIRD).

```yaml title="k0sctl.yaml > spec > k0s > spec > extensions > helm > charts[]"
- name: metallb
  chartname: bitnami/metallb
  version: '2.6.8'
  namespace: metallb
  values: |

    configInline:
      peers:
        - peer-address: 172.24.0.2
          peer-asn: 65007
          my-asn: 64500
          source-address: 172.24.0.4
          node-selectors:
            - match-labels:
                kubernetes.io/hostname: k0s-exoscale-at-vie-1
        - peer-address: 10.10.2.1
          peer-asn: 65503
          my-asn: 64501
          source-address: 10.10.2.16
          node-selectors:
            - match-labels:
                kubernetes.io/hostname: mn1.ch1.csquare.run

      address-pools:
        - name: main-pool
          protocol: bgp
          addresses:
            - 10.10.4.100/32
```

[Use L2 if you have only one zone](https://metallb.universe.tf/configuration/#layer-2-configuration).

```yaml title="k0sctl.yaml > spec > k0s > spec > extensions > helm > charts[]"
- name: metallb
  chartname: bitnami/metallb
  version: '2.6.8'
  namespace: metallb
  values: |

    configInline:
      address-pools:
        - name: main-pool
          protocol: layer2
          addresses:
            - 10.10.2.100/32
```

## Configuring Traefik

After configuring the Load Balancer, you should configure Traefik, the main Ingress and L7 load balancer.

```yaml title="k0sctl.yaml > spec > k0s > spec > extensions > helm > charts[]"
- name: traefik
  chartname: traefik/traefik
  version: '10.15.0'
  namespace: traefik
  values: |

    ingressClass:
      enabled: true
      isDefaultClass: true

    service:
      enabled: true
      annotations:
        metallb.universe.tf/address-pool: main-pool
        metallb.universe.tf/allow-shared-ip: traefik-lb-key
      spec:
        externalTrafficPolicy: Cluster
        loadBalancerIP: 10.10.4.100

    providers:
      kubernetesCRD:
        enabled: true
        allowCrossNamespace: true
        allowExternalNameServices: true
        namespaces: []
      kubernetesIngress:
        enabled: true
        allowExternalNameServices: true
        namespaces: []
        ingressClass: traefik
        publishedService:
          enabled: true

    globalArguments:
      - '--global.checknewversion'
      - '--api.dashboard=true'

    additionalArguments:
      - '--entryPoints.websecure.proxyProtocol.insecure'
      - '--entryPoints.websecure.forwardedHeaders.insecure'

    ingressRoute:
      dashboard:
        enabled: false

    ports:
      traefik:
        port: 9000
        expose: false
        exposedPort: 9000
        protocol: TCP
      dns-tcp:
        port: 8053
        expose: true
        exposedPort: 53
        protocol: TCP
      dns-udp:
        port: 8054
        expose: true
        exposedPort: 53
        protocol: UDP
      web:
        port: 80
        expose: true
        exposedPort: 80
        protocol: TCP
      websecure:
        port: 443
        expose: true
        exposedPort: 443
        protocol: TCP
        # NOTE: use cert-manager.
        tls:
          enabled: false
      metrics:
        port: 9100
        expose: false
        exposedPort: 9100
        protocol: TCP

    securityContext:
      capabilities:
        drop: [ALL]
        add: [NET_BIND_SERVICE]
      readOnlyRootFilesystem: true
      runAsGroup: 0
      runAsNonRoot: false
      runAsUser: 0

    podSecurityContext:
      fsGroup: 65532
```

Look for `loadBalancerIP` and use the IPs from the MetalLB.

Add or remove ports. Since Traefik will be used as the main Ingress, these ports will be exposed to the external network.

The IngressClass is `traefik`. If you don't want to use Traefik, feel free to add another extension.

We use Traefik because it is able to do a lot of complex route operations while still being able to do basic HTTP routing.

## Initial Deployment

Run the `1.deploy-k0s.sh` script to deploy the cluster.

TODO: record deployment

You can re-run the scripts if you modify the `k0sctl.yaml` file.

Or, you can run `k0sctl` manually:

```shell title="user@local:/cluster-factory-ce"
PATH="$(pwd)/bin:${PATH}"
k0sctl apply --config ./k0sctl.yaml

# Fetch the kubeconfig
k0sctl kubeconfig --config ./k0sctl.yaml >./kubeconfig
```

Store the kubeconfig inside `~/.kube/config`, or just `export KUBECONFIG=$(pwd)/kubeconfig`.

Just make sure to verify which config you are using with `kubectl config view`.

Congratulation, you have deployed your kubernetes cluster! However, it's still missing a few core features:

- Sealed Secrets, a secret management optimized for GitOps
- Cert-manager issuers, to generate your own SSL certificate and enable, for free, tls configuration.
- ArgoCD, to enable GitOps.
- CoreDNS configurations