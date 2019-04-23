const square = document.getElementById("square")

square.addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue"
})

square.addEventListener("mousedown", function(){
    this.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function(){
    this.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function(){
    this.style.backgroundColor = "green"
})

window.addEventListener("scroll", function(){
    square.style.backgroundColor = "orange"
})

document.addEventListener("keydown", function(event){
    console.log(event.which)
    if (event.which === 82) {
        square.style.backgroundColor = "red"
    } else if (event.which === 80) {
        square.style.backgroundColor = "purple"
    } else if (event.which === 66) {
        square.style.backgroundColor = "black"
    }
})



