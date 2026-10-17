---
id: aggregate-data
title: Aggregate Data
sidebar_label: Aggregate Data
---

import RowColumnSelect from '/docs/DocComponents/RowColumnSelect.mdx'
import OutputGZip from '/docs/DocComponents/OutputGZip.mdx'

![aggregate-data](/../static/icons/Read_Analysis/AggregateData_square.svg)

Compile data from tab-delimited file into matrix according to user-specified
metric.

$$
A \rightarrow
fA = 
f *
\begin{pmatrix}
  a_{1,1} & \cdots & a_{1,n}\\
  \vdots & \ddots & \vdots \\
  a_{m,1} & \cdots & a_{m,n} \\
\end{pmatrix}
=
\begin{pmatrix}
  f([a_{1,1} \cdots a_{1,n}]) \\
  \vdots \\
  f([a_{m,1} \cdots a_{m,n}]) \\
\end{pmatrix}
$$

When generating a bunch of TagPileups around the same set of references ([BED][bed-format]), a user may want to compare the per-site averages of the tags for in each sample ([Matrix format (CDT/TSV)][matrix-format]). This tool is a great way of aggregating all those samples into a single per-site summary statistic that can be sorted, grouped, or even visualized as a [heatmap][heatmap]. Since it supports generally structured tab-delimited files, this tool may be co-opted to aggregate other kinds of inputs.

<img src={require('/../static/md-img/Read_Analysis/AggregateDataWindow.png').default} style={{width:70+'%'}}/>

This script takes a set of tab-delimited matrix files (e.g. list of outputs from TagPileup) and aggregates them per-row by some metric.

### File input (CDT/TAB)

This script processes [matrix-type files][matrix-format] but defaults to the [`.cdt`][cdt-format] header row and column selection criteria. The input extension is not restricted for this script. The script also supports bulk selection and processing of files.


### Aggregation Method Options

| Metric  | Option | Description |
| :-----: | :----: | :---------- |
| Sum     | `--sum` | Add up all the row values |
| Average | `--avg` | Compute the arithmetic mean of the row values |
| Median  | `--med` | Report the median of the row values |
| Mode    | `--mod` | Report the mode (most frequent occurring) from the row values |
| Min     | `--min` | Report the smallest value in the set of row values |
| Max     | `--max` | Report the largest value in the set of row values |
| Positional Variance | `--var` |  |

<RowColumnSelect />

### Output

#### Process each file individually

If "Merge to one file" is not not selected/unchecked in the GUI, then each input matrix file is processed individually and written to the same filename with the `_SCORES.out` suffix appended. For example, `SomeMatrixFile.cdt` would be scaled and written to `SomeMatrixFile_SCORES.out`.

#### Merge to one file

By default, "Merge to one file" is checked in the GUI while the CLI always merges all input files given to the script (you may process single files by simply executing the script multiple times for each file). The default output filename is `ALL_SCORES.out` which cannot be changed yet in the GUI.

<OutputGZip />

## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar read-analysis aggregate-data [--sum | --avg | --med |
--mod | --min | --max | --var] [-fhmV] [-l=<startCOL>] [-o=<output>]
[-r=<startROW>] [<inputFiles>...]
```

The AggregateData tool is used to process a bunch of matrix files into one matrix file.


### Input Options

Since this tool process a bunch of files together, there are two ways of feeding input files:

(1) You can list them out in the command line tool,

`java -jar ScriptManager.jar read-analysis aggregate-data matFile1 matFile2 ... matFileX <OPTIONS>`

(2) or you can write all the paths for all your files in a single file and pass that as the input using the `-f` flag

`java -jar ScriptManager.jar read-analysis aggregate-data inputFile -f <OPTIONS>`

where `inputFile` is listed out line by line:

```
/path/to/matFile1
/path/to/matFile2
...
/path/to/matFileX
```

_Note that absolute file paths are easier to work with. For relative paths, you'll have to check that they are built with respect to the ScriptManager directory._


### Output Options

| Option | Description |
| ------ | ----------- |
| `-m, --merge` | merge to one output file |
| `-o, --output=<output>` | Specify output file, default is "aggregate_matrix.txt" or the input filename if -f flag used |
| `-z, --gzip`            | gzip output (default=false) |

The file output can be specified by the user using this flag. Otherwise the output will be `aggregate_matrix.txt` in the same directory as ScriptManager. Or based on the input filename if the `-f` flag is used.


### Aggregation Method Options

| Option | Description |
| ------ | ----------- |
| `--sum` | use summation method (default) |
| `--avg` | use average method |
| `--med` | use median method |
| `--mod` | use mode method |
| `--min` | use minimum method |
| `--max` | use maximum method |
| `--var` | use positional variance method |



### Coord Start Options

| Option | Description |
| ------ | ----------- |
| `-r, --start-row` |  |
| `-l, --start-col` |  |

[heatmap]:/docs/Tools/figure-generation/heatmap
