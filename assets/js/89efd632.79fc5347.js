"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[9338],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,f=u["".concat(p,".").concat(c)]||u[c]||s[c]||o;return a?n.createElement(f,l(l({ref:e},m),{},{components:a})):n.createElement(f,l({ref:e},m))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6348:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={id:"bam-to-gff",title:"BAM to GFF",sidebar_label:"BAM to GFF"},l=void 0,i={unversionedId:"Tools/bam-format-converter/bam-to-gff",id:"Tools/bam-format-converter/bam-to-gff",title:"BAM to GFF",description:"bam-to-gff",source:"@site/docs/Tools/bam-format-converter/bam-to-gff.md",sourceDirName:"Tools/bam-format-converter",slug:"/Tools/bam-format-converter/bam-to-gff",permalink:"/scriptmanager-docs/docs/Tools/bam-format-converter/bam-to-gff",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1689689656,formattedLastUpdatedAt:"Jul 18, 2023",frontMatter:{id:"bam-to-gff",title:"BAM to GFF",sidebar_label:"BAM to GFF"},sidebar:"toolSidebar",previous:{title:"BAM to bedGraph",permalink:"/scriptmanager-docs/docs/Tools/bam-format-converter/bam-to-bedgraph"},next:{title:"BAM to scIDX",permalink:"/scriptmanager-docs/docs/Tools/bam-format-converter/bam-to-scidx"}},p={},d=[{value:"Read Options",id:"read-options",level:3},{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3},{value:"Filter Options",id:"filter-options",level:3},{value:"Read Options",id:"read-options-1",level:3}],m={toc:d},u="wrapper";function s(t){let{components:e,...o}=t;return(0,r.kt)(u,(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bam-to-gff",src:a(2738).Z,width:"103",height:"103"})),(0,r.kt)("p",null,"Convert BAM file to GFF file"),(0,r.kt)("img",{src:a(9079).Z,style:{width:"70%"}}),(0,r.kt)("h3",{id:"read-options"},"Read Options"),(0,r.kt)("p",null,"This tool has multiple read options to output."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Read 1"),": output Read 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Read 2"),": output Read 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Combined"),": output combined reads"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Midpoint"),": output the midpoint between reads"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fragment"),": output the full fragment of two reads")),(0,r.kt)("p",null,"Note: The ",(0,r.kt)("strong",{parentName:"p"},"Midpoint")," and ",(0,r.kt)("strong",{parentName:"p"},"Fragment")," options requires proper mate-pair reading."),(0,r.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar bam-format-converter bam-to-gff [-1 | -2 | -a | -m | -f]\n[-hpsV] [-n=<MIN_INSERT>] [-o=<output>] [-x=<MAX_INSERT>] <bamFile>\n")),(0,r.kt)("h3",{id:"positional-input"},"Positional Input"),(0,r.kt)("p",null,"This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed."),(0,r.kt)("h3",{id:"output-options"},"Output Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,r.kt)("td",{parentName:"tr",align:null},"specify output directory (name will be same as original with .gff ext)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-s, --stdout")),(0,r.kt)("td",{parentName:"tr",align:null},"stream output file to STDOUT (cannot be used with ",(0,r.kt)("inlineCode",{parentName:"td"},"-o")," flag)")))),(0,r.kt)("h3",{id:"filter-options"},"Filter Options"),(0,r.kt)("p",null,"These filter options are shared across all the BAM Format Converter tools."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-p, --mate-pair")),(0,r.kt)("td",{parentName:"tr",align:null},"require proper mate pair (default not required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-n, --min-insert=<MIN_INSERT>")),(0,r.kt)("td",{parentName:"tr",align:null},"filter by min insert size in bp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-x, --max-insert=<MAX_INSERT>")),(0,r.kt)("td",{parentName:"tr",align:null},"filter by max insert size in bp")))),(0,r.kt)("h3",{id:"read-options-1"},"Read Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-1, --read1")),(0,r.kt)("td",{parentName:"tr",align:null},"output read 1 (default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-2, --read2")),(0,r.kt)("td",{parentName:"tr",align:null},"output read 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-a, --all-reads")),(0,r.kt)("td",{parentName:"tr",align:null},"output combined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-m, --midpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"output midpoint (require PE)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-f, --fragment")),(0,r.kt)("td",{parentName:"tr",align:null},"output fragment (requires PE)")))))}s.isMDXComponent=!0},9079:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/BAMtoGFFWindow-7edc74463b285a7c2e6f199c7d368238.png"},2738:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/BAMtoGFF_square-a0954586461decc58f75ad551fe810eb.svg"}}]);