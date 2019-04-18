function ifOlympics() {
    // prelim 1
    if (5 > 3) {
        console.log("is greater than")
    }
    
    // prelim 2
    var cat = 'cat'
    
    var dog = 'dog'
    
    if (cat.length === 3) {
        console.log("is the length")
    }
    
    // prelim 3
    if (cat === dog) {
        console.log("the same")
    } else {
        console.log("not the same")
    }

    // bronze 1
    var person = {
        name: "Bobby",
        age: 12
    }

    person.age >= 18 ? console.log(`${person.name} is allowed to go to the movie`) : console.log(`Sorry ${person.name}, you shall not pass`)

    // bronze 2
    person.name[0] === "B" ? console.log(`${person.name} is allowed to go to the movie`) : console.log(`Sorry ${person.name}, you shall not pass`)

    // bronze 3
    person.name[0] === "B" && person.age > 18 ? console.log(`${person.name} is allowed to go to the movie`) : console.log(`Sorry ${person.name}, you shall not pass`)

    // silver 1
    if (1 === "1") {
        console.log("loose")
    } else if (1 == "1") {
        console.log("abstract")
    } else {
        console.log("not equal at all")
    }

    // silver 2
    if (1 <= 2 && 2 === 4) {
        console.log("yes")
    }

    // gold 1
    typeof dog === 'string' ? console.log(true) : console.log(false)

    // gold 2
    typeof "true" === 'boolean' ? console.log(true) : console.log(false)

    // gold 3
    typeof cat === 'undefined' ? console.log(true, `${cat} is not defined`) : console.log(false, `${cat} is defined`)

    // gold 4
    if ("13" > 12) {
        console.log("what?!")
    } else {
        console.log("didn't think so")
    }
    // will coerce to match variable type... or is it comparing unicode values??

    // gold 6
    var myNum = 10
    myNum % 2 === 0 ? console.log("even") : console.log("odd")
}

// fire the function
ifOlympics()



