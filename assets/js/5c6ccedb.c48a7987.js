"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[4968],{1685:(M,e,t)=>{t.r(e),t.d(e,{assets:()=>n,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var L=t(8168),w=(t(6540),t(5680));const a={id:"scaling-factor",title:"Scaling Factor",sidebar_label:"Scaling Factor"},i=void 0,s={unversionedId:"Tools/read-analysis/scaling-factor",id:"Tools/read-analysis/scaling-factor",title:"Scaling Factor",description:"scaling-factor",source:"@site/docs/Tools/read-analysis/scaling-factor.md",sourceDirName:"Tools/read-analysis",slug:"/Tools/read-analysis/scaling-factor",permalink:"/scriptmanager-docs/docs/Tools/read-analysis/scaling-factor",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1737752346,formattedLastUpdatedAt:"Jan 24, 2025",frontMatter:{id:"scaling-factor",title:"Scaling Factor",sidebar_label:"Scaling Factor"},sidebar:"toolSidebar",previous:{title:"Scale Matrix",permalink:"/scriptmanager-docs/docs/Tools/read-analysis/scale-matrix"},next:{title:"Similarity Matrix (suspended)",permalink:"/scriptmanager-docs/docs/Tools/read-analysis/similarity-matrix"}},n={},u=[{value:"File input (BAM)",id:"file-input-bam",level:3},{value:"Filter",id:"filter",level:3},{value:"Scaling Methods",id:"scaling-methods",level:3},{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Filter Options",id:"filter-options",level:3},{value:"Positional Input",id:"positional-input",level:2},{value:"Output Options",id:"output-options",level:3},{value:"Scale Options",id:"scale-options",level:3}],C={toc:u},j="wrapper";function l(M){let{components:e,...a}=M;return(0,w.yg)(j,(0,L.A)({},C,a,{components:e,mdxType:"MDXLayout"}),(0,w.yg)("p",null,(0,w.yg)("img",{alt:"scaling-factor",src:t(8027).A,width:"103",height:"103"})),(0,w.yg)("p",null,"Calculate a normalization factor using the total tag method or normalization of ChIP-seq data with control (NCIS) method by ",(0,w.yg)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/22883957/"},"Liang & Keles (BMC Bioinf 2012)"),"."),(0,w.yg)("p",null,"The resulting scaling factor can be applied to read count matrices generated by ",(0,w.yg)("a",{parentName:"p",href:"/docs/Tools/read-analysis/tag-pileup"},"Tag Pileup")," using ",(0,w.yg)("a",{parentName:"p",href:"/docs/Tools/read-analysis/scale-matrix"},"Scale Matrix")," to compare experiment samples."),(0,w.yg)("img",{src:t(5778).A,style:{width:"70%"}}),(0,w.yg)("h3",{id:"file-input-bam"},"File input (BAM)"),(0,w.yg)("p",null,"The scaling factors are calculated directly from a BAM file and are calculated on a per-BAM basis. Make sure your input is properly formatted and uses the appropriate ",(0,w.yg)("inlineCode",{parentName:"p"},".bam")," extension. The scaling factor determined for one file should not be used to normalize data from another BAM file."),(0,w.yg)("admonition",{type:"caution"},(0,w.yg)("p",{parentName:"admonition"},"Make sure your BAM input files are ",(0,w.yg)("a",{parentName:"p",href:"/docs/Tools/bam-manipulation/sort-bam"},"sorted")," and ",(0,w.yg)("a",{parentName:"p",href:"/docs/Tools/bam-manipulation/bam-indexer"},"indexed"),".")),(0,w.yg)("h3",{id:"filter"},"Filter"),(0,w.yg)("ul",null,(0,w.yg)("li",{parentName:"ul"},"The ",(0,w.yg)("strong",{parentName:"li"},"Blacklist")," option allows the user to provide a file containing blacklisted entires to exclude certain regions of data from the calculations. This commonly includes known repetitive/problematic mapping regions of the genome."),(0,w.yg)("li",{parentName:"ul"},"There are also options specific for when the user selects an NCIS-style calculation method:",(0,w.yg)("ul",{parentName:"li"},(0,w.yg)("li",{parentName:"ul"},"The ",(0,w.yg)("strong",{parentName:"li"},"Control BAM")," option is for specifying the control BAM file to model the background-signal"),(0,w.yg)("li",{parentName:"ul"},"The ",(0,w.yg)("strong",{parentName:"li"},"Window Size(bp)")," adjusts the size of the tiling window used"),(0,w.yg)("li",{parentName:"ul"},"The ",(0,w.yg)("strong",{parentName:"li"},"Minimum Fraction")," sets the minimum fraction for the NCIS method thresholding")))),(0,w.yg)("admonition",{type:"caution"},(0,w.yg)("p",{parentName:"admonition"},"NCIS control samples should have sufficient sequencing depth to create a reliable sampling of the genome-wide distribution of background read coverage. It's a common mistake to use under-sequenced IgG controls in ChIP-based analyses.")),(0,w.yg)("h3",{id:"scaling-methods"},"Scaling Methods"),(0,w.yg)("ul",null,(0,w.yg)("li",{parentName:"ul"},(0,w.yg)("strong",{parentName:"li"},"Total Tag normalization"),(0,w.yg)("ul",{parentName:"li"},(0,w.yg)("li",{parentName:"ul"},'Perhaps the most intuitive normalization approach, ScriptManager\'s Total tag normalization method simply tallies up the reads (only Read 1 if paired-end) in a BAM file and divides it by the genome size for a more intuitive "per bp" coverage metric. This has the added advantage of avoiding underflow errors when the factor is applied to a read count matrix (e.g. CDT output file from TagPileup).')))),(0,w.yg)("admonition",{type:"note"},(0,w.yg)("p",{parentName:"admonition"},"Note that the genome size is determined by the BAM header so be careful about comparing BAM files that were aligned to the exact same reference genome.")),(0,w.yg)("ul",null,(0,w.yg)("li",{parentName:"ul"},(0,w.yg)("strong",{parentName:"li"},"NCIS normalization"),(0,w.yg)("ul",{parentName:"li"},(0,w.yg)("li",{parentName:"ul"},"Pros: Attempts to account for antibody specificity"),(0,w.yg)("li",{parentName:"ul"},"Cons: Requires IgG control (but this is best practice anyway to avoid false positive peak calls)"),(0,w.yg)("li",{parentName:"ul"},(0,w.yg)("a",{parentName:"li",href:"https://pubmed.ncbi.nlm.nih.gov/22883957/"},"Read more"))))),(0,w.yg)("admonition",{type:"warning"},(0,w.yg)("p",{parentName:"admonition"},"NCIS is not an appropriate normalization method for ChIP data with histone targets (violates assumptions of sparse binding). Consider NFR normalization approaches for histone target data (but understand assumptions before proceeding).")),(0,w.yg)("ul",null,(0,w.yg)("li",{parentName:"ul"},(0,w.yg)("strong",{parentName:"li"},"Both total tag and NCIS methodologies"))),(0,w.yg)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,w.yg)("p",null,"Usage:"),(0,w.yg)("pre",null,(0,w.yg)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar read-analysis scaling-factor [-t | -n | -b] [-hV]\n[-c=<controlBAM>] [-f=<blacklistFilter>] [-m=<minFrac>]\n[-o=<outputBasename>] [-w=<window>] <bamFile>\n")),(0,w.yg)("h3",{id:"filter-options"},"Filter Options"),(0,w.yg)("table",null,(0,w.yg)("thead",{parentName:"table"},(0,w.yg)("tr",{parentName:"thead"},(0,w.yg)("th",{parentName:"tr",align:null},"Option"),(0,w.yg)("th",{parentName:"tr",align:null},"Description"))),(0,w.yg)("tbody",{parentName:"table"},(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-f, --blacklist=<blacklistFilter>")),(0,w.yg)("td",{parentName:"tr",align:null},"specify blacklist file to filter by")),(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-c, --control=<controlBAM>")),(0,w.yg)("td",{parentName:"tr",align:null},"control BAM file (to use with ",(0,w.yg)("inlineCode",{parentName:"td"},"-n")," or ",(0,w.yg)("inlineCode",{parentName:"td"},"-b")," flags)")),(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-w, --window-size=<window>")),(0,w.yg)("td",{parentName:"tr",align:null},"window size for NCIS-related scaling types (default=500)")),(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-m, --min-fraction=<minFrac>")),(0,w.yg)("td",{parentName:"tr",align:null},"minimum fraction for NCIS-related scaling types (default=0.75)")))),(0,w.yg)("h2",{id:"positional-input"},"Positional Input"),(0,w.yg)("p",null,"This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed."),(0,w.yg)("h3",{id:"output-options"},"Output Options"),(0,w.yg)("table",null,(0,w.yg)("thead",{parentName:"table"},(0,w.yg)("tr",{parentName:"thead"},(0,w.yg)("th",{parentName:"tr",align:null},"Option"),(0,w.yg)("th",{parentName:"tr",align:null},"Description"))),(0,w.yg)("tbody",{parentName:"table"},(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-o, --output=<outputBasename>")),(0,w.yg)("td",{parentName:"tr",align:null},"specify output file for composite values")))),(0,w.yg)("h3",{id:"scale-options"},"Scale Options"),(0,w.yg)("table",null,(0,w.yg)("thead",{parentName:"table"},(0,w.yg)("tr",{parentName:"thead"},(0,w.yg)("th",{parentName:"tr",align:null},"Option"),(0,w.yg)("th",{parentName:"tr",align:null},"Description"))),(0,w.yg)("tbody",{parentName:"table"},(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-t, --total-tag")),(0,w.yg)("td",{parentName:"tr",align:null},"total tag scaling (default)")),(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-n, --ncis")),(0,w.yg)("td",{parentName:"tr",align:null},"ncis normalization with window size in bp and unitless minimum fraction (default-size=500, default-fraction=0.75)")),(0,w.yg)("tr",{parentName:"tbody"},(0,w.yg)("td",{parentName:"tr",align:null},(0,w.yg)("inlineCode",{parentName:"td"},"-b, --both")),(0,w.yg)("td",{parentName:"tr",align:null},"ncis with total tag (default-size=500, default-fraction=0.75)")))),(0,w.yg)("p",null,(0,w.yg)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/22883957/"},"Liang & Keles (BMC Bioinf 2012)")))}l.isMDXComponent=!0},5680:(M,e,t)=>{t.d(e,{xA:()=>C,yg:()=>o});var L=t(6540);function w(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function a(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(M);e&&(L=L.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,L)}return t}function i(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){w(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function s(M,e){if(null==M)return{};var t,L,w=function(M,e){if(null==M)return{};var t,L,w={},a=Object.keys(M);for(L=0;L<a.length;L++)t=a[L],e.indexOf(t)>=0||(w[t]=M[t]);return w}(M,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(M);for(L=0;L<a.length;L++)t=a[L],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(w[t]=M[t])}return w}var n=L.createContext({}),u=function(M){var e=L.useContext(n),t=e;return M&&(t="function"==typeof M?M(e):i(i({},e),M)),t},C=function(M){var e=u(M.components);return L.createElement(n.Provider,{value:e},M.children)},j="mdxType",l={inlineCode:"code",wrapper:function(M){var e=M.children;return L.createElement(L.Fragment,{},e)}},r=L.forwardRef((function(M,e){var t=M.components,w=M.mdxType,a=M.originalType,n=M.parentName,C=s(M,["components","mdxType","originalType","parentName"]),j=u(t),r=w,o=j["".concat(n,".").concat(r)]||j[r]||l[r]||a;return t?L.createElement(o,i(i({ref:e},C),{},{components:t})):L.createElement(o,i({ref:e},C))}));function o(M,e){var t=arguments,w=e&&e.mdxType;if("string"==typeof M||w){var a=t.length,i=new Array(a);i[0]=r;var s={};for(var n in e)hasOwnProperty.call(e,n)&&(s[n]=e[n]);s.originalType=M,s[j]="string"==typeof M?M:w,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return L.createElement.apply(null,i)}return L.createElement.apply(null,t)}r.displayName="MDXCreateElement"},5778:(M,e,t)=>{t.d(e,{A:()=>L});const L=t.p+"assets/images/ScalingFactorWindow-8c9cca9a2cc39ac2d21d41c1cc8ace60.png"},8027:(M,e,t)=>{t.d(e,{A:()=>L});const L="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzIzMTgxNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qye2ZpbGw6IzIzMTgxNTt9Cgkuc3Qze2ZvbnQtZmFtaWx5OidDb2NvZ29vc2VQcm8nO30KCS5zdDR7Zm9udC1zaXplOjEzLjAzOTFweDt9Cgkuc3Q1e2ZvbnQtc2l6ZTo5LjM3NXB4O30KCS5zdDZ7ZmlsbDpub25lO3N0cm9rZTojMjIxRTFGO3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGcgaWQ9IkZvdXJfQ29sb3JfU2VxdWVuY2VfUGxvdCI+Cgk8cGF0aCBpZD0ic3F1YXJlIiBjbGFzcz0ic3QwIiBkPSJNOS4zLDEuNWg4NC40YzQuMywwLDcuOCwzLjUsNy44LDcuOHY4NC40YzAsNC4zLTMuNSw3LjgtNy44LDcuOEg5LjNjLTQuMywwLTcuOC0zLjUtNy44LTcuOFY5LjMKCQlDMS41LDUsNSwxLjUsOS4zLDEuNXoiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMzIuOSIgeTE9IjM3LjciIHgyPSIzNyIgeTI9IjQxLjgiLz4KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjM3IiB5MT0iMzcuNyIgeDI9IjMyLjgiIHkyPSI0MS44Ii8+CjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIzMi45IiB5MT0iNjYuNyIgeDI9IjM3IiB5Mj0iNzAuOCIvPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMzciIHkxPSI2Ni44IiB4Mj0iMzIuOCIgeTI9IjcwLjkiLz4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzOS42ODc1IDQ0LjA0NzEpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPk48L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNDAuNDUzMSA3MS45NDk0KSIgY2xhc3M9InN0MiBzdDMgc3Q1Ij5OPC90ZXh0Pgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTQsMzcuNGg3Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01NCw0MC40aDciLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTU0LDY3LjNoNyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTQsNzAuNGg3Ii8+CjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik00LjEsNDEuNmMwLjEsMCwyLDAsMi42LDBjMC4xLDAsMC4yLDAsMC4zLDBjMC4yLDAsMC41LTAuMSwwLjctMC4zYzAuNC0wLjMsMC42LTAuNiwwLjktMQoJYzAuMy0wLjUsMC41LTEsMC43LTEuNWMwLjItMC40LDAuMy0wLjgsMC41LTEuNWMwLjItMC42LDAuMy0xLDAuNC0xLjZjMC4xLTAuNCwwLjItMC42LDAuMy0xLjFjMC4xLTAuNCwwLjMtMC45LDAuNS0xLjMKCWMwLjEtMC4xLDAuMS0wLjIsMC4yLTAuM2MwLDAsMC4xLTAuMSwwLjEtMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAuMSwwLjEsMC4xYzAuMiwwLjIsMC4zLDAuNSwwLjQsMC44CglsMC4xLDAuM2MwLjEsMC4zLDAuMSwwLjUsMC4yLDAuN2MwLjEsMC41LDAuMiwwLjUsMC4zLDFjMC4xLDAuMywwLDAuMiwwLjIsMC43czAuMywxLDAuMywxLjFjMC4xLDAuMiwwLjEsMC40LDAuMSwwLjUKCWMwLDAuMSwwLjEsMC40LDAuMiwwLjZjMC4xLDAuNCwwLjIsMC42LDAuMiwwLjdjMC4xLDAuNCwwLjMsMC43LDAuNSwxLjFjMC4xLDAuMiwwLjIsMC40LDAuNCwwLjZjMC4yLDAuMiwwLjQsMC4zLDAuNiwwLjQKCWMwLjIsMC4xLDAuNCwwLjEsMC42LDAuMWMwLjksMC4xLDEuOCwwLjEsMi43LDAiLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTE1LjYsNDEuN2MwLjEsMCwyLDAsMi42LDBoMC4yYzAuMiwwLDAuNS0wLjEsMC43LTAuMWMwLjMtMC4xLDAuNi0wLjIsMC45LTAuNGMwLjItMC4yLDAuNS0wLjQsMC43LTAuNgoJYzAuMi0wLjIsMC4zLTAuNCwwLjUtMC42YzAuMi0wLjIsMC4zLTAuNCwwLjQtMC42YzAuMS0wLjEsMC4yLTAuMywwLjMtMC41YzAuMS0wLjIsMC4zLTAuNCwwLjUtMC41YzAuMSwwLDAuMS0wLjEsMC4yLTAuMQoJYzAuMSwwLDAuMiwwLDAuMi0wLjFjMCwwLDAuMSwwLDAuMSwwYzAsMCwwLjEsMCwwLjEsMGMwLjIsMC4xLDAuMywwLjIsMC40LDAuM2wwLjEsMC4xYzAuMSwwLjEsMC4xLDAuMiwwLjIsMC4zCgljMC4xLDAuMiwwLjIsMC4yLDAuMywwLjRjMC4xLDAuMSwwLDAuMSwwLjIsMC4zYzAuMSwwLjIsMC4zLDAuNCwwLjMsMC41bDAuMSwwLjJjMCwwLjEsMC4xLDAuMSwwLjIsMC4zYzAuMSwwLjEsMC4yLDAuMiwwLjIsMC4zCgljMC4xLDAuMiwwLjMsMC4zLDAuNSwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjJjMC4yLDAuMSwwLjQsMC4xLDAuNiwwLjJjMC4yLDAsMC40LDAuMSwwLjYsMC4xYzAuOCwwLjEsMi42LDAsMi43LDAiLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTY0LjIsNDEuNmMwLjIsMCwyLjcsMCwzLjUsMGMwLjEsMCwwLjIsMCwwLjMsMGMwLjMtMC4xLDAuNi0wLjIsMC45LTAuNGMwLjUtMC4zLDAuOS0wLjgsMS4xLTEuMwoJYzAuNC0wLjYsMC43LTEuMywwLjktMmMwLjItMC42LDAuMy0xLDAuNi0yYzAuMi0wLjgsMC40LTEuNCwwLjYtMi4xYzAuMS0wLjUsMC4yLTAuOCwwLjQtMS41YzAuMi0wLjYsMC40LTEuMSwwLjctMS42CgljMC4xLTAuMSwwLjItMC4zLDAuMy0wLjRjMC0wLjEsMC4xLTAuMSwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAuMSwwLjIsMC4xYzAuMiwwLjMsMC40LDAuNywwLjYsMS4xCgljMC4xLDAuMiwwLjEsMC40LDAuMiwwLjRjMC4xLDAuNCwwLjIsMC42LDAuMywwLjljMC4yLDAuNywwLjIsMC42LDAuNCwxLjNjMC4xLDAuMywwLjEsMC4yLDAuMywxYzAuMiwwLjcsMC40LDEuMywwLjQsMS41CgljMC4xLDAuMywwLjEsMC41LDAuMiwwLjZjMC4xLDAuMiwwLjEsMC41LDAuMywwLjhjMC4yLDAuNSwwLjMsMC44LDAuMywwLjljMC4yLDAuNSwwLjQsMSwwLjcsMS40YzAuMSwwLjMsMC4zLDAuNSwwLjUsMC43CgljMC4yLDAuMiwwLjUsMC40LDAuOCwwLjVjMC4yLDAuMSwwLjUsMC4yLDAuNywwLjJjMS4yLDAuMSwyLjQsMC4xLDMuNiwwIi8+CjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik03OS42LDQxLjdjMC4yLDAsMi43LDAsMy41LDBjMC4xLDAsMC4yLDAsMC4zLDBjMC4zLDAsMC42LTAuMSwwLjktMC4xYzAuNC0wLjEsMC44LTAuMywxLjEtMC41CgljMC4zLTAuMiwwLjYtMC41LDAuOS0wLjhjMC4yLTAuMiwwLjQtMC41LDAuNi0wLjhjMC4yLTAuMywwLjQtMC41LDAuNi0wLjhjMC4xLTAuMiwwLjItMC4zLDAuNC0wLjZjMC4yLTAuMiwwLjQtMC41LDAuNy0wLjcKCWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMmMwLjEsMCwwLjEsMCwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGgwLjFjMC4xLDAsMC4xLDAsMC4yLDAuMWMwLjIsMC4xLDAuNCwwLjMsMC42LDAuNGwwLjIsMC4yCgljMC4xLDAuMSwwLjIsMC4yLDAuMywwLjRjMC4yLDAuMywwLjIsMC4zLDAuNCwwLjVjMC4xLDAuMSwwLjEsMC4xLDAuMywwLjRjMC4yLDAuMywwLjQsMC41LDAuNCwwLjZsMC4yLDAuMgoJYzAuMSwwLjEsMC4xLDAuMiwwLjMsMC4zYzAuMSwwLjEsMC4zLDAuMywwLjMsMC40YzAuMiwwLjIsMC40LDAuNCwwLjcsMC41YzAuMiwwLjEsMC40LDAuMiwwLjUsMC4zYzAuMywwLjEsMC42LDAuMiwwLjgsMC4yCgljMC4yLDAsMC41LDAuMSwwLjcsMC4xYzEuMSwwLjEsMy41LDAsMy43LDAiLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTY0LjIsNzIuNGMwLjIsMCwyLjcsMCwzLjUsMGMwLjEsMCwwLjIsMCwwLjMsMGMwLjMtMC4xLDAuNi0wLjIsMC45LTAuNGMwLjUtMC4zLDAuOS0wLjgsMS4xLTEuMwoJYzAuNC0wLjYsMC43LTEuMywwLjktMmMwLjItMC42LDAuMy0xLDAuNi0yYzAuMi0wLjgsMC40LTEuNCwwLjYtMi4xYzAuMS0wLjUsMC4yLTAuOCwwLjQtMS41YzAuMi0wLjYsMC40LTEuMSwwLjctMS42CgljMC4xLTAuMSwwLjItMC4zLDAuMy0wLjRjMC0wLjEsMC4xLTAuMSwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAuMSwwLjIsMC4xYzAuMiwwLjMsMC40LDAuNywwLjYsMS4xCglsMC4yLDAuNGMwLjEsMC40LDAuMiwwLjYsMC4zLDAuOWMwLjIsMC43LDAuMiwwLjYsMC40LDEuM2MwLjEsMC4zLDAuMSwwLjIsMC4zLDFjMC4yLDAuOCwwLjQsMS4zLDAuNCwxLjVjMC4xLDAuMywwLjEsMC41LDAuMiwwLjYKCWMwLjEsMC4yLDAuMSwwLjUsMC4zLDAuOGMwLjIsMC41LDAuMywwLjgsMC4zLDAuOWMwLjIsMC41LDAuNCwxLDAuNywxLjRjMC4xLDAuMywwLjMsMC41LDAuNSwwLjdjMC4yLDAuMiwwLjUsMC40LDAuOCwwLjUKCWMwLjIsMC4xLDAuNSwwLjIsMC43LDAuMmMxLjIsMC4xLDIuNCwwLjEsMy42LDAiLz4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTc5LjYsNzIuNGMwLjIsMCwyLjcsMCwzLjUsMGgwLjNjMC4zLDAsMC42LTAuMSwwLjktMC4xYzAuNC0wLjEsMC44LTAuMywxLjEtMC41YzAuMy0wLjIsMC42LTAuNSwwLjktMC44CgljMC4yLTAuMywwLjQtMC41LDAuNi0wLjhjMC4yLTAuMywwLjQtMC41LDAuNi0wLjhjMC4xLTAuMiwwLjItMC4zLDAuNC0wLjZjMC4yLTAuMiwwLjQtMC41LDAuNy0wLjdjMC4xLTAuMSwwLjItMC4xLDAuMy0wLjIKCWMwLjEsMCwwLjEsMCwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAsMC4yLDBjMC4yLDAuMSwwLjQsMC4zLDAuNiwwLjRsMC4yLDAuMmMwLjEsMC4xLDAuMiwwLjIsMC4zLDAuNAoJYzAuMiwwLjMsMC4yLDAuMywwLjQsMC41YzAuMSwwLjEsMC4xLDAuMSwwLjMsMC40YzAuMiwwLjMsMC40LDAuNSwwLjQsMC42bDAuMiwwLjJjMC4xLDAuMSwwLjEsMC4yLDAuMywwLjMKCWMwLjEsMC4xLDAuMywwLjMsMC4zLDAuNGMwLjIsMC4yLDAuNCwwLjQsMC43LDAuNmMwLjIsMC4xLDAuNCwwLjIsMC41LDAuM2MwLjMsMC4xLDAuNiwwLjIsMC44LDAuMmMwLjIsMCwwLjQsMC4xLDAuNywwLjEKCWMxLjEsMC4xLDMuNSwwLDMuNywwIi8+CjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik00LjEsNzEuNmMwLjEsMCwyLDAsMi42LDBjMC4xLDAsMC4yLDAsMC4zLDBjMC4zLTAuMSwwLjUtMC4zLDAuNy0wLjZjMC40LTAuNiwwLjctMS4yLDAuOS0xLjkKCWMwLjMtMSwwLjUtMS45LDAuNy0yLjljMC4yLTAuOCwwLjMtMS42LDAuNS0zYzAuMi0xLjEsMC4zLTIsMC40LTMuMWMwLjEtMC43LDAuMi0xLjMsMC4zLTIuMmMwLDAsMC4xLTAuOSwwLjUtMi41CgljMC4xLTAuMiwwLjEtMC40LDAuMi0wLjZjMC0wLjEsMC4xLTAuMSwwLjEtMC4yYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDBjMC4xLDAsMC4xLDAuMSwwLjEsMC4yYzAuMiwwLjUsMC4zLDEsMC40LDEuNgoJYzAuMSwwLjQsMC4xLDAuNSwwLjEsMC42YzAuMSwwLjUsMC4xLDAuOSwwLjIsMS4zYzAuMSwxLDAuMiwwLjksMC4zLDJjMC4xLDAuNSwwLDAuMywwLjIsMS41YzAuMiwxLjIsMC4zLDIsMC4zLDIuMgoJYzAuMSwwLjUsMC4xLDAuNywwLjEsMC45YzAsMC4zLDAuMSwwLjcsMC4yLDEuMmMwLjEsMC43LDAuMiwxLjIsMC4yLDEuM2MwLjEsMC43LDAuMywxLjQsMC41LDIuMWMwLjEsMC40LDAuMiwwLjcsMC40LDEuMQoJYzAuMiwwLjMsMC40LDAuNiwwLjYsMC44YzAuMiwwLjEsMC40LDAuMiwwLjYsMC4zYzAuOCwwLjIsMi42LDAuMSwyLjcsMC4xIi8+CjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0xNS42LDcxLjdjMC4xLDAsMiwwLDIuNiwwYzAuMywwLDAuNi0wLjEsMC45LTAuMmMwLjMtMC4yLDAuNi0wLjUsMC45LTAuOGMwLjMtMC40LDAuNS0wLjgsMC43LTEuMgoJYzAuMi0wLjMsMC4zLTAuNiwwLjUtMS4yYzAuMi0wLjUsMC4zLTAuOCwwLjQtMS4zYzAuMS0wLjMsMC4yLTAuNSwwLjMtMC45YzAuMS0wLjMsMC4zLTAuNywwLjUtMWMwLjEtMC4xLDAuMS0wLjIsMC4yLTAuMgoJYzAuMS0wLjEsMC4xLTAuMSwwLjItMC4xYzAsMCwwLjEsMCwwLjEsMGMwLDAsMC4xLDAsMC4xLDAuMWMwLjIsMC4yLDAuMywwLjQsMC40LDAuNmMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuMwoJYzAuMSwwLjIsMC4xLDAuMywwLjIsMC41YzAuMSwwLjQsMC4yLDAuNCwwLjMsMC44YzAuMSwwLjIsMCwwLjEsMC4yLDAuNmMwLjEsMC40LDAuMywwLjgsMC4zLDAuOWwwLjEsMC40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNQoJYzAuMSwwLjMsMC4yLDAuNSwwLjIsMC41YzAuMSwwLjMsMC4zLDAuNiwwLjUsMC45YzAuMSwwLjIsMC4zLDAuMywwLjQsMC40YzAuMiwwLjEsMC40LDAuMywwLjYsMC4zYzAuMiwwLjEsMC40LDAuMSwwLjYsMC4xCgljMC45LDAuMSwxLjgsMC4xLDIuNywwIi8+Cjwvc3ZnPgo="}}]);