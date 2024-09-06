"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[3333],{5680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var o=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,u=p["".concat(i,".").concat(d)]||p[d]||g[d]||n;return a?o.createElement(u,s(s({ref:t},m),{},{components:a})):o.createElement(u,s({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<n;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=a(8168),r=(a(6540),a(5680));const n={id:"color-guide",title:"Color Selection Guide",sidebar_label:"Color Selection Guide"},s=void 0,l={unversionedId:"Guides/Getting-Started/color-guide",id:"Guides/Getting-Started/color-guide",title:"Color Selection Guide",description:"Some tools allow you to customize colors used in the output, specifically among the figure-generation tools. The following guide introduces the user to color customization in ScriptManager.",source:"@site/docs/Guides/Getting-Started/color-guide.md",sourceDirName:"Guides/Getting-Started",slug:"/Guides/Getting-Started/color-guide",permalink:"/scriptmanager-docs/docs/Guides/Getting-Started/color-guide",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1689733305,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{id:"color-guide",title:"Color Selection Guide",sidebar_label:"Color Selection Guide"},sidebar:"generalSidebar",previous:{title:"Command Line",permalink:"/scriptmanager-docs/docs/Guides/Getting-Started/command-line"},next:{title:"Logging Manager Guide",permalink:"/scriptmanager-docs/docs/Guides/Getting-Started/logging-manager"}},i={},c=[{value:"Color Selector Window (GUI)",id:"color-selector-window-gui",level:2},{value:"Choosing colors from the command line (CLI)",id:"choosing-colors-from-the-command-line-cli",level:2}],m={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Some tools allow you to customize colors used in the output, specifically among the ",(0,r.yg)("inlineCode",{parentName:"p"},"figure-generation")," tools. The following guide introduces the user to color customization in ScriptManager."),(0,r.yg)("p",null,"Color customization options available in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/Tools/figure-generation/heatmap-labeler"},"Heatmap Labeler"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/Tools/figure-generation/heatmap"},"Four Color Sequence Plot"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/Tools/figure-generation/Four-color"},"Two Color Heatmap"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/Tools/figure-generation/three-color-heatmap"},"Three Color Heatmap"),", and ",(0,r.yg)("a",{parentName:"p",href:"/docs/Tools/figure-generation/composite-plot"},"Composite Plot")," tools."),(0,r.yg)("h2",{id:"color-selector-window-gui"},"Color Selector Window (GUI)"),(0,r.yg)("p",null,"When the user opens up the color selector window, they will see several tabs, each visualizing a different method for selecting a custom color."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"swatch-guide",src:a(8224).A,width:"1458",height:"964"})),(0,r.yg)("p",null,'The default/first tab, "Swatch" (above), shows a bunch of color swatches for a fixed collection of colors to choose from.'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'"HSV" tab allows the user to select a color based on the Hue, Saturation, and Value color system'),(0,r.yg)("li",{parentName:"ul"},'"HSL" tab  allows the user to select a color based on the Hue, Saturation, and Lightness color system'),(0,r.yg)("li",{parentName:"ul"},'"RGB" tab  allows the user to select a color based on the Red, Green, and Blue color system'),(0,r.yg)("li",{parentName:"ul"},'"CMYK" tab  allows the user to select a color based on the Cyan, Magenta, Yellow, and Black color system')),(0,r.yg)("img",{src:a(8674).A,style:{width:"50%"}}),(0,r.yg)("img",{src:a(6152).A,style:{width:"50%"}}),(0,r.yg)("img",{src:a(7260).A,style:{width:"50%"}}),(0,r.yg)("img",{src:a(4055).A,style:{width:"50%"}}),(0,r.yg)("p",null,'Note that the RGB selector window includes a "Color Code" text box that allows you to directly paste a hexstring (see below) value encoding a color.'),(0,r.yg)("h2",{id:"choosing-colors-from-the-command-line-cli"},"Choosing colors from the command line (CLI)"),(0,r.yg)("p",null,"ScriptManager's command-line tools typically indicate color using the ",(0,r.yg)("inlineCode",{parentName:"p"},"-c")," flag followed one or more hexidecimal color strings shexstrings). The hexstrings are composed of a sequence of 6 characters (0-9 or A-F), where each pair of characters represent an Red, Green, and Blue value, and each pair encoding any value from 0-255. The help documentation points the user to ",(0,r.yg)("a",{parentName:"p",href:"http://www.javascripter.net/faq/rgbtohex.htm"},"this url")," for users to browse colors and get the corresponding hexstring."),(0,r.yg)("div",{className:"math math-display"},(0,r.yg)("span",{parentName:"div",className:"katex-display"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mstyle",{parentName:"mrow",mathsize:"2.074em"},(0,r.yg)("mrow",{parentName:"mstyle"},(0,r.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"#"),(0,r.yg)("mstyle",{parentName:"mrow",mathcolor:"red"},(0,r.yg)("mi",{parentName:"mstyle"},"F"),(0,r.yg)("mi",{parentName:"mstyle"},"F")),(0,r.yg)("mstyle",{parentName:"mrow",mathcolor:"green"},(0,r.yg)("mi",{parentName:"mstyle"},"B"),(0,r.yg)("mn",{parentName:"mstyle"},"4")),(0,r.yg)("mtext",{parentName:"mrow"},"\xa0"),(0,r.yg)("mstyle",{parentName:"mrow",mathcolor:"blue"},(0,r.yg)("mn",{parentName:"mstyle"},"00"))))),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\huge{ \\#\\textcolor{red}{FF}\\textcolor{green}{B4}\\space\\textcolor{blue}{00} }")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"1.8435em",verticalAlign:"-0.4033em"}}),(0,r.yg)("span",{parentName:"span",className:"mord sizing reset-size6 size10"},(0,r.yg)("span",{parentName:"span",className:"mord"},"#"),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em",color:"red"}},"FF"),(0,r.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em",color:"green"}},"B"),(0,r.yg)("span",{parentName:"span",className:"mord",style:{color:"green"}},"4"),(0,r.yg)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,r.yg)("span",{parentName:"span",className:"mord",style:{color:"blue"}},"00"))))))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"User should not use the pound symbol ",(0,r.yg)("inlineCode",{parentName:"p"},"#")," in front of the hexidecimal when typing out commands in the terminal because it renders the token invisible to the shell and thus, invisible to ScriptManager.")))}g.isMDXComponent=!0},4055:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/cmyk-guide-376307734713e971653eaa4b3c5c1f11.png"},6152:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/hsl-guide-710ed1f543206f5b4c6d940ea8ae35a9.png"},8674:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/hsv-guide-b9b944bc8e9a94f15cce738607647414.png"},7260:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/rgb-guide-45459c772cbf0044cf1efbd1ed52a3c3.png"},8224:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/swatch-guide-078c80cbb5510788bc77c64d0e941986.png"}}]);