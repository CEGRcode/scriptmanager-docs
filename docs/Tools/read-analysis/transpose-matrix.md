---
id: transpose-matrix
title: Transpose Matrix
sidebar_label: transpose-matrix
---

import InputFileMatrices from '/docs/DocComponents/InputFileMatrices.mdx'
import RowColumnSelect from '/docs/DocComponents/RowColumnSelect.mdx'
import OutputGZip from '/docs/DocComponents/OutputGZip.mdx'

![transpose-matrix](/../static/icons/Read_Analysis/TransposeMatrix_square.svg)

Transpose the rows and columns of tab-delimited matrix data.

$$
\begin{pmatrix}
  a_{1,1} & \cdots & a_{1,n}\\
  \vdots & \ddots & \vdots \\
  \vdots & \ddots & \vdots \\
  a_{m,1} & \cdots & a_{m,n} \\
\end{pmatrix}
\rightarrow
\begin{pmatrix}
  a_{1,1} & \cdots & \cdots & a_{1,m}\\
  \vdots & \ddots & \ddots & \vdots \\
  a_{n,1} & \cdots & \cdots & a_{n,m} \\
\end{pmatrix}
$$

<img src={require('/../static/md-img/Read_Analysis/TransposeMatrixWindow.png').default} style={{width:70+'%'}}/>

<InputFileMatrices />

<RowColumnSelect />


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
