import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

// Based on https://theochu.com/docusaurus/sortable-tables/
// ----------------------------------------------------------------------------
// Please respect alphabetical (name) order when adding new entries.
// ----------------------------------------------------------------------------
const defaultTool = {
  name: "MyTool",
  group: "MyGroup",
  jfree: false,
  picard: false,
  gui_only: false,
};

// Suspended: gene-track, peak-pair, and similarity-matrix

export const toolIndex = [
  {
    ...defaultTool,
    name: "Aggregate Data",
    group: "RA",
    description: "Compile data from tab-delimited file into matrix according to user-specified metric.",
    command: "-",
    url: "docs/Tools/read-analysis/aggregate-data",
  },
  {
    ...defaultTool,
    name: "BAM Correlation",
    group: "BS",
    description: "Genome-Genome correlations for replicate comparisons given multiple sorted and indexed (BAI) BAM files.",
    command: "-",
    url: "docs/Tools/bam-statistics/bam-correlation",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "BAM Indexer",
    group: "BM",
    description: "For most tools using BAM inputs (both within and without ScriptManager), a BAM index file (.bai) file is required so that the tool can efficiently query the file for alignment records.",
    command: "-",
    url: "docs/Tools/bam-manipulation/bam-indexer",
    picard: true,
  },
  {
    ...defaultTool,
    name: "BAM to bedGraph",
    group: "BF",
    description: "Convert BAM file to bedGraph file",
    command: "-",
    url: "docs/Tools/bam-format-converter/bam-to-bedgraph",
  },
  {
    ...defaultTool,
    name: "BAM to BED",
    group: "BF",
    description: "Convert BAM file to BED file",
    command: "-",
    url: "docs/Tools/bam-format-converter/bam-to-bed",
  },
  {
    ...defaultTool,
    name: "BAM to GFF",
    group: "BF",
    description: "Convert BAM file to GFF file",
    command: "-",
    url: "docs/Tools/bam-format-converter/bam-to-gff",
  },
  {
    ...defaultTool,
    name: "BAM to scIdx",
    group: "BF",
    description: "Convert BAM file to scIDX file",
    command: "-",
    url: "docs/Tools/bam-format-converter/bam-to-scidx",
  },
  {
    ...defaultTool,
    name: "BED to GFF",
    group: "CM",
    description: "Converts BED file to GFF file",
    command: "-",
    url: "docs/Tools/coordinate-manipulation/bed-to-gff",
  },
  {
    ...defaultTool,
    name: "Composite Line Plot",
    group: "FG",
    description: "Generate a Composite Plot PNG from composite data like the output in TagPileup",
    command: "-",
    url: "docs/Tools/figure-generation/composite-plot",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "Cross Correlation",
    group: "BS",
    description: "Calculate optimal tag shift based on ArchTEx implementation from (PMID:22302569)",
    command: "-",
    url: "docs/Tools/bam-statistics/cross-corr",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "DNA shape from BED",
    group: "SA",
    description: "Calculate intrinsic DNA shape parameters given BED file and Genome FASTA file.",
    command: "-",
    url: "docs/Tools/sequence-analysis/dna-shape-bed",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "DNA shape from FASTA",
    group: "SA",
    description: "Calculate intrinsic DNA shape parameters given input FASTA files. Based on Roh's lab DNAshape server data",
    command: "-",
    url: "docs/Tools/sequence-analysis/dna-shape-fasta",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "Expand BED",
    group: "CM",
    description: "Expands input BED file by adding positions to the border or around the center.",
    command: "-",
    url: "docs/Tools/coordinate-manipulation/expand-bed",
  },
  {
    ...defaultTool,
    name: "Expand GFF",
    group: "CM",
    description: "Expands input GFF file by adding positions to the border or around the center",
    command: "-",
    url: "docs/Tools/coordinate-manipulation/expand-gff",
  },
  {
    ...defaultTool,
    name: "Extract FASTA",
    group: "SA",
    description: "Generate FASTA file from indexed Genome FASTA file and BED file. Script will generate FAI index if not present in Genome FASTA folder.",
    command: "-",
    url: "docs/Tools/sequence-analysis/fasta-extract",
  },
  {
    ...defaultTool,
    name: "Filter BED by Proximity",
    group: "PA",
    description: "Filter BED file using user-specified exclusion zone using the score column to determine which peak to retain.",
    command: "-",
    url: "docs/Tools/peak-analysis/filter-bed",
  },
  {
    ...defaultTool,
    name: "Filter PIP-seq",
    group: "BM",
    description: "Filter BAM file by -1 nucleotide. Requires genome FASTA file. Note this program does not index the resulting BAM file and user must use appropriate samtools command to generate BAI.",
    command: "-",
    url: "docs/Tools/bam-manipulation/filter-pip-seq",
  },
  {
    ...defaultTool,
    name: "Four Color Plot",
    group: "FG",
    description: "Generate 4Color sequence plot given FASTA file and user-defined RGB colors.",
    command: "-",
    url: "docs/Tools/figure-generation/four-color",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "GFF to BED",
    group: "CM",
    description: "Converts GFF file format to BED file format",
    command: "-",
    url: "docs/Tools/coordinate-manipulation/gff-to-bed",
  },
  {
    ...defaultTool,
    name: "Two Color Heatmap Plot",
    group: "FG",
    description: "This tool generates a heatmap from a tab-delimited matrix input of numeric values.",
    command: "-",
    url: "docs/Tools/figure-generation/heatmap",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "MD5 Checksum",
    group: "FU",
    description: "A common quality control and security step that everyone should use when downloading files from another source is to compare MD5 checksum values to ensure that the file that was downloaded exactly matches the reported MD5checksum value for the file.",
    command: "-",
    url: "docs/Tools/file-utilities/md5checksum",
  },
  {
    ...defaultTool,
    name: "Merge BAM Replicates",
    group: "BM",
    description: "Merge multiple sorted alignment files, producing a single sorted output file that contains all the input records and maintains the existing sort order.",
    command: "-",
    url: "docs/Tools/bam-manipulation/merge-bam",
    picard: true,
  },
  {
    ...defaultTool,
    name: "Merge Heatmaps",
    group: "FG",
    description: "This tool merges two PNG files into a third PNG file that is an average of each corresponding pair of pixels from the input files.",
    command: "-",
    url: "docs/Tools/figure-generation/merge-heatmap",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "Paired-end Statistics",
    group: "BS",
    description: "Generates Insert-size Histogram statistic (GEO requirement) and outputs BAM Header including alignment statistics and parameters given a sorted and indexed (BAI) paired-end BAM File.",
    command: "-",
    url: "docs/Tools/bam-statistics/pe-stat",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "Align BED to Reference",
    group: "PA",
    description: "Align BED peaks to Reference BED file creating CDT files for heatmap generation",
    command: "-",
    url: "docs/Tools/peak-analysis/peak-align-ref",
  },
  {
    ...defaultTool,
    name: "Random Coordinates",
    group: "PA",
    description: "Generate a coordinate file that tiles (non-overlapping) across an entire genome.",
    command: "-",
    url: "docs/Tools/peak-analysis/rand-coord",
  },
  {
    ...defaultTool,
    name: "Randomize FASTA",
    group: "SA",
    description: "Randomizes FASTA sequence for each input entry",
    command: "-",
    url: "docs/Tools/sequence-analysis/randomize-fasta",
  },
  {
    ...defaultTool,
    name: "Mark (Remove) Duplicates",
    group: "BM",
    description: "This tool locates and tags duplicate reads in a BAM or SAM file, where duplicate reads are defined as originating from a single fragment of DNA.",
    command: "Picard",
    url: "docs/Tools/bam-manipulation/mark-duplicates",
    picard: true,
  },
  {
    ...defaultTool,
    name: "Scale Matrix",
    group: "RA",
    description: "Apply a user-specified scaling factor to tab-delimited matrix data",
    command: "-",
    url: "docs/Tools/read-analysis/scale-matrix",
  },
  {
    ...defaultTool,
    name: "Calculate Scaling Factor",
    group: "RA",
    description: "Calculate the factor as either total tag normalization or normalization of ChIP-seq data with control (PMID:22883957)",
    command: "-",
    url: "docs/Tools/read-analysis/scaling-factor",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "Single-end Statistics",
    group: "BS",
    description: "Output BAM Header including alignment statistics and parameters given any indexed (BAI) BAM File.",
    command: "-",
    url: "docs/Tools/bam-statistics/se-stat",
  },
  {
    ...defaultTool,
    name: "Search Motif",
    group: "SA",
    description: "Search for an IUPAC DNA sequence motif in FASTA files with mismatches allowed",
    command: "-",
    url: "docs/Tools/sequence-analysis/search-motif",
  },
  {
    ...defaultTool,
    name: "Signal Duplication",
    group: "PA",
    description: "Calculate duplication statistics at user-specified regions.",
    command: "-",
    url: "docs/Tools/peak-analysis/signal-dup",
  },
  {
    ...defaultTool,
    name: "Sort BAM",
    group: "BM",
    description: "Sort alignments by leftmost coordinates, or by read name when -n is used. An appropriate @HD-SO sort order header tag will be added or an existing one updated if necessary.",
    command: "-",
    url: "docs/Tools/bam-manipulation/sort-bam",
    picard: true,
  },
  {
    ...defaultTool,
    name: "Sort BED",
    group: "CM",
    description: "Sort a CDT file and its corresponding BED file by the total score in the CDT file across the specified interval",
    command: "-",
    url: "docs/Tools/coordinate-manipulation/sort-bed",
  },
  {
    ...defaultTool,
    name: "Sort BED By Distance",
    group: "PA",
    description: "Sort BED/GFF by distance to another BED/GFF (e.g. peak annotations)",
    command: "-",
    url: "docs/Tools/peak-analysis/sort-by-dis",
  },
  {
    ...defaultTool,
    name: "Sort GFF",
    group: "CM",
    description: "Sort a CDT file and its corresponding GFF file by the total score in the CDT file across the specified interval",
    command: "-",
    url: "docs/Tools/coordinate-manipulation/sort-gff",
  },
  {
    ...defaultTool,
    name: "Tag Pileup",
    group: "RA",
    description: "Pileup 5' ends of aligned tags given BED and BAM files according to user-defined parameters",
    command: "-",
    url: "docs/Tools/read-analysis/tag-pileup",
    jfree: true,
  },
  {
    ...defaultTool,
    name: "Tile Genome",
    group: "PA",
    description: "Generate a coordinate file that tiles (non-overlapping) across an entire genome.",
    command: "-",
    url: "docs/Tools/peak-analysis/tile-genome",
  },
  {
    ...defaultTool,
    name: "Transpose Matrix",
    group: "RA",
    description: "Interchange the rows and columns of a matrix.",
    command: "-",
    url: "docs/Tools/read-analysis/transpose-matrix",
  },
];

