# ScriptManager Documentation Website

https://pughlab.mbg.cornell.edu/scriptmanager-docs

## Migration from `CEGRcode/scriptmanager` (August 26, 2022)
This website includes all the website-building files for the documentation of [ScriptManager](https://github.com/CEGRcode/scriptmanager). These were originally hosted within the same repository until they were split from the original `CEGRcode/scriptmanager` repository as a standalone repository. These files were migrated from the [892f2fb](https://github.com/CEGRcode/scriptmanager/commit/892f2fb0c9991fac0a60982ecf2c7416a6b0277d) commit.

## Dependencies
Docusaurus is powered by [NodeJS](https://nodejs.org/en). You can set it up with the following [conda](https://anaconda.org/conda-forge/nodejs) command:
```
conda create -n docusaurus -c conda-forge nodejs
```
After creating the environment above (do this once per machine), you can activate the environment anytime using
```
conda activate docusaurus
```

## Contributing

```
|-- scriptmanager-docs
|-- docs
  |-- DocComponents # standard snippets for modular construction of main docs are stored here. Editing these propagates changes to all instantiations of these components
  |-- Guides # content and pages in here are organized under the "General" navbar tab on the website. If you add new pages to this, you need to update `sidebar.js`
    |-- Getting-Started
    |-- Tutorials
    |-- Community
    |-- tool-index.md # together with `toolIndex.table.js`,
  |-- Tools # a markdown file for each tool in scriptmanager is included here (organized by tool group under the "Tool" navbar tab on the website). Unlike Guides/, the sidebar is auto-updated so you do not need to update `sidebar.js` to include new pages
|--

```

## Docusaurus Instructions
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. Use the following commands from within the repo directory (`cd /your/path/to/scriptmanager-docs`).

### Installation
```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve

```
$ npm run serve
```

This command serves the static content from the `build` directory and can be used to check that the site renders properly before deployment.

### Deployment

```
$ USE_SSH=true
$ GIT_USER=<Your GitHub username> GIT_PASS=<Your GitHub personal access token> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
