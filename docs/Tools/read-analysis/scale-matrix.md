---
id: scale-matrix
title: Scale Matrix
sidebar_label: Scale Matrix
---

![scale-matrix](/../static/icons/Read_Analysis/ScaleMatrix_square.svg)

Apply a user-specified scaling factor to tab-delimited matrix data

$$
A \rightarrow
sA = 
s *
\begin{pmatrix}
  a_{1,1} & \cdots & a_{1,n}\\
  \vdots & \ddots & \vdots \\
  a_{m,1} & \cdots & a_{m,n} \\
\end{pmatrix}
=
\begin{pmatrix}
  s*a_{1,1} & \cdots & s*a_{1,n}\\
  \vdots & \ddots & \vdots \\
  s*a_{m,1} & \cdots & s*a_{m,n} \\
\end{pmatrix}
$$

This tool typically applies a scaling factor ($s$) calculated from ScriptManager's [Scaling Factor][scaling-factor] tool to a CDT/TAB file ($A$), usually from [Tag Pileup][tag-pileup].

<img src={require('/../static/md-img/Read_Analysis/ScaleMatrixWindow.png').default} style={{width:70+'%'}}/>

### File inputs (CDT/TAB)

This script processes matrix files (CDT/TAB) but there is no extension restriction so be make sure your input files include tab-delimited numerical data.

### Scaling Factor

#### File-specific Scaling

If you have multiple files that need to be scaled by different scaling factors (e.g. TagPileup outputs derived from different BAM files), the File-specific scaling method is more convenient to use.

:::tip
**Copy-pasting inputs**

You can use the copy and paste features to handle bulk processing of the file-specific scaling. You may consider using Microsoft Excel/Google sheets to organize filenames and scaling factors (you can copy scaling factors output by the [Scaling Factor][scaling-factor] GUI) and paste them into ScriptManager's Scale Matrix GUI using Ctrl-V.

**For MacOS users:** Make sure you are using the "Control" key and not the Apple "Command" keys.
:::

:::note
The input files must be loaded with the file selection tool. The input file column does not support pasting or but can be copied into another application.
:::

#### Uniform Scaling

If you have multiple files that all need to be scaled by the same value (e.g. TagPileup outputs derived from the same BAM file), the Uniform scaling methood is more convenient to use. When this option is selected, the "Uniform scaling factor" option can be selected while the "Scaling Factor" column is disregarded in the execution of the script.

### Start Row/Column

These integers indicate the last header columns or row labels. By default they are set to follow CDT format specifications but can be adjusted if you have some other tab-delimited file format with different header starts.

### Output

Each scaled matrix file is written with the `_SCALE.cdt` suffix appended. For example, `SomeMatrixFile.cdt` would be scaled and written to `SomeMatrixFile_SCALE.cdt`.

## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar read-analysis scale-matrix [-hV] [-l=<startCOL>]
[-o=<output>] [-r=<startROW>] [-s=<scale>] <matrix>
```

### Positional Input

This tool takes a single matrix file for input.


### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | specify output filename |
| `-z, --gzip`            | gzip output (default=false) |



### Scale Options

| Option | Description |
| ------ | ----------- |
| `-s, --scaling-factor` | scaling factor (default=1) |




### Coord Start Options

| Option | Description |
| ------ | ----------- |
| `-r, --start-row` | row to start scaling the matrix (zero indexed) |
| `-l, --start-col` | column to start scaling the matrix (zero indexed) |

[file-format]:/docs/Guides/Getting-Started/file-formats
[scaling-factor]:/docs/Tools/read-analysis/scaling-factor
[tag-pileup]:/docs/Tools/read-analysis/tag-pileup
