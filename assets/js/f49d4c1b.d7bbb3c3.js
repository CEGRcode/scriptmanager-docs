"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[7144],{3905:(t,e,i)=>{i.d(e,{Zo:()=>s,kt:()=>d});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function M(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?M(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},M=Object.keys(t);for(n=0;n<M.length;n++)i=M[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(t);for(n=0;n<M.length;n++)i=M[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var L=n.createContext({}),u=function(t){var e=n.useContext(L),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},s=function(t){var e=u(t.components);return n.createElement(L.Provider,{value:e},t.children)},l="mdxType",j={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},w=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,M=t.originalType,L=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),l=u(i),w=a,d=l["".concat(L,".").concat(w)]||l[w]||j[w]||M;return i?n.createElement(d,r(r({ref:e},s),{},{components:i})):n.createElement(d,r({ref:e},s))}));function d(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var M=i.length,r=new Array(M);r[0]=w;var o={};for(var L in e)hasOwnProperty.call(e,L)&&(o[L]=e[L]);o.originalType=t,o[l]="string"==typeof t?t:a,r[1]=o;for(var u=2;u<M;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}w.displayName="MDXCreateElement"},6638:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>L,contentTitle:()=>r,default:()=>j,frontMatter:()=>M,metadata:()=>o,toc:()=>u});var n=i(7462),a=(i(7294),i(3905));const M={id:"sort-gff",title:"Sort GFF by CDT",sidebar_label:"sort-gff"},r=void 0,o={unversionedId:"Tools/coordinate-manipulation/sort-gff",id:"Tools/coordinate-manipulation/sort-gff",title:"Sort GFF by CDT",description:"sort-gff",source:"@site/docs/Tools/coordinate-manipulation/sort-gff.md",sourceDirName:"Tools/coordinate-manipulation",slug:"/Tools/coordinate-manipulation/sort-gff",permalink:"/scriptmanager-docs/docs/Tools/coordinate-manipulation/sort-gff",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1697064046,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"sort-gff",title:"Sort GFF by CDT",sidebar_label:"sort-gff"},sidebar:"toolSidebar",previous:{title:"sort-bed",permalink:"/scriptmanager-docs/docs/Tools/coordinate-manipulation/sort-bed"},next:{title:"Figure Generation",permalink:"/scriptmanager-docs/docs/Tools/figure-generation/"}},L={},u=[{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3},{value:"Sort Options",id:"sort-options",level:3}],s={toc:u},l="wrapper";function j(t){let{components:e,...M}=t;return(0,a.kt)(l,(0,n.Z)({},s,M,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sort-gff",src:i(93).Z,width:"103",height:"103"})),(0,a.kt)("p",null,"Sort a CDT file and its corresponding GFF file by the total score in the CDT file across the specified interval"),(0,a.kt)("img",{src:i(1280).Z,style:{width:"70%"}}),(0,a.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar coordinate-manipulation sort-gff [-hV] [-c=<center>]\n[-o=<outputBasename>] [-x=<index> <index>]... <gffFile> <cdtReference>\n")),(0,a.kt)("h3",{id:"positional-input"},"Positional Input"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<gffFile>")),(0,a.kt)("td",{parentName:"tr",align:null},"the GFF file to sort")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<cdtReference>")),(0,a.kt)("td",{parentName:"tr",align:null},"the reference ",(0,a.kt)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT")," file to sort the input by")))),(0,a.kt)("h3",{id:"output-options"},"Output Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-o, --output=<outputBasename>")),(0,a.kt)("td",{parentName:"tr",align:null},"specify output file basename (no .",(0,a.kt)("inlineCode",{parentName:"td"},"cdt"),"/",(0,a.kt)("inlineCode",{parentName:"td"},".gff")," extension, script will add that)")))),(0,a.kt)("h3",{id:"sort-options"},"Sort Options"),(0,a.kt)("p",null,"These options indicate which windows to sort the files by (choose one)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-c, --center=<center>")),(0,a.kt)("td",{parentName:"tr",align:null},"sort by center on the input size of expansion in bins (default=100)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-x, --index=<index> <index>")),(0,a.kt)("td",{parentName:"tr",align:null},"sort by index from the specified start to the specified stop (0-indexed and half-open interval)")))))}j.isMDXComponent=!0},1280:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/SortGFFWindow-b17f6f5d8adb10ecd95cb72ba00bf44d.png"},93:(t,e,i)=>{i.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0MntlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDN7ZmlsbDojMjMxODE1O30KCS5zdDR7ZmlsbDpub25lO3N0cm9rZTojMDcwNjA2O3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDV7ZmlsbDpub25lO3N0cm9rZTojMDcwNjA2O3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Q2e2ZpbGw6IzA3MDYwNjt9Cjwvc3R5bGU+CjxnIGlkPSJGb3VyX0NvbG9yX1NlcXVlbmNlX1Bsb3QiPgoJPHBhdGggaWQ9InNxdWFyZSIgY2xhc3M9InN0MCIgZD0iTTkuMywxLjVoODQuNGM0LjMsMCw3LjgsMy41LDcuOCw3Ljh2ODQuNGMwLDQuMy0zLjUsNy44LTcuOCw3LjhIOS4zYy00LjMsMC03LjgtMy41LTcuOC03LjhWOS4zCgkJQzEuNSw1LDUsMS41LDkuMywxLjV6Ii8+CjwvZz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUxLjUsMjIuN2MwLjEsMCwwLjIsMC4xLDAuMywwLjFjMS42LDAuNCwyLjYsMS45LDIuNiwzLjV2NDkuOWMwLjEsMS45LTEuNSwzLjYtMy40LDMuNmMtMC4xLDAtMC4xLDAtMC4yLDAKCUgxNS4xYy0xLjksMC4xLTMuNi0xLjUtMy42LTMuNGMwLTAuMSwwLTAuMSwwLTAuMmMwLTEyLjcsMC0yNS4zLDAtMzhjMC0wLjQsMC4yLTAuNywwLjQtMWM0LjUtNC42LDkuMS05LjEsMTMuNy0xMy42CgljMC4zLTAuMywwLjctMC42LDEtMC45SDUxLjV6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNy4yLDIzLjV2MC44YzAsMy4zLDAsNi41LDAsOS44YzAsMS45LTEsMy4zLTIuNywzLjdjLTAuNCwwLjEtMC45LDAuMS0xLjMsMC4xYy0zLjIsMC02LjQsMC05LjYsMGgtMC43Ii8+CjxnIGNsYXNzPSJzdDIiPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTIzLjksNTguNWMwLjIsMCwwLjQtMC4xLDAuNi0wLjF2LTIuMmMwLTAuMiwwLjEtMC40LDAuNC0wLjRoMi4zYzAuMSwwLDAuMSwwLDAuMiwwLjFjMC4xLDAsMC4xLDAuMSwwLjEsMC4zCgkJdjRjMCwwLjEsMCwwLjIsMCwwLjJjMCwwLjEtMC4xLDAuMS0wLjIsMC4yYy0wLjUsMC4zLTEuMSwwLjYtMS44LDAuN2MtMC43LDAuMi0xLjQsMC4zLTIuMSwwLjNjLTAuOSwwLTEuNy0wLjItMi41LTAuNQoJCWMtMC44LTAuMy0xLjQtMC44LTItMS40Yy0wLjYtMC42LTEtMS4yLTEuNC0yYy0wLjMtMC44LTAuNS0xLjYtMC41LTIuNXMwLjItMS43LDAuNS0yLjRjMC4zLTAuOCwwLjgtMS40LDEuMy0yCgkJYzAuNi0wLjYsMS4yLTEsMi0xLjNzMS42LTAuNSwyLjQtMC41YzAuNywwLDEuNCwwLjEsMiwwLjNjMC42LDAuMiwxLjEsMC41LDEuNiwwLjhjMC4xLDAuMSwwLjEsMC4xLDAuMiwwLjJjMCwwLjEsMCwwLjItMC4xLDAuMgoJCWwtMS40LDEuOWMtMC4xLDAuMS0wLjEsMC4xLTAuMywwLjFjLTAuMSwwLTAuMiwwLTAuMi0wLjFjLTAuMy0wLjItMC41LTAuMy0wLjgtMC40Yy0wLjMtMC4xLTAuNi0wLjItMS0wLjJjLTAuNSwwLTAuOSwwLjEtMS4zLDAuMwoJCWMtMC40LDAuMi0wLjcsMC40LTEsMC43Yy0wLjMsMC4zLTAuNSwwLjYtMC42LDFjLTAuMSwwLjQtMC4yLDAuOC0wLjIsMS4zYzAsMC41LDAuMSwwLjksMC4yLDEuM3MwLjQsMC43LDAuNiwxCgkJYzAuMywwLjMsMC42LDAuNSwxLDAuN2MwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM0MyMy41LDU4LjYsMjMuNyw1OC41LDIzLjksNTguNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yOS45LDQ5LjZjMC0wLjIsMC4xLTAuNCwwLjQtMC40aDcuOGMwLjIsMCwwLjQsMC4xLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMSwwLjQtMC40LDAuNGgtNXYyLjVoMy43CgkJYzAuMiwwLDAuNCwwLjEsMC40LDAuNHYyYzAsMC4yLTAuMSwwLjQtMC40LDAuNGgtMy43djMuOGMwLDAuMi0wLjEsMC40LTAuNCwwLjRoLTIuNWMtMC4yLDAtMC40LTAuMS0wLjQtMC40VjQ5LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNDAuNSw0OS42YzAtMC4yLDAuMS0wLjQsMC40LTAuNGg3LjhjMC4yLDAsMC40LDAuMSwwLjQsMC40djIuMWMwLDAuMi0wLjEsMC40LTAuNCwwLjRoLTV2Mi41aDMuNwoJCWMwLjIsMCwwLjQsMC4xLDAuNCwwLjR2MmMwLDAuMi0wLjEsMC40LTAuNCwwLjRoLTMuN3YzLjhjMCwwLjItMC4xLDAuNC0wLjQsMC40aC0yLjVjLTAuMiwwLTAuNC0wLjEtMC40LTAuNFY0OS42eiIvPgo8L2c+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI5MS41IiB5MT0iNDEuNCIgeDI9IjYwLjMiIHkyPSI0MS40Ii8+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI5MS41IiB5MT0iNDcuMiIgeDI9IjYwLjMiIHkyPSI0Ny4yIi8+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI5MS41IiB5MT0iNTMuMiIgeDI9IjYwLjMiIHkyPSI1My4yIi8+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI4Mi40IiB5MT0iNTkuMyIgeDI9IjYwLjMiIHkyPSI1OS4zIi8+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI4Mi40IiB5MT0iNjUuNCIgeDI9IjYwLjMiIHkyPSI2NS40Ii8+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI3Ny45IiB5MT0iNzEuNSIgeDI9IjYwLjMiIHkyPSI3MS41Ii8+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI3Ny45IiB5MT0iNzcuNiIgeDI9IjYwLjMiIHkyPSI3Ny42Ii8+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI5MS41IiB5MT0iMzUuNiIgeDI9IjYwLjMiIHkyPSIzNS42Ii8+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI5MS41IiB5MT0iMjkuOCIgeDI9IjYwLjMiIHkyPSIyOS44Ii8+CjxsaW5lIGNsYXNzPSJzdDQiIHgxPSI5MS41IiB5MT0iMjMuNyIgeDI9IjYwLjMiIHkyPSIyMy43Ii8+CjxsaW5lIGNsYXNzPSJzdDUiIHgxPSI4Ni45IiB5MT0iNTciIHgyPSI4Ni45IiB5Mj0iNzguNiIvPgo8cG9seWdvbiBjbGFzcz0ic3Q2IiBwb2ludHM9IjgwLjYsNzMuNCA4MS43LDcyLjMgODYuOSw3OCA5Mi4yLDcyLjMgOTMuMyw3My40IDg2LjksODAuMyAiLz4KPC9zdmc+Cg=="}}]);