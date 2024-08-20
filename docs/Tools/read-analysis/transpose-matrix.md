---
id: transpose-matrix
title: Transpose Matrix
sidebar_label: transpose-matrix
---

![transpose-matrix](/../static/icons/Read_Analysis/TransposeMatrix_square.svg)

Transpose the rows and columns of tab-delimited matrix data.

<img src={require('/../static/md-img/Read_Analysis/TransposeMatrixWindow.png').default} style={{width:70+'%'}}/>

### File Inputs (TAB/CDT Files)
This tool processes TAB and CDT tab-delimited formatted files and CDT files store data. The script also supports bulk selection and processing of files.

## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar read-analysis transpose-matrix [-hV] [-z] [-l=<startCOL>]
[-o=<output>] [-r=<startROW>] <matrix>
```

## Positional Input

This tool takes a matrix file in TAB/CDT format for input.


### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | specify output filename |
| `-z, --gzip`            | gzip output (default=false) |


### Coord Start Options

| Option | Description |
| ------ | ----------- |
| `-r, --start-row` | row to start transposing the matrix (zero indexed) |
| `-l, --start-col` | column to start transposing the matrix (zero indexed) |

[file-format]:/docs/Guides/Getting-Started/file-formats
