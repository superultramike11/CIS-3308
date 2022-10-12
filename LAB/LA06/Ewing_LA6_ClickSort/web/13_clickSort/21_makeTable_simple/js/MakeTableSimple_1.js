"use strict";

/* 
 * This code creates an HTML table with only a single row
 * that has column heading values that match the property
 * names within the objList (provided as input parameter).
 */

function MakeTableSimple(obj) {
    
    var csDiv = document.createElement("div");
    csDiv.classList.add("clickSort");

    // Create a new HTML table element (DOM object).
    var table = document.createElement("table");
    csDiv.appendChild(table);
    
    // **** Make Heading Row ****
    // To the HTML table, add a tr (table row) element to hold the headings of our table.
    var headerRow = document.createElement("tr");
    table.appendChild(headerRow);

    // Add (to the table heading row) one th (table heading cell) per property 
    // of the object, using property names as innerHTML.
    for (var propName in obj) {
        var headingCell = document.createElement("th");
        headingCell.innerHTML = propName;
        headerRow.appendChild(headingCell);
    }


    // **** Make A Single Data Row ****
    // To the HTML table, add a tr (table row) element to hold the values in the object. 
    var dataRow = document.createElement("tr");
    table.appendChild(dataRow);

    // Add (to the table data row) one td (table data cell) per property 
    // of the object, using property values as innerHTML.
    for (var propName in obj) {
        var dataCell = document.createElement("td");
        dataCell.innerHTML = obj[propName]; // uses associative array notation.
        dataRow.appendChild(dataCell);
    }
    return csDiv;

}  // MakeTableSimple