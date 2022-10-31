---
id: shift-coord
title: Shift BED/GFF
sidebar_label: Shift BED/GFF
author: Olivia Lang
---

<!--![ExpandBED](/../static/icons/Coordinate_Manipulation/ExpandBED_square.svg)-->

Shift coordinate intervals up/downstream.


<img src={require('/../static/md-img/Coordinate_Manipulation/ShiftCoordinateWindow.png').default} style={{width:70+'%'}}/>

Related to the [Bedtools `shift` function][bedtools-shift].

### Output format
For each input BED/GFF file, a new BED/GFF file is created with the original filename that has been stripped of its original extension and replaced with the `*_shift<+or-><sizeofexpansion>bp.bed` suffix. If the "Output GZIP" checkbox is slected, the `.gz` extension will also be appended.

## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar coordinate-manipulation shift-coord [-huVz] [--gff]
[-o=<outputFilepath>] [-t=<shift>] <input>
```

### Positional Input

This tool takes a single [BED file][bed-format] for input.


### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<outputFilepath>` | specify output filepath (default input filename with `_shiftXXXbp.bed/gff`) |
| `-z, --gzip` | gzip output (default=false) |
| `--gff` | input is GFF format (default=BED format) |



### Shift Options

| Option | Description |
| ------ | ----------- |
| `-t, --shift=<shift>` | shift distance in bp, upstream  < 0 and downstream > 0 (default=0) |
| `-u, --unstranded` | don't force strandedness (default=forced) |

[bedtools-shift]:https://bedtools.readthedocs.io/en/latest/content/tools/shift.html

[bed-format]:/docs/file-formats#bed
[gff-format]:/docs/file-formats#gff
