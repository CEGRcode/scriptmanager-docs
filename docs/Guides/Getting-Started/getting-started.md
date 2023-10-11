---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

Welcome to the ScriptManager wiki!

ScriptManager is a tool written in Java for analyzing sequencing data and generating figures.

Both Graphical User Interface (GUI) and Command Line Interface (CLI) execution options are available.

## Install and Set-up
ScriptManager was designed to be easy to set-up and get started. If you are having trouble with these instructions, please let us know so we can update them and fix any bugs that might be causing trouble.

### ☕ Dependencies (just Java!)
ScriptManager is a Java-based tool and has been developed to run using Java versions 8 or higher. Most machines already have Java installed! **So check if you've got it first!**

There are a few ways you can install Java if you don't have it already installed. Feel free to use whatever Java installation method you are most comfortable with:

<Tabs>
  <TabItem value="direct-install" label="Direct Download" default>

<div class="tutorial-img-flow-container">
  <img src={require('./img/adoptium-website.png').default} style={{width:40+'%',}} />
</div>

Download the appropriate [OpenJDK for Java 11][temurin-11] for your OS and follow the instructions on the website to install Java for your system.

  </TabItem>
  <TabItem value="conda-install" label="Anaconda">

<div class="tutorial-img-flow-container">
  <img src={require('./img/anaconda-logo.png').default} style={{width:50+'%',}} />
</div>
<br></br>

If you have [Anaconda][anaconda-install] set up on a Unix/MacOS system, create a [conda][conda-openjdk] environment with Java using the following command:
```
conda install -n my-env -c conda-forge openjdk
```
  </TabItem>

  <TabItem value="sdkman-install" label="SDKMAN!">

<div class="tutorial-img-flow-container">
  <img src={require('./img/sdkman-logo.png').default} style={{width:40+'%',}} />
</div>
<br></br>

**For Developers:** If you are writing code for scriptmanager and need to flip between Java versions to perform testing across different versions and releases, consider using  [SDKMAN!][sdk-notes] (what Olivia does).

  </TabItem>
</Tabs>



### 🫙 Download JAR Executable
We pre-compiled the JAR binary file (same for all operating systems) and made them available for direct download [on Github][github-releases]. This file can be run on any MacOS, Linux, or Windows systems with Java installed.

<Link
  className="button button--primary"
  href="https://github.com/CEGRcode/scriptmanager/releases/download/v0.14/ScriptManager-v0.14.jar">
  Download JAR Executable (v0.14)
</Link>

## Running ScriptManager

### Usage-Graphical User Interface (GUI)

<Tabs>
  <TabItem value="macos" label="MacOS" default>

Depending on your system permissions, you may need to be an administrator to open this for the first time. On Mac systems, this can be done by right-clicking the file and selecting ‘Open’ at the top.

<div class="tutorial-img-flow-container">
  <img src={require('/static/md-img/General/MacOpenSM.png').default} style={{width:40+'%',border:'solid 1px'}} />
</div>

:::caution
Some MacOS systems may not properly open the JAR by simply double-clicking on the JAR file so you may need to open your Terminal window and execute it from the command line by executing the jar file *without any arguments or flags*:

```
java -jar /path/to/ScriptManager.jar
```

If you're not sure how to type the path to ScriptManager, you can type `java -jar ` (end with space) and then drag ScriptManager from Finder into your Terminal window and then press enter.
:::

  </TabItem>
  <TabItem value="linux" label="Linux">

Double-click or right-click the ScriptManager JAR file to start the program.

<div class="tutorial-img-flow-container">
  <img src={require('/static/md-img/General/LinuxOpenSM.png').default} style={{width:40+'%',border:'solid 1px'}} />
</div>


  </TabItem>
  <TabItem value="windows" label="Windows">

Double-click or right-click the ScriptManager JAR file to start the program.

<div class="tutorial-img-flow-container">
  <img src={require('/static/md-img/General/WindowsOpenSM.png').default} style={{width:40+'%',border:'solid 1px'}} />
</div>


  </TabItem>
</Tabs>

Once you see the main tool selection window, you're off to the races!


### Usage-Command Line Interface (CLI)

To run the CLI version of ScriptManager, you must append the two subcommands corresponding to the tool you wish to run and any input arguments and options. The subcommand structure reflects the organization of the GUI tool.

<Tabs>
  <TabItem value="macos-linux" label="MacOS & Linux" default>

```bash
java -jar /path/to/ScriptManager.jar <tool-group> <tool-name> <INPUTS> <OPTIONS>
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```bash
java -jar \path\to\ScriptManager.jar <tool-group> <tool-name> <INPUTS> <OPTIONS>
```

  </TabItem>

</Tabs>

The `<tool-group>` corresponds to one of the tabs in the GUI tool while the `<tool-name>` corresponds to the specific tool within the `<tool-group>` group. Each tool will have its own set of input requirements and options. You will have to rely on the `-h` flag for usage help or read the tool-specific documentation to understand the input options. [Read more here.][cli]


## Getting Help

The help documentation is very useful so at any point in constructing your command you get stuck, use the `-h` flag to see what your options are and what you might be missing.

<!---Read through the tool guide (use `-h` flag if using CLI) to check for parameter restrictions-->
<!---Add FAQs page-->
* For Bugs: please open an issue on [Github][github-repo] with the following info
    * command you ran with a description of the input files. _Note: we may ask you for a copy of the input files later_
    * entire stack trace (error messages that followed execution of the command)
    * version of ScriptManager you're running (use the `-V` flag)
    * Java build with version
    * OS with version you are using


## Singularity

### Build Singularity Image
```
$ cd scriptmanager
$ singularity build --fakeroot scriptmanager.sif scriptmanager.def
```

### Run from Singularity Image
```
$ singularity exec scriptmanager.sif scriptmanager ${command}
```

**Example:**
```
$ singularity exec scriptmanager.sif scriptmanager coordinate-manipulation bed-to-gff BEDFILE.bed -o OUTPUT.gff
```


## Additional Resources
* [List of all tools][tool-index]
* [File format specifications][file-formats]
* Javadoc (🚧 👷‍♀️ **UNDER CONSTRUCTION** 👷‍ 🚧)

[anaconda-install]:https://docs.anaconda.com/anaconda/install/index.html
[temurin-11]:https://adoptium.net/temurin/releases?version=11
[conda-openjdk]:https://anaconda.org/conda-forge/openjdk
[github-releases]:https://github.com/CEGRcode/scriptmanager/releases
[github-repo]:https://github.com/CEGRcode/scriptmanager
[github-v14]:https://github.com/CEGRcode/scriptmanager/releases/download/v0.14/ScriptManager-v0.14.jar


[sdk-notes]:/docs/Guides/Contributing/developer-guidelines#sdkman
[cli]:/docs/Guides/Getting-Started/command-line
[file-formats]:/docs/Guides/Getting-Started/file-formats
[tool-index]:/docs/Guides/tool-index
