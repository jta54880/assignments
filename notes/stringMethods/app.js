// String Methods
/*----------------------------------*/
// function
function speak() {
    console.log("hello")
}

// arrow function
const arrowSpeak = () => console.log("hello")

speak()
arrowSpeak()

// object
const person = {
    name: "John",
    age: 23,
    speak: () => `${person.name} says hello!`
}

console.log(person.name)
console.log(person["name"])
console.log(person.speak())

// String Methods
// .concat
let str1 = "I am a "
let str2 = "dog coder"

console.log(str1.concat(str2))

// .indexOf args=where to begin, where to end
let myStr = "I am a string and I am better than you"

let startIndex = myStr.indexOf("better")

// .slice args=what index begin, what index end--if only one arg, will slice at that index
console.log(myStr.slice(startIndex, startIndex + 6))

// .toUpperCase
console.log(myStr.toUpperCase())

// .split creates an aray from a string, need a seperator as an arg to separate multiple items
console.log(myStr.split(' '))

// .split does not create an array, but if you want to save the .split() must create a variable for it
myStr.push('go')