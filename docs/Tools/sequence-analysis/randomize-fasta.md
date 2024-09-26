---
id: randomize-fasta
title: Randomize FASTA
sidebar_label: randomize-fasta
---

![randomize-fasta](/../static/icons/Sequence_Analysis/RandomizeFASTA_square.svg)

Randomizes FASTA sequence for each input entry

<!-- Schematic goes here -->

<img src={require('/../static/md-img/Sequence_Analysis/RandomizeFASTAWindow.png').default} style={{width:70+'%'}}/>

## File inputs (FASTA)
Each input FASTA-formatted file with a set of sequences will produce a new FASTA file of the randomized/shuffled sequences.

When using the GUI, make sure your input is properly formatted and uses the appropriate FASTA (`.fa` / `.fa.gz` / `.fasta` / `...`) extensions.

<!-- ## Seed Options -->

<!-- ## Output Options -->


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




[fasta-format]:/docs/Guides/Getting-Started/file-formats#fasta
