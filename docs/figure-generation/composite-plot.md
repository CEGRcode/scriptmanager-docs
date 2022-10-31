---
id: composite-plot
title: Composite Plot
sidebar_label: Composite Plot
---

![Composite Plot](/../static/icons/Figure_Generation/Composite-plot.svg)

Generate a Composite Plot PNG from composite data like the output in [TagPileup][tag-pileup].

<img src={require('./img/CompositeOutput.png').default} style={{width:70+'%'}}/>

When reviewing the output from several TagPileup runs, this tool is convenient for the bulk visualization of these composite data.

<img src={require('/../static/md-img/Figure_Generation/CompositePlotWindow.png').default} style={{width:70+'%'}}/>

The tool expects a text file with any extension formatted like the [TagPileup's][tag-pileup] composite output of tab-delimited values with a single header column and the first row defining the domain:

```
<blank>	-499	-498	-497	...	499	500
Sample1_read1_sense.cdt	0.0	0.13333333333333333	0.0	0.0	...	0.0	0.06666666666666667
Sample1_read1_anti.cdt	0.06666666666666667	0.0	0.0	...	0.26666666666666666	0.0
```

The format allows for any number of rows and columns.

:::caution
Make sure the tab-delimited file has the same number of columns in each row. Differing number of values within each row will throw an error.
:::

### Include Legend

You may choose to include a legend for each heatmap which will specify which color was used for each row of the composite file with the name each row defined by the first column.

### Image dimensions

The image height and width specify the number of pixels to squish or expand the numeric matrix into for the final output `.png` heat map image. Image dimensions are enabled with the selection of "Output Image."


## Command Line Interface

Usage:

```bash
java -jar ScriptManager.jar figure-generation composite-plot [-hlV] [-o=<output>]
[-t=<title>] [-x=<pixelWidth>] [-y=<pixelHeight>] [-c=<colors>...]...
<compositeData>
```

### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | specify output filename, please use PNG extension (default=Input filename with "\_compositePlot.png" appended to the name in working directory of ScriptManager |

### Plot Design Options

| Option | Description |
| ------ | ----------- |
| `-t, --title=<title>`             | set title (default uses input file name)            |
| `-l, --legend`                    | add a legend (default=no legend)                    |
| `-x, --width=<pixelWidth>`        | indicate a pixel width for the plot (default=500)   |
| `-y, --height=<pixelHeight>`      | indicate a pixel height for the plot (default=270)  |
| `-c, --custom-colors=<colors>...` | indicate colors to use for each series. Must indicate a number of colors that matches number of dataseries default behavior: if one series input, use black if two series input, use blue(sense) and red(anti) if greater than two series, cycle through a set of 20 preset colors. |

[tag-pileup]:/docs/read-analysis/tag-pileup

[color-hex-url]:http://www.javascripter.net/faq/rgbtohex.htm
[png-format]:/docs/file-formats
