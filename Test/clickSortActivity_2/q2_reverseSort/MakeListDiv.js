"use strict";

function MakeListDiv(list, order) {

    // alpha sort of array (containing character strings)
    // sort is case insensitive.
    list.sort(function (c, d) {  // in line (and anonymous) def'n of fn to compare list elements. 
        // this function must return positive (if first bigger), 0 if equal, negative otherwise.

        var cUpper = c.toUpperCase();
        var dUpper = d.toUpperCase();

        var comparison = 0; // means cUpper and dUpper are the same
        if (cUpper > dUpper) {
            comparison = 1; // means cUpper is larger
        } else if (cUpper < dUpper) {
            comparison = -1; // means dUpper is larger
        }

        console.log("comparing " + cUpper + " to " + dUpper + " is " + comparison);
        return comparison;
    });

    var div = document.createElement('div');
    
    for (var i=0; i<list.length; i++) {
        var para = document.createElement("p");
        para.innerHTML = list[i];
        div.appendChild(para);
    }

    return div;
}