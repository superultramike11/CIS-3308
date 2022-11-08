"use strict";
function albumObjectContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
        <h2>My Albums</h2>
            <p>
                TEST
            </p>
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}