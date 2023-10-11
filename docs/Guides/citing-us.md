---
id: citing-us
title: Citing Us
sidebar_label: Citing Us
---
import { PesterDataTable } from "@site/src/components/PesterDataTable";
import { columns, publications, moduleTests } from "./useInPublications.table";

If you use ScriptManager in your work, you can use the [Lang et al (2022)][pearc-paper] publication or use ScriptManager's unique [RRID:**SCR_021797**][rrid-link].

:::info
We welcome anyone who uses ScriptManager for analysis in their publications to let us know by sending an email to owl8@cornell.edu so we can list it in our showcase of publications below!
:::

### Publications that use ScriptManager
Browse our list of publications that used ScriptManager in their work! You might find some interesting ideas and examples for building out your analysis.

<PesterDataTable
  columns={columns}
  data={ publications }
/>

[pearc-paper]:https://dl.acm.org/doi/abs/10.1145/3491418.3535161
[rrid-link]:https://scicrunch.org/resources/data/record/nlx_144509-1/SCR_021797/resolver?q=SCR_021797%2A&l=SCR_021797%2A&i=rrid:scr_021797
