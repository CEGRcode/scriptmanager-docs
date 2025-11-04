---
id: search-motif
title: Search Motif
sidebar_label: Search Motif
---

import InputFileFASTA from '/docs/DocComponents/InputFileFASTA.mdx'
import OutputGZip from '/docs/DocComponents/OutputGZip.mdx'

![search-motif](/../static/icons/Sequence_Analysis/SearchMotif_square.svg)

Search for an IUPAC DNA sequence motif in FASTA files with mismatches allowed

<img src={require('./img/SearchMotifSchematic.png').default} style={{width:60+'%'}}/>

Each input FASTA entry is searched for a user-provided motif with a user-provided mismatch tolerance. The FASTA is typically a genomic FASTA file but can be used with any FASTA formatted file.

<img src={require('/../static/md-img/Sequence_Analysis/SearchMotifWindow.png').default} style={{width:70+'%'}}/>

<InputFileFASTA />


### Enter an IUPAC Motif
[IUPAC (International Union of Pure and Applied Chemistry)][ucsc-iupac] has a standard representation for DNA sequences that supports single and sets of bases. Below are some examples but you will need to look up the full IUPAC code for the comprehensive list of options that this tool supports:

* 'A': Adenine
* 'T': Thymine
* 'C': Cytosine
* 'G': Guanine
* 'R': Purine (A or G)
* 'Y': Pyrimidine (C or T)
* 'N': Any Nucleotide (A, T, C, or G)

These are used to define a DNA pattern to search for within the input FASTA sequences.

### Enter Mismatches Allowed

The user can toggle the stringency of the motif search by adjusting the number of mismatched nucleotides that can be tolerated when searching for the motif in the FASTA sequences. Mismatches are positions in the sequence where the nucleotide does not match any of the nucleotides represented in the IUPAC motif for that position.

### Output options (BED)

For each input FASTA file, a new BED file is created with the coordinates (chr is sequnece id following `>`) of every instance found of the provided motif. The output file is named `{motif}_{allowed-mismatches}Mismatch_{fasta-basename}.bed`.

<!-- #### Output coordinate indexing -->
<!-- describe details about how coordinate is set (left-aligned, stranded, etc) -->

<OutputGZip/>


## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar sequence-analysis search-motif [-hV] -m=<motif>
[-n=<ALLOWED_MISMATCH>] [-o=<output>] <fastaFile>
```

### Positional Input

| Option | Description |
| ------ | ----------- |   
| `<fastaFile>` | reference genome FASTA file |

### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | specify output file |
| `-z, --gzip`            | gzip output (default=false) |


### Search Options

| Option | Description |
| ------ | ----------- |
| `-m, --motif=<motif>` | the IUPAC motif to search for |
| `-n, --mismatches=<ALLOWED_MISMATCH>` | the number of mismatches allowed (default=0) |_


[ucsc-iupac]:https://genome.ucsc.edu/goldenPath/help/iupac.html#:~:text=The%20International%20Union%20of%20Pure,for%20either%20G%20or%20A
