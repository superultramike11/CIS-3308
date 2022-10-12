function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h3>Home</h3>
        <p>
            This "web site" includes a functional Navigation Bar that achieves User Interface code reuse
            through the use of JavaScript component that I provide to you. To see how it works, click 
            on Home, Blog, or Search - Objects. Home and Blog are very basic components that are 
            really just content. Search - Objects shows you a different kind of component, one that 
            is created more by using JavaScript than by placing HTML code inside of a DOM element. 
            When you click on Account and Tutorial (from the Nav Bar above), you'll see that they are 
            Drop Down Menu headers -- none of their links have been implemented yet. 
        </p>
        <p>
            A very important concept in this course is "Provider Style Coding" (reusable code 
            provided by one programmer, to be used by other programmers).  In this module, you'll learn 
            how to be a Consumer of my "NavRouter" which is a fairly sophisticated JavaScript component
            that lets you specify (1) navigation bar links and (2) what happens when those links are 
            clicked. Later in the semester, you'll learn how to write your own Provider Style Code,
            but for now, you are just learning how to be a Consumer of such code.
        </p>
        </p>
            Generally speaking, you provide this input to the NavRouter: 
        </p>
        <ul>
            <li>
                The id within your page where you want the Nav Bar to be injected.
            </li>
            <li>
                The links you want for your Nav Bar. 
            </li>
            <li>
                The JS function (to be run by the NavRouter) whenever a particular link is clicked. 
            </li>
            <li>
                The id within your page where you want the content (generated by Nav Bar 
                link clicks) to be injected.
            </li>
        </ul>
        <p>
            Then, the NavRouter:
        </p>
        <ul>
            <li>
                Creates a nicely styled Navigation Bar full of links (possibly organized into 
                Drop Down Menus) and injects that into your page (where you asked to have it injected).  
            </li>
            <li>
                Then, the NavRouter monitors all link changes. Whenever a particular Nav link 
                is clicked, the NavRouter it runs the JS function associated with that link         
                and injects (into the content area) the content generated by that function. 
            </li>
        </ul>

    
    
        <p>
            A JavaScript component typically is comprised of a JS function that makes the 
            component (stored in a JS file) and styling (stored in a CSS file). So to be a Consumer 
            of the NavRouter, your index.html page needs to reference these two artifacts. Place a script 
            tag reference like this (typically before your index file's &lt;script> tag which 
            is before the index file's &lt;/body> tag):          
        </p>
    
        <pre>
    &lt;script src="js/reusable/MakeNavRouter.js">&lt;/script>  </pre>
    
        <p>
            Then, please the NavRouter style sheet in the header section of your index.html: 
        </p>
    
        <pre>
    &lt;link href="style/NavRouter.css" rel="stylesheet" type="text/css" />   </pre>
    
        <p class='indent'>
            Notice that all the styles in NavRouter.css are "localized" by preceding each 
            CSS selector with ".NavRouter". That way the styling from NavRouter.css 
            will only affect DOM elements that are classed "NavRouter" - instead of 
            conflicting with other styling in your site. Reusable components need to 
            be able to "play nice" with the other code of the web site...
        </p>
        
        <p>
            Your index.html file also needs to contain JS code to invoke the MakeNavRouter function. 
            Start out by creating an array of objects, one object per link you want in your Nav Bar, 
            where each object has three properties:  
        </p>
        <ul>
            <li>
                linkText: text that shows up in the Nav Bar.
            </li>
            <li>
                linkURL: should be related to the action because it will show up in the browser's 
                address bar when the link is clicked. To invoke this function from 
                outside of the Nav Bar, just set location.hash = to this linkURL.
            </li>
            <li>
                action: name of the JS function that will be invoked when the 
                link is clicked. 
            </li>
        </ul>
        <div class='indent'>
            <p>
                To include a link (in the Nav Bar) without any associated JS function, 
                just omit the linkURL and action properties.
            </p>
            <p>
                To define a drop down menu, add a "header" property and 
                a "subMenu" property to one of the objects in the object array. 
                The header property will show as the drop down header. 
                Set the subMenu propery to be an array of link objects as described above 
                (with object properties: linkText, linkURL, and action).
            </p>    
            <p>
                Here's an example of setting up the array to specify the nav bar, 
                then invoking the MakeNavRouter function with the proper inputs.
            </p>
        </div>
    
        <pre>
    &lt;script>

        /* This example code will create a Nav Bar that shows this: 
              Home | Account | Search | Tutorial | Blog
           In this example, Home and Blog are links, whereas the others (Account, Search, and Tutorial) 
           are Drop Down Menu Headers (with a list of links that open up when you click on 
           the Drop Down Header). 
        */ 

        var myNavList = [

            // action attribute is a function name - no quotes aroudnd home.
            {linkText: "Home", linkURL: "#/home", action: home},
            {
                header: "Account",
                subMenu: [

                    // These links show up in nav bar but not functional because linkURL and action were not supplied.
                    {linkText: "Register"},
                    {linkText: "Log In"},
                    {linkText: "Log Out"},
                    {linkText: "Profile"}
                ]
            },
            {
                header: "Search",
                subMenu: [
                    {linkText: "Objects", linkURL: "#/objects", action: objContent},
                    {linkText: "Slide Show"},
                    {linkText: "Click Sort"}
                ]
            },
            {
                header: "Tutorial",
                subMenu: [
                    {linkText: "Proposal"},
                    {linkText: "Proof Of Concept"},
                    {linkText: "Demo"},
                    {linkText: "Tutorial Home"}
                ]
            },

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
            Three functions were referenced by the object array (above), so you must also 
            include references to these functions: home, blog, and objContent.               
        </p>
    
        <pre>
    &lt;script src="js/components/blog.js">&lt;/script>
    &lt;script src="js/components/home.js">&lt;/script>
    &lt;script src="js/components/objContent.js">&lt;/script>   </pre>
    
        <p>
            Since function objContent calls function MakeObj, you must also include a reference 
            to the file that holds function MakeObj. 
        </p>
    
        <pre>
    &lt;script src="js/reusable/MakeObj.js">&lt;/script>    </pre>
    
    <p>
        To see all the code where it needs to be, just right click this page and View Source !
    </p>
    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
}