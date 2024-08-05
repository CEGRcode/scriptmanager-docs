---
id: scaling-factor
title: Scaling Factor
sidebar_label: scaling-factor
---

![scaling-factor](/../static/icons/Read_Analysis/ScalingFactor_square.svg)

Calculate the factor as either total tag normalization or normalization of ChIP-seq data with control (PMID:22883957)

<img src={require('/../static/md-img/Read_Analysis/ScalingFactorWindow.png').default} style={{width:70+'%'}}/>

### File Inputs 
This script processes BAM-type files so make sure your input is properly formatted and uses the appropriate `.bam` extension. 

### Filter Options
There are multiple filter options available for this tool. The 'Blacklist' option includes a file containing blacklisted entires to exclude. The 'Control BAM' option is for specifying the control BAM file. The 'Window Size(bp)' adjusts the size of the window used for NCIS-related sclaing. The 'Minimum Fraction' sets the minimum fraction required for NCIS-related scaling

### Scaling Methods

* **Total Tag normalization** method adjusts data by scaling based on the total number of tags (or reads) in a dataset. 
* **NCIS normalization** method normalizes counts based on specific insertion sites.
* **NCIS with Total Tag** uses both methods by normalizing data first by the total tag count and then applying the NCIS normalization. 


## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar read-analysis scaling-factor [-t | -n | -b] [-hV]
[-c=<controlBAM>] [-f=<blacklistFilter>] [-m=<minFrac>]
[-o=<outputBasename>] [-w=<window>] <bamFile>
```


### Filter Options
| Option | Description |
| ------ | ----------- |
| `-f, --blacklist=<blacklistFilter>` | specify blacklist file to filter by |
| `-c, --control=<controlBAM>` | control BAM file |
| `-w, --window-size=<window>` | window size for NCIS-related scaling types (default=500) |
| `-m, --min-fraction=<minFrac>` | minimum fraction for NCIS-related scaling types (default=0.75) |




## Positional Input

This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed.


### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<outputBasename>` | specify output file for composite values |


### Scale Options

| Option | Description |
| ------ | ----------- |
| `-t, --total-tag` | total tag scaling (default) |
| `-n, --ncis` | ncis normalization with window size in bp and unitless minimum fraction (default-size=500, default-fraction=0.75) |
| `-b, --both` | ncis with total tag (default-size=500, default-fraction=0.75) |

[Liang & Keles (BMC Bioinf 2012)][Liang_2012]


[Liang_2012]:https://pubmed.ncbi.nlm.nih.gov/22883957/
[file-format]:/docs/References/file-formats
