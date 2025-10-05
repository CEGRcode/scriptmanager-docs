// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ScriptManager',
  tagline: 'Toolbox for analyzing your genomic datasets',
  url: 'https://CEGRcode.github.io',
  baseUrl: '/scriptmanager-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/SM_favicon.png', //ico file was here

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CEGRcode', // Usually your GitHub org/user name.
  projectName: 'scriptmanager-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // path: 'docs',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
//        blog: {
//          showReadingTime: true,
//          // Please change this to your repo.
//          // Remove this to remove the "edit this page" links.
//          //editUrl:
//            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        /*Help docs: https://docusaurus.io/docs/search*/

        // The application ID provided by Algolia
        appId: '696AYXHS16',
  
        // Public API key: it is safe to commit it
        apiKey: '78a35eb6d91e4e141238b9023415d807',
  
        indexName: 'pughlab-mbg-cornell',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
      navbar: {
        title: 'ScriptManager',
        logo: {
          alt: 'ScriptManager Logo',
          src: 'img/SM_favicon.png', //svg file was here
        },
        items: [
          {
            type: 'doc',
            docId: 'Guides/Getting-Started/getting-started',
            position: 'left',
            label: 'General',
          },
          {
            type: 'doc',
            docId: 'Tools/read-analysis/tag-pileup',
            position: 'left',
            label: 'Tools',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'html',
            value: '<a target="\_blank" href="/scriptmanager-docs/javadocs/" alt="API Docs" >JavaDocs</a>',
            position: 'right',
          },
          {
            href: 'https://github.com/CEGRcode/scriptmanager',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Pugh Lab Logo',
          src: 'img/pughlab_logo.svg',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tool Index (A-Z)',
                to: '/docs/Guides/tool-index',
              },
              {
                label: 'File Formats',
                to: '/docs/Guides/Getting-Started/file-formats',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Pugh Lab',
                href: 'https://pughlab.mbg.cornell.edu',
              },
              {
                label: 'Lai Lab',
                href: 'https://williamkmlai.github.io',
              },
            ],
          },
          {
            title: 'Other Tools We Develop',
            items: [
              {
                label: 'ScriptManager',
                href: 'http://pughlab.mbg.cornell.edu/scriptmanager-docs',
              },
              {
                label: 'PEGR',
                href: 'https://github.com/seqcode/pegr',
              },
              {
                label: 'STENCIL',
                href: 'http://pughlab.mbg.cornell.edu/stencil',
              },
              {
                label: 'GenoPipe',
                href: 'http://pughlab.mbg.cornell.edu/GenoPipe-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ScriptManager. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3',
      type: 'text/css',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css',
      type: 'text/css',
      integrity: 'sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==',
      crossorigin: 'anonymous',
    }
  ],
};

module.exports = config;
