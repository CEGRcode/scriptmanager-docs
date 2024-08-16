---
id: index
title: BAM Statistics
sidebar_label: BAM Statistics
---

Perform various statistical checks on BAM files (e.g. insert size distributions and coverage correlations).

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`se-stat`][se-stat] | [BAM][bam-format] | [TXT][txt-format] | Genome-Genome correlations for replicate comparisons given multiple sorted and indexed (BAI) BAM files. |
| [`pe-stat`][pe-stat] | [BAM][bam-format] | [TXT][txt-format] | Generates Insert-size Histogram statistic (GEO requirement) and outputs BAM Header including alignment statistics and parameters given a sorted and indexed (BAI) paired-end BAM File. |
| [`bam-correlation`][bam-correlation] | [BAM][bam-format] | [TXT][txt-format] | Output BAM Header including alignment statistics and parameters given any indexed (BAI) BAM File. |


[bam-correlation]:/docs/Tools/bam-statistics/bam-correlation
[pe-stat]:/docs/Tools/bam-statistics/pe-stat
[se-stat]:/docs/Tools/bam-statistics/se-stat

[bam-format]:/docs/Guides/Getting-Started/file-formats#bam
[txt-format]:/docs/Guides/Getting-Started/file-formats#txt
