"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[4195],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(6010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(7462),r=a(7294),n=a(6010),s=a(2389),i=a(7392),o=a(7094),c=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:s,defaultValue:d,values:g,groupId:p,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=g??f.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==E&&!b.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:_}=(0,o.U)(),[N,k]=(0,r.useState)(E),I=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=p){const e=y[p];null!=e&&e!==N&&b.some((t=>t.value===e))&&k(e)}const x=e=>{const t=e.currentTarget,a=I.indexOf(t),l=b[a].value;l!==N&&(w(t),k(l),null!=p&&_(p,String(l)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;a=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;a=I[t]??I[I.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},h)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:C,onClick:x},s,{className:(0,n.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function g(e){const t=(0,s.Z)();return r.createElement(d,(0,l.Z)({key:String(t)},e))}},5239:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7462),r=a(7294),n=a(6010),s=a(7676),i=a(9960),o=a(2263),c=a(4996);const m={heroBanner:"heroBanner_UJJx",backgroundImg:"backgroundImg_Na4i",backgroundImgDarkMode:"backgroundImgDarkMode_KiTD",leftcol:"leftcol__S3E",userinterface:"userinterface_KXl1",getStarted:"getStarted_Sjon",buttons:"buttons_pzbO",features:"features_keug",galleryImageMargins:"galleryImageMargins_u0Al",galleryImage:"galleryImage_ctaR"};var u=a(5488),d=a(5162);const g={title:"Assay Name",imageList:[{url:"img/SM_favicon.png"}],description:r.createElement(r.Fragment,null,"Describe utility of scriptmanager for assay-specific figure examples."),label:"Get Started",href:"docs/"},p={...g,title:"ChIP-exo",imageList:[{url:"img/ChIP-exo_heatmap.jpg"},{url:"img/ChIP-exo_composite.jpg"}],description:r.createElement(r.Fragment,null,"ScriptManager supports strand-specific base-pair resolution analysis of base-pair resolution assays like ChIP-exo. Shown here are examples of the two-color merged heatmap (left) and composite plot (right) analyses of real ChIP-exo data."),label:"View tutorial",href:"docs/Tutorials/chipexo-tutorial"},h={...g,title:"Genomic Features",imageList:[{url:"img/12141_Motif_1_bound_50bp.png"}],description:r.createElement(r.Fragment,null,'Visualize genomic patterns such as a figure called a "Four Color Sequence Plot" which shows nucleotide enrichment across a set of protein-bound sites .'),label:"View tutorial",href:"docs/Tutorials/genomic-features-tutorial"},f={...g,title:"ATAC-seq",imageUrl:"img/ENCFF534DCE_InsertHistogram.png",imageList:[{url:"img/ENCFF534DCE_InsertHistogram.png"}],description:r.createElement(r.Fragment,null,"Perform quality checks of genomics data like calculating fragment insert size histograms for ATACseq data.")};function b(e){let{url:t}=e;const a=(0,c.Z)(t);return r.createElement("img",{className:m.galleryImage,src:a})}function v(e){var t;return r.createElement("section",{className:m.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row",style:{display:"flex",justifyContent:"center"}},r.createElement("div",{className:(0,n.Z)("col col--6",m.feature)},r.createElement("div",{className:"",style:{display:"flex",justifyContent:"center"}},null==(t=e.imageList)?void 0:t.map(((e,t)=>r.createElement(b,(0,l.Z)({key:t},e))))),r.createElement("p",{className:"text--left",style:{padding:"10px"}},e.description," ",r.createElement("br",null),r.createElement("a",{href:e.href},e.label," \xa0",r.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})),"\xa0"))))))}const E=function(){const e=(0,o.Z)(),{siteConfig:t={}}=e;return r.createElement(s.Z,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},r.createElement("header",{className:(0,n.Z)("hero hero--primary ",m.heroBanner)},r.createElement("div",{className:"container"},r.createElement("div",{className:m.backgroundImg},r.createElement("img",{src:"img/DNAlayer.png"})),r.createElement("div",{className:m.backgroundImgDarkMode},r.createElement("img",{src:"img/DNAlayer_darkmode.jpg"})),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,n.Z)("col col-6",m.leftcol)},r.createElement("h1",{className:"hero__title"},t.title),r.createElement("p",{className:"hero__subtitle"},t.tagline),r.createElement("div",{className:m.buttons},r.createElement(i.Z,{className:(0,n.Z)("button button--lg",m.getStarted),to:(0,c.Z)("docs/")},"Get Started"))),r.createElement("div",{className:"col col-6",style:{background:""}},r.createElement("div",{className:m.userinterface},r.createElement("img",{src:"img/header_img.png"})))))),r.createElement("main",null,r.createElement("h1",{className:"text--center",style:{marginTop:"80px"}},"Figure Gallery"),r.createElement(u.Z,{class:"tabs"},r.createElement(d.Z,{value:p.title,label:p.title,default:!0},r.createElement(v,p)),r.createElement(d.Z,{value:h.title,label:h.title},r.createElement(v,h)),r.createElement(d.Z,{value:f.title,label:f.title},r.createElement(v,f)))))}}}]);