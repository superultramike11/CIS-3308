function home() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
      <h4>Home</h4>
      <p>
        This is my Home Page Content !!! 
        The home and blog links should work.
      </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele; 
}