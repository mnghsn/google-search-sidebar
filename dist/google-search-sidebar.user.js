// ==UserScript==
// @name            Google Search Sidebar
// @namespace       jmln.tw
// @version         0.3.9
// @description     A user script and user style to move Google search tools to sidebar.
// @author          Jimmy Lin
// @license         MIT
// @homepage        https://github.com/jmlntw/google-search-sidebar
// @supportURL      https://github.com/jmlntw/google-search-sidebar/issues
// @include         https://www.google.*/search?*
// @include         https://www.google.*/webhp?*
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
  /* CSS Variables
     ========================================================================== */

  :root {
    --user-sidebar-width: 200px;
    --user-sidebar-spacer: 30px;
    --user-sidebar-primary-color: #dd4b39;

    --user-action-menu-spacer: 2px;
    --user-action-menu-background: rgba(0, 0, 0, 0.1);
    --user-action-menu-font-size: 85%;
  }

  /* Search Tools Menu
     ========================================================================== */

  /**
   * Hide "Tools" toggle.
   */

  #hdtb-tls {
    display: none !important;
  }

  /**
   * 1. Make menu container visible.
   * 2. Set the sidebar width.
   * 3. Remove menu container background.
   */

  #hdtbMenus {
    display: block !important; /* 1 */
    position: absolute !important; /* 1 */
    top: 68px !important; /* 1 */
    margin-left: calc(-1 * (var(--user-sidebar-width) - 152px)) !important; /* 1 */
    width: var(--user-sidebar-width); /* 2 */
    background: unset !important; /* 3 */
  }

  /**
   * Remove original menu height.
   */

  #hdtbMenus .hdtb-mn-cont {
    height: 0 !important;
  }

  /**
   * 1. Make dropdowns visible.
   * 2. Add bottom space to each dropdown.
   * 3. Remove dropdown background and shadow.
   * 4. Wrap dropdowns text if too long.
   */
  #hdtbMenus div.EwsJzb {
    display: block !important; /* 1 */
    position: static !important; /* 1 */
  }

  #hdtbMenus div.sAKBe {
    box-shadow: none !important; /* 3 */
    border-radius: 0 !important; /* 3 */
  }

  #hdtbMenus g-menu {
    padding-top: 0 !important; /* 2 */
    padding-bottom: var(--user-sidebar-spacer) !important; /* 2 */
    background: unset !important; /* 3 */
  }

  #hdtbMenus div.znKVS {
    white-space: normal !important; /* 4 */
  }

  /**
   * Hide dropdown toggle by default.
   */
  #hdtbMenus div.rIbAWc {
    display: none !important;
  }

  /**
   * 1. Remove checkmark on selected dropdown items.
   * 2. Emphasize selected dropdown items.
   */
  #hdtbMenus g-menu-item.nvELY {
    background-image: none !important; /* 1 */
    color: var(--user-sidebar-primary-color) !important; /* 2 */
    font-weight: bolder !important; /* 2 */
  }

  /**
   * Align the "Clear" button in the bottom of sidebar.
   */
  #hdtbMenus > span + a.hdtb-mn-hd {
    display: block !important;
    padding: 0 32px !important;
  }

  /**
   * Make result status text ("About xxx,xxx results") visible.
   */

  #extabar div.LHJvCe {
    position: static !important;
    opacity: 1 !important;
  }

  /* Main Content and Footer
     ========================================================================== */

  /**
   * Move main content and footer to the right.
   */

  .appbar,
  .GLcBOb,
  .GyAeWb {
    margin-left: calc(var(--user-sidebar-width) - 152px) !important;
  }

  html[dir="rtl"] .appbar,
  html[dir="rtl"] .GLcBOb,
  html[dir="rtl"] .GyAeWb {
    margin-right: calc(var(--user-sidebar-width) - 152px) !important;
  }

  /**
   * Align the menu on the top of the search results
   */

  .e2tKq {
    display: flex;
    position: relative;
    align-items: flex-start;
    top: 0;
    margin: 0 0 16px 0;
    width: 1065px;
  }

  .Slohld {
    display: flex;
    margin: 1px 4px 1px 0;
    padding-top: 0;
    overflow: hidden;
  }

  .Slohld .MjJo9 {
    padding: 8px 16px;
    border-radius: 20px;
  }

  .e2tKq .BWHSG {
    margin-top: 1px;
    margin-bottom: 1px;
  }

  .e2tKq .BWHSG .XQIMve {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .K20DDe {
    display: flex;
    align-items: flex-end;
    padding: 0 20px 0 0;
    white-space: nowrap;
  }

  .Ub31p .NnvERc.eoNQle {
    margin-right: 10px;
  }

  .s6JM6d .eoNQle img {
    max-height: 48px;
    width: auto;
  }

  /**
   * Align the top carousel when searching movies.
   */

  #kx {
    margin-inline-start: calc(
      var(--user-sidebar-width) + var(--user-sidebar-spacer)
    ) !important;
  }

  /**
   * Align new material icons toolbar.
  */

  #hdtb-msb-vis {
    padding-inline-start: calc(
      var(--user-sidebar-width) - 180px + var(--user-sidebar-spacer)
    ) !important;
  }

  /**
   * Move "People also search for" carousel.
   */

  #extabar div[role="navigation"] {
    padding-inline-start: calc(
      var(--user-sidebar-width) + var(--user-sidebar-spacer)
    ) !important;
  }

  #extabar div.LXqMce {
    margin-left: 0 !important;
  }

  #extabar div.LXqMce:dir(rtl) {
    margin-right: 0 !important;
  }

  #extabar div[role="list"] {
    padding-left: 0 !important;
  }

  #extabar div[role="list"]:dir(rtl) {
    padding-right: 0 !important;
  }

  /* Action Menu
     ========================================================================== */

  /**
   * Hide action menu toggle.
   */

  .action-menu > a {
    display: none !important;
  }

  /**
   * 1. Make action menu visible.
   * 2. Reset action menu position.
   * 3. Remove decoration styles from action menu.
   */

  .action-menu .action-menu-panel {
    display: inline-block !important; /* 2 */
    visibility: visible !important; /* 1 */
    position: relative !important; /* 2 */
    top: calc(var(--user-action-menu-spacer) * -1) !important; /* 2 */
    border: 0 !important; /* 3 */
    box-shadow: none !important; /* 3 */
    background: transparent !important; /* 3 */
  }

  /**
   * 1. Make action menu items display inline.
   * 2. Reset menu items styles.
   */

  .action-menu .action-menu-item {
    display: inline-block !important; /* 1 */
    margin: 0 var(--user-action-menu-spacer) !important; /* 2 */
    border: 1px solid rgba(255, 255, 255, 0.2) !important; /* 2 */
    background: var(--user-action-menu-background) !important; /* 2 */
  }

  /**
   * Make action menu items smaller.
   */

  .action-menu a.fl {
    padding: var(--user-action-menu-spacer)
      calc(var(--user-action-menu-spacer) * 2) !important;
    font-size: var(--user-action-menu-font-size) !important;
  }

  /* Third-Party Compatibility
     ========================================================================== */

  /**
   * Align Evernote Similar Search block.
   */

  #simSearchFrame {
    margin-left: calc(-1 * (var(--user-sidebar-width) / 2)) !important;
  }
`)
