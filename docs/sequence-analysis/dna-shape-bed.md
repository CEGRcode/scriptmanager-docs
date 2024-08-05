---
id: dna-shape-bed
title: DNA Shape from BED File
sidebar_label: dna-shape-bed
---

![dna-shape-bed](/../static/icons/Sequence_Analysis/DNAShapefromBED_square.svg)

Calculate intrinsic DNA shape parameters given BED file and Genome FASTA file.

Based on the findings from the Rohs lab [(Zhou et al, 2013)][rohs-paper], a sliding window approach using a 5bp wide window is a strong predictor of local DNA shape. Using this approach, we can predict 4 kinds of DNA shape:

1. **minor groove width**
2. **propeller twist**
3. **helix twist**
4. **roll**

<!--![DNA Shape Cheatsheet](IMGADDRESS) -->
<img src={require('/../static/md-img/Sequence_Analysis/DNAShapefromBEDWindow.png').default} style={{width:70+'%'}}/>

This script takes in a series of nucleotide sequences from a FASTA file and determines the average shape score(s) across the bp positions.

:::note
[Read more on how DNA shape was used in the analysis of comparing TF-binding _in-vivo_ vs _in-vitro_ (Rossi et al, 2018).][pb-exo-paper]
:::

### File inputs (FASTA & BED)
Each input FASTA-formatted set of sequences has an average shape score series calculated for it. Because the shape score is a series corresponding to the bp position, the FASTA sequences input should be positionally linked to some feature and of the same length.

This script also processes BED-type files so make sure your input is properly formatted and uses the appropriate `.bed` or `.bed.gz` extension.

### File Options
The 'Force Strandedness' options ensures that the DNA strand orientation during the analysis is considered. 

### Output file (CDT/TAB)
The output matrix files are named based on the input filenames and similarly formatted to the heatmap output from [tag-pileup][tag-pileup]. There should be a file for each shape output selected with a suffix distinguishing them `_HelT.cdt`, `_MGW.cdt`, `_PropT.cdt`, and `_Roll.cdt`). For example, for a given `XXX.bed` input file and only MGW selected, a new `XXX_MGW.cdt` file will be written to the user-selected output directory.

### Output composites (GUI only)
The average composites of the CDT output will be displayed in the GUI output window:

<div class="tutorial-img-flow-container">
  <img src={require('./img/DNAShapeBED_Chart-Roll.png').default} style={{width:50+'%'}} />
  <img src={require('./img/DNAShapeBED_Statistics-Roll.png').default} style={{width:50+'%'}} />
</div>

### Shape Options
For each shape option to calculate indicated by the command, a [CDT file][cdt-format] or TAB file will be generated with an extension indicating the shape type calculated.

If the *groove* information is indicated in the command to be used for the output, a file called `<outputBasename>_MGW.cdt` will be generated.
Similarly for *propeller*, *helical*, and *roll*, the output matrix [CDT files][cdt-format] will be named with the suffixes `_PTwist.cdt`, `_HTwist.cdt`, and `_Roll.cdt`, respectively.


Usage:
```bash
java -jar ScriptManager.jar sequence-analysis dna-shape-bed [-afghlprV]
[--avg-composite] [-o=<outputBasename>] <genomeFile> <bedFile>
```

### Positional Input

Expects a [FASTA][fasta-format] formatted file with many sequences to stack up with each other (like [fasta-extract tool][fasta-extract] output).

| Option | Description |
| ------ | ----------- |   
| `<genomeFile>` | reference genome FASTA file |
| `<bedFile>` | the BED file of sequences to extract |



### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<outputBasename>` | Specify output basename (files for each shape indicated will share this base) |

| `--avg-composite` | Save average composite |


### Strand Options

| Option | Description |
| ------ | ----------- |
| `-f, --force` | force-strandedness (default) |

### Shape Options

| Option | Description |
| ------ | ----------- |
| `-g, --groove` | output minor groove width
| `-r, --roll` | output roll
| `-p, --propeller` | output propeller twist
| `-l, --helical` | output helical twist


[rohs-paper]:https://pubmed.ncbi.nlm.nih.gov/23703209/
[fasta-extract]:/docs/sequence-analysis/fasta-extract
[pb-exo-paper]:https://pubmed.ncbi.nlm.nih.gov/29563167/

[cdt-format]:/docs/References/file-formats#cdt
[bed-format]:/docs/References/file-formats#bed
[fasta-format]:/docs/References/file-formats#fasta
