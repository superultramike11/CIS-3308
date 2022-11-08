"use strict";
function MakeAlbum(picList, style) {
    console.log(style);
    var slideShow = document.createElement("div");
    slideShow.classList.add(style);
    
    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);
    
    // add image into the div & set the image's src attribute to show pictures
    var myImage1 = document.createElement("img");
    div.append(myImage1);
    
    // add image into the div & set the image's src attribute to show pictures
    var myImage2 = document.createElement("img");
    div.append(myImage2);
    
    // add back button under the image (and empty paragraph)
    // this button could used for filter
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);
    
    // add forward button under the image (and empty paragraph)
    // this button could used for filter
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);
    
    // private variable that keeps track of which image is showing
    var picNum = 0;
    setPic1();
    setPic2();
    
    function setPic1() {
        myImage1.src = picList[picNum];
    }
    
    function setPic2() {
        myImage2.src = picList[picNum];
    }
    
    // Advance to next image in the picture list
    // this could be used as the execution button filter
    function nextPic() {
        if(picNum < picList.length-1) {
            picNum++;
        }
        setPic1();
        setPic2();
    }
    
    // Go to the previous image in the picture list
    // this could be used as the execution button filter
    function prevPic() {
        if(picNum > 0) {
            picNum--;
        }
        setPic1();
        setPic2();
    }
    
    function display() {
        console.log("you clicked on an album");
    }
    
    myImage1.onclick = display;
    myImage2.onclick = display;
    
    // add next and previous functionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;
    
    // public function switchup
    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < picList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image
            setPic1();
            setPic2();
        }
    };
    
    return slideShow;
}