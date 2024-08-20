---
id: peak-align-ref
title: Align BED to Reference
sidebar_label: Align BED to Reference
---

![peak-align-ref](/../static/icons/Peak_Analysis/BEDPeakAligntoRef_square.svg)

Align BED peaks to Reference BED file creating CDT files for heatmap generation.

<img src={require('/../static/md-img/Peak_Analysis/BEDPeakAligntoRefWindow.png').default} style={{width:70+'%'}}/>

### File Inputs (Peak BED & Reference BED)
This script expects both a Peak [BED file][bed-format] input and a Reference BED file input. The Peak BED files contain genomic regions identified as peaks, while Reference BED files provide standard genomic regions used for comparison or annotation.


### Strand Output Options 

**Combined Strand** option combines peaks from the antisense and snese strand into a single output, creating a unified view of the aligned peaks. 
**Separated Strand** option separates the peaks into antinsense and sense strands, providing a detailed analysis of strand-specifc peak distibutions and patterns. 


## Command Line Interface

Usage:
```bash
java -jar ScriptManager.jar peak-analysis peak-align-ref [-hV] [--separate
| --combined] [-o=<output>]
<peakBED> <refBED>
```

### Positional Input
| Input | Description |
| ------ | ----------- |
| `<peakBED>` | The BED peak file |
| `<refBED>` | The BED reference file |

### Strand Options

| Option | Description |
| ------ | ----------- |
| `--separate` | select output strands as separate (default) |
| `--combined` | select output strands as combined |

### Output Options
| Option | Description |
| ------ | ----------- |
| `-o, --output=<output>` | specify output file (default=`<peakBED>_<refBED>_Output.cdt`) |
| `-z, --gzip`            | gzip output (default=false) |

[bed-format]:/docs/Guides/Getting-Started/file-formats#bed
