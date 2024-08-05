---
id: fasta-extract
title: Extract FASTA
sidebar_label: fasta-extract
---

![fasta-extract](/../static/icons/Sequence_Analysis/FASTAExtract_square.svg)

Generate FASTA file from indexed Genome FASTA file and BED file. Script will generate FAI index if not present in Genome FASTA folder.

<img src={require('/../static/md-img/Sequence_Analysis/FASTAExtractWindow.png').default} style={{width:70+'%'}}/>

### File inputs (Genomic FASTA & BED)
Each input FASTA-formatted set of sequences has an average shape score series calculated for it. Because the shape score is a series corresponding to the bp position, the FASTA sequences input should be positionally linked to some feature and of the same length.

This script also processes BED-type files so make sure your input is properly formatted and uses the appropriate `.bed` or `.bed.gz` extension.

### File Options 
The 'Force Strandedness' options ensures that the analysis will respect the strand information specified in the BED file when extracting sequences.

Usage:
```bash
java -jar ScriptManager.jar sequence-analysis fasta-extract [-cfhV] [-o=<output>]
<genomeFile> <bedFile>
```

### Positional Input

The first positional input

| Option | Description |
| ------ | ----------- |   
| `<fastaFile>` | reference genome FASTA file |
| `<bedFile>` | the BED file of sequences to extract |


### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | Specify output file |
| `-z, --gzip` | output compressed output (default=false) |


### Extract Options

| Option | Description |
| ------ | ----------- |
| `-c, --coord-header` | use genome coordinate for output FASTA header (default is to use bed file headers) |
| `-f, --force` | force-strandedness (default) |

[fasta-format]:/docs/References/file-formats#fasta
