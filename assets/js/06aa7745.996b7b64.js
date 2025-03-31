"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[6600],{1147:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(8168),n=(a(6540),a(5680));const i={id:"index",title:"BAM Statistics",sidebar_label:"BAM Statistics"},s=void 0,o={unversionedId:"Tools/bam-statistics/index",id:"Tools/bam-statistics/index",title:"BAM Statistics",description:"Perform various statistical checks on BAM files (e.g. insert size distributions and coverage correlations).",source:"@site/docs/Tools/bam-statistics/index.md",sourceDirName:"Tools/bam-statistics",slug:"/Tools/bam-statistics/",permalink:"/scriptmanager-docs/docs/Tools/bam-statistics/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1697064046,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"index",title:"BAM Statistics",sidebar_label:"BAM Statistics"},sidebar:"toolSidebar",previous:{title:"Sort BAM",permalink:"/scriptmanager-docs/docs/Tools/bam-manipulation/sort-bam"},next:{title:"bam-correlation",permalink:"/scriptmanager-docs/docs/Tools/bam-statistics/bam-correlation"}},l={},c=[],d={toc:c},p="wrapper";function m(t){let{components:e,...a}=t;return(0,n.yg)(p,(0,r.A)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Perform various statistical checks on BAM files (e.g. insert size distributions and coverage correlations)."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Tool Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Input"),(0,n.yg)("th",{parentName:"tr",align:null},"Output"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/Tools/bam-statistics/se-stat"},(0,n.yg)("inlineCode",{parentName:"a"},"se-stat"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#bam"},"BAM")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#txt"},"TXT")),(0,n.yg)("td",{parentName:"tr",align:null},"Genome-Genome correlations for replicate comparisons given multiple sorted and indexed (BAI) BAM files.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/Tools/bam-statistics/pe-stat"},(0,n.yg)("inlineCode",{parentName:"a"},"pe-stat"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#bam"},"BAM")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#txt"},"TXT")),(0,n.yg)("td",{parentName:"tr",align:null},"Generates Insert-size Histogram statistic (GEO requirement) and outputs BAM Header including alignment statistics and parameters given a sorted and indexed (BAI) paired-end BAM File.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/Tools/bam-statistics/bam-correlation"},(0,n.yg)("inlineCode",{parentName:"a"},"bam-correlation"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#bam"},"BAM")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/Guides/Getting-Started/file-formats#txt"},"TXT")),(0,n.yg)("td",{parentName:"tr",align:null},"Output BAM Header including alignment statistics and parameters given any indexed (BAI) BAM File.")))))}m.isMDXComponent=!0},5680:(t,e,a)=>{a.d(e,{xA:()=>d,yg:()=>u});var r=a(6540);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=c(a),g=n,u=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return a?r.createElement(u,s(s({ref:e},d),{},{components:a})):r.createElement(u,s({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[p]="string"==typeof t?t:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);