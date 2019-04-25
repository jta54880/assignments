function handleBaddiesBill() {
    let goombaTotal = document.getElementById("goomba-input").value > 0 ?           document.getElementById("goomba-input").value : 0
    let bobombsTotal = document.getElementById("bob-ombs-input").value > 0 ? document.getElementById("bob-ombs-input").value : 0
    let cheepCheepsTotal = document.getElementById("cheep-cheeps-input").value > 0 ? document.getElementById("cheep-cheeps-input").value : 0
    let baddiesTotal = (goombaTotal * 5) + (bobombsTotal * 7) + (cheepCheepsTotal * 11)
    document.getElementById("bill-total").innerText = `${baddiesTotal} Coins` 
    document.getElementById("goomba-breakdown").innerText = `${goombaTotal} Goomba's @ 5 Coins/Each`
    document.getElementById("bobombs-breakdown").innerText = `${bobombsTotal} Bob-omb's @ 7 Coins/Each`
    document.getElementById("cheepCheep-breakdown").innerText = `${cheepCheepsTotal} Cheep-cheep's @ 11 Coins/Each`
    document.getElementById("goomba-input").value = null
    document.getElementById("bob-ombs-input").value = null
    document.getElementById("cheep-cheeps-input").value = null
}

const clearBtn = document.getElementById("clear-btn")
// clear out inputs
clearBtn.addEventListener("click", handleClearAll)

function handleClearAll() {
    document.getElementById("bill-total").innerText = null
    document.getElementById("goomba-breakdown").innerText = null
    document.getElementById("bobombs-breakdown").innerText = null
    document.getElementById("cheepCheep-breakdown").innerText = null
}