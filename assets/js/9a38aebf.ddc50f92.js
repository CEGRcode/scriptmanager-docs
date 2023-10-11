"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=i,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={id:"dna-shape-bed",title:"DNA Shape from BED File",sidebar_label:"dna-shape-bed"},l=void 0,o={unversionedId:"Tools/sequence-analysis/dna-shape-bed",id:"Tools/sequence-analysis/dna-shape-bed",title:"DNA Shape from BED File",description:"dna-shape-bed",source:"@site/docs/Tools/sequence-analysis/dna-shape-bed.md",sourceDirName:"Tools/sequence-analysis",slug:"/Tools/sequence-analysis/dna-shape-bed",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/dna-shape-bed",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1697064046,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"dna-shape-bed",title:"DNA Shape from BED File",sidebar_label:"dna-shape-bed"},sidebar:"toolSidebar",previous:{title:"Sequence Analysis",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/"},next:{title:"dna-shape-fasta",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/dna-shape-fasta"}},p={},s=[{value:"File inputs (FASTA)",id:"file-inputs-fasta",level:3},{value:"Output file (CDT)",id:"output-file-cdt",level:3},{value:"Output composites (GUI only)",id:"output-composites-gui-only",level:3},{value:"Shape Options",id:"shape-options",level:3},{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3},{value:"Strand Options",id:"strand-options",level:3},{value:"Shape Options",id:"shape-options-1",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dna-shape-bed",src:a(3901).Z,width:"103",height:"103"})),(0,i.kt)("p",null,"Calculate intrinsic DNA shape parameters given BED file and Genome FASTA file."),(0,i.kt)("p",null,"Based on the findings from the Rohs lab ",(0,i.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/23703209/"},"(Zhou et al, 2013)"),", a sliding window approach using a 5bp wide window is a strong predictor of local DNA shape. Using this approach, we can predict 4 kinds of DNA shape:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"minor groove width")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"propeller twist")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"helix twist")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"roll"))),(0,i.kt)("img",{src:a(1114).Z,style:{width:"70%"}}),(0,i.kt)("p",null,"This script takes in a series of nucleotide sequences from a FASTA file and determines the average shape score(s) across the bp positions."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/29563167/"},"Read more on how DNA shape was used in the analysis of comparing TF-binding ",(0,i.kt)("em",{parentName:"a"},"in-vivo")," vs ",(0,i.kt)("em",{parentName:"a"},"in-vitro")," (Rossi et al, 2018)."))),(0,i.kt)("h3",{id:"file-inputs-fasta"},"File inputs (FASTA)"),(0,i.kt)("p",null,"Each input FASTA-formatted set of sequences has an average shape score series calculated for it. Because the shape score is a series corresponding to the bp position, the FASTA sequences input should be positionally linked to some feature and of the same length."),(0,i.kt)("h3",{id:"output-file-cdt"},"Output file (CDT)"),(0,i.kt)("p",null,"The output matrix files are named based on the input filenames and similarly formatted to the heatmap output from ",(0,i.kt)("a",{parentName:"p",href:"/docs/Tools/read-analysis/tag-pileup"},"tag-pileup"),". There should be a file for each shape output selected with a suffix distinguishing them ",(0,i.kt)("inlineCode",{parentName:"p"},"_HelT.cdt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_MGW.cdt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_PropT.cdt"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"_Roll.cdt"),"). For example, for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"XXX.bed")," input file and only MGW selected, a new ",(0,i.kt)("inlineCode",{parentName:"p"},"XXX_MGW.cdt")," file will be written to the user-selected output directory."),(0,i.kt)("h3",{id:"output-composites-gui-only"},"Output composites (GUI only)"),(0,i.kt)("p",null,"The average composites of the CDT output will be displayed in the GUI output window:"),(0,i.kt)("div",{class:"tutorial-img-flow-container"},(0,i.kt)("img",{src:a(9942).Z,style:{width:"50%"}}),(0,i.kt)("img",{src:a(8094).Z,style:{width:"50%"}})),(0,i.kt)("h3",{id:"shape-options"},"Shape Options"),(0,i.kt)("p",null,"For each shape option to calculate indicated by the command, a ",(0,i.kt)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT file")," will be generated with an extension indicating the shape type calculated."),(0,i.kt)("p",null,"If the ",(0,i.kt)("em",{parentName:"p"},"groove")," information is indicated in the command to be used for the output, a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"<outputBasename>_MGW.cdt")," will be generated.\nSimilarly for ",(0,i.kt)("em",{parentName:"p"},"propeller"),", ",(0,i.kt)("em",{parentName:"p"},"helical"),", and ",(0,i.kt)("em",{parentName:"p"},"roll"),", the output matrix ",(0,i.kt)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT files")," will be named with the suffixes ",(0,i.kt)("inlineCode",{parentName:"p"},"_PTwist.cdt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_HTwist.cdt"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"_Roll.cdt"),", respectively."),(0,i.kt)("h1",{id:"command-line-interface"},"Command Line Interface"),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar sequence-analysis dna-shape-bed [-afghlprV]\n[--avg-composite] [-o=<outputBasename>] <genomeFile> <bedFile>\n")),(0,i.kt)("p",null,"Based on Roh's lab DNAshape server data.\nNotes: Sequences with Ns are thrown out."),(0,i.kt)("h3",{id:"positional-input"},"Positional Input"),(0,i.kt)("p",null,"Expects a ",(0,i.kt)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#fasta"},"FASTA")," formatted file with many sequences to stack up with each other (like ",(0,i.kt)("a",{parentName:"p",href:"/docs/Tools/sequence-analysis/fasta-extract"},"fasta-extract tool")," output)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<genomeFile>")),(0,i.kt)("td",{parentName:"tr",align:null},"reference genome FASTA file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bedFile>")),(0,i.kt)("td",{parentName:"tr",align:null},"the BED file of sequences to extract")))),(0,i.kt)("h3",{id:"output-options"},"Output Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-o, --output=<outputBasename>")),(0,i.kt)("td",{parentName:"tr",align:null},"Specify output basename (files for each shape indicated will share this base)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--avg-composite")),(0,i.kt)("td",{parentName:"tr",align:null},"Save average composite")))),(0,i.kt)("h3",{id:"strand-options"},"Strand Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-f, --force")),(0,i.kt)("td",{parentName:"tr",align:null},"force-strandedness (default)")))),(0,i.kt)("h3",{id:"shape-options-1"},"Shape Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-g, --groove")),(0,i.kt)("td",{parentName:"tr",align:null},"output minor groove width")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-r, --roll")),(0,i.kt)("td",{parentName:"tr",align:null},"output roll")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-p, --propeller")),(0,i.kt)("td",{parentName:"tr",align:null},"output propeller twist")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-l, --helical")),(0,i.kt)("td",{parentName:"tr",align:null},"output helical twist")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-a, --all")),(0,i.kt)("td",{parentName:"tr",align:null},"output groove, roll, propeller twist, and helical twist, equivalent to -grpl.")))),(0,i.kt)("p",null,"For each shape option to calculate indicated by the command, a ",(0,i.kt)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT file")," will be generated with an extension indicating the shape  type calculated."),(0,i.kt)("p",null,"If the ",(0,i.kt)("em",{parentName:"p"},"groove")," information is indicated in the command to be used for the output, a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"<outputBasename>_MGW.cdt")," will be generated.\nSimilarly for ",(0,i.kt)("em",{parentName:"p"},"propeller"),", ",(0,i.kt)("em",{parentName:"p"},"helical"),", and ",(0,i.kt)("em",{parentName:"p"},"roll"),", the output matrix ",(0,i.kt)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT files")," will be named with the suffixes ",(0,i.kt)("inlineCode",{parentName:"p"},"_PTwist.cdt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_HTwist.cdt"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"_Roll.cdt"),", respectively."))}m.isMDXComponent=!0},9942:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DNAShapeBED_Chart-Roll-75a006ac106a428e7c87e40cfa35b0ac.png"},8094:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DNAShapeBED_Statistics-Roll-b7a3aa9f218435dcb72dffa182440d09.png"},1114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DNAShapefromBEDWindow-1fda68c1031d36235fd048ef1dd45815.png"},3901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DNAShapefromBED_square-4e9d2206e7e1d3afad6f783e338aff1f.svg"}}]);