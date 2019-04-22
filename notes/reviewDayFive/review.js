// Nesting
/* -------------------------- */
const person = {
    name: "Johnny",
    age: 93,
    hobbies: [
        {
            name: "Kite Boarding",
            gear: ["Kite", "Board", "Wind"]
        },
        {
            name: "Bird Watching",
            gear: ["Binoculars", "Patience", "Eyesight", "Bird Guide", "Bird Person", "Shotgun"]
        },
        {
            name: "Backpacking",
            gear: ["Backpack backpack"]
        }
    ]
}
// print name
console.log(person.name)
// print hobbies
console.log(person.hobbies)
// print "bird watching"
console.log(person.hobbies[1].name)
// print "Backpack backpack"
console.log(person.hobbies[2].gear[0])
// print "Bird Person"
console.log(person.hobbies[1].gear[4])
// push "tape" to backbacking hobbie
let backpackHobbyGear = person.hobbies[2].gear
backpackHobbyGear.push("tape")

// Objects are full of {key: value} pairs keys are synonomys with property


// String Methods
/* -------------------------- */
const str = "I am sorry for my mistake"

// slice does not save the slice nor modify the original 
    // .slice(starting point, ending point)
// print only I from str
let newStr = str.slice(0, 1)
console.log(newStr)
// print everything but 'mistake'
console.log(str.slice(-7))

console.log(str.slice(2, 4))

// indexOf returns index of something
    // need to save to a variable to keep it

    // .indexOf(str to find, starting point in str (need to add 1 or more to find 2nd instance, 3rd instance...))
console.log(str.indexOf('my'))
// get 'my'
let newIndexStr = str.slice(str.indexOf('my'), str.indexOf('my') + 2)
console.log(newIndexStr)

// .split(separator " ")
    // split returns an array separated by the separator
    // must save to variable to keep array since it does not modify original String/Array

// .splice(starting point, how many items to be removed, what to replace what was spliced)

// Constructor Functions...Next Week
/* -------------------------- */