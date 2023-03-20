---
id: atacseq-tutorial
title: "ATAC-seq Tutorial"
sidebar_label: "ATAC-seq Tutorial"
---

<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

## Download ScriptManager (v0.14):
The current version of ScriptManager is available for download **[here][github-v14]**. Make sure you have [Java installed][java-install].

The file `ScriptManager-v0.14.jar` should be placed someplace locally accessible. For example on Mac OS on the Desktop (Permissions will need to be accepted) or someplace in your home directory (`Macintosh_HD:Users/userID/ScriptManager`)


## Download Data
https://www.encodeproject.org/experiments/ENCSR868FGK/

## Steps

### 1. Open Script manager

### 2. Generate BAI Index File
#### 2a. Navigate to BAM Manipulation -> BAM-BAI Indexer
#### 2b. (228,000,000 tags processed)

### 3. BAM File Statistics
#### 3a. Navigate to BAM Statistics -> BAM Statistics
#### 3b. Select Output Statistics

### 4. Resize the BED file
#### 4a. Navigate to Coordinate File Manipulation -> Expand BED File
#### 4b. Expand to 5000 bp from the center

### 5. Generate the tag pileup
#### 5a. Navigate to Sequence Read Analysis -> Tag Pileup
#### 5b. Load BED & BAM files
#### 5c. Use Full Fragment in the top right, select CDT and Output GZIP in bottom left
#### Save figure as PNG

### 6. Sort BED file by CDT file
#### 6a. Navigate to Coordinate File Manipulation -> Sort BED by CDT
#### 6b. Load BED & CDT file from Tag Pileup
#### 6c. Change expansion size to 1000 from the center
#### 6d. Select base output file name for sorted BED & CDT files

### 7. Generate Heatmap
#### 7a. Navigate to Figure Generation -> Two-Color Heat Map
#### 7b. Load the sorted CDT file
#### 7c. For color, select custom, and change the contrast threshold to percentile value
#### 7d. Check Output Heatmap to output figure to a local directory
