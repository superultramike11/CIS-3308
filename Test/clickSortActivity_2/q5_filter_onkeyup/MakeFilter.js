"use strict";

function MakeFilter(charArray) {

    var filterDiv = document.createElement('div');

    var innerDiv = document.createElement("div");
    filterDiv.appendChild(innerDiv);

    var samplePara = document.createElement("p");
    innerDiv.appendChild(samplePara);
    samplePara.innerHTML = `This innerDiv should initially have lots of paragraphs, as many as there are 
            elements in charArray. Once the user types in a search key and clicks Redisplay, 
            only those paragraphs that contain the search key should be shown.`;

    // To create a button: document.createElement("button")
    // To label a button, set its innerHTML. 
    // Here's how to add an onclick event to button myButton:
    //   myButton.onclick = function() {
    //       ...
    //   };

    // To create an input box: document.createElement("input")
    // To access the value from input box myInput, use myInput.value. 

    // Here's how to convert a string to upper case
    //   var upperString = origString.toUpperCase();

    // Here's how to check if one string is included in another string:
    //    if (myString.includes(searchString)) { ... }

    // If the search string is empty (like initial display), be sure to include everything, e.g.: 
    //    if (myString.includes(searchString) || searchString==="") { ... }

    // suppose your input box is called searchInput. To add an event that fires whenever the user types a key:
    // searchInput.onkeyup = function () { ... };

    return filterDiv;
}