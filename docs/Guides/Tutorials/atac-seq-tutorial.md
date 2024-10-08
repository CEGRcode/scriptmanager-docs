---
id: atac-seq-tutorial
title: "ATAC-seq Tutorial"
sidebar_label: "ATAC-seq"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

_Generating two basic sequence-specific ATAC-Seq plots: composite and heatmap_

**Goal:** This tutorial provides a guide to generating 2 basic plots (Composite plot and Heatmap) using the ScriptManager platform and data generated by the [Stanford Encode Project][encode-project].

<div class="tutorial-img-flow-container" style={{ textAlign: 'center' }}>
  <img src={require('./img_atacseq/Atac-Seq_heatmap.png').default} style={{width:20+'%',}}/>
  <img src={require('./img_atacseq/Atac-seq_composite.png').default} style={{width:70+'%',}}/>
</div>

## Download ScriptManager (v0.14):
The current version of ScriptManager is available for download **[here][github-v14]**. Make sure you have [Java installed][java-install].

The file `ScriptManager-v0.14.jar` should be placed someplace locally accessible. For example on Mac OS on the Desktop (Permissions will need to be accepted) or someplace in your home directory (`Macintosh_HD:Users/userID/ScriptManager`)


## Download Data

You need one set of genomic coordinate regions to investigate (BED) and one file of sequencing data alignments (BAM) to complete this exercise. [Read more about the BED/BAM file formats here.][file-formats]


### BED File
This is the set of transcription start site (TSS) annotations for the GRCh38 genome build that has been subsampled down to 2000 sites for quick tutorial purposes. A more formal analysis may use a more complete set of annotations (many more sites).

<Link
  className="button button--secondary"
  target="\_blank"
  href="/sample_data/atac-seq-tutorial/UCSC_GRCh38_knownGene_GENCODEV3_TSS_2000bp_SUBSAMPLE-2000-Sites.bed" >
  Download sample BED file
</Link>

<br />
<br />

:::caution
If your BED file downloads with a `.txt` extension, make sure to change the filename to a `.bed` extension. For this tutorial, the BED file is named `UCSC_GRCh38_knownGene_GENCODEV3_TSS_2000bp_SUBSAMPLE-2000-Sites.bed`.
:::

### BAM File
This is the set of read alignments from the [ENCODE Project][encode-project] (`ENCFF128WZG.bam`). 

<Link
  className="button button--secondary"
  href="https://www.encodeproject.org/files/ENCFF128WZG/@@download/ENCFF128WZG.bam">
  Download sample BAM file
</Link>

<br />
<br />

:::caution
The BAM file is ~6.5GB large so make sure you have enough space on your machine before downloading.
:::

## Generate the Plots

### 1. Open ScriptManager

<Tabs>
  <TabItem value="macos" label="MacOS" default>

Depending on your system permissions, you may need to be an administrator to open this for the first time. On Mac systems, this can be done by right-clicking the file and selecting ‘Open’ at the top.

<div class="tutorial-img-flow-container">
  <img src={require('/static/md-img/General/MacOpenSM.png').default} style={{width:40+'%',border:'solid 1px'}} />
</div>

:::caution
Some MacOS systems may not properly open the JAR by simply double-clicking on the JAR file so you may need to open your Terminal window and execute it from the command line by executing the jar file *without any arguments or flags*:

```
java -jar /path/to/ScriptManager.jar
```

If you're not sure how to type the path to ScriptManager, you can type `java -jar ` (end with space) and then drag ScriptManager from Finder into your Terminal window and then press enter.
:::

  </TabItem>
  <TabItem value="linux" label="Linux">

Double-click or right-click the ScriptManager JAR file to start the program.

<div class="tutorial-img-flow-container">
  <img src={require('/static/md-img/General/LinuxOpenSM.png').default} style={{width:40+'%',border:'solid 1px'}} />
</div>


  </TabItem>
  <TabItem value="windows" label="Windows">

Double-click or right-click the ScriptManager JAR file to start the program.

<div class="tutorial-img-flow-container">
  <img src={require('/static/md-img/General/WindowsOpenSM.png').default} style={{width:40+'%',border:'solid 1px'}} />
</div>


  </TabItem>
</Tabs>

Once you see the main tool selection window, you're off to the races!

### 2. Generate BAI index file
A BAI index file is required for each BAM file of interest (i.e., the tag occupancy data you want to plot). This file allows for rapid access of the sorted and aligned sequence reads (BAM file).

:::tip

SAM/BAM standard is to keep BAI file in same directory as BAM file with the ScriptManager-generated filename.
```bash
ENCFF534DCE.bam
ENCFF534DCE.bam.bai  # Need to generate this file to proceed.
```

:::

#### 2.1. Navigate to BAM Manipulation ➡️ [__BAM-BAI Indexer__][bam-indexer]

<div class="tutorial-img-flow-container">
  <img src={require('./img/maingui-bamidx.png').default} style={{width:60+'%',}} />
