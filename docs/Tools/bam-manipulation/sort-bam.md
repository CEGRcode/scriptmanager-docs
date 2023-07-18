---
id: sort-bam
title: Sort BAM
sidebar_label: Sort BAM
---
![sort-bam](/../static/icons/BAM_Manipulation/BAMFileSort_square.svg)

Sort BAM files in order to efficiently extract and manipulate. RAM intensive process. If program freezes, increase JAVA heap size.

:::info
Many bioinformatic files require sorting BAM files so that they can be [indexed][bam-indexer] and efficiently parsed. It is good practice to keep your BAM files sorted.
:::

<img src={require('/../static/md-img/BAM_Manipulation/SortBAMWindow.png').default} style={{width:70+'%'}}/>


### File inputs (BAM)
Make sure your inputs are properly formatted and use the appropriate `.bam` extension. This script also supports bulk selection and processing of files.

### Output (BAM)
The sorted output BAM files are named based on the input filenames. The `_sorted.bam` suffix is used for each output. For example, for a given `XXX.bam` input file, a new `XXX_sorted.bam` file will be written to the user-selected output directory.

## Command Line Interface (Picard and Samtools)
_CommandLine tools already exist for this function. This tool only exists as a GUI wrapper in ScriptManager._

Please see the [Samtools sort tool][samtools-sort] or the [Picard SortSam tool][picard-sort].

[samtools-sort]:http://www.htslib.org/doc/samtools-sort.html
[picard-sort]:https://broadinstitute.github.io/picard/command-line-overview.html#SortSam

[bam-indexer]:/docs/bam-manipulation/bam-indexer
