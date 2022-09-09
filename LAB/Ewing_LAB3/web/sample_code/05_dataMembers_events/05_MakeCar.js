function MakeCar(theCondition, thePrice) {

    var carObj = document.createElement("div");

    // link the styling of carObj to all the styles that start with ".car"
    // which (if following our CSS naming convention) are all in file: "car.css"
    carObj.classList.add("car");

    // first use of “.condition” creates custom (public) property in carObj.
    carObj.condition = theCondition;

    // price is private (a variable declared normally in the MakeCar function)
    var price = thePrice;

    // create an Info div where condition and price can be displayed
    // (separate from the rest of the UI, e.g., input boxes and buttons)
    var carInfo = document.createElement("div");
    carObj.appendChild(carInfo);

    // private method display, populates the Info div with current values for 
    // condition and price. 
    var display = function ( ) {
        carInfo.innerHTML = "Car condition: " + carObj.condition + "<br/> price: " +
                formatCurrency(price);
    };

    // Condition setter method (public)
    carObj.setCondition = function (newCondition) {
        carObj.condition = newCondition;
        display(); // show updated property on the page
    };

    // public method to modify price 
    carObj.changePrice = function (changeRate) {
        var n = Number(changeRate);
        console.log("changing price by this rate " + n);
        price = price * (1 + n);
        display(); // show updated price on the page
    };

    // Create User Interface for setting condition
    var conditionButton = document.createElement("button");
    conditionButton.innerHTML = "Change Condition to: ";
    carObj.appendChild(conditionButton);

    var newConditionInput = document.createElement("input");
    carObj.appendChild(newConditionInput);

    conditionButton.onclick = function () {
        carObj.setCondition(newConditionInput.value);
    };

    carObj.appendChild(document.createElement("br")); // new line

    // create User interface for changing price
    var priceButton = document.createElement("button");
    priceButton.innerHTML = "Change price by factor: ";
    carObj.appendChild(priceButton);

    var priceFactor = document.createElement("input");
    carObj.appendChild(priceFactor);

    priceButton.onclick = function () {
        carObj.changePrice(priceFactor.value);
    };

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    display(); // show initial properties on the page 
    return carObj;
}