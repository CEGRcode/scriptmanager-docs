"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[5974],{3905:(e,t,i)=>{i.d(t,{Zo:()=>I,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},I=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,I=o(e,["components","mdxType","originalType","parentName"]),p=u(i),d=a,m=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return i?n.createElement(m,l(l({ref:t},I),{},{components:i})):n.createElement(m,l({ref:t},I))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},70:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=i(7462),a=(i(7294),i(3905));const r={id:"filter-pip-seq",title:"Filter PIP-seq",sidebar_label:"Filter PIP-seq"},l=void 0,o={unversionedId:"bam-manipulation/filter-pip-seq",id:"bam-manipulation/filter-pip-seq",title:"Filter PIP-seq",description:"filter-pip-seq",source:"@site/docs/bam-manipulation/filter-pip-seq.md",sourceDirName:"bam-manipulation",slug:"/bam-manipulation/filter-pip-seq",permalink:"/scriptmanager-docs/docs/bam-manipulation/filter-pip-seq",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1674698068,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{id:"filter-pip-seq",title:"Filter PIP-seq",sidebar_label:"Filter PIP-seq"},sidebar:"toolSidebar",previous:{title:"Merge BAM",permalink:"/scriptmanager-docs/docs/bam-manipulation/merge-bam"},next:{title:"se-stat",permalink:"/scriptmanager-docs/docs/bam-statistics/se-stat"}},s={},u=[{value:"Genome input (FASTA)",id:"genome-input-fasta",level:3},{value:"File inputs (BAM)",id:"file-inputs-bam",level:3},{value:"Output",id:"output",level:3},{value:"Upstream sequence",id:"upstream-sequence",level:3},{value:"Generate BAI file (GUI only)",id:"generate-bai-file-gui-only",level:3},{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Output Options",id:"output-options",level:3}],I={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},I,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"filter-pip-seq",src:i(2155).Z,width:"103",height:"103"})),(0,a.kt)("p",null,"Filter BAM file by -1 nucleotide. Requires genome FASTA file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PIP-seq figure 1a from Lai 2017 ",src:i(6451).Z,width:"639",height:"179"})),(0,a.kt)("p",null,"Permanganate (KMnO4) and piperidine treatment of DNA fragments preferentially oxidizes and cleaves off the T (thymine) at the 5' end of single stranded DNA fragment. When analyzing data from sequencing assays like PIP-seq that use this treatment (",(0,a.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/27927716/"},"Lai et al, 2017"),"), a filter step using this tool for reads that align to positions with a 'T' at the -1 position of the 5' end of read 1 can reduce the amount of noise (i.e. DNA fragments not cleaved by piperidine). This tool can potentially clarify signal in the downstream steps of your analysis."),(0,a.kt)("img",{src:i(443).Z,style:{width:"70%"}}),(0,a.kt)("h3",{id:"genome-input-fasta"},"Genome input (FASTA)"),(0,a.kt)("p",null,"Since the alignment files only capture the reference genome sequence at genomic positions covered by a read, the sequence upstream of the 5' end of Read 1 is not necessarily captured by the BAM file format. Thus the reference genome is required to determine the sequence upstream of the 5' end of read 1 (the basis for this filtering script)."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Make sure that the genome build used for the genome input matches the genome aligned to for the BAM formatted files. If you aren't sure, compare the chromosoome lengths in the genomic FASTA index file (FAI) against each BAM file header (",(0,a.kt)("inlineCode",{parentName:"p"},"samtools view -H myfile.bam"),").")),(0,a.kt)("h3",{id:"file-inputs-bam"},"File inputs (BAM)"),(0,a.kt)("p",null,"This script filters BAM-type files so make sure your inputs are properly formatted and use the appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},".bam")," extension. The script also supports bulk selection and processing of files."),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("p",null,"The output file for this script is a filtered set of alignments in BAM format for each input BAM file. The ",(0,a.kt)("inlineCode",{parentName:"p"},"_PSfilter.bam")," suffix is used for each output. For example, for a given ",(0,a.kt)("inlineCode",{parentName:"p"},"XXX.bam")," input file, ",(0,a.kt)("inlineCode",{parentName:"p"},"XXX_PSfilter.bam")," will be output to the user-selected output directory."),(0,a.kt)("h3",{id:"upstream-sequence"},"Upstream sequence"),(0,a.kt)("p",null,"The sequence upstream of the 5' end of read 1 to check for and filter by. If the sequence in the reference genome upstream of the 5'end of read 1 matches this sequence, the read-pair information is written to the output BAM file."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'For classic PIP-seq datasets the default "T" sequence should be used.')),(0,a.kt)("p",null,'This tool supports different sequences in the event an as of yet unknown future biochemical assay or analysis requires this filtering based on a different sequence. For example, a user investigating and comparing the rates of permanganate oxidation and piperdine cleavage at other nucelotides might compare BAM files filtered by other upstream sequences such as "C" which is known to be cleaved under such treatment (just not as frequently as at "T").'),(0,a.kt)("h3",{id:"generate-bai-file-gui-only"},"Generate BAI file (GUI only)"),(0,a.kt)("p",null,"By checking this box, the script will automatically generate a BAI index file for each new output BAM file."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The CLI will not index the resulting BAM file. The user must use appropriate ",(0,a.kt)("a",{parentName:"p",href:"http://www.htslib.org/doc/samtools-index.html"},"samtools"),"/",(0,a.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/picard/command-line-overview.html#BuildBamIndex"},"Picard")," command to generate BAI.")),(0,a.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar bam-manipulation filter-pip-seq [-hV] [-f=<filterString>]\n[-o=<output>] <bamFile> <genomeFASTA>\n")),(0,a.kt)("h3",{id:"output-options"},"Output Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,a.kt)("td",{parentName:"tr",align:null},"specify output file (default=",(0,a.kt)("inlineCode",{parentName:"td"},"<bamFileNoExt>_PSfilter.bam"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-f, --filter=<filterString>")),(0,a.kt)("td",{parentName:"tr",align:null},"filter by upstream sequence, works only for single-nucleotide A,T,C, or G. (default seq='T')")))))}c.isMDXComponent=!0},443:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/FilterforPIPseqWindow-049081e7b1b73e37837e7bed1f7056d0.png"},6451:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Lai_2017_PIPseq_F1a-843201ec8a995480d23d4ca22c0eb1d5.jpeg"},2155:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzA0MDAwMDtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fQoJLnN0MntmaWxsOiMyMzE4MTU7fQoJLnN0M3tmb250LWZhbWlseTonQ29jb2dvb3NlUHJvJzt9Cgkuc3Q0e2ZvbnQtc2l6ZTo1LjQ2ODhweDt9Cgkuc3Q1e2ZvbnQtc2l6ZTo3LjAzMTJweDt9Cgkuc3Q2e2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q3e2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC43NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q4e2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC43NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5OjUsNTt9Cgkuc3Q5e2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC43NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5OjUuMzEsNS4zMTt9Cgkuc3QxMHtmaWxsOm5vbmU7c3Ryb2tlOiMwNzA2MDY7c3Ryb2tlLXdpZHRoOjAuNzU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTo1LjA1LDUuMDU7fQo8L3N0eWxlPgo8cGF0aCBpZD0ic3F1YXJlIiBjbGFzcz0ic3QwIiBkPSJNOS4zLDEuNWg4NC40YzQuMywwLDcuOCwzLjUsNy44LDcuOHY4NC40YzAsNC4zLTMuNSw3LjgtNy44LDcuOEg5LjNjLTQuMywwLTcuOC0zLjUtNy44LTcuOFY5LjMKCUMxLjUsNSw1LDEuNSw5LjMsMS41eiIvPgo8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSI3MC4zLDQ5LjkgODYsNDkuOSA4Niw1Ny43IDc0LjUsNjkuMiA3MC4zLDY5LjIgIi8+Cjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjcxLjUsNDkuOSA1NS44LDQ5LjkgNTUuOCw1Ny43IDY3LjMsNjkuMiA3MS41LDY5LjIgIi8+CjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI1NS44IiB5MT0iNTcuNyIgeDI9Ijg2IiB5Mj0iNTcuNyIvPgo8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSI3NC40LDY5LjIgNzQuNCw4MS4yIDY3LjUsNzcuNSA2Ny41LDY5LjIgIi8+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjYuMzY3MiA1NS44ODY5KSIgY2xhc3M9InN0MiBzdDMgc3Q0Ij5UPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDE3LjI4NTIgMjYuMTA5NikiIGNsYXNzPSJzdDIgc3QzIHN0NCI+VDwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAxNy40OTYxIDgwLjkxMDMpIiBjbGFzcz0ic3QyIHN0MyBzdDUiPlQ8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjcuNzEwOSA4MC45MTAzKSIgY2xhc3M9InN0MiBzdDMgc3Q1Ij5UPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDM5Ljg3ODkgODAuOTEwMykiIGNsYXNzPSJzdDIgc3QzIHN0NSI+VDwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA0MC41IDQxLjM2NzQpIiBjbGFzcz0ic3QyIHN0MyBzdDQiPlQ8L3RleHQ+CjxsaW5lIGNsYXNzPSJzdDYiIHgxPSIyNS4xIiB5MT0iNTQuMiIgeDI9IjE3LjkiIHkyPSI1NC4yIi8+CjxsaW5lIGNsYXNzPSJzdDYiIHgxPSI1MS40IiB5MT0iNTQuMiIgeDI9IjMxLjMiIHkyPSI1NC4yIi8+CjxsaW5lIGNsYXNzPSJzdDYiIHgxPSI0Ni4zIiB5MT0iNjkuMSIgeDI9IjQwLjQiIHkyPSI2OS4xIi8+CjxsaW5lIGNsYXNzPSJzdDYiIHgxPSI1Ni45IiB5MT0iNjkuMSIgeDI9IjUxIiB5Mj0iNjkuMSIvPgo8bGluZSBjbGFzcz0ic3Q2IiB4MT0iMzUuMSIgeTE9IjY5LjIiIHgyPSIxNy45IiB5Mj0iNjkuMiIvPgo8bGluZSBjbGFzcz0ic3Q3IiB4MT0iMTciIHkxPSI4MC44IiB4Mj0iMTciIHkyPSI3OS44Ii8+CjxsaW5lIGNsYXNzPSJzdDgiIHgxPSIxNyIgeTE9Ijc3LjkiIHgyPSIxNyIgeTI9IjI0LjEiLz4KPGxpbmUgY2xhc3M9InN0NyIgeDE9IjE3IiB5MT0iMjMuMSIgeDI9IjE3IiB5Mj0iMjIuMiIvPgo8bGluZSBjbGFzcz0ic3Q3IiB4MT0iMjYuNyIgeTE9IjgwLjgiIHgyPSIyNi43IiB5Mj0iNzkuOCIvPgo8bGluZSBjbGFzcz0ic3Q5IiB4MT0iMjYuNyIgeTE9Ijc3LjgiIHgyPSIyNi43IiB5Mj0iNTMuOSIvPgo8bGluZSBjbGFzcz0ic3Q3IiB4MT0iMjYuNyIgeTE9IjUyLjkiIHgyPSIyNi43IiB5Mj0iNTEuOSIvPgo8bGluZSBjbGFzcz0ic3Q3IiB4MT0iMzkuNiIgeTE9IjgwLjgiIHgyPSIzOS42IiB5Mj0iNzkuOCIvPgo8bGluZSBjbGFzcz0ic3QxMCIgeDE9IjM5LjYiIHkxPSI3Ny45IiB4Mj0iMzkuNiIgeTI9IjM5LjQiLz4KPGxpbmUgY2xhc3M9InN0NyIgeDE9IjM5LjYiIHkxPSIzOC40IiB4Mj0iMzkuNiIgeTI9IjM3LjQiLz4KPGxpbmUgY2xhc3M9InN0NiIgeDE9IjM2LjgiIHkxPSIzOS4yIiB4Mj0iMTcuOSIgeTI9IjM5LjIiLz4KPGxpbmUgY2xhc3M9InN0NiIgeDE9IjU2LjYiIHkxPSIzOS4yIiB4Mj0iNDYuMyIgeTI9IjM5LjIiLz4KPGxpbmUgY2xhc3M9InN0NiIgeDE9Ijg1LjUiIHkxPSIzOS4yIiB4Mj0iNjIuNyIgeTI9IjM5LjIiLz4KPGxpbmUgY2xhc3M9InN0NiIgeDE9IjQyLjQiIHkxPSIyNC4zIiB4Mj0iMjMuNiIgeTI9IjI0LjMiLz4KPGxpbmUgY2xhc3M9InN0NiIgeDE9IjU5LjkiIHkxPSIyNC4zIiB4Mj0iNDkuNSIgeTI9IjI0LjMiLz4KPC9zdmc+Cg=="}}]);