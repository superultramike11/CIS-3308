
function MakePost(postObj, styleObj) {

    // ENTRY POINT
    var container = document.createElement("div");
    container.classList.add("container");

    //Private variables declared here, some of which are used in public functions, the rest is to keep consistent throughout the code.
    var articleTitle = postObj.articleTitle;
    var articleUpdateBody = postObj.articleUpdateBody;
    var articlePostDate = postObj.articlePostDate;
    var articleUpdateDate = postObj.articleUpdateDate;
    //Sets the scheduled date to the update date only if the update date is greater than the post date.
    var scheduledUpdate = (new Date(articleUpdateDate).getTime() > new Date(articlePostDate).getTime()) ? articleUpdateDate : articlePostDate;
    var articleImpact = postObj.articleImpact;
    var articleBody = postObj.articleBody;

    //Component specific objects privately declared / initialized here because they are updated by public functions.
    var impactBtn = document.createElement("button");
    var updateTime;
    var body;

    //Initializing an interval object so the interval can be cleared when the user schedules a post update.
    var interval = {};
    

    function MakeEle(obj) {

        //Creates div to contain all real article related content.
        var post = document.createElement("div");
        post.classList.add("post");

        // =================================================================================================
        //                                        Thumbnail Stuff
        // =================================================================================================

        // thumbnail container || Contains the thumbnail image as well as post information.
        var thumbnail = document.createElement("div");
        thumbnail.classList.add("thumbnail");
        
        // thumbnail image
        var thumbnailImage = document.createElement("img");
        thumbnailImage.classList.add("thumbnail-img");
        thumbnailImage.src = obj.articleThumbnail;

        // thumbnail info container || Contains thumbnail text.
        var postInfo = document.createElement("div");
        postInfo.classList.add("post-info");
        
        // thumbnail info text || Contains author name and description.
        var postInfoText = document.createElement("div");
        postInfoText.classList.add("text");

        //thumbnail info author
        var postInfoAuthor = document.createElement("p");
        postInfoAuthor.innerHTML = obj.articleAuthor;

        //thumbnail info description
        var postInfoDescription = document.createElement("p");
        postInfoDescription.innerHTML = obj.articleAuthorDescription;

        postInfoText.appendChild(postInfoAuthor);
        postInfoText.appendChild(postInfoDescription);
        postInfo.appendChild(postInfoText);
        
        thumbnail.appendChild(thumbnailImage);
        thumbnail.appendChild(postInfo);

        //Adds hover effect to the thumbnail
        thumbnail.onmouseover = function() {
            thumbnail.classList.add(styleObj.style);
        }

        thumbnail.onmouseout = function() {
            thumbnail.classList.remove(styleObj.style);
        }

        post.appendChild(thumbnail);

        // =================================================================================================
        //                                        Post Content
        // =================================================================================================

        // title
        var title = document.createElement("p");
        title.classList.add("title");
        title.innerHTML = articleTitle;
        post.appendChild(title);

        // body
        body = document.createElement("p");
        body.classList.add("body");

        //If the body of the article is greater than 180 characters, hide extra text and add a read more button.
        if(articleBody.length >= 180) {
            body = createReadMore(body, obj.articleBody);
        }
        else {
            body.innerHTML = obj.articleBody;
        }

        post.appendChild(body);

        //Seperates the text into visible and hidden sections as well as creates the read more button.
        function createReadMore(body, postBody) {
            var readableBody = document.createElement("span");
            readableBody.innerHTML = postBody.slice(0, 180);
    
            var hiddenBody = document.createElement("span");
            hiddenBody.innerHTML = postBody.slice(180, postBody.length);
            
            var readClickable = document.createElement("span");
            readClickable.style.fontStyle = "italic";
            readClickable.style.color = "#007ACC";
    
            body.appendChild(readableBody);
            body.appendChild(hiddenBody);
            body.appendChild(readClickable);
    
            //Hiding the extra content by default.
            showLess(body);
    
            return body;
        }
        
        //Exposes the hidden text and updates the read more button to be a read less button.
        function showMore(body) {
            var spans = body.querySelectorAll("span");
            spans[1].style.display = "inline";
            spans[2].innerHTML = "... Click Here to Read Less."
            spans[2].onclick = function () {showLess(body)};
    
        }
    
        //Hides the extra text and updates the read less button to be a read more button.
        function showLess(body) {
            var spans = body.querySelectorAll("span");
            spans[1].style.display = "none";
            spans[2].innerHTML = "... Click Here to Read More.";
            spans[2].onclick = function () {showMore(body)};
        }


        // =================================================================================================
        //                                        Impact
        // =================================================================================================

        // impact
        var impact = document.createElement("div");
        impactBtn = getImpactSeverity(articleImpact);
        document.createElement("button");
        impact.classList.add("impact");
        
        impact.appendChild(impactBtn);
        post.appendChild(impact);

        //returns a button with the appropriate style and content depending on the impact level of the post.
        function getImpactSeverity(impactLevel) {
            //Resetting classes.
            impactBtn.removeAttribute("class");
            
            impactBtn.innerHTML = impactLevel;
            impactBtn.classList.add("btn");
    
            if(impactLevel < 4) {
                impactBtn.classList.add("warm");
                // impactBtn.onclick = function () {sorting(postObj, -1)};
            }
            else if(impactLevel > 7) {
                impactBtn.classList.add("piping");
                // impactBtn.onclick = function () {sorting(postObj, 1)};
            }
            else {
                impactBtn.classList.add("hot");
                // impactBtn.onclick = function () {sorting(postObj, 0)};
            }
    
            return impactBtn;
        }
    
        //public function that allows the user to set the impact level of a story.
        container.setImpactSeverity = function(impactLevel) {
            impactBtn = getImpactSeverity(impactLevel);
        }

        // =================================================================================================
        //                                        Update Time
        // =================================================================================================

        // Element that holds time information regarding the post.
        updateTime = document.createElement("div");
        updateTime.classList.add("updateTime");
        
        //If the post has a scheduled update by default, display the update time and prepare the updated body.
        if(articleUpdateDate != undefined){
            
            container.updatePost(scheduledUpdate, articleUpdateBody);
        }
        else {
            //If there was no scheduled update, display when the article was posted.
            updateTime.innerHTML = "Article posted on " + getFormattedDate(new Date(articlePostDate));
        }

        post.appendChild(updateTime);

        return post;

    }

    //Public function that allows the user to schedule a new post.
    container.updatePost = function(newTime, newBody) {
        clearInterval(interval);
        postScheduler(newTime, newBody);

    }

    //Displays time until a scheduled post is released, and updates the post body on the time of release.
    function postScheduler(newTime, newBody) {
        interval = setInterval(() => {
            //Get update status and time difference.
            var time = getUpdateTime(newTime);
            
            //Update the html with the current update status.
            updateTime.innerHTML = time[0];
            
            //If the article update date is reached, change the article body to the updated body and update the article update status. That was a mouthful.
            if((time[1] < 1)) {
                
                //Stops updating the time.
                clearInterval(interval);
                updateDate = new Date(newTime);
                updateTime.innerHTML = "Article updated on " + getFormattedDate(updateDate);
                
                //If the author has set an update body, then change the current articles body to reflect the latest update.
                if(newBody != "" || articleUpdateBody != "") {
                    body.innerHTML = newBody || articleUpdateBody;
                }
            }
        }, 1000);
    }

    //Builds a string with the time left before the post updates.
    function getUpdateTime(date) {
        var pendingUpdate = "Article updates in ";
        var currentTime = new Date().getTime();
        var enteredTime = new Date(date).getTime();
        
        if(date.length == 0) {
            return ["Artical updated on ", -1];
        }
        
        var totalTimeDiff = enteredTime - currentTime;
        var timeDiff = enteredTime - currentTime;

        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        timeDiff -= days * (1000 * 60 * 60 * 24);
        
        var hours = Math.floor(timeDiff / (1000 * 60 * 60));
        timeDiff -= hours* (1000 * 60 * 60);
        
        var minutes = Math.floor(timeDiff / (1000 * 60));
        timeDiff -= minutes* (1000 * 60);

        var seconds = Math.floor(timeDiff / (1000));
        timeDiff -= seconds * (1000);
        
        if(days > 0) {
            pendingUpdate += days + " days ";
        }
        if(hours > 0) {
            pendingUpdate += hours + " hours ";
        }
        if(minutes > 0) {
            pendingUpdate += minutes + " minutes ";
        }
        if(seconds > 0) {
            pendingUpdate += seconds + " seconds"
        }

        //Returns an array containing the string that displays update time, and the time difference between the current time and scheduled update time.
        return [pendingUpdate, totalTimeDiff];

    }

    //Formats the date to M/D/YYYY format.
    function getFormattedDate(newDate) {
        var formatted = newDate.getMonth()+1 + "/" + newDate.getDate() + "/" + newDate.getFullYear();
        return formatted;
    }

    var postDiv = MakeEle(postObj);
    container.appendChild(postDiv);
    
    return container;
}
