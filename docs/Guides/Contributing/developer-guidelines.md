---
id: developer-guidelines
title: General Developer Notes
sidebar_label: General Developer Notes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welcome to the ScriptManager developer wiki!

This guide is designed to generally orient developers that plan to contribute to ScriptManager and establish some project-specific standards. There are some helpful checklists at the end for current developers.

Quick Links:
- [👨‍🦲 Picard Documentation][picard-javadocs]
- [Picocli Documentation][picocli]
- [SDK Man Documentation][sdkman-docs]
- [🛣️ Release Roadmap][release-roadmap]
- [🐘 Gradle Documentation][gradle]
- [Eclipse IDE][eclipse-ide]
- [Lambda functions][lambda-tutorial] - we want to be using these more

## ScriptManager Design Principles

There are several principles to keep in mind during development, especially for new developers.
- A single built ScripManager JAR file should run consistently across any OS with Java installed.
- Every tool should have a graphical interface and every tool not based on an existing command line tool should have a command line interface.
- The code for each tool should be isolated into a script object, a window object, and a command line object and organized into their appropriate packages in the `src/` library and use the local `util` and `objects` packages with [Picocoli][picocli], [HTSJDK][htsjdk], and [JFree][jfree] packages as appropriate.

While there are plenty of developer tools available for Java developers, this page is provides some recommendations based on Olivia's setup as a starting point for new developers.

:::info
** BAM vs BigWig (and other genome-track formats)**

ScriptManager has been built to favor BAM files over BigWig and other genome track formats in genomic data processing. There are a number of reasons for this, including...
- **More Information:**
  - BAM files are more information-rich and much of this information gets lost during conversion to BigWigs
  - <u>Example1:</u> Insert-size information is lost during conversion so BAM files have the advantage of filtering by insert sizes. Think DNA accessibility assays filtering for mono-nucleosome-sized fragments.
  - <u>Example2:</u> SAM flag information is also lost so you need to go back to the BAM file to obtain this subset (think primary/secondary alignments, concordant ves non-concordant alignments, mate-pair is mapped, etc)
  - <u>Example3:</u> Sequence clipping and nucleotide mis-match information is also lost during conversion (think SNPs/sequence variation information)
- **Reproducibility:**
  - BAM headers will often, if not always, track all the commands used to sort, filter, and manipulate the alignments to get the current file you are working with. The '@PG' tag shows all the programs run to generate the current BAM file, including flag options and arguments.
  - This is important for backtracking how a file was generated, even if you "randomly picked-up it up off the street."
  - BigWig files do not track processing steps so you are relying on whoever made the file to track and communicate all the processing and normalization steps to make the BigWig.

This is a long explanation for why BigWigs are not a part of our lab standards but of course, this is our preference and other labs may disagree.

We recognize the popularity of the BigWig format and we are in the process of building support for the file format in ScriptManager. It is also important to note that the efficiency advantages of BigWigs were specifically designed for scrolling through a genome browser (i.e. random-access at many zoom levels). However, this efficiency may not hold true for certain kinds of processing and analysis.
:::

## Java Development Tools
We write exclusively in Java or Java-compiled languages without any operating-system specific packages (to maintain portability across machines).

### Java Development Toolkit (JDK)

<Tabs>

  <TabItem value="sdkman-install" label="SDKMAN!" default>

<div class="tutorial-img-flow-container">
  <img src={require('./img/sdkman-logo.png').default} style={{width:40+'%',}} />
</div>
<br></br>

Olivia recommends installing Java using [SDKMAN!][sdkman] for convenient flipping between Java and Gradle versions and releases. While ScriptManager is currently developed to the Java 8 SE standard, it is good practice to check for forward and backward compatibility between Java versions.

We are constantly monitoring new Java releases and developing according to a standard that ensures consistent behavior across Java versions. It is important that ScriptManager can at least *execute* across Java versions from the earliest supported version to the latest. See [Gradle section below][gradle-based-build] below for more information on Java versions for building.

  </TabItem>

  <TabItem value="direct-install" label="Direct Download">

<div class="tutorial-img-flow-container">
  <img src={require('./img/adoptium-website.png').default} style={{width:40+'%',}} />
</div>

Alternatively, you can download the appropriate [OpenJDK for Java 11][temurin-11] for your OS and follow the instructions on the website to install Java for your system.

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
</Tabs>



### Integrated Development Environment (IDE) - Eclipse

<br></br>
<div class="tutorial-img-flow-container">
  <img src={require('./img/Eclipse2014_RGB.png').default} style={{width:40+'%',}} />
</div>

We recommend using [Eclipse][eclipse] to write Java code for ScriptManager because it supports both [Gradle][gradle] (see below) and [WindowBuilder][window-builder] for convenient building of JAR files and [Swing-type][java-swing] graphical interface development.

### Gradle

<div class="tutorial-img-flow-container">
  <img src={require('./img/GradleBuildLogo.png').default} style={{width:60+'%',}} />
</div>

With the help of plugins, Gradle can do all sorts of tasks to help manage and maintain the project.
- compile classes
- build JAR files
- run JUnit tests
- compile JavaDocs documentation

#### Compile/Build
Compiling Java classes could be handled manually, but for large projects like this, it is cumbersom. We let Gradle juggle the process of compiling, retrieving dependencies, and building the final JAR file with the help of Gradle plugins. The dependencies we use are a mix of downloaded JAR files (`scriptmanager/lib/*.jar` and dependencies retrieved directly from [Maven][maven]).

To compile an executable JAR file from source, run:
```
./gradlew build
```

The ScriptManager jar file will be created in the `build/libs` directory. As long as you have this file, you can move it wherever you want and do whatever you want with the rest of the ScriptManager files (even delete them). If you ever lose the JAR file, you can regenerate it by rerunning the Gradle build command in while in the `scriptmanager` directory.

Gradle will need to be updated periodically to support *building* on later Java versions.

:::caution
Please note that your machine's **Java version** may not be compatible our supported Gradle version for compiling. The JAR can be *executed* on most versions but compiling the code may require installing an older version of Java (see SDK Man).

Compiling with Gradle has an upper Java version limit depending on the version of Gradle used. See this [table][gradle-version-compatibility] for more information on version compatibility. Check [Java version history][java-version-history] LTS versions for a sense of which Java versions should be supported.

If you are a user, not a developer, consider directly downloading the JAR executable from the [release page][releases] if these steps aren't working.
:::


#### Shadow plugin
We are using the [shadow plugin][gradle-shadow] to manage building fat-jars (jar with dependencies included). This makes building the fat jars a little easier to manage including more control over which libraries are included in the fat-jar and simplified syntax.

The build runtime should be faster too with less I/O due to the direct inclusion of dependencies

>Shadow utilizes JarInputStream and JarOutputStream to efficiently process dependent libraries into the output jar without incurring the I/O overhead of expanding the jars to disk

There are features that may allow us to shrink the storage footprint of the executable jar. (`minimize()`)

>Shadow can automatically remove all classes of dependencies that are not used by the project, thereby minimizing the resulting shadowed JAR.

:::caution
Minimize is commented out for now because it was noted during testing that BAM Correlation (BAM Statistics) wrote an empty PNG and threw a ClassNotFound type exception when output statistics was checked. This was fixed by commenting out the `minimize()` method so we suspect that the default logic of dependency inclusion does not work for this project. The fix was not immediately apparent so [this issue][minimize-issue] is tabled for now.
:::

#### Update JavaDocs
Gradle can compile the JavaDocs from the source code using the following command:
```
./gradlew javadoc
```

The resulting HTML files are written to `build/docs/javadoc/`. To update the [api documentation][sm-javadocs], move the contents of this directory to the `scriptmanager-docs` repo under `static/javadocs`. Then commit the changes and deploy the latest version according to the [website README][docs-readme].

### Github
Our code is all hosted on Github and we push updates and changes to the remote repo regularly. There are plenty of tutorials out there if you are unfamiliar with Github's version control system. It is recommended you learn the basic commands before pushing changes to this repo.

#### Clone to get latest dev version (do once)
Open your terminal and move to the directory where you want to install scriptmanager and type the following command to download all the source code so you can build the executable JAR file from scratch.
```bash
git clone https://github.com/CEGRcode/scriptmanager
```

Then follow the [build instructions][compilebuild] or run:
```
cd scriptmanager
./gradlew build
```

#### Update your local repository (get the latest)
If you ever need to get the latest code from the Github repo, just navigate to the `scriptmanager` directory and run the following commands in the terminal to update and then re-build your JAR executable.
```bash
cd scriptmanager
git pull
./gradlew build
```


#### Github Desktop
If you are pushing a lot of changes to the project or working with many projects in Github, it is recommended that you use the GUI application for managing repositories, branches, and commits. [Install it here.][gh-desktop]

### UI/UX Design Mockups
For designing or redesigning new GUI windows, Olivia uses Adobe Illustrator by loading a screenshot of an existing tool and then tracing it for the elements that she wants to use. There are many design applications out there ([octopus.do][octopus-do], [Figma][figma], etc..) so use whatever is convenient for you. Keep [Swing][java-swing] component option limits in mind during design.


## The Code Structure (Packages)
```
scriptmanager/src/
  |--main
  | |--java
  | |  |--scriptmanager
  | |    |--charts
  | |    |--cli
  | |    |--main
  | |    |--objects
  | |    |--scripts
  | |    |--util
  | |    |--window_interface
  | |--resources
  |   |--miniRedX.png
  |   |--..other images will go here. Flat structure for now..
  |--test
    |--java
    | |--scriptmanager
    |   |--..JUnit object source goes here..
    |--resources
      |--..test file inputs and expected outputs go here..
```

### window_interface
There exists at least one window object for every tool. They are organized by tool groups (`scripts` and `cli` are similarly organized). The main `<ToolName>Window.java` object extends the JFrame class and manages the inputs from the user. Many tools also have a `<ToolName>Output.java` object which pops up a new window when the tool executes to show the user updates on the progress of the tool, stats on the output, or, for the tools with visual outputs, to display the generated charts/images.

### main
The main package includes the main class that parses subcommands to call the various CLI classes or initialize the main GUI (JFrame) class.

### cli
The structure of these classes is generally very simple. See [__Picocli documentation__][picocli] and check existing CLI class examples for more info.

### scripts
It is important that these classes do not extend JFrame. Since they can used by cli classes, we need to make sure there are no screen-rendering elements that would throw errors if run from the command line. This set of classes isolate out the job of taking inputs and performing the computations.

### charts
These classes are for making chart objects that visually display the data. They can be displayed on the monitor or saved as image files by the various tool objects.

### objects
The most used class is the `ToolDescriptions.java` which statically stores all the tool descriptions as Strings for easy updates and changes to the descriptions. It also stores the ScriptManager version so make sure that this is incremented appropriately.

### util
These include classes with generic methods that are used across multiple tools.


## New Tool Checklist

New tools should be written on branches. A pull request to the master branch can then be submitted and a reviewer will review the code and accept the merge.

1. Create __new issue ticket__ to associate commits with
    * [ ] spec out the tool input/output/parameters
    * [ ] decide on a tool group to add it to
1. Write __tests__ for Github Actions (automatic testing)
    * [ ] Write data with small storage footprint
    * [ ] Capture a variety of edge cases (different parameter combinations, adding extra input files as needed))
    * [ ] Write tests into shell script for Github Actions
1. `objects.ToolDescriptions.java`
    * [ ] Add __tool description__ String (used by main window and CLI help)
1. `scripts.MyTool.java`
    * [ ] Make sure that the __script object__ can be called and executed in a headless way (unit tests and CLI run)
    * [ ] Every tool should return a command line string for logging purposes.
1. `cli.MyToolCLI.java`
    * [ ] __Skip if re-implementing existing command line tool for the GUI__
    * [ ] Use [Picocli][picocli] library to parse command line options
    * [ ] Create script object and call as appropriate
    * [ ] Return appropriate exit code
    * [ ] Import tool description from `ToolDescriptions` and add to appropriate help documentation fields
        * [ ] Test parameter constraints
1. `window_interface.MyToolWindow.java`
    * [ ] Extends JFrame (see Java Swing documentation)
    * [ ] For particularly complex tool inputs, it may help to __mock-up__ the window in your favorite design application.
1. `window_interface.MyToolOutput.java` (Optional)
    * [ ] Some tools do not have an output frame but rather pop up a simple `JDialog` window indicating the operation has completed.
    * [ ] Tools that have bigger outputs, esp figures/images/chargs, should create an output frame
    * [ ] Extends JFrame

