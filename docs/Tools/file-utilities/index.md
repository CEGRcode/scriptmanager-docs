---
id: index
title: File Utilities
sidebar_label: File Utilities
---

Miscellaneous GUI wrappers for common file utilities (e.g. checksums, compression, and yeast genome conversion)

| Tool Name | Input | Output | Description |
| ------------- | ------------- | ------------- | ------------- |
| [`md5checksum`][md5checksum] | * | [TXT][txt-format] | Calculate MD5 checksum for an input file. |
| [`convert-bed-genome`][chrname-converter] | [BED][bed-format] | [BED][bed-format] | Convert BED coordinate files between the standard SGD roman numeral chromosome names to the legacy SacCer3_cegr arabic numeral chromosome names.. |
| [`convert-gff-genome`][chrname-converter] | [GFF][gff-format] | [GFF][gff-format] | Convert GFF coordinate files between the standard SGD roman numeral chromosome names to the legacy SacCer3_cegr arabic numeral chromosome names. |
| [`gzip-compress`][compress-files] | * | * | Compress (gzip) files. |
| [`gzip-decompress`][compress-files] | * | * | Decompress (gzip) files. |


[md5checksum]:/docs/Tools/file-utilities/md5checksum
[chrname-converter]:/docs/Tools/file-utilities/chrname-converter
[compress-files]:/docs/Tools/file-utilities/compress-files

[bed-format]:/docs/Guides/Getting-Started/file-formats#bed
[gff-format]:/docs/Guides/Getting-Started/file-formats#gff
[txt-format]:/docs/Guides/Getting-Started/file-formats#txt
