---
id: merge-bam
title: Merge BAM
sidebar_label: Merge BAM
---

![merge-bam](/icons/BAM_Manipulation/MergeSamFiles_square.svg)

Merges Multiple BAM files into single BAM file. Sorting is performed automatically. RAM intensive process. If program freezes, increase JAVA heap size.

<img src={require('/md-img/BAM_Manipulation/MergeBAMWindow.png').default} style={{width:70+'%'}}/>

This is frequently used for replicate merging. All input files loaded will be merged to a single BAM file.

### File inputs (BAM list)
Make sure your inputs are properly formatted and use the appropriate `.bam` extension. This script also supports bulk selection and processing of files.

:::caution
Make sure your BAM input files are [sorted][sort-bam] and [indexed][bam-indexer].
:::

### Output File Name (BAM)
The output merged BAM will be named according to the user-customizable text field that defaults to `merged_BAM.bam` in the user-selected "Output Directory".

:::tip
Make sure if you change the output BAM filename that you keep the `.bam` file extension.
:::


### Use multiple CPUs
User may speed up the merging by checking this box to allow threading for parallelization of the merge and sort algorithms.

### Generate BAI file (GUI only)
By checking this box, the script will automatically generate a BAI index file for each new filtered BAM file.

:::note
The CLI will not index the resulting BAM file. The user must use appropriate [samtools][samtools-index]/[Picard][picard-index] command to generate the BAI.
:::

## Command Line Interface (Picard and Samtools)
_CommandLine tools already exist for this function. This tool only exists as a GUI wrapper in ScriptManager._

Please see the [Samtools merge tool][samtools-merge] or the [Picard MergeBamAlignment tool][picard-merge] for a command line tool that performs this function.

[samtools-index]:http://www.htslib.org/doc/samtools-index.html
[picard-index]:https://broadinstitute.github.io/picard/command-line-overview.html#BuildBamIndex

[samtools-merge]:http://www.htslib.org/doc/samtools-merge.html
[picard-merge]:https://broadinstitute.github.io/picard/command-line-overview.html#MergeBamAlignment

[sort-bam]:/docs/Tools/bam-manipulation/sort-bam
[bam-indexer]:/docs/Tools/bam-manipulation/bam-indexer
