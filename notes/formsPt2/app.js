// let form = document.myForm
//checkbox
let form = document.cars
form.addEventListener('submit', function(e){
    e.preventDefault()
    // let userName = form.name.value
    // document.getElementById("myName").innerText(userName)
    // document.getElementById("myName2").innerHTML(`<h1>${userName}</h1>`)
    
    //checkbox
    const cars = form.likes // is a node list
    const likedCars = []
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].checked) {
            likedCars.push(cars[i].value)
        }
    }
    
    console.log(likedCars)
})