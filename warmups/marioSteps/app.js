// Create a function which takes a single character and prints out the 'Mario Steps', where the base is 5 chars long, the next has a leading single space and then 4 charachters, and so on.

function marioSteps(char) {
    const marioArr = []
    let base = 5
    for (let i = 0; i < base; i++) {
        for (let j = 0; j <= base; j++) {
            marioArr.push(char)
            // console.log(char)
        } 
        base--  
    }
    // console.log(marioArr)

    console.log(`
        ${marioArr[14]}
       ${marioArr[13]}${marioArr[12]}
      ${marioArr[11]}${marioArr[10]}${marioArr[9]}
     ${marioArr[8]}${marioArr[7]}${marioArr[6]}${marioArr[5]}
    ${marioArr[4]}${marioArr[3]}${marioArr[2]}${marioArr[1]}${marioArr[0]}
    `)
}

marioSteps("Z")

// KEN'S Solution
function marioStack(char){
    let spaceTracker = 5 //keeps track of how much whitespace to save
    for(let i = 0; i < 5; i++){
        let string = '' //begin each loop with an empty string
        for(let n = 0; n <= 5; n++){
            //use the nested loop to build each line for printing
            //logic below evaluates how much leading white space vs. characters to print in the string and concatenates to string
            n >= spaceTracker ? (string += char) : (string += ' ') 
        }
        //reduce char tracker for each iteration
        spaceTracker--
        //console.log the strings in order from top to bottom
        console.log(string)
    }
}

marioStack('#')
const stringArray = ["cat", "dog", "cow"]
const animals = []
animals.push(stringArray.forEach(el => "big " + el))
console.log(animals)