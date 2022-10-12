/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
function MakeAlbum(params) {
    if (!params) {
        // alert("please check console for error message");
        throw "Error: MakeAlbum requires a parameter object";
    }
    
    var albumObj = document.createElement("div");
    
    // public variable with default value
    albumObj.albumName = params.albumName || "unknown name";
    // private variable with default value
    var albumLength = params.albumLength || "unknown album length";
    
    // link the style with tag .album
    albumObj.classList.add("album");
    
    // Not sure about this one
    var albumChildObj = document.createElement("footer");
    albumChildObj.classList.add("albumFooter");
    
    // Displays album cover
    var albumImg = document.createElement("img");
    albumImg.src = params.image || "pics/404.jpg";
    albumObj.appendChild(albumImg);
    
    // Create an info div where album info can be displayed
    var albumInfo = document.createElement("div");
    albumObj.appendChild(albumInfo);
    
    // setter method (public) for album length
    albumObj.changeAlbumLength = function(changeAlbumLength) {
        var n = Number(changeAlbumLength);
        console.log("changing salary by this rate: " + n);
        albumLength = albumLength + n;
        display(); // show updated price on the page
    };
    
    // setter method (public) for album name
    albumObj.setAlbumName = function(newAlbumName) {
        albumObj.albumName = newAlbumName;
        display(); // show updated property on the page
    };
    
    // private method display
    var display = function ( ) {
        albumInfo.innerHTML = "Name: " + albumObj.albumName + 
        "<br/> Album Length: " + albumLength + " minutes";
    };
    
    // Create user inteface for setting album name
    var albumNameButton = document.createElement("button");
    albumNameButton.innerHTML = "Change album title to: ";
    albumObj.appendChild(albumNameButton);
    
    var newAlbumNameInput = document.createElement("input");
    albumObj.appendChild(newAlbumNameInput);
    
    albumNameButton.onclick = function() {
        albumObj.setAlbumName(newAlbumNameInput.value);
    };
    
    albumObj.appendChild(document.createElement("br")); // new line
    
    // Create user interface for setting album length
    var albumLengthButton = document.createElement("button");
    albumLengthButton.innerHTML = "Change album length to: ";
    albumObj.appendChild(albumLengthButton);
    
    var newAlbumLength = document.createElement("input");
    albumObj.appendChild(newAlbumLength);
    
    albumLengthButton.onclick = function() {
        albumObj.changeAlbumLength(newAlbumLength.value);
    };
    
    display(); // show inital properties on the page
    return albumObj;
}