"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[9751],{3905:(M,L,w)=>{w.d(L,{Zo:()=>a,kt:()=>l});var t=w(7294);function C(M,L,w){return L in M?Object.defineProperty(M,L,{value:w,enumerable:!0,configurable:!0,writable:!0}):M[L]=w,M}function j(M,L){var w=Object.keys(M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);L&&(t=t.filter((function(L){return Object.getOwnPropertyDescriptor(M,L).enumerable}))),w.push.apply(w,t)}return w}function u(M){for(var L=1;L<arguments.length;L++){var w=null!=arguments[L]?arguments[L]:{};L%2?j(Object(w),!0).forEach((function(L){C(M,L,w[L])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(w)):j(Object(w)).forEach((function(L){Object.defineProperty(M,L,Object.getOwnPropertyDescriptor(w,L))}))}return M}function s(M,L){if(null==M)return{};var w,t,C=function(M,L){if(null==M)return{};var w,t,C={},j=Object.keys(M);for(t=0;t<j.length;t++)w=j[t],L.indexOf(w)>=0||(C[w]=M[w]);return C}(M,L);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);for(t=0;t<j.length;t++)w=j[t],L.indexOf(w)>=0||Object.prototype.propertyIsEnumerable.call(M,w)&&(C[w]=M[w])}return C}var e=t.createContext({}),i=function(M){var L=t.useContext(e),w=L;return M&&(w="function"==typeof M?M(L):u(u({},L),M)),w},a=function(M){var L=i(M.components);return t.createElement(e.Provider,{value:L},M.children)},A="mdxType",n={inlineCode:"code",wrapper:function(M){var L=M.children;return t.createElement(t.Fragment,{},L)}},D=t.forwardRef((function(M,L){var w=M.components,C=M.mdxType,j=M.originalType,e=M.parentName,a=s(M,["components","mdxType","originalType","parentName"]),A=i(w),D=C,l=A["".concat(e,".").concat(D)]||A[D]||n[D]||j;return w?t.createElement(l,u(u({ref:L},a),{},{components:w})):t.createElement(l,u({ref:L},a))}));function l(M,L){var w=arguments,C=L&&L.mdxType;if("string"==typeof M||C){var j=w.length,u=new Array(j);u[0]=D;var s={};for(var e in L)hasOwnProperty.call(L,e)&&(s[e]=L[e]);s.originalType=M,s[A]="string"==typeof M?M:C,u[1]=s;for(var i=2;i<j;i++)u[i]=w[i];return t.createElement.apply(null,u)}return t.createElement.apply(null,w)}D.displayName="MDXCreateElement"},9592:(M,L,w)=>{w.r(L),w.d(L,{assets:()=>e,contentTitle:()=>u,default:()=>n,frontMatter:()=>j,metadata:()=>s,toc:()=>i});var t=w(7462),C=(w(7294),w(3905));const j={id:"scaling-factor",title:"Scaling Factor",sidebar_label:"scaling-factor"},u=void 0,s={unversionedId:"read-analysis/scaling-factor",id:"read-analysis/scaling-factor",title:"Scaling Factor",description:"scaling-factor",source:"@site/docs/read-analysis/scaling-factor.md",sourceDirName:"read-analysis",slug:"/read-analysis/scaling-factor",permalink:"/scriptmanager-docs/docs/read-analysis/scaling-factor",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1674838098,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{id:"scaling-factor",title:"Scaling Factor",sidebar_label:"scaling-factor"},sidebar:"toolSidebar",previous:{title:"tag-pileup",permalink:"/scriptmanager-docs/docs/read-analysis/tag-pileup"},next:{title:"scale-matrix",permalink:"/scriptmanager-docs/docs/read-analysis/scale-matrix"}},e={},i=[{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Positional Input",id:"positional-input",level:2},{value:"Output Options",id:"output-options",level:3},{value:"Scale Options",id:"scale-options",level:3}],a={toc:i},A="wrapper";function n(M){let{components:L,...j}=M;return(0,C.kt)(A,(0,t.Z)({},a,j,{components:L,mdxType:"MDXLayout"}),(0,C.kt)("p",null,(0,C.kt)("img",{alt:"scaling-factor",src:w(4887).Z,width:"103",height:"103"})),(0,C.kt)("p",null,"Calculate the factor as either total tag normalization or normalization of ChIP-seq data with control (PMID:22883957)"),(0,C.kt)("img",{src:w(950).Z,style:{width:"70%"}}),(0,C.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,C.kt)("p",null,"Usage:"),(0,C.kt)("pre",null,(0,C.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar read-analysis scaling-factor [-t | -n | -b] [-hV]\n[-c=<controlBAM>] [-f=<blacklistFilter>] [-m=<minFrac>]\n[-o=<outputBasename>] [-w=<window>] <bamFile>\n")),(0,C.kt)("table",null,(0,C.kt)("thead",{parentName:"table"},(0,C.kt)("tr",{parentName:"thead"},(0,C.kt)("th",{parentName:"tr",align:null},"Option"),(0,C.kt)("th",{parentName:"tr",align:null},"Description"))),(0,C.kt)("tbody",{parentName:"table"},(0,C.kt)("tr",{parentName:"tbody"},(0,C.kt)("td",{parentName:"tr",align:null},(0,C.kt)("inlineCode",{parentName:"td"},"-f, --blacklist=<blacklistFilter>")),(0,C.kt)("td",{parentName:"tr",align:null},"specify blacklist file to filter by")),(0,C.kt)("tr",{parentName:"tbody"},(0,C.kt)("td",{parentName:"tr",align:null},(0,C.kt)("inlineCode",{parentName:"td"},"-c, --control=<controlBAM>")),(0,C.kt)("td",{parentName:"tr",align:null},"control BAM file")),(0,C.kt)("tr",{parentName:"tbody"},(0,C.kt)("td",{parentName:"tr",align:null},(0,C.kt)("inlineCode",{parentName:"td"},"-w, --window-size=<window>")),(0,C.kt)("td",{parentName:"tr",align:null},"window size for NCIS-related scaling types (default=500)")),(0,C.kt)("tr",{parentName:"tbody"},(0,C.kt)("td",{parentName:"tr",align:null},(0,C.kt)("inlineCode",{parentName:"td"},"-m, --min-fraction=<minFrac>")),(0,C.kt)("td",{parentName:"tr",align:null},"minimum fraction for NCIS-related scaling types (default=0.75)")))),(0,C.kt)("h2",{id:"positional-input"},"Positional Input"),(0,C.kt)("p",null,"This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed."),(0,C.kt)("h3",{id:"output-options"},"Output Options"),(0,C.kt)("table",null,(0,C.kt)("thead",{parentName:"table"},(0,C.kt)("tr",{parentName:"thead"},(0,C.kt)("th",{parentName:"tr",align:null},"Option"),(0,C.kt)("th",{parentName:"tr",align:null},"Description"))),(0,C.kt)("tbody",{parentName:"table"},(0,C.kt)("tr",{parentName:"tbody"},(0,C.kt)("td",{parentName:"tr",align:null},(0,C.kt)("inlineCode",{parentName:"td"},"-o, --output=<outputBasename>")),(0,C.kt)("td",{parentName:"tr",align:null},"specify output file for composite values")))),(0,C.kt)("h3",{id:"scale-options"},"Scale Options"),(0,C.kt)("table",null,(0,C.kt)("thead",{parentName:"table"},(0,C.kt)("tr",{parentName:"thead"},(0,C.kt)("th",{parentName:"tr",align:null},"Option"),(0,C.kt)("th",{parentName:"tr",align:null},"Description"))),(0,C.kt)("tbody",{parentName:"table"},(0,C.kt)("tr",{parentName:"tbody"},(0,C.kt)("td",{parentName:"tr",align:null},(0,C.kt)("inlineCode",{parentName:"td"},"-t, --total-tag")),(0,C.kt)("td",{parentName:"tr",align:null},"total tag scaling (default)")),(0,C.kt)("tr",{parentName:"tbody"},(0,C.kt)("td",{parentName:"tr",align:null},(0,C.kt)("inlineCode",{parentName:"td"},"-n, --ncis")),(0,C.kt)("td",{parentName:"tr",align:null},"ncis normalization with window size in bp and unitless minimum fraction (default-size=500, default-fraction=0.75)")),(0,C.kt)("tr",{parentName:"tbody"},(0,C.kt)("td",{parentName:"tr",align:null},(0,C.kt)("inlineCode",{parentName:"td"},"-b, --both")),(0,C.kt)("td",{parentName:"tr",align:null},"ncis with total tag (default-size=500, default-fraction=0.75)")))),(0,C.kt)("p",null,(0,C.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/22883957/"},"Liang & Keles (BMC Bioinf 2012)")))}n.isMDXComponent=!0},950:(M,L,w)=>{w.d(L,{Z:()=>t});const t=w.p+"assets/images/ScalingFactorWindow-8c9cca9a2cc39ac2d21d41c1cc8ace60.png"},4887:(M,L,w)=>{w.d(L,{Z:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzIzMTgxNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qye2ZpbGw6IzIzMTgxNTt9Cgkuc3Qze2ZvbnQtZmFtaWx5OidDb2NvZ29vc2VQcm8nO30KCS5zdDR7Zm9udC1zaXplOjEzLjAzOTFweDt9Cgkuc3Q1e2ZvbnQtc2l6ZTo5LjM3NXB4O30KCS5zdDZ7ZmlsbDpub25lO3N0cm9rZTojMjIxRTFGO3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGcgaWQ9IkZvdXJfQ29sb3JfU2VxdWVuY2VfUGxvdCI+Cgk8cGF0aCBpZD0ic3F1YXJlIiBjbGFzcz0ic3QwIiBkPSJNOS4zLDEuNWg4NC40YzQuMywwLDcuOCwzLjUsNy44LDcuOHY4NC40YzAsNC4zLTMuNSw3LjgtNy44LDcuOEg5LjNjLTQuMywwLTcuOC0zLjUtNy44LTcuOFY5LjMKCQlDMS41LDUsNSwxLjUsOS4zLDEuNXoiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMzIuOSIgeTE9IjM3LjciIHgyPSIzNyIgeTI9IjQxLjgiLz4KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjM3IiB5MT0iMzcuNyIgeDI9IjMyLjgiIHkyPSI0MS44Ii8+CjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIzMi45IiB5MT0iNjYuNyIgeDI9IjM3IiB5Mj0iNzAuOCIvPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMzciIHkxPSI2Ni44IiB4Mj0iMzIuOCIgeTI9IjcwLjkiLz4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzOS42ODc1IDQ0LjA0NzEpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPk48L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNDAuNDUzMSA3MS45NDk0KSIgY2xhc3M9InN0MiBzdDMgc3Q1Ij5OPC90ZXh0Pgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTQsMzcuNGg3Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01NCw0MC40aDciLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTU0LDY3LjNoNyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTQsNzAuNGg3Ii8+CjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik00LjEsNDEuNmMwLjEsMCwyLDAsMi42LDBjMC4xLDAsMC4yLDAsMC4zLDBjMC4yLDAsMC41LTAuMSwwLjctMC4zYzAuNC0wLjMsMC42LTAuNiwwLjktMQoJYzAuMy0wLjUsMC41LTEsMC43LTEuNWMwLjItMC40LDAuMy0wLjgsMC41LTEuNWMwLjItMC42LDAuMy0xLDAuNC0xLjZjMC4xLTAuNCwwLjItMC42LDAuMy0xLjFjMC4xLTAuNCwwLjMtMC45LDAuNS0xLjMKCWMwLjEtMC4xLDAuMS0wLjIsMC4yLTAuM2MwLDAsMC4xLTAuMSwwLjEtMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAuMSwwLjEsMC4xYzAuMiwwLjIsMC4zLDAuNSwwLjQsMC44CglsMC4xLDAuM2MwLjEsMC4zLDAuMSwwLjUsMC4yLDAuN2MwLjEsMC41LDAuMiwwLjUsMC4zLDFjMC4xLDAuMywwLDAuMiwwLjIsMC43czAuMywxLDAuMywxLjFjMC4xLDAuMiwwLjEsMC40LDAuMSwwLjUKCWMwLDAuMSwwLjEsMC40LDAuMiwwLjZjMC4xLDAuNCwwLjIsMC42LDAuMiwwLjdjMC4xLDAuNCwwLjMsMC43LDAuNSwxLjFjMC4xLDAuMiwwLjIsMC40LDAuNCwwLjZjMC4yLDAuMiwwLjQsMC4zLDAuNiwwLjQKCWMwLjIsMC4xLDAuNCwwLjEsMC42LDAuMWMwLjksMC4xLDEuOCwwLjEsMi43LDAiLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTE1LjYsNDEuN2MwLjEsMCwyLDAsMi42LDBoMC4yYzAuMiwwLDAuNS0wLjEsMC43LTAuMWMwLjMtMC4xLDAuNi0wLjIsMC45LTAuNGMwLjItMC4yLDAuNS0wLjQsMC43LTAuNgoJYzAuMi0wLjIsMC4zLTAuNCwwLjUtMC42YzAuMi0wLjIsMC4zLTAuNCwwLjQtMC42YzAuMS0wLjEsMC4yLTAuMywwLjMtMC41YzAuMS0wLjIsMC4zLTAuNCwwLjUtMC41YzAuMSwwLDAuMS0wLjEsMC4yLTAuMQoJYzAuMSwwLDAuMiwwLDAuMi0wLjFjMCwwLDAuMSwwLDAuMSwwYzAsMCwwLjEsMCwwLjEsMGMwLjIsMC4xLDAuMywwLjIsMC40LDAuM2wwLjEsMC4xYzAuMSwwLjEsMC4xLDAuMiwwLjIsMC4zCgljMC4xLDAuMiwwLjIsMC4yLDAuMywwLjRjMC4xLDAuMSwwLDAuMSwwLjIsMC4zYzAuMSwwLjIsMC4zLDAuNCwwLjMsMC41bDAuMSwwLjJjMCwwLjEsMC4xLDAuMSwwLjIsMC4zYzAuMSwwLjEsMC4yLDAuMiwwLjIsMC4zCgljMC4xLDAuMiwwLjMsMC4zLDAuNSwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjJjMC4yLDAuMSwwLjQsMC4xLDAuNiwwLjJjMC4yLDAsMC40LDAuMSwwLjYsMC4xYzAuOCwwLjEsMi42LDAsMi43LDAiLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTY0LjIsNDEuNmMwLjIsMCwyLjcsMCwzLjUsMGMwLjEsMCwwLjIsMCwwLjMsMGMwLjMtMC4xLDAuNi0wLjIsMC45LTAuNGMwLjUtMC4zLDAuOS0wLjgsMS4xLTEuMwoJYzAuNC0wLjYsMC43LTEuMywwLjktMmMwLjItMC42LDAuMy0xLDAuNi0yYzAuMi0wLjgsMC40LTEuNCwwLjYtMi4xYzAuMS0wLjUsMC4yLTAuOCwwLjQtMS41YzAuMi0wLjYsMC40LTEuMSwwLjctMS42CgljMC4xLTAuMSwwLjItMC4zLDAuMy0wLjRjMC0wLjEsMC4xLTAuMSwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAuMSwwLjIsMC4xYzAuMiwwLjMsMC40LDAuNywwLjYsMS4xCgljMC4xLDAuMiwwLjEsMC40LDAuMiwwLjRjMC4xLDAuNCwwLjIsMC42LDAuMywwLjljMC4yLDAuNywwLjIsMC42LDAuNCwxLjNjMC4xLDAuMywwLjEsMC4yLDAuMywxYzAuMiwwLjcsMC40LDEuMywwLjQsMS41CgljMC4xLDAuMywwLjEsMC41LDAuMiwwLjZjMC4xLDAuMiwwLjEsMC41LDAuMywwLjhjMC4yLDAuNSwwLjMsMC44LDAuMywwLjljMC4yLDAuNSwwLjQsMSwwLjcsMS40YzAuMSwwLjMsMC4zLDAuNSwwLjUsMC43CgljMC4yLDAuMiwwLjUsMC40LDAuOCwwLjVjMC4yLDAuMSwwLjUsMC4yLDAuNywwLjJjMS4yLDAuMSwyLjQsMC4xLDMuNiwwIi8+CjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik03OS42LDQxLjdjMC4yLDAsMi43LDAsMy41LDBjMC4xLDAsMC4yLDAsMC4zLDBjMC4zLDAsMC42LTAuMSwwLjktMC4xYzAuNC0wLjEsMC44LTAuMywxLjEtMC41CgljMC4zLTAuMiwwLjYtMC41LDAuOS0wLjhjMC4yLTAuMiwwLjQtMC41LDAuNi0wLjhjMC4yLTAuMywwLjQtMC41LDAuNi0wLjhjMC4xLTAuMiwwLjItMC4zLDAuNC0wLjZjMC4yLTAuMiwwLjQtMC41LDAuNy0wLjcKCWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMmMwLjEsMCwwLjEsMCwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGgwLjFjMC4xLDAsMC4xLDAsMC4yLDAuMWMwLjIsMC4xLDAuNCwwLjMsMC42LDAuNGwwLjIsMC4yCgljMC4xLDAuMSwwLjIsMC4yLDAuMywwLjRjMC4yLDAuMywwLjIsMC4zLDAuNCwwLjVjMC4xLDAuMSwwLjEsMC4xLDAuMywwLjRjMC4yLDAuMywwLjQsMC41LDAuNCwwLjZsMC4yLDAuMgoJYzAuMSwwLjEsMC4xLDAuMiwwLjMsMC4zYzAuMSwwLjEsMC4zLDAuMywwLjMsMC40YzAuMiwwLjIsMC40LDAuNCwwLjcsMC41YzAuMiwwLjEsMC40LDAuMiwwLjUsMC4zYzAuMywwLjEsMC42LDAuMiwwLjgsMC4yCgljMC4yLDAsMC41LDAuMSwwLjcsMC4xYzEuMSwwLjEsMy41LDAsMy43LDAiLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTY0LjIsNzIuNGMwLjIsMCwyLjcsMCwzLjUsMGMwLjEsMCwwLjIsMCwwLjMsMGMwLjMtMC4xLDAuNi0wLjIsMC45LTAuNGMwLjUtMC4zLDAuOS0wLjgsMS4xLTEuMwoJYzAuNC0wLjYsMC43LTEuMywwLjktMmMwLjItMC42LDAuMy0xLDAuNi0yYzAuMi0wLjgsMC40LTEuNCwwLjYtMi4xYzAuMS0wLjUsMC4yLTAuOCwwLjQtMS41YzAuMi0wLjYsMC40LTEuMSwwLjctMS42CgljMC4xLTAuMSwwLjItMC4zLDAuMy0wLjRjMC0wLjEsMC4xLTAuMSwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAuMSwwLjIsMC4xYzAuMiwwLjMsMC40LDAuNywwLjYsMS4xCglsMC4yLDAuNGMwLjEsMC40LDAuMiwwLjYsMC4zLDAuOWMwLjIsMC43LDAuMiwwLjYsMC40LDEuM2MwLjEsMC4zLDAuMSwwLjIsMC4zLDFjMC4yLDAuOCwwLjQsMS4zLDAuNCwxLjVjMC4xLDAuMywwLjEsMC41LDAuMiwwLjYKCWMwLjEsMC4yLDAuMSwwLjUsMC4zLDAuOGMwLjIsMC41LDAuMywwLjgsMC4zLDAuOWMwLjIsMC41LDAuNCwxLDAuNywxLjRjMC4xLDAuMywwLjMsMC41LDAuNSwwLjdjMC4yLDAuMiwwLjUsMC40LDAuOCwwLjUKCWMwLjIsMC4xLDAuNSwwLjIsMC43LDAuMmMxLjIsMC4xLDIuNCwwLjEsMy42LDAiLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTc5LjYsNzIuNGMwLjIsMCwyLjcsMCwzLjUsMGgwLjNjMC4zLDAsMC42LTAuMSwwLjktMC4xYzAuNC0wLjEsMC44LTAuMywxLjEtMC41YzAuMy0wLjIsMC42LTAuNSwwLjktMC44CgljMC4yLTAuMywwLjQtMC41LDAuNi0wLjhjMC4yLTAuMywwLjQtMC41LDAuNi0wLjhjMC4xLTAuMiwwLjItMC4zLDAuNC0wLjZjMC4yLTAuMiwwLjQtMC41LDAuNy0wLjdjMC4xLTAuMSwwLjItMC4xLDAuMy0wLjIKCWMwLjEsMCwwLjEsMCwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAsMC4yLDBjMC4yLDAuMSwwLjQsMC4zLDAuNiwwLjRsMC4yLDAuMmMwLjEsMC4xLDAuMiwwLjIsMC4zLDAuNAoJYzAuMiwwLjMsMC4yLDAuMywwLjQsMC41YzAuMSwwLjEsMC4xLDAuMSwwLjMsMC40YzAuMiwwLjMsMC40LDAuNSwwLjQsMC42bDAuMiwwLjJjMC4xLDAuMSwwLjEsMC4yLDAuMywwLjMKCWMwLjEsMC4xLDAuMywwLjMsMC4zLDAuNGMwLjIsMC4yLDAuNCwwLjQsMC43LDAuNmMwLjIsMC4xLDAuNCwwLjIsMC41LDAuM2MwLjMsMC4xLDAuNiwwLjIsMC44LDAuMmMwLjIsMCwwLjQsMC4xLDAuNywwLjEKCWMxLjEsMC4xLDMuNSwwLDMuNywwIi8+CjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik00LjEsNzEuNmMwLjEsMCwyLDAsMi42LDBjMC4xLDAsMC4yLDAsMC4zLDBjMC4zLTAuMSwwLjUtMC4zLDAuNy0wLjZjMC40LTAuNiwwLjctMS4yLDAuOS0xLjkKCWMwLjMtMSwwLjUtMS45LDAuNy0yLjljMC4yLTAuOCwwLjMtMS42LDAuNS0zYzAuMi0xLjEsMC4zLTIsMC40LTMuMWMwLjEtMC43LDAuMi0xLjMsMC4zLTIuMmMwLDAsMC4xLTAuOSwwLjUtMi41CgljMC4xLTAuMiwwLjEtMC40LDAuMi0wLjZjMC0wLjEsMC4xLTAuMSwwLjEtMC4yYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAuMSwwLjEsMC4yYzAuMiwwLjUsMC4zLDEsMC40LDEuNgoJYzAuMSwwLjQsMC4xLDAuNSwwLjEsMC42YzAuMSwwLjUsMC4xLDAuOSwwLjIsMS4zYzAuMSwxLDAuMiwwLjksMC4zLDJjMC4xLDAuNSwwLDAuMywwLjIsMS41YzAuMiwxLjIsMC4zLDIsMC4zLDIuMgoJYzAuMSwwLjUsMC4xLDAuNywwLjEsMC45YzAsMC4zLDAuMSwwLjcsMC4yLDEuMmMwLjEsMC43LDAuMiwxLjIsMC4yLDEuM2MwLjEsMC43LDAuMywxLjQsMC41LDIuMWMwLjEsMC40LDAuMiwwLjcsMC40LDEuMQoJYzAuMiwwLjMsMC40LDAuNiwwLjYsMC44YzAuMiwwLjEsMC40LDAuMiwwLjYsMC4zYzAuOCwwLjIsMi42LDAuMSwyLjcsMC4xIi8+CjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0xNS42LDcxLjdjMC4xLDAsMiwwLDIuNiwwYzAuMywwLDAuNi0wLjEsMC45LTAuMmMwLjMtMC4yLDAuNi0wLjUsMC45LTAuOGMwLjMtMC40LDAuNS0wLjgsMC43LTEuMgoJYzAuMi0wLjMsMC4zLTAuNiwwLjUtMS4yYzAuMi0wLjUsMC4zLTAuOCwwLjQtMS4zYzAuMS0wLjMsMC4yLTAuNSwwLjMtMC45YzAuMS0wLjMsMC4zLTAuNywwLjUtMWMwLjEtMC4xLDAuMS0wLjIsMC4yLTAuMgoJYzAuMS0wLjEsMC4xLTAuMSwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDAuMWMwLjIsMC4yLDAuMywwLjQsMC40LDAuNmMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuMwoJYzAuMSwwLjIsMC4xLDAuMywwLjIsMC41YzAuMSwwLjQsMC4yLDAuNCwwLjMsMC44YzAuMSwwLjIsMCwwLjEsMC4yLDAuNmMwLjEsMC40LDAuMywwLjgsMC4zLDAuOWwwLjEsMC40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNQoJYzAuMSwwLjMsMC4yLDAuNSwwLjIsMC41YzAuMSwwLjMsMC4zLDAuNiwwLjUsMC45YzAuMSwwLjIsMC4zLDAuMywwLjQsMC40YzAuMiwwLjEsMC40LDAuMywwLjYsMC4zYzAuMiwwLjEsMC40LDAuMSwwLjYsMC4xCgljMC45LDAuMSwxLjgsMC4xLDIuNywwIi8+Cjwvc3ZnPgo="}}]);