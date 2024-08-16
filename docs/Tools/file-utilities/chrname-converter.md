---
id: chrname-converter
title: Chromosome Name Converter
sidebar_label: Chr Name Converter
---

![ChrNameConverter](/../static/icons/File_Utilities/ConvertChrNames_square.svg)

Different files using different chromosome naming systems for the same genome build presents a challenge during analysis. This tool is provided as a converter between chromosome naming systems for tab-delimited file formats such as BED and GFF.

__Arabic &harr; Roman__<br />
chr1 &harr; chrI<br />
chr2 &harr; chrII<br />
chr3 &harr; chrIII<br />
...<br />
chr16 &harr; chrXVI

More specifically, the __sacCer3 genome build__ uses an arabic numeral naming system (chr1 through chr16) or a roman numeral naming system (chrI through chrXVI). This script serves as a converter between these naming systems and includes options around the mitochondrial and 2-micron naming features.

chrM &harr; chrmt

Also, a mitochondiral chromosome name conversion is also included with the selection of a checkbox option.

<img src={require('/../static/md-img/File_Utilities/ConvertBEDChrNamesWindow.png').default} style={{width:50+'%'}}/><img src={require('/../static/md-img/File_Utilities/ConvertGFFChrNamesWindow.png').default} style={{width:50+'%'}}/>

# Command Line Interface
### Convert BED Chr Names
Usage:
```bash
java -jar ScriptManager.jar file-utilities convert-bed-genome [-ahmV] [-o=<output>] <coordFile>
```
Description:

Convert BED coordinate files between the standard SGD roman numeral chromosome names to the legacy SacCer3_cegr arabic numeral chromosome names.

### Convert GFF Chr Names
Usage:
```bash
java -jar ScriptManager.jar file-utilities convert-gff-genome [-ahmV] [-o=<output>] <coordFile>
```
Description:

Convert GFF coordinate files between the standard SGD roman numeral chromosome names to the legacy SacCer3_cegr arabic numeral chromosome names.

### Positional Input
Expects a single [BED file][bed-format] or [GFF file][gff-format] for input.

### Output Options
| Option | Description |
| ------ | ----------- |
|  `-o, --output=<output>` |   specify output directory (name will be same as original with .bed ext) |

### Conversion Options
| Option | Description |
| ------ | ----------- |
|  `-a, --to-arabic` |        switch converter to output arabic numeral chromsome names (default outputs roman numeral chrnames) |
|  `-m, --chrmt` |             converter will map "chrM" --> "chrmt" (default with no flag is "chrmt" --> "chrM") |


[bed-format]:/docs/Guides/Getting-Started/file-formats#bed
[gff-format]:/docs/Guides/Getting-Started/file-formats#gff
