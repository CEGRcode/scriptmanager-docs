---
id: index
title: Read Analysis
sidebar_label: Read Analysis
---

![Read_Analysis](/md-img/Read_Analysis.png)

These Read Analysis tools are mostly tools that work with the [CDT or other tab-delimited Matrix file formats][cdt-format].

Most commonly used  is the TagPileup tool.

Others manipulate files to calculate normalization factors, normalize the data, or other manipulations and transformations of read info.

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`tag-pileup`][tag-pileup] | [BED][bed-format] + [BAM][bam-format] | [CDT][cdt-format] | Pileup 5' ends of aligned tags given BED and BAM files according to user-defined parameters. |
| [`scaling-factor`][scaling-factor] | [BAM][bam-format] | [TXT][txt-format] | Calculate the factor as either total tag normalization or normalization of ChIP-seq data with control. (PMID:22883957) |
| [`scale-matrix`][scale-matrix] | \[[CDT][cdt-format]\|[TAB][matrix-format]\] | [TAB][matrix-format]\[..\] | Apply a user-specified scaling factor to tab-delimited matrix data. |
| [`aggregate-data`][aggregate-data] | \[[CDT][cdt-format]\|[TAB][matrix-format]\]\[..\] | [TAB][matrix-format]\[..\] | The AggregateData tool is used to process a bunch of matrix files into one matrix file. |
| [`transpose-matrix`][transpose-matrix] | \[[CDT][cdt-format]\|[TAB][matrix-format]\] | \[[CDT][matrix-format]\|[TAB][matrix-format]\] | Interchange the rows and columns of a matrix |

[aggregate-data]:/docs/Tools/read-analysis/aggregate-data
[scale-matrix]:/docs/Tools/read-analysis/scale-matrix
[scaling-factor]:/docs/Tools/read-analysis/scaling-factor
[tag-pileup]:/docs/Tools/read-analysis/tag-pileup
[transpose-matrix]:/docs/Tools/read-analysis/transpose-matrix.md
