const readline = require('readline-sync');
const {question} = readline
let input = question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(question('How many letters would you like to shift? '));

const inputArr = input.split("")
// console.log(inputArr)
let alphabet = "abcdefghijklmnopqrstuvwxyz"

const shiftedArr = []

inputArr.forEach((letter, i) => {
    // index of input (letter) in alphabet
    let ind = alphabet.indexOf(letter)
    let adjustedShift = ind + shift
    if(adjustedShift > 25) {
        adjustedShift -= 26
    }
    if (ind >= 0) {
        letter = alphabet[adjustedShift]
    }
    shiftedArr.push(letter)
})

console.log(shiftedArr.join(""))
