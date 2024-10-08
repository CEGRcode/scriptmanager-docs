---
id: sort-bed
title: Sort BED by CDT
sidebar_label: sort-bed
---

![sort-bed](/icons/Coordinate_Manipulation/SortBED_square.svg)

Sort a CDT file and its corresponding BED file by the total score in the CDT file across the specified interval

<img src={require('/md-img/Coordinate_Manipulation/SortBEDWindow.png').default} style={{width:70+'%'}}/>

### CDT File Statistics 
CDT file statistics provide summary measures like mean, median, and standard deviation, along with distribution and clustering metrics, to help understand and analyze the genomic data's characteristics and variability.

### Sorting Strategy
Depending on the strategy selected, the "Size of Expansion" (in bins) can mean different things.

* __Sort by Center:__ This strategy sorts genomic BED intervals according to the scores in the CDT file at the midpoint of each BED interval. 
* __Sort by Index:__ This strategy sorts genomic BED intervals based on scores in the CDT file at a specific index position within each BED interval. 


## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar coordinate-manipulation sort-bed [-hV] [-c=<center>]
[-o=<outputBasename>] [-x=<index> <index>]... <bedFile> <cdtReference>
```


### Positional Input

| Input | Description |
| ------ | ----------- |
| `<bedFile>` | the BED file to sort |
| `<cdtReference>` | the reference [CDT][cdt-format] file to sort the input by |



### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<outputBasename>` | specify output file basename (no .`cdt`/`.bed` extension, script will add that) |
| `-z, --gzip`            | gzip output (default=false) |

### Sort Options

These options indicate which windows to sort the files by (choose one).

| Option | Description |
| ------ | ----------- |
| `-c, --center=<center>` | sort by center on the input size of expansion in bins (default=100) |
| `-x, --index=<index> <index>` | sort by index from the specified start to the specified stop (0-indexed and half-open interval) |

:::note

Note that if the value input using the `-c` flag is odd, it is the equivalent of using that same value minus 1.

:::



[bed-format]:/docs/Guides/Getting-Started/file-formats#bed
[cdt-format]:/docs/Guides/Getting-Started/file-formats#cdt
