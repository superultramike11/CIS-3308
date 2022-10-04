function clickSortContent() {

    var content = `
        <style>
            p {
                margin-left: 1.5rem;
            }
            .flexContainer {
                display: flex;
                flex-direction: row;
            }
            .clickSort {
                margin-left: 1rem;
                margin-right: 1rem;
            }
        </style>
        <h3>Using function MakeTableBasic in a Project using the NavRouter</h3>
        <p>
            To incorporate a clickSort component into a project that uses the NavRouter, 
            your project must include these three files (and index.html must reference them): 
        </p>
            <ul>
                <li>
                    js/components/clickSortContent.js (generates content), 
                </li>
                <li>
                    js/reusable/clickSort.js (creates the clickSort component - 
                    but in my example I used MakeTableBetter, an earlier example), and 
                </li>
                <li>
                    clickSort.css (styles the clickSort component). 
                </li>
            </ul>
        <p>
            And index.html must specify a new "click sort" entry into the Navigation 
            bar returned by the NavRouter.
        </p>
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content; // the HTML code specified just above...
    var flexBox = document.createElement("div");
    flexBox.classList.add('flexContainer'); // see styling in this file, above...
    ele.appendChild(flexBox);

    // Pretend this is the list of objects you may have gotten fromm a third party AJAX call...
    // The last two objects are there to see how it handles "weird" objects.
    var carList = [
        {make: "Chevrolet", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/white_audi.png", condition: "fair", price: 21000, available: "1/2/2022"},
        {make: "Buick", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/buick.png", condition: "great", price: "$15,000", available: "12/27/2021"},
        {make: "Ford", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/ford.png", condition: "poor", price: "x5000", available: "3/4/2020"},
        {image: "http://cis-linux2.temple.edu/~sallyk/pics_car/default_car.png"},
        {}
    ];

    // Create an array of objects (to be passed into MakeTableBetter) where all object properties 
    // are HTML "td" tags (table data), nicely formatted and aligned according to data type.
    var newCarList = []; // empty array
    for (var i = 0; i < carList.length; i++) {
        newCarList[i] = {}; // i-th element of array is empty object.

        // you can ignore the NetBeans yellow warning bubbles that say "TableUtils is not declared". 
        // as long as you have an external script tag for TablUtils.js from your index.html page.
        newCarList[i].Make = TableUtils.makeText(carList[i].make);
        newCarList[i].Image = TableUtils.makeImage(carList[i].image, "10rem");
        //newCarList[i].Condition = TableUtils.makeText(carList[i].condition);
        newCarList[i].Price = TableUtils.makeNumber(carList[i].price, true); // true --> format as currency
        newCarList[i].Available = TableUtils.makeDate(carList[i].available);
    }

    var csObj = MakeTableBetter("Cars For Sale", newCarList);

    csObj.classList.add("clickSort");
    flexBox.appendChild(csObj);

    var userList = [
        {
            "webUserId": "1",
            "userEmail": "abha@temple.edu",
            "userPassword": "pw",
            "image": "http://cis-linux2.temple.edu/~sallyk/pics_users/abha.jpg",
            "birthday": "11/22/2001",
            "membershipFee": "",
            "userRoleId": "3",
            "userRoleType": "Member",
            "errorMsg": ""
        },
        {
            "webUserId": "2",
            "userEmail": "dominic@temple.edu",
            "userPassword": "p",
            "image": "http://cis-linux2.temple.edu/~sallyk/pics_users/dominic.jpg",
            "birthday": "",
            "membershipFee": "$1,000.99",
            "userRoleId": "3",
            "userRoleType": "Member",
            "errorMsg": ""
        },
        {
            "webUserId": "228",
            "userEmail": "ed@temple.edu",
            "userPassword": "pass",
            "image": "http://cis-linux2.temple.edu/~sallyk/pics_users/ed.jpg",
            "birthday": "01/02/2003",
            "membershipFee": "$123.45",
            "userRoleId": "3",
            "userRoleType": "Member",
            "errorMsg": ""
        },
        {
            "webUserId": "346",
            "userEmail": "jamie@gmail.com",
            "userPassword": "tasos",
            "image": "http://cis-linux2.temple.edu/~sallyk/pics_users/jamie.jpg",
            "birthday": "02/02/1997",
            "membershipFee": "$9.99",
            "userRoleId": "1",
            "userRoleType": "Admin",
            "errorMsg": ""
        },
        {
            "webUserId": "349",
            "userEmail": "karl@gmail.com",
            "userPassword": "tasos",
            "image": "http://cis-linux2.temple.edu/~sallyk/pics_users/karl.jpg",
            "birthday": "02/02/1997",
            "membershipFee": "$9.99",
            "userRoleId": "1",
            "userRoleType": "Admin",
            "errorMsg": ""
        },
        {
            "webUserId": "352",
            "userEmail": "sallyk@gmail.com",
            "userPassword": "tasos",
            "image": "http://cis-linux2.temple.edu/~sallyk/pics_users/sallyk.jpg",
            "birthday": "02/02/1997",
            "membershipFee": "$9.99",
            "userRoleId": "1",
            "userRoleType": "Admin",
            "errorMsg": ""
        }
    ];

    // build new list as we want the fields to appear in the HTML table
    // we can decide the order we want the fields to appear (first property defined is shown first)
    // we can combine, decide to exclude etc...
    var newUserList = [];
    for (var i = 0; i < userList.length; i++) {
        newUserList[i] = {};

        // you can ignore the NetBeans yellow warning bubbles that say "TableUtils is not declared". 
        // as long as you have an external script tag for TablUtils.js from your index.html page.
        newUserList[i].Image = TableUtils.makeImage(userList[i].image, "5rem");
        newUserList[i].Email = TableUtils.makeText(userList[i].userEmail);
        newUserList[i].Birthdate = TableUtils.makeText(userList[i].birthday);

        // true means format like currency
        newUserList[i].MembershipFee = TableUtils.makeNumber(userList[i].membershipFee);

        //newUserList[i].Role = TableUtils.makeText(userList[i].userRoleId + " " + userList[i].userRoleType);
    }

    var csObj2 = MakeTableBetter("The CIS Club", newUserList);
    csObj2.classList.add("clickSort");
    flexBox.appendChild(csObj2);


//    var carList2 = [
//        {make: "Audi", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/white_audi.png", condition: "fair", price: "$21,000"},
//        {make: "Buick", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/buick.png", condition: "great", price: "$15,000"},
//        {make: "Ford", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/ford.png", condition: "poor", price: 5000}
//    ];
//    csObj2 = MakeClickSortBasic("Cars For Sale", carList2);
//    csObj2.classList.add("clickSort");
//    flexBox.appendChild(csObj2);
    return ele;
}