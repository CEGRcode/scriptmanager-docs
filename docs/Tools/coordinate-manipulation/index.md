---
id: index
title: Coordinate Manipulation
sidebar_label: Coordinate Manipulation
---

![Coordinate_Manipulation](/md-img/Coordinate_Manipulation.png)

Perform manipulations and transformations of coordinate interval files (e.g. expansion, sort, filter, convert).

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`expand-bed`][expand-bed] | [BED][bed-format] | [BED][bed-format] | Expands input BED file by adding positions to the border or around the center. |
| [`expand-gff`][expand-gff] | [GFF][gff-format] | [GFF][gff-format] | Expands input GFF file by adding positions to the border or around the center. |
| [`bed-to-gff`][bed-to-gff] | [BED][bed-format] | [GFF][gff-format] | Converts BED file format to GFF file format. |
| [`gff-to-bed`][gff-to-bed] | [GFF][gff-format] | [BED][bed-format] | Converts GFF file format to BED file format. |
| [`sort-bed`][sort-bed] | [BED][bed-format] + [CDT][matrix-format] | [BED][bed-format] + [CDT][matrix-format] | Sort a CDT file and its corresponding BED file by the total score in the CDT file across the specified interval. |
| [`sort-gff`][sort-gff] | [GFF][gff-format] + [CDT][matrix-format] | [GFF][gff-format] + [CDT][matrix-format] | Sort a CDT file and its corresponding GFF file by the total score in the CDT file across the specified interval. |
| [`shift-coord`][shift-coord] | [GFF][gff-format] or [BED][bed-format] | [GFF][gff-format] or [BED][bed-format] | Shift the coordinate intervals within a BED or GFF file (both start and stop) by a user specified distance up or downstream. |


[bed-to-gff]:/docs/Tools/coordinate-manipulation/bed-to-gff
[gff-to-bed]:/docs/Tools/coordinate-manipulation/gff-to-bed
[expand-bed]:/docs/Tools/coordinate-manipulation/expand-bed
[expand-gff]:/docs/Tools/coordinate-manipulation/expand-gff
[sort-bed]:/docs/Tools/coordinate-manipulation/sort-bed
[sort-gff]:/docs/Tools/coordinate-manipulation/sort-gff
[shift-coord]:/docs/Tools/coordinate-manipulation/shift-coord
