/* global SortableTableUtils, MakeClickSortTable, Utils */

function albumContent() {

    function deleteAlbum(userId, td) {
        
        console.log("to delete user " + userId);

        if (confirm("Do you really want to delete user " + userId + "? ")) { 
            var idToDelete = userId;

            // parameter properties needed for ajax call: url, successFn, and errorId
            ajax("webAPIs/deleteAlbumAPI.jsp?deleteId=" + idToDelete, APISuccess);
            
            function APISuccess(obj) { // function is local to callDeleteAPI
                console.log("successful ajax call");

                // var obj = JSON.parse(httpReq.responseText);  // already done by ajax2...

                // Empty string means sucessful delete. The HTML coder gets to decide how to 
                // deliver the good news.
                if (obj.errorMsg.length === 0) {
                    var msg = "Record " + idToDelete + " successfully deleted. ";
                    console.log(msg);
                    //messageDOM.innerHTML = msg;
                } else {
                    console.log("Delete Web API got this error: " + obj.errorMsg);
                    //messageDOM.innerHTML = "Web API successfully called, but " +
                    //        "got this error from the Web API: <br/><br/>" + obj.errorMsg;
                }
            }

            // get the row of the cell that was clicked 
            var dataRow = td.parentNode;
            var rowIndex = dataRow.rowIndex - 1; // adjust for oolumn header row?
            var dataTable = dataRow.parentNode;
            dataTable.deleteRow(rowIndex);
        }
    }

    var contentDOM = document.createElement("div");
    contentDOM.classList.add("clickSort");
    ajax("webAPIs/listAlbumAPI.jsp", success, contentDOM);

    function success(obj) {

        console.log("listAlbumAPI.jsp AJAX successfully returned the following data");
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
            innerHTML: "Album List ",
            parent: heading
        });
        var img = Utils.make({
            htmlTag: "img",
            parent: heading
        });
        img.src = "icons/insert.png";
        img.onclick = function () {
            // By changing the URL, you invoke the user insert. 
            window.location.hash = "#/albumInsert";
        };

        /* Property names in Web APIs for web_user data: "webUserId", "userEmail", "userPassword", "userPassword2", 
         * "image", "birthday", "membershipFee", "userRoleId", "userRoleType", "errorMsg"   */

        // create userList (new array of objects) to have only the desired properties of obj.webUserList. 
        // Add the properties in the order you want them to appear in the HTML table.  
        var albumList = [];
        for (var i = 0; i < obj.albumList.length; i++) {
            albumList[i] = {}; // add new empty object to array

            albumList[i].album_id = SortableTableUtils.makeNumber(obj.albumList[i].album_id, false);

            albumList[i].album_name = SortableTableUtils.makeText(obj.albumList[i].album_name);
            albumList[i].album_cover = SortableTableUtils.makeImage(obj.albumList[i].album_cover, "10rem");
            albumList[i].album_price = SortableTableUtils.makeNumber(obj.albumList[i].album_price, false);
            albumList[i].album_release_date = SortableTableUtils.makeDate(obj.albumList[i].album_release_date); // true --> format as currency
            albumList[i].album_genre = SortableTableUtils.makeText(obj.albumList[i].album_genre);
            albumList[i].album_author = SortableTableUtils.makeText(obj.albumList[i].album_author);
            albumList[i].album_rating = SortableTableUtils.makeText(obj.albumList[i].album_rating);
            albumList[i].web_user_id = SortableTableUtils.makeNumber(obj.albumList[i].web_user_id, false);
            albumList[i].userEmail = SortableTableUtils.makeText(obj.albumList[i].user_email);

            albumList[i]._Update = SortableTableUtils.makeLink(
                    "<img src='icons/update.png' style='width:1rem' />", // innerHTML of link
                    '#/albumUpdate/' + obj.albumList[i].album_id             // href of link
                    );
            
            albumList[i]._Delete = SortableTableUtils.makeImage("icons/delete.png", '1rem');

            // freeze the webUserId
            const userId = obj.albumList[i].album_id;
            albumList[i]._Delete.onclick = function () {
                deleteAlbum(userId, this);
            };


            //albumList[i].errorMsg = SortableTableUtils.makeText(obj.albumList[i].errorMsg);
        }

        console.log("heading in albumContent on next line");
        console.log(heading);

        //function MakeClickSortTable(objList, sortOrderPropName, sortIcon) {
        var webUserTable = MakeClickSortTable({
            headingDOM: heading,
            objList: albumList,
            initialSortCol: "album_id",
            sortIcon: "icons/sortUpDown16.png"
        });

        contentDOM.appendChild(webUserTable);
    } // end of function success

    return contentDOM;
} // liveUserContent