---
id: testing
title: "Testing"
sidebar_label: "Testing"
---

## Automatic CLI Testing

## Testing

:::warning
🚧 👷‍♀️ **UNDER CONSTRUCTION** 👷‍ 🚧

We have shell scripts for testing that need to be deployed to the Github Actions system and documented here.

Execute the commands below after building the `jar` file to test that the file built correctly.
<!---Clean-up test file, write test script, and add to repo-->
<!---Add doc for executing during setup-->
<!---Check java version-->

```bash
cd travis_test
bash test_all.sh
```
:::


## Automatic GUI Testing

:::warning
🚧 👷‍♀️ **UNDER CONSTRUCTION** 👷‍ 🚧

We need to decide on a method for GUI testing and set it up with Github Actions.
:::

## JFree tools

The following tools need to be explicitly tested when making updates to the JFree dependency:
- [ ] Scatter/Line Plot
- [ ] Scaling Factor (NCIS) plots of bin values
- [ ] DNA Shape From BED
- [ ] DNA Shape From FASTA
- [ ] Tag Pileup composite plot
- [ ] MatrixToComposite composite plot
- [ ] Heatmap Chart
- [ ] Bam Correlation
- [ ] 4-color sequence
- [ ] 2-color Heatmap
- [ ] 3-color Heatmap
- [ ] Merge Heatmaps
- [ ] Histogram
- [ ] PE_stats (insert size hist)
- [ ] Render PNG


## Picard Tools
- [ ] Mark Duplicates



## HTSJDK Tools (not Picard)

- [ ] _
