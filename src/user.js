// ==UserScript==
// @name            Google Search Sidebar
// @namespace       jmln.tw
// @version         $inline('pkg:version')
// @description     $inline('pkg:description')
// @author          $inline('pkg:author,name')
// @license         $inline('pkg:license')
// @homepage        $inline('pkg:homepage')
// @supportURL      $inline('pkg:bugs,url')
// @include         https://www.google.tld/search?*
// @include         https://www.google.tld/webhp?*
// @compatible      firefox
// @compatible      chrome
// @compatible      opera
// @run-at          document-start
// ==/UserScript==

(function () {
  var style = document.createElement('style')
  style.id = 'GM_sidebar'
  style.type = 'text/css'
  style.textContent = `
    $inline('inject.css|indent:4|trim')
  `

  document.documentElement.appendChild(style)
})()
