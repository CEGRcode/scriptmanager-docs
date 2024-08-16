---
id: transpose-matrix
title: Transpose Matrix 
sidebar_label: transpose-matrix
---

Interchange the rows and columns of tab-delimited matrix data. 

<img src={require('/../static/md-img/Read_Analysis/TransposeMatrixWindow.png').default} style={{width:70+'%'}}/>

### File Inputs (TAB/CDT Files)
This tool processes TAB and CDT files where TAB files are tab-delimited text files and CDT files store hierarchical cluster data.

## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar read-analysis tranpose-matrix [-hV] [-l=<startCOL>]
[-o=<output>] [-r=<startROW>] <matrix>
```

## Positional Input

This tool takes a matrix files in TAB/CDT format for input.


### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | specify output filename |
| `-z, --gzip` | output compressed output (default=false) |


### Coord Start Options

| Option | Description |
| ------ | ----------- |
| `-r, --start-row` |  |
| `-l, --start-col` |  |

[file-format]:/docs/References/file-formats