let readline = require("readline-sync")

// A function that adds two numbers and returns the result
let sum = 0
const add = (num1, num2) => sum = num1/1 + num2/1
// A function that multiplies two numbers and returns the result
let product = 0
const mul = (num1, num2) => product = num1 * num2
// A function that divides two numbers and returns the result
let quotient = 0
const div = (num1, num2) => quotient = num1 / num2
// A function that subtracts two numbers and returns the result
let difference = 0
const sub = (num1, num2) => difference = num1 - num2
// Each function will have 2 parameters, num1, num2
// On the console the prompt will print to the user:
// Please enter your first number (store that number)
// Please enter your second number (store that number)
// Please enter the operation to perform: add, sub, mul, div (then store the operation)
// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// You will then print to the console: The result is: [the result]

// const operation = ["add", "sub", "mul", "div"]
const operation = ["add", "sub", "mul", "div"]

let num1 = readline.keyIn("Please Enter Your First Number: ")
let num2 = readline.keyIn("Please Enter Your Second Number: ")

let index = readline.keyInSelect(operation, "Select which operation you would like to run: ")

if (operation[index] === "add") {
    // add(num1, num2)
    console.log(`The result is: ${add(num1, num2)}`)
} else if (operation[index] === "sub") {
    // sub(num1, num2)
    console.log(`The result is: ${sub(num1, num2)}`)
} else if (operation[index] === "mul") {
    // mul(num1, num2)
    console.log(`The result is: ${mul(num1, num2)}`)
} else if (operation[index] === "div") {
    // div(num1, num2)
    console.log(`The result is: ${div(num1, num2)}`)
} else {
    console.log("Thank you, come again")
}