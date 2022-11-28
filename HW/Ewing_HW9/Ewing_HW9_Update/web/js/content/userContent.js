/* global processUserData, SortableTableUtils, MakeClickSortTable, Utils */

function userContent() {

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
            parent: contentDOM
        });
        Utils.make({// don't need reference to this span tag...
            htmlTag: "span",
            innerHTML: "Web User List ",
            parent: heading
        });
        var img = Utils.make({
            htmlTag: "img",
            parent: heading
        });
        img.src = "icons/insert.png";
        img.onclick = function () {
            // By changing the URL, you invoke the user insert. 
            window.location.hash = "#/userInsert";
        };


        /* Property names in Web APIs for web_user data: "webUserId", "userEmail", "userPassword", "userPassword2", 
         * "image", "birthday", "membershipFee", "userRoleId", "userRoleType", "errorMsg"   */

        // create userList (new array of objects) to have only the desired properties of obj.webUserList. 
        // Add the properties in the order you want them to appear in the HTML table.  
        var userList = [];
        for (var i = 0; i < obj.webUserList.length; i++) {
            userList[i] = {}; // add new empty object to array

            userList[i].User_Id = SortableTableUtils.makeNumber(obj.webUserList[i].webUserId, false);

            userList[i].User_Credentials = SortableTableUtils.makeText(obj.webUserList[i].userEmail +
                    "<span style='font-size:0.7rem'><br/>Test Logon with this PW:<br/></span>" +
                    obj.webUserList[i].userPassword);
            userList[i].User_Credentials.style.textAlign = "center";
            userList[i].User_Credentials.style.lineHeight = "1.25rem";

            // last parameter true means add shadow to the image
            userList[i]._Image = SortableTableUtils.makeImage(obj.webUserList[i].image, "5rem", true);
            var img = userList[i]._Image.getElementsByTagName("img")[0];
            img.classList.add("shadow");

            userList[i].Birthday = SortableTableUtils.makeDate(obj.webUserList[i].birthday);
            userList[i].Membership_Fee = SortableTableUtils.makeNumber(obj.webUserList[i].membershipFee, true);
            userList[i].Role = SortableTableUtils.makeText(obj.webUserList[i].userRoleId + "&nbsp;" +
                    obj.webUserList[i].userRoleType);

            userList[i]._Update = SortableTableUtils.makeLink(
                    "<img src='icons/update.png' style='width:1rem' />", // innerHTML of link
                    '#/userUpdate/' + obj.webUserList[i].webUserId             // href of link
                    );

            // Remove this once you are done debugging...
            userList[i].Error_Msg = SortableTableUtils.makeText(obj.webUserList[i].errorMsg);

        }

        console.log("heading in liveUserContent on next line");
        console.log(heading);

        //function MakeClickSortTable(objList, sortOrderPropName, sortIcon) {
        var webUserTable = MakeClickSortTable({
            headingDOM: heading,
            objList: userList,
            initialSortCol: "User_Id",
            sortIcon: "icons/sortUpDown16.png"
        });

        contentDOM.appendChild(webUserTable);
    } // end of function success

    return contentDOM;
} // liveUserContent