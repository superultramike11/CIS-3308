
/* This is a sample of the goal for one object in the list: 
 * if you Source - Format, this example will loose its indentation...
 
<div class="item">
    <h2>2018 Audi</h2>
    <p>
        <img src="http://cis-linux2.temple.edu/~sallyk/pics_car/white_audi.png"/>
    </p>
    <button onclick="showInfo(this)">Click Here For More Info</button>
    <div class="info">
        <span onclick = "hide(this)" class="x">
            &#10006;
        </span>
        <p>
            <strong>Condition:</strong>
            Fair
        </p>
        <p>
            <strong>Price:</strong>
            $21,000
        </p>
    </div>
</div>
 */

/* This is an example of one object in the list. Don't use example specific field names (like car)
 * Make field names generic for better reuse.
 {
 "title": "2018 Audi",
 "imageFile": "http://cis-linux2.temple.edu/~sallyk/pics_car/white_audi.png",
 "Condition": "Fair",
 "Price": "$21,000"
 }
 */

function MakeEle(obj) {

    var item = document.createElement("div");
    item.classList.add("item");

    // title
    var h2 = document.createElement("h2");
    h2.innerHTML = obj.title;
    item.appendChild(h2);

    // image
    var p = document.createElement("p");
    item.appendChild(p);
    var image = document.createElement("img");
    p.appendChild(image);
    image.src = obj.imageFile;

    // button 
    var button = document.createElement('button');
    button.innerHTML = "Click Here For More Info";
    item.appendChild(button);

    // info
    var info = document.createElement("div");
    info.classList.add("info");
    item.appendChild(info);

    // showInfo functionality
    button.onclick = function () {
        info.style.display = "block";
    };

    // close x of info
    var span = document.createElement('span');
    info.appendChild(span);
    span.innerHTML = "&#10006";
    span.classList.add("x");
    span.onclick = function () {
        info.style.display = "none";
    };

// condition and price of info
    var condition = document.createElement("p");
    condition.innerHTML = "<strong>Condition:</strong> " + obj.condition;
    info.appendChild(condition);
    var price = document.createElement("p");
    price.innerHTML = "<strong>Price:</strong> " + obj.price;
    info.appendChild(price);

    return item;

}