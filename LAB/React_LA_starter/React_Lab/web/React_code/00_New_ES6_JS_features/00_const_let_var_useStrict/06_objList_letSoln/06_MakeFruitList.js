function MakeFruitList(objList) {

    var container = document.createElement("div");
    container.classList.add("fruitList");

    for (var i = 0; i < objList.length; i++) {
        
        var myDiv = document.createElement("div");
        myDiv.classList.add("objDiv");
        container.appendChild(myDiv);

        // use let to declare heading, so that the scope of heading 
        // is within the for loop, not within the Make function
        let heading = document.createElement("h3");
        heading.innerHTML = objList[i].fruit;
        myDiv.appendChild(heading);

        var myButton = document.createElement("button");
        myButton.innerHTML = "Click For Color";
        myDiv.appendChild(myButton);

        // use let to declare fruitColor with scope within for loop
        // so the correct fruitColor will be used in the button click event.
        let fruitColor = objList[i].color; // custom property

        myButton.onclick = function () {
            heading.style.backgroundColor = fruitColor;
        };

    }

    return container;
} 