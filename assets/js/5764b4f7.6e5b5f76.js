"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[3778],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),y=r,m=u["".concat(p,".").concat(y)]||u[y]||g[y]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},4515:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(8168),r=(a(6540),a(5680));const i={id:"frix-score",title:"FRiX Score Calculator",sidebar_label:"FRiX Calculator"},l=void 0,o={unversionedId:"Tools/peak-analysis/frix-score",id:"Tools/peak-analysis/frix-score",title:"FRiX Score Calculator",description:"Quantify library enrichment around a set of Reference points (Fraction of Reads in Peak/Motif, aka FRiP/FRiM).",source:"@site/docs/Tools/peak-analysis/frix-score.md",sourceDirName:"Tools/peak-analysis",slug:"/Tools/peak-analysis/frix-score",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/frix-score",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1726949323,formattedLastUpdatedAt:"Sep 21, 2024",frontMatter:{id:"frix-score",title:"FRiX Score Calculator",sidebar_label:"FRiX Calculator"},sidebar:"toolSidebar",previous:{title:"Filter BED by Proximity",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/filter-bed"},next:{title:"Align BED to Reference",permalink:"/scriptmanager-docs/docs/Tools/peak-analysis/peak-align-ref"}},p={},s=[{value:"File inputs (BAM &amp; BED)",id:"file-inputs-bam--bed",level:3},{value:"Read Aspect &amp; Type",id:"read-aspect--type",level:3},{value:"Filter Options",id:"filter-options",level:3},{value:"Read Manipulation",id:"read-manipulation",level:3},{value:"Output Statistics",id:"output-statistics",level:2},{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Positional Inputs",id:"positional-inputs",level:3},{value:"Read Options",id:"read-options",level:3},{value:"Calculation Options",id:"calculation-options",level:3},{value:"Filter Options",id:"filter-options-1",level:3},{value:"Output Options",id:"output-options",level:3}],d={toc:s},u="wrapper";function g(e){let{components:t,...i}=e;return(0,r.yg)(u,(0,n.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Quantify library enrichment around a set of Reference points (Fraction of Reads in Peak/Motif, aka FRiP/FRiM)."),(0,r.yg)("p",null,"Evaluating enrichment of a genomic library around a given set of annotations is a useful way to check how much signal is in a genomic library like a ChIP-seq dataset."),(0,r.yg)("img",{src:a(3208).A,style:{width:"70%"}}),(0,r.yg)("h3",{id:"file-inputs-bam--bed"},"File inputs (BAM & BED)"),(0,r.yg)("p",null,"This script processes BAM-type files so make sure your input is properly formatted and uses the appropriate ",(0,r.yg)("inlineCode",{parentName:"p"},".bam")," extension."),(0,r.yg)("p",null,"This script also processes BED-type files so make sure your input is properly formatted and uses the appropriate ",(0,r.yg)("inlineCode",{parentName:"p"},".bed")," or ",(0,r.yg)("inlineCode",{parentName:"p"},".bed.gz")," extension."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Make sure your BAM input files are ",(0,r.yg)("a",{parentName:"p",href:"/docs/Tools/bam-manipulation/sort-bam"},"sorted")," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/Tools/bam-manipulation/bam-indexer"},"indexed"),".")),(0,r.yg)("h3",{id:"read-aspect--type"},"Read Aspect & Type"),(0,r.yg)("p",null,"This tool has multiple read aspects to choose from."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"5' End"),": analyze the 5' end of the given read"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"3' End"),": analyze the 3' end of the given read"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Midpoint"),": analyze the midpoint between two reads")),(0,r.yg)("p",null,"Note: The ",(0,r.yg)("strong",{parentName:"p"},"Midpoint")," option requires proper paired-end reading."),(0,r.yg)("p",null,"For the ",(0,r.yg)("strong",{parentName:"p"},"5' End")," and ",(0,r.yg)("strong",{parentName:"p"},"3' End")," options, the tool also provides the selection to analyze Read 1, Read 2, or All Reads."),(0,r.yg)("h3",{id:"filter-options"},"Filter Options"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Require Proper Paired-End")," refers to the proper pairing of reads ",(0,r.yg)("strong",{parentName:"li"},"Read 1")," and ",(0,r.yg)("strong",{parentName:"li"},"Reads 2"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Filter Min Insert Size (bp)")," refers to the minimum insert size to filter"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Filter Max Insert Size (bp)")," refers to the maximum insert size to filter")),(0,r.yg)("h3",{id:"read-manipulation"},"Read Manipulation"),(0,r.yg)("p",null,"The user can shift the aligned tags by indicating the number of base pairs to be shifted by in the 'Tag Shift' box."),(0,r.yg)("h2",{id:"output-statistics"},"Output Statistics"),(0,r.yg)("p",null,"Below is an example of the text output file which shows the set of metrics calculated."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"BAM filename: /path/to/MyBAMFile.bam\nRefPT filename: /path/to/MyRefPT_100bp.bed\nNumber of Sites: 69733\nTotal aligned read count: 9435384.0\nTotal genome size: 3.137161264E9\nSummed tags at all sites: 19851.0\nFRiX score: 0.0021038889355218613\nFRiX density: 6.706346146960016E-13\n")),(0,r.yg)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,r.yg)("p",null,"Usage:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar peak-analysis frix-score [-5 | -3 | -m] [-1 | -2 | -a | -m] [-dhptVz] [--cpu=<cpu>] [-n=<MIN_INSERT>][-s=<shift>] [-x=<MAX_INSERT>] [-o=<output>] <bedFile> <bamFile>\n")),(0,r.yg)("h3",{id:"positional-inputs"},"Positional Inputs"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bedFile")),(0,r.yg)("td",{parentName:"tr",align:null},"The BED file with reference coordinates to pileup on.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bamFile")),(0,r.yg)("td",{parentName:"tr",align:null},"The BAM file from which we remove duplicates. Make sure its indexed!")))),(0,r.yg)("h3",{id:"read-options"},"Read Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-1, --read1")),(0,r.yg)("td",{parentName:"tr",align:null},"pileup of read 1 (default)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-2, --read2")),(0,r.yg)("td",{parentName:"tr",align:null},"pileup of read 2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-a, --all-reads")),(0,r.yg)("td",{parentName:"tr",align:null},"pileup all reads")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-m, --midpoint")),(0,r.yg)("td",{parentName:"tr",align:null},"pile midpoint (require PE)")))),(0,r.yg)("h3",{id:"calculation-options"},"Calculation Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-s, --shift=<shift>")),(0,r.yg)("td",{parentName:"tr",align:null},"set a shift in bp (default=0bp)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-t, --standard")),(0,r.yg)("td",{parentName:"tr",align:null},"set tags to be equal (default=false)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--cpu=<cpu>")),(0,r.yg)("td",{parentName:"tr",align:null},"set number of CPUs to use (default=1)")))),(0,r.yg)("h3",{id:"filter-options-1"},"Filter Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-p, --require-pe")),(0,r.yg)("td",{parentName:"tr",align:null},"require proper paired ends (default=false), automatically turned on with any of flags -mnx")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-n, --min-insert=<MIN_INSERT>")),(0,r.yg)("td",{parentName:"tr",align:null},"filter by minimum insert size in bp, require PE (default=no minimum)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-x, --max-insert=<MAX_INSERT>")),(0,r.yg)("td",{parentName:"tr",align:null},"filter by maximum insert size in bp, require PE (default=no maximum)")))),(0,r.yg)("h3",{id:"output-options"},"Output Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,r.yg)("td",{parentName:"tr",align:null},"specify output file")))))}g.isMDXComponent=!0},3208:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/FRiXCalculatorWindow-cbe4c4c04e0385a115a0956661b6eae9.png"}}]);