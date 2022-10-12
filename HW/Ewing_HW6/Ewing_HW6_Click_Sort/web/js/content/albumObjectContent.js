"use strict";
function albumObjectContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
        <h2>My Albums</h2>
            <p>
                This page is a collection of my albums on M RECORDS
            </p>
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content;

    var albumContainer = document.createElement("div");
    ele.appendChild(albumContainer);

    // Creates 2 instances with content
    var album1 = MakeAlbum({albumName: "Spiderland", albumLength: 39, image: "pics/slint.jpg"});
    albumContainer.appendChild(album1);

    var album2 = MakeAlbum({albumName: "You're Living All Over Me", albumLength: 38, image: "pics/dino.jpg"});
    albumContainer.appendChild(album2);

    // Creates 1 instance without content aka default
    var album3 = MakeAlbum({});
    albumContainer.appendChild(album3);

    return ele;
}