---
id: compress-files
title: "Compress/Decompress Files"
sidebar_label: "Compress/Decompress Files (Gzip)"
---

<!--![ChrNameConverter](/../static/icons/File_Utilities/ConvertChrNames_square.svg)-->

Compress files to help with limited storage issues and faster reading/writing of files.

<img src={require('/../static/md-img/File_Utilities/CompressFileWindow.png').default} style={{width:50+'%'}}/><img src={require('/../static/md-img/File_Utilities/DecompressFileWindow.png').default} style={{width:50+'%'}}/>

This is particularly useful when working with human data that often involves working with a large number of sites.

### File input

File formats of any kind may be uploaded to the tool since an MD5 sum calculation is agnostic to file formats. However, the file won't be compressed by much more if its already in a compressed format (e.g. a binarized format like [BAM][bam-format]) and cannot be decompressed if not already compressed using the gzip compression strategy.

### Output files

The output will be the same filename as the input but the `.gz` extension appended/stripped accordingly.


## Command Line Interface

_CommandLine tools already exist for this function. This tool only exists as a GUI wrapper in ScriptManager._

Please see the [gzip tool][gzip-original].

[gzip-original]:https://www.gnu.org/software/gzip/
