"use strict";
function MakeReview(params) {
    
    if(!params){
        throw "No parameters entered!";
    }

    var revObj = document.createElement("div"); // get reference to DOM object with the given id
    //might have to change to revObj.classList.add("review");

    // public property
    revObj.name = params.name || "No Album Name Entered";

    // private properties
    var date = params.date || "No Release Date Entered";
    var rating = params.rating || "No Rating Entered";

    revObj.classList.add("review");

    var revImg = document.createElement("img"); //this is the album cover
    revImg.src = params.imgURL || "pics/404.jpg";
    revObj.appendChild(revImg);
    
    var revInfo = document.createElement("div");
        revObj.appendChild(revInfo);

    // this is a private method, doesnt mater that it used the assignment statement style of function definition.
    var display = function ( ) {
        // make the current properties visible on the page
        revInfo.innerHTML = "Album Name: " + revObj.name + "<br/> Year Released: " +
                date + "<br/> Rating out of 100/" + rating;
    };

    revObj.changeName = function (newName) { // create custom public method “setCondition”
        revObj.name = newName;
        display(); // show updated property on the page
    };

    revObj.changeDate = function (newDate) { // create custom public method “changePrice”
        date = newDate;
        display(); // show updated price on the page
    };

    revObj.changeRating = function (newRating) { // create custom public method “changePrice”
        var number = Number(newRating);
        console.log("New rating: " + number);
        rating = number;
        display(); // show updated price on the page
    };
    
    
    var nameButton = document.createElement("button");
    nameButton.innerHTML = "Change Album Name: ";
    revObj.appendChild(nameButton);
    
    var newNameInput = document.createElement("input");
    revObj.appendChild(newNameInput);
    
    nameButton.onclick = function(){
        revObj.changeName(newNameInput.value);
    };
    
    revObj.appendChild(document.createElement("br")); 
    
    var dateButton = document.createElement("button");
    dateButton.innerHTML = "Change Album Year Release: ";
    revObj.appendChild(dateButton);
    
    var newDateInput = document.createElement("input");
    revObj.appendChild(newDateInput);
    
    dateButton.onclick = function(){
        revObj.changeDate(newDateInput.value);
    };
    
    revObj.appendChild(document.createElement("br")); 
    
    var ratingButton = document.createElement("button");
    ratingButton.innerHTML = "Change Album Rating: ";
    revObj.appendChild(ratingButton);
    
    var newRatingInput = document.createElement("input");
    revObj.appendChild(newRatingInput);
    
    ratingButton.onclick = function(){
        revObj.changeRating(newRatingInput.value);
    };

    display();
    return revObj;
}
