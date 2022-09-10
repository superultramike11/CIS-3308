"use strict";
function MakeEmpParamObj(params) {
    if (!params) {
        // alert("please check console for error message");
        throw "Error: MakeEmpParamObj requires a parameter object";
    }
    
    var empObj = document.createElement("div");
    
    empObj.name = params.name || "unknown name";
    var title = params.title || "unknown title";
    var salary = params.salary || "call for salary";
    
    var empImg = document.createElement("img");
    empImg.src = params.image;
    empObj.appendChild(empImg);
    
    // link the styling of empObj to all styles that start with ".emp"
    // which are in file emp.css
    empObj.classList.add("emp");
   
    // Create an info div where emp info can be displayed
    var empInfo = document.createElement("div");
    empObj.appendChild(empInfo);
    
    // private method display
    var display = function ( ) {
        empInfo.innerHTML = "Name: " + empObj.name + 
                "<br/> Title: " + title + "<br/> Price: " + formatCurrency(salary);
    };
    
    // private method display MAY NEED TO CHANGE
    function setTitle (newTitle) {
        title = newTitle;
        display(); // show updated property on the page
    };
    
    // setter method (public) for name
    empObj.setName = function(newName) {
        empObj.name = newName;
        display(); // show updated property on the page
    };
    
    // setter method (public) for salary
    empObj.changeSalary = function(changeRate) {
        var n = Number(changeRate);
        console.log("changing salary by this rate: " + n);
        salary = salary * (1 + n);
        display(); // show updated price on the page
    };
    
    // Create User interface for setting name
    var nameButton = document.createElement("button");
    nameButton.innerHTML = "Change name to: ";
    empObj.appendChild(nameButton);
    
    var newNameInput = document.createElement("input");
    empObj.appendChild(newNameInput);
    
    nameButton.onclick = function () {
        empObj.setName(newNameInput.value);
    };
    
    empObj.appendChild(document.createElement("br")); // new line
    
    // Create user interface for setting title
    var titleButton = document.createElement("button");
    titleButton.innerHTML = "Change title to: ";
    empObj.appendChild(titleButton);
    
    var newTitleInput = document.createElement("input");
    empObj.appendChild(newTitleInput);
    
    titleButton.onclick = function () {
        setTitle(newTitleInput.value);
    };
    
    empObj.appendChild(document.createElement("br")); // new line
    
    // Create user interface for modifiying the salary
    var salaryButton = document.createElement("button");
    salaryButton.innerHTML = "Scale salary to: ";
    empObj.appendChild(salaryButton);
    
    var salaryFactor = document.createElement("input");
    empObj.appendChild(salaryFactor);
    
    salaryButton.onclick = function () {
        empObj.changeSalary(salaryFactor.value);
    };
    
    // private function
    function formatCurrency(num) {
        if(isNaN(num)) {
            return num;
        } else {
            var numNum = parseFloat(num);
            return numNum.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
        }
    }
    
    display(); // show inital properties on the page
    return empObj;
}