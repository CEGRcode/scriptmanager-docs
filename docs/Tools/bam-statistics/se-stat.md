---
id: se-stat
title: BAM Statistics (Single-End)
sidebar_label: BAM Statistics (Single-End)
---

import InputFileBAM from '/docs/DocComponents/InputFileBAM.mdx'

![se-stat](/icons/BAM_Statistics/SEStats_square.svg)

Output BAM Header including alignment statistics and parameters given any indexed (BAI) BAM File.

<img src={require('/md-img/BAM_Statistics/SEStatWindow.png').default} style={{width:70+'%'}}/>

This script processes each input BAM file and tallies up reads per chromosome.

<InputFileBAM />

### Output statistics (TXT)

By default, the Paired-End Statistics does not record the computed values (often users just want to take a look at the report) so check this box if you wish to save these results. If you do check this box, each input file will have a `*_SE-stats.txt` file recording the reported statistics.

:::note
Even if this output box is not set, note the [logging manager][scriptmanager-logging] will track this run as if this checkbox was selected.
:::

## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar bam-statistics se-stat <bamFile>
[-hV] [-o=<output>]
```

### Positional Input

This tool takes a single BAM file for input. As with other tools, this tool requires the BAM file be indexed.


### Output Options

| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | Specify output file |
