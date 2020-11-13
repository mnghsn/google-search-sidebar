# Google Search Sidebar

[![Build Status](https://travis-ci.org/jmlntw/google-search-sidebar.svg?branch=master)](https://travis-ci.org/jmlntw/google-search-sidebar)

A user script and user style to move Google search tools to sidebar.

## Screenshot

![Google Search Sidebar](https://raw.githubusercontent.com/jmlntw/google-search-sidebar/master/screenshot.png)

## Installation

### User Script

Install a user script manager such as [Greasemonkey](http://www.greasespot.net/) or [Tampermonkey](https://tampermonkey.net/) to your browser, then install this user script:

* From **Greasy Fork**: https://greasyfork.org/en/scripts/33245-google-search-sidebar
* From **GitHub**: https://raw.githubusercontent.com/jmlntw/google-search-sidebar/master/dist/google-search-sidebar.user.js

### User Style

Install a user style manager such as [Stylish](https://userstyles.org/help/stylish) to your browser, then install this user style:

* From **Greasy Fork**: https://greasyfork.org/en/scripts/414403-google-search-sidebar
* From **GitHub**: https://raw.githubusercontent.com/jmlntw/google-search-sidebar/master/dist/google-search-sidebar.user.css

## Changelog

* **v0.3.8** (2020-11-13)
  * Fix wrong sidebar width when Google search is opened in the background.
  * Fix carousel overlapping.
* **v0.3.7** (2020-11-11)
  * Fix CSS to match the latest Google Search layout.
* **v0.3.6** (2020-10-23)
  * Restore the compatibility with [Google Search Region](https://github.com/jmlntw/google-search-region)
* **v0.3.5** (2020-10-02)
  * Partially fix for the new Google design.
  * Known Issue: Not work in Google images search.
* **v0.3.4** (2019-10-11)
  * Fix Evernote Similar Search block (WebExtension).
  * Fix new image search results layout.
* **v0.3.3** (2019-06-18)
  * Fix sidebar overlapping in Google Shopping.
  * Fix Wikipedia block position.
  * Fix the new toolbar position.
  * Remove `encrypted.google.com`.
  * Update screenshot image.
* **v0.3.2** (2019-01-04)
  * Bump to the correct version.
* **v0.3.1** (2018-09-11)
  * Update CSS comments.
* **v0.3.0** (2017-10-27)
  * Expand the action menu ("Cached", "Similar" links next to the search result).
  * Refactor the user script.
  * Make the user script and user styles also run in `encrypted.google.com`.
  * Add details comments to CSS.
  * Update screenshot image.
* **v0.2.2** (2017-10-07)
  * Fix syntax error in user script.
* **v0.2.1** (2017-10-07)
  * Fix `www.google.com/webhp` layout.
  * Fix location search result layout.
* **v0.2.0** (2017-09-30)
  * Compatible with Greasemonkey 4 and Violentmonkey.
* **v0.1.2** (2017-09-22)
  * Improve the performance of user script.
  * Fix the image search result page overflowing.
* **v0.1.1** (2017-09-20)
  * Fix the image search result layout.
  * Fix the input field size in "Exact Size" dialog.
  * Add Greasy Fork and Userstyles.org installation links to readme.
* **v0.1.0** (2017-09-16)
  * First release.

## License

Licensed under the **MIT License**.
