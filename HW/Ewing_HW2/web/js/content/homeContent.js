function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h2>Welcome to the M Records home page!</h2>
            <p>
                This site shall be used as full sanctuary for musicians to share
                their creations and for music lovers to truly indulge in an artists presentation.
                M Records will provide with musicians (users) the ability to upload any
                musical content that they have created. Whether it be an LP, EP, or a new hit single,
                they can upload it here for someone to see. I see this future website as a blend between
                <a href="https://www.youtube.com/">Youtube</a> and the famous underground indie label
                <a href="https://krecs.com/">K Records</a>.
            </p>
    
        <p style="text-align:center;">
            <img src="icons/record.jpg" style="width:50%; border-radius:10px;">
        </p>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }