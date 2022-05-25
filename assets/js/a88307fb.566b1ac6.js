"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[212],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5426:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(2848),i=n(9213),a=(n(9496),n(9613)),o=["components"],s={},l="Installing the utilities",c={unversionedId:"guides/core/installing-the-utilities",id:"guides/core/installing-the-utilities",title:"Installing the utilities",description:"You need 3 tools so that you can manage your Kubernetes cluster:",source:"@site/docs/guides/00-core/00-installing-the-utilities.md",sourceDirName:"guides/00-core",slug:"/guides/core/installing-the-utilities",permalink:"/docs/guides/core/installing-the-utilities",draft:!1,editUrl:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/web/docs/guides/00-core/00-installing-the-utilities.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"docs",previous:{title:"CernVM-FS, A Scalable, Distributed Read-Only File-System",permalink:"/docs/main-concepts/apps/cvmfs"},next:{title:"Updating the K0s Helm extensions",permalink:"/docs/guides/core/updatting-helm-extensions"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-the-utilities"},"Installing the utilities"),(0,a.kt)("p",null,"You need 3 tools so that you can manage your Kubernetes cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/k0sproject/k0sctl/releases"},(0,a.kt)("inlineCode",{parentName:"a"},"k0sctl")),", so you can deploy, backup, and upgrade the Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},(0,a.kt)("inlineCode",{parentName:"a"},"kubectl")),", so you can manage your Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/releases/"},(0,a.kt)("inlineCode",{parentName:"a"},"kubeseal")),", so you can seal the secrets.")),(0,a.kt)("p",null,"We have a script inside the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/scripts"},(0,a.kt)("inlineCode",{parentName:"a"},"scripts"))," directory to install and set up a working environment."),(0,a.kt)("p",null,"Just run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},". ./scripts/common.sh\n")),(0,a.kt)("p",null,"The binaries is stored inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," directory and the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," is automatically set."))}m.isMDXComponent=!0}}]);