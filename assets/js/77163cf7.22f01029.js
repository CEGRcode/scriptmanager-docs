"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[9324],{3905:(M,t,L)=>{L.d(t,{Zo:()=>C,kt:()=>r});var e=L(7294);function w(M,t,L){return t in M?Object.defineProperty(M,t,{value:L,enumerable:!0,configurable:!0,writable:!0}):M[t]=L,M}function u(M,t){var L=Object.keys(M);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(M);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(M,t).enumerable}))),L.push.apply(L,e)}return L}function i(M){for(var t=1;t<arguments.length;t++){var L=null!=arguments[t]?arguments[t]:{};t%2?u(Object(L),!0).forEach((function(t){w(M,t,L[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(L)):u(Object(L)).forEach((function(t){Object.defineProperty(M,t,Object.getOwnPropertyDescriptor(L,t))}))}return M}function s(M,t){if(null==M)return{};var L,e,w=function(M,t){if(null==M)return{};var L,e,w={},u=Object.keys(M);for(e=0;e<u.length;e++)L=u[e],t.indexOf(L)>=0||(w[L]=M[L]);return w}(M,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(e=0;e<u.length;e++)L=u[e],t.indexOf(L)>=0||Object.prototype.propertyIsEnumerable.call(M,L)&&(w[L]=M[L])}return w}var j=e.createContext({}),a=function(M){var t=e.useContext(j),L=t;return M&&(L="function"==typeof M?M(t):i(i({},t),M)),L},C=function(M){var t=a(M.components);return e.createElement(j.Provider,{value:t},M.children)},n="mdxType",c={inlineCode:"code",wrapper:function(M){var t=M.children;return e.createElement(e.Fragment,{},t)}},A=e.forwardRef((function(M,t){var L=M.components,w=M.mdxType,u=M.originalType,j=M.parentName,C=s(M,["components","mdxType","originalType","parentName"]),n=a(L),A=w,r=n["".concat(j,".").concat(A)]||n[A]||c[A]||u;return L?e.createElement(r,i(i({ref:t},C),{},{components:L})):e.createElement(r,i({ref:t},C))}));function r(M,t){var L=arguments,w=t&&t.mdxType;if("string"==typeof M||w){var u=L.length,i=new Array(u);i[0]=A;var s={};for(var j in t)hasOwnProperty.call(t,j)&&(s[j]=t[j]);s.originalType=M,s[n]="string"==typeof M?M:w,i[1]=s;for(var a=2;a<u;a++)i[a]=L[a];return e.createElement.apply(null,i)}return e.createElement.apply(null,L)}A.displayName="MDXCreateElement"},5727:(M,t,L)=>{L.r(t),L.d(t,{assets:()=>j,contentTitle:()=>i,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>a});var e=L(7462),w=(L(7294),L(3905));const u={id:"randomize-fasta",title:"Randomize FASTA",sidebar_label:"randomize-fasta"},i=void 0,s={unversionedId:"sequence-analysis/randomize-fasta",id:"sequence-analysis/randomize-fasta",title:"Randomize FASTA",description:"randomize-fasta",source:"@site/docs/sequence-analysis/randomize-fasta.md",sourceDirName:"sequence-analysis",slug:"/sequence-analysis/randomize-fasta",permalink:"/scriptmanager-docs/docs/sequence-analysis/randomize-fasta",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1674838098,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{id:"randomize-fasta",title:"Randomize FASTA",sidebar_label:"randomize-fasta"},sidebar:"toolSidebar",previous:{title:"fasta-extract",permalink:"/scriptmanager-docs/docs/sequence-analysis/fasta-extract"},next:{title:"search-motif",permalink:"/scriptmanager-docs/docs/sequence-analysis/search-motif"}},j={},a=[{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3}],C={toc:a},n="wrapper";function c(M){let{components:t,...u}=M;return(0,w.kt)(n,(0,e.Z)({},C,u,{components:t,mdxType:"MDXLayout"}),(0,w.kt)("p",null,(0,w.kt)("img",{alt:"randomize-fasta",src:L(8633).Z,width:"103",height:"103"})),(0,w.kt)("p",null,"Randomizes FASTA sequence for each input entry"),(0,w.kt)("img",{src:L(6533).Z,style:{width:"70%"}}),(0,w.kt)("p",null,"Usage:"),(0,w.kt)("pre",null,(0,w.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar sequence-analysis randomize-fasta [-hV] [-o=<output>]\n<fastaFile>\n")),(0,w.kt)("h3",{id:"positional-input"},"Positional Input"),(0,w.kt)("pre",null,(0,w.kt)("code",{parentName:"pre"},"  `<fastaFile>`         the FASTA file\n")),(0,w.kt)("h3",{id:"output-options"},"Output Options"),(0,w.kt)("table",null,(0,w.kt)("thead",{parentName:"table"},(0,w.kt)("tr",{parentName:"thead"},(0,w.kt)("th",{parentName:"tr",align:null},"Option"),(0,w.kt)("th",{parentName:"tr",align:null},"Description"))),(0,w.kt)("tbody",{parentName:"table"},(0,w.kt)("tr",{parentName:"tbody"},(0,w.kt)("td",{parentName:"tr",align:null},(0,w.kt)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,w.kt)("td",{parentName:"tr",align:null},"specify output directory (name will be same as original with .gff ext)")))))}c.isMDXComponent=!0},6533:(M,t,L)=>{L.d(t,{Z:()=>e});const e=L.p+"assets/images/RandomizeFASTAWindow-d877db50a3e5ed1d32a8d103f81b610b.png"},8633:(M,t,L)=>{L.d(t,{Z:()=>e});const e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0M3tmaWxsOiMyMzE4MTU7fQoJLnN0NHtmb250LWZhbWlseTonQ29jb2dvb3NlUHJvJzt9Cgkuc3Q1e2ZvbnQtc2l6ZToxMC4xNTYycHg7fQoJLnN0NntsZXR0ZXItc3BhY2luZzotMTt9Cgkuc3Q3e2ZvbnQtc2l6ZToxMi41cHg7fQoJLnN0OHtmaWxsOm5vbmU7c3Ryb2tlOiMwNzA2MDY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KPGcgaWQ9IkZvdXJfQ29sb3JfU2VxdWVuY2VfUGxvdCI+Cgk8cGF0aCBpZD0ic3F1YXJlIiBjbGFzcz0ic3QwIiBkPSJNOS4zLDEuNWg4NC40YzQuMywwLDcuOCwzLjUsNy44LDcuOHY4NC40YzAsNC4zLTMuNSw3LjgtNy44LDcuOEg5LjNjLTQuMywwLTcuOC0zLjUtNy44LTcuOFY5LjMKCQlDMS41LDUsNSwxLjUsOS4zLDEuNXoiLz4KPC9nPgo8cmVjdCB4PSIxNy44IiB5PSIzMC45IiBjbGFzcz0ic3QxIiB3aWR0aD0iNjgiIGhlaWdodD0iNTUuMSIvPgo8cmVjdCB4PSIxNy4yIiB5PSIxNi43IiBjbGFzcz0ic3QxIiB3aWR0aD0iNjgiIGhlaWdodD0iMTQuNCIvPgo8cG9seWxpbmUgY2xhc3M9InN0MiIgcG9pbnRzPSI4NS44LDg2LjMgMTcuOCw4Ni4zIDE3LjgsMTcuNSAiLz4KPHBvbHlsaW5lIGNsYXNzPSJzdDIiIHBvaW50cz0iMTcuOCwxNi43IDg1LjgsMTYuNyA4NS44LDg2LjMgIi8+CjxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxNy44IiB5MT0iMzEuMSIgeDI9Ijg1LjgiIHkyPSIzMS4xIi8+CjxwYXRoIGQ9Ik03Mi43LDIxLjZsLTAuNy0wLjdjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4zYzAtMC4yLDAuMi0wLjMsMC4zLTAuM2MwLjEsMCwwLjEsMCwwLjIsMC4xYzAsMCwwLDAsMC4xLDBsMS4yLDEuMgoJYzAuMSwwLjEsMC4yLDAuMywwLDAuNWMwLDAsMCwwLDAsMGwtMS4yLDEuMmMtMC4xLDAuMS0wLjMsMC4xLTAuNSwwYzAsMCwwLDAsMCwwYy0wLjEtMC4xLTAuMS0wLjMsMC0wLjVjMCwwLDAsMCwwLDBsMC43LTAuN2wwLDAKCWMtMC4zLDAtMC42LDAtMC45LDBjLTAuNSwwLTAuOSwwLjMtMS4xLDAuN2MtMC43LDAuOS0xLjMsMS45LTIsMi44Yy0wLjMsMC41LTAuOSwwLjktMS41LDFjLTAuMSwwLTAuMiwwLTAuMywwYy0wLjUsMC0xLjEsMC0xLjYsMAoJYy0wLjIsMC0wLjMtMC4xLTAuNC0wLjNjMC0wLjIsMC4xLTAuMywwLjMtMC40YzAsMCwwLDAsMC4xLDBoMS41YzAuNiwwLDEuMS0wLjMsMS40LTAuN2MwLjctMSwxLjQtMS45LDIuMS0yLjkKCWMwLjQtMC41LDEuMS0wLjgsMS43LTAuOEM3Mi4xLDIxLjYsNzIuNCwyMS42LDcyLjcsMjEuNnoiLz4KPHBhdGggZD0iTTcyLjcsMjYuN2MtMC4yLDAtMC40LDAtMC42LDBjLTAuNCwwLTAuOCwwLTEuMi0wLjJjLTAuMy0wLjItMC42LTAuNC0wLjktMC43Yy0wLjEtMC4yLTAuMi0wLjMtMC4zLTAuNWMwLDAsMC0wLjEsMC0wLjEKCWMwLjEtMC4yLDAuMi0wLjMsMC40LTAuNWMwLDAsMCwwLDAuMSwwLjFjMC4xLDAuMiwwLjMsMC40LDAuNCwwLjZjMC4zLDAuNCwwLjgsMC43LDEuMywwLjdjMC4zLDAsMC41LDAsMC44LDBMNzIuNiwyNmwtMC43LTAuNwoJYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuNGMwLjEtMC4xLDAuMi0wLjIsMC4zLTAuMmMwLjEsMCwwLjEsMCwwLjIsMC4xYzAuNCwwLjQsMC45LDAuOCwxLjMsMS4zYzAuMSwwLjEsMC4xLDAuMywwLDAuNGMwLDAsMCwwLDAsMAoJYy0wLjQsMC40LTAuOSwwLjktMS4zLDEuM2MtMC4xLDAuMS0wLjMsMC4xLTAuNCwwYzAsMCwwLDAsMCwwYy0wLjEtMC4xLTAuMS0wLjMsMC0wLjRjMCwwLDAsMCwwLDBMNzIuNywyNi43TDcyLjcsMjYuN3oiLz4KPHBhdGggZD0iTTY4LjUsMjMuNmMtMC4yLTAuMi0wLjMtMC40LTAuNS0wLjZjLTAuMy0wLjUtMC45LTAuOC0xLjQtMC43Yy0wLjUsMC0xLDAtMS41LDBjLTAuMiwwLTAuMy0wLjEtMC40LTAuMwoJYzAtMC4yLDAuMS0wLjMsMC4zLTAuNGMwLDAsMCwwLDAuMSwwYzAuNSwwLDEsMCwxLjUsMGMwLjcsMCwxLjQsMC4zLDEuOCwwLjljMC4xLDAuMiwwLjIsMC4zLDAuMywwLjVjMCwwLDAsMC4xLDAsMC4xCglDNjguOCwyMy4zLDY4LjYsMjMuNCw2OC41LDIzLjZ6Ii8+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjkuODg2NyAyNy45ODQ2KSIgY2xhc3M9InN0MyBzdDQgc3Q1IHN0NiI+RjwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzNS40MTAyIDI3Ljk4NDYpIiBjbGFzcz0ic3QzIHN0NCBzdDUiPkE8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNDIuOTY4OCAyNy45ODQ2KSIgY2xhc3M9InN0MyBzdDQgc3Q1Ij5TPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQ5LjYzMjggMjcuOTg0NikiIGNsYXNzPSJzdDMgc3Q0IHN0NSBzdDYiPlQ8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNTUuMTI4OSAyNy45ODQ2KSIgY2xhc3M9InN0MyBzdDQgc3Q1Ij5BPC90ZXh0Pgo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNDcuMSw0NC43bC0wLjYsMC45YzAsMC4xLTAuMSwwLjEtMC4yLDAuMWMtMC4xLDAtMC4xLDAtMC4yLTAuMWMtMC4yLTAuMS0wLjQtMC4zLTAuNi0wLjMKCWMtMC4yLTAuMS0wLjUtMC4xLTAuOC0wLjFjLTAuMywwLTAuNywwLjEtMSwwLjJjLTAuMywwLjEtMC41LDAuMy0wLjgsMC41Yy0wLjIsMC4yLTAuNCwwLjUtMC41LDAuOGMtMC4xLDAuMy0wLjIsMC42LTAuMiwxCgljMCwwLjMsMC4xLDAuNywwLjIsMWMwLjIsMC42LDAuNywxLjEsMS4yLDEuM2MwLjMsMC4xLDAuNiwwLjIsMC45LDAuMmMwLjEsMCwwLjMsMCwwLjQsMGMwLjEsMCwwLjMsMCwwLjQtMC4xdi0xLjcKCWMwLTAuMSwwLjEtMC4zLDAuMi0wLjNjMCwwLDAsMCwwLjEsMGgxLjdjMC4xLDAsMC4xLDAsMC4yLDBjMC4xLDAsMC4xLDAuMSwwLjEsMC4ydjNjMCwwLjEsMCwwLjEsMCwwLjJjMCwwLjEtMC4xLDAuMS0wLjEsMC4xCgljLTAuNCwwLjMtMC45LDAuNS0xLjMsMC42Yy0wLjUsMC4xLTEuMSwwLjItMS42LDAuMmMtMC42LDAtMS4zLTAuMS0xLjktMC40Yy0wLjYtMC4yLTEuMS0wLjYtMS41LTFjLTAuNC0wLjQtMC44LTEtMS0xLjUKCWMtMC41LTEuMi0wLjUtMi41LDAtMy43YzAuMi0wLjQsMC40LTAuOCwwLjYtMS4xIi8+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNzAuNTM5MSA2MC42Nzk5KSIgY2xhc3M9InN0MyBzdDQgc3Q3Ij5HPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0Ljk1MzEgNjAuNjc5OSkiIGNsYXNzPSJzdDMgc3Q0IHN0NyI+QzwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzOS4yNjk1IDY4LjcxNSkiIGNsYXNzPSJzdDMgc3Q0IHN0NyI+QTwvdGV4dD4KPHBhdGggY2xhc3M9InN0MyIgZD0iTTU2LjcsNjguN2wyLTVjMC4xLTAuMiwwLjItMC4zLDAuNC0wLjNoMS41YzAuMiwwLDAuMywwLjEsMC40LDAuM2wyLDUgTTYwLjYsNjguN2wtMC44LTIuM0w1OSw2OC43IE01OSw2OC43CgloMS42Ii8+CjxyZWN0IHg9IjM3LjQiIHk9IjQ1LjMiIGNsYXNzPSJzdDgiIHdpZHRoPSIxMi45IiBoZWlnaHQ9IjIyLjkiLz4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAyNC4xNjggNjAuNjc5OSkiIGNsYXNzPSJzdDMgc3Q0IHN0NyI+VDwvdGV4dD4KPHBhdGggY2xhc3M9InN0MyIgZD0iTTc0LjgsNjguN3YtMy4xaC0yLjJjLTAuMSwwLTAuMy0wLjEtMC4zLTAuMmMwLDAsMCwwLDAtMC4xdi0xLjZjMC0wLjEsMC4xLTAuMywwLjItMC4zYzAsMCwwLDAsMC4xLDBoNi44CgljMC4xLDAsMC4zLDAuMSwwLjMsMC4yYzAsMCwwLDAsMCwwLjF2MS42YzAsMC4xLTAuMSwwLjMtMC4yLDAuM2MwLDAsMCwwLTAuMSwwaC0yLjJ2My4xIi8+CjxyZWN0IHg9IjIxLjYiIHk9IjQ1LjMiIGNsYXNzPSJzdDgiIHdpZHRoPSIxMi45IiBoZWlnaHQ9IjIyLjkiLz4KPHJlY3QgeD0iNTMuMiIgeT0iNDUuMyIgY2xhc3M9InN0OCIgd2lkdGg9IjEyLjkiIGhlaWdodD0iMjIuOSIvPgo8cmVjdCB4PSI2OS4xIiB5PSI0NS4zIiBjbGFzcz0ic3Q4IiB3aWR0aD0iMTIuOSIgaGVpZ2h0PSIyMi45Ii8+Cjwvc3ZnPgo="}}]);