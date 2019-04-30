const form = document.myForm;
const submit = form.submit;
// var query = document.querySelector;

function formAlert() {
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    console.log(firstName, lastName, age, gender)
    let location = form.location.value;
    const diet = form.diet
    const dietArr = [];
    for (let i = 0; i < diet.length; i++) {
        if (diet[i].checked) {
            dietArr.push(diet[i].value);
        }
    }

    let dietStr = dietArr.join(", ")



    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + dietStr + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);