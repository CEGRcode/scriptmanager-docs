"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[7624],{3905:(e,t,I)=>{I.d(t,{Zo:()=>M,kt:()=>N});var i=I(7294);function a(e,t,I){return t in e?Object.defineProperty(e,t,{value:I,enumerable:!0,configurable:!0,writable:!0}):e[t]=I,e}function n(e,t){var I=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),I.push.apply(I,i)}return I}function c(e){for(var t=1;t<arguments.length;t++){var I=null!=arguments[t]?arguments[t]:{};t%2?n(Object(I),!0).forEach((function(t){a(e,t,I[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(I)):n(Object(I)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(I,t))}))}return e}function g(e,t){if(null==e)return{};var I,i,a=function(e,t){if(null==e)return{};var I,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)I=n[i],t.indexOf(I)>=0||(a[I]=e[I]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)I=n[i],t.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(e,I)&&(a[I]=e[I])}return a}var r=i.createContext({}),l=function(e){var t=i.useContext(r),I=t;return e&&(I="function"==typeof e?e(t):c(c({},t),e)),I},M=function(e){var t=l(e.components);return i.createElement(r.Provider,{value:t},e.children)},d="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},z=i.forwardRef((function(e,t){var I=e.components,a=e.mdxType,n=e.originalType,r=e.parentName,M=g(e,["components","mdxType","originalType","parentName"]),d=l(I),z=a,N=d["".concat(r,".").concat(z)]||d[z]||o[z]||n;return I?i.createElement(N,c(c({ref:t},M),{},{components:I})):i.createElement(N,c({ref:t},M))}));function N(e,t){var I=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=I.length,c=new Array(n);c[0]=z;var g={};for(var r in t)hasOwnProperty.call(t,r)&&(g[r]=t[r]);g.originalType=e,g[d]="string"==typeof e?e:a,c[1]=g;for(var l=2;l<n;l++)c[l]=I[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,I)}z.displayName="MDXCreateElement"},5104:(e,t,I)=>{I.r(t),I.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>n,metadata:()=>g,toc:()=>l});var i=I(7462),a=(I(7294),I(3905));const n={id:"fasta-extract",title:"Extract FASTA",sidebar_label:"fasta-extract"},c=void 0,g={unversionedId:"sequence-analysis/fasta-extract",id:"sequence-analysis/fasta-extract",title:"Extract FASTA",description:"fasta-extract",source:"@site/docs/sequence-analysis/fasta-extract.md",sourceDirName:"sequence-analysis",slug:"/sequence-analysis/fasta-extract",permalink:"/scriptmanager-docs/docs/sequence-analysis/fasta-extract",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1674838098,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{id:"fasta-extract",title:"Extract FASTA",sidebar_label:"fasta-extract"},sidebar:"toolSidebar",previous:{title:"aggregate-data",permalink:"/scriptmanager-docs/docs/read-analysis/aggregate-data"},next:{title:"randomize-fasta",permalink:"/scriptmanager-docs/docs/sequence-analysis/randomize-fasta"}},r={},l=[{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3},{value:"Extract Options",id:"extract-options",level:3}],M={toc:l},d="wrapper";function o(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fasta-extract",src:I(7847).Z,width:"103",height:"103"})),(0,a.kt)("p",null,"Generate FASTA file from indexed Genome FASTA file and BED file. Script will generate FAI index if not present in Genome FASTA folder."),(0,a.kt)("img",{src:I(1733).Z,style:{width:"70%"}}),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar sequence-analysis fasta-extract [-cfhV] [-o=<output>]\n<genomeFile> <bedFile>\n")),(0,a.kt)("h3",{id:"positional-input"},"Positional Input"),(0,a.kt)("p",null,"The first positional input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  `<genomeFile>`        reference genome FASTA file\n  `<bedFile>`           the BED file of sequences to extract\n")),(0,a.kt)("h3",{id:"output-options"},"Output Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,a.kt)("td",{parentName:"tr",align:null},"Specify output file")))),(0,a.kt)("h3",{id:"extract-options"},"Extract Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-c, --coord-header")),(0,a.kt)("td",{parentName:"tr",align:null},"use genome coordinate for output FASTA header (default is to use bed file headers)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-f, --force")),(0,a.kt)("td",{parentName:"tr",align:null},"force-strandedness (default)")))))}o.isMDXComponent=!0},1733:(e,t,I)=>{I.d(t,{Z:()=>i});const i=I.p+"assets/images/FASTAExtractWindow-dfab325b4884c2a4f824d43300cac0ef.png"},7847:(e,t,I)=>{I.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzA3MDYwNjt9Cgkuc3Qye2ZpbGw6IzIzMTgxNTt9Cgkuc3Qze2ZvbnQtZmFtaWx5OidDb2NvZ29vc2VQcm8nO30KCS5zdDR7Zm9udC1zaXplOjcuODc1cHg7fQoJLnN0NXtmaWxsOm5vbmU7c3Ryb2tlOiMwNzA2MDY7c3Ryb2tlLXdpZHRoOjAuNzU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0NntmaWxsOm5vbmU7c3Ryb2tlOiMwNzA2MDY7c3Ryb2tlLXdpZHRoOjAuNzU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTo0Ljg4LDQuODg7fQo8L3N0eWxlPgo8ZyBpZD0iRm91cl9Db2xvcl9TZXF1ZW5jZV9QbG90Ij4KCTxwYXRoIGlkPSJzcXVhcmUiIGNsYXNzPSJzdDAiIGQ9Ik05LjMsMS41aDg0LjRjNC4zLDAsNy44LDMuNSw3LjgsNy44djg0LjRjMCw0LjMtMy41LDcuOC03LjgsNy44SDkuM2MtNC4zLDAtNy44LTMuNS03LjgtNy44VjkuMwoJCUMxLjUsNSw1LDEuNSw5LjMsMS41eiIvPgo8L2c+CjxyZWN0IHg9IjEyIiB5PSIzNy42IiBjbGFzcz0ic3QxIiB3aWR0aD0iMTUuMyIgaGVpZ2h0PSIzLjgiLz4KPHJlY3QgeD0iMzIuOCIgeT0iMzcuNiIgY2xhc3M9InN0MSIgd2lkdGg9IjIwLjgiIGhlaWdodD0iMy44Ii8+CjxyZWN0IHg9IjYzLjQiIHk9IjM3LjYiIGNsYXNzPSJzdDEiIHdpZHRoPSIyMS4zIiBoZWlnaHQ9IjMuOCIvPgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDYuNjIxMSAyOC4zOTA4KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5BPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDExLjg2NzIgMjguMzkwOCkiIGNsYXNzPSJzdDIgc3QzIHN0NCI+VDwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAxNi42MjExIDI4LjM5MDgpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPkM8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjEuNzU3OCAyOC4zOTA4KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5DPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDI3LjMwNDcgMjguMzkwOCkiIGNsYXNzPSJzdDIgc3QzIHN0NCI+QTwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzMi44Nzg5IDI4LjM5MDgpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPkM8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMzguNDI1OCAyOC4zOTA4KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5UPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQzLjE3OTcgMjguMzkwOCkiIGNsYXNzPSJzdDIgc3QzIHN0NCI+Q0M8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNTMuNDUzMSAyOC4zOTA4KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5DPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU5IDI4LjM5MDgpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPlQ8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNjMuMjYxNyAyOC4zOTA4KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5BPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDY4LjgzOTggMjguMzkwOCkiIGNsYXNzPSJzdDIgc3QzIHN0NCI+Q0M8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNzkuMTEzMyAyOC4zOTA4KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5DPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDg0LjY1NjIgMjguMzkwOCkiIGNsYXNzPSJzdDIgc3QzIHN0NCI+VDwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA4OS40MTQxIDI4LjM5MDgpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPkM8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMTIuMTY4IDc4LjQ0MTYpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPlQ8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMTYuOTIxOSA3OC40NDE2KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5DPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIyLjA1ODYgNzguNDQxNikiIGNsYXNzPSJzdDIgc3QzIHN0NCI+QzwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzMi42NjAyIDc4LjQ0MTYpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPkM8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMzguMjA3IDc4LjQ0MTYpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPlQ8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNDIuOTYwOSA3OC40NDE2KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5DPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQ4LjA5NzcgNzguNDQxNikiIGNsYXNzPSJzdDIgc3QzIHN0NCI+QzwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA2My4xMTcyIDc4LjY5NTUpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPkE8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNjguNjkxNCA3OC42OTU1KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5DQzwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA3OC45NjQ4IDc4LjY5NTUpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPkM8L3RleHQ+CjxsaW5lIGNsYXNzPSJzdDUiIHgxPSIxMi40IiB5MT0iNzEiIHgyPSIxMi40IiB5Mj0iNzAuMSIvPgo8bGluZSBjbGFzcz0ic3Q2IiB4MT0iMTIuNCIgeTE9IjY4LjIiIHgyPSIxMi40IiB5Mj0iMzEiLz4KPGxpbmUgY2xhc3M9InN0NSIgeDE9IjEyLjQiIHkxPSIzMCIgeDI9IjEyLjQiIHkyPSIyOS4xIi8+CjxsaW5lIGNsYXNzPSJzdDUiIHgxPSIyNyIgeTE9IjcxIiB4Mj0iMjciIHkyPSI3MC4xIi8+CjxsaW5lIGNsYXNzPSJzdDYiIHgxPSIyNyIgeTE9IjY4LjIiIHgyPSIyNyIgeTI9IjMxIi8+CjxsaW5lIGNsYXNzPSJzdDUiIHgxPSIyNyIgeTE9IjMwIiB4Mj0iMjciIHkyPSIyOS4xIi8+CjxsaW5lIGNsYXNzPSJzdDUiIHgxPSIzMy4yIiB5MT0iNzEiIHgyPSIzMy4yIiB5Mj0iNzAuMSIvPgo8bGluZSBjbGFzcz0ic3Q2IiB4MT0iMzMuMiIgeTE9IjY4LjIiIHgyPSIzMy4yIiB5Mj0iMzEiLz4KPGxpbmUgY2xhc3M9InN0NSIgeDE9IjMzLjIiIHkxPSIzMCIgeDI9IjMzLjIiIHkyPSIyOS4xIi8+CjxsaW5lIGNsYXNzPSJzdDUiIHgxPSI2My44IiB5MT0iNzEiIHgyPSI2My44IiB5Mj0iNzAuMSIvPgo8bGluZSBjbGFzcz0ic3Q2IiB4MT0iNjMuOCIgeTE9IjY4LjIiIHgyPSI2My44IiB5Mj0iMzEiLz4KPGxpbmUgY2xhc3M9InN0NSIgeDE9IjYzLjgiIHkxPSIzMCIgeDI9IjYzLjgiIHkyPSIyOS4xIi8+CjxsaW5lIGNsYXNzPSJzdDUiIHgxPSI1My4zIiB5MT0iNzEiIHgyPSI1My4zIiB5Mj0iNzAuMSIvPgo8bGluZSBjbGFzcz0ic3Q2IiB4MT0iNTMuMyIgeTE9IjY4LjIiIHgyPSI1My4zIiB5Mj0iMzEiLz4KPGxpbmUgY2xhc3M9InN0NSIgeDE9IjUzLjMiIHkxPSIzMCIgeDI9IjUzLjMiIHkyPSIyOS4xIi8+CjxsaW5lIGNsYXNzPSJzdDUiIHgxPSI4NC40IiB5MT0iNzEiIHgyPSI4NC40IiB5Mj0iNzAuMSIvPgo8bGluZSBjbGFzcz0ic3Q2IiB4MT0iODQuNCIgeTE9IjY4LjIiIHgyPSI4NC40IiB5Mj0iMzEiLz4KPGxpbmUgY2xhc3M9InN0NSIgeDE9Ijg0LjQiIHkxPSIzMCIgeDI9Ijg0LjQiIHkyPSIyOS4xIi8+Cjwvc3ZnPgo="}}]);