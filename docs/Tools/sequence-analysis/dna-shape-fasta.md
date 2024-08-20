---
id: dna-shape-fasta
title: DNA Shape from FASTA File
sidebar_label: dna-shape-fasta
---

![dna-shape-fasta](/../static/icons/Sequence_Analysis/DNAShapefromFASTA_square.svg)

Calculate intrinsic DNA shape parameters given input FASTA files. Based on Roh's lab DNAshape server data.

Based on the findings from the Rohs lab [(Zhou et al, 2013)][rohs-paper], a sliding window approach using a 5bp wide window is a strong predictor of local DNA shape. Using this approach, we can predict 4 kinds of DNA shape:

1. **minor groove width**
2. **propeller twist**
3. **helix twist**
4. **roll**

<img src={require('/../static/md-img/Sequence_Analysis/DNAShapefromFASTAWindow.png').default} style={{width:70+'%'}}/>

### File inputs (FASTA)
Each input FASTA-formatted set of sequences has an average shape score series calculated for it. Because the shape score is a series corresponding to the bp position, the FASTA sequences input should be positionally linked to some feature and of the same length.

### File Options
The 'Force Strandedness' options ensures that the DNA strand orientation during the analysis is considered. 

### Output file (CDT/TAB)
The output matrix files are named based on the input filenames and similarly formatted to the heatmap output from [tag-pileup][tag-pileup]. There should be a file for each shape output selected with a suffix distinguishing them `_HelT.cdt`, `_MGW.cdt`, `_PropT.cdt`, and `_Roll.cdt`). 

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

# Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar sequence-analysis dna-shape-fasta [-aghlprV]
[--avg-composite] [-o=<outputBasename>] <fastaFile>
```


### Positional Input

Expects a [FASTA][fasta-format] formatted file with many sequences to stack up with each other (like [fasta-extract tool][fasta-extract] output).

### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<outputBasename>` | Specify output basename (files for each shape indicated will share this base) |
| `--avg-composite` | Save average composite |

### Shape Options

| Option | Description |
| ------ | ----------- |
| `-g, --groove` | output minor groove width
| `-r, --roll` | output roll
| `-p, --propeller` | output propeller twist
| `-l, --helical` | output helical twist
| `-a, --all` | output groove, roll, propeller twist, and helical twist, equivalent to `-grpl`.

[rohs-paper]:https://pubmed.ncbi.nlm.nih.gov/23703209/

[cdt-format]:/docs/Guides/Getting-Started/file-formats#cdt
[fasta-format]:/docs/Guides/Getting-Started/file-formats#fasta

[fasta-extract]: /docs/Tools/sequence-analysis/fasta-extract