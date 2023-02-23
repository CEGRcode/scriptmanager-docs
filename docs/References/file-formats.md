---
id: file-formats
title: File Formats
sidebar_label: File Formats
---

A variety of standard file formats including BAM, GFF, BED, and [CDT][cdt-format] are used by the ScriptManager tools along with some custom file formats. The purpose of this guide is to help users find tools in ScriptManager based on the format their data exists in.

### Read More
While this page includes a little info on each of the file formats, there are other resources on the internet that provide detailed descriptions and context that will better inform users looking for more explanation on the data formats (see links below).
- [UCSC file formats guide][ucsc-file-formats]
- [ENCODE file formats guide][encode-file-formats]
- [Deeptools file formats guide][encode-file-formats]

## BAM

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
| [`remove-duplicates`][remove-duplicates] | [`remove-duplicates`][remove-duplicates] |
| [`scaling-factor`][scaling-factor] |  |
| [`se-stat`][se-stat] |  |
| [`signal-dup`][signal-dup] |  |
| [`sort-bam`][sort-bam] | [`sort-bam`][sort-bam] |
| [`tag-pileup`][tag-pileup] |  |


## BED

0- or 1-indexed...

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


## bedGraph

Related Tools:

| Input | Output |
| ------------- | ------------- |
| [`bam-to-bedgraph`][bam-to-bedgraph] |  |


## GFF

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


## FASTA

Related Tools:

| Input | Output |
| ------------- | ------------- |
|  |  |
| [`dna-shape-bed`][dna-shape-bed] |  |
| [`dna-shape-fasta`][dna-shape-fasta] |  |
| [`fasta-extract`][fasta-extract] | [`fasta-extract`][fasta-extract] |
| [`four-color`][four-color] |  |
| [`randomize-fasta`][randomize-fasta] | [`randomize-fasta`][randomize-fasta] |
| [`search-motif`][search-motif] |  |


## CDT

Although this  is a standard matrix file format, it is perhaps less familiar among bioinformaticians.

Related Tools:

| Input | Output |
| ------------- | ------------- |
| [`aggregate-data`][aggregate-data] | [`aggregate-data`][aggregate-data] |
| [`composite`][composite] |  |
|  | [`dna-shape-bed`][dna-shape-bed] |
|  | [`dna-shape-fasta`][dna-shape-fasta] |
| [`heatmap`][heatmap] |  |
|  | [`peak-align-ref`][peak-align-ref] |
| [`scale-matrix`][scale-matrix] | [`scale-matrix`][scale-matrix] |
| [`sort-bed`][sort-bed] |  |
|  | [`tag-pileup`][tag-pileup] |


## Matrix format (custom for these tools)

The output from [TagPileup][tag-pileup] is the format for the matrix format

Related Tools:

| Input | Output |
| ------------- | ------------- |
|  |  |
|  |  |


## PNG

A standard image format LINKHERE...

Related Tools:

| Input | Output |
| ------------- | ------------- |
|  | [`bam-correlation`][bam-correlation] |
|  | [`composite`][composite] |
|  | [`four-color`][four-color] |
|  | [`heatmap`][heatmap] |
| [`merge-heatmap`][merge-heatmap] | [`merge-heatmap`][merge-heatmap] |


## scIDX

Related Tools:

| Input | Output |
| ------------- | ------------- |
| [`bam-to-scidx`][bam-to-scidx] |  |



## TXT

Related Tools:

| Input | Output |
| ------------- | ------------- |
|  | [`bam-correlation`][bam-correlation] |
|  | [`md5checksum`][md5checksum] |
|  | [`pe-stat`][pe-stat] |
|  | [`scaling-factor`][scaling-factor] |
|  | [`se-stat`][se-stat] |
|  | [`signal-dup`][signal-dup] |


