let form = document.myForm

console.log(form.age.type)

// console.dir(form.yourName.value) // console.dir brings you attributes for html

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let name = form.name.value
    console.log(name)
})