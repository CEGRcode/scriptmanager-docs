---
id: index
title: Figure Generation
sidebar_label: Figure Generation
---

Make publication quality figures from heatmap matrix data and sequences.

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`heatmap`][heatmap] | [CDT][cdt-format] | [PNG][png-format] | Generate heatmap using CDT files. |
| [`merge-heatmap`][merge-heatmap] | [PNG][png-format] + [PNG][png-format] | [PNG][png-format] | Merge Sense and Antisense png heatmaps. |
| [`four-color`][four-color] | [FASTA][fasta-format] | [PNG][png-format] | Generate 4Color sequence plot given FASTA file and user-defined RGB colors. |
| [`composite-plot`][composite] | [CDT][cdt-format] | [PNG][png-format] | Generate a Composite Plot PNG from composite data like the output in TagPileup. |


[composite]:/docs/Tools/figure-generation/composite-plot
[four-color]:/docs/Tools/figure-generation/four-color
[heatmap]:/docs/Tools/figure-generation/heatmap
[merge-heatmap]:/docs/Tools/figure-generation/merge-heatmap

[cdt-format]:/docs/References/file-formats#cdt
[fasta-format]:/docs/References/file-formats#fasta
[mat-format]:/docs/References/file-formats#matrix-format-custom-for-these-tools
[png-format]:/docs/References/file-formats#png
