// 1
const capitalizeAndLowercase = (str) => str.toUpperCase().concat(str.toLowerCase())

console.log(capitalizeAndLowercase("Hello")) // => "HELLOhello"

// 2
const findMiddleIndex = (str) => Math.floor(str.length / 2)
console.log(findMiddleIndex("Hello")) // => 2
console.log(findMiddleIndex("Hello World")) // => 5

// 3
const returnFirstHalf = (str) => str.slice(0, Math.floor(str.length / 2))
console.log(returnFirstHalf("Hello")) // => "He"
console.log(returnFirstHalf("Hello World")) // => "Hello"

// 4
const capilizeAndLowercase = (str) => {
    const firstHalf = str.slice(0, Math.floor(str.length / 2)).toUpperCase()
    const lastHalf = str.slice(Math.floor(str.length / 2)).toLowerCase()
    return firstHalf.concat(lastHalf)
}
console.log(capilizeAndLowercase("Hello")) // => "HEllo"
console.log(capilizeAndLowercase("Hello World")) // => "HELLO world"

// Optional Challenge **** finish this one!!!!!!!!!!!!!!!!
// .substring(i) returns string @ index w/in parenthesis
// .charAt(i) returns index of char @ index w/in parrenthesis
// .join (like split) takes a seperator as an argument to join items w/in array
function capitalize(str) {
    let lowerCaseStr = str.toLowerCase()
    let splitStr = lowerCaseStr.split(" ")
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
        console.log(splitStr)
    }
    let upperCaseStr = splitStr.join(" ")
    return upperCaseStr
}

const capitalizeES6 = (str) => {
    let lowerCaseStr = str.toLowerCase()
    let splitStr = lowerCaseStr.split(" ")
    const upperCaseArr = splitStr.map(word => 
        word = word.charAt(0).toUpperCase().concat(word.substring(1))
    )
    let upperCaseStr = upperCaseArr.join(" ")
    return upperCaseStr
}

console.log(capitalize("hey friends! practice practice practice!")) // -> "Hey Friends! Practice Practice Practice!"
console.log(capitalizeES6("hey, hey friends! practice practice practice!"))