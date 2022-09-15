"use strict";
function empContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <h4>My Employees</h4>
      <p>
        Here are some really cool employees. 
      </p>
    `;
     var ele = document.createElement("div");
    ele.innerHTML = content;
    
    // edit this
    var empContainer = document.createElement("div");
    ele.appendChild(empContainer);
    
    var emp1 = MakeEmp( {name: "Ed", title: "Boss", salary: 90000, image: "pics/ed.jpg"} );
    empContainer.appendChild(emp1);
    
    var emp1 = MakeEmp( {name: "Frank", title: "Head Boss", salary: 75000, image: "pics/frank.jpg"} );
    empContainer.appendChild(emp1);
    
    return ele;
}