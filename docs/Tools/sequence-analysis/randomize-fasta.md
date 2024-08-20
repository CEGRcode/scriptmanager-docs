---
id: randomize-fasta
title: Randomize FASTA
sidebar_label: randomize-fasta
---

![randomize-fasta](/../static/icons/Sequence_Analysis/RandomizeFASTA_square.svg)

Randomizes FASTA sequence for each input entry


<img src={require('/../static/md-img/Sequence_Analysis/RandomizeFASTAWindow.png').default} style={{width:70+'%'}}/>

### File inputs (FASTA)
Each input FASTA-formatted set of sequences has an average shape score series calculated for it. Because the shape score is a series corresponding to the bp position, the FASTA sequences input should be positionally linked to some feature and of the same length.

# Command Line Interface

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
| `-z, --gzip` | output compressed output (default=false) |




[fasta-format]:/docs/Guides/Getting-Started/file-formats#fasta
