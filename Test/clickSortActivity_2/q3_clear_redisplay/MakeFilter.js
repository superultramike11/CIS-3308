"use strict";

function MakeFilter(charArray) {

    var filterDiv = document.createElement('div');

    var innerDiv = document.createElement("div");
    filterDiv.appendChild(innerDiv);
    
    var samplePara = document.createElement("p");
    innerDiv.appendChild(samplePara);
    samplePara.innerHTML = "This innerDiv should have lots of paragraphs, as many as there are " +
            "elements in charArray";

    // To create a button: document.createElement("button")
    // To label a button, set its innerHTML. 
    // Here's how to add an onclick event to button myButton:
    // myButton.onclick = function() {
    //     ...
    // };

    return filterDiv;
}