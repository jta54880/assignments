function handleGoombaBtn() {
    let numGoombas = document.getElementById("goomba-input").value
    let total = numGoombas * 5
    document.getElementById("goomba-total").innerHTML = `Total for Goomba's: ${total} Coins`
}

function handleBobOmbsBtn() {
    let numGoombas = document.getElementById("bob-ombs-input").value
    let total = numGoombas * 7
    document.getElementById("bob-ombs-total").innerHTML = `Total for Bob-ombs's: ${total} Coins`
}

function handleCheepCheepsBtn() {
    let numGoombas = document.getElementById("cheep-cheeps-input").value
    let total = numGoombas * 11
    document.getElementById("cheep-cheeps-total").innerHTML = `Total for Cheep-Cheep's: ${total} Coins`
}

function handleBaddiesBill() {
    let goombaTotal = document.getElementById("goomba-input").value * 5
    let bobombsTotal = document.getElementById("bob-ombs-input").value * 7
    let cheepCheepsTotal = document.getElementById("cheep-cheeps-input").value * 11
    let baddiesTotal = goombaTotal + bobombsTotal + cheepCheepsTotal

    document.getElementById("bill-total").innerHTML = `Baddies Bill Total: ${baddiesTotal} Coins`
}