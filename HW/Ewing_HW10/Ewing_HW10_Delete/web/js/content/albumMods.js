/* global Utils, MakeEditArea */

var albumMods = {}; // Update Solutioin Spring 2022

(function () {  // This is an IIFE, an immediately executing function.

    var fields = [
        {
            fieldName: "album_id",
            prompt: "Album ID"
        },
        {
            fieldName: "album_name",
            prompt: "Album Name"
        },
        {
            fieldName: "album_cover",
            prompt: "Album Cover"
        },
        {
            fieldName: "album_price",
            prompt: "Album Price"
        },
        {
            fieldName: "album_release_date",
            prompt: "Album Release Date"
        },
        {
            fieldName: "album_genre",
            prompt: "Album Genre"
        },
        {
            fieldName: "album_author",
            prompt: "Album Author"
        },
        {
            fieldName: "album_rating",
            prompt: "Album Rating"
        },
        {
            fieldName: "web_user_id",
            prompt: "Web User Id"
        },
        {
            fieldName: "user_email",
            prompt: "User_email"
        }
    ];

    var component = document.createElement("div");

    // call reusable function to make an edit area component
    var userEditArea = MakeEditArea({
        areaTitle: "Will Get Changed...",
        fieldDefn: fields
    });
    component.appendChild(userEditArea);

    function callDeleteAPI() {

        var messageDOM = document.getElementById("message");

        messageDOM.innerHTML = ""; // blank out any old message

        var idToDelete = document.getElementById("inputId").value;

        // parameter properties needed for ajax call: url, successFn, and errorId
        ajax("webAPIs/deleteUserAPI.jsp?deleteId=" + idToDelete, APISuccess, messageDOM);

        function APISuccess(obj) { // function is local to callDeleteAPI
            console.log("successful ajax call");

            // var obj = JSON.parse(httpReq.responseText);  // already done by ajax2...

            // Empty string means sucessful delete. The HTML coder gets to decide how to 
            // deliver the good news.
            if (obj.errorMsg.length === 0) {
                var msg = "Record " + idToDelete + " successfully deleted. ";
                console.log(msg);
                messageDOM.innerHTML = msg;
            } else {
                console.log("Delete Web API got this error: " + obj.errorMsg);
                messageDOM.innerHTML = "Web API successfully called, but " +
                        "got this error from the Web API: <br/><br/>" + obj.errorMsg;
            }
        }
    }

    // This function gets a web_user record (by id) then places that data into the Edit UI. .
    albumMods.update = function (album_id) {

        userEditArea.areaTitle.innerHTML = "Update Album";
        userEditArea.blankInputs();
        userEditArea.button.innerHTML = "Update Save";
        userEditArea.formMsg.innerHTML = ""; // wipe out any old message

        console.log("album.update called with album_id " + album_id);

        // get the web user record with the given album_id
        ajax("webAPIs/getAlbumByIdAPI.jsp?albumId=" + album_id, gotRecordById, userEditArea.formMsg);

        // albumObj is the output of getAlbumByIdAPI.jsp
        function gotRecordById(albumObj) {
            userEditArea.writeDbValuesToUI(albumObj);
        } // gotRecordById


        userEditArea.button.onclick = function () { // Update Save

            // collect all the user input values into an object. 
            var userInputObj = userEditArea.getDataFromUI();

            // find the user role selected from the select tag (and put it into userInputObj).
            //var roleSelect = userEditArea["web_user_id"].inputTd.getElementsByTagName("select")[0];
            //userInputObj.web_user_id = roleSelect.options[roleSelect.selectedIndex].value;

            // convert userInputObj to JSON and URL encode (turns space to %20), 
            // so server does not reject URL for security reasons.
            var urlParams = encodeURIComponent(JSON.stringify(userInputObj));
            console.log("Update Save URL params: " + urlParams);

            ajax("webAPIs/updateAlbumAPI.jsp?jsonData=" + urlParams, reportUpdate, userEditArea.formMsg);

            function reportUpdate(jsErrorObj) {

                userEditArea.writeErrorObjToUI(jsErrorObj);

                // jsErrorObj is a StringData object full of error messages 
                // (using same field names). 

                if (jsErrorObj.errorMsg.length === 0) { // success
                    userEditArea.formMsg.innerHTML = "Record successfully updated. ";
                } else {
                    userEditArea.formMsg.innerHTML = jsErrorObj.errorMsg;
                }
            }
        }; //updateSave submit button

        return component;

    }; // end of webUsers.update

}());  // end of the IIFE