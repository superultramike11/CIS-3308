function MakeCar(name, condition, price, imgURL) {

    var carObj = document.createElement("div");
    carObj.classList.add("car"); // link returned object to ".car" styling
    // that (if you followed our css naming convention) is in file: "car.css"
    // Notice car.css has more complexity, styling sub-elements of the car.

    // Create h3 DOM element to hold the name
    var carHeader = document.createElement("h3");
    carHeader.innerHTML = name;
    carObj.appendChild(carHeader);

    // Create p DOM element to hold condition and price
    var carInfo = document.createElement("p");
    carInfo.innerHTML =
            "  Condition: " + condition +
            "  <br/>" +
            "  Price: " + formatCurrency(price);
    carObj.appendChild(carInfo);
    
    // create img DOM element and set it's src attribute
    var carImg = document.createElement("img");
    carImg.src = imgURL;
    carObj.appendChild(carImg);
    
    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    return carObj;
}