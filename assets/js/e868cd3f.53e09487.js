"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[9952],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>u});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,u=d["".concat(o,".").concat(m)]||d[m]||g[m]||r;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6767:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(8168),i=(a(6540),a(5680));const r={id:"testing",title:"Testing",sidebar_label:"Testing"},l=void 0,s={unversionedId:"Guides/Contributing/testing",id:"Guides/Contributing/testing",title:"Testing",description:"Automatic CLI Testing",source:"@site/docs/Guides/Contributing/testing.md",sourceDirName:"Guides/Contributing",slug:"/Guides/Contributing/testing",permalink:"/scriptmanager-docs/docs/Guides/Contributing/testing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Olivia Wen-Mei Lang",lastUpdatedAt:1737743699,formattedLastUpdatedAt:"Jan 24, 2025",frontMatter:{id:"testing",title:"Testing",sidebar_label:"Testing"},sidebar:"generalSidebar",previous:{title:"Useful Code Snippets",permalink:"/scriptmanager-docs/docs/Guides/Contributing/code-snippets"},next:{title:"Code of Conduct",permalink:"/scriptmanager-docs/docs/Guides/Community/code-of-conduct"}},o={},c=[{value:"Automatic CLI Testing",id:"automatic-cli-testing",level:2},{value:"Test build: Java CI with Gradle",id:"test-build-java-ci-with-gradle",level:3},{value:"JUnit testing (Gradle)",id:"junit-testing-gradle",level:3},{value:"Automatic GUI Testing",id:"automatic-gui-testing",level:2},{value:"JFree tools",id:"jfree-tools",level:2},{value:"Picard Tools",id:"picard-tools",level:2},{value:"HTSJDK Tools (not Picard)",id:"htsjdk-tools-not-picard",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"automatic-cli-testing"},"Automatic CLI Testing"),(0,i.yg)("p",null,"We use ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/features/actions"},"Github Actions")," for automatic testing during development. Below is a list of Github Actions workflows and what they do."),(0,i.yg)("h3",{id:"test-build-java-ci-with-gradle"},"Test build: Java CI with Gradle"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/CEGRcode/scriptmanager/actions/workflows/gradle.yml"},"This workflow"),' tests that the ScriptManager JAR to "matrix test" across three operating systems and two versions of java:'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Checks:")," The project builds successfully across OS and Java versions"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Trigger:")," This workflow kicks off for any pushes to the ",(0,i.yg)("inlineCode",{parentName:"li"},"main")," branch or pull requests to the ",(0,i.yg)("inlineCode",{parentName:"li"},"main")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"dev")," branches"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Updates:")," Periodically check workflow versions to include ",(0,i.yg)("a",{parentName:"li",href:"/docs/Guides/Contributing/developer-guidelines#compilebuild"},"latest Java & Gradle"))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null}),(0,i.yg)("th",{parentName:"tr",align:"center"},"Ubuntu (latest)"),(0,i.yg)("th",{parentName:"tr",align:"center"},"Windows (latest)"),(0,i.yg)("th",{parentName:"tr",align:"center"},"MacOS (latest)"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Java 8 (Temurin)"),(0,i.yg)("br",null),(0,i.yg)("em",{parentName:"td"},"need to confirm Github support for this")),(0,i.yg)("td",{parentName:"tr",align:"center"},"\ud83d\udc77\u200d\u2640\ufe0f"),(0,i.yg)("td",{parentName:"tr",align:"center"},"\ud83d\udc77\u200d\u2640\ufe0f"),(0,i.yg)("td",{parentName:"tr",align:"center"},"\ud83d\udc77\u200d\u2640\ufe0f")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Java 11 (Temurin)")),(0,i.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"Java 17 (Temurin)")),(0,i.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.yg)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,i.yg)("p",null,"Edit ",(0,i.yg)("inlineCode",{parentName:"p"},"/scriptmanager/.github/workflows/gradle.yml")," to make changes to how this workflow is executed. "),(0,i.yg)("h3",{id:"junit-testing-gradle"},"JUnit testing (Gradle)"),(0,i.yg)("p",null,"We build JUnit-style tests for each tool that can be run with the help of ",(0,i.yg)("a",{parentName:"p",href:"/docs/Guides/Contributing/developer-guidelines/#gradle"},"Gradle"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"./gradlew test\n")),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"\ud83d\udea7 \ud83d\udc77\u200d\u2640\ufe0f ",(0,i.yg)("strong",{parentName:"p"},"UNDER CONSTRUCTION")," \ud83d\udc77\u200d \ud83d\udea7"),(0,i.yg)("p",{parentName:"admonition"},"We have shell scripts for testing that need to be deployed to the Github Actions system and documented here. These need to be converted to JUnit tests after the source code file organization has been restructured."),(0,i.yg)("p",{parentName:"admonition"},"Execute the commands below after building the ",(0,i.yg)("inlineCode",{parentName:"p"},"jar")," file to run travis-style shell tests."),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cd travis_test\nbash test_all.sh\n"))),(0,i.yg)("h2",{id:"automatic-gui-testing"},"Automatic GUI Testing"),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"\ud83d\udea7 ",(0,i.yg)("strong",{parentName:"p"},"UNDER CONSTRUCTION")," \ud83d\udea7"),(0,i.yg)("p",{parentName:"admonition"},"We need to decide on a method for GUI testing and set it up with Github Actions.")),(0,i.yg)("h2",{id:"jfree-tools"},"JFree tools"),(0,i.yg)("p",null,"The following tools need to be explicitly tested when making updates to the JFree dependency:"),(0,i.yg)("ul",{className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Scatter/Line Plot"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Scaling Factor (NCIS) plots of bin values"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","DNA Shape From BED"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","DNA Shape From FASTA"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tag Pileup composite plot"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","MatrixToComposite composite plot"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Heatmap Chart"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Bam Correlation"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","4-color sequence"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","2-color Heatmap"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","3-color Heatmap"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Merge Heatmaps"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Histogram"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","PE_stats (insert size hist)"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Render PNG")),(0,i.yg)("h2",{id:"picard-tools"},"Picard Tools"),(0,i.yg)("ul",{className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Mark Duplicates")),(0,i.yg)("h2",{id:"htsjdk-tools-not-picard"},"HTSJDK Tools (not Picard)"),(0,i.yg)("ul",{className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","_")))}g.isMDXComponent=!0}}]);