// Install readline and destructure some methods
const readlineSync = require("readline-sync")
const {question, keyInYN} = readlineSync

// create a Player constructor
function Player(name) {
    this.name = name
    this.hitPoints = 100
    this.items = ["magical amulet"]
}

// function to create a player taking in a name
function createPlayer(name) {
    const player = new Player(name)
    return player
}

// create an Enemy constructor with default HP based on the randomly generated Enemey Name
function Enemy(name) {
    this.name = name
    if (name === "Boogie") {
        this.hitPoints = 90
        this.item = "dragon glass dagger"
    } else if (name === "Woogie") {
        this.hitPoints = 70 
        this.item = "bag o gems"
    } else {
        this.hitPoints = 50
        this.item = "silver loot"
    }
}

// create an enemy and retrun it with a random enemy name
function createEnemy() {
    let num = randNum()
    let name = ""
    num <= .33 ? name = "Woogie" : num > .66 ? name = "Boogie" : name = "Trollie"
    const enemy = new Enemy(name)
    return enemy
}

// random number generator function
function randNum() {
    let num = Math.random()
    return num
}

// random attack power generator for both player and enemy
function randAttPower() {
    let num = Math.floor(Math.random() * (90 - 45 + 1)) + 45
    return num
}

// intro function
function intro() {
    console.log(`\nWelcome to the Land of Colossal.  Brave the unpredictable terrain to vanquish foes and collect relics.  Good Luck Courageous One.\n\n`)
    let player = userName()
    console.log(`\nWelcome lord ${player.name}, let us begin...`)
    return player
}

// function to save player name and create a Player from constructor
function userName() {
    let name = question("What is your name, my lord?\n")
    const player = createPlayer(name)
    return player
}

// Intro
const player = intro()
// Get player Name
let gameOver = false
// while gameOver is false run this while loop, when true break out -- game over
while(!gameOver) {
    let response = question(`\nEnter 'w' to walk the terrain or 'print' to see your info.\n`)
    // if type 'print', prints user data, if 'w' walks, if anything else -- reruns
    if (response === 'print') {
        console.log(`\n**********\nName: ${player.name}\nHP: ${player.hitPoints}\nItems: ${player.items.join(", ")}\n**********\n`)
    } else if (response !== 'w') {
        console.log(`\nInvalid entry...\n`)
    // 'w' was selected
    } else {
        let num = randNum()
        // 2/3 chance nothing happens
        if (num <= .66) {
            console.log(`\nNothing Here... Let's keep walking.\n`)
        // 1/3 chance an enemy approaches
        } else {
            console.log(`\nHere's some action...\n`)
            // create a random enemy
            const enemy = createEnemy()
            console.log(`It looks like ${enemy.name} is approaching!!!`)
            let enemyNotClose = false
            // while there is an enemy close, run while loop
            while (!enemyNotClose) {
                let decision = question(`\nDo you wish to Attack (enter 'a') or Run away (enter 'r')?\n...(or enter 'print' to see your info)\n`)
                // if 'print' print user data, if 'a' attack, if 'r' run away, if anything else rerun
                if (decision === 'print') {
                    console.log(`\n**********\nName: ${player.name}\nHP: ${player.hitPoints}\nItems: ${player.items.join(", ")}\n**********\n`)
                // if 'r' 50/50 survive or escape (taking damage)
                } else if (decision === 'r') {
                    let num = randNum()
                    // console.log(num)
                    let attack = randAttPower()
                    // console.log(attack)
                    if (num <= .5 || player.hitPoints - attack <= 0) {
                        console.log(`\nSo sorry ${player.name}, ${enemy.name} struck a fatal blow.  You're dead!!! DON"T RUN AWAY!! Better Luck to you on your next journey, my lord\n`)

                        enemyNotClose = !enemyNotClose
                        gameOver = !gameOver
                    } else {
                        console.log(`\nWow, that was close! You've escaped... but not without consequences. You've sustained a decrease in HP by ${attack}\n`)
                        player.hitPoints -= attack
                        console.log(`\nYour current HP is ${player.hitPoints}\n`)
                        
                        enemyNotClose = !enemyNotClose
                        if (player.hitPoints <= 0) {
                            console.log(`\nDON'T RUN AWAY!!! The damage you sustained was too much for you to survive. You Have Died! Better Luck next time.\n`)
                            
                            enemyNotClose = !enemyNotClose
                            gameOver = !gameOver
                        }
                    }
                // if 'a' generate attack power for player and enemy, player strikes first, and either kills or hurts enemy...if killed, gain 20HP and takes enemy token...if hurt enemy, enemy attacks player...if player dies--gameover, if player hurt, repeat attack logic
                } else if (decision === 'a') {
                    let hitPointBonus = 20
                    let playerAttPower = randAttPower()
                    console.log(`\nYour attack power is: ${playerAttPower} HP\n`)
                    let enemyAttPower = randAttPower()
                    console.log(`\n${enemy.name} has an attack power of: ${enemyAttPower} HP\nAnd an HP of: ${enemy.hitPoints}\n`)
                    console.log(`\nYou attack first...\n`)
                    enemy.hitPoints -= playerAttPower
                    if (enemy.hitPoints <= 0) {
                        console.log(`\nYou've delivered a fatal blow, and have killed ${enemy.name}! You have collected a new relic: ${enemy.item},  plus an HP bonus of 20pts.\n`)
                        player.items.push(enemy.item)
                        player.hitPoints += hitPointBonus
                        
                        enemyNotClose = !enemyNotClose
                    } else {
                        console.log(`\nNice hit! Get ready, ${enemy.name} is initiating his attack\n`)
                        player.hitPoints -= enemyAttPower
                        console.log(`\nBOOM!! ${enemy.name} hit you with a blow of ${enemyAttPower} points.  Your current HP is: ${player.hitPoints}\n`)
                        if (player.hitPoints <= 0) {
                            console.log(`\nThe damage you sustained was too much for you to survive. You Have Died! Better Luck next time.\n`)

                            enemyNotClose = !enemyNotClose
                            gameOver = !gameOver
                        } else {
                            console.log(`\nWow, what feat of strength! Your HP = ${player.hitPoints}. Your turn to attack again!\n`)
                            enemy.hitPoints -= playerAttPower
                            if (enemy.hitPoints <= 0) {
                                console.log(`\nYou've delivered a fatal blow, and have killed ${enemy.name}! You have collected a new relic: ${enemy.item},  plus an HP bonus of 20pts.\n`)
                                player.items.push(enemy.item)
                                player.hitPoints += hitPointBonus
                        
                                enemyNotClose = !enemyNotClose   
                            } else {
                                console.log(`\nWow, what feat of strength! Your HP = ${player.hitPoints}. Your turn to attack again!\n`)
                                enemy.hitPoints -= playerAttPower   
                                if (enemy.hitPoints <= 0) {
                                    console.log(`\nYou've delivered a fatal blow, and have killed ${enemy.name}! You have collected a new relic: ${enemy.item},  plus an HP bonus of 20pts.\n`)
                                    player.items.push(enemy.item)
                                    player.hitPoints += hitPointBonus
                                    enemyNotClose = !enemyNotClose   
                                }
                            }


                        }
                    }
                } else {
                    console.log(`\nInvalid entry...\n`) // if not 'a' 'r' or 'print' begins loop (while line 95)
                }
            }
            
        }
    }
}
