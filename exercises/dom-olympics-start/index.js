const headerElement = document.getElementById("header")
const clearBtn = document.getElementById("clear-button")

// insert html header with h1 and h3 and span my name
window.addEventListener("load", function(){
    headerElement.innerHTML = 
        "<h1>JavaScript Made This!!</h1><h3><span id='name'>Jake</span> wrote the JavaScript</h3>"
})

// clear conversation
clearBtn.addEventListener("click", function(){
    console.log('fireaway')
    document.getElementsByClassName("message").innerHTML = ""
})
