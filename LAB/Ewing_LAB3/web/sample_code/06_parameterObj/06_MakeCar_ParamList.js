function MakeCarParamList(condition, price) {

    var carObj = document.createElement("div");
    
    // Link the styling of this object to the styles that
    // start with ".car" which (if you followed the CSS
    // naming convention) are found in file: car.css.
    carObj.classList.add("car");
    
    // The above two lines of code create a div like this 
    // (that you could have typed directly using HTML):
    //     <div class="car"></div>

    carObj.innerHTML = "Car condition: " + condition + "<br/> price: " +
            formatCurrency(price);

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    return carObj;
}