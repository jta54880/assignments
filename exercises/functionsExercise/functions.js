// function with 2 params and returns sum
const addTwoNumbersES6 = (x, y) => x + y

function addTwoNumbersES5(x, y) {
    return x + y
}

console.log(addTwoNumbersES5(3, 4))
console.log(addTwoNumbersES6(4, 5))

// function with 3 params and returns the largest
const biggestNum = (x, y, z) => {
   return x > y && x > z ? x : y > x && y > z ? y : z > x ? z : "there is NO single largest number"
}

console.log(biggestNum(0, 18, 0))

// function 1 param returns 'odd' or 'even'
function oddOrEven(x) {
    return x % 2 === 0 ? "even" : typeof x === "number" ? "odd" : "input is a non-number string"
}

const oddEven = (x) => x % 2 === 0 ? "even" : typeof x === "number" ? "odd" : "input is a non-number string"

console.log(oddOrEven('three'))
console.log(oddEven(59))

// function 1 param string, if str.length <= 20, return string concatenated w/ itself. otherwise return first half of string
function concatStr(str) {
    let doubleStr = ""
    let halfStr = ""
    return str.length <= 20 ? doubleStr = str.concat(str):     halfStr = str.slice(0, Math.floor(str.length/2))
}

const concatStrES6 = (str) => {
    let doubleStr, halfStr = ""
    return str.length <= 20 ? doubleStr = `${str} ${str}` : 
        halfStr = str.slice(0, Math.floor(str.length/2))
}

console.log(concatStr("Hello, my name is yellow"))
console.log(concatStrES6 ("Hello, my name is yellow"))

// OPTIONAL CHALLENGE 1
// function takes a number prints n fibonacci and returns sum
const fibonacci = (n) => {
    const fibonacciNums = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
    const nFibNums = fibonacciNums.slice(0, n)
    let sum = 0
    const fibMap = nFibNums.map(num => sum += num)
    return sum
}

function fibonacciFunc(n) {
    const fibonacciNums = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
    const nFibNums = fibonacciNums.slice(0, n)
    const fibNumString = nFibNums.join(" + ")
    console.log(fibNumString)
    let sum = 0
    for (let i = 0; i < nFibNums.length; i++) {
        sum += nFibNums[i]
    }
    return sum  
}

console.log(fibonacci(6))
console.log(fibonacciFunc(3))

// OPTIONAL CHALLENGE 2
// func accepts string, return most frequent occuring letter

