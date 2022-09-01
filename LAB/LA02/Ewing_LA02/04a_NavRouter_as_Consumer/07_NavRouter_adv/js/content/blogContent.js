function blogContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <h4>My Blog</h4>
      <p>
        This is my blog about some really great JavaScript code that I wrote.
      </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}