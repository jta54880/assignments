const headerElement = document.getElementById("header")
const positiveMessages = document.getElementById("message-id")
const clearBtn = document.getElementById("clear-button")
const dropDown = document.getElementById("theme-drop-down")

// insert html header with h1 and h3 and span my name
window.addEventListener("load", function(){
    headerElement.innerHTML = 
        "<h1>JavaScript Made This!!</h1><h3><span id='name'>Jake</span> wrote the JavaScript</h3>"

    // add positive messages
    positiveMessages.innerHTML = 
        "<div class='message left' id='test'>I have something fun to talk about</div><div class='message right'>What about?</div><div class='message left'>I love to exercise!</div><div class='message right'>Me TOO!!</div>"
})

// clear conversation
clearBtn.addEventListener("click", function(){
    
    /* ------------------- */
    // if trying to manipulate data use id not classname
    // document.getElementsByClassName("message").innerHTML = ""
    document.getElementById("message-id").innerHTML = ""
})

// change color scheme based on drop down

dropDown.addEventListener("change", function() {
    const toggleClass = document.getElementById("message-id")
    if (dropDown.value === "theme-two") {
        toggleClass.classList.toggle("black-red")
    } else {
        toggleClass.classList.toggle("black-red")  
    }
})

// use form to add messages
let form = document.message
let counter = 0
form.addEventListener("submit", function(e){
    event.preventDefault()
    let message = form.message.value
    message !== "" ? counter += 1 : console.log("input is blank")
    console.log(counter)
    let messageDiv = document.getElementById("message-id")
    let div = document.createElement("div")
    counter % 2 !== 0 ? div.className = "left" : div.className = "right"
    let txtNode = document.createTextNode(message)
    div.appendChild(txtNode)
    messageDiv.appendChild(div)
    
    /* ------------------- */
    // trying to dump message from input after submit / not working -- don't set variable name 'message' to "", because it will lose its reference to form.message.value by reassigning variable message to just "" thereby losing reference of document.message.message.value
    // message = ""
    form.message.value = ""
})