const btn = document.getElementById("clicker")
const clrBtn = document.getElementById("clear")
let tally = +localStorage.clicked
btn.addEventListener("click", function() {
    tally +=1
    document.getElementById("tally").innerText = tally
    localStorage.clicked = tally
})
document.getElementById("tally").innerText = localStorage.clicked
