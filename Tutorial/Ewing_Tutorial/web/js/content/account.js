"use strict";
var account = {};

account.login = function () {
    var findDiv = document.createElement("div");
    findDiv.classList.add("find");

    var userIdSpan = document.createElement('span');
    userIdSpan.innerHTML = "Enter email of web user: ";
    findDiv.appendChild(userIdSpan);

    var userIdSpan = document.createElement("input");
    //userIdSpan.setAttribute("type", "password"); // so it shows dots not characters
    findDiv.appendChild(userIdSpan);

    var passIdSpan = document.createElement('span');
    passIdSpan.innerHTML = "Enter pass of web user: ";
    findDiv.appendChild(passIdSpan);

    var passIdSpan = document.createElement("input");
    //passIdSpan.setAttribute("type", "password"); // so it shows dots not characters
    findDiv.appendChild(passIdSpan);

    var loginButton = document.createElement("button");
    loginButton.innerHTML = "login";
    findDiv.appendChild(loginButton);

    var msgDiv = document.createElement("div");
    findDiv.appendChild(msgDiv);

    loginButton.onclick = function () {
        // You have to encodeURI user input before putting into a URL for an AJAX call.
        // Otherwise, your URL may be refused (for security reasons) by the web server.
        var url = "webAPIs/login.jsp?pswd=" + escape(passIdSpan.value) +
                "&email=" + escape(userIdSpan.value);

        console.log("onclick function will make AJAX call with url: " + url);
        ajax(url, processLogon, msgDiv);

        var loginMsg = document.createElement('span');
        loginMsg.innerHTML = "You have been logged in";
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

account.getProfile = function () {
    var msgDiv = document.createElement("div");
    msgDiv.classList.add("find");
    
    var url = "webAPIs/getProfile.jsp";
    console.log("function will make AJAX call with url: " + url);
    ajax(url, processProfile, msgDiv);

    var profileMsg = document.createElement('span');
    profileMsg.innerHTML = "Got Profile";
    function processProfile(user) {
        var msg = "";
        if (user.errorMsg === "Welcome") {
            msg += "<strong>Welcome Web User " + user.webUserId + "</strong>";
            msg += "<br/> Birthday: " + user.birthday;
            msg += "<br/> MembershipFee: " + user.membershipFee;
            msg += "<br/> User Role: " + user.userRoleId + " " + user.userRoleType;
            msg += "<p> <img src ='" + user.image + "'></p>";
        } else {
            msg += "<strong>You need to logged in to view a profile</strong>";
        }
        msgDiv.innerHTML = msg;
    }
    return msgDiv;
};

account.logoff = function () {
    var logOffDiv = document.createElement("div");
    logOffDiv.classList.add("find");
    var url = "webAPIs/logoff.jsp";
    logOffDiv.innerHTML = ajax(url, processLogOff, logOffDiv);
    function processLogOff(user) {
        var msg = "";
        if (user.errorMsg.length > 0) {
            msg += "<strong>Successfully logged off</strong>";
        } else {
            msg += "<strong>Logoff failed!</strong>";
        }
        logOffDiv.innerHTML = msg;
    }
    return logOffDiv;

    /*
     var findDiv = document.createElement("div");
     findDiv.classList.add("find");
     
     var loginButton = document.createElement("button");
     loginButton.innerHTML = "login";
     findDiv.appendChild(loginButton);
     
     var msgDiv = document.createElement("div");
     findDiv.appendChild(msgDiv);
     
     loginButton.onclick = function () {
     // You have to encodeURI user input before putting into a URL for an AJAX call.
     // Otherwise, your URL may be refused (for security reasons) by the web server.
     var url = "webAPIs/logoff.jsp";
     
     console.log("onclick function will make AJAX call with url: " + url);
     ajax(url, processLogon, msgDiv);
     
     var loginMsg = document.createElement('span');
     loginMsg.innerHTML = "You have been logged in";
     function processLogon(obj) {
     var msg = "";
     console.log("Successfully called the find API. Next line shows the returned object.");
     console.log(obj);
     if (obj.errorMsg.length > 0) {
     msg += "<strong>" + obj.errorMsg + "</strong>";
     } else {
     msg += "<strong>Logoff successful</strong>";
     }
     msgDiv.innerHTML = msg;
     }
     };  // onclick function
     return findDiv;
     */
};