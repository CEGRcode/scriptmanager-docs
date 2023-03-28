"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[3107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),o=a(6010);const n={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(n.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),o=a(7294),n=a(6010),i=a(2466),l=a(6550),s=a(1980),c=a(7392),d=a(12);function u(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:o}}=e;return{value:t,label:a,attributes:r,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=p(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[s,c]=g({queryString:a,groupId:r}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,d.Nk)(a);return[r,(0,o.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),f=(()=>{const e=s??u;return m({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,n]),tabValues:n}}var f=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=c[a].value;r!==l&&(u(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,n.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=h(e);return o.createElement("div",{className:(0,n.Z)("tabs-container",b.tabList)},o.createElement(k,(0,r.Z)({},e,t)),o.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(v,(0,r.Z)({key:String(t)},e))}},5838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=a(7462),o=(a(7294),a(3905)),n=a(4866),i=a(5162),l=a(9960);const s={id:"genome-tracks-tutorial",title:"Making Genome Tracks Tutorial",sidebar_label:"Genome Tracks (BigWig)"},c=void 0,d={unversionedId:"Tutorials/genome-tracks-tutorial",id:"Tutorials/genome-tracks-tutorial",title:"Making Genome Tracks Tutorial",description:"How to turn your BAM files into genome track files that can be viewed in a genome browser",source:"@site/docs/Tutorials/genome-tracks-tutorial.md",sourceDirName:"Tutorials",slug:"/Tutorials/genome-tracks-tutorial",permalink:"/scriptmanager-docs/docs/Tutorials/genome-tracks-tutorial",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1680027051,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{id:"genome-tracks-tutorial",title:"Making Genome Tracks Tutorial",sidebar_label:"Genome Tracks (BigWig)"},sidebar:"someSidebar",previous:{title:"Genomic Features",permalink:"/scriptmanager-docs/docs/Tutorials/genomic-features-tutorial"},next:{title:"File Formats",permalink:"/scriptmanager-docs/docs/References/file-formats"}},u={},p=[{value:"Download ScriptManager (v0.14):",id:"download-scriptmanager-v014",level:2},{value:"Download USCS binary <code>bedGraphToBigWig</code>",id:"download-uscs-binary-bedgraphtobigwig",level:2},{value:"Download data",id:"download-data",level:2},{value:"BAM File",id:"bam-file",level:3},{value:"XXXX.chrom.sizes Reference File",id:"xxxxchromsizes-reference-file",level:3},{value:"Generate the Genome Tracks",id:"generate-the-genome-tracks",level:2},{value:"1. Open ScriptManager",id:"1-open-scriptmanager",level:3},{value:"2. Create a whole-genome pileup using BAM Format Converter Tools",id:"2-create-a-whole-genome-pileup-using-bam-format-converter-tools",level:3},{value:"2.1. Navigate to BAM Format Converter \u27a1\ufe0f BAM to scIDX to do a genome-wide pileup of your BAM",id:"21-navigate-to-bam-format-converter-\ufe0f-bam-to-scidx-to-do-a-genome-wide-pileup-of-your-bam",level:4},{value:"2.2. Select Encoding information",id:"22-select-encoding-information",level:4},{value:"2.3. Execute pileup",id:"23-execute-pileup",level:4},{value:"3. (Optional) Normalize the genome track",id:"3-optional-normalize-the-genome-track",level:3},{value:"3.1. Navigate to Read Analysis \u27a1\ufe0f Calculate Scaling Factor to calculate a scaling factor",id:"31-navigate-to-read-analysis-\ufe0f-calculate-scaling-factor-to-calculate-a-scaling-factor",level:4},{value:"3.2. Select the BAM file you want to create the data track from",id:"32-select-the-bam-file-you-want-to-create-the-data-track-from",level:4},{value:"3.3. Select a normalization method and execute",id:"33-select-a-normalization-method-and-execute",level:4},{value:"3.4. Navigate to Read Analysis \u27a1\ufe0f Scale Matrix to apply the normalization to the data track",id:"34-navigate-to-read-analysis-\ufe0f-scale-matrix-to-apply-the-normalization-to-the-data-track",level:4},{value:"3.2. Input the normalization factor and adjust the start row to 2",id:"32-input-the-normalization-factor-and-adjust-the-start-row-to-2",level:4},{value:"3.3. Load the file and execute matrix scaling",id:"33-load-the-file-and-execute-matrix-scaling",level:4},{value:"4. Convert scIDX to BigWig",id:"4-convert-scidx-to-bigwig",level:3},{value:"4.1. Turn your scIDX file into a bedGraph file",id:"41-turn-your-scidx-file-into-a-bedgraph-file",level:4},{value:"4.2. Turn your bedGraph file into a BigWig file",id:"42-turn-your-bedgraph-file-into-a-bigwig-file",level:4},{value:"4.3. Load the BigWig into your favorite genome browser",id:"43-load-the-bigwig-into-your-favorite-genome-browser",level:4},{value:"Command-Line shell script",id:"command-line-shell-script",level:2}],m={toc:p},g="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(g,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"How to turn your BAM files into genome track files that can be viewed in a genome browser")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal:")," This tutorial provides a guide to transforming and filtering your ChIP-exo alignment data into files that can be uploaded by a genome browser."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(3785).Z,style:{width:"100%"}})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u2757 ",(0,o.kt)("strong",{parentName:"p"}," BigWig Warning "),"\u2757\nBe careful about performing analysis steps using BigWig files instead of BAM files. BigWigs are excellent for visualizing data pileups in a genome browser but if you are processing data, we recommend you process data directly from BAM formats. From a information content and reproducibility standpoint, BAM files have notable advantages over BigWigs. ",(0,o.kt)("a",{parentName:"p",href:"/docs/Contributing/developer-guidelines#scriptmanager-design-principles"},"Read more about some of these advantages"))),(0,o.kt)("p",null,"This tutorial is based on the processing script from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CEGRcode/2022-Mittal_SAGA/blob/main/03_Bulk_Processing/job/bulk_geo_tracks.pbs"},"Mittal et al, 2022")," to turn BAM files into BigWig tracks ",(0,o.kt)("strong",{parentName:"p"},"with base-pair resolution for high resolution assays"),"."),(0,o.kt)("p",null,"There will be a couple steps that need to be performed on the command line using UCSC binaries because we currently don't have a parser for BigWig files (in the works but not ready yet). In the meantime, here are the step-by-step instructions for using as much of ScriptManager's GUI as possible to generate the BigWig track."),(0,o.kt)("h2",{id:"download-scriptmanager-v014"},"Download ScriptManager (v0.14):"),(0,o.kt)("p",null,"The current version of ScriptManager is available for download ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/CEGRcode/scriptmanager/releases/download/v0.14/ScriptManager-v0.14.jar"},"here")),". Make sure you have ",(0,o.kt)("a",{parentName:"p",href:"/docs/#java"},"Java installed"),"."),(0,o.kt)("p",null,"The file ",(0,o.kt)("inlineCode",{parentName:"p"},"ScriptManager-v0.14.jar")," should be placed someplace locally accessible. For example on Mac OS on the Desktop (Permissions will need to be accepted) or someplace in your home directory (i.e. Macintosh HD/Users/userID/ScriptManager)"),(0,o.kt)("h2",{id:"download-uscs-binary-bedgraphtobigwig"},"Download USCS binary ",(0,o.kt)("inlineCode",{parentName:"h2"},"bedGraphToBigWig")),(0,o.kt)("p",null,"You will need to download the precompiled binary for converting bedGraphs to BigWig files. Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://hgdownload.soe.ucsc.edu/admin/exe/"},"UCSC executables FTP"),". Click the link to the OS that matches your machine and scroll down to download the ",(0,o.kt)("inlineCode",{parentName:"p"},"bedGraphToBigWig")," binary."),(0,o.kt)(n.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"linux-macos",label:"Linux/MacOS",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Make sure you modify the permissions so that you can execute the binary. You can do this with ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chmod 755 /path/to/bedGraphToBigWig\n")),(0,o.kt)("p",null,"For example, if your ",(0,o.kt)("inlineCode",{parentName:"p"},"bedGraphToBigWig")," binary downloaded to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Downloads")," folder,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chmod 755 ~/Downloads/bedGraphToBigWig\n")))),(0,o.kt)("h2",{id:"download-data"},"Download data"),(0,o.kt)("p",null,"You need one file of sequencing data alignments (BAM) to complete this exercise and a file with the sacCer3 yeast reference genome chromosome sizes (",(0,o.kt)("inlineCode",{parentName:"p"},"chrom.sizes"),"). ",(0,o.kt)("a",{parentName:"p",href:"/docs/References/file-formats"},"Read more about the BAM file format here.")),(0,o.kt)("h3",{id:"bam-file"},"BAM File"),(0,o.kt)("p",null,"This is the set of Reb1 read alignments from the Yeast Epigenome Project (YEP). ",(0,o.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/33692541/"},"See Rossi et al (2021)")," for more details."),(0,o.kt)(l.Z,{className:"button button--secondary",href:"ftp://data1.commons.psu.edu/pub/commons/eberly/pughlab/yeast-epigenome-project/12141_YEP.zip",mdxType:"Link"},"Download sample BAM file"),(0,o.kt)("p",null,"OR"),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(5553).Z,style:{width:"60%"}})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"http://www.yeastepigenome.org/"},"www.yeastepigenome.org")," and search for Reb1"),(0,o.kt)("li",{parentName:"ol"},'Select "META DATA"'),(0,o.kt)("li",{parentName:"ol"},'Select "Direct Download"'),(0,o.kt)("li",{parentName:"ol"},"Unzip the resulting file \u201812141_YEP.zip\u2019 and inspect the contents of the new ",(0,o.kt)("inlineCode",{parentName:"li"},"12141_YEP")," folder. It should contain a file called ",(0,o.kt)("inlineCode",{parentName:"li"},"12141_filtered.bam"),".")),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(7087).Z,style:{width:"50%"}}),(0,o.kt)("img",{src:a(756).Z,style:{width:"50%"}})),(0,o.kt)("h3",{id:"xxxxchromsizes-reference-file"},"XXXX.chrom.sizes Reference File"),(0,o.kt)("p",null,"You will also need the chromosome sizes file of the yeast reference genome (sacCer3):"),(0,o.kt)(l.Z,{className:"button button--secondary",href:"https://hgdownload.soe.ucsc.edu/goldenPath/sacCer3/bigZips/sacCer3.chrom.sizes",mdxType:"Link"},"Download sacCer3.chrom.sizes (TXT)"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The downloaded sacCer3.chrom.sizes file may be using the roman numeral naming system (",(0,o.kt)("inlineCode",{parentName:"p"},"chrI chrII chrIII ..."),"). You will need to modify this to the arabic (",(0,o.kt)("inlineCode",{parentName:"p"},"chr1 chr2 chr3 ..."),") numeral naming system if you plan to use the BAM file linked above. You can do this in a simple text editor."),(0,o.kt)("p",{parentName:"admonition"},"Also, if the file is missing the ",(0,o.kt)("inlineCode",{parentName:"p"},"2-micron")," row, you will need to add it manually. Simply append the following tab-delimited row to the bottom of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sacCer3.chrom.sizes")," file."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"2-micron    6318\n"))),(0,o.kt)("h2",{id:"generate-the-genome-tracks"},"Generate the Genome Tracks"),(0,o.kt)("h3",{id:"1-open-scriptmanager"},"1. Open ScriptManager"),(0,o.kt)(n.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"macos",label:"MacOS",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Depending on your system permissions, you may need to be an administrator to open this for the first time. On Mac systems, this can be done by right-clicking the file and selecting \u2018Open\u2019 at the top."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(3002).Z,style:{width:"40%",border:"solid 1px"}})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some MacOS systems may not properly open the JAR by simply double-clicking on the JAR file so you may need to open your Terminal window and execute it from the command line by executing the jar file ",(0,o.kt)("em",{parentName:"p"},"without any arguments or flags"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"java -jar /path/to/ScriptManager.jar\n")),(0,o.kt)("p",{parentName:"admonition"},"If you're not sure how to type the path to ScriptManager, you can type ",(0,o.kt)("inlineCode",{parentName:"p"},"java -jar ")," (end with space) and then drag ScriptManager from Finder into your Terminal window and then press enter."))),(0,o.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("p",null,"Double-click or right-click the ScriptManager JAR file to start the program."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(4152).Z,style:{width:"40%",border:"solid 1px"}}))),(0,o.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("p",null,"Double-click or right-click the ScriptManager JAR file to start the program."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(1745).Z,style:{width:"40%",border:"solid 1px"}})))),(0,o.kt)("p",null,"Once you see the main tool selection window, you're off to the races!"),(0,o.kt)("h3",{id:"2-create-a-whole-genome-pileup-using-bam-format-converter-tools"},"2. Create a whole-genome pileup using BAM Format Converter Tools"),(0,o.kt)("h4",{id:"21-navigate-to-bam-format-converter-\ufe0f-bam-to-scidx-to-do-a-genome-wide-pileup-of-your-bam"},"2.1. Navigate to BAM Format Converter \u27a1\ufe0f ",(0,o.kt)("a",{parentName:"h4",href:"/docs/bam-format-converter/bam-to-scidx"},(0,o.kt)("strong",{parentName:"a"},"BAM to scIDX"))," to do a genome-wide pileup of your BAM"),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(44).Z,style:{width:"60%"}})),(0,o.kt)("h4",{id:"22-select-encoding-information"},"2.2. Select Encoding information"),(0,o.kt)("p",null,"Since this is a ChIP-exo dataset, we will select Read 1 (5' end) for the encoding. You may select insert size filters if you wish."),(0,o.kt)("h4",{id:"23-execute-pileup"},"2.3. Execute pileup"),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(8131).Z,style:{width:"60%"}}),(0,o.kt)("i",{class:"fa-solid fa-arrow-right fa-lg"}),(0,o.kt)("img",{src:a(3601).Z,style:{width:"40%"}})),(0,o.kt)("p",null,"This should output a ",(0,o.kt)("inlineCode",{parentName:"p"},"12141_filtered_READ1.tab")," file."),(0,o.kt)("h3",{id:"3-optional-normalize-the-genome-track"},"3. (Optional) Normalize the genome track"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Skip this if you would like to make a track of the raw read counts.")),(0,o.kt)("p",null,'ScriptManager includes a "Calculate Scaling Factor" tool under the "Read Analysis" tool group that can calculate scaling factors based on several methodologies including total tag normalization and the Normalization of ChIP-seq (NCIS) protocol. ',(0,o.kt)("a",{parentName:"p",href:"/docs/read-analysis/scaling-factor"},"Read more in the docs.")," Please be sure to check that your ",(0,o.kt)("a",{parentName:"p",href:"/docs/read-analysis/scaling-factor#"},"normalization method is appropriate")," for your data."),(0,o.kt)("h4",{id:"31-navigate-to-read-analysis-\ufe0f-calculate-scaling-factor-to-calculate-a-scaling-factor"},"3.1. Navigate to Read Analysis \u27a1\ufe0f ",(0,o.kt)("a",{parentName:"h4",href:"/docs/read-analysis/scaling-factor"},(0,o.kt)("strong",{parentName:"a"},"Calculate Scaling Factor"))," to calculate a scaling factor"),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(6266).Z,style:{width:"60%"}})),(0,o.kt)("h4",{id:"32-select-the-bam-file-you-want-to-create-the-data-track-from"},"3.2. Select the BAM file you want to create the data track from"),(0,o.kt)("h4",{id:"33-select-a-normalization-method-and-execute"},"3.3. Select a normalization method and execute"),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(5772).Z,style:{width:"60%"}}),(0,o.kt)("i",{class:"fa-solid fa-arrow-right fa-lg"}),(0,o.kt)("div",null,(0,o.kt)("img",{src:a(793).Z}),(0,o.kt)("img",{src:a(6345).Z}))),(0,o.kt)("p",null,"For this BAM file, the total tag method gives a scaling factor of ",(0,o.kt)("inlineCode",{parentName:"p"},"9.562259045426815"),"."),(0,o.kt)("h4",{id:"34-navigate-to-read-analysis-\ufe0f-scale-matrix-to-apply-the-normalization-to-the-data-track"},"3.4. Navigate to Read Analysis \u27a1\ufe0f ",(0,o.kt)("a",{parentName:"h4",href:"/docs/read-analysis/scale-matrix"},(0,o.kt)("strong",{parentName:"a"},"Scale Matrix"))," to apply the normalization to the data track"),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(4933).Z,style:{width:"60%"}})),(0,o.kt)("h4",{id:"32-input-the-normalization-factor-and-adjust-the-start-row-to-2"},"3.2. Input the normalization factor and adjust the start row to 2"),(0,o.kt)("h4",{id:"33-load-the-file-and-execute-matrix-scaling"},"3.3. Load the file and execute matrix scaling"),(0,o.kt)("p",null,"You will be loading in the scIDX file (not the BAM)."),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(5273).Z,style:{width:"60%"}}),(0,o.kt)("i",{class:"fa-solid fa-arrow-right fa-lg"}),(0,o.kt)("img",{src:a(7583).Z,style:{width:"40%"}})),(0,o.kt)("p",null,"This should output a ",(0,o.kt)("inlineCode",{parentName:"p"},"12141_filtered_READ1_SCALE.tab")," file."),(0,o.kt)("h3",{id:"4-convert-scidx-to-bigwig"},"4. Convert scIDX to BigWig"),(0,o.kt)("p",null,"Since ScriptManager currently does not support converting BedGraph files to BigWigs, this step must be done in your terminal/on the command-prompt."),(0,o.kt)("h4",{id:"41-turn-your-scidx-file-into-a-bedgraph-file"},"4.1. Turn your scIDX file into a bedGraph file"),(0,o.kt)(n.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"shell",label:"Shell",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grep -v -f sacCer3.chrom.sizes 12141_filtered_READ1_SCALE.tab > 12141_filtered_READ1_SCALE.filtered.tab\nsed '1d;2d' 12141_filtered_READ1_SCALE.filtered.tab | awk '{OFS=\"\\t\"}{FS=\"\\t\"}{print $1, $2, $2+1, $3}' |sort -k1,1 -k2,2n > 12141_filtered_READ1_SCALE_forward.bedgraph\nsed '1d;2d' 12141_filtered_READ1_SCALE.filtered.tab | awk '{OFS=\"\\t\"}{FS=\"\\t\"}{print $1, $2, $2+1, $4}' |sort -k1,1 -k2,2n > 12141_filtered_READ1_SCALE_reverse.bedgraph\n"))),(0,o.kt)(i.Z,{value:"excel",label:"Excel",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Open your file in excel and strip the file of the first two rows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#2023-03-10 12:52:40.439;12141_filtered.bam;READ1\nchrom   index   forward reverse value\n")),(0,o.kt)("p",null,"You may also have read mapping to the very edges of the chromosome. These entries will also have to be removed."),(0,o.kt)("p",null,"Then rearrange the columns into BedGraph format by copying them in the following order (3rd column is the value of col2 plus one):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"12141_filtered_READ1_SCALE_forward.bedGraph"),": col1, col2, (col2 +1), col3"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"12141_filtered_READ1_SCALE_forward.bedGraph"),": col1, col2, (col2 +1), col4")),(0,o.kt)("p",null,"...and then sort each of them by the first and then the second columns. This format is tab-delimited (not comma-delimited!) so save as a tab-delimited text file. Do not save this as an Excel file format (",(0,o.kt)("inlineCode",{parentName:"p"},".xlsx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".xls"),", etc). This should be a ",(0,o.kt)("inlineCode",{parentName:"p"},".tsv")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".tab")," format."))),(0,o.kt)("h4",{id:"42-turn-your-bedgraph-file-into-a-bigwig-file"},"4.2. Turn your bedGraph file into a BigWig file"),(0,o.kt)(n.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"shell",label:"Shell",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bedGraphToBigWig 12141_filtered_READ1_SCALE_forward.bedGraph sacCer3.chrom.sizes my-track-basename_forward.bw\n./bedGraphToBigWig 12141_filtered_READ1_SCALE_reverse.bedGraph sacCer3.chrom.sizes my-track-basename_reverse.bw\n")))),(0,o.kt)("h4",{id:"43-load-the-bigwig-into-your-favorite-genome-browser"},"4.3. Load the BigWig into your ",(0,o.kt)("a",{parentName:"h4",href:"https://software.broadinstitute.org/software/igv/download"},"favorite genome browser")),(0,o.kt)("div",{class:"tutorial-img-flow-container"},(0,o.kt)("img",{src:a(3785).Z,style:{width:"80%"}})),(0,o.kt)("p",null,"Tah dah! You've made the genome tracks for a ChIP-exo dataset!"),(0,o.kt)("h2",{id:"command-line-shell-script"},"Command-Line shell script"),(0,o.kt)("p",null,"The following shell commands mirror the manipulations described above to create BigWig genome tracks. This can serve as a template for you to write out your own workflows as bash scripts that execute command-line style ScriptManager."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SCRIPTMANAGER=/path/to/ScriptManager.jar\nBGTOBW=/path/to/bedGraphToBigWig\nCHRMSZ=/path/to/sacCer3.chrom.sizes\nBAMFILE=/path/to/12141_filtered.bam\nOUTPUT=/path/to/my-track-basename\nFACTOR=9.562259045426815  # calculate this separately\n\n# Index BAM if not already indexed\n[ -f $BAMFILE.bai ] || samtools index $BAMFILE\n# Pileup BAM along whole genome\njava -jar $SCRIPTMANAGER bam-format-converter bam-to-scidx $BAMFILE -o $OUTPUT.raw.tab\n# Only include pileups from chromosomes in the sacCer3.chrom.sizes reference\ngrep -v -f $CHRMSZ $OUTPUT.raw.tab > $OUTPUT.filtered.tab\n# Scale SCIDX output (optional)\njava -jar $SCRIPTMANAGER read-analysis scale-matrix $OUTPUT.filtered.tab -s $FACTOR -r 2 -o $OUTPUT.scaled.tab\n# Convert to forward/reverse Bedgraph tracks\nsed '1d;2d' $OUTPUT.scaled.tab | awk '{OFS=\"\\t\"}{FS=\"\\t\"}{print $1, $2, $2+1, $3}' |sort -k1,1 -k2,2n > $OUTPUT.forward.bedgraph\nsed '1d;2d' $OUTPUT.scaled.tab | awk '{OFS=\"\\t\"}{FS=\"\\t\"}{print $1, $2, $2+1, $4}' |sort -k1,1 -k2,2n > $OUTPUT.reverse.bedgraph\n# Compress to BigWig format\n$BGTOBW $OUTPUT.forward.bedgraph $CHRMSZ $OUTPUT\\_forward.bw\n$BGTOBW $OUTPUT.reverse.bedgraph $CHRMSZ $OUTPUT\\_reverse.bw\n\n# Clean-up\nrm $OUTPUT.raw.tab $OUTPUT.filtered.tab $OUTPUT.scaled.tab $OUTPUT.forward.bedgraph $OUTPUT.reverse.bedgraph\n\n# Output files:\n#  - /path/to/my-track-basename_forward.bw\n#  - /path/to/my-track-basename_reverse.bw\n")))}h.isMDXComponent=!0},5553:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/download-yep-home-f975840806150a454e5ec6533fd7fd53.png"},756:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/download-yep-reb1-metadata-ab2aeca9e2417d0c313723d71a34d85b.png"},7087:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/download-yep-reb1-3dd6db352f8dab08f27e1cad8092367f.png"},3601:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gui-bamtoscidx-output-ee4852e4db0dbbcab067e03bfe1f8537.png"},8131:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gui-bamtoscidx-ad3c2db72cce5b6733b0e39637c7a997.png"},7583:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gui-scalematrix-dialog-4df8e8f3d993fda3cd3422a4d575d7b8.png"},5273:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gui-scalematrix-02240129e3eefbd76eb286091e1c9d90.png"},6345:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gui-scalingfactor-dialog-ef95d930872de2663dbe5b30ee40d9a0.png"},793:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gui-scalingfactor-output-6a4014ce47e5493129f82fdef3a1bfaa.png"},5772:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gui-scalingfactor-a34b91e737de24602674d967d44e0901.png"},44:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/maingui-bamtoscidx-673594bf8e06d0b7074206cda67ec2fb.png"},4933:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/maingui-scalematrix-f62550542d34549096c181a3c9062f5c.png"},6266:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/maingui-scalingfactor-b82954571a684d31b33b299dcfff78a3.png"},3785:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IGV_BrowserShot-1ff8f8b15497181fcb1800cc6fc746f5.png"},4152:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/LinuxOpenSM-1fe13f9ab9c369dd24c0a67c7ee86f41.png"},3002:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MacOpenSM-5f0508d59e500792ea199946818706f1.png"},1745:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/WindowsOpenSM-ac32d3855e9f0cf632ab34c5c9fc983d.png"}}]);