/* global SortableTableUtils, MakeClickSortTable, Utils */

function albumContent() {

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

            albumList[i]._Update = SortableTableUtils.makeLink(
                "<img src='icons/update.png' style='width:1rem' />", // innerHTML of link
                '#/albumUpdate/' + obj.albumList[i].album_id             // href of link
            );
    
            albumList[i].web_user_id = SortableTableUtils.makeNumber(obj.albumList[i].web_user_id, false);

            albumList[i].userEmail = SortableTableUtils.makeText(obj.albumList[i].user_email);
            
            albumList[i].errorMsg = SortableTableUtils.makeText(obj.albumList[i].errorMsg);
            
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