"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[1811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),o=a(7294),r=a(6010),i=a(2466),l=a(6550),s=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,c]=m({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=s??d;return f({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,r]),tabValues:r}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:p},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(k,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},433:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),i=a(5162),l=a(9960);const s={id:"genomic-features-tutorial",title:"Genomic Features Tutorial",sidebar_label:"Genomic Features Tutorial"},c=void 0,u={unversionedId:"Tutorials/genomic-features-tutorial",id:"Tutorials/genomic-features-tutorial",title:"Genomic Features Tutorial",description:"Generating four-color plots to compare positional sequence content across genomic sites",source:"@site/docs/Tutorials/genomic-features-tutorial.md",sourceDirName:"Tutorials",slug:"/Tutorials/genomic-features-tutorial",permalink:"/scriptmanager-docs/docs/Tutorials/genomic-features-tutorial",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1678489009,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"genomic-features-tutorial",title:"Genomic Features Tutorial",sidebar_label:"Genomic Features Tutorial"},sidebar:"someSidebar",previous:{title:"ChIP-exo Tutorial",permalink:"/scriptmanager-docs/docs/Tutorials/chipexo-tutorial"},next:{title:"Genome Tracks Tutorial",permalink:"/scriptmanager-docs/docs/Tutorials/genome-tracks-tutorial"}},d={},p=[{value:"Download ScriptManager (v0.14):",id:"download-scriptmanager-v014",level:2},{value:"Download data",id:"download-data",level:2},{value:"BED File",id:"bed-file",level:3},{value:"FASTA Genome sequence",id:"fasta-genome-sequence",level:3},{value:"Generate the Four-color Plot",id:"generate-the-four-color-plot",level:2},{value:"1. Open ScriptManager",id:"1-open-scriptmanager",level:3},{value:"2. Resize the Reb1 motif-aligned BED file",id:"2-resize-the-reb1-motif-aligned-bed-file",level:3},{value:"2.1. Navigate to Coordinate File Manipulation \u27a1\ufe0f Expand BED File",id:"21-navigate-to-coordinate-file-manipulation-\ufe0f-expand-bed-file",level:4},{value:"2.2. For this tutorial, use the 50bp expansion and select &quot;Expand from Center&quot;.",id:"22-for-this-tutorial-use-the-50bp-expansion-and-select-expand-from-center",level:4},{value:"3. Generate the FASTA sequence input",id:"3-generate-the-fasta-sequence-input",level:3},{value:"3.1. Navigate to DNA Sequence Analysis \u27a1\ufe0f FASTA from BED to create the input for generating a Four Color plot.",id:"31-navigate-to-dna-sequence-analysis-\ufe0f-fasta-from-bed-to-create-the-input-for-generating-a-four-color-plot",level:4},{value:"3.2. Load the FASTA file containing the Genome FASTA",id:"32-load-the-fasta-file-containing-the-genome-fasta",level:4},{value:"3.3. Load appropriate BED file for sequence FASTA generation.",id:"33-load-appropriate-bed-file-for-sequence-fasta-generation",level:4},{value:"3.4. Click &quot;Calculate&quot; to start the extraction which outputs a FASTA file",id:"34-click-calculate-to-start-the-extraction-which-outputs-a-fasta-file",level:4},{value:"4. Generate the Four color sequence image",id:"4-generate-the-four-color-sequence-image",level:3},{value:"4.1. Navigate to Figure Generation \u27a1\ufe0f Four Color Plot to generate the plot once you have generated the FASTA file of the sequences within the BED regions.",id:"41-navigate-to-figure-generation-\ufe0f-four-color-plot-to-generate-the-plot-once-you-have-generated-the-fasta-file-of-the-sequences-within-the-bed-regions",level:4},{value:"4.2. Load the FASTA file containing the FASTA sequences (generated in step 2).",id:"42-load-the-fasta-file-containing-the-fasta-sequences-generated-in-step-2",level:4},{value:"4.3. Click &quot;Generate&quot; to execute the script.",id:"43-click-generate-to-execute-the-script",level:4},{value:"Command-Line shell script",id:"command-line-shell-script",level:2}],f={toc:p},m="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,n.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Generating four-color plots to compare positional sequence content across genomic sites")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal:")," This tutorial provides a guide to generating a four-color plot using the ScriptManager platform and the data generated by the Yeast Epigenome project. These plots are especially great for showing the binding motifs within the ChIP-exo peaks of sequence-specific transcription factors."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(4679).Z,style:{width:"10%"}})),(0,o.kt)("h2",{id:"download-scriptmanager-v014"},"Download ScriptManager (v0.14):"),(0,o.kt)("p",null,"The current version of ScriptManager is available for download ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/CEGRcode/scriptmanager/releases/download/v0.14/ScriptManager-v0.14.jar"},"here")),". Make sure you have ",(0,o.kt)("a",{parentName:"p",href:"/docs/#java"},"Java installed"),"."),(0,o.kt)("p",null,"The file ",(0,o.kt)("inlineCode",{parentName:"p"},"ScriptManager-v0.14.jar")," should be placed someplace locally accessible. For example on Mac OS on the Desktop (Permissions will need to be accepted) or someplace in your home directory (i.e. Macintosh HD/Users/userID/ScriptManager)"),(0,o.kt)("h2",{id:"download-data"},"Download data"),(0,o.kt)("p",null,"You need one set of genomic coordinate regions to investigate (BED) and the reference genome sequence (FASTQ) to complete this exercise. ",(0,o.kt)("a",{parentName:"p",href:"/docs/References/file-formats"},"Read more about the BED/FASTA file formats here.")),(0,o.kt)("h3",{id:"bed-file"},"BED File"),(0,o.kt)("p",null,"This is the set of Reb1 binding sites from ",(0,o.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/29563167/"},"Rossi et al (2018)"),"."),(0,o.kt)(l.Z,{className:"button button--secondary",href:"https://github.com/CEGRcode/2018-Rossi_GenomeResearch/blob/master/Fig1_Reb1/A.Reb1_Rhee_primary_sites_975.bed",mdxType:"Link"},"Download sample BED file"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If your BED file downloads with a ",(0,o.kt)("inlineCode",{parentName:"p"},".txt")," extension, make sure to change the filename to a ",(0,o.kt)("inlineCode",{parentName:"p"},".bed")," extension. For this tutorial, the BED file is named ",(0,o.kt)("inlineCode",{parentName:"p"},"Reb1_Rhee_primary_sites_975.bed"),".")),(0,o.kt)("h3",{id:"fasta-genome-sequence"},"FASTA Genome sequence"),(0,o.kt)("p",null,"You will also need the reference genome for yeast (sacCer3)."),(0,o.kt)(l.Z,{className:"button button--secondary",href:"https://hgdownload.soe.ucsc.edu/goldenPath/sacCer3/bigZips/sacCer3.fa.gz",mdxType:"Link"},"Download sacCer3 genome (FASTA)"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udea7 \ud83d\udc77\u200d\u2640\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"UNDER CONSTRUCTION")," \ud83d\udc77\u200d \ud83d\udea7"),(0,o.kt)("p",{parentName:"admonition"},"The downloaded genome linked here uses r numerals for the chromosome names. Below are some links to scripts that will help you convert them to the arabic numeral names that the downloaded BED file is based on."),(0,o.kt)("p",{parentName:"admonition"},"Turn ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CEGRcode/GenoPipe/blob/master/EpitopeID/utility_scripts/genome_data/download_sacCer3_Genome.sh"},"this script")," into an easier-to-run way to get the reference genome with arabic numerals. Your own sacCer3.fa genome should work in this tutorial if you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"chr1 chr2 chr3 ...")," naming system, not the ",(0,o.kt)("inlineCode",{parentName:"p"},"chrI chrII chrIII ..."),".")),(0,o.kt)("h2",{id:"generate-the-four-color-plot"},"Generate the Four-color Plot"),(0,o.kt)("h3",{id:"1-open-scriptmanager"},"1. Open ScriptManager"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"macos",label:"MacOS",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Depending on your system permissions, you may need to be an administrator to open this for the first time. On Mac systems, this can be done by right-clicking the file and selecting \u2018Open\u2019 at the top."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(3002).Z,style:{width:"40%",border:"solid 1px"}})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some MacOS systems may not properly open the JAR by simply double-clicking on the JAR file so you may need to open your Terminal window and execute it from the command line by executing the jar file ",(0,o.kt)("em",{parentName:"p"},"without any arguments or flags"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"java -jar /path/to/ScriptManager.jar\n")),(0,o.kt)("p",{parentName:"admonition"},"If you're not sure how to type the path to ScriptManager, you can type ",(0,o.kt)("inlineCode",{parentName:"p"},"java -jar ")," (end with space) and then drag ScriptManager from Finder into your Terminal window and then press enter."))),(0,o.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("p",null,"Double-click or right-click the ScriptManager JAR file to start the program."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(4152).Z,style:{width:"40%",border:"solid 1px"}}))),(0,o.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("p",null,"Double-click or right-click the ScriptManager JAR file to start the program."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(1745).Z,style:{width:"40%",border:"solid 1px"}})))),(0,o.kt)("p",null,"Once you see the main tool selection window, you're off to the races!"),(0,o.kt)("h3",{id:"2-resize-the-reb1-motif-aligned-bed-file"},"2. Resize the Reb1 motif-aligned BED file"),(0,o.kt)("p",null,"The BED file is the set of reference coordinates that your heatmap and composite plots will be aligned to, but you\u2019ll need to specify how far upstream and downstream you want your data to be plotted; i.e., \u201cSize of Expansion (bp). If you bed file is defined by more than a 1 bp interval AND you want to add to limits of that interval, then select  \u201cAdd to Border\u201d)."),(0,o.kt)("h4",{id:"21-navigate-to-coordinate-file-manipulation-\ufe0f-expand-bed-file"},"2.1. Navigate to Coordinate File Manipulation \u27a1\ufe0f ",(0,o.kt)("a",{parentName:"h4",href:"/scriptmanager-docs/docs/coordinate-manipulation/expand-bed"},(0,o.kt)("strong",{parentName:"a"},"Expand BED File"))),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(6386).Z,style:{width:"60%"}})),(0,o.kt)("h4",{id:"22-for-this-tutorial-use-the-50bp-expansion-and-select-expand-from-center"},'2.2. For this tutorial, use the 50bp expansion and select "Expand from Center".'),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(3397).Z,style:{width:"60%"}}),(0,o.kt)("i",{class:"fa-solid fa-arrow-right fa-lg"}),(0,o.kt)("img",{src:a(4567).Z,style:{width:"30%"}})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"BED file coordinates often need to be resized for more informative tag pileups. As a factor that binds a short motif, Reb1 does not require a large window size to visualize the motif sequence. In fact, a wider window will make it harder to visualize the stripes of color around the motif.")),(0,o.kt)("h3",{id:"3-generate-the-fasta-sequence-input"},"3. Generate the FASTA sequence input"),(0,o.kt)("h4",{id:"31-navigate-to-dna-sequence-analysis-\ufe0f-fasta-from-bed-to-create-the-input-for-generating-a-four-color-plot"},"3.1. Navigate to DNA Sequence Analysis \u27a1\ufe0f ",(0,o.kt)("a",{parentName:"h4",href:"/scriptmanager-docs/docs/sequence-analysis/fasta-extract"},(0,o.kt)("strong",{parentName:"a"},"FASTA from BED"))," to create the input for generating a Four Color plot."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(7688).Z,style:{width:"60%"}})),(0,o.kt)("h4",{id:"32-load-the-fasta-file-containing-the-genome-fasta"},"3.2. Load the FASTA file containing the Genome FASTA"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ","*",".fai file will be generated for the genome file the first time it is used. If the Genome FASTA file is NOT in proper FASTA format the script will fail")),(0,o.kt)("h4",{id:"33-load-appropriate-bed-file-for-sequence-fasta-generation"},"3.3. Load appropriate BED file for sequence FASTA generation."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(589).Z,style:{width:"60%"}}),(0,o.kt)("i",{class:"fa-solid fa-arrow-right fa-lg"}),(0,o.kt)("img",{src:a(2138).Z,style:{width:"40%"}})),(0,o.kt)("h4",{id:"34-click-calculate-to-start-the-extraction-which-outputs-a-fasta-file"},'3.4. Click "Calculate" to start the extraction which outputs a FASTA file'),(0,o.kt)("h3",{id:"4-generate-the-four-color-sequence-image"},"4. Generate the Four color sequence image"),(0,o.kt)("h4",{id:"41-navigate-to-figure-generation-\ufe0f-four-color-plot-to-generate-the-plot-once-you-have-generated-the-fasta-file-of-the-sequences-within-the-bed-regions"},"4.1. Navigate to Figure Generation \u27a1\ufe0f ",(0,o.kt)("a",{parentName:"h4",href:"/scriptmanager-docs/docs/figure-generation/four-color"},(0,o.kt)("strong",{parentName:"a"},"Four Color Plot"))," to generate the plot once you have generated the FASTA file of the sequences within the BED regions."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(5315).Z,style:{width:"60%"}})),(0,o.kt)("h4",{id:"42-load-the-fasta-file-containing-the-fasta-sequences-generated-in-step-2"},"4.2. Load the FASTA file containing the FASTA sequences (generated in step 2)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"At this point you may opt to resize the pixel dimensions of each nucleotide rectangle or customize the colors corresponding to each nucleic acid base.")),(0,o.kt)("h4",{id:"43-click-generate-to-execute-the-script"},'4.3. Click "Generate" to execute the script.'),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(4161).Z,style:{width:"60%"}}),(0,o.kt)("i",{class:"fa-solid fa-arrow-right fa-lg"}),(0,o.kt)("img",{src:a(4679).Z,style:{width:"15%"}})),(0,o.kt)("p",null,"Tah dah! You've made the four color plot! It's kind of tall but you can resize it in your favorite image editing software."),(0,o.kt)("h2",{id:"command-line-shell-script"},"Command-Line shell script"),(0,o.kt)("p",null,"The following shell commands takes a BED file and a FASTA file of the full genomic sequences to generate a four-color sequence plot of the center 50bp nucleotides in each BED coordinate interval."),(0,o.kt)("p",null," and the anticipated OUTPUT basename as environmental variables to derive the corresponding composite plot values and heatmaps. This can serve as a template for you to write out your own workflows as bash scripts that execute command-line style ScriptManager."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SCRIPTMANAGER=/path/to/ScriptManager.jar\nGENOME=/path/to/sacCer3.fa\nBEDFILE=/path/to/Reb1_Rhee_primary_sites_975.bed\nOUTPUT=/path/to/myfourcolorplot.png\n\njava -jar $SCRIPTMANAGER coordinate-manipulation expand-bed -c 50 $BEDFILE -o BED_50bp.bed\njava -jar $SCRIPTMANAGER sequence-analysis fasta-extract $GENOME $BEDFILE -o BED_50bp.fa\njava -jar $SCRIPTMANAGER figure-generation four-color BED_50bp.fa -o $OUTPUT\n\nrm BED_50bp.bed BED_50bp.fa\n\n# Output files:\n#  - /path/to/BED_50bp.fa\n#  - /path/to/myfourcolorplot.png\n")))}h.isMDXComponent=!0},4679:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Reb1_Rhee_primary_sites_975_50bp-f462ef2800b4567b1c4f67b3e231cc2a.png"},4567:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gui-expandbed-complete-031750880fd32f9fc0d7002c35bd022d.png"},3397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gui-expandbed50-f4f4192ce03a9a5fcb5b6e4f7d92ba97.png"},2138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gui-extractfasta-complete-d2a886c116f60c8df4bc432f0f9c3829.png"},589:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gui-extractfasta-e75ed1a1d8cebfd2e3df015fe4040b34.png"},4161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gui-fourcolor-7bad2334ef61cf1ac0128232661591b4.png"},6386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/maingui-expandbed-c34fe4ec13cf11c4c61fa108f2a8d5a2.png"},7688:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/maingui-extractfasta-8ee7d7bf09fa7a2c91ba40c5600423a5.png"},5315:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/maingui-fourcolor-b8c8e7c12aac0b3ad071819a748cfd27.png"},4152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LinuxOpenSM-1fe13f9ab9c369dd24c0a67c7ee86f41.png"},3002:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MacOpenSM-5f0508d59e500792ea199946818706f1.png"},1745:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/WindowsOpenSM-ac32d3855e9f0cf632ab34c5c9fc983d.png"}}]);