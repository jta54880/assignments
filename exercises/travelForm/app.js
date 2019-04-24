let form = document.travelForm

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    // first name
    let fName = form.firstName.value
    console.log(fName)
    
    // last name
    let lName = form.lastName.value
    console.log(lName)
    
    // age
    let age = form.age.value
    console.log(age)
    
    // gender
    let gender = form.gender.value
    console.log(gender)
    
    // destination/location
    let destination = form.location.value
    console.log(destination)
    
    // food restrictions
    const restrictions = form.foodAllergy
    const dietaryRestrictions = []
    for (let i = 0; i < restrictions.length; i++) {
        if (restrictions[i].checked) {
            dietaryRestrictions.push(restrictions[i].value)
        }
    }
    console.log(dietaryRestrictions)

    // alert with data
    let alertMessage = `First name: ${fName}\nLast name: ${lName}\nAge: ${age}\nGender: ${gender}\nLocation: ${destination}\nDietary restrictions: ${dietaryRestrictions.join(" , ")}`

    alert(alertMessage)
})