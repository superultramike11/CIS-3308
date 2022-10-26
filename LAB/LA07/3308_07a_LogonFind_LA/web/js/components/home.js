function home() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
      <p>
        This is my Home Page Content !!!
      </p>
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}