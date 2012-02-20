// ==JSActionsScript==
// @name           ATOK_で調べる.js
// @description    GetTextOperaLClick に単語を送信。JSActionsの他にGetTextOperaLClickが必要です。
// @compatibility  Firefox 3.6.6 / Windows , GetTextOperaLClick.exe
// @author         HideAway
// @version        1.0.0.2010/07/13
// ==/JSActionsScript==

(function(){
    if (!_jsaCScript.context.selection) return;

    var exePath = "C:\\Application\\GetTextOperaLClick.exe";
    _jsaCScript.exec(exePath, _jsaCScript.convertCharCodeFrom(_jsaCScript.context.selection,"shift_jis"));

})();