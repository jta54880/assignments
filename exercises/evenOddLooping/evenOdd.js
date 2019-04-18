function evenOddLoop() {
    for (let i = 0; i < 101; i++) {
        i % 2 === 0 ? console.log(`${i}: even`) : console.log(`${i}: odd`)
    }
}

evenOddLoop()