</div>

#### 2.2. Generate BAI index files for each BAM file of interest by loading your BAM file and clicking "Index." (228,000,000 tags processed)

<div class="tutorial-img-flow-container">
  <img src={require('./img_atacseq/gui-bamidx2.png').default} style={{width:60+'%',}}/>
  <i class="fa-solid fa-arrow-right fa-lg"></i>
  <img src={require('./img/gui-bamidx-complete.png').default} style={{width:30+'%',}}/>
</div>

:::note
The speed of this step scales with the size of the BAM file. Generally this step 30 sec for a 100 MB BAM file but may take 1-2 min for a multi-GB BAM file.
:::

### 3. BAM File Statistics
The BAM File Statistics is a Quality Control feature that includes alignment statistics that can be used to check what the data looks like. Paired-end Statistics is a common quality control step used in many ATAC-seq analyses.  

#### 3.1. Navigate to BAM Statistics ➡️ [__Paired-End Statistics__][pair-end-statistics] 
<div class="tutorial-img_atacseq-flow-container" style={{ textAlign: 'center' }}>
  <img src={require('./img_atacseq/bamstatistics(1).png').default} style={{width:70+'%',}} />
</div>

#### 3.2. Select Output Statistics 
<div className="tutorial-img_atacseq-flow-container" style={{ textAlign: 'center' }}>
  <img src={require('./img_atacseq/bamstats(2).png').default} style={{width:60+'%',}}/>
  <img src={require('./img_atacseq/bamstatsfile.png').default} style={{width:80+'%',}}/>
</div>

### 4. Resize the GRCh38 BED file
The BED file is the set of reference coordinates that your heatmap and composite plots will be aligned to, but you’ll need to specify how far upstream and downstream you want your data to be plotted; i.e., “Size of Expansion (bp). If you bed file is defined by more than a 1 bp interval AND you want to add to limits of that interval, then select  “Add to Border”).

#### 4.1. Navigate to Coordinate File Manipulation ➡️ [__Expand BED File__][expand-bed]

<div class="tutorial-img-flow-container">
  <img src={require('./img/maingui-expandbed.png').default} style={{width:60+'%',}}/>
</div>


#### 4.2. For this tutorial, use the 5000bp expansion and select "Expand from Center".

<div class="tutorial-img-flow-container">
  <img src={require('./img_atacseq/gui-expandbed2.png').default} style={{width:60+'%',}}/>
  <i class="fa-solid fa-arrow-right fa-lg"></i>
  <img src={require('./img/gui-expandbed-complete.png').default} style={{width:30+'%',}}/>
</div>


### 5. Generate the tag pileup
Use TagPileup to pileup the BAM data within a set of BED coordinate windows to generate the composite plot and the matrix(CDT) files that will be used to generate the heatmaps.

#### 5.1. Navigate to Sequence Read Analysis ➡️ [__Tag Pileup__][tag-pileup]

<div class="tutorial-img-flow-container">
  <img src={require('./img/maingui-tagpileup.png').default} style={{width:60+'%',}}/>
</div>

#### 5.2. Load the BED and BAM files

#### 5.3. Use "Full Fragment" in the top right, then select "Combined" color , "Output Composite", "CDT", and "Output GZIP". Then, proceed to "Output Directory".

<div class="tutorial-img-flow-container">
  <img src={require('./img_atacseq/gui-tagpileup2.png').default} style={{width:100+'%',}}/>
</div>

#### 5.4. When ready, select ‘Pile Tags’ to execute
:::tip
The default parameters Tag Pileup is set to expect is a sequence-specific strand separated Atac-seq dataset. Modifications to these parameters are needed for more specific analysis or when using data generated from other assays.
:::

#### 5.5. Save composite results as PNG

<div class="tutorial-img-flow-container">
  <img src={require('./img_atacseq/tagpileupsave.png').default} style={{width:100+'%',}}/>
</div>

+ The displayed composite plot can be modified by right-clicking and selecting properties. Things such as axis labels, axis range, and colors can be modified here.

+ The final image can then be saved by right-clicking and selecting ‘Save as’. PNG is fine for most cases, but SVG is strongly recommended if this composite plot will be used in Adobe Illustrator later.

