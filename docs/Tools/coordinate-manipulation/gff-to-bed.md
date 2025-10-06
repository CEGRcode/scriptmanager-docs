---
id: gff-to-bed
title: Convert GFF to BED
sidebar_label: GFF to BED
---

import InputFileGFF from '/docs/DocComponents/InputFileGFF.mdx'
import OutputGZip from '/docs/DocComponents/OutputGZip.mdx'

![gff-to-bed](/icons/Coordinate_Manipulation/GFFtoBED_square.svg)

Converts GFF file format to BED file format

<img src={require('/md-img/Coordinate_Manipulation/GFFtoBEDWindow.png').default} style={{width:70+'%'}}/>

<InputFileGFF />


### Output (BED)

The converted file is named the same as its corresponding input filename by default (just swap extension for `.bed`) in [BED-style][bed-format] format with the details (9th) column in the GFF file used for details stored as the id column (4th) in the new BED file. Score columns map accordingly.

<!-- Consider adding an example input to output toy converter example -->

<OutputGZip />


## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar coordinate-manipulation gff-to-bed [-hsV] [-o=<output>]
<gffFile>
```


### Positional Input

This tool takes a single [GFF file][gff-format] for input.


### Output Options

| Option | Description |
| ------ | ----------- |
| -o, --output | specify output filename (default name will be same as original with .bed ext) |
| -s, --stdout | output bed to STDOUT |
| `-z, --gzip`            | gzip output (default=false) |

