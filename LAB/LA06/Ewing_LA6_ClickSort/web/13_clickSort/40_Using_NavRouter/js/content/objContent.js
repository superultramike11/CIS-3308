function objContent() {

var content = `
        <style>
            p {
                margin-left: 1.5rem;
            }
            .flexContainer {
                display:flex; 
                flex-direction: row;
                background-color: grey;
            }
            .flexContainer .obj {
                width: 33%; /* to fit three columns inside the flexContainer */
                box-sizing: border-box; /* makes padding and border counted in the width */
            }
        </style>
        <h3>Example Code for JS Object HW</h3>
        <p>
            In this example, several objects are created and then appended into the 
            content area. To see the event handling (that's built into these objects), 
            hover over an image then look for text to appear below the image. 
            The "weird" background colors (grey, light green, pink) 
            were added to make it easier to see which styling applies to 
            which parts of the UI. The "effort" for this homework is in three files: 
            js/reusable/MakeObj.js (creates an object), style/obj.css 
            (styles those objects), and js/components/objContent.js (creates 
            a styled div that contains several objects that were made by MakeObj). 
        </p>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content; // the HTML code specified just above...
        var twoObjects = document.createElement("div");
        twoObjects.classList.add('flexContainer'); // see styling in this file, above...
        ele.appendChild(twoObjects);
        twoObjects.appendChild(MakeObj("Nevada", "http://cis-linux2.temple.edu/~sallyk/pics_sk/balloons.png", "$695 for 3 days/nights"));
        twoObjects.appendChild(MakeObj("Japan", "http://cis-linux2.temple.edu/~sallyk/pics_sk/japan.png", "$2400 for 6 days/nights"));
        twoObjects.appendChild(MakeObj("Sydney", "http://cis-linux2.temple.edu/~sallyk/pics_sk/sydney.png", "$5900 for 9 days/nights"));
        var trailer = document.createElement("p");
        trailer.innerHTML = "Hope you liked my objects !";
        ele.appendChild(trailer);
        return ele;
}