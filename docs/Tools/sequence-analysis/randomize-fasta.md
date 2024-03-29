---
id: randomize-fasta
title: Randomize FASTA
sidebar_label: randomize-fasta
---

![randomize-fasta](/../static/icons/Sequence_Analysis/RandomizeFASTA_square.svg)

Randomizes FASTA sequence for each input entry

<img src={require('/../static/md-img/Sequence_Analysis/RandomizeFASTAWindow.png').default} style={{width:70+'%'}}/>

# Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar sequence-analysis randomize-fasta [-hV] [-o=<output>]
<fastaFile>
```

### Positional Input
| Option | Description |
| ------ | ----------- |
|      `<fastaFile>`        | the FASTA file |


### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | specify output directory (name will be same as original with .gff ext) |



[fasta-format]:/docs/Guides/Getting-Started/file-formats#fasta
