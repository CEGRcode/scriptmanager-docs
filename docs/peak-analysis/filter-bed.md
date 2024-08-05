---
id: filter-bed
title: Filter BED by Proximity
sidebar_label: filter-bed
---

![filter-bed](/../static/icons/Peak_Analysis/FilterBEDbyProximity_square.svg)

Filter BED file using user-specified exclusion zone using the score column to determine which peak to retain.

<img src={require('/../static/md-img/Peak_Analysis/FilterBEDbyProximityWindow.png').default} style={{width:70+'%'}}/>

### File Inputs (BED)
This script processes BED-type files so make sure your input is properly formatted and uses the appropriate `.bed` or `.bed.gz` extension.

### Filter Options 
The 'Exclusion Distance' refers to the minimum distance (in base pairs) that another peak must be from a retained peak to be excluded. 

## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar peak-analysis filter-bed [-hV] [-e=<exclusion>]
[-o=<outputBasename>] <bedFile>
```

### Positional Input
| Input | Description |
| ------ | ----------- |
| `<bedFile>` | The BED file we are filtering on|

### Output Options
| Option | Description |
| ------ | ----------- |
| `-o, --output=<outputBasename>` | specify output file |
| `-e, --exclusion=<exclusion>` | exclusion distance in bp (default=100) |
| `-z, --gzip` | output compressed output (default=false) |
