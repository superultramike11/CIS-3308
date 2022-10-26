function newFind() {

    var findDiv = document.createElement("div");
    findDiv.classList.add("find");

    /*
    var userIdSpan = document.createElement('span');
    userIdSpan.innerHTML = "Enter Id of Web User: ";
    findDiv.appendChild(userIdSpan);
    
    var userIdInput = document.createElement("input");
    userIdInput.setAttribute("type", "password"); // so it shows dots not characters
    findDiv.appendChild(userIdInput);
    */
    var membershipFeeInput = document.createElement('span');
    membershipFeeInput.innerHTML = "MemberShip Fee > ";
    findDiv.appendChild(membershipFeeInput);
    
    var membershipFeeInput = document.createElement("input");
    membershipFeeInput.setAttribute("type", "password"); // so it shows dots not characters
    findDiv.appendChild(membershipFeeInput);
    
    var birthdayInput = document.createElement('span');
    birthdayInput.innerHTML = " and Birthday < ";
    findDiv.appendChild(birthdayInput);
    
    var birthdayInput = document.createElement("input");
    birthdayInput.setAttribute("type", "password"); // so it shows dots not characters
    findDiv.appendChild(birthdayInput);
    // Note: for this lab activity, you may want to comment out setting the input type to password, 
    // but you will certainly want to apply input type=password to the password text box 
    // when you implement your own log on code.

    var findButton = document.createElement("button");
    findButton.innerHTML = "Find";
    findDiv.appendChild(findButton);

    var msgDiv = document.createElement("div");
    findDiv.appendChild(msgDiv);

    findButton.onclick = function () {

        // You have to encodeURI user input before putting into a URL for an AJAX call.
        // Otherwise, your URL may be refused (for security reasons) by the web server.
        var url = "webAPIs/getUserAlt.jsp?minMembershipFee=" + escape(membershipFeeInput.value) +
              "&maxBirthday=" + escape(birthdayInput.value);  

        console.log("onclick function will make AJAX call with url: " + url);
        ajax(url, processLogon, msgDiv);

        function processLogon(obj) {
            var msg = "";
            console.log("Successfully called the find API. Next line shows the returned object.");
            console.log(obj);
            if (obj.errorMsg.length > 0) {
                msg += "<strong>Error: " + obj.errorMsg + "</strong>";
            } else {
                msg += "<strong>Welcome Web User " + obj.webUserId + "</strong>";
                msg += "<br/> Birthday: " + obj.birthday;
                msg += "<br/> MembershipFee: " + obj.membershipFee;
                msg += "<br/> User Role: " + obj.userRoleId + " " + obj.userRoleType;
                msg += "<p> <img src ='" + obj.image + "'></p>";
            }
            msgDiv.innerHTML = msg;
        }
    };  // onclick function

    return findDiv;
};


// I copy/paste the field names from the JSON file to be 
// sure I have them spelled correctly (and case matters).

/* "webUserId": "110",
 "userEmail": "bri",
 "userPassword": "no",
 "birthday": "",
 "membershipFee": "",
 "userRoleId": "1",
 "userRoleType": "Admin",
 "errorMsg": ""                    
 */