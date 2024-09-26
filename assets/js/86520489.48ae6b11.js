"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[3181],{5680:(M,L,w)=>{w.d(L,{xA:()=>s,yg:()=>r});var t=w(6540);function e(M,L,w){return L in M?Object.defineProperty(M,L,{value:w,enumerable:!0,configurable:!0,writable:!0}):M[L]=w,M}function u(M,L){var w=Object.keys(M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);L&&(t=t.filter((function(L){return Object.getOwnPropertyDescriptor(M,L).enumerable}))),w.push.apply(w,t)}return w}function C(M){for(var L=1;L<arguments.length;L++){var w=null!=arguments[L]?arguments[L]:{};L%2?u(Object(w),!0).forEach((function(L){e(M,L,w[L])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(w)):u(Object(w)).forEach((function(L){Object.defineProperty(M,L,Object.getOwnPropertyDescriptor(w,L))}))}return M}function j(M,L){if(null==M)return{};var w,t,e=function(M,L){if(null==M)return{};var w,t,e={},u=Object.keys(M);for(t=0;t<u.length;t++)w=u[t],L.indexOf(w)>=0||(e[w]=M[w]);return e}(M,L);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(t=0;t<u.length;t++)w=u[t],L.indexOf(w)>=0||Object.prototype.propertyIsEnumerable.call(M,w)&&(e[w]=M[w])}return e}var i=t.createContext({}),A=function(M){var L=t.useContext(i),w=L;return M&&(w="function"==typeof M?M(L):C(C({},L),M)),w},s=function(M){var L=A(M.components);return t.createElement(i.Provider,{value:L},M.children)},a="mdxType",n={inlineCode:"code",wrapper:function(M){var L=M.children;return t.createElement(t.Fragment,{},L)}},o=t.forwardRef((function(M,L){var w=M.components,e=M.mdxType,u=M.originalType,i=M.parentName,s=j(M,["components","mdxType","originalType","parentName"]),a=A(w),o=e,r=a["".concat(i,".").concat(o)]||a[o]||n[o]||u;return w?t.createElement(r,C(C({ref:L},s),{},{components:w})):t.createElement(r,C({ref:L},s))}));function r(M,L){var w=arguments,e=L&&L.mdxType;if("string"==typeof M||e){var u=w.length,C=new Array(u);C[0]=o;var j={};for(var i in L)hasOwnProperty.call(L,i)&&(j[i]=L[i]);j.originalType=M,j[a]="string"==typeof M?M:e,C[1]=j;for(var A=2;A<u;A++)C[A]=w[A];return t.createElement.apply(null,C)}return t.createElement.apply(null,w)}o.displayName="MDXCreateElement"},3224:(M,L,w)=>{w.r(L),w.d(L,{assets:()=>i,contentTitle:()=>C,default:()=>n,frontMatter:()=>u,metadata:()=>j,toc:()=>A});var t=w(8168),e=(w(6540),w(5680));const u={id:"merge-bam",title:"Merge BAM",sidebar_label:"Merge BAM"},C=void 0,j={unversionedId:"Tools/bam-manipulation/merge-bam",id:"Tools/bam-manipulation/merge-bam",title:"Merge BAM",description:"Picard - MergeBamAlignment",source:"@site/docs/Tools/bam-manipulation/merge-bam.md",sourceDirName:"Tools/bam-manipulation",slug:"/Tools/bam-manipulation/merge-bam",permalink:"/scriptmanager-docs/docs/Tools/bam-manipulation/merge-bam",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1726946620,formattedLastUpdatedAt:"Sep 21, 2024",frontMatter:{id:"merge-bam",title:"Merge BAM",sidebar_label:"Merge BAM"},sidebar:"toolSidebar",previous:{title:"Mark Duplicates",permalink:"/scriptmanager-docs/docs/Tools/bam-manipulation/mark-duplicates"},next:{title:"Sort BAM",permalink:"/scriptmanager-docs/docs/Tools/bam-manipulation/sort-bam"}},i={},A=[{value:"File inputs (BAM list)",id:"file-inputs-bam-list",level:3},{value:"Output File Name (BAM)",id:"output-file-name-bam",level:3},{value:"Use multiple CPUs",id:"use-multiple-cpus",level:3},{value:"Generate BAI file (GUI only)",id:"generate-bai-file-gui-only",level:3},{value:"Command Line Interface (Picard and Samtools)",id:"command-line-interface-picard-and-samtools",level:2}],s={toc:A},a="wrapper";function n(M){let{components:L,...u}=M;return(0,e.yg)(a,(0,t.A)({},s,u,{components:L,mdxType:"MDXLayout"}),(0,e.yg)("p",null,(0,e.yg)("a",{parentName:"p",href:"https://broadinstitute.github.io/picard/command-line-overview.html#MergeBamAlignment"},(0,e.yg)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Picard&message=MergeBamAlignment&color=orange",alt:"Picard - MergeBamAlignment"}))),(0,e.yg)("p",null,(0,e.yg)("img",{alt:"merge-bam",src:w(582).A,width:"103",height:"103"})),(0,e.yg)("p",null,"Merges Multiple BAM files into single BAM file. Sorting is performed automatically. RAM intensive process. If program freezes, increase JAVA heap size."),(0,e.yg)("img",{src:w(4123).A,style:{width:"70%"}}),(0,e.yg)("p",null,"This is frequently used for replicate merging. All input files loaded will be merged to a single BAM file."),(0,e.yg)("h3",{id:"file-inputs-bam-list"},"File inputs (BAM list)"),(0,e.yg)("p",null,"Make sure your inputs are properly formatted and use the appropriate ",(0,e.yg)("inlineCode",{parentName:"p"},".bam")," extension. This script also supports bulk selection and processing of files."),(0,e.yg)("admonition",{type:"caution"},(0,e.yg)("p",{parentName:"admonition"},"Make sure your BAM input files are ",(0,e.yg)("a",{parentName:"p",href:"/docs/Tools/bam-manipulation/sort-bam"},"sorted")," and ",(0,e.yg)("a",{parentName:"p",href:"/docs/Tools/bam-manipulation/bam-indexer"},"indexed"),".")),(0,e.yg)("h3",{id:"output-file-name-bam"},"Output File Name (BAM)"),(0,e.yg)("p",null,"The output merged BAM will be named according to the user-customizable text field that defaults to ",(0,e.yg)("inlineCode",{parentName:"p"},"merged_BAM.bam"),' in the user-selected "Output Directory".'),(0,e.yg)("admonition",{type:"tip"},(0,e.yg)("p",{parentName:"admonition"},"Make sure if you change the output BAM filename that you keep the ",(0,e.yg)("inlineCode",{parentName:"p"},".bam")," file extension.")),(0,e.yg)("h3",{id:"use-multiple-cpus"},"Use multiple CPUs"),(0,e.yg)("p",null,"User may speed up the merging by checking this box to allow threading for parallelization of the merge and sort algorithms."),(0,e.yg)("h3",{id:"generate-bai-file-gui-only"},"Generate BAI file (GUI only)"),(0,e.yg)("p",null,"By checking this box, the script will automatically generate a BAI index file for each new filtered BAM file."),(0,e.yg)("admonition",{type:"note"},(0,e.yg)("p",{parentName:"admonition"},"The CLI will not index the resulting BAM file. The user must use appropriate ",(0,e.yg)("a",{parentName:"p",href:"http://www.htslib.org/doc/samtools-index.html"},"samtools"),"/",(0,e.yg)("a",{parentName:"p",href:"https://broadinstitute.github.io/picard/command-line-overview.html#BuildBamIndex"},"Picard")," command to generate the BAI.")),(0,e.yg)("h2",{id:"command-line-interface-picard-and-samtools"},"Command Line Interface (Picard and Samtools)"),(0,e.yg)("p",null,(0,e.yg)("em",{parentName:"p"},"CommandLine tools already exist for this function. This tool only exists as a GUI wrapper in ScriptManager.")),(0,e.yg)("p",null,"Please see the ",(0,e.yg)("a",{parentName:"p",href:"http://www.htslib.org/doc/samtools-merge.html"},"Samtools merge tool")," or the ",(0,e.yg)("a",{parentName:"p",href:"https://broadinstitute.github.io/picard/command-line-overview.html#MergeBamAlignment"},"Picard MergeBamAlignment tool")," for a command line tool that performs this function."))}n.isMDXComponent=!0},4123:(M,L,w)=>{w.d(L,{A:()=>t});const t=w.p+"assets/images/MergeBAMWindow-93e06c59b346dce7677f5c2a32923c34.png"},582:(M,L,w)=>{w.d(L,{A:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzA0MDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwNzA2MDY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KCS5zdDN7ZmlsbDojMDcwNjA2O3N0cm9rZTojMDcwNjA2O3N0cm9rZS13aWR0aDowLjg7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0NHtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDV7ZmlsbDojMjMxODE1O30KPC9zdHlsZT4KPGcgaWQ9IkZvdXJfQ29sb3JfU2VxdWVuY2VfUGxvdCI+Cgk8cGF0aCBpZD0ic3F1YXJlIiBjbGFzcz0ic3QwIiBkPSJNOS4zLDEuNWg4NC40YzQuMywwLDcuOCwzLjUsNy44LDcuOHY4NC40YzAsNC4zLTMuNSw3LjgtNy44LDcuOEg5LjNjLTQuMywwLTcuOC0zLjUtNy44LTcuOFY5LjMKCQlDMS41LDUsNSwxLjUsOS4zLDEuNXoiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNTcuNyIgeTE9IjIzLjkiIHgyPSI0NS4zIiB5Mj0iMjMuOSIvPgo8bGluZSBjbGFzcz0ic3QyIiB4MT0iNTEuNSIgeTE9IjI0LjEiIHgyPSI1MS41IiB5Mj0iMzcuNSIvPgo8cG9seWdvbiBjbGFzcz0ic3QzIiBwb2ludHM9IjQ3LjIsMzQgNDgsMzMuMyA1MS41LDM3LjEgNTUsMzMuMyA1NS44LDM0IDUxLjUsMzguNyAiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTQwLjUsMTAuNmwwLjEsMC4xYzAuNywwLjIsMS4yLDAuOCwxLjIsMS42djIyLjZjMCwwLjktMC43LDEuNi0xLjYsMS42YzAsMCwwLDAtMC4xLDBIMjQuMQoJYy0wLjksMC0xLjYtMC43LTEuNi0xLjZjMCwwLDAsMCwwLTAuMWMwLTUuNywwLTExLjUsMC0xNy4yYzAtMC4yLDAuMS0wLjMsMC4yLTAuNWMyLjEtMi4xLDQuMS00LjEsNi4yLTYuMmMwLjEtMC4xLDAuMy0wLjMsMC40LTAuNAoJTDQwLjUsMTAuNnoiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTI5LjUsMTF2MC4zYzAsMS41LDAsMi45LDAsNC40YzAuMSwwLjgtMC41LDEuNS0xLjIsMS43Yy0wLjIsMC0wLjQsMC4xLTAuNiwwLjFIMjMiLz4KPGcgY2xhc3M9InN0NCI+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMjMuNiwyMi44YzAtMC4xLDAuMS0wLjIsMC4yLTAuMmgyLjVjMC4yLDAsMC40LDAsMC42LDAuMWMwLjIsMC4xLDAuNCwwLjIsMC41LDAuM3MwLjMsMC4zLDAuMywwLjUKCQlzMC4xLDAuNCwwLjEsMC42YzAsMC4yLDAsMC40LTAuMSwwLjVjLTAuMSwwLjItMC4xLDAuMy0wLjIsMC40YzAuMiwwLjIsMC4zLDAuNCwwLjQsMC42czAuMiwwLjUsMC4yLDAuN2MwLDAuMiwwLDAuNC0wLjEsMC42CgkJcy0wLjIsMC40LTAuNCwwLjVjLTAuMSwwLjItMC4zLDAuMy0wLjUsMC40Yy0wLjIsMC4xLTAuNCwwLjEtMC42LDAuMWgtMi43Yy0wLjEsMC0wLjItMC4xLTAuMi0wLjJWMjIuOHogTTI1LjEsMjMuN3YxLjFoMC44CgkJYzAuMSwwLDAuMiwwLDAuMiwwYzAuMSwwLDAuMS0wLjEsMC4yLTAuMXMwLjEtMC4xLDAuMS0wLjJzMC0wLjEsMC0wLjJjMC0wLjEsMC0wLjEsMC0wLjJzLTAuMS0wLjEtMC4xLTAuMmMtMC4xLDAtMC4xLTAuMS0wLjItMC4xCgkJcy0wLjEsMC0wLjIsMEgyNS4xeiBNMjUuMSwyNS44VjI3aDFjMC4xLDAsMC4yLDAsMC4yLTAuMWMwLjEsMCwwLjEtMC4xLDAuMi0wLjFjMC4xLTAuMSwwLjEtMC4xLDAuMS0wLjJjMC0wLjEsMC0wLjIsMC0wLjIKCQljMC0wLjEsMC0wLjEsMC0wLjJjMC0wLjEtMC4xLTAuMS0wLjEtMC4yYy0wLjEtMC4xLTAuMS0wLjEtMC4yLTAuMWMtMC4xLDAtMC4xLTAuMS0wLjItMC4xSDI1LjF6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMzAuNCwyMi44YzAtMC4xLDAuMS0wLjIsMC4yLTAuMmgwLjljMC4xLDAsMC4yLDAuMSwwLjIsMC4ybDIsNS4yYzAsMC4xLDAsMC4yLTAuMSwwLjJoLTEuMQoJCWMtMC4xLDAtMC4yLTAuMS0wLjItMC4ybC0wLjMtMC43aC0yTDI5LjksMjhjMCwwLjEtMC4xLDAuMi0wLjIsMC4yaC0xLjFjLTAuMSwwLTAuMS0wLjEtMC4xLTAuMkwzMC40LDIyLjh6IE0zMS4xLDI0LjRsLTAuNiwxLjcKCQloMS4yTDMxLjEsMjQuNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0zNiwyNWwtMC4zLDNjMCwwLjEsMCwwLjEsMCwwLjFjMCwwLTAuMSwwLTAuMSwwaC0xLjFjLTAuMSwwLTAuMSwwLTAuMSwwYzAsMCwwLTAuMSwwLTAuMWwwLjYtNS4yCgkJYzAtMC4xLDAtMC4xLDAtMC4xczAuMSwwLDAuMSwwaDEuM2MwLjEsMCwwLjEsMCwwLjEsMGMwLDAsMCwwLjEsMC4xLDAuMWwxLDMuM2wxLTMuM2MwLTAuMSwwLTAuMSwwLjEtMC4xYzAsMCwwLjEsMCwwLjEsMEg0MAoJCWMwLjEsMCwwLjEsMCwwLjEsMGMwLDAsMCwwLjEsMCwwLjFsMC42LDUuMmMwLDAuMSwwLDAuMSwwLDAuMWMwLDAtMC4xLDAtMC4xLDBoLTEuMWMtMC4xLDAtMC4xLDAtMC4xLDBjMCwwLDAtMC4xLDAtMC4xTDM5LDI1LjEKCQlMMzguMiwyOGMwLDAuMSwwLDAuMS0wLjEsMC4xYzAsMC0wLjEsMC0wLjEsMGgtMC45Yy0wLjEsMC0wLjEsMC0wLjEsMGMwLDAsMC0wLjEtMC4xLTAuMUwzNiwyNXoiLz4KPC9nPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzkuMywxMC42bDAuMSwwLjFjMC43LDAuMiwxLjIsMC44LDEuMiwxLjZ2MjIuNmMwLDAuOS0wLjcsMS42LTEuNiwxLjZjMCwwLDAsMC0wLjEsMEg2Mi44CgljLTAuOSwwLTEuNi0wLjctMS42LTEuNmMwLDAsMCwwLDAtMC4xYzAtNS43LDAtMTEuNSwwLTE3LjJjMC0wLjIsMC4xLTAuMywwLjItMC41YzIuMS0yLjEsNC4xLTQuMSw2LjItNi4yYzAuMS0wLjEsMC4zLTAuMywwLjQtMC40CglMNzkuMywxMC42eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNjguMiwxMXYwLjNjMCwxLjUsMCwyLjksMCw0LjRjMC4xLDAuOC0wLjUsMS41LTEuMiwxLjdjLTAuMiwwLTAuNCwwLjEtMC42LDAuMWgtNC43Ii8+CjxnIGNsYXNzPSJzdDQiPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTYyLjQsMjIuOGMwLTAuMSwwLjEtMC4yLDAuMi0wLjJINjVjMC4yLDAsMC40LDAsMC42LDAuMWMwLjIsMC4xLDAuNCwwLjIsMC41LDAuM3MwLjMsMC4zLDAuMywwLjUKCQljMC4xLDAuMiwwLjEsMC40LDAuMSwwLjZjMCwwLjIsMCwwLjQtMC4xLDAuNWMtMC4xLDAuMi0wLjEsMC4zLTAuMiwwLjRjMC4yLDAuMiwwLjMsMC40LDAuNCwwLjZjMC4xLDAuMiwwLjIsMC41LDAuMiwwLjcKCQljMCwwLjIsMCwwLjQtMC4xLDAuNmMtMC4xLDAuMi0wLjIsMC40LTAuNCwwLjVjLTAuMSwwLjItMC4zLDAuMy0wLjUsMC40Yy0wLjIsMC4xLTAuNCwwLjEtMC42LDAuMWgtMi43Yy0wLjEsMC0wLjItMC4xLTAuMi0wLjIKCQlWMjIuOHogTTYzLjgsMjMuN3YxLjFoMC44YzAuMSwwLDAuMiwwLDAuMiwwYzAuMSwwLDAuMS0wLjEsMC4yLTAuMWMwLDAsMC4xLTAuMSwwLjEtMC4yYzAtMC4xLDAtMC4xLDAtMC4yYzAtMC4xLDAtMC4xLDAtMC4yCgkJYzAtMC4xLTAuMS0wLjEtMC4xLTAuMmMtMC4xLDAtMC4xLTAuMS0wLjItMC4xcy0wLjEsMC0wLjIsMEg2My44eiBNNjMuOCwyNS44VjI3aDFjMC4xLDAsMC4yLDAsMC4yLTAuMWMwLjEsMCwwLjEtMC4xLDAuMi0wLjEKCQlzMC4xLTAuMSwwLjEtMC4yYzAtMC4xLDAtMC4yLDAtMC4yYzAtMC4xLDAtMC4xLDAtMC4yYzAtMC4xLTAuMS0wLjEtMC4xLTAuMmMtMC4xLTAuMS0wLjEtMC4xLTAuMi0wLjFjLTAuMSwwLTAuMS0wLjEtMC4yLTAuMQoJCUg2My44eiIvPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTY5LjIsMjIuOGMwLTAuMSwwLjEtMC4yLDAuMi0wLjJoMC45YzAuMSwwLDAuMiwwLjEsMC4yLDAuMmwyLDUuMmMwLDAuMSwwLDAuMi0wLjEsMC4yaC0xLjEKCQljLTAuMSwwLTAuMi0wLjEtMC4yLTAuMmwtMC4zLTAuN2gtMkw2OC42LDI4YzAsMC4xLTAuMSwwLjItMC4yLDAuMmgtMS4xYy0wLjEsMC0wLjEtMC4xLTAuMS0wLjJMNjkuMiwyMi44eiBNNjkuOSwyNC40bC0wLjYsMS43CgkJaDEuMkw2OS45LDI0LjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNNzQuOCwyNWwtMC4zLDNjMCwwLjEsMCwwLjEsMCwwLjFjMCwwLTAuMSwwLTAuMSwwaC0xLjFjLTAuMSwwLTAuMSwwLTAuMSwwYzAsMCwwLTAuMSwwLTAuMWwwLjYtNS4yCgkJYzAtMC4xLDAtMC4xLDAtMC4xYzAsMCwwLjEsMCwwLjEsMGgxLjNjMC4xLDAsMC4xLDAsMC4xLDBjMCwwLDAsMC4xLDAuMSwwLjFsMSwzLjNsMS0zLjNjMC0wLjEsMC0wLjEsMC4xLTAuMWMwLDAsMC4xLDAsMC4xLDBoMS4zCgkJYzAuMSwwLDAuMSwwLDAuMSwwczAsMC4xLDAsMC4xbDAuNiw1LjJjMCwwLjEsMCwwLjEsMCwwLjFjMCwwLTAuMSwwLTAuMSwwaC0xLjFjLTAuMSwwLTAuMSwwLTAuMSwwYzAsMCwwLTAuMSwwLTAuMWwtMC4zLTIuOQoJCUw3Ni45LDI4YzAsMC4xLDAsMC4xLTAuMSwwLjFjMCwwLTAuMSwwLTAuMSwwaC0wLjljLTAuMSwwLTAuMSwwLTAuMSwwYzAsMCwwLTAuMS0wLjEtMC4xTDc0LjgsMjV6Ii8+CjwvZz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTY2LjEsNDFjMC4xLDAsMC4yLDAuMSwwLjMsMC4xYzEuNCwwLjQsMi40LDEuNywyLjMsMy4xYzAsMTUsMCwyOS45LDAsNDQuOWMwLDEuOC0xLjQsMy4yLTMuMSwzLjIKCWMwLDAtMC4xLDAtMC4xLDBIMzMuNGMtMS44LDAtMy4yLTEuMy0zLjItMy4xYzAsMCwwLTAuMSwwLTAuMWMwLTExLjQsMC0yMi44LDAtMzQuMmMwLTAuMywwLjItMC43LDAuNC0wLjkKCWM0LjEtNC4xLDguMi04LjIsMTIuMy0xMi4zYzAuMy0wLjMsMC42LTAuNSwwLjktMC44TDY2LjEsNDF6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00NC4yLDQxLjd2MC43YzAsMi45LDAsNS45LDAsOC44YzAsMS43LTAuOSwyLjktMi40LDMuM2MtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjFjLTIuOSwwLTUuOCwwLTguNiwwaC0wLjYiLz4KPGcgY2xhc3M9InN0NCI+Cgk8cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMzIuNiw2NC4zYzAtMC4yLDAuMS0wLjMsMC4zLTAuM2g0LjljMC40LDAsMC44LDAuMSwxLjIsMC4yYzAuNCwwLjIsMC43LDAuNCwxLDAuN2MwLjMsMC4zLDAuNSwwLjYsMC43LDEKCQlzMC4yLDAuOCwwLjIsMS4yYzAsMC40LTAuMSwwLjctMC4yLDFjLTAuMSwwLjMtMC4zLDAuNi0wLjUsMC45YzAuMywwLjMsMC42LDAuNywwLjgsMS4yczAuMywwLjksMC4zLDEuNGMwLDAuNC0wLjEsMC45LTAuMywxLjMKCQljLTAuMiwwLjQtMC40LDAuOC0wLjcsMS4xYy0wLjMsMC4zLTAuNiwwLjUtMSwwLjdjLTAuNCwwLjItMC44LDAuMy0xLjIsMC4zaC01LjNjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM1Y2NC4zeiBNMzUuNCw2Ni4xdjIuMUgzNwoJCWMwLjIsMCwwLjMsMCwwLjUtMC4xczAuMy0wLjEsMC40LTAuMmMwLjEtMC4xLDAuMi0wLjIsMC4yLTAuM2MwLjEtMC4xLDAuMS0wLjMsMC4xLTAuNGMwLTAuMSwwLTAuMy0wLjEtMC40CgkJYy0wLjEtMC4xLTAuMS0wLjItMC4yLTAuM2MtMC4xLTAuMS0wLjItMC4yLTAuNC0wLjJjLTAuMS0wLjEtMC4zLTAuMS0wLjQtMC4xSDM1LjR6IE0zNS40LDcwLjN2Mi41aDJjMC4yLDAsMC4zLDAsMC40LTAuMQoJCXMwLjMtMC4yLDAuNC0wLjNjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC4xLTAuMSwwLjEtMC4zLDAuMS0wLjVjMC0wLjEsMC0wLjMtMC4xLTAuNGMtMC4xLTAuMS0wLjEtMC4zLTAuMi0wLjQKCQljLTAuMS0wLjEtMC4yLTAuMi0wLjQtMC4zYy0wLjEtMC4xLTAuMy0wLjEtMC41LTAuMUgzNS40eiIvPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTQ2LjEsNjQuM2MwLjEtMC4yLDAuMi0wLjMsMC41LTAuM2gxLjhjMC4yLDAsMC40LDAuMSwwLjQsMC4zbDQsMTAuM2MwLjEsMC4yLDAsMC4zLTAuMiwwLjNoLTIuMgoJCWMtMC4yLDAtMC40LTAuMS0wLjQtMC4zbC0wLjUtMS40aC00TDQ1LDc0LjZjLTAuMSwwLjItMC4yLDAuMy0wLjQsMC4zaC0yLjJjLTAuMiwwLTAuMy0wLjEtMC4yLTAuM0w0Ni4xLDY0LjN6IE00Ny40LDY3LjQKCQlsLTEuMiwzLjRoMi40TDQ3LjQsNjcuNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik01Ny4yLDY4LjdsLTAuNiw1LjljMCwwLjEsMCwwLjItMC4xLDAuMmMwLDAuMS0wLjEsMC4xLTAuMiwwLjFoLTIuMWMtMC4xLDAtMC4yLDAtMC4yLTAuMQoJCWMtMC4xLTAuMS0wLjEtMC4xLTAuMS0wLjJsMS4xLTEwLjNjMC0wLjEsMC0wLjIsMC4xLTAuMnMwLjEtMC4xLDAuMi0wLjFoMi42YzAuMSwwLDAuMiwwLDAuMiwwLjFzMC4xLDAuMSwwLjEsMC4ybDIsNi42bDItNi42CgkJYzAtMC4xLDAuMS0wLjIsMC4xLTAuMmMwLTAuMSwwLjEtMC4xLDAuMi0wLjFoMi42YzAuMSwwLDAuMiwwLDAuMiwwLjFzMC4xLDAuMSwwLjEsMC4ybDEuMSwxMC4zYzAsMC4xLDAsMC4yLTAuMSwwLjIKCQljLTAuMSwwLjEtMC4xLDAuMS0wLjIsMC4xaC0yLjFjLTAuMSwwLTAuMiwwLTAuMi0wLjFzLTAuMS0wLjEtMC4xLTAuMmwtMC42LTUuOGwtMS43LDUuOGMwLDAuMS0wLjEsMC4yLTAuMSwwLjNzLTAuMSwwLjEtMC4yLDAuMQoJCWgtMS44Yy0wLjEsMC0wLjIsMC0wLjItMC4xcy0wLjEtMC4xLTAuMS0wLjNMNTcuMiw2OC43eiIvPgo8L2c+Cjwvc3ZnPgo="}}]);