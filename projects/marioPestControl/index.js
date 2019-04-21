function handleBaddiesBill() {
    let goombaTotal = document.getElementById("goomba-input").value > 0 ?           document.getElementById("goomba-input").value : 0
    let bobombsTotal = document.getElementById("bob-ombs-input").value > 0 ? document.getElementById("bob-ombs-input").value : 0
    let cheepCheepsTotal = document.getElementById("cheep-cheeps-input").value > 0 ? document.getElementById("cheep-cheeps-input").value : 0
    let baddiesTotal = (goombaTotal * 5) + (bobombsTotal * 7) + (cheepCheepsTotal * 11)
    document.getElementById("bill-total").innerHTML = `${baddiesTotal} Coins` 
    document.getElementById("goomba-breakdown").innerHTML = `${goombaTotal} Goomba's @ 5 Coins/Each`
    document.getElementById("bobombs-breakdown").innerHTML = `${bobombsTotal} Bob-omb's @ 7 Coins/Each`
    document.getElementById("cheepCheep-breakdown").innerHTML = `${cheepCheepsTotal} Cheep-cheep's @ 11 Coins/Each`
}

function handleClearAll() {
    document.getElementById("goomba-input").value = null
    document.getElementById("bob-ombs-input").value = null
    document.getElementById("cheep-cheeps-input").value = null
    document.getElementById("bill-total").innerHTML = null
    document.getElementById("goomba-breakdown").innerHTML = null
    document.getElementById("bobombs-breakdown").innerHTML = null
    document.getElementById("cheepCheep-breakdown").innerHTML = null
}