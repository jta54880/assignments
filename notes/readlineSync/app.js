const readlineSync = require('readline-sync')

// readlineSync is an object of methods
// console.log(readlineSync)

// let response = readlineSync.keyInYN("Do you like tacos with nutella")

// let crazy = ""
// if (response) {
//     crazy = readlineSync.keyInYN("Are you cray cray?")
// } else {
//     console.log("see ya")
// }

// if(crazy) {
//     console.log("Me too")
// } else {
//     console.log("ByeBye")
// }

const states = ['California', 'Oregon', 'Wyoming', 'Hawaii']

let gameOver = false

while(!gameOver) {

    let index = readlineSync.keyInSelect(states, "Which state should we sell to Canada?")
    console.log(states[index])

    if (states[index] != 'Oregon') {
        console.log(`sorry, ${states[index]} is not a good choice`)
    } else {
        console.log("good idea!")
        gameOver = true
    }
}


