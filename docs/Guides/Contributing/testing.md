---
id: testing
title: "Testing"
sidebar_label: "Testing"
---

## Automatic CLI Testing

We use [Github Actions][github-actions] for automatic testing during development. Below is a list of Github Actions workflows and what they do.

### Test build: Java CI with Gradle

[This workflow][java-ci-workflow] tests that the ScriptManager JAR to "matrix test" across three operating systems and two versions of java:
- **Checks:** The project builds successfully across OS and Java versions
- **Trigger:** This workflow kicks off for any pushes to the `main` branch or pull requests to the `main` and `dev` branches
- **Updates:** Periodically check workflow versions to include [latest Java & Gradle][java-gradle-versioning]

|  | Ubuntu (latest) | Windows (latest) | MacOS (latest) |
| - |:--:|:--:|:--:|
| **Java 8 (Temurin)**<br/>_need to confirm Github support for this_ |  👷‍♀️  |  👷‍♀️  | 👷‍♀️ |
| **Java 11 (Temurin)** |  ✅  |  ✅  | ✅ |
| **Java 17 (Temurin)** |  ✅  |  ✅  | ✅ |

Edit `/scriptmanager/.github/workflows/gradle.yml` to make changes to how this workflow is executed. 

### JUnit testing (Gradle)

We build JUnit-style tests for each tool that can be run with the help of [Gradle][gradle-docs].

```
./gradlew test
```


:::warning
🚧 👷‍♀️ **UNDER CONSTRUCTION** 👷‍ 🚧

We have shell scripts for testing that need to be deployed to the Github Actions system and documented here. These need to be converted to JUnit tests after the source code file organization has been restructured.

Execute the commands below after building the `jar` file to run travis-style shell tests.
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
🚧 **UNDER CONSTRUCTION** 🚧

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

[gradle-docs]: /docs/Guides/Contributing/developer-guidelines/#gradle

[github-actions]: https://github.com/features/actions
[java-ci-workflow]:https://github.com/CEGRcode/scriptmanager/actions/workflows/gradle.yml
[java-gradle-versioning]:/docs/Guides/Contributing/developer-guidelines#compilebuild
