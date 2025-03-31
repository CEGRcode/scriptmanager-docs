"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[6629],{604:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/TileGenomeWindow-fea277b0bd1ccff72b67cce23d7bd612.png"},3739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(8168),i=(n(6540),n(5680));const r={id:"tile-genome",title:"Genomic Coordinate Tile",sidebar_label:"Genomic Coordinate Tile"},l=void 0,o={unversionedId:"Tools/peak-analysis/tile-genome",id:"Tools/peak-analysis/tile-genome",title:"Genomic Coordinate Tile",description:"tile-genome",source:"@site/docs/Tools/peak-analysis/tile-genome.md",sourceDirName:"Tools/peak-analysis",slug:"/Tools/peak-analysis/tile-genome",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/tile-genome",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1724193973,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{id:"tile-genome",title:"Genomic Coordinate Tile",sidebar_label:"Genomic Coordinate Tile"},sidebar:"toolSidebar",previous:{title:"sort-by-dist",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/sort-by-dist"},next:{title:"Read Analysis",permalink:"/scriptmanager-docs/docs/Tools/read-analysis/"}},g={},d=[{value:"Select Genome",id:"select-genome",level:3},{value:"Calculation Options",id:"calculation-options",level:3},{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Output Options",id:"output-options",level:3}],p={toc:d},c="wrapper";function s(e){let{components:t,...r}=e;return(0,i.yg)(c,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"tile-genome",src:n(9657).A,width:"103",height:"103"})),(0,i.yg)("p",null,"Generate a coordinate file that tiles (non-overlapping) across an entire genome."),(0,i.yg)("img",{src:n(604).A,style:{width:"70%"}}),(0,i.yg)("h3",{id:"select-genome"},"Select Genome"),(0,i.yg)("p",null,"Select a reference genome from the provided dropdown menu. The user can customize the window size generated by the tool."),(0,i.yg)("h3",{id:"calculation-options"},"Calculation Options"),(0,i.yg)("p",null,"The 'Window Size' defines the length of each random genomic region in base paris (bp)."),(0,i.yg)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,i.yg)("p",null,"Usage:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar peak-analysis tile-genome [-fhV] [-o=<output>]\n[-w=<window>] <genome>\n")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Input"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"<genome>")),(0,i.yg)("td",{parentName:"tr",align:null},"reference genome ","[",(0,i.yg)("inlineCode",{parentName:"td"},"sacCer3"),"/",(0,i.yg)("inlineCode",{parentName:"td"},"sacCer3_cegr"),"/",(0,i.yg)("inlineCode",{parentName:"td"},"hg38"),"/",(0,i.yg)("inlineCode",{parentName:"td"},"hg38_contigs"),"/",(0,i.yg)("inlineCode",{parentName:"td"},"hg19"),"/",(0,i.yg)("inlineCode",{parentName:"td"},"hg19_contigs"),"/",(0,i.yg)("inlineCode",{parentName:"td"},"mm10"),"]")))),(0,i.yg)("h3",{id:"output-options"},"Output Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,i.yg)("td",{parentName:"tr",align:null},"specify output directory (name will be ",(0,i.yg)("inlineCode",{parentName:"td"},"genome_tiles_<genome>_<window>bp.<ext>"),")")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"-z, --gzip")),(0,i.yg)("td",{parentName:"tr",align:null},"gzip output (default=false)")))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"-f, --gff")),(0,i.yg)("td",{parentName:"tr",align:null},"file format output as GFF (default format as BED)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"-w, --window=<window>")),(0,i.yg)("td",{parentName:"tr",align:null},"window size in bp (default=200)")))))}s.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=a.createContext({}),d=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(g.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,y=c["".concat(g,".").concat(m)]||c[m]||s[m]||r;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9657:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6Izg4ODk4ODt9Cgkuc3Qye2ZpbGw6IzA0MDAwMDt9Cjwvc3R5bGU+CjxnIGlkPSJGb3VyX0NvbG9yX1NlcXVlbmNlX1Bsb3QiPgoJPHBhdGggaWQ9InNxdWFyZSIgY2xhc3M9InN0MCIgZD0iTTkuMywxLjVoODQuNGM0LjMsMCw3LjgsMy41LDcuOCw3Ljh2ODQuNGMwLDQuMy0zLjUsNy44LTcuOCw3LjhIOS4zYy00LjMsMC03LjgtMy41LTcuOC03LjhWOS4zCgkJQzEuNSw1LDUsMS41LDkuMywxLjV6Ii8+CjwvZz4KPGcgaWQ9InRleHQiPgoJPHJlY3QgeD0iOS44IiB5PSIzMi44IiBjbGFzcz0ic3QxIiB3aWR0aD0iODMuNCIgaGVpZ2h0PSI1LjYiLz4KCTxyZWN0IHg9IjkuOCIgeT0iNDMuOCIgY2xhc3M9InN0MiIgd2lkdGg9IjE0LjkiIGhlaWdodD0iNCIvPgoJPHJlY3QgeD0iMjYuMyIgeT0iNDMuOCIgY2xhc3M9InN0MiIgd2lkdGg9IjE0LjkiIGhlaWdodD0iNCIvPgoJPHJlY3QgeD0iNDIuOCIgeT0iNDMuOCIgY2xhc3M9InN0MiIgd2lkdGg9IjE0LjkiIGhlaWdodD0iNCIvPgoJPHJlY3QgeD0iNTkuNCIgeT0iNDMuOCIgY2xhc3M9InN0MiIgd2lkdGg9IjE0LjkiIGhlaWdodD0iNCIvPgoJPHJlY3QgeD0iNzUuOCIgeT0iNDMuOCIgY2xhc3M9InN0MiIgd2lkdGg9IjE0LjkiIGhlaWdodD0iNCIvPgoJPHJlY3QgeD0iOS44IiB5PSI2Ni4xIiBjbGFzcz0ic3QyIiB3aWR0aD0iMTQuOSIgaGVpZ2h0PSI0Ii8+Cgk8cmVjdCB4PSIyNi4zIiB5PSI2Ni4xIiBjbGFzcz0ic3QyIiB3aWR0aD0iMTQuOSIgaGVpZ2h0PSI0Ii8+Cgk8cmVjdCB4PSI0Mi44IiB5PSI2Ni4xIiBjbGFzcz0ic3QyIiB3aWR0aD0iMTQuOSIgaGVpZ2h0PSI0Ii8+Cgk8cmVjdCB4PSI1OS40IiB5PSI2Ni4xIiBjbGFzcz0ic3QyIiB3aWR0aD0iMTQuOSIgaGVpZ2h0PSI0Ii8+Cgk8cmVjdCB4PSI5LjgiIHk9IjU1LjUiIGNsYXNzPSJzdDEiIHdpZHRoPSI4My40IiBoZWlnaHQ9IjUuNiIvPgo8L2c+Cjwvc3ZnPgo="}}]);