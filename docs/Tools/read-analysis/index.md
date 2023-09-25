---
id: index
title: Read Analysis
sidebar_label: Read Analysis
---

These Read Analysis tools are mostly tools that work with the [CDT or other tab-delimited Matrix file formats][file-format].

Most commonly used  is the TagPileup tool.

Others manipulate files to calculate normalization factors, normalize the data, or other manipulations and transformations of read info.

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`tag-pileup`][tag-pileup] | [BED][bed-format] + [BAM][bam-format] | [CDT][cdt-format] | Pileup 5' ends of aligned tags given BED and BAM files according to user-defined parameters. |
| [`scaling-factor`][scaling-factor] | [BAM][bam-format] | [TXT][txt-format] | Calculate the factor as either total tag normalization or normalization of ChIP-seq data with control. (PMID:22883957) |
| [`scale-matrix`][scale-matrix] | \[[CDT][cdt-format]\|[TAB][mat-format]\] | [TAB][mat-format]\[..\] | Apply a user-specified scaling factor to tab-delimited matrix data. |
| [`aggregate-data`][aggregate-data] | \[[CDT][cdt-format]\|[TAB][mat-format]\]\[..\] | [TAB][mat-format]\[..\] | The AggregateData tool is used to process a bunch of matrix files into one matrix file. |
| [`transpose-matrix`][scale-matrix] | \[[CDT][cdt-format]\|[TAB][mat-format]\] | \[[CDT][cdt-format]\|[TAB][mat-format]\] | Interchange the rows and columns of a matrix |


[aggregate-data]:/docs/Tools/read-analysis/aggregate-data
[scale-matrix]:/docs/Tools/read-analysis/scale-matrix
[scaling-factor]:/docs/Tools/read-analysis/scaling-factor
[similarity-matrix]:/docs/Tools/read-analysis/similarity-matrix
[tag-pileup]:/docs/Tools/read-analysis/tag-pileup
[transpose-matrix]:read-analysis/transpose-matrix.md

[bam-format]:/docs/Guides/References/file-formats#bam
[bed-format]:/docs/Guides/References/file-formats#bed
[cdt-format]:/docs/Guides/References/file-formats#cdt
[mat-format]:/docs/Guides/References/file-formats#matrix-format-custom-for-these-tools
[txt-format]:/docs/Guides/References/file-formats#txt
