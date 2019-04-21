// player CONSTRUCTOR
function Player(userName) {
    this.userName = userName
    this.hitPoints = 100
    this.itemInventory = []
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
function selectEnemy() {
    const enemyArr = ["Boogie", "Woogie", "Moe"]
    let randomNum = Math.floor(Math.random() * 3)
    let enemyName = enemyArr[randomNum]
    const newEnemy = new Enemy(enemyName)
    return newEnemy
}

console.log(selectEnemy())

function randomEnemy() {
    let randomNum = Math.floor(Math.random() * 3)
    let newEnemy = selectEnemy()
    randomNum != 1 ? console.log(`Continue on Your Journey (enter 'w')`) : console.log(`${newEnemy.enemyName} wishes to fight you.`)
    return newEnemy
}

console.log(randomEnemy())