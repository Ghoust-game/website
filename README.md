# Prerequisites

* [Hugo](https://gohugo.io/overview/installing/): `brew install hugo`
* [Pygments](http://pygments.org/)


# Getting started

    $ cd src
    $ hugo server --theme=ghoust --buildDrafts

Now you can browse the website on http://localhost:1313


# Sources

* The homepage can be changed in `src/layouts/index.html`
* Pages can be added by creating files in `src/content/page` (see `about.md`)
* Static assets (images, etc) can be added in the directory `src/static`. Everything in this directory will be copied to the root of the production build.


## Changing the Theme (HTML, JS, CSS)

The theme is located in `src/themes/ghoust`. To change CSS/JS, get started with:

    cd src/themes/ghoust
    npm install
    npm run build

The `npm run build` command compiles all the SCSS files into a single .css file, and also combined the javascript files. While developing you might also want to run the file-system watcher with `npm run watch`.

