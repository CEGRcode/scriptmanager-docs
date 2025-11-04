---
id: bam-to-bed
title: BAM to BED
sidebar_label: BAM to BED
---

import InputFileBAM from '/docs/DocComponents/InputFileBAM.mdx'
import FilterInsertSizeOptions from '/docs/DocComponents/FilterInsertSizeOptions.mdx'
import OutputGZip from '/docs/DocComponents/OutputGZip.mdx'

![bam-to-bed](/icons/BAM_Format_Converter/BAMtoBED_square.svg)

Convert BAM file to BED file

<img src={require('/md-img/BAM_Format_Converter/BAMtoBEDWindow.png').default} style={{width:70+'%'}}/>

:::danger
This is a very old tool that is kept for legacy reasons. Very rarely will this transformation be useful for users.
:::

<InputFileBAM />

### Read Options

This tool has multiple read options to output.
* **Read 1**: output Read 1
* **Read 2**: output Read 2
* **Combined**: output combined reads
* **Midpoint**: output the midpoint between reads
* **Fragment**: output the full fragment of two reads

:::note
The **Midpoint** and **Fragment** options require proper mate-pair reading.
:::
<FilterInsertSizeOptions />


### Output format (BED)

The alignment of each BAM entry for the entire read/fragment/midpoint is written as a separate [BED][bed-format] entry. The output `.bed` file is named based on the BAM filename with either a `_READ1.bed`, `_READ2.bed`, `_COMBINED.bed`, `_MIDPOINT.bed`, or `_FRAGMENT.bed` suffix according to the Read Option selected.

<OutputGZip />


## Command Line Interface

Usage:

```bash
java -jar ScriptManager.jar bam-format-converter bam-to-bed [-1 | -2 | -a | -m | -f]
[-hpsV] [-n=<MIN_INSERT>] [-o=<output>] [-x=<MAX_INSERT>] <bamFile>
```

### Positional Input

This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed.

### Output Options

| Option                  | Description                                                            |
| ----------------------- | ---------------------------------------------------------------------- |
| `-o, --output=<output>` | specify output directory (name will be same as original with .bed ext) |
| `-s, --stdout`          | stream output file to STDOUT (cannot be used with `-o` flag)           |
| `-z, --gzip`            | gzip output (default=false) |

### Filter Options

These filter options are shared across all the BAM Format Converter tools.

| Option                          | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| `-p, --mate-pair`               | require proper mate pair (default not required) |
| `-n, --min-insert=<MIN_INSERT>` | filter by min insert size in bp                 |
| `-x, --max-insert=<MAX_INSERT>` | filter by max insert size in bp                 |

### Read Options

| Option            | Description                   |
| ----------------- | ----------------------------- |
| `-1, --read1`     | output read 1 (default)       |
| `-2, --read2`     | output read 2                 |
| `-a, --all-reads` | output combined               |
| `-m, --midpoint`  | output midpoint (require PE)  |
| `-f, --fragment`  | output fragment (requires PE) |
