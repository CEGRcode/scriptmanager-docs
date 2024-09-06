"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[18],{5680:(M,t,e)=>{e.d(t,{xA:()=>j,yg:()=>l});var L=e(6540);function w(M,t,e){return t in M?Object.defineProperty(M,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):M[t]=e,M}function a(M,t){var e=Object.keys(M);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(M);t&&(L=L.filter((function(t){return Object.getOwnPropertyDescriptor(M,t).enumerable}))),e.push.apply(e,L)}return e}function i(M){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){w(M,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(M,t,Object.getOwnPropertyDescriptor(e,t))}))}return M}function s(M,t){if(null==M)return{};var e,L,w=function(M,t){if(null==M)return{};var e,L,w={},a=Object.keys(M);for(L=0;L<a.length;L++)e=a[L],t.indexOf(e)>=0||(w[e]=M[e]);return w}(M,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(M);for(L=0;L<a.length;L++)e=a[L],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(M,e)&&(w[e]=M[e])}return w}var n=L.createContext({}),u=function(M){var t=L.useContext(n),e=t;return M&&(e="function"==typeof M?M(t):i(i({},t),M)),e},j=function(M){var t=u(M.components);return L.createElement(n.Provider,{value:t},M.children)},C="mdxType",r={inlineCode:"code",wrapper:function(M){var t=M.children;return L.createElement(L.Fragment,{},t)}},o=L.forwardRef((function(M,t){var e=M.components,w=M.mdxType,a=M.originalType,n=M.parentName,j=s(M,["components","mdxType","originalType","parentName"]),C=u(e),o=w,l=C["".concat(n,".").concat(o)]||C[o]||r[o]||a;return e?L.createElement(l,i(i({ref:t},j),{},{components:e})):L.createElement(l,i({ref:t},j))}));function l(M,t){var e=arguments,w=t&&t.mdxType;if("string"==typeof M||w){var a=e.length,i=new Array(a);i[0]=o;var s={};for(var n in t)hasOwnProperty.call(t,n)&&(s[n]=t[n]);s.originalType=M,s[C]="string"==typeof M?M:w,i[1]=s;for(var u=2;u<a;u++)i[u]=e[u];return L.createElement.apply(null,i)}return L.createElement.apply(null,e)}o.displayName="MDXCreateElement"},3436:(M,t,e)=>{e.r(t),e.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>r,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var L=e(8168),w=(e(6540),e(5680));const a={id:"randomize-fasta",title:"Randomize FASTA",sidebar_label:"randomize-fasta"},i=void 0,s={unversionedId:"Tools/sequence-analysis/randomize-fasta",id:"Tools/sequence-analysis/randomize-fasta",title:"Randomize FASTA",description:"randomize-fasta",source:"@site/docs/Tools/sequence-analysis/randomize-fasta.md",sourceDirName:"Tools/sequence-analysis",slug:"/Tools/sequence-analysis/randomize-fasta",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/randomize-fasta",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1724193973,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{id:"randomize-fasta",title:"Randomize FASTA",sidebar_label:"randomize-fasta"},sidebar:"toolSidebar",previous:{title:"fasta-extract",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/fasta-extract"},next:{title:"search-motif",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/search-motif"}},n={},u=[{value:"File inputs (FASTA)",id:"file-inputs-fasta",level:3},{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3}],j={toc:u},C="wrapper";function r(M){let{components:t,...a}=M;return(0,w.yg)(C,(0,L.A)({},j,a,{components:t,mdxType:"MDXLayout"}),(0,w.yg)("p",null,(0,w.yg)("img",{alt:"randomize-fasta",src:e(4730).A,width:"103",height:"103"})),(0,w.yg)("p",null,"Randomizes FASTA sequence for each input entry"),(0,w.yg)("img",{src:e(5873).A,style:{width:"70%"}}),(0,w.yg)("h3",{id:"file-inputs-fasta"},"File inputs (FASTA)"),(0,w.yg)("p",null,"Each input FASTA-formatted set of sequences has an average shape score series calculated for it. Because the shape score is a series corresponding to the bp position, the FASTA sequences input should be positionally linked to some feature and of the same length."),(0,w.yg)("h1",{id:"command-line-interface"},"Command Line Interface"),(0,w.yg)("p",null,"Usage:"),(0,w.yg)("pre",null,(0,w.yg)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar sequence-analysis randomize-fasta [-hV] [-o=<output>]\n<fastaFile>\n")),(0,w.yg)("h3",{id:"positional-input"},"Positional Input"),(0,w.yg)("table",null,(0,w.yg)("thead",{parentName:"table"},(0,w.yg)("tr",{parentName:"thead"},(0,w.yg)("th",{parentName:"tr",align:null},"Option"),(0,w.yg)("th",{parentName:"tr",align:null},"Description"))),(0,w.yg)("tbody",{parentName:"table"},(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"<fastaFile>")),(0,w.yg)("td",{parentName:"tr",align:null},"reference genome FASTA file")))),(0,w.yg)("h3",{id:"output-options"},"Output Options"),(0,w.yg)("table",null,(0,w.yg)("thead",{parentName:"table"},(0,w.yg)("tr",{parentName:"thead"},(0,w.yg)("th",{parentName:"tr",align:null},"Option"),(0,w.yg)("th",{parentName:"tr",align:null},"Description"))),(0,w.yg)("tbody",{parentName:"table"},(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,w.yg)("td",{parentName:"tr",align:null},"specify output directory (name will be same as original with .gff ext)")),(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-z, --gzip")),(0,w.yg)("td",{parentName:"tr",align:null},"gzip output (default=false)")))))}r.isMDXComponent=!0},5873:(M,t,e)=>{e.d(t,{A:()=>L});const L=e.p+"assets/images/RandomizeFASTAWindow-c0ebfd6e5f74199121d8f66e5b411001.png"},4730:(M,t,e)=>{e.d(t,{A:()=>L});const L="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0M3tmaWxsOiMyMzE4MTU7fQoJLnN0NHtmb250LWZhbWlseTonQ29jb2dvb3NlUHJvJzt9Cgkuc3Q1e2ZvbnQtc2l6ZToxMC4xNTYycHg7fQoJLnN0NntsZXR0ZXItc3BhY2luZzotMTt9Cgkuc3Q3e2ZvbnQtc2l6ZToxMi41cHg7fQoJLnN0OHtmaWxsOm5vbmU7c3Ryb2tlOiMwNzA2MDY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KPGcgaWQ9IkZvdXJfQ29sb3JfU2VxdWVuY2VfUGxvdCI+Cgk8cGF0aCBpZD0ic3F1YXJlIiBjbGFzcz0ic3QwIiBkPSJNOS4zLDEuNWg4NC40YzQuMywwLDcuOCwzLjUsNy44LDcuOHY4NC40YzAsNC4zLTMuNSw3LjgtNy44LDcuOEg5LjNjLTQuMywwLTcuOC0zLjUtNy44LTcuOFY5LjMKCQlDMS41LDUsNSwxLjUsOS4zLDEuNXoiLz4KPC9nPgo8cmVjdCB4PSIxNy44IiB5PSIzMC45IiBjbGFzcz0ic3QxIiB3aWR0aD0iNjgiIGhlaWdodD0iNTUuMSIvPgo8cmVjdCB4PSIxNy4yIiB5PSIxNi43IiBjbGFzcz0ic3QxIiB3aWR0aD0iNjgiIGhlaWdodD0iMTQuNCIvPgo8cG9seWxpbmUgY2xhc3M9InN0MiIgcG9pbnRzPSI4NS44LDg2LjMgMTcuOCw4Ni4zIDE3LjgsMTcuNSAiLz4KPHBvbHlsaW5lIGNsYXNzPSJzdDIiIHBvaW50cz0iMTcuOCwxNi43IDg1LjgsMTYuNyA4NS44LDg2LjMgIi8+CjxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxNy44IiB5MT0iMzEuMSIgeDI9Ijg1LjgiIHkyPSIzMS4xIi8+CjxwYXRoIGQ9Ik03Mi43LDIxLjZsLTAuNy0wLjdjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4zYzAtMC4yLDAuMi0wLjMsMC4zLTAuM2MwLjEsMCwwLjEsMCwwLjIsMC4xYzAsMCwwLDAsMC4xLDBsMS4yLDEuMgoJYzAuMSwwLjEsMC4yLDAuMywwLDAuNWMwLDAsMCwwLDAsMGwtMS4yLDEuMmMtMC4xLDAuMS0wLjMsMC4xLTAuNSwwYzAsMCwwLDAsMCwwYy0wLjEtMC4xLTAuMS0wLjMsMC0wLjVjMCwwLDAsMCwwLDBsMC43LTAuN2wwLDAKCWMtMC4zLDAtMC42LDAtMC45LDBjLTAuNSwwLTAuOSwwLjMtMS4xLDAuN2MtMC43LDAuOS0xLjMsMS45LTIsMi44Yy0wLjMsMC41LTAuOSwwLjktMS41LDFjLTAuMSwwLTAuMiwwLTAuMywwYy0wLjUsMC0xLjEsMC0xLjYsMAoJYy0wLjIsMC0wLjMtMC4xLTAuNC0wLjNjMC0wLjIsMC4xLTAuMywwLjMtMC40YzAsMCwwLDAsMC4xLDBoMS41YzAuNiwwLDEuMS0wLjMsMS40LTAuN2MwLjctMSwxLjQtMS45LDIuMS0yLjkKCWMwLjQtMC41LDEuMS0wLjgsMS43LTAuOEM3Mi4xLDIxLjYsNzIuNCwyMS42LDcyLjcsMjEuNnoiLz4KPHBhdGggZD0iTTcyLjcsMjYuN2MtMC4yLDAtMC40LDAtMC42LDBjLTAuNCwwLTAuOCwwLTEuMi0wLjJjLTAuMy0wLjItMC42LTAuNC0wLjktMC43Yy0wLjEtMC4yLTAuMi0wLjMtMC4zLTAuNWMwLDAsMC0wLjEsMC0wLjEKCWMwLjEtMC4yLDAuMi0wLjMsMC40LTAuNWMwLDAsMCwwLDAuMSwwLjFjMC4xLDAuMiwwLjMsMC40LDAuNCwwLjZjMC4zLDAuNCwwLjgsMC43LDEuMywwLjdjMC4zLDAsMC41LDAsMC44LDBMNzIuNiwyNmwtMC43LTAuNwoJYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuNGMwLjEtMC4xLDAuMi0wLjIsMC4zLTAuMmMwLjEsMCwwLjEsMCwwLjIsMC4xYzAuNCwwLjQsMC45LDAuOCwxLjMsMS4zYzAuMSwwLjEsMC4xLDAuMywwLDAuNGMwLDAsMCwwLDAsMAoJYy0wLjQsMC40LTAuOSwwLjktMS4zLDEuM2MtMC4xLDAuMS0wLjMsMC4xLTAuNCwwYzAsMCwwLDAsMCwwYy0wLjEtMC4xLTAuMS0wLjMsMC0wLjRjMCwwLDAsMCwwLDBMNzIuNywyNi43TDcyLjcsMjYuN3oiLz4KPHBhdGggZD0iTTY4LjUsMjMuNmMtMC4yLTAuMi0wLjMtMC40LTAuNS0wLjZjLTAuMy0wLjUtMC45LTAuOC0xLjQtMC43Yy0wLjUsMC0xLDAtMS41LDBjLTAuMiwwLTAuMy0wLjEtMC40LTAuMwoJYzAtMC4yLDAuMS0wLjMsMC4zLTAuNGMwLDAsMCwwLDAuMSwwYzAuNSwwLDEsMCwxLjUsMGMwLjcsMCwxLjQsMC4zLDEuOCwwLjljMC4xLDAuMiwwLjIsMC4zLDAuMywwLjVjMCwwLDAsMC4xLDAsMC4xCglDNjguOCwyMy4zLDY4LjYsMjMuNCw2OC41LDIzLjZ6Ii8+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjkuODg2NyAyNy45ODQ2KSIgY2xhc3M9InN0MyBzdDQgc3Q1IHN0NiI+RjwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzNS40MTAyIDI3Ljk4NDYpIiBjbGFzcz0ic3QzIHN0NCBzdDUiPkE8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNDIuOTY4OCAyNy45ODQ2KSIgY2xhc3M9InN0MyBzdDQgc3Q1Ij5TPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQ5LjYzMjggMjcuOTg0NikiIGNsYXNzPSJzdDMgc3Q0IHN0NSBzdDYiPlQ8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNTUuMTI4OSAyNy45ODQ2KSIgY2xhc3M9InN0MyBzdDQgc3Q1Ij5BPC90ZXh0Pgo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNDcuMSw0NC43bC0wLjYsMC45YzAsMC4xLTAuMSwwLjEtMC4yLDAuMWMtMC4xLDAtMC4xLDAtMC4yLTAuMWMtMC4yLTAuMS0wLjQtMC4zLTAuNi0wLjMKCWMtMC4yLTAuMS0wLjUtMC4xLTAuOC0wLjFjLTAuMywwLTAuNywwLjEtMSwwLjJjLTAuMywwLjEtMC41LDAuMy0wLjgsMC41Yy0wLjIsMC4yLTAuNCwwLjUtMC41LDAuOGMtMC4xLDAuMy0wLjIsMC42LTAuMiwxCgljMCwwLjMsMC4xLDAuNywwLjIsMWMwLjIsMC42LDAuNywxLjEsMS4yLDEuM2MwLjMsMC4xLDAuNiwwLjIsMC45LDAuMmMwLjEsMCwwLjMsMCwwLjQsMGMwLjEsMCwwLjMsMCwwLjQtMC4xdi0xLjcKCWMwLTAuMSwwLjEtMC4zLDAuMi0wLjNjMCwwLDAsMCwwLjEsMGgxLjdjMC4xLDAsMC4xLDAsMC4yLDBjMC4xLDAsMC4xLDAuMSwwLjEsMC4ydjNjMCwwLjEsMCwwLjEsMCwwLjJjMCwwLjEtMC4xLDAuMS0wLjEsMC4xCgljLTAuNCwwLjMtMC45LDAuNS0xLjMsMC42Yy0wLjUsMC4xLTEuMSwwLjItMS42LDAuMmMtMC42LDAtMS4zLTAuMS0xLjktMC40Yy0wLjYtMC4yLTEuMS0wLjYtMS41LTFjLTAuNC0wLjQtMC44LTEtMS0xLjUKCWMtMC41LTEuMi0wLjUtMi41LDAtMy43YzAuMi0wLjQsMC40LTAuOCwwLjYtMS4xIi8+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNzAuNTM5MSA2MC42Nzk5KSIgY2xhc3M9InN0MyBzdDQgc3Q3Ij5HPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0Ljk1MzEgNjAuNjc5OSkiIGNsYXNzPSJzdDMgc3Q0IHN0NyI+QzwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzOS4yNjk1IDY4LjcxNSkiIGNsYXNzPSJzdDMgc3Q0IHN0NyI+QTwvdGV4dD4KPHBhdGggY2xhc3M9InN0MyIgZD0iTTU2LjcsNjguN2wyLTVjMC4xLTAuMiwwLjItMC4zLDAuNC0wLjNoMS41YzAuMiwwLDAuMywwLjEsMC40LDAuM2wyLDUgTTYwLjYsNjguN2wtMC44LTIuM0w1OSw2OC43IE01OSw2OC43CgloMS42Ii8+CjxyZWN0IHg9IjM3LjQiIHk9IjQ1LjMiIGNsYXNzPSJzdDgiIHdpZHRoPSIxMi45IiBoZWlnaHQ9IjIyLjkiLz4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAyNC4xNjggNjAuNjc5OSkiIGNsYXNzPSJzdDMgc3Q0IHN0NyI+VDwvdGV4dD4KPHBhdGggY2xhc3M9InN0MyIgZD0iTTc0LjgsNjguN3YtMy4xaC0yLjJjLTAuMSwwLTAuMy0wLjEtMC4zLTAuMmMwLDAsMCwwLDAtMC4xdi0xLjZjMC0wLjEsMC4xLTAuMywwLjItMC4zYzAsMCwwLDAsMC4xLDBoNi44CgljMC4xLDAsMC4zLDAuMSwwLjMsMC4yYzAsMCwwLDAsMCwwLjF2MS42YzAsMC4xLTAuMSwwLjMtMC4yLDAuM2MwLDAsMCwwLTAuMSwwaC0yLjJ2My4xIi8+CjxyZWN0IHg9IjIxLjYiIHk9IjQ1LjMiIGNsYXNzPSJzdDgiIHdpZHRoPSIxMi45IiBoZWlnaHQ9IjIyLjkiLz4KPHJlY3QgeD0iNTMuMiIgeT0iNDUuMyIgY2xhc3M9InN0OCIgd2lkdGg9IjEyLjkiIGhlaWdodD0iMjIuOSIvPgo8cmVjdCB4PSI2OS4xIiB5PSI0NS4zIiBjbGFzcz0ic3Q4IiB3aWR0aD0iMTIuOSIgaGVpZ2h0PSIyMi45Ii8+Cjwvc3ZnPgo="}}]);