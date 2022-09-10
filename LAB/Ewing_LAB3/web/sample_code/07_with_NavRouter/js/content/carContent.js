function carContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <h4>My Cars</h4>
      <p>
        Here are some really cool cars. 
      </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;

    var carContainer = document.createElement("div");
    ele.appendChild(carContainer);
    
    var myCarObj = MakeCar("great", 5000);
    carContainer.appendChild(myCarObj);

    var yourCarObj = MakeCar("fair", 2500);
    carContainer.appendChild(yourCarObj);

    return ele;
}