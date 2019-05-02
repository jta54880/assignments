// Install readline and destructure some methods
const readlineSync = require("readline-sync")
const {question, keyInYN} = readlineSync

// create a Player constructor
function Player(name) {
    this.name = name
    this.hitPoints = 100
    this.items = ["magical amulet"]
    this.attPower = randAttPower(this.hitPoints)
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
    this.attPower = randAttPower(this.hitPoints)
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
function randAttPower(hp) {
    let num = Math.floor(Math.floor(Math.random() * (hp - (hp*.5) + 1)) + hp*.5)
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

// function to print user data
function printUserData(user) {
    let playerData = `\n**********\nName: ${user.name}\nHP: ${user.hitPoints}\nItems: ${user.items.join(", ")}\n**********\n`
    return playerData
}

// function for walking (generate 1/3 chance of encountering enemy)
function walk() {
    let ranNum = randNum()
    if (ranNum < 0.66) {
        console.log(`\n...Nothing Here... Let's keep walking.\n`)
        return false
    } else {
        console.log(`\nEnemy Approaching...!\n`)
        return true
    }
}

// walking sequence 33% chance encounter enemy loop
function walking(player) {
    let decideToWalk = false
    while(!decideToWalk) {
        let response = question("\nStart walking? 'w' to walk, 'print' to print player data\n")
        if (response === 'print') {
            console.log(printUserData(player))
        } else if (response !== 'w') {
            console.log(`\nInvalid response...('w' or 'print')\n`)
        } else {
            let enemyNear = walk()
            if (enemyNear === true) {
                const enemy = createEnemy()
                console.log(`\nNew Enemy: ${enemy.name} wishes to fight...\nEnemy Data: \nHP: ${enemy.hitPoints}\nAttack Power: ${enemy.attPower}\n`)
                decideToWalk = !decideToWalk
                return enemy
            }
        }
    }
}

// decide to fight or run away loop
function fightOrFlight(player) {
    let madeDecision = false
    while(!madeDecision) {
        let response = question("\nWould you like to attack or run? (Enter 'a' to attack, 'r' to run or 'print to see player data)\n")
        if (response === 'print') {
            console.log(printUserData(player))   
        } else if (response === 'a') {
            madeDecision = !madeDecision
            console.log("\nLet's get it on\n")
            return true
        } else if (response === 'r') {
            madeDecision = !madeDecision
            console.log("\nOh boy, Running is a weak strategy...\n")
            return false
        } else {
            console.log("\nInvalid response...('a', 'r' or 'print)\n")
        }
    }
}

// fight sequence loop
function attackSequence(player, enemy) {
    let fightOver = false
    while(!fightOver) {
        console.log(`\n${player.name} attacks with power: ${player.attPower}\n`)
        enemy.hitPoints -= player.attPower
        console.log(`\n${enemy.name} now has an HP of ${enemy.hitPoints}\n`)
        if (enemy.hitPoints <= 0) {
            console.log(`\nYou've killed ${enemy.name}\n`)
            console.log(`\nYour victory has rewarded you with a 10 point HP boost and a shiny new relic: ${enemy.item}\n`)
            player.hitPoints += 10
            player.items.push(enemy.item)
            fightOver = !fightOver
        } else {
            player.attPower = randAttPower(player.hitPoints)
            console.log(`\n${enemy.name} attacks with power: ${enemy.attPower}\n`)
            player.hitPoints -= enemy.attPower
            console.log(`\n${player.name} now has an HP of ${player.hitPoints}\n`)
            if (player.hitPoints <= 0) {
                console.log(`\n${enemy.name} over powered you. youve died, bettter luck next time\n`)
                fightOver = !fightOver
            } else {
                player.attPower = randAttPower(player.hitPoints)
                enemy.attPower = randAttPower(enemy.hitPoints)
            }
        }     
    }
    return player
}

// run logic, 50% chance die, 50% chance survive but with damage
function runSequence(player, enemy) {
    let ranNum = randNum()
    player.hitPoints -= enemy.attPower
    // if (ranNum < .5) {
    //     player.hitPoints = 0
    //     console.log("\nYou're flight tactic proved disasterous.  You're Dead...RIP\n")
    //     return player
    // } else if (player.hitPoints <= 0) {
    //     console.log("\nYou're flight tactic proved disasterous.  You're Dead...RIP\n")
    //     return player 
    // }
    if (ranNum < .5 || player.hitPoints <= 0) {
        console.log("\nYou're flight tactic proved disasterous.  You're Dead...RIP\n") 
        player.hitPoints = 0
        return player 
    }
    return player
}

/* -----------------------------functional attempt----------- */
/* -----------GAME PLAY------------- */
const player = intro()

let gameOver = false

while(!gameOver) {
    const enemy = walking(player)
    let fight = fightOrFlight(player)
    
    if (fight) {
        attackSequence(player, enemy)
        if (player.hitPoints > 0) {
            console.log(`\ngood fighting! Let's keep walking...\n`)   
        } else {
            console.log(`Try again!`)  
            gameOver = !gameOver 
        }
    } else {
        runSequence(player, enemy)
        if (player.hitPoints > 0) {
            console.log(`\nWow! You're Lucky lord ${player.name}.\n However, you took some damage...your current HP is: ${player.hitPoints}\n\n`)   
        } else {
            console.log(`\nTry again soon!\n`)  
            gameOver = !gameOver 
        }  
    }
}
/* -----------GAME PLAY------------- */
/* -----------------------------functional attempt----------- */