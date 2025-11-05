---
id: index
title: Figure Generation
sidebar_label: Figure Generation
---

![Figure_Generation](/md-img/Figure_Generation.png)

Make publication quality figures from heatmap matrix data and sequences.

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`heatmap`][heatmap] | [CDT][cdt-format] | [PNG][png-format] | Generate heatmap using CDT files. |
| [`three-color-heatmap`][three-color-heatmap] | [CDT][cdt-format] | [PNG][png-format] | Generate heat map with middling values. |
| [`merge-heatmap`][merge-heatmap] | [PNG][png-format] + [PNG][png-format] | [PNG][png-format] | Merge Sense and Antisense png heatmaps. |
| [`heatmap-labeler`][heatmap-labeler] | [PNG][png-format] + [PNG][png-format] | [PNG][png-format] | Create an SVG label for heatmap inputs. |
| [`four-color`][four-color] | [FASTA][fasta-format] | [PNG][png-format] | Generate 4Color sequence plot given FASTA file and user-defined RGB colors. |
| [`composite-plot`][composite] | [CDT][cdt-format] | [PNG][png-format] | Generate a Composite Plot PNG from composite data like the output in TagPileup. |


[composite]:/docs/Tools/figure-generation/composite-plot
[four-color]:/docs/Tools/figure-generation/four-color
[heatmap]:/docs/Tools/figure-generation/heatmap
[heatmap-labeler]:/docs/Tools/figure-generation/heatmap-labeler
[merge-heatmap]:/docs/Tools/figure-generation/merge-heatmap
[three-color-heatmap]:/docs/Tools/figure-generation/three-color-heatmap
