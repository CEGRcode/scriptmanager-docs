"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[6522],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||y[u]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(8168),o=(r(6540),r(5680));const a={id:"sort-by-dist",title:"Sort Coordinate By Reference",sidebar_label:"sort-by-dist"},i=void 0,s={unversionedId:"Tools/peak-analysis/sort-by-dist",id:"Tools/peak-analysis/sort-by-dist",title:"Sort Coordinate By Reference",description:"Sort BED/GFF by distance to another BED/GFF (e.g. peak annotations).",source:"@site/docs/Tools/peak-analysis/sort-by-dist.md",sourceDirName:"Tools/peak-analysis",slug:"/Tools/peak-analysis/sort-by-dist",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/sort-by-dist",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1724193974,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{id:"sort-by-dist",title:"Sort Coordinate By Reference",sidebar_label:"sort-by-dist"},sidebar:"toolSidebar",previous:{title:"Signal Duplication (suspended)",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/signal-dup"},next:{title:"Genomic Coordinate Tile",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/tile-genome"}},c={},l=[{value:"Command Line Interface",id:"command-line-interface",level:2}],p={toc:l},d="wrapper";function y(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Sort BED/GFF by distance to another BED/GFF (e.g. peak annotations)."),(0,o.yg)("img",{src:r(4020).A,style:{width:"70%"}}),(0,o.yg)("h2",{id:"command-line-interface"},"Command Line Interface"))}y.isMDXComponent=!0},4020:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/SortByDistWindow-0e91156e05080d3517a015b4d87dbed1.png"}}]);