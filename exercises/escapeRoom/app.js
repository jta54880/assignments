const readlineSync = require('readline-sync')

const options = ["Put your hand in the hole", "Find the key", "Open the door"]
const keyOptions = ["Put your hand in the hole", "Open the door"]
const openOptions = ["Put your hand in the hole", "Find the key"]
const openWithKeyOptions = ["Open the door"]
let gameOver = false

while(!gameOver) {
    
    let playGame = readlineSync.keyInYN("Would you like to try to ESCAPE the ROOM?")

    if (playGame) {
        let response = readlineSync.keyInSelect(options, "How would you like to Escape this Room?")
        if (options[response] === "Put your hand in the hole") {
            gameOver = true
            console.log("GAME OVER! Never put your hand in the hole---You're Dead!!!")
        } else if (options[response] === "Find the key") {
            console.log("Good, choice... You've got the key!")
            let keyResponse = readlineSync.keyInSelect(keyOptions, "Now What?") 
            if (keyOptions[keyResponse] === "Put your hand in the hole") {
                gameOver = true
                console.log("GAME OVER! Never put your hand in the hole---You're Dead!!!")    
            } else if (keyOptions[keyResponse] === "Open the door") {
                gameOver = true
                console.log("Great Job, You've Escaped!!!...Safe Travels My Friend")
            } else {
                gameOver = true
                console.log("Thanks for playing, Maybe you can escape Next Time...")
            }
        } else if (options[response] === "Open the door") {
            console.log("Can't Open! Need a Key")
            let openResponse = readlineSync.keyInSelect(openOptions, "Now What?") 
            if (openOptions[openResponse] === "Put your hand in the hole") {
                gameOver = true
                console.log("GAME OVER! Never put your hand in the hole---You're Dead!!!")    
            } else if (openOptions[openResponse] === "Find the key") {
                console.log("Good, choice... You've got the key!")
                let openWithKeyResponse = readlineSync.keyInSelect(openWithKeyOptions, "Now What?")
                if (openWithKeyOptions[openWithKeyResponse] === "Open the door") {
                    gameOver = true
                    console.log("Great Job, You've Escaped!!!...Safe Travels My Friend")
                } else {
                    gameOver = true
                    console.log("Thanks for playing, Maybe you can escape Next Time...")
                }   
            } else {
                gameOver = true
                console.log("Thanks for playing, Maybe you can escape Next Time...")
            }
        } else {
            gameOver = true
            console.log("Thanks for playing, Maybe you can escape Next Time...")
        }
    } else {
        gameOver = true
        console.log("Kewl, Maybe Next Time...!")
    }

}




