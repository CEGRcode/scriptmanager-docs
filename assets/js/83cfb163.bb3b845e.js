"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[6113],{5680:(t,e,M)=>{M.d(e,{xA:()=>y,yg:()=>l});var L=M(6540);function u(t,e,M){return e in t?Object.defineProperty(t,e,{value:M,enumerable:!0,configurable:!0,writable:!0}):t[e]=M,t}function a(t,e){var M=Object.keys(t);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(t);e&&(L=L.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),M.push.apply(M,L)}return M}function i(t){for(var e=1;e<arguments.length;e++){var M=null!=arguments[e]?arguments[e]:{};e%2?a(Object(M),!0).forEach((function(e){u(t,e,M[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(M)):a(Object(M)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(M,e))}))}return t}function j(t,e){if(null==t)return{};var M,L,u=function(t,e){if(null==t)return{};var M,L,u={},a=Object.keys(t);for(L=0;L<a.length;L++)M=a[L],e.indexOf(M)>=0||(u[M]=t[M]);return u}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(L=0;L<a.length;L++)M=a[L],e.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(t,M)&&(u[M]=t[M])}return u}var n=L.createContext({}),r=function(t){var e=L.useContext(n),M=e;return t&&(M="function"==typeof t?t(e):i(i({},e),t)),M},y=function(t){var e=r(t.components);return L.createElement(n.Provider,{value:e},t.children)},N="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return L.createElement(L.Fragment,{},e)}},o=L.forwardRef((function(t,e){var M=t.components,u=t.mdxType,a=t.originalType,n=t.parentName,y=j(t,["components","mdxType","originalType","parentName"]),N=r(M),o=u,l=N["".concat(n,".").concat(o)]||N[o]||g[o]||a;return M?L.createElement(l,i(i({ref:e},y),{},{components:M})):L.createElement(l,i({ref:e},y))}));function l(t,e){var M=arguments,u=e&&e.mdxType;if("string"==typeof t||u){var a=M.length,i=new Array(a);i[0]=o;var j={};for(var n in e)hasOwnProperty.call(e,n)&&(j[n]=e[n]);j.originalType=t,j[N]="string"==typeof t?t:u,i[1]=j;for(var r=2;r<a;r++)i[r]=M[r];return L.createElement.apply(null,i)}return L.createElement.apply(null,M)}o.displayName="MDXCreateElement"},5244:(t,e,M)=>{M.r(e),M.d(e,{assets:()=>n,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>j,toc:()=>r});var L=M(8168),u=(M(6540),M(5680));const a={id:"bam-to-bed",title:"BAM to BED",sidebar_label:"BAM to BED"},i=void 0,j={unversionedId:"Tools/bam-format-converter/bam-to-bed",id:"Tools/bam-format-converter/bam-to-bed",title:"BAM to BED",description:"bam-to-bed",source:"@site/docs/Tools/bam-format-converter/bam-to-bed.md",sourceDirName:"Tools/bam-format-converter",slug:"/Tools/bam-format-converter/bam-to-bed",permalink:"/scriptmanager-docs/docs/Tools/bam-format-converter/bam-to-bed",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1724193973,formattedLastUpdatedAt:"Aug 20, 2024",frontMatter:{id:"bam-to-bed",title:"BAM to BED",sidebar_label:"BAM to BED"},sidebar:"toolSidebar",previous:{title:"BAM Format Converter",permalink:"/scriptmanager-docs/docs/Tools/bam-format-converter/"},next:{title:"BAM to bedGraph",permalink:"/scriptmanager-docs/docs/Tools/bam-format-converter/bam-to-bedgraph"}},n={},r=[{value:"Read Options",id:"read-options",level:3},{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3},{value:"Filter Options",id:"filter-options",level:3},{value:"Read Options",id:"read-options-1",level:3}],y={toc:r},N="wrapper";function g(t){let{components:e,...a}=t;return(0,u.yg)(N,(0,L.A)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,u.yg)("p",null,(0,u.yg)("img",{alt:"bam-to-bed",src:M(8351).A,width:"103",height:"103"})),(0,u.yg)("p",null,"Convert BAM file to BED file"),(0,u.yg)("img",{src:M(1722).A,style:{width:"70%"}}),(0,u.yg)("h3",{id:"read-options"},"Read Options"),(0,u.yg)("p",null,"This tool has multiple read options to output."),(0,u.yg)("ul",null,(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("strong",{parentName:"li"},"Read 1"),": output Read 1"),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("strong",{parentName:"li"},"Read 2"),": output Read 2"),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("strong",{parentName:"li"},"Combined"),": output combined reads"),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("strong",{parentName:"li"},"Midpoint"),": output the midpoint between reads"),(0,u.yg)("li",{parentName:"ul"},(0,u.yg)("strong",{parentName:"li"},"Fragment"),": output the full fragment of two reads")),(0,u.yg)("p",null,"Note: The ",(0,u.yg)("strong",{parentName:"p"},"Midpoint")," and ",(0,u.yg)("strong",{parentName:"p"},"Fragment")," options requires proper mate-pair reading."),(0,u.yg)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,u.yg)("p",null,"Usage:"),(0,u.yg)("pre",null,(0,u.yg)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar bam-format-converter bam-to-bed [-1 | -2 | -a | -m | -f]\n[-hpsV] [-n=<MIN_INSERT>] [-o=<output>] [-x=<MAX_INSERT>] <bamFile>\n")),(0,u.yg)("h3",{id:"positional-input"},"Positional Input"),(0,u.yg)("p",null,"This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed."),(0,u.yg)("h3",{id:"output-options"},"Output Options"),(0,u.yg)("table",null,(0,u.yg)("thead",{parentName:"table"},(0,u.yg)("tr",{parentName:"thead"},(0,u.yg)("th",{parentName:"tr",align:null},"Option"),(0,u.yg)("th",{parentName:"tr",align:null},"Description"))),(0,u.yg)("tbody",{parentName:"table"},(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-o, --output=<output>")),(0,u.yg)("td",{parentName:"tr",align:null},"specify output directory (name will be same as original with .bed ext)")),(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-s, --stdout")),(0,u.yg)("td",{parentName:"tr",align:null},"stream output file to STDOUT (cannot be used with ",(0,u.yg)("inlineCode",{parentName:"td"},"-o")," flag)")),(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-z, --gzip")),(0,u.yg)("td",{parentName:"tr",align:null},"gzip output (default=false)")))),(0,u.yg)("h3",{id:"filter-options"},"Filter Options"),(0,u.yg)("p",null,"These filter options are shared across all the BAM Format Converter tools."),(0,u.yg)("table",null,(0,u.yg)("thead",{parentName:"table"},(0,u.yg)("tr",{parentName:"thead"},(0,u.yg)("th",{parentName:"tr",align:null},"Option"),(0,u.yg)("th",{parentName:"tr",align:null},"Description"))),(0,u.yg)("tbody",{parentName:"table"},(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-p, --mate-pair")),(0,u.yg)("td",{parentName:"tr",align:null},"require proper mate pair (default not required)")),(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-n, --min-insert=<MIN_INSERT>")),(0,u.yg)("td",{parentName:"tr",align:null},"filter by min insert size in bp")),(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-x, --max-insert=<MAX_INSERT>")),(0,u.yg)("td",{parentName:"tr",align:null},"filter by max insert size in bp")))),(0,u.yg)("h3",{id:"read-options-1"},"Read Options"),(0,u.yg)("table",null,(0,u.yg)("thead",{parentName:"table"},(0,u.yg)("tr",{parentName:"thead"},(0,u.yg)("th",{parentName:"tr",align:null},"Option"),(0,u.yg)("th",{parentName:"tr",align:null},"Description"))),(0,u.yg)("tbody",{parentName:"table"},(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-1, --read1")),(0,u.yg)("td",{parentName:"tr",align:null},"output read 1 (default)")),(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-2, --read2")),(0,u.yg)("td",{parentName:"tr",align:null},"output read 2")),(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-a, --all-reads")),(0,u.yg)("td",{parentName:"tr",align:null},"output combined")),(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-m, --midpoint")),(0,u.yg)("td",{parentName:"tr",align:null},"output midpoint (require PE)")),(0,u.yg)("tr",{parentName:"tbody"},(0,u.yg)("td",{parentName:"tr",align:null},(0,u.yg)("inlineCode",{parentName:"td"},"-f, --fragment")),(0,u.yg)("td",{parentName:"tr",align:null},"output fragment (requires PE)")))))}g.isMDXComponent=!0},1722:(t,e,M)=>{M.d(e,{A:()=>L});const L=M.p+"assets/images/BAMtoBEDWindow-3c8dce99c1a107d878e34a90a6ffe216.png"},8351:(t,e,M)=>{M.d(e,{A:()=>L});const L="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDMgMTAzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMxODE1OwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgfQoKICAgICAgLmNscy0zLCAuY2xzLTQgewogICAgICAgIHN0cm9rZS13aWR0aDogM3B4OwogICAgICB9CgogICAgICAuY2xzLTMsIC5jbHMtNCwgLmNscy01IHsKICAgICAgICBzdHJva2U6ICMwNzA2MDY7CiAgICAgIH0KCiAgICAgIC5jbHMtMywgLmNscy01IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjMDcwNjA2OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtNCwgLmNscy01IHsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtNiB7CiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIHN0cm9rZS13aWR0aDogMnB4OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iRm91cl9Db2xvcl9TZXF1ZW5jZV9QbG90IiBkYXRhLW5hbWU9IkZvdXIgQ29sb3IgU2VxdWVuY2UgUGxvdCI+CiAgICA8cmVjdCBpZD0ic3F1YXJlIiBjbGFzcz0iY2xzLTQiIHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjcuODEiIHJ5PSI3LjgxIi8+CiAgPC9nPgogIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQ1Ljg0LDY0LjMyaC0yNy45OGMtMS45NC4wNS0zLjU2LTEuNDgtMy42MS0zLjQyLDAtLjA2LDAtLjExLDAtLjE3VjIyLjc1Yy4wMS0uMzguMTYtLjc1LjQxLTEuMDMsNC41NS00LjU3LDkuMTEtOS4xMSwxMy42Ny0xMy42NS4zMS0uMzEuNjUtLjU5Ljk4LS44OWgyNC44OWMuMS4wNC4yLjA5LjMuMTIsMS41Ni40NCwyLjYzLDEuODcsMi41OSwzLjQ5djMxLjciLz4KICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yOS44OCw4djEwLjU1YzAsMS44OS0xLjAzLDMuMjgtMi43MywzLjcxLS40Mi4wOS0uODUuMTMtMS4yOC4xMmgtMTAuMzQiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik04NS44NiwzOC42OGMuMS4wNC4yLjA5LjMuMTIsMS41Ni40NCwyLjYzLDEuODcsMi41OSwzLjQ5djQ5LjkyYy4wNSwxLjk0LTEuNDgsMy41Ni0zLjQyLDMuNjEtLjA2LDAtLjExLDAtLjE3LDBoLTM1LjY1Yy0xLjk0LjA1LTMuNTYtMS40OC0zLjYxLTMuNDIsMC0uMDYsMC0uMTEsMC0uMTd2LTM3Ljk5YzAtLjM4LjE2LS43NS40Mi0xLjAzLDQuNTUtNC41Nyw5LjEtOS4xMSwxMy42Ni0xMy42My4zMS0uMzEuNjYtLjU5Ljk4LS44OWwyNC44OS0uMDJaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNjEuNTUsMzkuNDl2MTAuNTVjMCwxLjg5LTEuMDMsMy4yOC0yLjczLDMuNzEtLjQyLjA5LS44NS4xMy0xLjI4LjEyaC0xMC4zMyIvPgogIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTE5LjY2LDcyLjQyYy0zLjI4LDUuMjMtMS42OSwxMi4xMywzLjU1LDE1LjQxLDUuMjMsMy4yOCwxMi4xMywxLjY5LDE1LjQxLTMuNTVoMCIvPgogIDxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI0MC41OSA5MC4yMyAzOS4zOCA5MC4zNiAzOC43NCA4NC4zOSAzMi44MyA4NS40NiAzMi42MSA4NC4yNiAzOS44MiA4Mi45NSA0MC41OSA5MC4yMyIvPgogIDxnIGNsYXNzPSJjbHMtNiI+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNy4yMywzMi4zNmMwLS4yNC4xMi0uMzcuMzYtLjM3aDUuNDRjLjQ4LDAsLjkzLjA5LDEuMzYuMjguNDMuMTkuOC40NCwxLjEyLjc2cy41Ny42OS43NiwxLjEyYy4xOS40My4yOC44OS4yOCwxLjM4LDAsLjQxLS4wNi43OS0uMTksMS4xNS0uMTMuMzUtLjMxLjY3LS41NS45NS4zOS4zNi43Ljc5LjkzLDEuMjkuMjMuNS4zNSwxLjAzLjM1LDEuNTgsMCwuNS0uMS45Ny0uMjksMS40MS0uMTkuNDQtLjQ1Ljg0LS43OCwxLjE3LS4zMy4zNC0uNzEuNjEtMS4xNC44LS40My4yLS44OS4yOS0xLjM4LjI5aC01LjkyYy0uMjQsMC0uMzYtLjEyLS4zNi0uMzZ2LTExLjQ2Wk0yMC40LDM0LjQydjIuMzhoMS43NGMuMTksMCwuMzYtLjAzLjUxLS4wOS4xNS0uMDYuMjktLjE0LjQtLjI1LjExLS4xMS4yLS4yMy4yNi0uMzguMDYtLjE1LjA5LS4zLjA5LS40N3MtLjAzLS4zMi0uMDktLjQ2Yy0uMDYtLjE0LS4xNS0uMjctLjI2LS4zOC0uMTEtLjExLS4yNC0uMTktLjM5LS4yNi0uMTUtLjA2LS4zMi0uMDktLjUtLjA5aC0xLjc3Wk0yMC40LDM5djIuNzRoMi4yYy4xNywwLC4zMy0uMDQuNDgtLjExLjE1LS4wNy4yOC0uMTcuNC0uMy4xMi0uMTMuMjEtLjI3LjI4LS40NC4wNy0uMTcuMS0uMzQuMS0uNTIsMC0uMTctLjAzLS4zMy0uMDktLjQ5cy0uMTUtLjMxLS4yNi0uNDRjLS4xMS0uMTMtLjI1LS4yNC0uNC0uMzItLjE1LS4wOC0uMzItLjEyLS41LS4xMmgtMi4yWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzIuMywzMi4zNmMuMS0uMjQuMjYtLjM3LjUtLjM3aDIuMDFjLjIzLDAsLjQuMTIuNS4zN2w0LjQ4LDExLjQ2Yy4xLjI0LjAyLjM2LS4yMy4zNmgtMi40NGMtLjI1LDAtLjQxLS4xMi0uNDktLjM2bC0uNTctMS42MWgtNC40OGwtLjU2LDEuNjFjLS4wOC4yNC0uMjQuMzYtLjUuMzZoLTIuNDRjLS4yNCwwLS4zMi0uMTItLjIzLS4zNmw0LjQ1LTExLjQ2Wk0zMy43OSwzNS44NGwtMS4yOSwzLjczaDIuNjFsLTEuMzItMy43M1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ0LjYzLDM3LjIybC0uNjksNi42Yy0uMDEuMTItLjA0LjIxLS4xLjI3LS4wNS4wNi0uMTQuMDktLjI2LjA5aC0yLjMzYy0uMTIsMC0uMjEtLjAzLS4yOC0uMDktLjA3LS4wNi0uMDktLjE1LS4wOC0uMjdsMS4yMi0xMS40NmMuMDEtLjEyLjA0LS4yMS4xLS4yNy4wNS0uMDYuMTQtLjA5LjI2LS4wOWgyLjg3Yy4xMiwwLC4yLjAzLjI0LjA5cy4wOC4xNS4xMi4yOGwyLjI0LDcuMzcsMi4yNC03LjM3Yy4wNC0uMTMuMDgtLjIyLjEyLS4yOHMuMTItLjA5LjI0LS4wOWgyLjg3Yy4xMiwwLC4yMS4wMy4yNi4wOXMuMDkuMTUuMS4yN2wxLjIyLDExLjQ2Yy4wMS4xMi0uMDIuMjEtLjA4LjI3cy0uMTYuMDktLjI4LjA5aC0yLjMzYy0uMTIsMC0uMjEtLjAzLS4yNi0uMDktLjA1LS4wNi0uMDktLjE1LS4xLS4yN2wtLjY3LTYuNDMtMS45MSw2LjQyYy0uMDUuMTUtLjA5LjI1LS4xNS4zLS4wNS4wNS0uMTQuMDgtLjI2LjA4aC0yLjAzYy0uMTIsMC0uMjEtLjAzLS4yNi0uMDgtLjA1LS4wNS0uMS0uMTUtLjE0LS4zbC0xLjg5LTYuNThaIi8+CiAgPC9nPgogIDxnIGNsYXNzPSJjbHMtNiI+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MS44OCw2NS41NGMwLS4yNC4xMi0uMzcuMzYtLjM3aDUuNDRjLjQ4LDAsLjkzLjA5LDEuMzYuMjguNDMuMTkuOC40NCwxLjEyLjc2LjMyLjMyLjU3LjY5Ljc2LDEuMTIuMTkuNDMuMjguODkuMjgsMS4zOCwwLC40MS0uMDYuNzktLjE5LDEuMTUtLjEzLjM1LS4zMS42Ny0uNTUuOTUuMzkuMzYuNy43OS45MywxLjI5cy4zNSwxLjAzLjM1LDEuNThjMCwuNS0uMS45Ny0uMjksMS40MS0uMTkuNDQtLjQ1Ljg0LS43OCwxLjE3LS4zMy4zNC0uNzEuNjEtMS4xNC44cy0uODkuMjktMS4zOC4yOWgtNS45MmMtLjI0LDAtLjM2LS4xMi0uMzYtLjM2di0xMS40NlpNNTUuMDUsNjcuNnYyLjM4aDEuNzRjLjE5LDAsLjM2LS4wMy41MS0uMDlzLjI5LS4xNC40LS4yNWMuMTEtLjExLjItLjIzLjI2LS4zOC4wNi0uMTUuMDktLjMuMDktLjQ3cy0uMDMtLjMyLS4wOS0uNDZjLS4wNi0uMTQtLjE1LS4yNy0uMjYtLjM4LS4xMS0uMTEtLjI0LS4xOS0uMzktLjI2LS4xNS0uMDYtLjMyLS4wOS0uNS0uMDloLTEuNzdaTTU1LjA1LDcyLjE4djIuNzRoMi4yYy4xNywwLC4zMy0uMDQuNDgtLjExLjE1LS4wNy4yOC0uMTcuNC0uMy4xMi0uMTMuMjEtLjI3LjI4LS40NC4wNy0uMTcuMS0uMzQuMS0uNTIsMC0uMTctLjAzLS4zMy0uMDktLjQ5LS4wNi0uMTYtLjE1LS4zMS0uMjctLjQ0LS4xMS0uMTMtLjI1LS4yNC0uNC0uMzItLjE1LS4wOC0uMzItLjEyLS41LS4xMmgtMi4yWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjMuNDUsNjUuNTRjMC0uMjQuMTItLjM3LjM2LS4zN2g4LjE2Yy4yNCwwLC4zNi4xMi4zNi4zN3YyLjFjMCwuMjQtLjEyLjM2LS4zNi4zNmgtNS4zNXYyLjAzaDQuMDZjLjEzLDAsLjIyLjAzLjI5LjA5cy4xMS4xNi4xMS4yOXYxLjY5YzAsLjI0LS4xMy4zNi0uNC4zNmgtNC4wNnYyLjA5aDUuNWMuMjQsMCwuMzcuMTIuMzcuMzZ2Mi4wOWMwLC4yNC0uMTIuMzYtLjM3LjM2aC04LjMxYy0uMjQsMC0uMzYtLjEyLS4zNi0uMzZ2LTExLjQ2WiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzQuMzksNjUuNTRjMC0uMjQuMTItLjM3LjM2LS4zN2g0LjI2Yy41MSwwLDEuMDIuMDcsMS41Mi4yMi41LjE1Ljk3LjM1LDEuNDIuNjEuNDUuMjYuODcuNTgsMS4yNS45NS4zOC4zNy43MS43OC45OSwxLjIzLjI4LjQ1LjUuOTQuNjYsMS40Ni4xNi41Mi4yNCwxLjA2LjI0LDEuNjMsMCwuNTMtLjA3LDEuMDUtLjIyLDEuNTYtLjE1LjUxLS4zNS45OS0uNjEsMS40NC0uMjYuNDUtLjU4Ljg2LS45NSwxLjI0LS4zNy4zOC0uNzguNy0xLjIzLjk3LS40NS4yNy0uOTMuNDgtMS40NS42NC0uNTIuMTUtMS4wNi4yMy0xLjYyLjIzaC00LjI2Yy0uMjQsMC0uMzYtLjEyLS4zNi0uMzZ2LTExLjQ2Wk04MS42NSw3MC4wM2MtLjE2LS4zOS0uMzktLjcyLS42Ny0xLjAxLS4yOC0uMjktLjYyLS41Mi0xLjAxLS42OC0uMzktLjE3LS44MS0uMjUtMS4yNy0uMjVoLTEuMTR2Ni4zN2gxLjE0Yy40NiwwLC44OC0uMDgsMS4yNy0uMjUuMzktLjE3LjczLS40LDEuMDEtLjY4cy41MS0uNjIuNjctMS4wMWMuMTYtLjM4LjI0LS44LjI0LTEuMjNzLS4wOC0uODYtLjI0LTEuMjVaIi8+CiAgPC9nPgo8L3N2Zz4="}}]);