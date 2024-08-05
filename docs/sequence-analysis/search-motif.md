---
id: search-motif
title: Search Motif
sidebar_label: search-motif
---

![search-motif](/../static/icons/Sequence_Analysis/SearchMotif_square.svg)

Search for an IUPAC DNA sequence motif in FASTA files with mismatches allowed

<img src={require('/../static/md-img/Sequence_Analysis/SearchMotifWindow.png').default} style={{width:70+'%'}}/>

### File inputs (FASTA)
Each input FASTA-formatted set of sequences has an average shape score series calculated for it. Because the shape score is a series corresponding to the bp position, the FASTA sequences input should be positionally linked to some feature and of the same length.

### Search Options
1. The IUPAC Motif (International Union of Pure and Applied Chemistry) is a code that represents nucletide sequences with ambiguty code:

* 'A': Adenine
* 'T': Thymine
* 'C': Cytosine
* 'G': Guanine
* 'R': Purine (A or G)
* 'Y': Pyrimidine (C or T)
* 'N': Any Nucleotide (A, T, C, or G)


When you 'Enter an IUPAC motif', you provide a sequence that can include these IUPAC codes to define a DNA pattern you want to search for. 

2. The 'Enter Mismatches Allowed' option species the  number of mismatched nucleotides that can be tolerated when searching for the motif in the FASTA sequences. Mismatches are positions in the sequence where the nucleotides do not exactly match the motif but are still considered a valid match.


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
| `-z, --gzip` | output compressed output (default=false) |


### Search Options

| Option | Description |
| ------ | ----------- |
| `-m, --motif=<motif>` | the IUPAC motif to search for |
| `-n, --mismatches=<ALLOWED_MISMATCH>` | the number of mismatches allowed (default=0) |_


[fasta-format]:/docs/References/file-formats#fasta
