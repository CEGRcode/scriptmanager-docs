"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[6334],{1498:(e,t,a)=>{a.d(t,{i:()=>i});var r=a(6540),o=a(2885);const n=()=>({}),i=e=>{let{columns:t,data:a,getHeaderProps:i=n,getColumnProps:s=n}=e;const{getTableProps:l,getTableBodyProps:u,headerGroups:c,rows:d,prepareRow:p}=(0,o.useTable)({columns:t,data:a},o.useSortBy);return r.createElement("table",l(),r.createElement("thead",null,c.map((e=>r.createElement("tr",e.getHeaderGroupProps(),e.headers.map((e=>r.createElement("th",e.getHeaderProps([{className:e.className},i(e),s(e),e.getSortByToggleProps()]),e.render("Header"),r.createElement("span",null,e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":"")))))))),r.createElement("tbody",u(),d.map(((e,t)=>(p(e),r.createElement("tr",e.getRowProps(),e.cells.map((e=>r.createElement("td",e.getCellProps([{className:e.column.className,style:e.column.style},s(e.column)]),e.render("Cell"))))))))))}},5099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var r=a(8168),o=a(6540),n=a(5680),i=a(1498);const s=[{author:"Mittal",title:"An integrated SAGA and TFIID PIC assembly pathway selective for poised and induced promoters.",year:"2022",journal:"Genes Dev.",PMID:"36302553"},{author:"John",title:"Genome-wide promoter assembly in E. coli measured at single-base resolution.",year:"2022",journal:"Genome Res.",PMID:"35483960"},{author:"Zhao",title:"Ssl2/TFIIH function in transcription start site scanning by RNA polymerase II in Saccharomyces cerevisiae.",year:"2021",journal:"Elife.",PMID:"34652274"},{author:"Lai",title:"A ChIP-exo screen of 887 Protein Capture Reagents Program transcription factor antibodies in human cells.",year:"2021",journal:"Genome Res.",PMID:"34426512"},{author:"Rossi",title:"A high-resolution protein architecture of the budding yeast genome.",year:"2021",journal:"Nature.",PMID:"33692541"},{author:"Mittal",title:"High similarity among ChEC-seq datasets.",year:"2021",journal:"bioRxiv.",doi:"https://doi.org/10.1101/2021.02.04.429774"},{author:"Badjatia",title:"Acute stress drives global repression through two independent RNA polymerase II stalling events in Saccharomyces.",year:"2021",journal:"Cell Rep.",PMID:"33472084"},{author:"Rossi",title:"Simplified ChIP-exo assays.",year:"2018",journal:"Nat Commun.",PMID:"30030442"},{author:"Rossi",title:"Genome-wide determinants of sequence-specific DNA binding of general regulatory factors.",year:"2018",journal:"Genome Res.",PMID:"29563167"},{author:"Vinayachandran",title:"Widespread and precise reprogramming of yeast protein-genome interactions in response to heat shock.",year:"2018",journal:"Genome Res.",PMID:"29444801"},{author:"Lai",title:"Genome-wide uniformity of human 'open' pre-initiation complexes.",year:"2017",journal:"Genome Res.",PMID:"27927716"},{author:"Rossi",title:"Correspondence: DNA shape is insufficient to explain binding.",year:"2017",journal:"Nat Commun.",PMID:"28580956"}];function l(e){let{value:t,original:a}=e;var r=a.doi;return a.PMID&&(r="https://pubmed.ncbi.nlm.nih.gov/"+a.PMID),o.createElement("a",{href:`${r}`,target:"blank",rel:"noreferrer noopener"},t)}const u=[{Header:"Author",accessor:"author",className:"pester-data-table left"},{Header:"Year",accessor:"year",className:"pester-data-table",Cell:e=>{let{cell:{value:t},row:{original:a}}=e;return o.createElement("b",null," ",t," ")}},{Header:"Title",accessor:"title",className:"pester-data-table left",Cell:e=>{let{cell:{value:t},row:{original:a}}=e;return o.createElement(l,{value:t,original:a})}},{Header:"Journal",accessor:"journal",className:"pester-data-table"}],c={id:"citing-us",title:"Citing Us",sidebar_label:"Citing Us"},d=void 0,p={unversionedId:"Guides/citing-us",id:"Guides/citing-us",title:"Citing Us",description:"If you use ScriptManager in your work, you can use the Lang et al (2022) publication or use ScriptManager's unique RRID:SCR_021797.",source:"@site/docs/Guides/citing-us.md",sourceDirName:"Guides",slug:"/Guides/citing-us",permalink:"/scriptmanager-docs/docs/Guides/citing-us",draft:!1,tags:[],version:"current",lastUpdatedBy:"owlang",lastUpdatedAt:1689730362,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{id:"citing-us",title:"Citing Us",sidebar_label:"Citing Us"},sidebar:"generalSidebar",previous:{title:"Code of Conduct",permalink:"/scriptmanager-docs/docs/Guides/Community/code-of-conduct"}},m={},g=[{value:"Publications that use ScriptManager",id:"publications-that-use-scriptmanager",level:3}],h={toc:g},y="wrapper";function b(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"If you use ScriptManager in your work, you can use the ",(0,n.yg)("a",{parentName:"p",href:"https://dl.acm.org/doi/abs/10.1145/3491418.3535161"},"Lang et al (2022)")," publication or use ScriptManager's unique ",(0,n.yg)("a",{parentName:"p",href:"https://scicrunch.org/resources/data/record/nlx_144509-1/SCR_021797/resolver?q=SCR_021797%2A&l=SCR_021797%2A&i=rrid:scr_021797"},"RRID:",(0,n.yg)("strong",{parentName:"a"},"SCR_021797")),"."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"We welcome anyone who uses ScriptManager for analysis in their publications to let us know by sending an email to ",(0,n.yg)("a",{parentName:"p",href:"mailto:owl8@cornell.edu"},"owl8@cornell.edu")," so we can list it in our showcase of publications below!")),(0,n.yg)("h3",{id:"publications-that-use-scriptmanager"},"Publications that use ScriptManager"),(0,n.yg)("p",null,"Browse our list of publications that used ScriptManager in their work! You might find some interesting ideas and examples for building out your analysis."),(0,n.yg)(i.i,{columns:u,data:s,mdxType:"PesterDataTable"}))}b.isMDXComponent=!0}}]);