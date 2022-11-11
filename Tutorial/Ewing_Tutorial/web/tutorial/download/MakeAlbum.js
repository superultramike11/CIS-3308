"use strict";
function MakeAlbum(albumObj, styleObj) {
    var container = document.createElement("div");
    container.classList.add("container");

    var albumRating = albumObj.albumRating;

    var ratingButton = document.createElement("button");

    function MakeEle(obj) {
        var album = document.createElement("div");
        album.classList.add("album");

        var albumThumbnail = document.createElement("div");
        albumThumbnail.classList.add("thumbnail");
        
        var albumImage = document.createElement("img");
        albumImage.classList.add("album-img");
        albumImage.src = obj.albumCover;

        var albumInfo = document.createElement("div");
        albumInfo.classList.add("album-info");
        
        var albumText = document.createElement("div");
        albumText.classList.add("text");

        var albumAuthor = document.createElement("p");
        albumAuthor.innerHTML = obj.albumAuthor;

        var albumName = document.createElement("p");
        albumName.innerHTML = obj.albumName;

        albumText.appendChild(albumName);
        albumText.appendChild(albumAuthor);
        albumInfo.appendChild(albumText);
        
        albumThumbnail.appendChild(albumImage);
        albumThumbnail.appendChild(albumInfo);

        //Adds hover effect to the thumbnail
        albumThumbnail.onmouseover = function() {
            albumThumbnail.classList.add(styleObj.style);
        };

        albumThumbnail.onmouseout = function() {
            albumThumbnail.classList.remove(styleObj.style);
        };

        album.appendChild(albumThumbnail);

        // ALL RATING SCRIPTS BELOW
        var rating = document.createElement("div");
        ratingButton = getAlbumRating(albumRating);

        rating.classList.add("rating");
        rating.appendChild(ratingButton);
        album.appendChild(rating);

        // returns a button with the correct styling matching user input
        function getAlbumRating(ratingNum) {
            ratingButton.removeAttribute("class");
            
            ratingButton.innerHTML = ratingNum;
            ratingButton.classList.add("button");
    
            if(ratingNum >= 80) {
                ratingButton.classList.add("good");
            }
            else if(ratingNum >= 60) {
                ratingButton.classList.add("ok");
            }
            else {
                ratingButton.classList.add("bad");
            }
            return ratingButton;
        }
    
        // public function to explictly change the rating of an album
        container.getAlbumRating = function(ratingNum) {
            ratingButton = getAlbumRating(ratingNum);
        };
        return album;
    }
    
    var albumDiv = MakeEle(albumObj);
    container.appendChild(albumDiv);
    return container;
}
