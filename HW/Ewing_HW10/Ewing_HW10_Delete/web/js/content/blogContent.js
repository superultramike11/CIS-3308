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
    
            <h2>Web API Homework Difficulty</h2>
            <p>
                Before this assignment I had little to no experience in writing any server side database access code.
            </p>
            <p>
                In regards to this week's homework, I found the implementation/formatting of the new database elements pretty easy. 
                The most difficult part of the entire assignment was trying to get the main MYSQL command drive to work to produce a 
                proper string output, but I finally got it! Additional you can view my Web API/Database error page at this PDF page
                <a target="_blank" href="docs/Web API HW Errors.pdf">here</a>
            </p>
    
            <h2>JS Click Sort Homework Difficulty</h2>
            <p>
                In regards to this week's homework, I found this assignment to be extremely frustrating given the amount of sample code
                and lack of general direction with truly understanding the content. Because it really felt I was just connecting blocks
                together but not really understanding how they fit together at all. Additionally but of my feelings, I was not able to 
                figure how to implement the reverse sort "completely". The reason why I say "completely" is because I was able to get the
                reverse sort code to work for the user table but for the same exact code, it couldn't even print out the album table. And 
                because not having the album table at all is worth more points then just not including the reverse sort, I decided to leave 
                out the reverse sort so I would lose less points in the long run for this assignment.
            </p>
    
            <h2>Logon Homework Difficulty</h2>
            <p>
                In regards to this week's homework, I found this assignment to be decently challenging, it wasn't too hard and wasn't too easy.
                Given that we worked on the server side of the code extensively in the lab activities, the first part was fairly easy. But in
                terms of the client side, that's where the challenge came from. I've always found it frustrating understanding JavaScript syntax,
                but I eventually got it to successfully print out all of the required content.
            
                Below are four DIRECT links to the required webAPIs (keep in mind, these are not the client side links, just server side).
                <li>
                Click <a href="webAPIs/listUsersAPI.jsp">here</a> for my List Users API (takes no URL parameters). 
                </li>
                <li>
                    Click <a href="webAPIs/login.jsp?pswd=pass2&email=danaewing@yahoo.com">here</a> 
                    for my Log On API with VALID credentials as URL parameters.
                </li>
                <li>
                    Click  <a href="webAPIs/getProfile.jsp">here</a> for my Get Profile API (takes no URL parameters). 
                </li>
                <li>
                    Click <a href="webAPIs/logoff.jsp">here</a> for my Logoff API (takes no URL parameters). 
                </li>
            </p>
            
            <h2>Update Homework Difficulty</h2>
            <p>
                In regards to this week's homework, I found this assignment to be challenging. I found it hard to understand the sample code given
                and how to properly merge it into my database and other attributes. The easiest part was the setup but that seems trivial in the long
                run, given that most to all of the work was implementation with new code.
            
                Other then that, you can view my database pdf <a target="_blank" href="pics/ewing_database.pdf">here</a>
            </p>
            
            <h2>Delete Homework Difficulty</h2>
            <p>
                In regards to this week's homework, I found this assignment to be easy. Given that the requirements were just to transport sample code
                to my own code/database. I will say the only thing that was a struggle was trying to understand where every file is given the extensive
                size of our project by the end of the semester.
            
                Other then that, you can view my database pdf <a target="_blank" href="pics/ewing_database.pdf">here</a>
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