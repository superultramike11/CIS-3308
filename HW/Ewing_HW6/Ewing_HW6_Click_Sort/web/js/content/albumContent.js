/* global processUserData, SortableTableUtils, MakeClickSortTable */
"use strict";
function albumContent() {

    var ele = document.createElement("div");
    ele.innerHTML = content;

    ajax("webAPIs/listAlbumAPI.jsp", processUserData, ele);

    function processUserData(obj) {

        var albumsList = obj.albumList;
        var db = obj.dbError;
        if(!(db === "")){
            ele.innerHTML = obj.dbError;
            return;
        }

        //check for db error, if it is not null then append it to ele and return to screen. 
        console.log(albumsList);
        var newAlbumList = []; // empty array
            // modify properties (image and price) of the array of objects so it will look 
            // better on the page.
            for (var i = 0; i < albumsList.length; i++) {
                newAlbumList[i] = {}; // i-th element of array is empty object.
                newAlbumList[i].album_id = SortableTableUtils.makeNumber(albumsList[i].album_id); 
                newAlbumList[i].album_name = SortableTableUtils.makeText(albumsList[i].album_name);
                newAlbumList[i].album_cover = SortableTableUtils.makeImage(albumsList[i].album_cover, "10rem");
                newAlbumList[i].album_price = SortableTableUtils.makeNumber(albumsList[i].album_price); // true --> format as currency
                newAlbumList[i].album_release_date = SortableTableUtils.makeDate(albumsList[i].album_release_date);
                //newAlbumList[i].album_genre = SortableTableUtils.makeText(albumsList[i].album_genre);
                newAlbumList[i].album_author = SortableTableUtils.makeText(albumsList[i].album_author);
                //newAlbumList[i].album_rating = SortableTableUtils.makeText(albumsList[i].album_rating);
                //newUserList[i].webUserId = SortableTableUtils.makeNumber(userList[i].webUserId);
                newAlbumList[i].web_user_id = SortableTableUtils.makeNumber(albumsList[i].web_user_id);
                newAlbumList[i].errorMsg = SortableTableUtils.makeText(albumsList[i].errorMsg);
            }

            ele.appendChild(MakeClickSortTable("Album Entries", newAlbumList, "albumList", "icons/sortUpDown16.png")); 
    }
    
    return ele;
}