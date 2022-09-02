function infoContent () {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
      <h2>My Info</h2>
      <p>
        This is my home address *** at ******** road
        just kidding! why would I ever give you that info?
      </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele; 
}