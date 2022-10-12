"use strict";

function MakeDiv (first, second) {

    var div = document.createElement('div');

    div.innerHTML = first;
    
    // to add an onclick function to this div: 
    //   div.onclick = function () {  ... }; 
    
    // Note: first and second are already local varariables and they 
    // retain their values. Each div returned by MakeDiv has its own 
    // values for first and second, due to JS closure.
    
    // To check if two character strings match, use this code:
    // if (stringa === stringb) { ... } 
    
    return div;
}