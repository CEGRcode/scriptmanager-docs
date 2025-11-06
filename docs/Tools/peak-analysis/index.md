---
id: index
title: Peak Analysis
sidebar_label: Peak Analysis
---

![Peak_Analysis](/md-img/Peak_Analysis.png)

Useful peak manipulation (filter, comparison, and simulation) utilities.

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`peak-align-ref`][peak-align-ref] | [BED(ref)][bed-format] + [BED(peak)][bed-format] | [CDT][cdt-format] | Align BED peaks to Reference BED file creating CDT files for heatmap generation. |
| [`filter-bed`][filter-bed] | [BED][bed-format] | [BED(cluster)][bed-format] + [BED(filter)][bed-format] | Filter BED file using user-specified exclusion zone using the score column to determine which peak to retain. |
| [`tile-genome`][tile-genome] | genomeName | \[[BED][bed-format]\|[GFF][gff-format]\] | Generate a coordinate file that tiles (non-overlapping) across an entire genome. |
| [`rand-coord`][rand-coord] | genomeName | \[[BED][bed-format]\|[GFF][gff-format]\] | Generate a coordinate file that tiles (non-overlapping) across an entire genome. |
| [`sort-by-dist`][sort-by-dist] | [BED][bed-format]/[GFF][gff-format] | [BED][bed-format]/[GFF][gff-format] | Sort BED/GFF by distance to another BED/GFF (e.g. peak annotations). |
| [`frix-score`][frix-score] | [BED][bed-format] + [BAM][bam-format] | [TXT][txt-format] | Quantify library enrichment around a set of Reference points (Fraction of Reads in Peak/Motif, aka FRiP/FRiM). |

[filter-bed]:/docs/Tools/peak-analysis/filter-bed
[frix-score]:/docs/Tools/peak-analysis/frix-score
[peak-align-ref]:/docs/Tools/peak-analysis/peak-align-ref
[rand-coord]:/docs/Tools/peak-analysis/rand-coord
[tile-genome]:/docs/Tools/peak-analysis/tile-genome
[sort-by-dist]:/docs/Tools/peak-analysis/sort-by-dist
