function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h3>Home - Basic Usage of the NavRouter</h3>
        <p>
            This Single Page Application includes a functional Navigation Bar 
            that achieves User Interface code reuse by using the "NavRouter",
            a JavaScript component that I wrote using "provider style coding", 
            so that other programmers can easily use my NavRouter. 
            <strong>To see how it works, click on the Home and Blog links</strong>
            from the Nav Bar. 
        </p>
        <p>
            To use the NavRouter, you provide it this input: 
        </p>
        <ul>
            <li>
                The id within your page where you want the Nav Bar to be injected.
            </li>
            <li>
                The id within your page where you want the content (generated by Nav Bar 
                link clicks) to be injected.
            </li>
            <li>
                The links you want for your Nav Bar. For each link, specify:
                <ul>
                    <li>
                        Link text (that will show up in the Nav Bar),
                    </li>
                    <li>
                        Actual link (in the brower's address bar) whenever the link          
                        is clicked, and
                    </li>
                    <li>
                        The JS function (to be run by the NavRouter) 
                        whenever that link is clicked. 
                    </li>
                </ul>
            </li>
            <li>
                The link that you want the NavRouter to "auto-click" - 
                so that the content area of the page does not show up blank 
                upon first rendering. 
            </li>
        </ul>
        <p>
            Then, the NavRouter:
        </p>
        <ul>
            <li>
                Creates a nicely styled Navigation Bar full of links 
                and injects that into your page (where you asked to have it injected).  
            </li>
            <li>
                Then, the NavRouter monitors all link changes. Whenever a particular Nav link 
                is clicked, the NavRouter it runs the JS function associated with that link         
                and injects (into the content area) the content generated by that function. 
            </li>
        </ul>

        <p>
            The NavRouter (like most JavaScript components) is comprised of a JS file 
            (a JS function that makes the component) and a CSS file 
            (that styles just that component). So as a Consumer of the NavRouter, 
            put a script tag like this, in your index page - usually just before your 
            index file's &lt;script> tag, just be fore the &lt;/body> tag:          
        </p>
    
        <pre>
    &lt;script src="js/reusable/MakeNavRouter.js">&lt;/script>  </pre>
    
        <p>
            Then, place the NavRouter style sheet in the header section of your index.html: 
        </p>
    
        <pre>
    &lt;link href="style/NavRouter.css" rel="stylesheet" type="text/css" />   </pre>
    
        <ul>
            <li>
                Notice that all the styles in NavRouter.css are "localized" by preceding each 
                CSS selector with ".NavRouter". That way, only the Nav Bar (returned by the 
                NavRouter) will be styled. The NavRouter will not interfere with any other 
                styling that the programmer (you) may have. 
            </li>
        </ul>
         
            <p>
                To see a full example of how to create a simple nav bar using the NavRouter, 
                Right Click and "View Source" on this index page. 
            </p>
            <p>
                To see an example of a nav bar with drop downs and 
                sub menus, see the next example (in folder 
                "Using_NavRouter_adv"). 
           </p>
        </div>
     
        <p>
            Remember that your index page must reference all the content 
            generating functions that your nav bar needs:               
        </p>
    
        <pre>
    &lt;script src="js/components/blogContent.js">&lt;/script>
    &lt;script src="js/components/homeContent.js">&lt;/script>  </pre>    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
}