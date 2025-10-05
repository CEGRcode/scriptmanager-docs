---
id: index
title: BAM Statistics
sidebar_label: BAM Statistics
---

![BAM_Statstics](/md-img/BAM_Statistics.png)

Perform various statistical checks on BAM files (e.g. insert size distributions and coverage correlations).

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`se-stat`][se-stat] | [BAM][bam-format] | [TXT][txt-format] | Genome-Genome correlations for replicate comparisons given multiple sorted and indexed (BAI) BAM files. |
| [`pe-stat`][pe-stat] | [BAM][bam-format] | [TXT][txt-format] | Generates Insert-size Histogram statistic (GEO requirement) and outputs BAM Header including alignment statistics and parameters given a sorted and indexed (BAI) paired-end BAM File. |
| [`bam-correlation`][bam-correlation] | [BAM][bam-format] | [TXT][txt-format] | Output BAM Header including alignment statistics and parameters given any indexed (BAI) BAM File. |
| [`cross-corr`][cross-corr] | [BAM][bam-format] | [TXT][txt-format] | Calculate optimal tag shift based on ArchTEx implementation from [Lai et al, 2012 (PMID:22302569)][lai-2012]. |

[bam-correlation]:/docs/Tools/bam-statistics/bam-correlation
[cross-corr]:/docs/Tools/bam-statistics/cross-corr
[pe-stat]:/docs/Tools/bam-statistics/pe-stat
[se-stat]:/docs/Tools/bam-statistics/se-stat

[lai-2012]:https://pubmed.ncbi.nlm.nih.gov/22302569/