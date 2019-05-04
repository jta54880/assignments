/* ******************************************* */
// green circle 1
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals 
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]
/* ******************************************* */
// green circle 2
// Write a function that returns a food object with the array names as properties using Object Literals:


function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))
/* ******************************************* */
// green circle 3
// Use destructuring to fill in the blanks and use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence(){
    const {location, duration} = vacation
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence())
/* ******************************************* */
// green circle 4
// Use destructuring to make this code ES6:

function returnFirst(...items){
    // resting x # items into array (...items)
    // destructuring items array
    // [firstItem = items[0], blank for items[1], thirdItem = items[2]]
    // if you leave an empty part the destructuring it will pass it's assignment of items[1]
    const [firstItem,,thirdItem] = items; /*change this line to be es6*/
    //firstItem = 1, thirdItem = 3 -- 1+3 =4
    return firstItem + thirdItem
}

console.log(returnFirst(1,2,3,4,5))
/* ******************************************* */
// green circle 5
// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    const [firstFav, secondFav, thirdFav] = arr

    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))
/* ******************************************* */
// blue square
// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...arr) { 
    // take in three separate arrays (...arr (rest))
    // destructure the first, second and third array from arr
    // return an array[] with those destructured arrays unwrapped (spread, ...first, ...second ...) 
    const [first, second, third] = arr  
    return [...first, ...second, ...third]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]
/* ******************************************* */
// black diamond 1
// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }
function product(...numbers) {  
    return numbers.reduce((acc, number) => acc * number, 1)
}

console.log(product(1,2,3,4,5,6,7,8))
/* ******************************************* */
// black diamond 2
// Make the following function more ES6xy. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {  
//   return [a, b, c, d, e].concat(array);
// }

// take in an array and rest the rest (individual numbers)
// return an array [] of spread (unwrapped array and nums)
// should return one single array
function unshift(array, ...nums) {  
    return [...array, ...nums];
}

console.log(unshift([1,2,3,4,5], 6,7,8,9,10))
/* ******************************************* */
// black double diamond
// Write some destructuring code to help this function out. Use object literals to simplify it:

function populatePeople(names){
    console.log(names)
    return names.map(name => {
        name = name.split(" ");
        // your code
        // name is an array of ["Frank", "Peterson"]...
        // destructure first index into variable firstName
        // destructure second index into variable lastName
        const [firstName, lastName] = name
        return {
            // object literal array destructured variables
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

// [
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
// ]