"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[8640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"search-motif",title:"Search Motif",sidebar_label:"search-motif"},o=void 0,l={unversionedId:"sequence-analysis/search-motif",id:"sequence-analysis/search-motif",title:"Search Motif",description:"search-motif",source:"@site/docs/sequence-analysis/search-motif.md",sourceDirName:"sequence-analysis",slug:"/sequence-analysis/search-motif",permalink:"/scriptmanager-docs/docs/sequence-analysis/search-motif",draft:!1,tags:[],version:"current",lastUpdatedBy:"Courtney LeSon",lastUpdatedAt:1686672456,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"search-motif",title:"Search Motif",sidebar_label:"search-motif"},sidebar:"toolSidebar",previous:{title:"randomize-fasta",permalink:"/scriptmanager-docs/docs/sequence-analysis/randomize-fasta"},next:{title:"dna-shape-bed",permalink:"/scriptmanager-docs/docs/sequence-analysis/dna-shape-bed"}},s={},p=[{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3},{value:"Search Options",id:"search-options",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"search-motif",src:a(2370).Z,width:"103",height:"103"})),(0,r.kt)("p",null,"Search for an IUPAC DNA sequence motif in FASTA files with mismatches allowed"),(0,r.kt)("img",{src:a(4149).Z,style:{width:"70%"}}),(0,r.kt)("h1",{id:"command-line-interface"},"Command Line Interface"),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar sequence-analysis search-motif [-hV] -m=<motif>\n[-n=<ALLOWED_MISMATCH>] [-o=<output>] <fastaFile>\n")),(0,r.kt)("h3",{id:"positional-input"},"Positional Input"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<fastaFile>")),(0,r.kt)("td",{parentName:"tr",align:null},"The FASTA file in which to search for the motif.")))),(0,r.kt)("h3",{id:"output-options"},"Output Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,r.kt)("td",{parentName:"tr",align:null},"specify output file")))),(0,r.kt)("h3",{id:"search-options"},"Search Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-m, --motif=<motif>")),(0,r.kt)("td",{parentName:"tr",align:null},"the IUPAC motif to search for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-n, --mismatches=<ALLOWED_MISMATCH>")),(0,r.kt)("td",{parentName:"tr",align:null},"the number of mismatches allowed (default=0)")))))}m.isMDXComponent=!0},4149:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SearchMotifWindow-770b4f797ea3a9f21589c58bfdcefa98.png"},2370:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SearchMotif_square-873eb5425360d560bd63902f49b93e1b.svg"}}]);