// function collectAnimals(/*your code here*/) {  
//     /*and here*/ 
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// Task 1
// -----------
const collectAnimals = (...animals) => animals

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")) 
console.log(collectAnimals(["dog", "cat", "mouse", "jackolope", "platypus"]))

// Task 2
// -----------
function combineFruit(fruit, sweets, vegetables){
    return {fruit: fruit, sweets: sweets, vegetables: vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))

// Task 3
// ------------
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};

const {location, duration} = vacation
  
function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence())

// Task 4
// -------------
function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst([1, 2, 3]))

// Task 5
// --------------
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))

// Task square
// ------------
function combineAnimals(...arr) {  
    return [...arr]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)) 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Task Diamond 1
// --------------
const product = (...nums) => {
    const numArr = nums
    return numArr.reduce((acc, number) => acc * number, 1)
}

console.log(product(1,2,3,4,5))

// Task Diamond 2
// --------------
const unshift = (...nums) => nums.concat(...arr)
console.log([1,2,3],4,5,6,7)