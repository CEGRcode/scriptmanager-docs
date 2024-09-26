"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[2994],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var i=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),I=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=I(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),p=I(a),c=n,u=p["".concat(o,".").concat(c)]||p[c]||s[c]||r;return a?i.createElement(u,l(l({ref:t},d),{},{components:a})):i.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[p]="string"==typeof e?e:n,l[1]=g;for(var I=2;I<r;I++)l[I]=a[I];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>g,toc:()=>I});var i=a(8168),n=(a(6540),a(5680));const r={id:"peak-align-ref",title:"Align BED to Reference",sidebar_label:"Align BED to Reference"},l=void 0,g={unversionedId:"Tools/peak-analysis/peak-align-ref",id:"Tools/peak-analysis/peak-align-ref",title:"Align BED to Reference",description:"peak-align-ref",source:"@site/docs/Tools/peak-analysis/peak-align-ref.md",sourceDirName:"Tools/peak-analysis",slug:"/Tools/peak-analysis/peak-align-ref",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/peak-align-ref",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1727374997,formattedLastUpdatedAt:"Sep 26, 2024",frontMatter:{id:"peak-align-ref",title:"Align BED to Reference",sidebar_label:"Align BED to Reference"},sidebar:"toolSidebar",previous:{title:"FRiX Calculator",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/frix-score"},next:{title:"Random Coordinate Generator",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/rand-coord"}},o={},I=[{value:"File Inputs",id:"file-inputs",level:2},{value:"Peak BED",id:"peak-bed",level:3},{value:"Reference BED",id:"reference-bed",level:3},{value:"Strand Output Options",id:"strand-output-options",level:2},{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Positional Input",id:"positional-input",level:3},{value:"Strand Options",id:"strand-options",level:3},{value:"Output Options",id:"output-options",level:3}],d={toc:I},p="wrapper";function s(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,i.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"peak-align-ref",src:a(5541).A,width:"103",height:"103"})),(0,n.yg)("p",null,"Align BED peaks to Reference BED file creating CDT files for heatmap generation."),(0,n.yg)("img",{src:a(2240).A,style:{width:"70%"}}),(0,n.yg)("p",null,'You can think of this like a "Tag Pileup" for annotations (BED) signal in place of the BAM signal that ',(0,n.yg)("a",{parentName:"p",href:"/docs/Tools/read-analysis/tag-pileup"},"Tag Pileup")," uses."),(0,n.yg)("h2",{id:"file-inputs"},"File Inputs"),(0,n.yg)("p",null,"This script expects both a Peak ",(0,n.yg)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#bed"},"BED file")," input and a Reference ",(0,n.yg)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#bed"},"BED file")," input."),(0,n.yg)("h3",{id:"peak-bed"},"Peak BED"),(0,n.yg)("p",null,'The "Peak BED" files are a set of genomic annotations that serve as the signal to positionally tally across each record in the "Reference BED" file. These are typically peaks, motif instances, genome annotation features, or any set of genomic regions that can be represented in the ',(0,n.yg)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#bed"},"BED format"),"."),(0,n.yg)("h3",{id:"reference-bed"},"Reference BED"),(0,n.yg)("p",null,'The "Reference BED" files are the set of genomic ranges/intervals to align the "Peaks" against.'),(0,n.yg)("h2",{id:"strand-output-options"},"Strand Output Options"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Combined Strand")," option combines peaks from the antisense and snese strand into a single output, creating a unified view of the aligned peaks."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Separated Strand")," option separates the peaks into antinsense and sense strands, providing a detailed analysis of strand-specifc peak distibutions and patterns."),(0,n.yg)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,n.yg)("p",null,"Usage:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar peak-analysis peak-align-ref [-hV] [--separate\n| --combined] [-o=<output>]\n<peakBED> <refBED>\n")),(0,n.yg)("h3",{id:"positional-input"},"Positional Input"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Input"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"<peakBED>")),(0,n.yg)("td",{parentName:"tr",align:null},"The BED peak file")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"<refBED>")),(0,n.yg)("td",{parentName:"tr",align:null},"The BED reference file")))),(0,n.yg)("h3",{id:"strand-options"},"Strand Options"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Option"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"--separate")),(0,n.yg)("td",{parentName:"tr",align:null},"select output strands as separate (default)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"--combined")),(0,n.yg)("td",{parentName:"tr",align:null},"select output strands as combined")))),(0,n.yg)("h3",{id:"output-options"},"Output Options"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Option"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,n.yg)("td",{parentName:"tr",align:null},"specify output file (default=",(0,n.yg)("inlineCode",{parentName:"td"},"<peakBED>_<refBED>_Output.cdt"),")")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"-z, --gzip")),(0,n.yg)("td",{parentName:"tr",align:null},"gzip output (default=false)")))))}s.isMDXComponent=!0},2240:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/BEDPeakAligntoRefWindow-9c9939eb07585debaa095677733d299e.png"},5541:(e,t,a)=>{a.d(t,{A:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzA3MDYwNjt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qze2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC43NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC43NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5OjUuMTEsNS4xMTt9Cgkuc3Q1e2ZpbGw6IzA0MDAwMDtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGcgaWQ9IkZvdXJfQ29sb3JfU2VxdWVuY2VfUGxvdCI+Cgk8cGF0aCBpZD0ic3F1YXJlIiBjbGFzcz0ic3QwIiBkPSJNOS4zLDEuNWg4NC40YzQuMywwLDcuOCwzLjUsNy44LDcuOHY4NC40YzAsNC4zLTMuNSw3LjgtNy44LDcuOEg5LjNjLTQuMywwLTcuOC0zLjUtNy44LTcuOFY5LjMKCQlDMS41LDUsNSwxLjUsOS4zLDEuNXoiLz4KPC9nPgo8ZyBpZD0iQkFNX3RvX2JlZGdyYXBoIj4KCTxyZWN0IHg9IjE4LjMiIHk9IjQ5IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSIxMC42Ii8+Cgk8cmVjdCB4PSIxOC4zIiB5PSI3MC43IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSI1LjYiLz4KCTxyZWN0IHg9IjI3LjMiIHk9IjcwLjQiIGNsYXNzPSJzdDEiIHdpZHRoPSIyIiBoZWlnaHQ9IjYuNCIvPgoJPHJlY3QgeD0iMjcuMyIgeT0iNDkiIGNsYXNzPSJzdDEiIHdpZHRoPSIyIiBoZWlnaHQ9IjEwLjYiLz4KCTxyZWN0IHg9IjQ2LjkiIHk9IjQ5IiBjbGFzcz0ic3QxIiB3aWR0aD0iMiIgaGVpZ2h0PSIxMC42Ii8+Cgk8cmVjdCB4PSI3MS41IiB5PSI0OSIgY2xhc3M9InN0MSIgd2lkdGg9IjIiIGhlaWdodD0iMTAuNiIvPgoJPHJlY3QgeD0iNzEuNSIgeT0iNzAuMiIgY2xhc3M9InN0MSIgd2lkdGg9IjIiIGhlaWdodD0iNi41Ii8+Cgk8cmVjdCB4PSI4My41IiB5PSI0OSIgY2xhc3M9InN0MSIgd2lkdGg9IjIiIGhlaWdodD0iMTAuNiIvPgoJPHJlY3QgeD0iODMuNSIgeT0iNzAuNyIgY2xhc3M9InN0MSIgd2lkdGg9IjIiIGhlaWdodD0iNS42Ii8+Cgk8cmVjdCB4PSIxMi44IiB5PSIyNiIgY2xhc3M9InN0MSIgd2lkdGg9IjI5LjUiIGhlaWdodD0iNi40Ii8+Cgk8cmVjdCB4PSIxMy4yIiB5PSI3MC40IiBjbGFzcz0ic3QyIiB3aWR0aD0iMjguOCIgaGVpZ2h0PSI2LjQiLz4KCTxyZWN0IHg9IjYxLjEiIHk9IjcwLjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIyOC44IiBoZWlnaHQ9IjYuNCIvPgoJPHJlY3QgeD0iNjAuNyIgeT0iMjYuMSIgY2xhc3M9InN0MSIgd2lkdGg9IjI5LjUiIGhlaWdodD0iNi40Ii8+Cgk8bGluZSBjbGFzcz0ic3QzIiB4MT0iMTIuOSIgeTE9Ijc3IiB4Mj0iMTIuOSIgeTI9Ijc2Ii8+Cgk8bGluZSBjbGFzcz0ic3Q0IiB4MT0iMTIuOSIgeTE9Ijc0IiB4Mj0iMTIuOSIgeTI9IjM1LjEiLz4KCTxsaW5lIGNsYXNzPSJzdDMiIHgxPSIxMi45IiB5MT0iMzQuMSIgeDI9IjEyLjkiIHkyPSIzMy4xIi8+Cgk8bGluZSBjbGFzcz0ic3QzIiB4MT0iNDIuMiIgeTE9Ijc3IiB4Mj0iNDIuMiIgeTI9Ijc2Ii8+Cgk8bGluZSBjbGFzcz0ic3Q0IiB4MT0iNDIuMiIgeTE9Ijc0IiB4Mj0iNDIuMiIgeTI9IjM1LjEiLz4KCTxsaW5lIGNsYXNzPSJzdDMiIHgxPSI0Mi4yIiB5MT0iMzQuMSIgeDI9IjQyLjIiIHkyPSIzMy4xIi8+Cgk8bGluZSBjbGFzcz0ic3QzIiB4MT0iNjAuOCIgeTE9Ijc3IiB4Mj0iNjAuOCIgeTI9Ijc2Ii8+Cgk8bGluZSBjbGFzcz0ic3Q0IiB4MT0iNjAuOCIgeTE9Ijc0IiB4Mj0iNjAuOCIgeTI9IjM1LjEiLz4KCTxsaW5lIGNsYXNzPSJzdDMiIHgxPSI2MC44IiB5MT0iMzQuMSIgeDI9IjYwLjgiIHkyPSIzMy4xIi8+Cgk8bGluZSBjbGFzcz0ic3QzIiB4MT0iOTAuMSIgeTE9Ijc3IiB4Mj0iOTAuMSIgeTI9Ijc2Ii8+Cgk8bGluZSBjbGFzcz0ic3Q0IiB4MT0iOTAuMSIgeTE9Ijc0IiB4Mj0iOTAuMSIgeTI9IjM1LjEiLz4KCTxsaW5lIGNsYXNzPSJzdDMiIHgxPSI5MC4xIiB5MT0iMzQuMSIgeDI9IjkwLjEiIHkyPSIzMy4xIi8+Cgk8cmVjdCB4PSIxMi45IiB5PSI0My41IiBjbGFzcz0ic3Q1IiB3aWR0aD0iNzcuMiIgaGVpZ2h0PSIxLjIiLz4KPC9nPgo8L3N2Zz4K"}}]);