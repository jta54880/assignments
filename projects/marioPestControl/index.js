function handleBaddiesBill() {
    const coinPerBaddie = {
        goomba: 5,
        bobOmbs: 7,
        cheepCheeps: 11
    }
    let goombaTotal = document.getElementById("goomba-input").value > 0 ?           document.getElementById("goomba-input").value : 0
    let bobombsTotal = document.getElementById("bob-ombs-input").value > 0 ? document.getElementById("bob-ombs-input").value : 0
    let cheepCheepsTotal = document.getElementById("cheep-cheeps-input").value > 0 ? document.getElementById("cheep-cheeps-input").value : 0
    let baddiesTotal = (goombaTotal * coinPerBaddie.goomba) + (bobombsTotal * coinPerBaddie.bobOmbs) + (cheepCheepsTotal * coinPerBaddie.cheepCheeps)
    document.getElementById("bill-total").innerText = `${baddiesTotal} Coins` 
    document.getElementById("goomba-breakdown").innerText = `Goomba (x ${goombaTotal}) @ 5 Coins/Each`
    document.getElementById("bobombs-breakdown").innerText = `Bob-omb (x ${bobombsTotal}) @ 7 Coins/Each`
    document.getElementById("cheepCheep-breakdown").innerText = ` Cheep-cheep's (x ${cheepCheepsTotal}) @ 11 Coins/Each`
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