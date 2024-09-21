---
id: file-formats
title: File Formats
sidebar_label: File Formats
---

A variety of standard file formats including [BAM](#bam), [GFF](#gff), [BED](#bed), and [CDT](#cdt) are used by the ScriptManager tools along with some custom file formats. The purpose of this guide is to help users understand what types of information these formats store and find tools in ScriptManager based on the format their data exists in.

### Read More
While this page includes a little info on each of the file formats, there are other resources on the internet that provide detailed descriptions and context that will better inform users looking for more explanation on the data formats (see links below).
- [UCSC file formats guide][ucsc-file-formats]
- [ENCODE file formats guide][encode-file-formats]
- [Deeptools file formats guide][encode-file-formats]

## Alignment Formats

### SAM - _Sequence Alignment Map_

See BAM. ScriptManager does not generally support the use of SAM formats due to the computational strain it puts on hardware. It is strongly recommended to compress it into a BAM format before analyzing.

### BAM - _Binary Alignment Map_

The binary form of SAM file format, this is one of the most common formats used by ScriptManager. It's the output of aligners when aligning reads to a reference sequence. See Samtools documentation  or the documentation from the alignment tool for [specification info][bam-specs].

Related Tools:

| Input | Output |
| ------------- | ------------- |
| [`bam-correlation`][bam-correlation] |  |
| [`bam-indexer`][bam-indexer] |  |
| [`bam-to-bedgraph`][bam-to-bedgraph] |  |
| [`bam-to-bed`][bam-to-bed] |  |
| [`bam-to-gff`][bam-to-gff] |  |
| [`bam-to-scidx`][bam-to-scidx] |  |
| [`filter-pip-seq`][filter-pip-seq] | [`filter-pip-seq`][filter-pip-seq] |
| [`md5checksum`][md5checksum] |  |
| [`merge-bam`][merge-bam] | [`merge-bam`][merge-bam] |
| [`pe-stat`][pe-stat] |  |
| [`mark-duplicates`][mark-duplicates] | [`mark-duplicates`][mark-duplicates] |
| [`scaling-factor`][scaling-factor] |  |
| [`se-stat`][se-stat] |  |
| [`signal-dup`][signal-dup] |  |
| [`sort-bam`][sort-bam] | [`sort-bam`][sort-bam] |
| [`tag-pileup`][tag-pileup] |  |


## Coordinate/Annotation Formats

### BED - _Browser Extendable Data_

A text-based file format for storing information about genomic regions. ScriptManager supports [0-based and 1-based][coordinate-systems] BED files.

Related Tools:

| Input | Output |
| ------------- | ------------- |
|  | [`bam-to-bed`][bam-to-bed] |
| [`bed-to-gff`][bed-to-gff] |  |
| [`dna-shape-bed`][dna-shape-bed] |  |
| [`expand-bed`][expand-bed] | [`expand-bed`][expand-bed] |
| [`fasta-extract`][fasta-extract] |  |
| [`filter-bed`][filter-bed] | [`filter-bed`][filter-bed] |
|  | [`gff-to-bed`][gff-to-bed] |
| [`peak-align-ref`][peak-align-ref] |  |
|  | [`rand-coord`][rand-coord] |
|  | [`search-motif`][search-motif] |
| [`sort-bed`][sort-bed] | [`sort-bed`][sort-bed] |
| [`tag-pileup`][tag-pileup] |  |


### GFF/GTF - _General Feature Format_

The GTF/GFF/GFF3 file specifications are documented in several places around the the bioinformatics community. See Ensembl for [specification info][gff-specs].

Importantly note that both the start and end are 1-indexed and inclusive.

Related Tools:

| Input | Output |
| ------------- | ------------- |
|  | [`bam-to-gff`][bam-to-gff] |
|  | [`bed-to-gff`][bed-to-gff] |
| [`expand-gff`][expand-gff] | [`expand-gff`][expand-gff] |
| [`gff-to-bed`][gff-to-bed] |  |
|  | [`peak-align-ref`][peak-align-ref] |
|  | [`rand-coord`][rand-coord] |
| [`signal-dup`][signal-dup] |  |
| [`sort-gff`][sort-gff] | [`sort-gff`][sort-gff] |
|  | [`tile-genome`][tile-genome] |


## Sequence formats

### FASTA

A simple, text-based format for representing DNA or protein sequences. Files in the FASTA format may have different extensions, including `.fasta`, `.fna`, `.ffn`, `.frn`, `.fa`, or even `.txt`.

Related Tools:

| Input | Output |
| ------------- | ------------- |
| [`dna-shape-bed`][dna-shape-bed] |  |
| [`dna-shape-fasta`][dna-shape-fasta] |  |
| [`fasta-extract`][fasta-extract] | [`fasta-extract`][fasta-extract] |
| [`four-color`][four-color] |  |
| [`randomize-fasta`][randomize-fasta] | [`randomize-fasta`][randomize-fasta] |
| [`search-motif`][search-motif] |  |

## Matrix formats

### CDT - _Clustered Data Table_

A standard format for matrices, with two row headers and one column header. Values are separated by `\t` characters, making these files a subset of the [TAB](#tab) format. Read more about the format [here][pumadb-cdt-microarray].

Related Tools:

| Input | Output |
| ------------- | ------------- |
| [`aggregate-data`][aggregate-data] |  |
| [`composite`][composite] |  |
|  | [`dna-shape-bed`][dna-shape-bed] |
|  | [`dna-shape-fasta`][dna-shape-fasta] |
| [`heatmap`][heatmap] |  |
|  | [`peak-align-ref`][peak-align-ref] |
| [`scale-matrix`][scale-matrix] | [`scale-matrix`][scale-matrix] |
| [`transpose-matrix`][transpose-matrix] | [`transpose-matrix`][transpose-matrix] |
| [`sort-bed`][sort-bed] |  |
|  | [`tag-pileup`][tag-pileup] |

### TAB/TSV - _Tab-separated format_

or "Tab-delimited" format

A text-based format for storing matrices with values separated by [`\t` characters][tab]. These files can be easily viewed in Excel or Google Sheets.

Related Tools:

| Input | Output |
| ------------- | ------------- |
| [`aggregate-data`][aggregate-data] | [`aggregate-data`][aggregate-data] |
| [`heatmap`][heatmap] |  |
|  | [`tag-pileup`][tag-pileup] |
| [`scale-matrix`][scale-matrix] | [`scale-matrix`][scale-matrix] |


## Image formats

### PNG - _Portable Network Graphic_

A standard, [lossless][lossless-images] image format used for storing figures.

Related Tools:

| Input | Output |
| ------------- | ------------- |
|  | [`bam-correlation`][bam-correlation] |
|  | [`composite`][composite] |
|  | [`four-color`][four-color] |
|  | [`heatmap`][heatmap] |
| [`merge-heatmap`][merge-heatmap] | [`merge-heatmap`][merge-heatmap] |



## Genome Browser Track formats

### bedGraph

A format used for plotting one value of quantitative data across a genome or region. This format is most closely related to the [wiggle format][wiggle] and always [0-based][coordinate-systems].

Related Tools:

| Input | Output |
| ------------- | ------------- |
| [`bam-to-bedgraph`][bam-to-bedgraph] |  |


### scIDX - _Strand-specific coordinate count_
A lesser-used, [1-based][coordinate-systems]  format for storing the [number of tags][scidx-tags] at a given coordinate. Files using this format may also use the `.tab` extension since it is a subset of the [TAB](#tab) format.

Related Tools:

| Input | Output |
| ------------- | ------------- |
|  | [`bam-to-scidx`][bam-to-scidx]<br></br>_file has the [`.tab`](#tab) extension_|



## Generic formats

### TXT - _Text file_
A standard format for storing text. Some text files may have the `.out` extension.

Related Tools:

| Input | Output |
| ------------- | ------------- |
|  | [`bam-correlation`][bam-correlation] |
|  | [`md5checksum`][md5checksum] |
|  | [`pe-stat`][pe-stat] |
|  | [`scaling-factor`][scaling-factor] |
|  | [`se-stat`][se-stat] |
|  | [`signal-dup`][signal-dup] |


:::info
See our [Tool Index][tool-index] for the full catalog of scripts.
:::


[deeptools-file-formats]:https://deeptools.readthedocs.io/en/develop/content/help_glossary.html#file-formats
[encode-file-formats]:https://www.encodeproject.org/help/file-formats/
[ucsc-file-formats]:https://genome.ucsc.edu/FAQ/FAQformat.html
[pumadb-cdt-microarray]:https://puma.princeton.edu/help/formats.shtml#cdt
[bam-specs]:https://samtools.github.io/hts-specs/
[gff-specs]:https://useast.ensembl.org/info/website/upload/gff3.html

[coordinate-systems]:https://tidyomics.com/blog/2018/12/09/2018-12-09-the-devil-0-and-1-coordinate-system-in-genomics/
[wiggle]:https://genome.ucsc.edu/goldenPath/help/wiggle.html
[tab]:http://wiki.christophchamp.com/index.php?title=TAB_file_format
[lossless-images]:https://www.adobe.com/uk/creativecloud/photography/discover/lossy-vs-lossless.html
[scidx-tags]:https://toolshed.g2.bx.psu.edu/repository/display_tool?repository_id=642b78707940da3a&tool_config=%2Fsrv%2Ftoolshed%2Fmain%2Fvar%2Fdata%2Frepos%2F002%2Frepo_2064%2Fbam_to_scidx.xml&changeset_revision=408520e1ae1a&render_repository_actions_for=tool_shed

[tool-index]:/docs/Guides/tool-index
[bam-format]:/docs/Guides/Getting-Started/file-formats#bam
[bed-format]:/docs/Guides/Getting-Started/file-formats#bed
[bedgraph-format]:/docs/Guides/Getting-Started/file-formats#bedgraph
[gff-format]:/docs/Guides/Getting-Started/file-formats#gff
[fasta-format]:/docs/Guides/Getting-Started/file-formats#fasta
[cdt-format]:/docs/Guides/Getting-Started/file-formats#cdt
[png-format]:/docs/Guides/Getting-Started/file-formats#png
[scidx-format]:/docs/Guides/Getting-Started/file-formats#scidx

[aggregate-data]:/docs/Tools/read-analysis/aggregate-data
[bam-correlation]:/docs/Tools/bam-statistics/bam-correlation
[bam-indexer]:/docs/Tools/bam-manipulation/bam-indexer
[bam-to-bedgraph]:/docs/Tools/bam-format-converter/bam-to-bedgraph
[bam-to-bed]:/docs/Tools/bam-format-converter/bam-to-bed
[bam-to-gff]:/docs/Tools/bam-format-converter/bam-to-gff
[bam-to-scidx]:/docs/Tools/bam-format-converter/bam-to-scidx
[bed-to-gff]:/docs/Tools/coordinate-manipulation/bed-to-gff
[composite]:/docs/Tools/figure-generation/composite-plot
[dna-shape-bed]:/docs/Tools/sequence-analysis/dna-shape-bed
[dna-shape-fasta]:/docs/Tools/sequence-analysis/dna-shape-fasta
[expand-bed]:/docs/Tools/coordinate-manipulation/expand-bed
[expand-gff]:/docs/Tools/coordinate-manipulation/expand-gff
[fasta-extract]:/docs/Tools/sequence-analysis/fasta-extract
[filter-bed]:/docs/Tools/peak-analysis/filter-bed
[filter-pip-seq]:/docs/Tools/bam-manipulation/filter-pip-seq
[four-color]:/docs/Tools/figure-generation/four-color
[gff-to-bed]:/docs/Tools/coordinate-manipulation/gff-to-bed
[heatmap]:/docs/Tools/figure-generation/heatmap
[md5checksum]:/docs/Tools/file-utilities/md5checksum
[merge-bam]:/docs/Tools/bam-manipulation/merge-bam
[merge-heatmap]:/docs/Tools/figure-generation/merge-heatmap
[pe-stat]:/docs/Tools/bam-statistics/pe-stat
[peak-align-ref]:/docs/Tools/peak-analysis/peak-align-ref
[rand-coord]:/docs/Tools/peak-analysis/rand-coord
[randomize-fasta]:/docs/Tools/sequence-analysis/randomize-fasta
[mark-duplicates]:/docs/Tools/bam-manipulation/mark-duplicates
[scale-matrix]:/docs/Tools/read-analysis/scale-matrix
[transpose-matrix]:/docs/Tools/read-analysis/transpose-matrix
[scaling-factor]:/docs/Tools/read-analysis/scaling-factor
[se-stat]:/docs/Tools/bam-statistics/se-stat
[search-motif]:/docs/Tools/sequence-analysis/search-motif
[signal-dup]:/docs/Tools/peak-analysis/signal-dup
[sort-bam]:/docs/Tools/bam-manipulation/sort-bam
[sort-bed]:/docs/Tools/coordinate-manipulation/sort-bed
[sort-gff]:/docs/Tools/coordinate-manipulation/sort-gff
[tag-pileup]:/docs/Tools/read-analysis/tag-pileup
[tile-genome]:/docs/Tools/peak-analysis/tile-genome
