const readline = require('readline-sync');
const {question} = readline
let input = question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(question('How many letters would you like to shift? '));


// console.log(inputArr)
let alphabet = "abcdefghijklmnopqrstuvwxyz"

/* *************Code breaks at shift = 30************** */

function cipher(input, shift) {
    const inputArr = input.split("")
    const shiftedArr = []
    inputArr.forEach((letter, i) => {
        // index of input (letter) in alphabet
        let ind = alphabet.indexOf(letter)
        if (ind !== -1) {
            let adjustedShift = ind + shift
            if (adjustedShift > 25) {
                let beginShift = adjustedShift - 25
                letter = alphabet[beginShift - 1]
            } else if (adjustedShift < 26) {
                letter = alphabet[adjustedShift]
            }
        }
        shiftedArr.push(letter)
    })
    let strCipher = shiftedArr.join("")
    return strCipher
}

console.log(cipher(input, shift))


//console.log(shiftedArr.join(""))

function decipher(str, shift) {
    const messageArr = str.split("")
    const decipheredArr =[]
    messageArr.forEach(letter => {
        let ind = alphabet.indexOf(letter)
        console.log(ind)
        if (ind !== -1) {
            let adjustedShift = ind - shift
            if (adjustedShift < 0) {
                adjustedShift += 27
                console.log(adjustedShift)
                letter = alphabet[adjustedShift - 1]
            } else if (adjustedShift < 26) {
                letter = alphabet[adjustedShift]
            }
        }
        decipheredArr.push(letter)
    })
    let strDecipher = decipheredArr.join("")
    return strDecipher
}

console.log(decipher(cipher(input, shift), shift))


/* original version ---April 27---*/

// const readline = require('readline-sync');
// const {question} = readline
// let input = question('What phrase would you like to encrypt? ').toLowerCase();
// let shift = parseInt(question('How many letters would you like to shift? '));

// const inputArr = input.split("")
// // console.log(inputArr)
// let alphabet = "abcdefghijklmnopqrstuvwxyz"

// const shiftedArr = []

// inputArr.forEach((letter, i) => {
//     // index of input (letter) in alphabet
//     let ind = alphabet.indexOf(letter)
//     let adjustedShift = ind + shift
//     if(adjustedShift > 25) {
//         adjustedShift -= 26
//     }
//     if (ind >= 0) {
//         letter = alphabet[adjustedShift]
//     }
//     shiftedArr.push(letter)
// })

// console.log(shiftedArr.join(""))