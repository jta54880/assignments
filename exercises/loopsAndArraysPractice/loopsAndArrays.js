function loopsAndArrays() {
    // #1
    const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

    let compTotal = 0
    officeItems.forEach(element => element === "computer" ? compTotal++ : null)

    console.log(compTotal)

    // #2
    const peopleWhoWantToSeeMadMaxFuryRoad = [
        {
          name: "Mike",
          age: 12,
          gender: "male"
        },{
          name: "Madeline",
          age: 80,
          gender: "female"
        },{
          name: "Cheryl",
          age: 22,
          gender: "female"
        },{
          name: "Sam",
          age: 30,
          gender: "male"
        },{
          name: "Suzy",
          age: 4,
          gender: "female"
        }
    ] 

    const oldEnough = peopleWhoWantToSeeMadMaxFuryRoad.map(person => {
        const responseForAge = person.age >= 18 ? `${person.name}: old enough. ${person.gender === "female" ? "She can see it!" : "He can see it!"}` : `${person.name}: not old enough. ${person.gender === "female" ? "She shall not pass!!" : "He shall not pass!!"}`
        console.log(responseForAge)
        return responseForAge
    })

    console.log(oldEnough)

}

loopsAndArrays()

// Optional Bonus challenge
function onOrOff(arr) {
    let total = 0
    arr.forEach(element => total += element)
    return total % 2 === 0 ? "The light is off" : "The light is on"
}

console.log(onOrOff([9, 3, 4, 2]))