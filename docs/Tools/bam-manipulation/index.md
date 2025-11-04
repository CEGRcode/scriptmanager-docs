---
id: index
title: BAM Manipulation
sidebar_label: BAM Manipulation
---

![BAM_Manipulation](/md-img/BAM_Manipulation.png)

Perform various utility functions on BAM files (e.g. index, sort, remove duplicates, merge, filter).

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`bam-indexer`][bam-indexer] | [BAM][bam-format] | [.bai][bam-format] | Generates BAI Index for input BAM files. Output BAI is in the same directory as input BAM file. |
| [`sort-bam`][sort-bam] | [BAM][bam-format] | [BAM][bam-format] | Sort BAM files in order to efficiently extract and manipulate.\nRAM intensive process. If program freezes, increase JAVA heap size. |
| [`mark-duplicates`][mark-duplicates] | [BAM][bam-format] | [BAM][bam-format] | Removes duplicate reads in Paired-End sequencing given identical 5' read locations. RAM intensive process. If program freezes, increase JAVA heap size. |
| [`merge-bam`][merge-bam] | [BAM][bam-format]\[..\] | [BAM][bam-format] | Merges Multiple BAM files into single BAM file. Sorting is performed automatically. RAM intensive process. If program freezes, increase JAVA heap size. |
| [`filter-pip-seq`][filter-pip-seq]| [BAM][bam-format] | [BAM][bam-format] | Filter BAM file by -1 nucleotide. Requires genome FASTA file. Note this program does not index the resulting BAM file and user must use appropriate samtools command to generate BAI. |


[bam-indexer]:/docs/Tools/bam-manipulation/bam-indexer
[filter-pip-seq]:/docs/Tools/bam-manipulation/filter-pip-seq
[merge-bam]:/docs/Tools/bam-manipulation/merge-bam
[mark-duplicates]:/docs/Tools/bam-manipulation/mark-duplicates
[sort-bam]:/docs/Tools/bam-manipulation/sort-bam