[`aggregate-data`][aggregate-data]
[`bam-correlation`][bam-correlation]
[`bam-indexer`][bam-indexer]
[`bam-to-bedgraph`][bam-to-bedgraph]
[`bam-to-bed`][bam-to-bed]
[`bam-to-gff`][bam-to-gff]
[`bam-to-scidx`][bam-to-scidx]
[`bed-to-gff`][bed-to-gff]
[`composite`][composite]
[`dna-shape-bed`][dna-shape-bed]
[`dna-shape-fasta`][dna-shape-fasta]
[`expand-bed`][expand-bed]
[`expand-gff`][expand-gff]
[`fasta-extract`][fasta-extract]
[`filter-bed`][filter-bed]
[`filter-pip-seq`][filter-pip-seq]
[`four-color`][four-color]
[`gff-to-bed`][gff-to-bed]
[`heatmap`][heatmap]
[`md5checksum`][md5checksum]
[`merge-bam`][merge-bam]
[`merge-heatmap`][merge-heatmap]
[`pe-stat`][pe-stat]
[`peak-align-ref`][peak-align-ref]
[`rand-coord`][rand-coord]
[`randomize-fasta`][randomize-fasta]
[`remove-duplicates`][remove-duplicates]
[`scale-matrix`][scale-matrix]
[`scaling-factor`][scaling-factor]
[`se-stat`][se-stat]
[`search-motif`][search-motif]
[`signal-dup`][signal-dup]
[`sort-bam`][sort-bam]
[`sort-bed`][sort-bed]
[`sort-gff`][sort-gff]
[`tag-pileup`][tag-pileup]
[`tile-genome`][tile-genome]

[deeptools-file-formats]:https://deeptools.readthedocs.io/en/develop/content/help_glossary.html#file-formats
[encode-file-formats]:https://www.encodeproject.org/help/file-formats/
[ucsc-file-formats]:https://genome.ucsc.edu/FAQ/FAQformat.html
[bam-specs]:https://samtools.github.io/hts-specs/
[gff-specs]:https://useast.ensembl.org/info/website/upload/gff3.html

[bam-format]:/docs/References/file-formats#bam
[bed-format]:/docs/References/file-formats#bed
[bedgraph-format]:/docs/References/file-formats#bedgraph
[gff-format]:/docs/References/file-formats#gff
[fasta-format]:/docs/References/file-formats#fasta
[cdt-format]:/docs/References/file-formats#cdt
[png-format]:/docs/References/file-formats#png
[scidx-format]:/docs/References/file-formats#scidx

[aggregate-data]:/docs/read-analysis/aggregate-data
[bam-correlation]:/docs/bam-statistics/bam-correlation
[bam-indexer]:/docs/bam-manipulation/bam-indexer
[bam-to-bedgraph]:/docs/bam-format-converter/bam-to-bedgraph
[bam-to-bed]:/docs/bam-format-converter/bam-to-bed
[bam-to-gff]:/docs/bam-format-converter/bam-to-gff
[bam-to-scidx]:/docs/bam-format-converter/bam-to-scidx
[bed-to-gff]:/docs/coordinate-manipulation/bed-to-gff
[composite]:/docs/figure-generation/composite-plot
[dna-shape-bed]:/docs/sequence-analysis/dna-shape-bed
[dna-shape-fasta]:/docs/sequence-analysis/dna-shape-fasta
[expand-bed]:/docs/coordinate-manipulation/expand-bed
[expand-gff]:/docs/coordinate-manipulation/expand-gff
[fasta-extract]:/docs/sequence-analysis/fasta-extract
[filter-bed]:/docs/peak-analysis/filter-bed
[filter-pip-seq]:/docs/bam-manipulation/filter-pip-seq
[four-color]:/docs/figure-generation/four-color
[gff-to-bed]:/docs/coordinate-manipulation/gff-to-bed
[heatmap]:/docs/figure-generation/heatmap
[md5checksum]:/docs/file-utilities/md5checksum
[merge-bam]:/docs/bam-manipulation/merge-bam
[merge-heatmap]:/docs/figure-generation/merge-heatmap
[pe-stat]:/docs/bam-statistics/pe-stat
[peak-align-ref]:/docs/peak-analysis/peak-align-ref
[rand-coord]:/docs/peak-analysis/rand-coord
[randomize-fasta]:/docs/sequence-analysis/randomize-fasta
[remove-duplicates]:/docs/bam-manipulation/remove-duplicates
[scale-matrix]:/docs/read-analysis/scale-matrix
[scaling-factor]:/docs/read-analysis/scaling-factor
[se-stat]:/docs/bam-statistics/se-stat
[search-motif]:/docs/sequence-analysis/search-motif
[signal-dup]:/docs/peak-analysis/signal-dup
[sort-bam]:/docs/bam-manipulation/sort-bam
[sort-bed]:/docs/coordinate-manipulation/sort-bed
[sort-gff]:/docs/coordinate-manipulation/sort-gff
[tag-pileup]:/docs/read-analysis/tag-pileup
[tile-genome]:/docs/peak-analysis/tile-genome
