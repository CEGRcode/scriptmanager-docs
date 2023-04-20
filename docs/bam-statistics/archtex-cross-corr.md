---
id: archtex-cross-corr
title: ArchTEx Cross Correlation
sidebar_labal: ArchTEx Cross Correlation
---

<!-- ![archtex-cross-corr](/../static/icons/BAM_Statistics/ArchTEx-Cross-Corr_square.svg) -->


Calculate optimal tag shift based on ArchTEx implementation from [Lai et al, 2012 (PMID:22302569)][lai-2012].

<div class="tutorial-img-flow-container">
  <img src={require('./img/ArchTExCrossCorrelation_schematic.png').default} style={{width:50+'%',}} />
</div>


This tool is typically used for empirically determining a tag shift value for combining forward and reverse strand occupancies in tools such as [**Tag Pileup**][tag-pileup]. In many chromatin immunoprecipitation (ChIP)-based approaches, there is a slight offset of strand-specific read occupancies as shown above and this offset is different across experiments due to differences in the fragmentation method, the length of DNA that the protein target binds, secondary crosslink patterning, and a variety of other factors. To account for this variable offset, this computational approach to determining tag shift was developed. The correlation for every tag shift from 0 to 1000bp is calculated to determine the shift with the best correlation within this range.

<img src={require('/../static/md-img/BAM_Statistics/ArchTExCrossCorrelationWindow.png').default} style={{width:70+'%'}}/>


### Input BAM files
The graphical interface restricts file selection by the `.bam` file extension. This tool supports batch processing of files.

### Correlation Strategies
You may choose from two strategies for calculating the correlation:

* **Whole Genome (recommended)** correlation will calculate the correlation of tags across the entire genome (chr sizes inferred from BAM header).
* **Random sampling** correlation will sample some user-specified number of sites from each chromosome across a user-specified sized window.

### Output Files
You may optionally select to write the correlations scores and peak position output to a text file by checking the "Output Statistics" checkbox.

The output window will display progress through the file (printing chromosome currently being analyzed) as well as final **Tag Shift (x-axis)** ➡️ **Correlation Values (y-axis)** under the "C-C Data" tab. The "C-C Plots" tab will display the same values as a line plot.

<div class="tutorial-img-flow-container">
  <img src={require('./img/ArchTExCrossCorrelationOutput_ccdata.png').default} style={{width:50+'%',}} />
  <img src={require('./img/ArchTExCrossCorrelationOutput_ccplot.png').default} style={{width:50+'%',}} />
</div>


## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar bam-statistics archtex-cross-corr [-g | -r]
       [-w=<windowSize> | -i=<iterations>] [-hV] [-o=<outputBasename>]
       [-t=<cpu>] <bamFile>
```


### Positional Input

This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed.


### Output Option

| Option | Description |
| ------ | ----------- |
| `-o, --output=<outputBasename>` | specify output file basename for correlation scores |


### Correlation Strategy Options
Select no more than one strategy.

| Option | Description |
| ------ | ----------- |
| `-r, --random` | Use the random sampling correlation method (default) |
| `-g, --genome` | Use the full genome correlation method |

If random sampling is selected (`-r`), you may select more options to specify how sampling is performed. These are otherwise ignored.

| Option | Description |
| ------ | ----------- |
| `-w, --window=<windowSize>` | set window frame size for each extraction (default=50kb) |
| `-i, --iterations=<iterations>` | set number of random iterations per chromosome (default=10) |


### Other Options

| Option | Description |
| ------ | ----------- |
| `-t, --cpu=<cpu>` | set number of threads for performance tuning (default=1) |


Original code: https://github.com/WilliamKMLai/ArchTEx

[lai-2012]:https://pubmed.ncbi.nlm.nih.gov/22302569/

[tag-pileup]:/docs/read-analysis/tag-pileup
