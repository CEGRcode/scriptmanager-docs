"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[7504],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var a=i(7294);function I(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){I(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,I=function(e,t){if(null==e)return{};var i,a,I={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(I[i]=e[i]);return I}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(I[i]=e[i])}return I}var c=a.createContext({}),g=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=g(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var i=e.components,I=e.mdxType,n=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),o=g(i),u=I,s=o["".concat(c,".").concat(u)]||o[u]||p[u]||n;return i?a.createElement(s,r(r({ref:t},d),{},{components:i})):a.createElement(s,r({ref:t},d))}));function u(e,t){var i=arguments,I=t&&t.mdxType;if("string"==typeof e||I){var n=i.length,r=new Array(n);r[0]=o;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:I,r[1]=l;for(var g=2;g<n;g++)r[g]=i[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}o.displayName="MDXCreateElement"},3334:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>g});var a=i(7462),I=(i(7294),i(3905));const n={id:"peak-align-ref",title:"Align BED to Reference",sidebar_label:"peak-align-ref"},r=void 0,l={unversionedId:"peak-analysis/peak-align-ref",id:"peak-analysis/peak-align-ref",title:"Align BED to Reference",description:"peak-align-ref",source:"@site/docs/peak-analysis/peak-align-ref.md",sourceDirName:"peak-analysis",slug:"/peak-analysis/peak-align-ref",permalink:"/scriptmanager-docs/docs/peak-analysis/peak-align-ref",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1661543261,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{id:"peak-align-ref",title:"Align BED to Reference",sidebar_label:"peak-align-ref"},sidebar:"toolSidebar",previous:{title:"Compress/Decompress Files (Gzip)",permalink:"/scriptmanager-docs/docs/file-utilities/compress-files"},next:{title:"filter-bed",permalink:"/scriptmanager-docs/docs/peak-analysis/filter-bed"}},c={},g=[{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Output Options",id:"output-options",level:3}],d={toc:g};function p(e){let{components:t,...n}=e;return(0,I.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"peak-align-ref",src:i(701).Z,width:"103",height:"103"})),(0,I.kt)("p",null,"Align BED peaks to Reference BED file creating CDT files for heatmap generation"),(0,I.kt)("img",{src:i(975).Z,style:{width:"70%"}}),(0,I.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,I.kt)("p",null,"Usage:"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar peak-analysis peak-align-ref [-hV] [-o=<output>]\n<peakBED> <refBED>\n")),(0,I.kt)("table",null,(0,I.kt)("thead",{parentName:"table"},(0,I.kt)("tr",{parentName:"thead"},(0,I.kt)("th",{parentName:"tr",align:null},"Input"),(0,I.kt)("th",{parentName:"tr",align:null},"Description"))),(0,I.kt)("tbody",{parentName:"table"},(0,I.kt)("tr",{parentName:"tbody"},(0,I.kt)("td",{parentName:"tr",align:null},(0,I.kt)("inlineCode",{parentName:"td"},"<peakBED>")),(0,I.kt)("td",{parentName:"tr",align:null},"The BED peak file")),(0,I.kt)("tr",{parentName:"tbody"},(0,I.kt)("td",{parentName:"tr",align:null},(0,I.kt)("inlineCode",{parentName:"td"},"<refBED>")),(0,I.kt)("td",{parentName:"tr",align:null},"The BED reference file")))),(0,I.kt)("h3",{id:"output-options"},"Output Options"),(0,I.kt)("table",null,(0,I.kt)("thead",{parentName:"table"},(0,I.kt)("tr",{parentName:"thead"},(0,I.kt)("th",{parentName:"tr",align:null},"Option"),(0,I.kt)("th",{parentName:"tr",align:null},"Description"))),(0,I.kt)("tbody",{parentName:"table"},(0,I.kt)("tr",{parentName:"tbody"},(0,I.kt)("td",{parentName:"tr",align:null},(0,I.kt)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,I.kt)("td",{parentName:"tr",align:null},"specify output file")))))}p.isMDXComponent=!0},975:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/BEDPeakAligntoRefWindow-a010dd51cc662e3589abeedda7309070.png"},701:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzA3MDYwNjt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qze2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC43NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC43NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5OjUuMTEsNS4xMTt9Cgkuc3Q1e2ZpbGw6IzA0MDAwMDtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGcgaWQ9IkZvdXJfQ29sb3JfU2VxdWVuY2VfUGxvdCI+Cgk8cGF0aCBpZD0ic3F1YXJlIiBjbGFzcz0ic3QwIiBkPSJNOS4zLDEuNWg4NC40YzQuMywwLDcuOCwzLjUsNy44LDcuOHY4NC40YzAsNC4zLTMuNSw3LjgtNy44LDcuOEg5LjNjLTQuMywwLTcuOC0zLjUtNy44LTcuOFY5LjMKCQlDMS41LDUsNSwxLjUsOS4zLDEuNXoiLz4KPC9nPgo8ZyBpZD0iQkFNX3RvX2JlZGdyYXBoIj4KCTxyZWN0IHg9IjE4LjMiIHk9IjQ5IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSIxMC42Ii8+Cgk8cmVjdCB4PSIxOC4zIiB5PSI3MC43IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSI1LjYiLz4KCTxyZWN0IHg9IjI3LjMiIHk9IjcwLjQiIGNsYXNzPSJzdDEiIHdpZHRoPSIyIiBoZWlnaHQ9IjYuNCIvPgoJPHJlY3QgeD0iMjcuMyIgeT0iNDkiIGNsYXNzPSJzdDEiIHdpZHRoPSIyIiBoZWlnaHQ9IjEwLjYiLz4KCTxyZWN0IHg9IjQ2LjkiIHk9IjQ5IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSIxMC42Ii8+Cgk8cmVjdCB4PSI3MS41IiB5PSI0OSIgY2xhc3M9InN0MSIgd2lkdGg9IjIiIGhlaWdodD0iMTAuNiIvPgoJPHJlY3QgeD0iNzEuNSIgeT0iNzAuMiIgY2xhc3M9InN0MSIgd2lkdGg9IjIiIGhlaWdodD0iNi41Ii8+Cgk8cmVjdCB4PSI4My41IiB5PSI0OSIgY2xhc3M9InN0MSIgd2lkdGg9IjIiIGhlaWdodD0iMTAuNiIvPgoJPHJlY3QgeD0iODMuNSIgeT0iNzAuNyIgY2xhc3M9InN0MSIgd2lkdGg9IjIiIGhlaWdodD0iNS42Ii8+Cgk8cmVjdCB4PSIxMi44IiB5PSIyNiIgY2xhc3M9InN0MSIgd2lkdGg9IjI5LjUiIGhlaWdodD0iNi40Ii8+Cgk8cmVjdCB4PSIxMy4yIiB5PSI3MC40IiBjbGFzcz0ic3QyIiB3aWR0aD0iMjguOCIgaGVpZ2h0PSI2LjQiLz4KCTxyZWN0IHg9IjYxLjEiIHk9IjcwLjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIyOC44IiBoZWlnaHQ9IjYuNCIvPgoJPHJlY3QgeD0iNjAuNyIgeT0iMjYuMSIgY2xhc3M9InN0MSIgd2lkdGg9IjI5LjUiIGhlaWdodD0iNi40Ii8+Cgk8bGluZSBjbGFzcz0ic3QzIiB4MT0iMTIuOSIgeTE9Ijc3IiB4Mj0iMTIuOSIgeTI9Ijc2Ii8+Cgk8bGluZSBjbGFzcz0ic3Q0IiB4MT0iMTIuOSIgeTE9Ijc0IiB4Mj0iMTIuOSIgeTI9IjM1LjEiLz4KCTxsaW5lIGNsYXNzPSJzdDMiIHgxPSIxMi45IiB5MT0iMzQuMSIgeDI9IjEyLjkiIHkyPSIzMy4xIi8+Cgk8bGluZSBjbGFzcz0ic3QzIiB4MT0iNDIuMiIgeTE9Ijc3IiB4Mj0iNDIuMiIgeTI9Ijc2Ii8+Cgk8bGluZSBjbGFzcz0ic3Q0IiB4MT0iNDIuMiIgeTE9Ijc0IiB4Mj0iNDIuMiIgeTI9IjM1LjEiLz4KCTxsaW5lIGNsYXNzPSJzdDMiIHgxPSI0Mi4yIiB5MT0iMzQuMSIgeDI9IjQyLjIiIHkyPSIzMy4xIi8+Cgk8bGluZSBjbGFzcz0ic3QzIiB4MT0iNjAuOCIgeTE9Ijc3IiB4Mj0iNjAuOCIgeTI9Ijc2Ii8+Cgk8bGluZSBjbGFzcz0ic3Q0IiB4MT0iNjAuOCIgeTE9Ijc0IiB4Mj0iNjAuOCIgeTI9IjM1LjEiLz4KCTxsaW5lIGNsYXNzPSJzdDMiIHgxPSI2MC44IiB5MT0iMzQuMSIgeDI9IjYwLjgiIHkyPSIzMy4xIi8+Cgk8bGluZSBjbGFzcz0ic3QzIiB4MT0iOTAuMSIgeTE9Ijc3IiB4Mj0iOTAuMSIgeTI9Ijc2Ii8+Cgk8bGluZSBjbGFzcz0ic3Q0IiB4MT0iOTAuMSIgeTE9Ijc0IiB4Mj0iOTAuMSIgeTI9IjM1LjEiLz4KCTxsaW5lIGNsYXNzPSJzdDMiIHgxPSI5MC4xIiB5MT0iMzQuMSIgeDI9IjkwLjEiIHkyPSIzMy4xIi8+Cgk8cmVjdCB4PSIxMi45IiB5PSI0My41IiBjbGFzcz0ic3Q1IiB3aWR0aD0iNzcuMiIgaGVpZ2h0PSIxLjIiLz4KPC9nPgo8L3N2Zz4K"}}]);