function ConditionalDisplay(condition, trueText, falseText) {
  if (condition) {
    return <p> {trueText} </p>;
  }
  return <p> {falseText} </p>;
}

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
  {
    Header: "Group",
    accessor: "group",
    className: "pester-data-table left",
    Cell: ({ cell: { value }, row: { original } }) => (
      <b> {value} </b>
    ),
  },
  {
    Header: "Tool Name",
    accessor: "name",
    className: "pester-data-table left",
    Cell: ({ cell: { value }, row: { original } }) => (
      <a href={useBaseUrl(`${original.url}`)} target="blank" rel="noreferrer noopener">
        {value}
      </a>
    ),
  },
  /* TODO: Uncomment below to include isPicard or isJFree column info.
			- it's useful but not worth widened table real-estate
			- consider adding toggle functions for displaying certain coluns
			- consider adding sequential sort to the table
  */

  //   {
  //     Header: "Type", // isPicard
  //     accessor: "picard",
  //     className: "pester-data-table",
  //     Cell: ({ cell: { value }, row: { original } }) =>
  //       ConditionalDisplay(value, "Picard", ""),
  //     isVisible: true,
  //   },
  //   {
  //     Header: "isJFree",
  //     accessor: "jfree",
  //     className: "pester-data-table",
  //     Cell: ({ cell: { value }, row: { original } }) =>
  //       ConditionalDisplay(value, "JFree", ""),
  //     isVisible: false,
  //   },
  //   {
  //     Header: "isGUIOnly",
  //     accessor: "gui_only",
  //     className: "pester-data-table",
  //     Cell: ({ cell: { value }, row: { original } }) =>
  //       ConditionalDisplay(value, "GUI only", ""),
  //     isVisible: false,
  //   },
  {
    Header: "Description",
    accessor: "description",
    className: "pester-data-table",
  },
];
