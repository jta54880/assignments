// 1
function doubleNumbers(arr) {
     const doubleNums = arr.map(el => el * 2)
     return doubleNums
}

console.log(doubleNumbers([2, 5, 100]))

// 2
function stringItUp(arr){
    const strNums = arr.map(el => el.toString())
    return strNums
}
  
console.log(stringItUp([2, 5, 100]))

// 3
function capitalizeNames(arr){
    const lowerArr = arr.map(el => el.toLowerCase())
    const capNames = lowerArr.map(el => el[0].toUpperCase().concat(el.substring(1, el.length)))
    return capNames
    // .map(name => name[0].toUpperCase() + name.slice(1))
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

// 4
function namesOnly(arr){
    const objNames = arr.map(obj => obj.name)
    return objNames
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]))

// 5
function makeStrings(arr){
    const admission = arr.map(obj => {
        return obj.age >= 18 ? `${obj.name} can go to The Matrix` : `${obj.name} is under age!!`
    })   
    return admission
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))

// 6
function readyToPutInTheDOM(arr){
    const domObjs = arr.map(obj => `<h1>${obj.name}</h1><h2>${obj.age}</h2>`) 
    return domObjs  
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))

// for quiz 1 ...
var str = "Hello my name is Albert"

// function myStr(str) {
//     const strArr = str.split(" ")
//     strArr.splice(-1, 1, "Jake")
//     console.log(strArr.join(" "))
// }

const myStr = str => {
    const strArr = str.split(" ")
    strArr.splice(-1, 1, "Jake")
    return strArr.join(" ")
}

console.log(myStr(str))