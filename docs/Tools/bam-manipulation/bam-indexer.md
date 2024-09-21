---
id: bam-indexer
title: BAM Indexer
sidebar_label: BAM Indexer
---

[![Picard - BuildBamIndex](https://img.shields.io/static/v1?label=Picard&message=BuildBamIndex&color=orange)](https://broadinstitute.github.io/picard/command-line-overview.html#BuildBamIndex)

![bam-indexer](/icons/BAM_Manipulation/BAIIndexer_square.svg)

Generates BAI Index for input BAM files. Output BAI is in the same directory as input BAM file.

<img src={require('/md-img/BAM_Manipulation/BAIIndexerWindow.png').default} style={{width:70+'%'}}/>

Most tools using BAM inputs (including ScriptManager) require a BAM index file (`.bai`) file so that the tool can efficiently query the file for alignment records. _Read more in the [Picard documentation][picard-index]_.

ScriptManager's [TagPileup][tag-pileup], [Merge BAM replicates][merge-bam], [BAM Correlation][bam-correlation], and BAM Format Converter tools ([BAM to BED][bam-to-bed], [BAM to GFF][bam-to-gff], [BAM to bedGraph][bam-to-bedgraph], and [BAM to scIDX][bam-to-scidx]) are some example tools that require a `.bai` file.

### File inputs (BAM)
Make sure your inputs are properly formatted and use the appropriate `.bam` extension. This script also supports bulk selection and processing of files.

:::caution
BAM file **MUST** be [sorted][sort-bam] to successfully index.
:::

### Output (BAI)
After clicking "Index", ScriptManager will index all of the loaded BAM files and save them with the `.bai` extension following BAI convention.


:::info
It is standard practice to generate and save the index file in the same place with the same name as the `.bam` file it is indexing so that your bioinformatics tools can find it.

For example, the file `/User/bob/mydir/sample123.bam` will be indexed to `/User/bob/mydir/sample123.bam.bai`.
:::


## Command Line Interface (Picard and Samtools)
_CommandLine tools already exist for this function. This tool only exists as a GUI wrapper in ScriptManager._

Please see the [Samtools index tool][samtools-index] or the [Picard BuildBamIndex tool][picard-index].


[samtools-index]:http://www.htslib.org/doc/samtools-index.html
[picard-index]:https://broadinstitute.github.io/picard/command-line-overview.html#BuildBamIndex

[bam-correlation]:/docs/Tools/bam-statistics/bam-correlation
[bam-to-bedgraph]:/docs/Tools/bam-format-converter/bam-to-bedgraph
[bam-to-bed]:/docs/Tools/bam-format-converter/bam-to-bed
[bam-to-gff]:/docs/Tools/bam-format-converter/bam-to-gff
[bam-to-scidx]:/docs/Tools/bam-format-converter/bam-to-scidx
[bed-to-gff]:/docs/Tools/coordinate-manipulation/bed-to-gff
[merge-bam]:/docs/Tools/bam-manipulation/merge-bam
[sort-bam]:/docs/Tools/bam-manipulation/sort-bam
[bam-indexer]:/docs/Tools/bam-manipulation/bam-indexer
[tag-pileup]:/docs/Tools/read-analysis/tag-pileup
