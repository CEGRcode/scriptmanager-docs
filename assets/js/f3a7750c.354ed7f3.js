"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[3253],{5680:(t,e,i)=>{i.d(e,{xA:()=>d,yg:()=>p});var a=i(6540);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function I(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?I(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,a,n=function(t,e){if(null==t)return{};var i,a,n={},I=Object.keys(t);for(a=0;a<I.length;a++)i=I[a],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(t);for(a=0;a<I.length;a++)i=I[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var s=a.createContext({}),l=function(t){var e=a.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},d=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var i=t.components,n=t.mdxType,I=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=l(i),u=n,p=c["".concat(s,".").concat(u)]||c[u]||g[u]||I;return i?a.createElement(p,r(r({ref:e},d),{},{components:i})):a.createElement(p,r({ref:e},d))}));function p(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var I=i.length,r=new Array(I);r[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:n,r[1]=o;for(var l=2;l<I;l++)r[l]=i[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},182:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>I,metadata:()=>o,toc:()=>l});var a=i(8168),n=(i(6540),i(5680));const I={id:"se-stat",title:"Single-End Statistics",sidebar_label:"Single-End Statistics"},r=void 0,o={unversionedId:"Tools/bam-statistics/se-stat",id:"Tools/bam-statistics/se-stat",title:"Single-End Statistics",description:"se-stat",source:"@site/docs/Tools/bam-statistics/se-stat.md",sourceDirName:"Tools/bam-statistics",slug:"/Tools/bam-statistics/se-stat",permalink:"/scriptmanager-docs/docs/Tools/bam-statistics/se-stat",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1724192858,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{id:"se-stat",title:"Single-End Statistics",sidebar_label:"Single-End Statistics"},sidebar:"toolSidebar",previous:{title:"Paired-End Statistics",permalink:"/scriptmanager-docs/docs/Tools/bam-statistics/pe-stat"},next:{title:"Coordinate Manipulation",permalink:"/scriptmanager-docs/docs/Tools/coordinate-manipulation/"}},s={},l=[{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3}],d={toc:l},c="wrapper";function g(t){let{components:e,...I}=t;return(0,n.yg)(c,(0,a.A)({},d,I,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"se-stat",src:i(9689).A,width:"103",height:"103"})),(0,n.yg)("p",null,"Output BAM Header including alignment statistics and parameters given any indexed (BAI) BAM File."),(0,n.yg)("img",{src:i(4907).A,style:{width:"70%"}}),(0,n.yg)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,n.yg)("p",null,"Usage:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar bam-statistics se-stat <bamFile>\n[-hV] [-o=<output>]\n")),(0,n.yg)("h3",{id:"positional-input"},"Positional Input"),(0,n.yg)("p",null,"This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed."),(0,n.yg)("h3",{id:"output-options"},"Output Options"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Option"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,n.yg)("td",{parentName:"tr",align:null},"Specify output file")))))}g.isMDXComponent=!0},4907:(t,e,i)=>{i.d(e,{A:()=>a});const a=i.p+"assets/images/SEStatWindow-3b39d0ff5496a36fb02967c053d21e73.png"},9689:(t,e,i)=>{i.d(e,{A:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzA3MDYwNjt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnIGlkPSJGb3VyX0NvbG9yX1NlcXVlbmNlX1Bsb3QiPgoJPHBhdGggaWQ9InNxdWFyZSIgY2xhc3M9InN0MCIgZD0iTTkuMywxLjVoODQuNGM0LjMsMCw3LjgsMy41LDcuOCw3Ljh2ODQuNGMwLDQuMy0zLjUsNy44LTcuOCw3LjhIOS4zYy00LjMsMC03LjgtMy41LTcuOC03LjhWOS4zCgkJQzEuNSw1LDUsMS41LDkuMywxLjV6Ii8+CjwvZz4KPHJlY3QgeD0iMTMuNiIgeT0iMzAuMiIgY2xhc3M9InN0MSIgd2lkdGg9IjIyLjUiIGhlaWdodD0iMy4zIi8+CjxyZWN0IHg9IjEzLjYiIHk9IjIwLjUiIGNsYXNzPSJzdDEiIHdpZHRoPSI3NS43IiBoZWlnaHQ9IjMuMyIvPgo8cmVjdCB4PSIxMy42IiB5PSI3OS4xIiBjbGFzcz0ic3QxIiB3aWR0aD0iNzUuNyIgaGVpZ2h0PSIzLjMiLz4KPHJlY3QgeD0iMTUuNCIgeT0iNzIuNSIgY2xhc3M9InN0MSIgd2lkdGg9IjcuNyIgaGVpZ2h0PSIzLjMiLz4KPHJlY3QgeD0iMjguNiIgeT0iNzIuNSIgY2xhc3M9InN0MSIgd2lkdGg9IjcuNyIgaGVpZ2h0PSIzLjMiLz4KPHJlY3QgeD0iMzkuMiIgeT0iNzIuNSIgY2xhc3M9InN0MSIgd2lkdGg9IjcuNyIgaGVpZ2h0PSIzLjMiLz4KPHJlY3QgeD0iNTUuOSIgeT0iNzIuNSIgY2xhc3M9InN0MSIgd2lkdGg9IjcuNyIgaGVpZ2h0PSIzLjMiLz4KPHJlY3QgeD0iNjcuMSIgeT0iNzIuNSIgY2xhc3M9InN0MSIgd2lkdGg9IjcuNyIgaGVpZ2h0PSIzLjMiLz4KPHJlY3QgeD0iODAuMiIgeT0iNzIuNSIgY2xhc3M9InN0MSIgd2lkdGg9IjcuNyIgaGVpZ2h0PSIzLjMiLz4KPHJlY3QgeD0iMTciIHk9IjY1LjkiIGNsYXNzPSJzdDEiIHdpZHRoPSI3LjciIGhlaWdodD0iMy4zIi8+CjxyZWN0IHg9IjMxLjgiIHk9IjY1LjkiIGNsYXNzPSJzdDEiIHdpZHRoPSI3LjciIGhlaWdodD0iMy4zIi8+CjxyZWN0IHg9IjQ2LjgiIHk9IjY1LjkiIGNsYXNzPSJzdDEiIHdpZHRoPSI3LjciIGhlaWdodD0iMy4zIi8+CjxyZWN0IHg9IjYxLjYiIHk9IjY1LjkiIGNsYXNzPSJzdDEiIHdpZHRoPSI3LjciIGhlaWdodD0iMy4zIi8+CjxyZWN0IHg9Ijc2LjciIHk9IjY1LjkiIGNsYXNzPSJzdDEiIHdpZHRoPSI3LjciIGhlaWdodD0iMy4zIi8+CjxyZWN0IHg9IjM2LjciIHk9IjU5LjQiIGNsYXNzPSJzdDEiIHdpZHRoPSI3LjciIGhlaWdodD0iMy4zIi8+CjxyZWN0IHg9IjE1LjEiIHk9IjU5LjQiIGNsYXNzPSJzdDEiIHdpZHRoPSI3LjciIGhlaWdodD0iMy4zIi8+CjxyZWN0IHg9IjQ3LjkiIHk9IjU5LjQiIGNsYXNzPSJzdDEiIHdpZHRoPSI3LjciIGhlaWdodD0iMy4zIi8+CjxyZWN0IHg9IjY2LjQiIHk9IjU5LjQiIGNsYXNzPSJzdDEiIHdpZHRoPSI3LjciIGhlaWdodD0iMy4zIi8+CjxsaW5lIGNsYXNzPSJzdDIiIHgxPSI1MS45IiB5MT0iMzguNCIgeDI9IjUxLjkiIHkyPSI1MS44Ii8+Cjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNDcuNiw0OC4zIDQ4LjMsNDcuNiA1MS45LDUxLjQgNTUuNCw0Ny42IDU2LjIsNDguMyA1MS45LDUzICIvPgo8L3N2Zz4K"}}]);