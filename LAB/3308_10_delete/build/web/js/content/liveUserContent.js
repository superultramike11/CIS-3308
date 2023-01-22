function liveUserContent() {
    // invoke a web API passing in userId to say which record you want to delete. 
    // but also remove the row (of the clicked upon icon) from the HTML table -- if Web API sucessful... 
    function deleteUser(userId, td) {
        console.log("to delete user " + userId);

        if (confirm("Do you really want to delete user " + userId + "? ")) {

            // HERE YOU HAVE TO CALL THE DELETE API and the success function should run the 
            // following (delete the row that was clicked from the User Interface).

            // get the row of the cell that was clicked 
            var dataRow = td.parentNode;
            var rowIndex = dataRow.rowIndex - 1; // adjust for oolumn header row?
            var dataTable = dataRow.parentNode;
            dataTable.deleteRow(rowIndex);
            alert("Note: this version of the sample code does NOT actually invoke the delete Web API " +
                    "so the row will reappear when you refresh the page.");
        }
    }

    // **************** ENTRY POINT *****************

    var contentDOM = document.createElement("div");
    contentDOM.classList.add("clickSort");
    ajax("webAPIs/listUsersAPI.jsp", success, contentDOM);
    function success(obj) {

        console.log("listUsersAPI.jsp AJAX successfully returned the following data");
        console.log(obj);

        // Remember: getting a successful ajax call does not mean you got data. 
        // There could have been a DB error (like DB unavailable). 
        if (obj.dbError.length > 0) {
            contentDOM.innerHTML += "Database Error Encountered: " + obj.dbError;
            return;
        }

        var heading = Utils.make({
            htmlTag: "h2",
            innerHTML: "Web User List ",
            parent: contentDOM
        });


        // Added after making zip file for fall 2021. 
        // Might have to add a div to hold any possible error message (like error from ajax call, or 
        // cannot delete a record because it has other records pointing to it).

        /* Property names in Web APIs for web_user data: "webUserId", "userEmail", "userPassword", "userPassword2", 
         * "image", "birthday", "membershipFee", "userRoleId", "userRoleType", "errorMsg"   */

        // create userList (new array of objects) to have only the desired properties of obj.webUserList. 
        // Add the properties in the order you want them to appear in the HTML table.  
        var userList = [];
        for (var i = 0; i < obj.webUserList.length; i++) {
            userList[i] = {}; // add new empty object to array

            userList[i].User_Id = SortableTableUtils.makeNumber(obj.webUserList[i].webUserId, false);

            userList[i].User_Credentials = SortableTableUtils.makeText(obj.webUserList[i].userEmail + "<br/>&nbsp; PW (to test Logon): " +
                    obj.webUserList[i].userPassword);
            userList[i]._Image = SortableTableUtils.makeImage(obj.webUserList[i].image, "5rem");
            userList[i].Birthday = SortableTableUtils.makeDate(obj.webUserList[i].birthday);
            userList[i].Membership_Fee = SortableTableUtils.makeNumber(obj.webUserList[i].membershipFee, true);
            userList[i].Role = SortableTableUtils.makeText(obj.webUserList[i].userRoleId + "&nbsp;" +
                    obj.webUserList[i].userRoleType);

            userList[i]._Delete = SortableTableUtils.makeImage("icons/delete.png", '1rem');

            // freeze the webUserId
            const userId = obj.webUserList[i].webUserId;
            userList[i]._Delete.onclick = function () {
                deleteUser(userId, this);
            };

            // Remove this once you are done debugging...
            userList[i].Error_Msg = SortableTableUtils.makeText(obj.webUserList[i].errorMsg);

        }
        var heading = "";
        var webUserTable = MakeClickSortTable(heading, userList, "User_Id", "icons/sortUpDown16.png");

        contentDOM.appendChild(webUserTable);
    } // end of function success

    return contentDOM;
} // liveUserContent