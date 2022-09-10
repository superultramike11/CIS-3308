function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h3>Home - Advanced Usage of the NavRouter</h3>
        <p>
            This example will explain some advanced features 
            of the NavRouter (and assumes that you have already studied the 
            previous example entitled "Basic Usage of the NavRouter"). 
        </p>
        <ul>
            <li>
                When you click on "Account", "Search", and "Tutorial" 
                (from the Nav Bar above), you'll see that these are not links, 
                but Drop Down Menu headers which open and close sub menus. 
            </li>
            <li>    
                To define a drop down menu, you add an object (e.g., to 
                array "myNavList" that has a "header" property and 
                a "subMenu" property. The subMenu property is just a list 
                of links (like Home and Blog were). 
            </li>    
            <li>
                Here's how we got the NavRouter to add the "Account" drop down menu 
                into the Nav Bar: 
            </li>
        </ul>
    
        <pre>
    &lt;script>

        var myNavList = [

            // action attribute is a function name - no quotes around home.
            {linkText: "Home", linkURL: "#/home", action: home},  // a regular "link"
            {
                header: "Account",                                // a drop down menu header
                subMenu: [              // submenu associated with the drop down menu header (above)                      
 
                    // This sub-menu link works because it has linkURL and action attributes.
                    {linkText: "Register", linkURL: "#/register", action: registerContent},
    
                    // These links are non-functional because they lack linkURL and action attributes.
                    {linkText: "Log In"},
                    {linkText: "Log Out"},
                    {linkText: "Profile"}
                ]
            },
           
            // ...
    
            // action attribute is a function name - no quotes around blog.
            {linkText: "Blog", linkURL: "#/blog", action: blog}
        ];

        var myNav = MakeNavRouter({
            navId: "nav",           // this is the id of the div where the nav bar will be injected
            navList: myNavList,     // the array of objects specified above (object properties: linkText, linkURL, actions)
            contentId: "content",   // the id where content is to be injected
            startLink: "#/home"     // routing will set this as the first link. 
        });

    &lt;/script>        </pre>
    
        <p>
            Of the links that are in the "Account" drop down menu, the first one 
            works (click on it) -- it invokes a content generating function 
            (registerContent), similar to homeContent and blogContent. 
            The other links in the "Account" menu are non-working links. 
            To have the NavRouter include a non-working link,  
            just omit the linkURL and action properties (as demonstrated 
            in the "Log In" ... "Profile" links above).
        </p>
        <p>
            You can also have the NavRouter include a "regular link" (e.g., that opens 
            a new web page, instead of injecting the results of a content generating function 
            into the content area). To do this, 
            just have the action attribute be a string (e.g., the name of an HTML 
            file or pdf) that should be opened up in a new tab when the user 
            clicks on that link. You can see 4 examples of this (links that 
            open up a HTML page or PDF in a new tab) in the "Tutorial"
            drop down menu specified below.
        </p>
    
        <pre>
        var myNavList = [

            // action attribute is a function name - no quotes around home.
            {linkText: "Home", linkURL: "#/home", action: home},  // a regular "link"
    
            //...
            {
                header: "Tutorial",
                subMenu: [
                    {linkText: "Proposal", linkURL: "#/proposal", action: "tutorial/proposal.pdf"},
                    {linkText: "Proof Of Concept", linkURL: "#/tutPOC", action: "tutorial/poc.html"},
                    {linkText: "Demo", linkURL: "#/tutDemo", action: "tutorial/download/demo.html"},
                    {linkText: "Tutorial Home", linkURL: "#/tutHome", action: "tutorial/index.html"}
                ]
            },
           
            // ...
    
            // action attribute is a function name - no quotes around blog.
            {linkText: "Blog", linkURL: "#/blog", action: blog}
        ]; </pre>
    
    <p>
        To see all the code where it needs to be, just right click this page and View Source !
    </p>
    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }