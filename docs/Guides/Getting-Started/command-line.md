---
id: command-line
title: Command Line
sidebar_label: Command Line
---

The Command Line Interface (CLI) tools from ScriptManager were written to mirror the tools wrapped in the Graphical User Interface (GUI) version.

With the addition of this interface, the user can *automate* these analyses and a *record* can be kept of previous analyses. Furthermore, when a sequence of ScriptManager tools is required for an analysis, there is no longer a need to babysit the execution of these tools to start the execution of the next tool.

Ultimately this will **save time** and improve **reproducibility** of results.

## Usage

To run tools from the CLI version of ScriptManager, use the following format.

`java -jar /path/to/ScriptManager.jar <TOOLGROUP> <TOOLNAME> <INPUTS> <OPTIONS>`

The `TOOLGROUP` corresponds to one of the tabs in the GUI tool while the `TOOLNAME` corresponds to the specific tool within the `TOOLGROUP` group. Each tool will have its own set of input requirements and options. You will have to rely on the `-h` flag for usage help or the documentation here for the specific tool you wish to use.

:::tip

Look up a full list of tool names and their groups [here][tool-index].

:::

## General Options

The following options are shared by **all** ScriptManager tools.

| Option | Description |
| ------ | ----------- |
| `-h, --help` | Show this help message and exit. |
| `-V, --version` | Print version information and exit. |

### Help Option (`-h`)

At any point in building a command, if you get stuck or are unsure of your options, use the `-h` flag to show options. This can list the available subcommands or parameter and argument options.


## Output Options

There are several ways that ScriptManager can return output when executing its scripts.

### Default filename
Most tools generate a filename based on the input filenames and attempt to mimic the file naming system of the GUI tools.

### Specify Output filename (`-o`)
Many tools allow the user to specify output filenames or output file basenames (`-o`).

When appropriate, some tools check that the parent directory in a filepath exists before attempting to execute. The tool will print messages that let the user know when the filename fails these checks.

### Redirect to STDOUT (`-s`)
Some tools allow the user to stream the output to [standard output][stdout-help] or STDOUT. This is to mimic the function of other tools like Samtools, Bedtools, etc.

Since not all tools support streaming to STDOUT, check the help guide if you're not sure (`-h`).

#### Advantages of streaming:
1. Save on disk space (fewer intermediate files)
2. Potentially speed up command by skipping steps to write intermediate file to disk (save on I/O operations).

:::note
This flag cannot be used in combination with the `-o` flag.
:::

### Examples

For example, if we wanted to run some `COMMANDA` tool and then use the output as an input for the `COMMANDB` tool, there are several ways to run this in a shell script.

+ This first way explicitly saves the intermediate file between commands:
```bash
# Method A -save intermediate files
COMMANDA input.file -o intermediate.file
COMMANDB intermediate.file -o results.file
```

+ Alternatively, we could stream the output of `COMMANDA` to the input of `COMMANDB` using the pipe (`|`) character:
```bash
# Method B -pipe stream
COMMANDA input.file -s | COMMANDB -o results.file
```

+ Yet another option is to redirect (`<`) the stream directly into the positional argument location:
```bash
# Method C -redirect stream
COMMANDB <( COMMANDA input.file -s ) -o results.file
```

<br></br>

More specifically, below shows how these methods would look linking the inputs and outputs of the [GFF to BED][gff-to-bed] and [Tag Pileup][tag-pileup] tools for a user that wants to look at the tag pileup results around the coordinate interval window defined in a GFF file.
```bash
## TASK: Say you want to run TagPileup using data.bam on a GFF-formatted Tup1 peak file when TagPileup expects a BED-formatted input.
# Method A -save intermediate files
java -jar ScriptManager.jar coordinate-manipulation gff-to-bed Tup1_peaks.gff -o intermediate.bed
java -jar ScriptManager.jar read-analysis tag-pileup intermediate.bed data.bam -o RESULTS.composite
# Method B -pipe stream
java -jar ScriptManager.jar coordinate-manipulation gff-to-bed Tup1_peaks.gff -s \
  | java -jar ScriptManager.jar read-analysis tag-pileup - data.bam -o RESULTS.composite
# Method C -redirect stream
java -jar ScriptManager.jar read-analysis tag-pileup \
  <(java -jar ScriptManager.jar coordinate-manipulation gff-to-bed Tup1_peaks.gff -s) \
  data.bam -o RESULTS.composite
```


[stdout-help]:https://linuxhint.com/bash_stdin_stderr_stdout/

[gff-to-bed]:/docs/Tools/coordinate-manipulation/gff-to-bed
[tag-pileup]:/docs/Tools/read-analysis/tag-pileup
