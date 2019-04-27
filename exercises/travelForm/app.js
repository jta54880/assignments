const form = document.myForm

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let firstName = form.firstName.value
    let lastName = form.lastName.value
    let age = form.age.value
    let gender = form.gender.value
    let location = form.location.value
    const diet = form.diet
    const dietArr = []
    for (let i = 0; i < diet.length; i++) {
        diet[i].checked && dietArr.push(diet[i].value) 
    }
    let dietMessage = dietArr.join(", ")

    alert(
    `First name: ${firstName}
    Last name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Location: ${location}
    Dietary restrictions: ${dietMessage}`)
})