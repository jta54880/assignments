function addCandy() {  
    let userCandy = document.getElementById("candy-input");
    let candyText = userCandy.value;

    // create empty <li> tag
    let li = document.createElement("li");
    // create text node with text of the user's candy choice
    let txtNode = document.createTextNode(candyText);
    // append txtNode to the li element
    li.appendChild(txtNode);
    // get the ul and attach li as the last child of the ul
    let ul = document.getElementById("candy-list");
    ul.appendChild(li);
    // clear input field
    userCandy.value = null
}

document.getElementById("candy-adder").addEventListener("click", addCandy);

