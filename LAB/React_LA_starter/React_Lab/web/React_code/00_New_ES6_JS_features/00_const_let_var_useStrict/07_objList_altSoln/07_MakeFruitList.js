function MakeFruitList (objList) {

    function MakeDiv (obj) {
        
        var myDiv = document.createElement("div");
        myDiv.classList.add("objDiv");

        var heading = document.createElement("h3");
        heading.innerHTML = obj.fruit;
        myDiv.appendChild(heading);

        var myButton = document.createElement("button");
        myButton.innerHTML = "Click For Color";
        myDiv.appendChild(myButton);

        myButton.onclick = function () {
            heading.style.backgroundColor = obj.color;
            alert("and I still know object properties like \n" +
                    "fruit is " + obj.fruit + " and \n" +
                    "color is " + obj.color);
        };
        return myDiv;
    }

    // ***** Entry Point *****
    var container = document.createElement("div");
    container.classList.add("fruitList");

    for (var i = 0; i < objList.length; i++) {
        container.appendChild(MakeDiv(objList[i]));
    }

    return container;
} 