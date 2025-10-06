---
id: bed-to-gff
title: Convert BED to GFF
sidebar_label: BED to GFF
---

import InputFileBED from '/docs/DocComponents/InputFileBED.mdx'
import OutputGZip from '/docs/DocComponents/OutputGZip.mdx'

![BEDtoGFF](/icons/Coordinate_Manipulation/BEDtoGFF_square.svg)

Converts [BED file][bed-format]  to [GFF file][gff-format]

<img src={require('/md-img/Coordinate_Manipulation/BEDtoGFFWindow.png').default} style={{width:70+'%'}}/>

<InputFileBED />


### Output (GFF)

The converted file is named the same as its corresponding input filename by default (just swap extension for `.gff`) in [GFF-style][gff-format] format with the id (4th) column in the BED file used for details stored as the details column (9th) in the new BED file. Score columns map accordingly.

<!-- Consider adding an example input to output toy converter example -->

<OutputGZip />


## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar coordinate-manipulation bed-to-gff [-hsV] [-o=<output>]
<bedFile>
```

### Positional Input

This tool takes a single [BED file][bed-format] for input.

### Output Options

| Option | Description |
| ------ | ----------- |
| -o, --output | specify output filename (default name will be same as original with .gff ext) |
| -s, --stdout | output gff to STDOUT |
| `-z, --gzip`            | gzip output (default=false) |
