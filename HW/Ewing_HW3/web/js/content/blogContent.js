"use strict";
function blogContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <!--Explain Database fields-->
            <h2>Fields provided by the database</h2>
            <ul>
                <li>Album Name</li>
                <li>Artist Name</li>
                <li>Creation Date</li>
                <li>Genre</li>
                <li>Album Length</li>
                <li>Number of Songs</li>
            </ul>
            
            <!--Explain Previous Experience-->
            <h2>My Previous Experience</h2>
            <p>
                In terms of my previous web design/development experience, I have taken multiple web design classes
                in High School involving HTML, CSS, and a tiny bit of mySQL. In that class, I created an interactive
                page filled with albums that I have loved over the past few years. On the main page you could hover
                over each album cover and it would revealed the contents of what that album is in the first place.
                Other then this high school experience, I have played around with website creation on other platforms,
                but never to the extent of including JavaScript or server-sided content.
            </p>
            
            <!--Explain Current Assignment process-->
            <h2>Home Page Homework Difficulty</h2>
            <p>
                Because of my previous experience with surface-level web design, mostly HTML and CSS, I've found this
                HW to be extremely easy since all my tools have been setup correctly and the instructions are easy to follow.
                But I do expect that it'll get more interesting as we implement more JavaScript and server-side content.
            </p>
    
            <h2>JS UI Homework Difficulty</h2>
            <p>
                I found this homework to be confusing in the beginning given that we had to import old css files
                and then modify new ones to fit all ones. But as soon as that cleared up, the javascript portion
                was fairly simple given the easy Lab Activity earlier this week.
            </p>
    
            <h2>JS OBjects Homework Difficulty</h2>
            <p>
                While this homework was simple in concept, it was tricky (to say the least in execution) because of sporadic
                links between all of the function calls between HTML, CSS, and JavaScript. I'm a lover of the C language so
                it's been a very interesting transition to say the least.
            </p>
    
            <h2>Database Homework Difficulty</h2>
            <p>
                Before this assignment I had little to no experience in databases. With the only possible knowledge I had
                were old MySQL commands in my first web design class back in highschool.
            </p>
            <p>
                In regards to this week's homework, I found it decently difficult given that MySQL Workbench is completely new to me.
                Besides the difficulty of understanding the content, MySQL Workbench just feels extremely clunky and unresponsive at times 
                (freezing up on the simpliest commands, etc). Other then that, you can view my final product pdf
                <a target="_blank" href="pics/ewing_database.pdf">here</a>
            </p>

            <!--Main Site Image-->
            <p style="text-align:center;">
                <img src="icons/record.jpg" style="width:50%; border-radius:10px;">
            </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}