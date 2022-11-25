function MakeFruitList (objList) {

    var container = document.createElement("div");
    container.classList.add("fruitList");

    for (var i = 0; i < objList.length; i++) {
        
        var myDiv = document.createElement("div");
        myDiv.classList.add("objDiv");
        container.appendChild(myDiv);

        var heading = document.createElement("h3");
        heading.innerHTML = objList[i].fruit;
        myDiv.appendChild(heading);

        var myButton = document.createElement("button");
        myButton.innerHTML = "Click For Color";
        myDiv.appendChild(myButton);

        myButton.onclick = function () {
            alert("This does not work because the value of i is now larger \n" +
                    "than the number of elements in objList. Also, \n" + 
                    "'header' (with function scope, not block scope) now \n"+
                    "refers to the last header created, not the i-th one. \n"+
                    "Open the console to see the error message.");
            heading.backgroundColor = objList[i].color;
        };

    }
    // i=3
    return container;
}
