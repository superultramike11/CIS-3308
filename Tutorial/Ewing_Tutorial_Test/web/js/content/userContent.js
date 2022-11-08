/* global processUserData, SortableTableUtils, MakeClickSortTable */
"use strict";
function userContent() {

    var ele = document.createElement("div");
    ele.innerHTML = content;

    ajax("webAPIs/listUsersAPI.jsp", processUserData, ele);

    function processUserData(obj) {

        var userList = obj.webUserList;
        var db = obj.dbError;
        if(!(db === "")){
            ele.innerHTML = obj.dbError;
            return;
        }

        //check for db error, if it is not null then append it to ele and return to screen. 
        console.log(userList);
        var newUserList = []; // empty array
            // modify properties (image and price) of the array of objects so it will look 
            // better on the page.
            for (var i = 0; i < userList.length; i++) {
                newUserList[i] = {}; // i-th element of array is empty object.
                newUserList[i].webUserId = SortableTableUtils.makeNumber(userList[i].webUserId); 
                newUserList[i].userEmail = SortableTableUtils.makeText(userList[i].userEmail);
                //newUserList[i].userPassword = SortableTableUtils.makeText(userList[i].userPassword);
                newUserList[i].image = SortableTableUtils.makeImage(userList[i].image, "10rem");
                newUserList[i].birthday = SortableTableUtils.makeDate(userList[i].birthday);
                newUserList[i].membershipFee = SortableTableUtils.makeNumber(userList[i].membershipFee, true); // true --> format as currency
                newUserList[i].userRoleId = SortableTableUtils.makeNumber(userList[i].userRoleId);
                //newUserList[i].userRoleType = SortableTableUtils.makeText(userList[i].userRoleType);
                newUserList[i].errorMsg = SortableTableUtils.makeText(userList[i].errorMsg);
            }

            ele.appendChild(MakeClickSortTable("User entries", newUserList, "webUserId", "icons/sortUpDown16.png")); 
    }
    
    return ele;
}