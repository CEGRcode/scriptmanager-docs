---
id: index
title: Sequence Analysis
sidebar_label: Sequence Analysis
---

Tools for analyzing sequence files (e.g. shape analysis, motif searches, randomization, and extractions).

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`fasta-extract`][fasta-extract] | [BED][bed-format] + [FASTA(genome)][fasta-format] | [FASTA][fasta-format] | Generate FASTA file from indexed Genome FASTA file and BED file. Script will generate FAI index if not present in Genome FASTA folder. |
| [`randomize-fasta`][randomize-fasta] | [FASTA][fasta-format] | [FASTA][fasta-format] | Randomizes FASTA sequence for each input entry |
| [`search-motif`][search-motif] | [FASTA][fasta-format] | [BED][bed-format] | Search for an IUPAC DNA sequence motif in FASTA files with mismatches allowed. |
| [`dna-shape-bed`][dna-shape-bed] | [BED][bed-format] + [FASTA(genome)][fasta-format] | [CDT][cdt-format] | Calculate intrinsic DNA shape parameters given BED file and Genome FASTA file. Based on Roh's lab [DNAshape server data][Roh_paper]. |
| [`dna-shape-fasta`][dna-shape-fasta] | [FASTA][fasta-format] | [CDT][cdt-format] | Calculate intrinsic DNA shape parameters given input FASTA files. Based on Roh's lab [DNAshape server data][Roh_paper]. |


[dna-shape-bed]:/docs/Tools/sequence-analysis/dna-shape-bed
[dna-shape-fasta]:/docs/Tools/sequence-analysis/dna-shape-fasta
[fasta-extract]:/docs/Tools/sequence-analysis/fasta-extract
[randomize-fasta]:/docs/Tools/sequence-analysis/randomize-fasta
[search-motif]:/docs/Tools/sequence-analysis/search-motif

[bed-format]:/docs/References/file-formats#bed
[cdt-format]:/docs/References/file-formats#cdt
[fasta-format]:/docs/References/file-formats#fasta

[Roh_paper]:https://pubmed.ncbi.nlm.nih.gov/23703209
