let addForm = document.addForm
let subForm = document.subtractForm
let multForm = document.multiplyForm

addForm.addEventListener('submit', function(event){
    event.preventDefault()
    let numOne = addForm.addX.value
    let numTwo = addForm.addY.value
    let answer = numOne/1 + numTwo/1

    numOne, numTwo = null
    document.getElementById("sum").innerHTML = `<h2>${answer}</h2>`
})

subForm.addEventListener('submit', function(event){
    event.preventDefault()
    let numOne = subForm.subX.value
    let numTwo = subForm.subY.value
    let answer = numOne - numTwo

    numOne, numTwo = null
    document.getElementById("difference").innerHTML = `<h2>${answer}</h2>`
})

multiplyForm.addEventListener('submit', function(event){
    event.preventDefault()
    let numOne = multiplyForm.multiplyX.value
    let numTwo = multiplyForm.multiplyY.value
    let answer = numOne * numTwo

    numOne, numTwo = null
    document.getElementById("product").innerHTML = `<h2>${answer}</h2>`
})