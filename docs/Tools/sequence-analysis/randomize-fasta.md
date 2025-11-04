---
id: randomize-fasta
title: Randomize FASTA
sidebar_label: Randomize FASTA
---

import InputFileFASTA from '/docs/DocComponents/InputFileFASTA.mdx'
import OutputGZip from '/docs/DocComponents/OutputGZip.mdx'

![randomize-fasta](/../static/icons/Sequence_Analysis/RandomizeFASTA_square.svg)

Randomizes FASTA sequence for each input entry

<!-- Schematic goes here -->

<img src={require('/../static/md-img/Sequence_Analysis/RandomizeFASTAWindow.png').default} style={{width:70+'%'}}/>

This is a useful way to generate a type of negative control for some sequence analysis that preserves the original dataset's nucleotide frequencies.

<InputFileFASTA />

### Seed Option

Users have the option to set a [random seed][about-random-seeds] for reproducible runs.

### Output Options (FASTA)

For each input FASTA file, a new shuffled FASTA file is created and named based on the filename of the input with the the following suffix: `*_RAND.fa`.

<OutputGZip />


## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar sequence-analysis randomize-fasta [-hV] [-o=<output>]
<fastaFile>
```

### Positional Input

| Option | Description |
| ------ | ----------- |   
| `<fastaFile>` | reference genome FASTA file |


### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | specify output directory (name will be same as original with .gff ext) |
| `-z, --gzip`            | gzip output (default=false) |


[about-random-seeds]:https://www.statisticshowto.com/random-seed-definition
