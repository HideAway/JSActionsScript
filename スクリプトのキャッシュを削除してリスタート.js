// ==JSActionsScript==
// @name 		  スクリプトのキャッシュを削除してリスタート.js
// @description    Firefoxのスクリプトのキャッシュを削除してリスタートします。
// @compatibility  Firefox 忘れた
// @author         HideAway
// @version        1.0.0.2012/02/20
// ==/JSActionsScript==

(function(){
	Components.classes["@mozilla.org/xre/app-info;1"].getService(Components.interfaces.nsIXULRuntime).invalidateCachesOnRestart();
	
	var AppStartup = Components.classes['@mozilla.org/toolkit/app-startup;1'].getService(Components.interfaces.nsIAppStartup);
	AppStartup.quit(Components.interfaces.nsIAppStartup.eForceQuit | Components.interfaces.nsIAppStartup.eRestart)
})();
