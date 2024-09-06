"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[5950],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),g=r,y=c["".concat(o,".").concat(g)]||c[g]||m[g]||s;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(8168),r=(a(6540),a(5680));const s={id:"index",title:"Sequence Analysis",sidebar_label:"Sequence Analysis"},i=void 0,l={unversionedId:"Tools/sequence-analysis/index",id:"Tools/sequence-analysis/index",title:"Sequence Analysis",description:"Tools for analyzing sequence files (e.g. shape analysis, motif searches, randomization, and extractions).",source:"@site/docs/Tools/sequence-analysis/index.md",sourceDirName:"Tools/sequence-analysis",slug:"/Tools/sequence-analysis/",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1697064046,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"index",title:"Sequence Analysis",sidebar_label:"Sequence Analysis"},sidebar:"toolSidebar",previous:{title:"transpose-matrix",permalink:"/scriptmanager-docs/docs/Tools/read-analysis/transpose-matrix"},next:{title:"dna-shape-bed",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/dna-shape-bed"}},o={},d=[],p={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Tools for analyzing sequence files (e.g. shape analysis, motif searches, randomization, and extractions)."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Tool Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Input"),(0,r.yg)("th",{parentName:"tr",align:null},"Output"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Tools/sequence-analysis/fasta-extract"},(0,r.yg)("inlineCode",{parentName:"a"},"fasta-extract"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#bed"},"BED")," + ",(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#fasta"},"FASTA(genome)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#fasta"},"FASTA")),(0,r.yg)("td",{parentName:"tr",align:null},"Generate FASTA file from indexed Genome FASTA file and BED file. Script will generate FAI index if not present in Genome FASTA folder.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Tools/sequence-analysis/randomize-fasta"},(0,r.yg)("inlineCode",{parentName:"a"},"randomize-fasta"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#fasta"},"FASTA")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#fasta"},"FASTA")),(0,r.yg)("td",{parentName:"tr",align:null},"Randomizes FASTA sequence for each input entry")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Tools/sequence-analysis/search-motif"},(0,r.yg)("inlineCode",{parentName:"a"},"search-motif"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#fasta"},"FASTA")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#bed"},"BED")),(0,r.yg)("td",{parentName:"tr",align:null},"Search for an IUPAC DNA sequence motif in FASTA files with mismatches allowed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Tools/sequence-analysis/dna-shape-bed"},(0,r.yg)("inlineCode",{parentName:"a"},"dna-shape-bed"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#bed"},"BED")," + ",(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#fasta"},"FASTA(genome)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT")),(0,r.yg)("td",{parentName:"tr",align:null},"Calculate intrinsic DNA shape parameters given BED file and Genome FASTA file. Based on Roh's lab ",(0,r.yg)("a",{parentName:"td",href:"https://pubmed.ncbi.nlm.nih.gov/23703209"},"DNAshape server data"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Tools/sequence-analysis/dna-shape-fasta"},(0,r.yg)("inlineCode",{parentName:"a"},"dna-shape-fasta"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#fasta"},"FASTA")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT")),(0,r.yg)("td",{parentName:"tr",align:null},"Calculate intrinsic DNA shape parameters given input FASTA files. Based on Roh's lab ",(0,r.yg)("a",{parentName:"td",href:"https://pubmed.ncbi.nlm.nih.gov/23703209"},"DNAshape server data"),".")))))}m.isMDXComponent=!0}}]);