:::note
Besides the composite plot image, ScriptManager has saved the matrix `*.cdt` files to your Output Directory together with the composite plot values file (If you didn't change the name it would be called `composite_average.out`). These CDT files will be used as the input for generating heatmaps in the next step.
:::

### 6. Sort BED file by CDT file
Use Sort BED files by CDT to sort the entries based on chromosome name (C), followed by the start position (D), and then by the end position (T).

#### 6.1. Navigate to Coordinate File Manipulation ➡️ [__Sort BED__][sort-bed].

<div class="tutorial-img-flow-container">
  <img src={require('./img_atacseq/bedtocdt_coordinate.png').default} style={{width:60+'%',}}/>
</div>

#### 6.2. Load BED & CDT File from Tag Pileup
<div class="tutorial-img-flow-container">
  <img src={require('./img_atacseq/loadbed:bam.png').default} style={{width:80+'%',}}/>
</div>


#### 6.3. Change Expansion Size to 1000 from Center 
<div class="tutorial-img-flow-container">
  <img src={require('./img_atacseq/bed+cdt_expansion.png').default} style={{width:80+'%',}}/>
</div>

#### 6.4. Select Base Output File Name for sorted BED & CDT Files 
<div class="tutorial-img-flow-container">
  <img src={require('./img_atacseq/outputfile.png').default} style={{width:80+'%',}}/>
</div>

### 7. Generate Heatmaps

#### 7.1. Navigate to Figure Generation ➡️ [__Heat Map__][heatmap].

<div class="tutorial-img-flow-container">
  <img src={require('./img/maingui-heatmap.png').default} style={{width:80+'%',}}/>
</div>

#### 7.2. Load the sorted CDT file

#### 7.3. Select "Custom" for color, and change the Contrast Threshold to "Percentile Value".The heatmaps for this dataset show the best contrast when using the default "Percentile Threshold" value (.95 or 95%). 

#### 7.4. Click the "Output Heatmap" checkbox. The Heatmap generator does not save the produced PNG by default.

#### 7.5. Click "Generate" to save your PNG heatmap!

<div class="tutorial-img-flow-container">
  <img src={require('./img_atacseq/gui-heatmp.png').default} style={{width:55+'%',}}/>
  <i class="fa-solid fa-arrow-right fa-lg"></i>
  <img src={require('./img_atacseq/gui-heatmap-out.png').default} style={{width:45+'%',}}/>
</div>

<!-- Add section 8 for labeling heatmap -->

## Command-Line shell script

The following shell commands records the locations for a BED file, a BAM file, and the anticipated OUTPUT basename as environmental variables to derive the corresponding composite plot values and heatmaps. This can serve as a template for you to write out your own workflows as bash scripts that execute command-line style ScriptManager.

```bash
SCRIPTMANAGER=/path/to/ScriptManager.jar
BEDFILE=/path/to/UCSC_GRCh38_knownGene_GENCODEV3_ALL-TSS_2000bp.bed
BAMFILE=/path/to/ENCFF128WZG.bam
OUTPUT=/path/to/myoutput

samtools index $BAMFILE

java -jar $SCRIPTMANAGER bam-statistics pe-stat $BAMFILE -o $OUTPUT
java -jar $SCRIPTMANAGER coordinate-manipulation expand-bed -c 5000 $BEDFILE -o $OUTPUT\_5000bp.bed
java -jar $SCRIPTMANAGER read-analysis tag-pileup --combined --full-fragment $OUTPUT\_5000bp.bed $BAMFILE -o $OUTPUT\_composite.out -M $OUTPUT\_matrix
java -jar $SCRIPTMANAGER coordinate-manipulation sort-bed -c 1000 $OUTPUT\_5000bp.bed $OUTPUT\_matrix_combined.cdt -o $OUTPUT\_SORT
java -jar $SCRIPTMANAGER figure-generation heatmap -p .95 --black $OUTPUT\_SORT.cdt -o $OUTPUT\_heatmap.png

# Output files:
#  - /path/to/myoutput_InsertHistogram.out
#  - /path/to/myoutput_PE.png
#  - /path/to/myoutput_5000bp.bed
#  - /path/to/myoutput_composite.out
#  - /path/to/myoutput_matrix_combined.cdt
#  - /path/to/myoutput_SORT.bed
#  - /path/to/myoutput_SORT.cdt
#  - /path/to/myoutput_heatmap.png
```

[noble-paper]:https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1000424&type=printable
[saccer3cegr-fasta]:https://github.com/CEGRcode/GenoPipe/blob/master/EpitopeID/utility_scripts/genome_data/download_sacCer3_Genome.sh
[noble2009]:https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1000424&type=printable
[github-repo]:https://www.github.com/CEGRcode/scriptmanager
[github-v14]:https://github.com/CEGRcode/scriptmanager/releases/download/v0.14/ScriptManager-v0.14.jar
[ex-chipexo-bash]:https://www.github.com/CEGRcode/scriptmanager

[java-install]:/docs/#java

[sort-bed]:/docs/Tools/coordinate-manipulation/sort-bed
[pair-end-statistics]:/docs/Tools/bam-statistics/pe-stat
[bam-indexer]:/docs/Tools/bam-manipulation/bam-indexer
[expand-bed]:/docs/Tools/coordinate-manipulation/expand-bed
[tag-pileup]:/docs/Tools/read-analysis/tag-pileup
[heatmap]:/docs/Tools/figure-generation/heatmap

[file-formats]:/docs/Guides/Getting-Started/file-formats

[encode-project]: https://www.encodeproject.org/experiments/ENCSR868FGK/
