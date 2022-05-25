"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[215],{9613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8301:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var n=r(2848),o=r(9213),a=(r(9496),r(9613)),c=["components"],u={},i="Backup and restore",s={unversionedId:"guides/core/backup-restore",id:"guides/core/backup-restore",title:"Backup and restore",description:"Backup",source:"@site/docs/guides/00-core/03-backup-restore.md",sourceDirName:"guides/00-core",slug:"/guides/core/backup-restore",permalink:"/docs/guides/core/backup-restore",draft:!1,editUrl:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/web/docs/guides/00-core/03-backup-restore.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Updating the K0s cluster",permalink:"/docs/guides/core/updating-k0s-cluster"},next:{title:"Deploy the Kube Prometheus Stack",permalink:"/docs/guides/monitoring/deploy"}},l={},p=[{value:"Backup",id:"backup",level:2},{value:"Restore",id:"restore",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backup-and-restore"},"Backup and restore"),(0,a.kt)("h2",{id:"backup"},"Backup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"k0sctl backup\n")),(0,a.kt)("p",null,"This will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"tar.gz")," with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The certificates (the content of the <data-dir",">","/pki directory)"),(0,a.kt)("li",{parentName:"ul"},"An etcd snapshot, if the etcd datastore is used"),(0,a.kt)("li",{parentName:"ul"},"Any custom-defined manifests under the <data-dir",">","/manifests"),(0,a.kt)("li",{parentName:"ul"},"Any image bundles located under the <data-dir",">","/images"),(0,a.kt)("li",{parentName:"ul"},"Any helm configuration")),(0,a.kt)("p",null,"PersistentVolumes won't be inside the backup."),(0,a.kt)("h2",{id:"restore"},"Restore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"k0sctl apply --restore-from /path/to/backup_file.tar.gz\n")))}f.isMDXComponent=!0}}]);