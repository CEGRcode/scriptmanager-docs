"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[3215],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(a),m=n,u=g["".concat(c,".").concat(m)]||g[m]||p[m]||l;return a?i.createElement(u,r(r({ref:t},d),{},{components:a})):i.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:n,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=a(7462),n=(a(7294),a(3905));const l={id:"heatmap-labeler",title:"Label Heatmap",sidebar_label:"Label Heatmap"},r=void 0,o={unversionedId:"figure-generation/heatmap-labeler",id:"figure-generation/heatmap-labeler",title:"Label Heatmap",description:"Label Heatmap",source:"@site/docs/figure-generation/heatmap-labeler.md",sourceDirName:"figure-generation",slug:"/figure-generation/heatmap-labeler",permalink:"/scriptmanager-docs/docs/figure-generation/heatmap-labeler",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1674838098,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{id:"heatmap-labeler",title:"Label Heatmap",sidebar_label:"Label Heatmap"},sidebar:"toolSidebar",previous:{title:"Four Color Plot",permalink:"/scriptmanager-docs/docs/figure-generation/four-color"},next:{title:"three-color-heatmap",permalink:"/scriptmanager-docs/docs/figure-generation/three-color-heatmap"}},c={},s=[{value:"Input files (PNG)",id:"input-files-png",level:3},{value:"Axis Line formating",id:"axis-line-formating",level:3},{value:"Label Formatting",id:"label-formatting",level:3},{value:"Command Line Interface",id:"command-line-interface",level:2}],d={toc:s},g="wrapper";function p(e){let{components:t,...l}=e;return(0,n.kt)(g,(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label Heatmap",src:a(1670).Z,width:"103",height:"103"})),(0,n.kt)("p",null,"This tool will embed a ",(0,n.kt)("inlineCode",{parentName:"p"},".png")," file into an output ",(0,n.kt)("inlineCode",{parentName:"p"},".svg")," with a title and axes and tickmark labels."),(0,n.kt)("img",{src:a(1209).Z,style:{width:"70%"}}),(0,n.kt)("p",null,"Typically this tool is used to label merged ChIP-exo heatmap or other sequencing assay pileup heatmaps of tag counts but there is no reason it cannot be used for any input ",(0,n.kt)("inlineCode",{parentName:"p"},".png"),"."),(0,n.kt)("img",{src:a(3675).Z,style:{width:"70%"}}),(0,n.kt)("p",null,"Any file with a ",(0,n.kt)("inlineCode",{parentName:"p"},".png")," extension may be loaded into the Label Heatmap tool. When a batch of files have been loaded, the user can type out axes labels, font size, specify border widths, colors, and tick height."),(0,n.kt)("p",null,'Clicking "Generate" will execute the script to write ',(0,n.kt)("inlineCode",{parentName:"p"},".svg")," files, each with one of the ",(0,n.kt)("inlineCode",{parentName:"p"},".png")," files embedded and annotated by the user-specifications. The output files will be named like the input files with the ",(0,n.kt)("inlineCode",{parentName:"p"},"_label.svg")," suffix replacing the ",(0,n.kt)("inlineCode",{parentName:"p"},".png")," extension."),(0,n.kt)("h3",{id:"input-files-png"},"Input files (PNG)"),(0,n.kt)("p",null,"This tool will embed a ",(0,n.kt)("a",{parentName:"p",href:"/docs/References/file-formats#png"},"PNG")," file into an output ",(0,n.kt)("inlineCode",{parentName:"p"},".svg")," with a title, axes, and tickmark labels."),(0,n.kt)("h3",{id:"axis-line-formating"},"Axis Line formating"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Border width")," refers to the pixel width of all lines used from the border thickness around the PNG to the tick mark line widths."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"X-tick height")," refers to the pixel height/length of the lines along the bottom of the PNG that mark the left, right, and midpoint values."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Color")," refers to the color value for all the lines making up the border and tick marks as well as the text  color.")),(0,n.kt)("h3",{id:"label-formatting"},"Label Formatting"),(0,n.kt)("p",null,"These parameters refer to the formatting of the font in the SVG."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Font Size")," will change the font size of all labels (both x-tick mark labels and axis labels)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Left label")," refers the the minimum/leftmost x-axis tick mark label."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mid label")," refers the the midpoint x-axis tick mark label (typically 0 if plot derived from a reference set expanded from the center of a reference point)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Right label")," refers the the maximum/rightmost x-axis tick mark label."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"X-axis Label")," refers the text used for describing the x-axis, typically describing a reference point."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Y-axis Label")," refers the text used for describing the y-axis, typically describing the set of features that the heatmap/sequence plot is visualizing.")),(0,n.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: script-manager figure-generation label-heatmap [-hV] [-c=<color>]\n       [-f=<FONTSIZE>] [-l=<xLeftLabel>] [-m=<xMidLabel>] [-o=<OUTPUT>]\n       [-r=<xRightLabel>] [-t=<xTickHeight>] [-w=<borderWidth>] [-x=<xLabel>]\n       [-y=<yLabel>] <PNG>\nCreate an SVG label for heatmap inputs\n      <PNG>                Input image (required)\n  -o, --output=<OUTPUT>    Output image (default="OutputHeatmap.svg"\n  -c, --color=<color>      Output color: Must be in Hex format. (default=black)\n  -w, --width=<borderWidth>\n                           Line thickness of border. Integer required. (default\n                             = 2)\n  -t, --tick-height=<xTickHeight>\n                           X-tickmark height. (default=10)\n  -f, --font-size=<FONTSIZE>\n                           Font size. (default=18)\n  -l, --left-label=<xLeftLabel>\n                           Left X-tick label. (default=nolabel)\n  -m, --mid-label=<xMidLabel>\n                           Mid X-tick label. (default=nolabel)\n  -r, --right-label=<xRightLabel>\n                           Right X-tick label. (default=nolabel)\n  -x, --x-label=<xLabel>   X-axis label. (default=nolabel)\n  -y, --y-label=<yLabel>   Y-axis label. (default=nolabel)\n  -h, --help               Show this help message and exit.\n  -V, --version            Print version information and exit.\n')))}p.isMDXComponent=!0},1209:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/LabelHeatMapSchematic-7c92055ccac94c8665d60d54d71a5cbf.jpg"},3675:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/LabelHeatMapWindow-516ab522ab67e72d40373f094b9f9cec.png"},1670:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMgMTAzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMgMTAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzA0MDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qze2ZpbGw6IzA3MDYwNjt9Cgkuc3Q0e2ZpbGw6IzIzMTgxNTt9Cgkuc3Q1e2ZvbnQtZmFtaWx5OidDb2NvZ29vc2VQcm8nO30KCS5zdDZ7Zm9udC1zaXplOjE2LjQwNjJweDt9Cgkuc3Q3e2ZpbGw6bm9uZTtzdHJva2U6IzA3MDYwNjtzdHJva2Utd2lkdGg6MC43NTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0OHtmb250LXNpemU6NC42ODc1cHg7fQoJLnN0OXtmb250LWZhbWlseTonQ09DT0dPT1NFJzt9Cgkuc3QxMHtmb250LXNpemU6My45MDYycHg7fQo8L3N0eWxlPgo8ZyBpZD0iRm91cl9Db2xvcl9TZXF1ZW5jZV9QbG90Ij4KCTxwYXRoIGlkPSJzcXVhcmUiIGNsYXNzPSJzdDAiIGQ9Ik05LjMsMS41aDg0LjRjNC4zLDAsNy44LDMuNSw3LjgsNy44djg0LjRjMCw0LjMtMy41LDcuOC03LjgsNy44SDkuM2MtNC4zLDAtNy44LTMuNS03LjgtNy44VjkuMwoJCUMxLjUsNSw1LDEuNSw5LjMsMS41eiIvPgo8L2c+Cjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjQ3LjcsNDYuOCAxNS42LDQ2LjggMTUuNiw1LjkgNTYuNCw1LjkgNTYuNCwzOC45ICIvPgo8cmVjdCB4PSI0Ny44IiB5PSIzOS4xIiBjbGFzcz0ic3QxIiB3aWR0aD0iNDAuOSIgaGVpZ2h0PSI0MC45Ii8+CjxnIGlkPSJCRURfVE9fR0ZGIj4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNy43LDYwLjVjLTMuMyw1LjItMS43LDEyLjEsMy41LDE1LjRjNS4yLDMuMywxMi4xLDEuNywxNS40LTMuNWwwLDAiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iMzguNSw3OC4zIDM3LjIsNzguNSAzNi42LDcyLjUgMzAuNyw3My42IDMwLjUsNzIuNCAzNy43LDcxIAkiLz4KPC9nPgo8ZyBpZD0iU29ydF9CRUQiPgoJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAxNy42ODc1IDMyLjQ1NjMpIiBjbGFzcz0ic3Q0IHN0NSBzdDYiPlBORzwvdGV4dD4KCTx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNTEuMDUwOCA2NS42MDQ3KSIgY2xhc3M9InN0NCBzdDUgc3Q2Ij5TPC90ZXh0PgoJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA2MS4xMzI4IDY1LjYwNDcpIiBjbGFzcz0ic3Q0IHN0NSBzdDYiPlY8L3RleHQ+Cgk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDcyLjM5NDUgNjUuNjA0NykiIGNsYXNzPSJzdDQgc3Q1IHN0NiI+RzwvdGV4dD4KPC9nPgo8ZyBpZD0iRmlsdGVyX1BJUC1zZXEiPgoJPGxpbmUgY2xhc3M9InN0NyIgeDE9IjQ3LjQiIHkxPSI5My43IiB4Mj0iNDcuNCIgeTI9Ijc5LjciLz4KCTxsaW5lIGNsYXNzPSJzdDciIHgxPSI4OS4xIiB5MT0iOTMuNyIgeDI9Ijg5LjEiIHkyPSI3OS43Ii8+Cgk8bGluZSBjbGFzcz0ic3Q3IiB4MT0iNjguMiIgeTE9IjkzLjciIHgyPSI2OC4yIiB5Mj0iODYuMiIvPgo8L2c+CjxnIGlkPSJTZWFyY2hfTW90aWYiPgoJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA1OC4zMDQ3IDg1LjE0NzcpIiBjbGFzcz0ic3Q0IHN0NSBzdDgiPlgtVElUTEU8L3RleHQ+Cgk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQxLjQxMDIgOTcuNTk2OSkiIGNsYXNzPSJzdDQgc3Q5IHN0MTAiPi0xMDA8L3RleHQ+Cgk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDgzLjgwNDcgOTcuNTk2OSkiIGNsYXNzPSJzdDQgc3Q5IHN0MTAiPisxMDA8L3RleHQ+Cgk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDY2LjQzNzUgOTcuNTk2OSkiIGNsYXNzPSJzdDQgc3Q5IHN0MTAiPjA8L3RleHQ+Cgk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCg2LjEyMzIzNGUtMTcgLTEgMSA2LjEyMzIzNGUtMTcgNDQuNzY5NSA2OS40OTE1KSIgY2xhc3M9InN0NCBzdDUgc3Q4Ij5ZLVRJVExFPC90ZXh0Pgo8L2c+Cjwvc3ZnPgo="}}]);