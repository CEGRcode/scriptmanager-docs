"use strict";(self.webpackChunkscriptmanager_docs=self.webpackChunkscriptmanager_docs||[]).push([[5510],{142:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/stretch-81cf97a46cacc4cdc581734ed3380dd1.png"},2808:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/electrostatic_potential-d781805003e4ae423c1b03ec1685dea1.png"},4084:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/stagger-5259d322499e7d369fdd1f2b789cd6e3.png"},4492:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/DNAShapefromFASTAWindow-8fd2401bdbf6485092fe464d5b13b72e.png"},4580:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/propeller-489839c8347fb96a04fcc51ce7d9e817.png"},4598:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/slide-2f9440e669f7c75592d5f77cac50decb.png"},5388:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/roll-4c490640fd22513be791fcc9c3fcd168.png"},5545:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/opening-8d2bc5a3b5c8d6ab9788259ccdac3ee0.png"},5885:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/buckle-998f6f471c126dfbb6f79f0163d79aad.png"},6110:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>g,toc:()=>d});var n=t(8168),l=(t(6540),t(5680)),i=t(3554),s=t.n(i);const r={id:"dna-shape-fasta",title:"DNA Shape from FASTA File",sidebar_label:"DNA Shape from FASTA"},p=void 0,g={unversionedId:"Tools/sequence-analysis/dna-shape-fasta",id:"Tools/sequence-analysis/dna-shape-fasta",title:"DNA Shape from FASTA File",description:"dna-shape-fasta",source:"@site/docs/Tools/sequence-analysis/dna-shape-fasta.md",sourceDirName:"Tools/sequence-analysis",slug:"/Tools/sequence-analysis/dna-shape-fasta",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/dna-shape-fasta",draft:!1,tags:[],version:"current",lastUpdatedBy:"benjaminbeer256",lastUpdatedAt:1731032678,formattedLastUpdatedAt:"Nov 8, 2024",frontMatter:{id:"dna-shape-fasta",title:"DNA Shape from FASTA File",sidebar_label:"DNA Shape from FASTA"},sidebar:"toolSidebar",previous:{title:"DNA Shape from BED",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/dna-shape-bed"},next:{title:"fasta-extract",permalink:"/scriptmanager-docs/docs/Tools/sequence-analysis/fasta-extract"}},o={},d=[{value:"What do these shape options mean?",id:"what-do-these-shape-options-mean",level:2},{value:"File inputs (FASTA)",id:"file-inputs-fasta",level:2},{value:"Output file (CDT/TAB)",id:"output-file-cdttab",level:2},{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"Positional Input",id:"positional-input",level:3},{value:"Output Options",id:"output-options",level:3},{value:"Shape Options",id:"shape-options",level:3}],m={toc:d},u="wrapper";function c(e){let{components:a,...i}=e;return(0,l.yg)(u,(0,n.A)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"dna-shape-fasta",src:t(8266).A,width:"103",height:"103"})),(0,l.yg)("p",null,"Calculate intrinsic DNA shape parameters given input FASTA files. Based on Roh's lab DNAshape server data."),(0,l.yg)("p",null,"Based on the findings from the Rohs lab (",(0,l.yg)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/23703209/"},"Zhou et al, 2013"),"; ",(0,l.yg)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/29165643/"},"Li et al, 2017"),"), a sliding window approach using a 5bp wide window is a strong predictor of local DNA shape. Using this approach, we can predict 13 kinds of DNA shapes. The electrostatic potential of the strand is also calculable using a similar approach (",(0,l.yg)("a",{parentName:"p",href:"https://pmc.ncbi.nlm.nih.gov/articles/PMC5716191/"},"Chiu et al,2017"),")."),(0,l.yg)("img",{src:t(4492).A,style:{width:"70%"}}),(0,l.yg)("p",null,"This script takes in a series of nucleotide sequences from a FASTA file and determines the average shape score(s) across the bp positions."),(0,l.yg)("h2",{id:"what-do-these-shape-options-mean"},"What do these shape options mean?"),(0,l.yg)("p",null,"Below is a video introducing some of the shape measurements that we are trying to capture with these calculations."),(0,l.yg)(s(),{playing:!0,controls:!0,url:"https://www.youtube.com/watch?v=JeQLzRhU--U",style:{border:"5px solid black"},mdxType:"ReactPlayer"}),(0,l.yg)("br",null),(0,l.yg)("admonition",{type:"info"},(0,l.yg)("p",{parentName:"admonition"},(0,l.yg)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/29563167/"},"Read more on how DNA shape was used in the analysis of comparing TF-binding ",(0,l.yg)("em",{parentName:"a"},"in-vivo")," vs ",(0,l.yg)("em",{parentName:"a"},"in-vitro")," (Rossi et al, 2018)."))),(0,l.yg)("h2",{id:"file-inputs-fasta"},"File inputs (FASTA)"),(0,l.yg)("p",null,"Each input FASTA-formatted set of sequences has a shape score series pattern. Because the shape score is a series corresponding to the bp position, the FASTA sequences input should be positionally linked to some feature and of the same length."),(0,l.yg)("p",null,"When using the GUI, make sure your input is properly formatted and uses the appropriate FASTA (",(0,l.yg)("inlineCode",{parentName:"p"},".fa")," / ",(0,l.yg)("inlineCode",{parentName:"p"},".fa.gz")," / ",(0,l.yg)("inlineCode",{parentName:"p"},".fasta")," / ",(0,l.yg)("inlineCode",{parentName:"p"},"..."),") extensions."),(0,l.yg)("h2",{id:"output-file-cdttab"},"Output file (CDT/TAB)"),(0,l.yg)("p",null,"The average composites of the CDT output will be displayed in the GUI output window:"),(0,l.yg)("div",{class:"tutorial-img-flow-container"},(0,l.yg)("img",{src:t(8386).A,style:{width:"50%"}}),(0,l.yg)("img",{src:t(9483).A,style:{width:"50%"}})),(0,l.yg)("p",null,"There should be a ",(0,l.yg)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT file"),"/Composite file output for each shape aspect selected based on the input filename and with a suffix distinguishing each selected shape style (",(0,l.yg)("inlineCode",{parentName:"p"},"_HelT.cdt"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"_MGW.cdt"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"_PropT.cdt"),", and ",(0,l.yg)("inlineCode",{parentName:"p"},"_Roll.cdt"),")."),(0,l.yg)("p",null,"For example, in the command-line execution, an ",(0,l.yg)("inlineCode",{parentName:"p"},"-o myoutput")," argument can be provided and the resulting files should be called ",(0,l.yg)("inlineCode",{parentName:"p"},"myoutput_MGW.cdt"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"myoutput_PTwist.cdt"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"myoutput_HTwist.cdt"),", or ",(0,l.yg)("inlineCode",{parentName:"p"},"myoutput_Roll.cdt")," according to the shapes selected (or with ",(0,l.yg)("inlineCode",{parentName:"p"},".out")," if composite is selected)."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"The output matrix files use the same format as the output from ",(0,l.yg)("a",{parentName:"p",href:"/docs/Tools/read-analysis/tag-pileup"},"Tag Pileup")," (can visualize with Figure Generation's ",(0,l.yg)("a",{parentName:"p",href:"/docs/Tools/figure-generation/heatmap"},"heatmap")," and ",(0,l.yg)("a",{parentName:"p",href:"/docs/Tools/figure-generation/composite-plot"},"composite")," tools).")),(0,l.yg)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,l.yg)("p",null,"Usage:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"java -jar ScriptManager.jar sequence-analysis dna-shape-fasta [-aghlprV]\n[--avg-composite] [-o=<outputBasename>] <fastaFile>\n")),(0,l.yg)("h3",{id:"positional-input"},"Positional Input"),(0,l.yg)("p",null,"Expects a ",(0,l.yg)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#fasta"},"FASTA")," formatted file with many sequences to stack up with each other (like ",(0,l.yg)("a",{parentName:"p",href:"/docs/Tools/sequence-analysis/fasta-extract"},"fasta-extract tool")," output)."),(0,l.yg)("h3",{id:"output-options"},"Output Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Option"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"-o, --output=<outputBasename>")),(0,l.yg)("td",{parentName:"tr",align:null},"Specify output basename (files for each shape indicated will share this base)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"-z, --gzip")),(0,l.yg)("td",{parentName:"tr",align:null},"gzip output (default=false)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--avg-composite")),(0,l.yg)("td",{parentName:"tr",align:null},"Save average composite")))),(0,l.yg)("p",null,"For each shape option to calculate indicated by the command, a ",(0,l.yg)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT file")," will be generated with an extension indicating the shape  type calculated."),(0,l.yg)("p",null,"If the ",(0,l.yg)("em",{parentName:"p"},"groove")," information is indicated in the command to be used for the output, a file called ",(0,l.yg)("inlineCode",{parentName:"p"},"<outputBasename>_MGW.cdt")," will be generated.\nSimilarly for ",(0,l.yg)("em",{parentName:"p"},"propeller"),", ",(0,l.yg)("em",{parentName:"p"},"helical"),", and ",(0,l.yg)("em",{parentName:"p"},"roll"),", the output matrix ",(0,l.yg)("a",{parentName:"p",href:"/docs/Guides/Getting-Started/file-formats#cdt"},"CDT files")," will be named with the suffixes ",(0,l.yg)("inlineCode",{parentName:"p"},"_PTwist.cdt"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"_HTwist.cdt"),", and ",(0,l.yg)("inlineCode",{parentName:"p"},"_Roll.cdt"),", respectively."),(0,l.yg)("h3",{id:"shape-options"},"Shape Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Option"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Units"),(0,l.yg)("th",{parentName:"tr",align:null},"Image"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"-g, --groove")),(0,l.yg)("td",{parentName:"tr",align:null},"Output minor groove width"),(0,l.yg)("td",{parentName:"tr",align:null},"Angstroms"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(9373).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"-r, --roll")),(0,l.yg)("td",{parentName:"tr",align:null},"Output roll"),(0,l.yg)("td",{parentName:"tr",align:null},"Degrees"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(5388).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"-p, --propeller")),(0,l.yg)("td",{parentName:"tr",align:null},"Output propeller twist"),(0,l.yg)("td",{parentName:"tr",align:null},"Degrees"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(4580).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"-l, --helical")),(0,l.yg)("td",{parentName:"tr",align:null},"Output helical twist"),(0,l.yg)("td",{parentName:"tr",align:null},"Degrees"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(7900).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--electrostatic-potential")),(0,l.yg)("td",{parentName:"tr",align:null},"Output electrostatic potential"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("em",{parentName:"td"},"kT/e")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(2808).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--stretch")),(0,l.yg)("td",{parentName:"tr",align:null},"Output stretch"),(0,l.yg)("td",{parentName:"tr",align:null},"Angstroms"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(142).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--buckle")),(0,l.yg)("td",{parentName:"tr",align:null},"Output buckle"),(0,l.yg)("td",{parentName:"tr",align:null},"Degrees"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(5885).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--shear")),(0,l.yg)("td",{parentName:"tr",align:null},"Output shear"),(0,l.yg)("td",{parentName:"tr",align:null},"Angstroms"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(8670).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--opening")),(0,l.yg)("td",{parentName:"tr",align:null},"Output opening"),(0,l.yg)("td",{parentName:"tr",align:null},"Degrees"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(5545).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--stagger")),(0,l.yg)("td",{parentName:"tr",align:null},"Output stagger"),(0,l.yg)("td",{parentName:"tr",align:null},"Angstroms"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(4084).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--tilt")),(0,l.yg)("td",{parentName:"tr",align:null},"Output tilt"),(0,l.yg)("td",{parentName:"tr",align:null},"Degrees"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(9896).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--slide")),(0,l.yg)("td",{parentName:"tr",align:null},"Output slide"),(0,l.yg)("td",{parentName:"tr",align:null},"Angstroms"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(4598).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--rise")),(0,l.yg)("td",{parentName:"tr",align:null},"Output rise"),(0,l.yg)("td",{parentName:"tr",align:null},"Angstroms"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(8718).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--shift")),(0,l.yg)("td",{parentName:"tr",align:null},"Output shift"),(0,l.yg)("td",{parentName:"tr",align:null},"Angstroms"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{src:t(6741).A,className:"DNA-shape-img"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"--2013")),(0,l.yg)("td",{parentName:"tr",align:null},"Output groove, roll, propeller twist, and helical twist (equivalent to -grpl)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"-a, --2021")),(0,l.yg)("td",{parentName:"tr",align:null},"Output all 14 metrics"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("sub",null,"Image Sources:",(0,l.yg)("br",null),(0,l.yg)("a",{href:"https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/b-dna"},"MGW"),(0,l.yg)("br",null),(0,l.yg)("a",{href:"https://www.info4eee.com/2013/03/application-of-electrostatics.html"},"EP"),(0,l.yg)("br",null),(0,l.yg)("a",{href:"https://x3dna.org/highlights/schematic-diagrams-of-base-pair-parameters"},"Base-pair Schematics")))}c.isMDXComponent=!0},6741:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/shift-f72396f17cbea5fabee1674989f692d2.png"},7900:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/twist-851545961f51470a7a29ad7a5e16e824.png"},8266:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/DNAShapefromFASTA_square-505161bf59e87437de5c3dc39914d030.svg"},8386:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/DNAShapeBED_Chart-Roll-75a006ac106a428e7c87e40cfa35b0ac.png"},8670:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/shear-438ba700398297e492125582e21719e4.png"},8718:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/rise-14fc9e63b2598c6fa674a0ab35e8a191.png"},9373:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/minor_groove-cb8136a5ed1f288e92bdd4af9ab6cac6.png"},9483:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/DNAShapeBED_Statistics-Roll-b7a3aa9f218435dcb72dffa182440d09.png"},9896:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/tilt-971b1e53dec3bed26462d6911f397814.png"}}]);