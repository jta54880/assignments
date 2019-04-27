let name = "John"
let age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        if (pets[i] === "cat") {
            name = "fluffy"
            pet.name = name
        } else {
            name = "spot"
            pet.name = name
        }
        
        petObjects.push(pet)
        return pet.name 
    }
     
}



console.log(runForLoop())

// Arrow Functions Task 1
// -------------------------------------
const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// console.log(mapVegetables(carrots))

const mapVegetables = arr => {
    return arr.map(carrot => ({type: "carrot",name: carrot}))
}

console.log(mapVegetables(carrots))

// Arrow Functions Task 2
// -------------------------------------

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}

console.log(filterForFriendly(people))

// Arrow Functions Task 3
// -------------------------------------

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

const doMathSum = (a, b) => a + b
const produceProduct = (a, b) => a * b

console.log(doMathSum(1,2), produceProduct(1,2))

// Arrow Functions Task 4
// -------------------------------------
const printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log(printString("Jim"))

// xtra - Task 5
// -------------------------------------
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ]

 const filterForDogs = arr => arr.filter(animal => animal.type === "dog" ? true : false)

 console.log(filterForDogs(animals))

 // xtra template literals
 // -------------------------------------
 const message = (location = "Hawaii", name = "John") => 
    `   Hi ${name}!
    
    Welcome to ${location}.
    
    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.  `

console.log(message("Ohio", "Janice"))