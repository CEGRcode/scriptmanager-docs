---
id: tool-index
title: Tool Index (A-Z)
sidebar_label: Tool Index (A-Z)
---
import { PesterDataTable } from "@site/src/components/PesterDataTable";
import { columns, toolIndex, moduleTests } from "./toolIndex.table";


### Tool Index
The full list of ScriptManager tools. It's sortable! Click the headers!

<details> <summary> Click to see group codes explained </summary>


| Code | Tool Group              |
|: --- :|: -------------------- :|
|**BF**| BAM Format Converter    |
|**BM**| BAM Manipulation        |
|**BS**| BAM Statistics          |
|**CM**| Coordinate Manipulation |
|**FG**| Figure Generation       |
|**FU**| File Utilities          |
|**PA**| Peak Analysis           |
|**RA**| Read Analysis           |
|**SA**| Sequence Analysis       |

</details>

<PesterDataTable
  columns={columns}
  data={ toolIndex }
/>

