---
id: genome-tracks-tutorial
title: "Making Genome Tracks Tutorial"
sidebar_label: "Genome Tracks (BigWig)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

_How to turn your BAM files into genome track files that can be viewed in a genome browser_

**Goal:** This tutorial provides a guide to transforming and filtering your ChIP-exo alignment data into files that can be uploaded by a genome browser.

<div class="tutorial-img-flow-container">
  <img src={require('/gallery/IGV_BrowserShot.png').default} style={{width:100+'%',}}/>
</div>


:::info
❗ ** BigWig Warning **❗
Be careful about performing analysis steps using BigWig files instead of BAM files. BigWigs are excellent for visualizing data pileups in a genome browser but if you are processing data, we recommend you process data directly from BAM formats. From a information content and reproducibility standpoint, BAM files have notable advantages over BigWigs. [Read more about some of these advantages][bam-v-bigwig]
:::

This tutorial is based on the processing script from [Mittal et al, 2022][geo-tracks-script] to turn BAM files into BigWig tracks **with base-pair resolution for high resolution assays**.


There will be a couple steps that need to be performed on the command line using UCSC binaries because we currently don't have a parser for BigWig files (in the works but not ready yet). In the meantime, here are the step-by-step instructions for using as much of ScriptManager's GUI as possible to generate the BigWig track.


## Download ScriptManager (v0.14):
The current version of ScriptManager is available for download **[here][github-v14]**. Make sure you have [Java installed][java-install].

The file `ScriptManager-v0.14.jar` should be placed someplace locally accessible. For example on Mac OS on the Desktop (Permissions will need to be accepted) or someplace in your home directory (i.e. Macintosh HD/Users/userID/ScriptManager)


## Download USCS binary `bedGraphToBigWig`
You will need to download the precompiled binary for converting bedGraphs to BigWig files. Navigate to [UCSC executables FTP][ucsc-exe]. Click the link to the OS that matches your machine and scroll down to download the `bedGraphToBigWig` binary.

<Tabs>
  <TabItem value="linux-macos" label="Linux/MacOS" default>

Make sure you modify the permissions so that you can execute the binary. You can do this with `chmod`
```
chmod 755 /path/to/bedGraphToBigWig
```
For example, if your `bedGraphToBigWig` binary downloaded to your `Downloads` folder,
```
chmod 755 ~/Downloads/bedGraphToBigWig
```

  </TabItem>
</Tabs>

## Download data

You need one file of sequencing data alignments (BAM) to complete this exercise and a file with the sacCer3 yeast reference genome chromosome sizes (`chrom.sizes`). [Read more about the BAM file format here.][file-formats]

### BAM File
This is the set of Reb1 read alignments from the Yeast Epigenome Project (YEP). [See Rossi et al (2021)][rossi-2021] for more details.

<Link
  className="button button--secondary"
  href="ftp://data1.commons.psu.edu/pub/commons/eberly/pughlab/yeast-epigenome-project/12141_YEP.zip">
  Download sample BAM file
</Link>

OR


<div class="tutorial-img-flow-container">
  <img src={require('./img/download-yep-home.png').default} style={{width:60+'%'}} />
</div>

1. Navigate to [www.yeastepigenome.org][yep-stencil] and search for Reb1
2. Select "META DATA"
3. Select "Direct Download"
4. Unzip the resulting file ‘12141_YEP.zip’ and inspect the contents of the new `12141_YEP` folder. It should contain a file called `12141_filtered.bam`.

<div class="tutorial-img-flow-container">
  <img src={require('./img/download-yep-reb1.png').default} style={{width:50+'%'}} />
  <img src={require('./img/download-yep-reb1-metadata.png').default} style={{width:50+'%'}} />
</div>

### XXXX.chrom.sizes Reference File
You will also need the chromosome sizes file of the yeast reference genome (sacCer3):

<Link
  className="button button--secondary"
  href="https://hgdownload.soe.ucsc.edu/goldenPath/sacCer3/bigZips/sacCer3.chrom.sizes">
  Download sacCer3.chrom.sizes (TXT)
</Link>

<br />
<br />

:::warning
The downloaded sacCer3.chrom.sizes file may be using the roman numeral naming system (`chrI chrII chrIII ...`). You will need to modify this to the arabic (`chr1 chr2 chr3 ...`) numeral naming system if you plan to use the BAM file linked above. You can do this in a simple text editor.

Also, if the file is missing the `2-micron` row, you will need to add it manually. Simply append the following tab-delimited row to the bottom of the `sacCer3.chrom.sizes` file.
```
2-micron	6318
```
:::


## Generate the Genome Tracks

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


### 2. Create a whole-genome pileup using BAM Format Converter Tools

#### 2.1. Navigate to BAM Format Converter ➡️ [__BAM to scIDX__][bam-to-scidx] to do a genome-wide pileup of your BAM
<div class="tutorial-img-flow-container">
  <img src={require('./img/maingui-bamtoscidx.png').default} style={{width:60+'%',}} />
