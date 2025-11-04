---
id: mark-duplicates
title: Mark Duplicates (Picard)
sidebar_label: Mark Duplicates
---

import InputFileBAM from '/docs/DocComponents/InputFileBAM.mdx'

[![Picard - MarkDuplicates](https://img.shields.io/static/v1?label=Picard&message=MarkDuplicates&color=orange)](https://broadinstitute.github.io/picard/command-line-overview.html#MarkDuplicates)

![mark-duplicates](/icons/BAM_Manipulation/BAMMarkDuplicates_square.svg)

Removes or marks duplicate reads in paired-end sequencing given identical 5' read positions. _Read more in the [Picard documentation][picard-markdup]_.

<img src={require('/md-img/BAM_Manipulation/BAMMarkDupWindow.png').default} style={{width:70+'%'}}/>

<InputFileBAM />

### Output file (BAM & TXT)

The output BAM files are named based on the input filenames. The `_dedup.bam` suffix is used for each output. For example, for a given `XXX.bam` input file, a new `XXX_dedup.bam` file will be written to the user-selected output directory.

The output text files are also named based on the input filenames. The `_dedup.metrics` suffix is used for each output. For example, for a given `XXX.bam` input file, a new `XXX_dedup.metrics` file will be written to the user-selected output directory.

:::tip
Make sure if you change the output BAM filename that you keep the `.bam` file extension.
:::

<!-- For example,

```md XXX_dedup.metrics
``` -->

### Remove Duplicates Option

Each output file can either remove one of the duplicate reads or mark them by changing the [SAMFlag][explain-samflags] value to update the status as "duplicate." This checkbox option determines whether the duplicate reads are kept or just marked.

### Generate BAI file (GUI only)

By checking this box, the script will automatically generate a BAI index file for each new filtered BAM file.

:::note
The CLI will not index the resulting BAM file. The user must use appropriate [samtools][samtools-index]/[Picard][picard-index] command to generate the BAI.
:::


## Command Line Interface (Picard and Samtools)
_CommandLine tools already exist for this function. This tool only exists as a GUI wrapper in ScriptManager._

Please see the [Samtools markdup tool][samtools-markdup] or the [Picard MarkDuplicates tool][picard-markdup] for a command line tool that performs this function.

[samtools-index]:http://www.htslib.org/doc/samtools-index.html
[picard-index]:https://broadinstitute.github.io/picard/command-line-overview.html#BuildBamIndex
[explain-samflags]:https://broadinstitute.github.io/picard/explain-flags.html

[samtools-markdup]:http://www.htslib.org/doc/samtools-markdup.html
[picard-markdup]:https://broadinstitute.github.io/picard/command-line-overview.html#MarkDuplicates
