// Return even arrays up to highest number
function createEvenArray(highestNum) {
    const evenArr = []
    for (let i = 2; i <= highestNum; i+=2) {
        evenArr.push(i)
    }
    console.log(evenArr)
}

createEvenArray(14)

// Return an array with evens first followed by odds
const addOdds = (evensOnlyArray) => {
    const oddArr = []
    for (let i=0; i < evensOnlyArray.length; i++) {
        evensOnlyArray[i] === 2 ? oddArr.push(1, 3) : oddArr.push(evensOnlyArray[i] + 1)
    }
    const combinedArr = evensOnlyArray.concat(oddArr)
    console.log(combinedArr)
    return combinedArr
}

addOdds([2,4,6,8,10])

// function sorts the array
function sortNums(numberArray) {
    return numberArray.sort((a, b) => a - b)
}

console.log(sortNums(addOdds([2,4,6,8,10])))