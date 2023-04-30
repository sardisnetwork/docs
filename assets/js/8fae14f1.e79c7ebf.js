"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={},a="Compile and Run",i={unversionedId:"developers/Compile and Run",id:"developers/Compile and Run",title:"Compile and Run",description:"Download",source:"@site/docs/developers/1. Compile and Run.md",sourceDirName:"developers",slug:"/developers/Compile and Run",permalink:"/docs/developers/Compile and Run",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developers/1. Compile and Run.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Developers",permalink:"/docs/category/developers"},next:{title:"Deployment",permalink:"/docs/developers/Deployment"}},p={},c=[{value:"Download",id:"download",level:2},{value:"Install Golang",id:"install-golang",level:2},{value:"Compile",id:"compile",level:2},{value:"Run",id:"run",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Network",id:"network",level:2}],d={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compile-and-run"},"Compile and Run"),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"Download source code via ",(0,o.kt)("inlineCode",{parentName:"p"},"git")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    git clone https://github.com/sardisnetwork/blockchain-core.git\n")),(0,o.kt)("h2",{id:"install-golang"},"Install Golang"),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"Go Download and install")),(0,o.kt)("h2",{id:"compile"},"Compile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /path/to/sardisnetwork\nmake geth\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to use cross compile, like compiling on ",(0,o.kt)("inlineCode",{parentName:"p"},"Mac")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"make geth-linux"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"make geth-linux-amd64"),", etc.")),(0,o.kt)("p",null,"After compilation completed, the generated binary is in the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"build/bin"),"."),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"By running ",(0,o.kt)("inlineCode",{parentName:"p"},"./build/bin/geth --help"),", we can get all ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," info. Specific usage can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/interface/command-line-options"},"Command-line Options")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"please refer ",(0,o.kt)("a",{parentName:"p",href:"/docs/developers/Deployment"},"deployment")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SSD is required")),(0,o.kt)("h2",{id:"network"},"Network"),(0,o.kt)("p",null,"Program will connect into ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet")," after started. If want to connect the public testnet, you can add option ",(0,o.kt)("inlineCode",{parentName:"p"},"--testnet")," to command when starting."))}s.isMDXComponent=!0}}]);