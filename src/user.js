// ==UserScript==
// @name            Google Search Sidebar
// @namespace       jmln.tw
// @version         $inline('pkg:version')
// @description     $inline('pkg:description')
// @author          $inline('pkg:author,name')
// @license         $inline('pkg:license')
// @homepageURL     $inline('pkg:homepage')
// @supportURL      $inline('pkg:bugs,url')
// @include         /^https:\/\/(?:ipv4|ipv6|www)\.google\.(?:[a-z\.]+)\/search\?(?:.+&)?q=[^&]+(?:&.+)?$/
// @exclude         /^https:\/\/(?:ipv4|ipv6|www)\.google\.(?:[a-z\.]+)\/search\?(?:.+&)?tbm=lcl(?:&.+)?$/
// @compatible      firefox
// @compatible      chrome
// @compatible      opera
// @run-at          document-end
// @grant           none
// ==/UserScript==

function GM_addStyle (css) {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.textContent = css
  document.head.appendChild(style)
  return style
}

GM_addStyle(`
  $inline('inject.css|indent:2|trim')
`)
