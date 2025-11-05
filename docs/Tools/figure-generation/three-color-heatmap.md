---
id: three-color-heatmap
title: Three Color Heatmap
sidebar_label: Three Color Heatmap
---

import RowColumnSelect from '/docs/DocComponents/RowColumnSelect.mdx'
import InputFileMatrix from '/docs/DocComponents/InputFileMatrix.mdx'
import Highlight from '@site/src/components/Highlight';

![Three Color Heatmap](/../static/icons/Figure_Generation/ThreeColorHeatmap_square.svg)

Generate heat map with middling values.

<!-- ![ThreeColorHeatMapSchematic.png] -->

This tool generates a three color heatmap from a tab-delimited matrix input of numeric values. It is generally used to visualize values with both negative and positive values.

The values to color scale is defined as a range from a user-specified minimum, middle, and maximum set of values corresponding to a user-specified set of three colors (default blue, black, and yellow), hence the three-color heatmap.

<img src={require('/../static/md-img/Figure_Generation/ThreeColorHeatMapWindow.png').default} style={{width:70+'%'}}/>

Consider using this tool to visualize the matrix output of the [**DNA Shape**][dna-shape-bed] tools to visuzlize sequence shape changes. You may also bring your own matrix transformed data (e.g. differential tag pileup matrices) or any tab-delimited text file can be used with numeric type values (many third party tools create such outputs) so long as the appropriate start row and start column are specified appropriately to skip over header columns and rows.

<InputFileMatrix />

<RowColumnSelect />

### Color selection

Details of the implementation are described below but typically Lo(Low), Mid(Middle), and Hi(High) represent different ranges of data values, allowing for a visual gradinet that highlights variations in the data. 

**Lo(Low)** represents the lowest range of data values and is assigned the color 'blue'.
**Mid(Middle)** represents the middle range of data and is assigned the color 'black'.
**Hi(High)** represents the highest range of data values and is assigned the color 'yellow'.
**NaN Color** is used to visualize matrix values that failed to parse into a numeric type.

### Contrast threshold

The user can specify the contrast threshold in a couple ways:

- **Absolute:** The user can directly define the value marking the "maximum color".
- **Percentile:** Or the user can tell the script to dynamically determine the top $p$ percentile of values across the numeric matrix (excluding zeros) and set them all to have the "maximum color" value and scale color assignment for the rest of the values.

Read more about the contrast threshold below ("Details of color-scaling strategy").

#### Exclude zero values

When performing percentile threshold calculations, a matrix might have a high number of zeros which the user may want to ignore when determining percentile threshold cutoffs. Checking this box would exclude these values from the percentile calculations and may help the heatmap better display the range of values in the matrix.

<!-- #### Output Min/Max and midpoint cutoffs

The user can optionally elect to output the threshold cutoffs (useful for when computing percentile-based cutoffs as absolutes) by checking this box. Cutoff statistics are reported to ___________ filepath. -->

### Image dimensions

The image height and width specify the number of pixels to squish or expand the numeric matrix into for the final output `.png` heat map image.

### Image Compression

The image compression options allow the user to choose from several image compression strategies but we recommend "Treeview" for base-pair resolution tag-pileup occupancy data. This is the same strategy implemented by previous microarray visualization packages ([Saldanha et al, 2004][treeview-paper]).

### Output options (PNG)

If the user elects to save the heatmap image, it is written to [PNG formatted][png-format] filepath derived from the input matrix file. The input file extension is stripped and replaced with a suffix based on the image compression strategy used. For example, given an input matrix filename, `mymatrix.cdt`, the following output files will be produced for each strategy:

* **Treeview**: `mymatrix_treeview.png`
* **Bicubic**: `mymatrix_bicubic.png`
* **Bilinear**: `mymatrix_bilinear.png`
* **Nearest Neighbor**: `mymatrix_neighbor.png`


## Command Line Interface
Usage:
```bash
java -jar Scriptmanager.jar figure-generation three-color [-pn=<percentile> |
       -an=<absolute>] [-pd=<percentile> | -ad=<absolute>] [-px=<percentile> |
       -ax=<absolute>] [-cn=<min> | -cd=<mid> | -cx=<max> | -ca=<nan>] [-0hV]
       [-l=<startCOL>] [-o=<output>] [-r=<startROW>] [-x=<pixelWidth>]
       [-y=<pixelHeight>] [-z=<compression>] <CDT>
```

### Positional Input

Expects a [CDT][cdt-format] formatted matrix file of values to generate heatmap from.

### Output Options
| Option | Description |
| ------ | ----------- |
|  `-o, --output=<output>`                  |  specify output filename, please use PNG extension (default=CDT filename with "_\<compression-type\>. png" appended to the name in working directory of ScriptManager) |

### Plot Design Options
| Option | Description |
| ------ | ----------- |
|  `-r, --start-row=<startROW>`             | |
|  `-l, --start-col=<startCOL>`             | |
|  `-x, --width=<pixelWidth>`               |  indicate a pixel width for the heatmap (default=200) |
|  `-y, --height=<pixelHeight>`             | indicate a pixel height for the heatmap (default=600) |
|  `-z, --compression=<compression>`        | choose an image compression type: 1=Treeview, 2=Bicubic, 3=Bilinear, 4=Nearest Neighbor (default=1Treeview) |
|  `-0, --include-zeros`                    | used with `-p` flag, indicating exclusion of zero values when calculating percentile thresholds |


### Select minimum value
(select no more than one of these options)

| Option | Description |
| ------ | ----------- |
|      `-pn=<percentile>` |       use this percentile (as opposed to specific values) for contrast thresholding in determining max contrast value of the heatmap |
|      `-an=<absolute>`   |      the minimum value for contrast thresholding in the heatmap (default,min=-10) |

### Select middling value
(select no more than one of these options)

| Option | Description |
| ------ | ----------- |
| `-pd=<percentile>` |      use this percentile (as opposed to specific values) for contrast thresholding in determining max contrast value of the heatmap |
|      `-ad=<absolute>`    |      the midpoint value for contrast thresholding in the heatmap (default,mid=0) |

### Select maximum value
(select no more than one of these options)

| Option | Description |
| ------ | ----------- |
|      `-px=<percentile>` |       use this percentile (as opposed to specify values) for contrast thresholding in determining max contrast value of the heatmap |
|      `-ax=<absolute>` |         the maximum value for contrast thresholding (default,max=10) |

### Select heatmap colors
| Option | Description |
| ------ | ----------- |
|      `-cn, --color-min=<min>` | Color indicating minimum values (default=YELLOW)  |
| `-cd, --color-mid=<mid>` | Color indicating middle values (default=BLACK)|
|      `-cx, --color-max=<max>` | Color indicating maximum values (default=CYAN) |
|      `-ca, --color-nan=<nan>` | Color indicating not-a-number values (default=GRAY) |

For custom color: type hexadecimal string to represent colors (e.g. "FF0000" is hexadecimal for red). See http://www.javascripter.net/faq/rgbtohex.htm for some color options with their corresponding hex strings.

[treeview-paper]:https://pubmed.ncbi.nlm.nih.gov/15180930/

[dna-shape-bed]:/docs/Tools/sequence-analysis/dna-shape-bed
