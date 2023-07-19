module.exports = {
  generalSidebar: [
    {
      type: 'category',
      label: 'Guides',
      link: {type: 'doc', id: "Guides/getting-started"},
      items: [
        "References/file-formats",
        "Guides/command-line",
        "Guides/color-guide",
        "References/tool-index",
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      // link: {type: 'doc', id: "/path/to/doc"},
      items: [
        "Guides/Tutorials/chipexo-tutorial",
        "Guides/Tutorials/genomic-features-tutorial",
        "Guides/Tutorials/genome-tracks-tutorial",
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      // link: {type: 'doc', id: "/path/to/doc"},
      items : [
        "Contributing/developer-guidelines",
        "Contributing/code-snippets",
        "Contributing/testing",
      ],
    },
    {
      type: 'category',
      label: 'Community',
      // link: {type: 'doc', id: "/path/to/doc"},
      items: [
        "Community/code-of-conduct"
      ],
    },
    "Guides/citing-us",
  ],
  toolSidebar: [
    {
      type: 'autogenerated',
      dirName: 'Tools',
    },
  ],
};