1. `main.ScriptManagerGUI.java`
    * [ ] Add collapsible panel to appropriate tool group in tool three
    * [ ] Import title, description, and other appropriate tool information
1. `main.ScriptManager.java`
    * [ ] Create subcommand call for CLI (extend local abstract classs)
1. Update Docusaurus (documentation)
    * [ ] add screenshots and descriptions of input
    * [ ] use warnings and note boxes as appropriate
    * [ ] add to tool index, tool-group, and file-formats pages
    * [ ] make sure page renders appropriately
1. Write __Galaxy wrapper__
1. Pull your changes into master! 🎉

:::tip
The easiest way to write a new tool is to copy-paste the code from a similarly-structured tool and edit!
:::

<!-- ### Example: NewToolName
Check out [this commit][newtool-commit] to see an example of what a new tool addition will look like.
 -->

## SM Version Incrementing Checklist

The [Release Roadmap][release-roadmap] on Github organizes issue tickets and creates a projection of which issues should be addressed for each release. This helps when writing up the release notes and tagging all the appropriate issues as well as visually tracks what tasks are left to do in each release. When we are ready for a release, the following checklist should be followed to ensure that we update everything together without missing anything.


* Check [Release Roadmap][release-roadmap]
  * [ ] Make sure all issues are closed and pulled into master
  * [ ] Remove/archive column so next version is first to display
* Docusaurus updates
  * [ ] Make sure new tools have their own pages that thoroughly describe what they do
  * [ ] Affected tools have been updated accordingly (check commit log for list of tools)
  * [ ] Make sure `last updated` timestamps are appropriate/correct
  * [ ] Increment version across docs
* Testing
  * [ ] Ideally some degree of user testing on the development version has been performed (ask the bench scientists).
  * [ ] Make sure latest Github Actions build ran successfully
* `build.gradle`
  * [ ] Increment version (`version = ___`) and strip `dev` from JAR filename
* `src/objects/ToolDescriptions.java`
  * [ ] Increment ScriptManager version constant (used by CLI tools, propogation will happen automatically)
* Github version tag
  * [ ] Commit & pull request, review into master
  * [ ] Create version release & add version tag to the commit id
  * [ ] Compile JAR and save with source tar archive on release page
  * [ ] Write up summary for the version tag commit including links to resolved/relevant issue tickets
* Switch naming back to `dev`
  * [ ] `build.gradle` file should switch naming JAR to use `dev`

[java-version-history]:https://en.wikipedia.org/wiki/Java_version_history
[gradle-version-compatibility]:https://docs.gradle.org/current/userguide/compatibility.html

[sdkman]:https://sdkman.io/install
[sdkman-docs]:https://sdkman.io/
[anaconda-install]:https://docs.anaconda.com/anaconda/install/index.html
[temurin-11]:https://adoptium.net/temurin/releases?version=11
[conda-openjdk]:https://anaconda.org/conda-forge/openjdk
[eclipse]:https://www.eclipse.org/ide/
[eclipse-ide]:https://www.eclipse.org/eclipseide/
[gradle]:https://docs.gradle.org/current/userguide/userguide.html
[gradle-shadow]:https://imperceptiblethoughts.com/shadow/
[maven]:https://maven.apache.org/
[gh-desktop]:https://desktop.github.com/

[figma]:https://www.figma.com/
[octopus-do]:https://octopus.do/
[window-builder]:https://www.eclipse.org/windowbuilder/

[java-swing]:https://docs.oracle.com/javase/tutorial/uiswing/index.html
[htsjdk]:https://github.com/samtools/htsjdk
[jfree]:https://github.com/jfree/jfreechart
[picard-javadocs]:https://broadinstitute.github.io/picard/javadoc/picard/index.html
[picocli]:https://picocli.info/
[lambda-tutorial]:https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html

[minimize-issue]:https://github.com/CEGRcode/scriptmanager/issues/116
[docs-readme]:https://github.com/CEGRcode/scriptmanager-docs
[release-roadmap]:https://github.com/CEGRcode/scriptmanager/projects/6
[releases]: https://github.com/CEGRcode/scriptmanager/releases

[compilebuild]: /docs/Guides/Contributing/developer-guidelines#compilebuild
[sm-javadocs]:/javadocs/
[gradle-based-build]:/docs/Guides/Contributing/developer-guidelines#gradle
