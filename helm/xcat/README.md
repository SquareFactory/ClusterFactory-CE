# xcat

![Version: 0.1.0](https://img.shields.io/badge/Version-0.1.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 0.1.3](https://img.shields.io/badge/AppVersion-0.1.3-informational?style=flat-square)

xCAT Extreme Cloud Administration Toolkit, xCAT offers complete management for bare-metal based cluster.

**Homepage:** <https://github.com/squarefactory/xcat-rocky>

## Maintainers

| Name | Email | Url |
| ---- | ------ | --- |
| Marc Nguyen | <marc@squarefactory.io> |  |
| Christophe Lillo | <lillo@squarefactory.io> |  |

## Source Code

* <https://github.com/squarefactory/xcat-rocky>

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| image | string | `"ghcr.io/squarefactory/xcat-rocky:0.1.3-xcat2.16.3-rocky8.4"` |  |
| imagePullPolicy | string | `"IfNotPresent"` |  |
| imagePullSecrets | object | `{}` |  |
| labels | object | `{}` |  |
| net.dns.nameservers[0] | string | `"127.0.0.1"` |  |
| net.ipam.addresses[0].address | string | `"192.168.0.3/24"` |  |
| net.ipam.addresses[0].gateway | string | `"192.168.0.1"` |  |
| net.ipam.routes[0].dst | string | `"0.0.0.0/0"` |  |
| net.ipam.type | string | `"static"` |  |
| net.masterInterface | string | `"eth0"` |  |
| net.mode | string | `"l2"` |  |
| net.type | string | `"ipvlan"` |  |
| nodeAffinity | object | `{}` |  |
| nodeSelector | object | `{}` |  |
| persistence.accessModes[0] | string | `"ReadWriteOnce"` |  |
| persistence.selectorLabels | object | `{}` |  |
| persistence.size | string | `"50Gi"` |  |
| persistence.storageClassName | string | `""` |  |
| podAnnotations | object | `{}` |  |
| podSecurityContext.runAsUser | int | `0` |  |
| replicas | int | `1` |  |
| resources.limits.cpu | string | `"2"` |  |
| resources.limits.memory | string | `"8Gi"` |  |
| resources.requests.cpu | string | `"2"` |  |
| resources.requests.memory | string | `"8Gi"` |  |
| schedulerName | string | `""` |  |
| securityContext.capabilities.add[0] | string | `"CAP_SYS_ADMIN"` |  |
| securityContext.capabilities.add[1] | string | `"NET_ADMIN"` |  |
| securityContext.readOnlyRootFilesystem | bool | `false` |  |
| securityContext.runAsNonRoot | bool | `false` |  |
| securityContext.runAsUser | int | `0` |  |
| terminationGracePeriod | int | `10` |  |
| tmp.medium | string | `""` |  |
| tmp.size | string | `"50Gi"` |  |
| tolerations | list | `[]` |  |
| updateStrategy | string | `"RollingUpdate"` |  |

----------------------------------------------
Autogenerated from chart metadata using [helm-docs v1.11.0](https://github.com/norwoodj/helm-docs/releases/v1.11.0)
