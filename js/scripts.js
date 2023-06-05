


function addElement(parent, child, text = "") {
    if (text != "") {
        child.append(text);
    }
    parent.appendChild(child);
}

window.onload = function () {
    console.log("test");
    let body = document.getElementsByTagName("body")[0];
    const ulElement = document.createElement("ul");
    const liSecond = document.createElement("li");
    const liFirst = document.createElement("li");
    const image = document.createElement("img");
    const h1Second = document.createElement("h1");
    const h2First = document.createElement("h2");
    const anchor = document.createElement("a");

    //append ul and second li
    addElement(ulElement, liSecond, "It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
    addElement(body, ulElement);

    //prepend first li
    liFirst.append("It is endemic to the mountains of Colombia.");
    ulElement.prepend(liFirst);

    //put img Before ul then second h1 before ul
    image.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
    image.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
    image.setAttribute("style", "width:50%");
    ulElement.before(image);
    h1Second.append("Facts about the Multicolored Tanager");
    ulElement.before(h1Second);

    //put h2 after ul and then a after ul
    h2First.append("Source");
    anchor.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
    ulElement.after(h2First);
    addElement(body, anchor, "Wikipedia");
}

/*
<body>
  <h1>Webpage Recreation Practice</h1>
  <p>The HTML of this webpage was created with JavaScript.</p>
  <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900" alt="This is an image of a Multicolored Tanager bird from birdsoftheworld.org" style="width:50%">
  <h1>Facts about the Multicolored Tanager</h1>
  <ul>
    <li>It is endemic to the mountains of Colombia.</li>
    <li>It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.</li>
  </ul>
  <h2>Source</h2>
  <a href="https://en.wikipedia.org/wiki/Multicoloured_tanager">Wikipedia</a>
</body>
*/