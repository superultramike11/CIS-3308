"use strict";

// This function sorts the array of objects in "list" by object property "byProperty". 
// Think of list as an I/O parameter (gets changed by the fn).

function jsSort(objList, byProperty) {

    if (!objList || !objList[0]) {
        var message = "Cannot sort. Need an ObjList that has at least one element";
        console.log(message);
        alert(message);
        return;  // early return -- dont try to sort.
    }

    var obj = objList[0];
    if (obj[byProperty].sortOrder === null) {
        var message = "Cannot sort on this type of column (maybe it's an image type column).";
        console.log(message);
        alert(message);
        return;  // early return -- dont try to sort.
    }

    // q and z are just elements in the array and the funcction has to return negative or positive or zero 
    // depending on the comparison of q and z.
    // using JS associative array notation (property name char string used inside square brackets 
    // as it if was an index value). 

    objList.sort(function (q, z) {  // in line (and anonymous) def'n of fn to compare list elements. 
        // the function you create is supposed to return positive (if first bigger), 0 if equal, negative otherwise.

        // using JS associative array notation, extract the 'byProperty' property from the two
        // list elements so you can compare them.
        var qVal = q[byProperty].sortOrder;
        var zVal = z[byProperty].sortOrder;


        var c = 0;
        if (qVal > zVal) {
            c = 1;
        } else if (qVal < zVal) {
            c = -1;
        }
        console.log("comparing " + qVal + " to " + zVal + " is " + c);
        return c;
    });

} // jsSort