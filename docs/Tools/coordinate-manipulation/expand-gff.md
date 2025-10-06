---
id: expand-gff
title: Expand GFF File
sidebar_label: Expand GFF
---

import InputFileGFF from '/docs/DocComponents/InputFileGFF.mdx'
import OutputGZip from '/docs/DocComponents/OutputGZip.mdx'

![expand-gff](/icons/Coordinate_Manipulation/ExpandGFF_square.svg)

Expands input GFF file by adding positions to the border or around the center

<img src={require('/md-img/Coordinate_Manipulation/ExpandGFFWindow.png').default} style={{width:70+'%'}}/>

<InputFileGFF />

### Expansion strategy & size

Depending on the strategy selected, the "Size of Expansion" (in bp) can mean different things.

* __Expand from Center:__ The figure at the top of the page illustrates the "expand from center" expansion strategy where the midpoint is determined by script and then the window is expanded evenly on both sides of the midpoint to the size of expansion specified by the user. This results in a BED file with intervals of a fixed length.
* __Add to Border:__ This strategy pads both sides of the borders of the input intervals by a fixed amount specified by the user ("Size of Expansion"). Depending on whether or not the input BED file contains intervals of a fixed length, the resulting expansions will not necessarily include intervals of a fixed length.

<!-- Describe even/odd expansion behavior -->

### Output format

For each input GFF file, a new GFF file is created with the original filename and a `*_<sizeofexpansion>bp.gff` suffix.

<!-- Consider adding an example input to output toy converter example -->

<OutputGZip />


## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar coordinate-manipulation expand-gff [-hsV] [-b=<border>]
[-c=<center>] [-o=<output>] <gffFile>
```

### Positional Input

This tool takes a single [GFF file][gff-format] for input.



### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output` | specify output filename (default name will be same as original with expansion info and `.gff` ext) |
| `-s, --stdout` | output bed to STDOUT |
| `-z, --gzip`            | gzip output (default=false) |


### Expansion Options

| Option | Description |
| ------ | ----------- |
| `-c, --center` | expand from center (default, at 250bp) |
| `-b, --border` | add to border |

