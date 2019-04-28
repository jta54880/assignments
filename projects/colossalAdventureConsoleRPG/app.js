// player CONSTRUCTOR
function Player(userName) {
    this.userName = userName
    this.hitPoints = 100
    this.itemInventory = ["Lucky Warrior Pendant"]
    this.attackPower = () => Math.floor(Math.random() * 100 + 20)
    this.didSurviveAttack = false
    this.didDefeatEnemy = false
    this.isEscaping = false
}

// enemy CONSTRUCTOR
function Enemy(enemyName) {
    this.enemyName = enemyName
    this.hitPoints = 100
    this.itemInventory = []
    this.attackPower = () => Math.floor(Math.random() * 100 + 20)
    this.didSurviveAttack = false   
}

// create a newPlayer (with userName)
function createPlayer(name) {
    const newPlayer = new Player(name)
    return newPlayer
}

console.log(createPlayer("Yim"))

// select a random (out of 3) named enemy
function selectEnemy(ranNum) {
    const enemyArr = ["Boogie", "Woogie", "Moe"]
    let randomNum = Math.floor(Math.random() * 3)
    let enemyName = enemyArr[randomNum]
    const newEnemy = new Enemy(enemyName)
    return newEnemy
}

console.log(selectEnemy())

function randomEnemy() {
    let randomNum = Math.floor(Math.random() * 2)
    let newEnemy = selectEnemy(randomNum)
        return newEnemy
    
}

console.log(randomEnemy())

// const ranNum = () => Math.floor(Math.random() * 2)

const readLine = require("readline-sync")
const {keyInYN, keyInSelect, question, keyIn} = readLine

let gameOver = false
let gameIntro = "Welcome to the Land of Colossal.  The game of splendor and adventure.  Survive and defeat enemies to earn tokens for your battles.  Your adventure awaits..."

while (!gameOver) {
    console.log(gameIntro)
    let response = keyInYN("Do you dare brave the Land of Colossal?")
    if (!response) {
        gameOver = true
        console.log("Perhaps after a few drinks you can muster up enough courage...Until next time!")
    } else {
        let userName = question("What is your name, brave warrior? ")
        const player = createPlayer(userName)
        let printPlayer = `***********************\n\tPlayer: ${player.userName}
            User HP: ${player.hitPoints}
            User Items: ${player.itemInventory.join(", ")}\n***********************\n`
        let wantToWalk = false
        while (!wantToWalk) {
            let response = keyIn(`Would you like to find some tokens? (Enter 'w' to start walking or 'p' to see player info.`, {limit: 'wp'})  
            if (response==='p') {
                console.log(printPlayer)
            } else if (response==='w') {
                console.log("We're walking!")
                let enemyApproaching = false
                let ranNum = Math.random()
                if (ranNum <= .33) {
                    enemyApproaching = true
                    let enemy = randomEnemy()
                    console.log(`Uh Oh, looks like ${enemy.enemyName} is approaching`)
                    attackOrRun()
                } console.log("nothing here...")
                
                    // console.log("An enemy is approaching...")
                    // const enemy = randomEnemy()
                    
                    // console.log(`Oh No!! It looks like it's ${enemy.enemyName}`)
                
                
            }
        }
    }
}