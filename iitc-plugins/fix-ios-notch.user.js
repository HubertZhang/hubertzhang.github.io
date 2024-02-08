// ==UserScript==
// @author         HubertZhang
// @name           Fix for iOS Notch
// @category       Tweaks
// @version        1.0.0
// @description    Some style adjustments for iOS Notch
// @id             fix-ios-notch
// @namespace      https://hubertzhang.github.io/iitc-plugins
// @updateURL      https://hubertzhang.github.io/iitc-plugins/fix-ios-notch.user.js
// @downloadURL    https://hubertzhang.github.io/iitc-plugins/fix-ios-notch.user.js
// @match          https://intel.ingress.com/*
// @grant          none
// ==/UserScript==

function wrapper(plugin_info) {
  // ensure plugin framework is there, even if iitc is not yet loaded
  if (typeof window.plugin !== 'function') window.plugin = function () { };

  document.getElementById("updatestatus").style = `padding-bottom: env(safe-area-inset-bottom);`

  var screenMargin = document.createElement("style")
  screenMargin.innerHTML = `
.leaflet-left {
  margin-left: env(safe-area-inset-left);
}
.leaflet-right {
  margin-right: env(safe-area-inset-right);
}
.leaflet-bottom {
  margin-bottom: calc(22px + env(safe-area-inset-bottom));
}
`
  document.head.append(screenMargin)
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('(' + wrapper + ')(' + JSON.stringify(info) + ');'));
(document.body || document.head || document.documentElement).appendChild(script);

