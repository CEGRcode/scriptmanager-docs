---
id: index
title: Peak Analysis
sidebar_label: Peak Analysis
---

Useful peak manipulation (filter, comparison, and simulation) utilities.

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`peak-align-ref`][peak-align-ref] | [BED(ref)][bed-format] + [BED(peak)][bed-format] | [CDT][cdt-format] | Align BED peaks to Reference BED file creating CDT files for heatmap generation. |
| [`filter-bed`][filter-bed] | [BED][bed-format] | [BED(cluster)][bed-format] + [BED(filter)][bed-format] | Filter BED file using user-specified exclusion zone using the score column to determine which peak to retain. |
| [`tile-genome`][tile-genome] | genomeName | \[[BED][bed-format]\|[GFF][gff-format]\] | Generate a coordinate file that tiles (non-overlapping) across an entire genome. |
| [`rand-coord`][rand-coord] | genomeName | \[[BED][bed-format]\|[GFF][gff-format]\] | Generate a coordinate file that tiles (non-overlapping) across an entire genome. |
| [`signal-dup`][signal-dup] | [GFF][gff-format] + [BAM][bam-format] | [TXT][txt-format] | Calculate duplication statistics at user-specified regions. |


[filter-bed]:/docs/Tools/peak-analysis/filter-bed
[peak-align-ref]:/docs/Tools/peak-analysis/peak-align-ref
[rand-coord]:/docs/Tools/peak-analysis/rand-coord
[signal-dup]:/docs/Tools/peak-analysis/signal-dup
[tile-genome]:/docs/Tools/peak-analysis/tile-genome

[bam-format]:/docs/References/file-formats#bam
[bed-format]:/docs/References/file-formats#bed
[cdt-format]:/docs/References/file-formats#cdt
[gff-format]:/docs/References/file-formats#gff
[mat-format]:/docs/References/file-formats#matrix-format-custom-for-these-tools
[txt-format]:/docs/References/file-formats#txt
