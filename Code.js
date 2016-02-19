// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://bluecrx.com/category/tampermonkey/
// @match    http://finnryan.nps.kari.opalsinfo.net/bin/marc21/edit
// @grant        none
// @require https://code.jquery.com/jquery-2.2.0.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function() {
    
    //Add class to same input element, so that mousetrap bindings work
    //Add "mousetrap" CSS class to input element 
    //sfData_14_7     google "javascript add css class to element", sfData_28_7?  maybe sfData_*_*
    //document.getElementByID("sfData").className += " mousetrap";
    
    
    Mousetrap.bind('-', function() { 
        //ID of element to switch holding tab, how to pretend/simulate click on it
        //ID of the input element, and switch focus to it
        //ID google "javascript run element's onclick handler"
    }); 
    
    $(document).bind('keypress', '+', cmdPanel.saveAndExit());
    
    //Mousetrap.bind('+', function() { 
        //document.getElementByID("sfData").className += " mousetrap";
    //    cmdPanel.saveAndExit();
    //});

})();
