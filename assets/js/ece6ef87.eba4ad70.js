"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[6853],{3905:(M,L,t)=>{t.d(L,{Zo:()=>n,kt:()=>A});var w=t(7294);function u(M,L,t){return L in M?Object.defineProperty(M,L,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[L]=t,M}function j(M,L){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(M);L&&(w=w.filter((function(L){return Object.getOwnPropertyDescriptor(M,L).enumerable}))),t.push.apply(t,w)}return t}function C(M){for(var L=1;L<arguments.length;L++){var t=null!=arguments[L]?arguments[L]:{};L%2?j(Object(t),!0).forEach((function(L){u(M,L,t[L])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(L){Object.defineProperty(M,L,Object.getOwnPropertyDescriptor(t,L))}))}return M}function e(M,L){if(null==M)return{};var t,w,u=function(M,L){if(null==M)return{};var t,w,u={},j=Object.keys(M);for(w=0;w<j.length;w++)t=j[w],L.indexOf(t)>=0||(u[t]=M[t]);return u}(M,L);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);for(w=0;w<j.length;w++)t=j[w],L.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(u[t]=M[t])}return u}var i=w.createContext({}),s=function(M){var L=w.useContext(i),t=L;return M&&(t="function"==typeof M?M(L):C(C({},L),M)),t},n=function(M){var L=s(M.components);return w.createElement(i.Provider,{value:L},M.children)},a={inlineCode:"code",wrapper:function(M){var L=M.children;return w.createElement(w.Fragment,{},L)}},o=w.forwardRef((function(M,L){var t=M.components,u=M.mdxType,j=M.originalType,i=M.parentName,n=e(M,["components","mdxType","originalType","parentName"]),o=s(t),A=u,r=o["".concat(i,".").concat(A)]||o[A]||a[A]||j;return t?w.createElement(r,C(C({ref:L},n),{},{components:t})):w.createElement(r,C({ref:L},n))}));function A(M,L){var t=arguments,u=L&&L.mdxType;if("string"==typeof M||u){var j=t.length,C=new Array(j);C[0]=o;var e={};for(var i in L)hasOwnProperty.call(L,i)&&(e[i]=L[i]);e.originalType=M,e.mdxType="string"==typeof M?M:u,C[1]=e;for(var s=2;s<j;s++)C[s]=t[s];return w.createElement.apply(null,C)}return w.createElement.apply(null,t)}o.displayName="MDXCreateElement"},780:(M,L,t)=>{t.r(L),t.d(L,{assets:()=>i,contentTitle:()=>C,default:()=>a,frontMatter:()=>j,metadata:()=>e,toc:()=>s});var w=t(7462),u=(t(7294),t(3905));const j={id:"gff-to-bed",title:"Convert GFF to BED",sidebar_label:"gff-to-bed"},C=void 0,e={unversionedId:"coordinate-manipulation/gff-to-bed",id:"coordinate-manipulation/gff-to-bed",title:"Convert GFF to BED",description:"gff-to-bed",source:"@site/docs/coordinate-manipulation/gff-to-bed.md",sourceDirName:"coordinate-manipulation",slug:"/coordinate-manipulation/gff-to-bed",permalink:"/scriptmanager-docs/docs/coordinate-manipulation/gff-to-bed",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1661543261,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{id:"gff-to-bed",title:"Convert GFF to BED",sidebar_label:"gff-to-bed"},sidebar:"toolSidebar",previous:{title:"BED to GFF",permalink:"/scriptmanager-docs/docs/coordinate-manipulation/bed-to-gff"},next:{title:"sort-bed",permalink:"/scriptmanager-docs/docs/coordinate-manipulation/sort-bed"}},i={},s=[{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3}],n={toc:s};function a(M){let{components:L,...j}=M;return(0,u.kt)("wrapper",(0,w.Z)({},n,j,{components:L,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"gff-to-bed",src:t(2618).Z,width:"103",height:"103"})),(0,u.kt)("p",null,"Converts GFF file format to BED file format"),(0,u.kt)("img",{src:t(2128).Z,style:{width:"70%"}}),(0,u.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,u.kt)("p",null,"Usage:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar coordinate-manipulation gff-to-bed [-hsV] [-o=<output>]\n<gffFile>\n")),(0,u.kt)("h3",{id:"positional-input"},"Positional Input"),(0,u.kt)("p",null,"This tool takes a single ",(0,u.kt)("a",{parentName:"p",href:"/docs/file-formats#gff"},"GFF file")," for input."),(0,u.kt)("h3",{id:"output-options"},"Output Options"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Option"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"-o, --output"),(0,u.kt)("td",{parentName:"tr",align:null},"specify output directory (default name will be same as original with .bed ext)")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"-s, --stdout"),(0,u.kt)("td",{parentName:"tr",align:null},"output bed to STDOUT")))))}a.isMDXComponent=!0},2128:(M,L,t)=>{t.d(L,{Z:()=>w});const w=t.p+"assets/images/GFFtoBEDWindow-44fd6752333599fb5b756cb37e25e3b1.png"},2618:(M,L,t)=>{t.d(L,{Z:()=>w});const w="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwNzA2MDY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0M3tmaWxsOiMwNzA2MDY7fQoJLnN0NHtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDV7ZmlsbDojMjMxODE1O30KPC9zdHlsZT4KPGcgaWQ9IkZvdXJfQ29sb3JfU2VxdWVuY2VfUGxvdCI+Cgk8cGF0aCBpZD0ic3F1YXJlIiBjbGFzcz0ic3QwIiBkPSJNOS4zLDEuNWg4NC40YzQuMywwLDcuOCwzLjUsNy44LDcuOHY4NC40YzAsNC4zLTMuNSw3LjgtNy44LDcuOEg5LjNjLTQuMywwLTcuOC0zLjUtNy44LTcuOFY5LjMKCQlDMS41LDUsNSwxLjUsOS4zLDEuNXoiLz4KPC9nPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDUuOCw2NC4zaC0yOGMtMS45LDAuMS0zLjYtMS41LTMuNi0zLjRjMC0wLjEsMC0wLjEsMC0wLjJjMC0xMi43LDAtMjUuMywwLTM4YzAtMC40LDAuMi0wLjcsMC40LTEKCWM0LjUtNC42LDkuMS05LjEsMTMuNy0xMy42YzAuMy0wLjMsMC43LTAuNiwxLTAuOWgyNC45YzAuMSwwLDAuMiwwLjEsMC4zLDAuMWMxLjYsMC40LDIuNiwxLjksMi42LDMuNWMwLDEwLjUsMCwyMSwwLDMxLjYiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTI5LjksOHYwLjhjMCwzLjMsMCw2LjUsMCw5LjhjMCwxLjktMSwzLjMtMi43LDMuN2MtMC40LDAuMS0wLjgsMC4xLTEuMywwLjFjLTMuMiwwLTYuNCwwLTkuNiwwaC0wLjciLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTg1LjksMzguN2MwLjEsMCwwLjIsMC4xLDAuMywwLjFjMS42LDAuNCwyLjYsMS45LDIuNiwzLjVjMCwxNi42LDAsMzMuMywwLDQ5LjljMC4xLDEuOS0xLjUsMy42LTMuNCwzLjYKCWMtMC4xLDAtMC4xLDAtMC4yLDBINDkuNWMtMS45LDAuMS0zLjYtMS41LTMuNi0zLjRjMC0wLjEsMC0wLjEsMC0wLjJjMC0xMi43LDAtMjUuMywwLTM4YzAtMC40LDAuMi0wLjcsMC40LTEKCWM0LjUtNC42LDkuMS05LjEsMTMuNy0xMy42YzAuMy0wLjMsMC43LTAuNiwxLTAuOUw4NS45LDM4Ljd6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02MS42LDM5LjV2MC44YzAsMy4zLDAsNi41LDAsOS44YzAsMS45LTEsMy4zLTIuNywzLjdjLTAuNCwwLjEtMC45LDAuMS0xLjMsMC4xYy0zLjIsMC02LjQsMC05LjYsMGgtMC43Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xOS43LDcyLjRjLTMuMyw1LjItMS43LDEyLjEsMy41LDE1LjRzMTIuMSwxLjcsMTUuNC0zLjVsMCwwIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iNDAuNiw5MC4xIDM5LjQsOTAuMyAzOC44LDg0LjMgMzIuOSw4NS4zIDMyLjcsODQuMSAzOS45LDgyLjggIi8+CjxnIGNsYXNzPSJzdDQiPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTUwLjksNjUuNWMwLTAuMiwwLjEtMC40LDAuNC0wLjRoNS40YzAuNSwwLDAuOSwwLjEsMS40LDAuM2MwLjQsMC4yLDAuOCwwLjQsMS4xLDAuOGMwLjMsMC4zLDAuNiwwLjcsMC44LDEuMQoJCWMwLjIsMC40LDAuMywwLjksMC4zLDEuNGMwLDAuNC0wLjEsMC44LTAuMiwxLjFjLTAuMSwwLjQtMC4zLDAuNy0wLjUsMC45YzAuNCwwLjQsMC43LDAuOCwwLjksMS4zYzAuMiwwLjUsMC40LDEsMC40LDEuNgoJCWMwLDAuNS0wLjEsMS0wLjMsMS40Yy0wLjIsMC40LTAuNSwwLjgtMC44LDEuMmMtMC4zLDAuMy0wLjcsMC42LTEuMSwwLjhjLTAuNCwwLjItMC45LDAuMy0xLjQsMC4zaC01LjljLTAuMiwwLTAuNC0wLjEtMC40LTAuNAoJCVY2NS41eiBNNTQsNjcuNlY3MGgxLjdjMC4yLDAsMC40LDAsMC41LTAuMWMwLjItMC4xLDAuMy0wLjEsMC40LTAuMmMwLjEtMC4xLDAuMi0wLjIsMC4zLTAuNHMwLjEtMC4zLDAuMS0wLjVjMC0wLjIsMC0wLjMtMC4xLTAuNQoJCWMtMC4xLTAuMS0wLjEtMC4zLTAuMy0wLjRjLTAuMS0wLjEtMC4yLTAuMi0wLjQtMC4zYy0wLjItMC4xLTAuMy0wLjEtMC41LTAuMUg1NHogTTU0LDcyLjJ2Mi43aDIuMmMwLjIsMCwwLjMsMCwwLjUtMC4xCgkJczAuMy0wLjIsMC40LTAuM2MwLjEtMC4xLDAuMi0wLjMsMC4zLTAuNGMwLjEtMC4yLDAuMS0wLjMsMC4xLTAuNWMwLTAuMiwwLTAuMy0wLjEtMC41Yy0wLjEtMC4yLTAuMi0wLjMtMC4zLTAuNAoJCWMtMC4xLTAuMS0wLjItMC4yLTAuNC0wLjNjLTAuMi0wLjEtMC4zLTAuMS0wLjUtMC4xSDU0eiIvPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTYyLjQsNjUuNWMwLTAuMiwwLjEtMC40LDAuNC0wLjRINzFjMC4yLDAsMC40LDAuMSwwLjQsMC40djIuMWMwLDAuMi0wLjEsMC40LTAuNCwwLjRoLTUuM3YyaDQuMQoJCWMwLjEsMCwwLjIsMCwwLjMsMC4xYzAuMSwwLjEsMC4xLDAuMiwwLjEsMC4zdjEuN2MwLDAuMi0wLjEsMC40LTAuNCwwLjRoLTQuMXYyLjFoNS41YzAuMiwwLDAuNCwwLjEsMC40LDAuNFY3NwoJCWMwLDAuMi0wLjEsMC40LTAuNCwwLjRoLTguM2MtMC4yLDAtMC40LTAuMS0wLjQtMC40VjY1LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNNzMuNCw2NS41YzAtMC4yLDAuMS0wLjQsMC40LTAuNEg3OGMwLjUsMCwxLDAuMSwxLjUsMC4yczEsMC4zLDEuNCwwLjZjMC40LDAuMywwLjksMC42LDEuMiwxCgkJYzAuNCwwLjQsMC43LDAuOCwxLDEuMmMwLjMsMC41LDAuNSwwLjksMC43LDEuNXMwLjIsMS4xLDAuMiwxLjZjMCwwLjUtMC4xLDEtMC4yLDEuNmMtMC4xLDAuNS0wLjMsMS0wLjYsMS40CgkJYy0wLjMsMC40LTAuNiwwLjktMC45LDEuMnMtMC44LDAuNy0xLjIsMWMtMC41LDAuMy0wLjksMC41LTEuNCwwLjZjLTAuNSwwLjItMS4xLDAuMi0xLjYsMC4yaC00LjNjLTAuMiwwLTAuNC0wLjEtMC40LTAuNFY2NS41egoJCSBNODAuNyw3MGMtMC4yLTAuNC0wLjQtMC43LTAuNy0xYy0wLjMtMC4zLTAuNi0wLjUtMS0wLjdjLTAuNC0wLjItMC44LTAuMy0xLjMtMC4zaC0xLjF2Ni40aDEuMWMwLjUsMCwwLjktMC4xLDEuMy0wLjMKCQljMC40LTAuMiwwLjctMC40LDEtMC43YzAuMy0wLjMsMC41LTAuNiwwLjctMWMwLjItMC40LDAuMi0wLjgsMC4yLTEuMkM4MC45LDcwLjgsODAuOCw3MC40LDgwLjcsNzB6Ii8+CjwvZz4KPGcgY2xhc3M9InN0NCI+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMjYuNiw0MS4zYzAuMiwwLDAuNC0wLjEsMC42LTAuMVYzOWMwLTAuMiwwLjEtMC40LDAuNC0wLjRoMi4zYzAuMSwwLDAuMSwwLDAuMiwwLjFjMC4xLDAsMC4xLDAuMSwwLjEsMC4zdjQKCQljMCwwLjEsMCwwLjIsMCwwLjJjMCwwLjEtMC4xLDAuMS0wLjIsMC4yYy0wLjUsMC4zLTEuMSwwLjYtMS44LDAuN2MtMC43LDAuMi0xLjQsMC4zLTIuMSwwLjNjLTAuOSwwLTEuNy0wLjItMi41LTAuNQoJCWMtMC44LTAuMy0xLjQtMC44LTItMS40Yy0wLjYtMC42LTEtMS4yLTEuNC0yYy0wLjMtMC44LTAuNS0xLjYtMC41LTIuNXMwLjItMS43LDAuNS0yLjRjMC4zLTAuOCwwLjgtMS40LDEuMy0yCgkJYzAuNi0wLjYsMS4yLTEsMi0xLjNzMS42LTAuNSwyLjQtMC41YzAuNywwLDEuNCwwLjEsMiwwLjNjMC42LDAuMiwxLjEsMC41LDEuNiwwLjhjMC4xLDAuMSwwLjEsMC4xLDAuMiwwLjJjMCwwLjEsMCwwLjItMC4xLDAuMgoJCWwtMS40LDEuOWMtMC4xLDAuMS0wLjEsMC4xLTAuMywwLjFjLTAuMSwwLTAuMiwwLTAuMi0wLjFjLTAuMy0wLjItMC41LTAuMy0wLjgtMC40Yy0wLjMtMC4xLTAuNi0wLjItMS0wLjJjLTAuNSwwLTAuOSwwLjEtMS4zLDAuMwoJCWMtMC40LDAuMi0wLjcsMC40LTEsMC43Yy0wLjMsMC4zLTAuNSwwLjYtMC42LDFjLTAuMSwwLjQtMC4yLDAuOC0wLjIsMS4zYzAsMC41LDAuMSwwLjksMC4yLDEuM3MwLjQsMC43LDAuNiwxCgkJYzAuMywwLjMsMC42LDAuNSwxLDAuN2MwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM0MyNi4yLDQxLjMsMjYuNCw0MS4zLDI2LjYsNDEuM3oiLz4KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0zMi42LDMyLjRjMC0wLjIsMC4xLTAuNCwwLjQtMC40aDcuOGMwLjIsMCwwLjQsMC4xLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMSwwLjQtMC40LDAuNGgtNXYyLjVoMy43CgkJYzAuMiwwLDAuNCwwLjEsMC40LDAuNHYyYzAsMC4yLTAuMSwwLjQtMC40LDAuNGgtMy43djMuOGMwLDAuMi0wLjEsMC40LTAuNCwwLjRoLTIuNWMtMC4yLDAtMC40LTAuMS0wLjQtMC40VjMyLjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNNDMuMiwzMi40YzAtMC4yLDAuMS0wLjQsMC40LTAuNGg3LjhjMC4yLDAsMC40LDAuMSwwLjQsMC40djIuMWMwLDAuMi0wLjEsMC40LTAuNCwwLjRoLTV2Mi41SDUwCgkJYzAuMiwwLDAuNCwwLjEsMC40LDAuNHYyYzAsMC4yLTAuMSwwLjQtMC40LDAuNGgtMy43djMuOGMwLDAuMi0wLjEsMC40LTAuNCwwLjRoLTIuNWMtMC4yLDAtMC40LTAuMS0wLjQtMC40VjMyLjR6Ii8+CjwvZz4KPC9zdmc+Cg=="}}]);