</div>

#### 2.2. Select Encoding information
Since this is a ChIP-exo dataset, we will select Read 1 (5' end) for the encoding. You may select insert size filters if you wish.

#### 2.3. Execute pileup
<div class="tutorial-img-flow-container">
  <img src={require('./img/gui-bamtoscidx.png').default} style={{width:60+'%',}} />
  <i class="fa-solid fa-arrow-right fa-lg"></i>
  <img src={require('./img/gui-bamtoscidx-output.png').default} style={{width:40+'%',}}/>
</div>

This should output a `12141_filtered_READ1.tab` file.

### 3. (Optional) Normalize the genome track

*Skip this if you would like to make a track of the raw read counts.*

ScriptManager includes a "Calculate Scaling Factor" tool under the "Read Analysis" tool group that can calculate scaling factors based on several methodologies including total tag normalization and the Normalization of ChIP-seq (NCIS) protocol. [Read more in the docs.][scaling-factor] Please be sure to check that your [normalization method is appropriate][correct-normalization] for your data.

#### 3.1. Navigate to Read Analysis ➡️ [__Calculate Scaling Factor__][scaling-factor] to calculate a scaling factor
<div class="tutorial-img-flow-container">
  <img src={require('./img/maingui-scalingfactor.png').default} style={{width:60+'%',}} />
</div>

#### 3.2. Select the BAM file you want to create the data track from

#### 3.3. Select a normalization method and execute
<div class="tutorial-img-flow-container">
  <img src={require('./img/gui-scalingfactor.png').default} style={{width:60+'%',}} />
  <i class="fa-solid fa-arrow-right fa-lg"></i>
  <div>
    <img src={require('./img/gui-scalingfactor-output.png').default}/>
    <img src={require('./img/gui-scalingfactor-dialog.png').default}/>
  </div>
</div>

For this BAM file, the total tag method gives a scaling factor of `9.562259045426815`.

#### 3.4. Navigate to Read Analysis ➡️ [__Scale Matrix__][scale-matrix] to apply the normalization to the data track

<div class="tutorial-img-flow-container">
  <img src={require('./img/maingui-scalematrix.png').default} style={{width:60+'%',}} />
</div>

#### 3.2. Input the normalization factor and adjust the start row to 2

#### 3.3. Load the file and execute matrix scaling

You will be loading in the scIDX file (not the BAM).

<div class="tutorial-img-flow-container">
  <img src={require('./img/gui-scalematrix.png').default} style={{width:60+'%',}} />
  <i class="fa-solid fa-arrow-right fa-lg"></i>
  <img src={require('./img/gui-scalematrix-dialog.png').default} style={{width:40+'%',}}/>
</div>

This should output a `12141_filtered_READ1_SCALE.tab` file.

### 4. Convert scIDX to BigWig
Since ScriptManager currently does not support converting BedGraph files to BigWigs, this step must be done in your terminal/on the command-prompt.

#### 4.1. Turn your scIDX file into a bedGraph file

<Tabs>
  <TabItem value="shell" label="Shell" default>

```
grep -v -f sacCer3.chrom.sizes 12141_filtered_READ1_SCALE.tab > 12141_filtered_READ1_SCALE.filtered.tab
sed '1d;2d' 12141_filtered_READ1_SCALE.filtered.tab | awk '{OFS="\t"}{FS="\t"}{print $1, $2, $2+1, $3}' |sort -k1,1 -k2,2n > 12141_filtered_READ1_SCALE_forward.bedgraph
sed '1d;2d' 12141_filtered_READ1_SCALE.filtered.tab | awk '{OFS="\t"}{FS="\t"}{print $1, $2, $2+1, $4}' |sort -k1,1 -k2,2n > 12141_filtered_READ1_SCALE_reverse.bedgraph
```

  </TabItem>

  <TabItem value="excel" label="Excel" default>

Open your file in excel and strip the file of the first two rows:

```
#2023-03-10 12:52:40.439;12141_filtered.bam;READ1
chrom   index   forward reverse value
```

You may also have read mapping to the very edges of the chromosome. These entries will also have to be removed.

Then rearrange the columns into BedGraph format by copying them in the following order (3rd column is the value of col2 plus one):

* `12141_filtered_READ1_SCALE_forward.bedGraph`: col1, col2, (col2 +1), col3
* `12141_filtered_READ1_SCALE_reverse.bedGraph`: col1, col2, (col2 +1), col4

...and then sort each of them by the first and then the second columns. This format is tab-delimited (not comma-delimited!) so save as a tab-delimited text file. Do not save this as an Excel file format (`.xlsx`, `.xls`, etc). This should be a `.tsv` or `.tab` format.

  </TabItem>
</Tabs>


#### 4.2. Turn your bedGraph file into a BigWig file

<Tabs>
  <TabItem value="shell" label="Shell" default>

```
./bedGraphToBigWig 12141_filtered_READ1_SCALE_forward.bedGraph sacCer3.chrom.sizes my-track-basename_forward.bw
./bedGraphToBigWig 12141_filtered_READ1_SCALE_reverse.bedGraph sacCer3.chrom.sizes my-track-basename_reverse.bw
```

  </TabItem>

</Tabs>


#### 4.3. Load the BigWig into your [favorite genome browser][get-igv]
<div class="tutorial-img-flow-container">
  <img src={require('/gallery/IGV_BrowserShot.png').default} style={{width:80+'%',}} />
</div>

Tah dah! You've made the genome tracks for a ChIP-exo dataset!


## Command-Line shell script

The following shell commands mirror the manipulations described above to create BigWig genome tracks. This can serve as a template for you to write out your own workflows as bash scripts that execute command-line style ScriptManager.

```bash
SCRIPTMANAGER=/path/to/ScriptManager.jar
BGTOBW=/path/to/bedGraphToBigWig
CHRMSZ=/path/to/sacCer3.chrom.sizes
BAMFILE=/path/to/12141_filtered.bam
OUTPUT=/path/to/my-track-basename
FACTOR=9.562259045426815  # calculate this separately

# Index BAM if not already indexed
[ -f $BAMFILE.bai ] || samtools index $BAMFILE
# Pileup BAM along whole genome
java -jar $SCRIPTMANAGER bam-format-converter bam-to-scidx $BAMFILE -o $OUTPUT.raw.tab
# Only include pileups from chromosomes in the sacCer3.chrom.sizes reference
grep -v -f $CHRMSZ $OUTPUT.raw.tab > $OUTPUT.filtered.tab
# Scale SCIDX output (optional)
java -jar $SCRIPTMANAGER read-analysis scale-matrix $OUTPUT.filtered.tab -s $FACTOR -r 2 -o $OUTPUT.scaled.tab
# Convert to forward/reverse Bedgraph tracks
sed '1d;2d' $OUTPUT.scaled.tab | awk '{OFS="\t"}{FS="\t"}{print $1, $2, $2+1, $3}' |sort -k1,1 -k2,2n > $OUTPUT.forward.bedgraph
sed '1d;2d' $OUTPUT.scaled.tab | awk '{OFS="\t"}{FS="\t"}{print $1, $2, $2+1, $4}' |sort -k1,1 -k2,2n > $OUTPUT.reverse.bedgraph
# Compress to BigWig format
$BGTOBW $OUTPUT.forward.bedgraph $CHRMSZ $OUTPUT\_forward.bw
$BGTOBW $OUTPUT.reverse.bedgraph $CHRMSZ $OUTPUT\_reverse.bw

# Clean-up
rm $OUTPUT.raw.tab $OUTPUT.filtered.tab $OUTPUT.scaled.tab $OUTPUT.forward.bedgraph $OUTPUT.reverse.bedgraph

# Output files:
#  - /path/to/my-track-basename_forward.bw
#  - /path/to/my-track-basename_reverse.bw
```


[rossi-2021]:https://pubmed.ncbi.nlm.nih.gov/33692541/
[geo-tracks-script]:https://github.com/CEGRcode/2022-Mittal_SAGA/blob/main/03_Bulk_Processing/job/bulk_geo_tracks.pbs
[yep-stencil]:http://www.yeastepigenome.org/
[saccer3-fasta]:https://github.com/CEGRcode/GenoPipe/blob/master/EpitopeID/utility_scripts/genome_data/download_sacCer3_Genome.sh
[noble2009]:https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1000424&type=printable
[github-repo]:https://www.github.com/CEGRcode/scriptmanager
[github-v14]:https://github.com/CEGRcode/scriptmanager/releases/download/v0.14/ScriptManager-v0.14.jar
[ex-chipexo-bash]:https://www.github.com/CEGRcode/scriptmanager
[ucsc-exe]:https://hgdownload.soe.ucsc.edu/admin/exe/
[get-igv]:https://software.broadinstitute.org/software/igv/download

[java-install]:/docs/#java
[bam-v-bigwig]:/docs/Contributing/developer-guidelines#scriptmanager-design-principles

[bam-indexer]:/docs/bam-manipulation/bam-indexer
[bam-to-scidx]:/docs/bam-format-converter/bam-to-scidx
[expand-bed]:/docs/coordinate-manipulation/expand-bed
[tag-pileup]:/docs/read-analysis/tag-pileup
[scaling-factor]:/docs/read-analysis/scaling-factor
[scale-matrix]:/docs/read-analysis/scale-matrix
[correct-normalization]:/docs/read-analysis/scaling-factor#
[heatmap]:/docs/figure-generation/heatmap
[merge-heatmap]:/docs/figure-generation/merge-heatmap
[fasta-extract]:/docs/sequence-analysis/fasta-extract
[four-color]:/docs/figure-generation/four-color

[file-formats]:/docs/References/file-formats
