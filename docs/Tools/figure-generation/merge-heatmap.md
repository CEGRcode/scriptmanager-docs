---
id: merge-heatmap
title: Merge Heatmap
sidebar_label: Merge Heatmap
---

import Highlight from '@site/src/components/Highlight';

![Merge Heatmap](/../static/icons/Figure_Generation/MergeHeatmaps_square.svg)

This tool merges two PNG files into a third PNG file that is an average of each corresponding pair of pixels from the input files.

<img src={require('./img/MergeHeatMapSchematic.jpg').default} style={{width:35+'%'}}/>

Typical use of this tool is for merging <Highlight color="blue">blue(sense)</Highlight> and <Highlight color="red">red(anti-sense)</Highlight> [**two-color heatmap plots**][heatmap] plots for [**ChIP-exo analysis**][chipexo-tutorial].

<img src={require('/../static/md-img/Figure_Generation/MergeHeatMapWindow.png').default} style={{width:70+'%'}}/>

### File input (PNGs)

Any file with a `.png` extension may be loaded into the Merge Heatmap tool. When a batch of files have been loaded, the user can click "Merge" which will execute the script which will run the script to pair off samples based on their filenames and merge each pair into a new file with the `*_merge.png` suffix.

The graphical interface for the Merge Heatmap tool relies on strict file naming conventions set by the [**Two-color heatmap tool**][heatmap] to pair a batch of PNG files for merging. For example in the following batch of files,

```
SampleA_anti_treeview.png
SampleB_anti_treeview.png
Another-Name_StructureA_anti_treeview.png
Another-Name_StructureA_sense_treeview.png
SampleA_sense_treeview.png
SampleB_sense_treeview.png
SampleC_sense_treeview.png
```

The following files will be paired off for merging:

```
# SampleA_merge.png
SampleA_sense_treeview.png
SampleA_anti_treeview.png

# SampleB_merge.png
SampleB_sense_treeview.png
SampleB_anti_treeview.png

# Another-Name_StructureA_merge.png
Another-Name_StructureA_sense_treeview.png
Another-Name_StructureA_anti_treeview.png

# unpaired
SampleC_sense_treeview.png
```

:::caution
Make sure you are merging PNG files with the same pixel-dimensions. ScriptManager will terminate the process if it encounters a pair of images with unequal dimensions and report it to the user in a pop-up window.
:::

### Output options (PNG)

The heatmap image is written to [PNG formatted][png-format] file with a filepath derived from the input image file corresponding to the "sense" file in the matched pairs. This filename is cut off right before the last "sense" and the `_merge.png` suffix is appended to it to build the output filename. For example, provided some input `myheatmap_sense_treeview.png` and `myheatmap_anti_treeview.png`, the output filename will be `myheatmap_merge.png`.

### Details of color-averaging strategy

Let every pixel in the **sense `.png` heatmap** ($P_{sense}$),
every pixel in the **anti-sense `.png` heatmap** ($P_{anti}$), and
every pixel in the **merged `.png` heatmap** ($P_{merge}$) be indexed by $i$.

For each $S_i \in P_{sense}$ and $A_i \in P_{anti}$
, let
$S_i = (\textcolor{red}{r_s},\textcolor{green}{g_s},\textcolor{blue}{b_s})$
and
$A_i = (\textcolor{red}{r_a},\textcolor{green}{g_a},\textcolor{blue}{b_a})$.

We define the **merged `.png` heatmap** ($P_{merge}$) pixel matrix as follows:

$$
\forall M_i \in P_{merge},\\

M_i =
\begin{cases}
A_i     &, \text{if } \textcolor{red}{r_s} >=240 \text{, } \textcolor{green}{g_s} >=240 \text{, and } \textcolor{blue}{b_s} >= 240
\\
S_i     &, \text{if } \textcolor{red}{r_a} >=240 \text{, } \textcolor{green}{g_a} >=240 \text{, and } \textcolor{blue}{b_a} >= 240
\\
(\frac{\textcolor{red}{r_s} + \textcolor{red}{r_a}}{2},
  \frac{\textcolor{green}{g_s} + \textcolor{green}{g_a}}{2},
  \frac{\textcolor{blue}{b_s} + \textcolor{blue}{b_a}}{2})     &, \text{otherwise}
\end{cases}
$$

:::note
See from the above specifications $P_{sense}$ and $P_{anti}$ could be swapped around with no effect on the merged output. In other words, the tool is not doing anything fancy or ChIP-exo specific and is agnostic to the specifics of the input outside of the dimensions and the `.png` format. Should the need arise, you could co-opt the command line interface for merge heatmap to bypass the file naming enforcement strategy employed by the graphical interface to merge any pair of `.png` files with the same dimensions.
:::

## Command Line Interface

Usage:

```bash
java -jar ScriptManager.jar figure-generation merge-heatmap [-hV] [-o=<output>]
<senseFile> <antiFile>
```

Description:

Merge Sense and Antisense png heatmaps

### Positional Input

Expects two [PNG][png-format] like the output from the [heatmap tool][heatmap]. Filenaming format is unrestricted (contrast with GUI) since each of the merged files is explicitly named in the input parameters of the command line signature.

### Output Options

| Option                  | Description                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `-o, --output=<output>` | specify output filename, please use PNG extension (`<senseFile>_merged.png` appended to the name in working directory of ScriptManager |

[heatmap]:/docs/Tools/figure-generation/heatmap

[chipexo-tutorial]:/docs/Guides/Tutorials/chipexo-tutorial
