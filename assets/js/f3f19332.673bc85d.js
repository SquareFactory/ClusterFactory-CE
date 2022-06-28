"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[3757],{9613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8046:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(9496),r=t(1626),s="tabItem_V9uK";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:t},n)}},8508:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(5443),r=t(9496),s=t(1626),o=t(1773),l=t(7296),i=t(123),u=t(9881),p="tabList_BPXy",m="tabItem_MmxT";function c(e){var n,t,o=e.lazy,c=e.block,d=e.defaultValue,g=e.values,h=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.l)(y,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:k[0].props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,i.U)(),N=C.tabGroupChoices,w=C.setTabGroupChoices,E=(0,r.useState)(v),x=E[0],P=E[1],S=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var M=N[h];null!=M&&M!==x&&y.some((function(e){return e.value===M}))&&P(M)}var D=function(e){var n=e.currentTarget,t=S.indexOf(n),a=y[t].value;a!==x&&(T(n),P(a),null!=h&&w(h,String(a)))},L=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=S.indexOf(e.currentTarget)+1;t=null!=(a=S[r])?a:S[0];break;case"ArrowLeft":var s,o=S.indexOf(e.currentTarget)-1;t=null!=(s=S[o])?s:S[S.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return S.push(e)},onKeyDown:L,onFocus:D,onClick:D},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},2726:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var a=t(5443),r=t(3010),s=(t(9496),t(9613)),o=t(8508),l=t(8046),i=["components"],u={},p="Deploy the Kube Prometheus Stack",m={unversionedId:"guides/monitoring/deploy",id:"guides/monitoring/deploy",title:"Deploy the Kube Prometheus Stack",description:"image-20220510142533326",source:"@site/docs/guides/40-monitoring/01-deploy.md",sourceDirName:"guides/40-monitoring",slug:"/guides/monitoring/deploy",permalink:"/docs/guides/monitoring/deploy",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/guides/40-monitoring/01-deploy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Backup and restore",permalink:"/docs/guides/maintenance/backup-restore"},next:{title:"How to deploy xCAT",permalink:"/docs/guides/provisioning/deploy-xcat"}},c={},d=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. Deploy Namespace and AppProject",id:"1-deploy-namespace-and-appproject",level:2},{value:"2. Persistent Volumes, PVC and Secrets",id:"2-persistent-volumes-pvc-and-secrets",level:2},{value:"2.a. Creating a <code>StorageClass</code> or <code>PersistentVolume</code>",id:"2a-creating-a-storageclass-or-persistentvolume",level:3},{value:"2.b. Add initial Grafana password as Secret",id:"2b-add-initial-grafana-password-as-secret",level:3},{value:"3. Editing the <code>prometheus-app.yml</code> values",id:"3-editing-the-prometheus-appyml-values",level:2},{value:"3.a. Add the values to the Argo CD application",id:"3a-add-the-values-to-the-argo-cd-application",level:3},{value:"3.b. Verify the default values.",id:"3b-verify-the-default-values",level:3},{value:"4. Deploy the app",id:"4-deploy-the-app",level:2}],g={toc:d};function h(e){var n=e.components,u=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},g,u,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"deploy-the-kube-prometheus-stack"},"Deploy the Kube Prometheus Stack"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20220510142533326",src:t(8265).Z,width:"1349",height:"649"})),(0,s.kt)("h2",{id:"helm-and-docker-resources"},"Helm and Docker resources"),(0,s.kt)("p",null,"The Helm resources are stored on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"the Prometheus Community Git Repository"),"."),(0,s.kt)("p",null,"The docker images used are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"quay.io/prometheus/alertmanager")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"quay.io/prometheus-operator/prometheus-operator")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"quay.io/prometheus/prometheus")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"quay.io/prometheus-operator/prometheus-config-reloader")),(0,s.kt)("li",{parentName:"ul"},"(",(0,s.kt)("inlineCode",{parentName:"li"},"quay.io/thanos/thanos"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"docker.io/grafana/grafana-oss"))),(0,s.kt)("p",null,"Like in the Getting Started, we won't be deploying Thanos and AlertManager."),(0,s.kt)("h2",{id:"1-deploy-namespace-and-appproject"},"1. Deploy Namespace and AppProject"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/monitoring/\n")),(0,s.kt)("h2",{id:"2-persistent-volumes-pvc-and-secrets"},"2. Persistent Volumes, PVC and Secrets"),(0,s.kt)("h3",{id:"2a-creating-a-storageclass-or-persistentvolume"},"2.a. Creating a ",(0,s.kt)("inlineCode",{parentName:"h3"},"StorageClass")," or ",(0,s.kt)("inlineCode",{parentName:"h3"},"PersistentVolume")),(0,s.kt)("p",null,"We will use NFS. Feel free to use another type of storage. We recommend at least 100 GB since the storage is used to store the root file system of the operating system images."),(0,s.kt)(o.Z,{groupId:"volume",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/monitoring/volumes/storage-classes.yaml"',title:'"argo/monitoring/volumes/storage-classes.yaml"'},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: grafana-nfs\n  namespace: monitoring\n  labels:\n    app: grafana\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: <FILL ME> # IP or host\n  share: <FILL ME> # /srv/nfs/k8s/grafana\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/zone\n        values:\n          - <FILL ME> # <country code>-<city>-<index>\n---\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: prometheus-nfs\n  namespace: monitoring\n  labels:\n    app: prometheus\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: <FILL ME> # IP or host\n  share: <FILL ME> # /srv/nfs/k8s/prometheus\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/zone\n        values:\n          - <FILL ME> # <country code>-<city>-<index>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/monitoring/volumes/storage-classes.yaml\n"))),(0,s.kt)(l.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/monitoring/volumes/persistent-volumes.yaml"',title:'"argo/monitoring/volumes/persistent-volumes.yaml"'},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: grafana-pv\n  namespace: monitoring\n  labels:\n    app: grafana\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nspec:\n  capacity:\n    storage: 100Gi\n  mountOptions:\n    - hard\n    - nfsvers=4.1\n    - noatime\n    - nodiratime\n  csi:\n    driver: nfs.csi.k8s.io\n    readOnly: false\n    volumeHandle: <unique id> # uuidgen\n    volumeAttributes:\n      server: <FILL ME> # IP or host\n      share: <FILL ME> # /srv/nfs/k8s/grafana\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n---\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: prometheus-pv\n  namespace: monitoring\n  labels:\n    app: prometheus\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nspec:\n  capacity:\n    storage: 100Gi\n  mountOptions:\n    - hard\n    - nfsvers=4.1\n    - noatime\n    - nodiratime\n  csi:\n    driver: nfs.csi.k8s.io\n    readOnly: false\n    volumeHandle: <unique id> # uuidgen\n    volumeAttributes:\n      server: <FILL ME> # IP or host\n      share: <FILL ME> # /srv/nfs/k8s/prometheus\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/monitoring/volumes/persistent-volumes.yaml\n")),(0,s.kt)("p",null,"The label ",(0,s.kt)("inlineCode",{parentName:"p"},"app=prometheus")," will be used by the PersistentVolumeClaim."),(0,s.kt)("p",null,"We also need a PVC for Grafana:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/monitoring/volumes/persistent-volume-claim.yaml"',title:'"argo/monitoring/volumes/persistent-volume-claim.yaml"'},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: grafana-pv-claim\n  namespace: monitoring\nspec:\n  volumeName: grafana-pv\n  storageClassName: ''\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 10Gi\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/monitoring/volumes/persistent-volume-claim.yaml\n")))),(0,s.kt)("h3",{id:"2b-add-initial-grafana-password-as-secret"},"2.b. Add initial Grafana password as Secret"),(0,s.kt)("p",null,"Create a SealedSecret which contains the initial credentials for Grafana:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a ",(0,s.kt)("inlineCode",{parentName:"li"},"-secret.yml.local")," file:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/monitoring/secrets/grafana-admin-secret.yaml.local"',title:'"argo/monitoring/secrets/grafana-admin-secret.yaml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: grafana-admin-secret\n  namespace: monitoring\nstringData:\n  admin-password: password\n  admin-user: admin\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Seal the secret:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"./kubeseal-every-local-files.sh\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Apply the SealedSecret:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/monitoring/secrets/grafana-admin-sealed-secret.yaml\n")),(0,s.kt)("h2",{id:"3-editing-the-prometheus-appyml-values"},"3. Editing the ",(0,s.kt)("inlineCode",{parentName:"h2"},"prometheus-app.yml")," values"),(0,s.kt)("h3",{id:"3a-add-the-values-to-the-argo-cd-application"},"3.a. Add the values to the Argo CD application"),(0,s.kt)(o.Z,{groupId:"volume",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/monitoring/apps/prometheus-app.yml > spec > source > helm > values"',title:'"argo/monitoring/apps/prometheus-app.yml',">":!0,spec:!0,source:!0,helm:!0,'values"':!0},"alertmanager:\n  enabled: false\n\ngrafana:\n  enabled: true\n\n  image:\n    repository: grafana/grafana-oss\n    tag: 8.4.5\n\n  persistence:\n    type: pvc\n    enabled: true\n    storageClassName: grafana-nfs\n\n  securityContext:\n    runAsUser: 472\n    runAsGroup: 472\n    fsGroup: 472\n\n  admin:\n    existingSecret: 'grafana-admin-secret'\n    userKey: admin-user\n    passwordKey: admin-password\n\n  initChownData:\n    enabled: false\n\n  ingress:\n    enabled: true\n    ingressClassName: traefik\n\n    annotations:\n      cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n      traefik.ingress.kubernetes.io/router.entrypoints: websecure\n      traefik.ingress.kubernetes.io/router.tls: 'true'\n\n    hosts:\n      - grafana.example.com\n\n    path: /\n\n    tls:\n      - secretName: grafana.example.com-secret\n        hosts:\n          - grafana.example.com\n\n## Component scraping the kube controller manager\n##\nkubeControllerManager:\n  enabled: false\n\n## Component scraping coreDns. Use either this or kubeDns\n##\ncoreDns:\n  enabled: false\n\n## Component scraping kubeDns. Use either this or coreDns\n##\nkubeDns:\n  enabled: false\n\n## Component scraping etcd\n##\nkubeEtcd:\n  enabled: false\n\n## Component scraping kube scheduler\n##\nkubeScheduler:\n  enabled: false\n\n## Component scraping kube proxy\n##\nkubeProxy:\n  enabled: false\n\n## Component scraping kube state metrics\n##\nkubeStateMetrics:\n  enabled: true\n\n## Configuration for kube-state-metrics subchart\n##\nkube-state-metrics:\n  prometheus:\n    monitor:\n      enabled: true\n\n## Deploy node exporter as a daemonset to all nodes\n##\nnodeExporter:\n  enabled: true\n\n## Configuration for prometheus-node-exporter subchart\n##\nprometheus-node-exporter:\n  prometheus:\n    monitor:\n      enabled: true\n\n## Manages Prometheus and Alertmanager components\n##\nprometheusOperator:\n  enabled: true\n\n## Deploy a Prometheus instance\n##\nprometheus:\n  enabled: true\n\n  ingress:\n    enabled: true\n\n    annotations:\n      cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n      traefik.ingress.kubernetes.io/router.entrypoints: websecure\n      traefik.ingress .kubernetes.io/router.tls: 'true'\n\n    hosts:\n      - prometheus.example.com\n\n    paths:\n      - /\n\n    tls:\n      - secretName: prometheus.example.com-secret\n        hosts:\n          - prometheus.example.com\n\n  prometheusSpec:\n    ruleSelectorNilUsesHelmValues: false\n    serviceMonitorSelectorNilUsesHelmValues: false\n    podMonitorSelectorNilUsesHelmValues: false\n    probeSelectorNilUsesHelmValues: false\n\n    resources:\n      limits:\n        cpu: 1\n        memory: 2Gi\n      requests:\n        cpu: 200m\n        memory: 2Gi\n\n    storageSpec:\n      volumeClaimTemplate:\n        spec:\n          storageClassName: 'prometheus-nfs'\n          accessModes: ['ReadWriteOnce']\n          resources:\n            requests:\n              storage: 50Gi\n"))),(0,s.kt)(l.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/monitoring/apps/prometheus-app.yml > spec > source > helm > values"',title:'"argo/monitoring/apps/prometheus-app.yml',">":!0,spec:!0,source:!0,helm:!0,'values"':!0},"alertmanager:\n  enabled: false\n\ngrafana:\n  enabled: true\n\n  image:\n    repository: grafana/grafana-oss\n    tag: 8.4.5\n\n  persistence:\n    type: pvc\n    enabled: true\n    existingClaim: grafana-pv-claim\n\n  securityContext:\n    runAsUser: 472\n    runAsGroup: 472\n    fsGroup: 472\n\n  admin:\n    existingSecret: 'grafana-admin-secret'\n    userKey: admin-user\n    passwordKey: admin-password\n\n  initChownData:\n    enabled: false\n\n  ingress:\n    enabled: true\n    ingressClassName: traefik\n\n    annotations:\n      cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n      traefik.ingress.kubernetes.io/router.entrypoints: websecure\n      traefik.ingress.kubernetes.io/router.tls: 'true'\n\n    hosts:\n      - grafana.example.com\n\n    path: /\n\n    tls:\n      - secretName: grafana.example.com-secret\n        hosts:\n          - grafana.example.com\n\n## Component scraping the kube controller manager\n##\nkubeControllerManager:\n  enabled: false\n\n## Component scraping coreDns. Use either this or kubeDns\n##\ncoreDns:\n  enabled: false\n\n## Component scraping kubeDns. Use either this or coreDns\n##\nkubeDns:\n  enabled: false\n\n## Component scraping etcd\n##\nkubeEtcd:\n  enabled: false\n\n## Component scraping kube scheduler\n##\nkubeScheduler:\n  enabled: false\n\n## Component scraping kube proxy\n##\nkubeProxy:\n  enabled: false\n\n## Component scraping kube state metrics\n##\nkubeStateMetrics:\n  enabled: true\n\n## Configuration for kube-state-metrics subchart\n##\nkube-state-metrics:\n  prometheus:\n    monitor:\n      enabled: true\n\n## Deploy node exporter as a daemonset to all nodes\n##\nnodeExporter:\n  enabled: true\n\n## Configuration for prometheus-node-exporter subchart\n##\nprometheus-node-exporter:\n  prometheus:\n    monitor:\n      enabled: true\n\n## Manages Prometheus and Alertmanager components\n##\nprometheusOperator:\n  enabled: true\n\n## Deploy a Prometheus instance\n##\nprometheus:\n  enabled: true\n\n  ingress:\n    enabled: true\n\n    annotations:\n      cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n      traefik.ingress.kubernetes.io/router.entrypoints: websecure\n      traefik.ingress .kubernetes.io/router.tls: 'true'\n\n    hosts:\n      - prometheus.example.com\n\n    paths:\n      - /\n\n    tls:\n      - secretName: prometheus.example.com-secret\n        hosts:\n          - prometheus.example.com\n\n  prometheusSpec:\n    ruleSelectorNilUsesHelmValues: false\n    serviceMonitorSelectorNilUsesHelmValues: false\n    podMonitorSelectorNilUsesHelmValues: false\n    probeSelectorNilUsesHelmValues: false\n\n    resources:\n      limits:\n        cpu: 1\n        memory: 2Gi\n      requests:\n        cpu: 200m\n        memory: 2Gi\n\n    storageSpec:\n      volumeClaimTemplate:\n        spec:\n          volumeName: 'prometheus-pv'\n          storageClassName: ''\n          accessModes: ['ReadWriteOnce']\n          resources:\n            requests:\n              storage: 50Gi\n")))),(0,s.kt)("p",null,"In case you don't know how to use ",(0,s.kt)("inlineCode",{parentName:"p"},"Ingress")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"cert-manager")," and Traefik. Use the annotations ",(0,s.kt)("inlineCode",{parentName:"p"},"traefik.ingress.kubernetes.io/router.entrypoints")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"traefik.ingress.kubernetes.io/router.tls")," to indicate the port used by Traefik."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"cfctl.yaml")," indicates that the entry-point ",(0,s.kt)("inlineCode",{parentName:"p"},"websecure")," is port 443."),(0,s.kt)("p",null,"More about Traefik with Kubernetes Ingresses in ",(0,s.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/routing/providers/kubernetes-ingress/"},"their documentation"),"."),(0,s.kt)("p",null,"Use the annotation ",(0,s.kt)("inlineCode",{parentName:"p"},"cert-manager.io/cluster-issuer")," to indicate the certificate issuer and specify the generated certificate secret name in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tls[].secretName")," field. ",(0,s.kt)("inlineCode",{parentName:"p"},"cert-manager")," will automatically search or generate the TLS certificates."),(0,s.kt)("p",null,"More about ",(0,s.kt)("inlineCode",{parentName:"p"},"cert-manager")," in ",(0,s.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/ingress/"},"their documentation"),"."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Notice that ",(0,s.kt)("inlineCode",{parentName:"p"},"initChownData")," is not enabled. This is because our NFS server does not allow ",(0,s.kt)("inlineCode",{parentName:"p"},"chown")," (change the owner of a directory) from a client."),(0,s.kt)("p",{parentName:"div"},"This means that, for security reasons, our NFS server manages the permissions itself, i.e. :"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"root@nfs","root@nfs":!0},"chown 472:472 /srv/nfs/k8s/grafana\nchown 1000:2000 /srv/nfs/k8s/prometheus\n")))),(0,s.kt)("h3",{id:"3b-verify-the-default-values"},"3.b. Verify the default values."),(0,s.kt)("p",null,"Verify the default value inside the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/values.yaml"},"the Prometheus Community Git Repository"),"."),(0,s.kt)("p",null,"And edit the values based on your use-cases."),(0,s.kt)("h2",{id:"4-deploy-the-app"},"4. Deploy the app"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory-CE"',title:'"user@local:/ClusterFactory-CE"'},"kubectl apply -f argo/monitoring/apps/prometheus-crd-app.yml\nkubectl apply -f argo/monitoring/apps/prometheus-app.yml\n")))}h.isMDXComponent=!0},8265:function(e,n,t){n.Z=t.p+"assets/images/image-20220510142533326-e9b5e6873b57c15418b24a62a98855c3.png"}}]);