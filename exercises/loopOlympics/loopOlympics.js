function loopOlympics() {
    // prelim 1
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    
    // prelim 2
    for (let i = 9; i > -1; i--) {
        console.log(i)
    }

    // prelim 3
    const fruit = ["banana", "orange", "apple", "kiwi"]

    for (let i = 0; i < fruit.length; i++) {
        console.log(fruit[i])
    }

    // bronze 1
    const arr = []

    for (let i = 0; i < 10; i++) {
        arr.push(i)
    }

    console.log(arr)

    // bronze 2
    for (let i = 0; i < 101; i++) {
        i % 2 === 0 ? console.log(i) : null
    }

    // bronze 3
    const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    const everyOtherFruit = []

    for (let i = 0; i < fruits.length; i += 2) {
        everyOtherFruit.push(fruits[i])    
    }  
    
    console.log(everyOtherFruit)

    // silver 1
    const peopleArray = [
        {
          name: "Harrison Ford",
          occupation: "Actor"
        },
        {
          name: "Justin Bieber",
          occupation: "Singer"
        },
        {
          name: "Vladimir Putin",
          occupation: "Politician"
        },
        {
          name: "Oprah",
          occupation: "Entertainer"
        }
    ]

    const names = []
    const occupations = []

    for (let i = 0; i < peopleArray.length; i++) {
        console.log(peopleArray[i].name)
    }

    // silver 2
    for (let i = 0; i < peopleArray.length; i++) {
        names.push(peopleArray[i].name)
        occupations.push(peopleArray[i].occupation)
    }

    console.log(names, occupations)

    // silver 3
    const everyOtherName = []
    const everyOtherOccupation = []

    for (let i = 0; i < peopleArray.length; i += 2) {
        everyOtherName.push(peopleArray[i].name)
        everyOtherOccupation.push(peopleArray[i + 1].occupation)
    }
    
    console.log(everyOtherName, everyOtherOccupation)

    // gold 1
    const emptyArrThreeXThree = []
    const innerArr = []

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 1; j++) {
            innerArr.push(j)
        }
        emptyArrThreeXThree.push(innerArr)
    }
    
    console.log(emptyArrThreeXThree)

    // gold 2 ** this for reference
    const goldTwoArr = [[],[],[]]

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            goldTwoArr[i].push(i)
        }
    }

    console.log(goldTwoArr)

    // gold 3
    const goldThreeArr = []
    const goldThreeInnerArr = []

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 1; j++) {
            goldThreeInnerArr.push(i)
        }
        goldThreeArr.push(goldThreeInnerArr)
    }

    console.log(goldThreeArr)

    // gold 4
    const testArr = [[0,0,0],[0,0,0],[0,0,0],[1,2,3]]

    for (let i = 0; i < testArr.length; i++) {
        for (let j = 0; j < testArr[i].length; j++) {
            typeof testArr[i][j] === 'number' ? testArr[i][j] = "X" : null
        }
    }

    console.log(testArr)
}

loopOlympics()