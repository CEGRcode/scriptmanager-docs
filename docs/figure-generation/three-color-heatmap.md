---
id: three-color-heatmap
title: Three Color Heatmap
sidebar_label: three-color-heatmap
---

![Three Color Heatmap](/../static/icons/Figure_Generation/ThreeColorHeatmap_square.svg)

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

Generate heat map with middling values.

<!-- ![ThreeColorHeatMapSchematic.png] -->

:::note
Extended description goes here.
:::

<img src={require('/../static/md-img/Figure_Generation/ThreeColorHeatMapWindow.png').default} style={{width:70+'%'}}/>

### File inputs

This script does not restrict selection of file inputs because a variety of file extensions may be parsed out for the numeric matrix. The tool supports bulk selection and processing of files.

### Color selection

Details of the implementation are described below but typically Lo(Low), Mid(Middle), and Hi(High) represent different ranges of data values, allowing for a visual gradinet that highlights variations in the data. 

**Lo(Low)** represents the lowest range of data values and is assigned the color 'blue'.
**Mid(Middle)** represents the middle range of data and is assigned the color 'black'.
**Hi(High)** represents the highest range of data values and is assigned the color 'yellow'.

### Contrast threshold

The user can specify the contrast threshold in a couple ways:

- **Absolute:** The user can directly define the value marking the "maximum color".
- **Percentile:** Or the user can tell the script to dynamically determine the top $p$ percentile of values across the numeric matrix (excluding zeros) and set them all to have the "maximum color" value and scale color assignment for the rest of the values.

Read more about the contrast threshold below ("Details of color-scaling strategy").

### Image dimensions

The image height and width specify the number of pixels to squish or expand the numeric matrix into for the final output `.png` heat map image.

### Image Compression

The image compression options allow the user to choose from several image compression strategies but we recommend "Treeview" for base-pair resolution tag-pileup occupancy data. This is the same strategy implemented by previous microarray visualization packages ([Saldanha et al, 2004][treeview-paper]).


```bash
Usage: script-manager figure-generation three-color [-pn=<percentile> |
       -an=<absolute>] [-pd=<percentile> | -ad=<absolute>] [-px=<percentile> |
       -ax=<absolute>] [-cn=<min> | -cd=<mid> | -cx=<max> | -ca=<nan>] [-0hV]
       [-l=<startCOL>] [-o=<output>] [-r=<startROW>] [-x=<pixelWidth>]
       [-y=<pixelHeight>] [-z=<compression>] <CDT>
Generate heat map with middling values.
      <CDT>
  -o, --output=<output>      specify output filename, please use PNG extension
                             (default=CDT filename with "_<compression-type>.
                               png" appended to the name in working directory
                               of ScriptManager
  -r, --start-row=<startROW>
  -l, --start-col=<startCOL>
  -x, --width=<pixelWidth>   indicate a pixel width for the heatmap
                               (default=200)
  -y, --height=<pixelHeight> indicate a pixel height for the heatmap
                               (default=600)
  -z, --compression=<compression>
                             choose an image compression type: 1=Treeview,
                               2=Bicubic, 3=Bilinear, 4=Nearest Neighbor
                               (default=1Treeview)
  -0, --include-zeros        used with `-p` flag, indicating exclusion of zero
                               values when calculating percentile thresholds
  -h, --help                 Show this help message and exit.
  -V, --version              Print version information and exit.

Select minimum value:
	(select no more than one of these options)
      -pn=<percentile>       use this percentile (as opposed to specific
                               values) for contrast thresholding in determining
                               max contrast value of the heatmap
      -an=<absolute>         the minimum value for contrast thresholding in the
                               heatmap (default,min=-10)

Select middling value:
	(select no more than one of these options)
      -pd=<percentile>       use this percentile (as opposed to specific
                               values) for contrast thresholding in determining
                               max contrast value of the heatmap
      -ad=<absolute>         the midpoint value for contrast thresholding in
                               the heatmap (default,mid=0)

Select maximum value:

	(select no more than one of these options)
      -px=<percentile>       use this percentile (as opposed to specific
                               values) for contrast thresholding in determining
                               max contrast value of the heatmap
      -ax=<absolute>         the maximum value for contrast thresholding
                               (default,max=10)

Select heatmap colors:
      -cn, --color-min=<min> Color indicating minimum values (default=YELLOW)
                               For custom color: type hexadecimal string to
                               represent colors (e.g. "FF0000" is hexadecimal
                               for red).
                              See <http://www.javascripter.net/faq/rgbtohex.
                               htm> for some color options with their
                               corresponding hex strings.

      -cd, --color-mid=<mid> Color indicating middle values (default=BLACK) For
                               custom color: type hexadecimal string to
                               represent colors (e.g. "FF0000" is hexadecimal
                               for red).
                              See <http://www.javascripter.net/faq/rgbtohex.
                               htm> for some color options with their
                               corresponding hex strings.

      -cx, --color-max=<max> Color indicating maximum values (default=CYAN) For
                               custom color: type hexadecimal string to
                               represent colors (e.g. "FF0000" is hexadecimal
                               for red).
                              See <http://www.javascripter.net/faq/rgbtohex.
                               htm> for some color options with their
                               corresponding hex strings.

      -ca, --color-nan=<nan> Color indicating not-a-number values
                               (default=GRAY) For custom color: type
                               hexadecimal string to represent colors (e.g.
                               "FF0000" is hexadecimal for red).
                              See <http://www.javascripter.net/faq/rgbtohex.
                               htm> for some color options with their
                               corresponding hex strings.

```
