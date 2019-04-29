const readlineSync = require("readline-sync")
const {question, keyInYN} = readlineSync

function Player(name) {
    this.name = name
    this.hitPoints = 100
    this.items = ["magical amulet"]
}

function createPlayer(name) {
    const player = new Player(name)
    return player
}

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

function createEnemy() {
    let num = randNum()
    let name = ""
    num <= .33 ? name = "Woogie" : num > .66 ? name = "Boogie" : name = "Trollie"
    const enemy = new Enemy(name)
    return enemy
}

function randNum() {
    let num = Math.random()
    return num
}

function randAttPower() {
    let num = Math.floor(Math.random() * (90 - 45 + 1)) + 45
    return num
}

function intro() {
    console.log(`\nWelcome to the Land of Colossal.  Brave the unpredictable terrain to vanquish foes and collect relics.  Good Luck Courageous One.\n\n`)
    let player = userName()
    console.log(`\nWelcome lord ${player.name}, let us begin...`)
    return player
}

function userName() {
    let name = question("What is your name, my lord?\n")
    const player = createPlayer(name)
    return player
}

// Intro
const player = intro()
// Get player Name
let gameOver = false
while(!gameOver) {
    let response = question(`\nEnter 'w' to walk the terrain or 'print' to see your info.\n`)
    if (response === 'print') {
        console.log(`\n**********\nName: ${player.name}\nHP: ${player.hitPoints}\nItems: ${player.items.join(", ")}\n**********\n`)
    } else if (response !== 'w') {
        console.log(`\nInvalid entry...\n`)
    } else {
        let num = randNum()
        if (num <= .66) {
            console.log(`\nNothing Here... Let's keep walking.\n`)
        } else {
            console.log(`\nHere's some action...\n`)
            const enemy = createEnemy()
            console.log(`It looks like ${enemy.name} is approaching!!!`)
            let enemyClose = false
            while (!enemyClose) {
                let decision = question(`\nDo you wish to Attack (enter 'a') or Run away (enter 'r')?\n...(or enter 'print' to see your info)\n`)
                if (decision === 'print') {
                    console.log(`\n**********\nName: ${player.name}\nHP: ${player.hitPoints}\nItems: ${player.items.join(", ")}\n**********\n`)
                } else if (decision === 'r') {
                    let num = randNum()
                    // console.log(num)
                    let attack = randAttPower()
                    // console.log(attack)
                    if (num <= .5 || player.hitPoints - attack <= 0) {
                        console.log(`\nSo sorry ${player.name}, ${enemy.name} struck a fatal blow.  You're dead!!! Better Luck to you on your next journey, my lord\n`)

                        enemyClose = !enemyClose
                        gameOver = !gameOver
                    } else {
                        console.log(`\nWow, that was close! You've escaped... but not without consequences. You've sustained a decrease in HP by ${attack}\n`)
                        player.hitPoints -= attack
                        console.log(`\nYour current HP is ${player.hitPoints}\n`)
                        
                        enemyClose = !enemyClose
                        if (player.hitPoints <= 0) {
                            console.log(`\nThe damage you sustained was too much for you to survive. You Have Died! Better Luck next time.\n`)
                            
                            enemyClose = !enemyClose
                            gameOver = !gameOver
                        }
                    }
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
                        
                        enemyClose = !enemyClose
                    } else {
                        console.log(`\nNice hit! Get ready, ${enemy.name} is initiating his attack\n`)
                        player.hitPoints -= enemyAttPower
                        console.log(`\nBOOM!! ${enemy.name} hit you with a blow of ${enemyAttPower} points.  Your current HP is: ${player.hitPoints}\n`)
                        if (player.hitPoints <= 0) {
                            console.log(`\nThe damage you sustained was too much for you to survive. You Have Died! Better Luck next time.\n`)

                            enemyClose = !enemyClose
                            gameOver = !gameOver
                        } else {
                            console.log(`\nWow, what feat of strength! Your HP = ${player.hitPoints}. Your turn to attack again!\n`)
                            enemy.hitPoints -= playerAttPower
                            if (enemy.hitPoints <= 0) {
                                console.log(`\nYou've delivered a fatal blow, and have killed ${enemy.name}! You have collected a new relic: ${enemy.item},  plus an HP bonus of 20pts.\n`)
                                player.items.push(enemy.item)
                                player.hitPoints += hitPointBonus
                        
                                enemyClose = !enemyClose   
                            } else {
                                console.log(`\nWow, what feat of strength! Your HP = ${player.hitPoints}. Your turn to attack again!\n`)
                                enemy.hitPoints -= playerAttPower   
                                if (enemy.hitPoints <= 0) {
                                    console.log(`\nYou've delivered a fatal blow, and have killed ${enemy.name}! You have collected a new relic: ${enemy.item},  plus an HP bonus of 20pts.\n`)
                                    player.items.push(enemy.item)
                                    player.hitPoints += hitPointBonus
                                    enemyClose = !enemyClose   
                                }
                            }


                        }
                    }
                } else {
                    console.log(`\nInvalid entry...\n`)
                }
            }
            
        }
    }
}

// Start Game -- while gameover=false stay here
// walk/print
// 