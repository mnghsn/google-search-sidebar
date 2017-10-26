// ==UserScript==
// @name            Google Search Sidebar
// @namespace       jmln.tw
// @version         $inline('pkg:version')
// @description     $inline('pkg:description')
// @author          $inline('pkg:author,name')
// @license         $inline('pkg:license')
// @homepage        $inline('pkg:homepage')
// @supportURL      $inline('pkg:bugs,url')
// @include         https://www.google.*/search?*
// @include         https://www.google.*/webhp?*
// @include         https://encrypted.google.com/search?*
// @include         https://encrypted.google.com/webhp?*
// @compatible      firefox
// @compatible      chrome
// @compatible      opera
// @run-at          document-start
// @grant           none
// ==/UserScript==

function GM_addStyle (css) {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.textContent = css
  document.documentElement.appendChild(style)
  return style
}

GM_addStyle(`
  $inline('inject.css|indent:2|trim')
`)
