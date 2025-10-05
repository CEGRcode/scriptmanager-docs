---
id: pe-stat
title: Paired-End Statistics
sidebar_label: Paired-End Statistics
---

import InputFileBAM from '/docs/DocComponents/InputFileBAM.mdx'

![pe-stat](/icons/BAM_Statistics/PEStats_square.svg)

Generates Insert-size Histogram statistic (GEO requirement) and outputs BAM Header including alignment statistics and parameters given a sorted and indexed (BAI) paired-end BAM File.

<img src={require('/md-img/BAM_Statistics/PEStatWindow.png').default} style={{width:70+'%'}}/>

This script processes each input BAM file by calculating and tallying the insert-size of every single read pair.

<InputFileBAM />

### Histogram Range (min-max limits)

By default, Paired-End Statistics doesn't tally insert lengths beyond 1000bp but the user may choose to extend or restrict the range of moleule lengths that are tallied.

### Duplication Statistics

The user can report the duplicate rate vs. number of duplicate molecules by checking the box "Calculate duplication statistics."

### Output statistics (TXT, PNG)

By default, the Paired-End Statistics does not record the computed values (often users just want to take a look at the report) so check this box if you wish to save these results. If you do check this box, there are several files that will be generated based on each input BAM file basename:

- `*_InsertHistogram.out` - insert size tallies used to make the histogram
- `*_PE.png` - the histogram itself
- (if "Duplication statistics" is selected) `*_DuplicationSummary.out` - the computed duplication stats
- (if "Duplication statistics" is selected) `*_DUP.png` - the visualized duplication stats

:::note
Even if this output box is not set, note the [logging manager][scriptmanager-logging] will track this run as if this checkbox was selected.
:::

## Command Line Interface
Usage:

```bash
java -jar ScriptManager.jar bam-statistics pe-stat <bamFile> [-dhsV] [-n=<MIN_INSERT>]
[-o=<outputBasename>] [-x=<MAX_INSERT>]
```

### Positional Input

This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed.

### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<outputBasename>` | specify output basename, default is the BAM input filename without extension |
| `-s, --summary` | write summary of insert histogram by chromosome (default false) |
| `-d, --duplication-stats` | calculate duplication statistics if this flag is used (default false) |


### Filter Options

| Option | Description |
| ------ | ----------- |
| `-n, --min=<MIN_INSERT>` | histogram range minimum (0 default) |
| `-x, --max=<MAX_INSERT>` | histogram range maximum (1000 default) |


[logging-manager]:/docs/Guides/Getting-Started/logging-manager