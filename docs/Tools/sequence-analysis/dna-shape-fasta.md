---
id: dna-shape-fasta
title: DNA Shape from FASTA File
sidebar_label: DNA Shape from FASTA
---

import InputFileFASTA from '/docs/DocComponents/InputFileFASTA.mdx'
import OutputGZip from '/docs/DocComponents/OutputGZip.mdx'
import ReactPlayer from 'react-player'

![dna-shape-fasta](/../static/icons/Sequence_Analysis/DNAShapefromFASTA_square.svg)

Calculate intrinsic DNA shape parameters given input FASTA files. Based on Roh's lab DNAshape server data.

<!--![DNA Shape Cheatsheet](IMGADDRESS) -->
<!-- <figure><figcaption></figcaption></figure> -->

Based on the findings from the Rohs lab ([Zhou et al, 2013][zhou-paper]; [Li et al, 2017][li-paper]), a sliding window approach using a 5bp wide window is a strong predictor of local DNA shape. Using this approach, we can predict 13 kinds of DNA shapes. The electrostatic potential of the strand is also calculable using a similar approach ([Chiu et al,2017][chiu-paper]).

<img src={require('/../static/md-img/Sequence_Analysis/DNAShapefromFASTAWindow.png').default} style={{width:70+'%'}}/>

This script takes in a series of nucleotide sequences from a FASTA file and determines the average shape score(s) across the bp positions.

<InputFileFASTA />

:::tip
Each input FASTA-formatted set of sequences has a shape score series pattern. Because the shape score is a sliding window series corresponding to the bp position, you may want to provide FASTA sequences that are positionally linked to some feature and all be of the same length (for convenient visualization).
:::

### Shape Options

#### What do these shape options mean?

Below is a video introducing some of the shape measurements that we are trying to capture with these calculations.

<ReactPlayer playing={false} controls url="https://www.youtube.com/watch?v=JeQLzRhU--U" style={{ border: '5px solid black' }} />

<br/>

:::info
[Read more on how DNA shape was used in the analysis of comparing TF-binding _in-vivo_ vs _in-vitro_ (Rossi et al, 2018).][pb-exo-paper]
:::

### Output file (CDT/TAB)

The average composites of the CDT output will be displayed in the GUI output window:

<div class="tutorial-img-flow-container">
  <img src={require('./img/DNAShapeBED_Chart-Roll.png').default} style={{width:50+'%'}} />
  <img src={require('./img/DNAShapeBED_Statistics-Roll.png').default} style={{width:50+'%'}} />
</div>

There should be a [CDT file][cdt-format]/Composite file output for each shape aspect selected based on the input filename and with a suffix distinguishing each selected shape style (`_HelT.cdt`, `_MGW.cdt`, `_PropT.cdt`, and `_Roll.cdt`).

For example, in the command-line execution, an `-o myoutput` argument can be provided and the resulting files should be called `myoutput_MGW.cdt`, `myoutput_HelT.cdt`, `myoutput_PropT.cdt`, or `myoutput_Roll.cdt` according to the shapes selected (or with `.out` of the composites if selected).

:::tip
The output matrix files use the same format as the output from [Tag Pileup][tag-pileup] (can visualize with Figure Generation's [heatmap][heatmap] and [composite][composite-plot] tools).
:::

<OutputGZip />


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

For each shape option to calculate indicated by the command, a [CDT file][cdt-format] will be generated with an extension indicating the shape  type calculated.

If the *groove* information is indicated in the command to be used for the output, a file called `<outputBasename>_MGW.cdt` will be generated.
Similarly for *propeller*, *helical*, and *roll*, the output matrix [CDT files][cdt-format] will be named with the suffixes `_PTwist.cdt`, `_HTwist.cdt`, and `_Roll.cdt`, respectively.


### Shape Options

| Option                             | Description                                                                 | Units       | Image |
|------------------------------------|-----------------------------------------------------------------------------|-------------|-------|
| `-g, --groove`                     | Output minor groove width                                                   | Angstroms   | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/minor_groove.png').default} className={'DNA-shape-img'}/> |
| `-r, --roll`                       | Output roll                                                                  | Degrees     | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/roll.png').default} className={'DNA-shape-img'}/> |
| `-p, --propeller`                  | Output propeller twist                                                       | Degrees     | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/propeller.png').default} className={'DNA-shape-img'}/> |
| `-l, --helical`                    | Output helical twist                                                         | Degrees     | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/twist.png').default} className={'DNA-shape-img'}/> |
| `--electrostatic-potential`        | Output electrostatic potential                                               | *kT/e*      | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/electrostatic_potential.png').default} className={'DNA-shape-img'}/> |
| `--stretch`                        | Output stretch                                                               | Angstroms   | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/stretch.png').default} className={'DNA-shape-img'}/> |
| `--buckle`                         | Output buckle                                                                | Degrees     | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/buckle.png').default} className={'DNA-shape-img'}/> |
| `--shear`                          | Output shear                                                                 | Angstroms   | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/shear.png').default} className={'DNA-shape-img'}/> |
| `--opening`                        | Output opening                                                               | Degrees     | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/opening.png').default} className={'DNA-shape-img'}/> |
| `--stagger`                        | Output stagger                                                               | Angstroms   | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/stagger.png').default} className={'DNA-shape-img'}/> |
| `--tilt`                           | Output tilt                                                                  | Degrees     | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/tilt.png').default} className={'DNA-shape-img'}/> |
| `--slide`                          | Output slide                                                                 | Angstroms   | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/slide.png').default} className={'DNA-shape-img'}/> |
| `--rise`                           | Output rise                                                                  | Angstroms   | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/rise.png').default} className={'DNA-shape-img'}/> |
| `--shift`                          | Output shift                                                                 | Angstroms   | <img src={require('/../static/md-img/Sequence_Analysis/DNAShapes/shift.png').default} className={'DNA-shape-img'}/> |
| `--2013`                           | Output groove, roll, propeller twist, and helical twist (equivalent to -grpl) |             | |
| `-a, --2021`                       | Output all 14 metrics                                                         |             |  |

<sub>
  Image Sources:<br />
  <a href="https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/b-dna">
    MGW
  </a><br />
  <a href="https://www.info4eee.com/2013/03/application-of-electrostatics.html">
    EP
  </a><br />
  <a href="https://x3dna.org/highlights/schematic-diagrams-of-base-pair-parameters">
    Base-pair Schematics
  </a>
</sub>

[zhou-paper]:https://pubmed.ncbi.nlm.nih.gov/23703209/
[li-paper]:https://pubmed.ncbi.nlm.nih.gov/29165643/
[chiu-paper]:https://pmc.ncbi.nlm.nih.gov/articles/PMC5716191/
[pb-exo-paper]:https://pubmed.ncbi.nlm.nih.gov/29563167/

[composite-plot]: /docs/Tools/figure-generation/composite-plot
[fasta-extract]: /docs/Tools/sequence-analysis/fasta-extract
[heatmap]: /docs/Tools/figure-generation/heatmap
[tag-pileup]: /docs/Tools/read-analysis/tag-pileup