let prevScrollY = window.pageYOffset

window.addEventListener("scroll", function() {
    let currentScrollY = window.pageYOffset
    if (prevScrollY > currentScrollY || currentScrollY <= 0) {
        document.getElementById("header").style.top = "0"
    } else {
        document.getElementById("header").style.top = "-50%"
    }

    prevScrollY = currentScrollY
})

// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset
//     prevScrollPos > currentScrollPos ? 
//         document.getElementById("header").style.top = "0" :
//         document.getElementById("header").style.top = "-110pt"
//     prevScrollPos = currentScrollPos
// }