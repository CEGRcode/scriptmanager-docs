---
id: tool-index
title: Tool Index (A-Z)
sidebar_label: Tool Index (A-Z)
---
import { PesterDataTable } from "@site/src/components/PesterDataTable";
import { columns, toolIndex, moduleTests } from "./toolIndex.table";

### Tool Index
The full list of ScriptManager tools. It's sortable! Click the headers!

<details>

<summary>Click to see group codes explained</summary>

| Code | Tool Group              | Code | Tool Group              |
|:---:|:-------------------------|:---:|:------------------------:|
|**BF**| BAM Format Converter    |**FU**| File Utilities          |
|**BM**| BAM Manipulation        |**PA**| Peak Analysis           |
|**BS**| BAM Statistics          |**RA**| Read Analysis           |
|**CM**| Coordinate Manipulation |**SA**| Sequence Analysis       |
|**FG**| Figure Generation       | | |

</details>

<PesterDataTable
  columns={columns}
  data={ toolIndex }
/>

