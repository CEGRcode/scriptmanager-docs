---
id: dna-shape-fasta
title: DNA Shape from FASTA File
sidebar_label: dna-shape-fasta
---

import ReactPlayer from 'react-player'

![dna-shape-fasta](/../static/icons/Sequence_Analysis/DNAShapefromFASTA_square.svg)

Calculate intrinsic DNA shape parameters given input FASTA files. Based on Roh's lab DNAshape server data.

<!--![DNA Shape Cheatsheet](IMGADDRESS) -->

Based on the findings from the Rohs lab [(Zhou et al, 2013)][rohs-paper], a sliding window approach using a 5bp wide window is a strong predictor of local DNA shape. Using this approach, we can predict 4 kinds of DNA shape:

1. **minor groove width**
2. **propeller twist**
3. **helix twist**
4. **roll**

<img src={require('/../static/md-img/Sequence_Analysis/DNAShapefromFASTAWindow.png').default} style={{width:70+'%'}}/>

This script takes in a series of nucleotide sequences from a FASTA file and determines the average shape score(s) across the bp positions.

## What do these shape options mean?

Below is a video introducing some of the shape measurements that we are trying to capture with these calculations.

<ReactPlayer playing controls url='https://www.youtube.com/watch?v=JeQLzRhU--U' />

<br/>

:::info
[Read more on how DNA shape was used in the analysis of comparing TF-binding _in-vivo_ vs _in-vitro_ (Rossi et al, 2018).][pb-exo-paper]
:::

## File inputs (FASTA)
Each input FASTA-formatted set of sequences has a shape score series pattern. Because the shape score is a series corresponding to the bp position, the FASTA sequences input should be positionally linked to some feature and of the same length.

When using the GUI, make sure your input is properly formatted and uses the appropriate FASTA (`.fa` / `.fa.gz` / `.fasta` / `...`) extensions.

## Output file (CDT/TAB)
The average composites of the CDT output will be displayed in the GUI output window:

<div class="tutorial-img-flow-container">
  <img src={require('./img/DNAShapeBED_Chart-Roll.png').default} style={{width:50+'%'}} />
  <img src={require('./img/DNAShapeBED_Statistics-Roll.png').default} style={{width:50+'%'}} />
</div>

There should be a [CDT file][cdt-format]/Composite file output for each shape aspect selected based on the input filename and with a suffix distinguishing each selected shape style (`_HelT.cdt`, `_MGW.cdt`, `_PropT.cdt`, and `_Roll.cdt`).

For example, in the command-line execution, an `-o myoutput` argument can be provided and the resulting files should be called `myoutput_MGW.cdt`, `myoutput_PTwist.cdt`, `myoutput_HTwist.cdt`, or `myoutput_Roll.cdt` according to the shapes selected (or with `.out` if composite is selected).

:::tip
The output matrix files use the same format as the output from [Tag Pileup][tag-pileup] (can visualize with Figure Generation's [heatmap][heatmap] and [composite][composite-plot] tools).
:::

## Command Line Interface

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
| `-z, --gzip`            | gzip output (default=false) |
| `--avg-composite` | Save average composite |

### Shape Options

| Option | Description |
| ------ | ----------- |
| `-g, --groove` | output minor groove width
| `-r, --roll` | output roll
| `-p, --propeller` | output propeller twist
| `-l, --helical` | output helical twist
| `-a, --all` | output groove, roll, propeller twist, and helical twist, equivalent to `-grpl`.

For each shape option to calculate indicated by the command, a [CDT file][cdt-format] will be generated with an extension indicating the shape  type calculated.

If the *groove* information is indicated in the command to be used for the output, a file called `<outputBasename>_MGW.cdt` will be generated.
Similarly for *propeller*, *helical*, and *roll*, the output matrix [CDT files][cdt-format] will be named with the suffixes `_PTwist.cdt`, `_HTwist.cdt`, and `_Roll.cdt`, respectively.

[rohs-paper]:https://pubmed.ncbi.nlm.nih.gov/23703209/
[pb-exo-paper]:https://pubmed.ncbi.nlm.nih.gov/29563167/

[cdt-format]: /docs/Guides/Getting-Started/file-formats#cdt
[fasta-format]: /docs/Guides/Getting-Started/file-formats#fasta

[composite-plot]: /docs/Tools/figure-generation/composite-plot
[fasta-extract]: /docs/Tools/sequence-analysis/fasta-extract
[heatmap]: /docs/Tools/figure-generation/heatmap
[tag-pileup]: /docs/Tools/read-analysis/tag-pileup