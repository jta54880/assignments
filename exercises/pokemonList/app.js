const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        let pokemonList = data.objects[0].pokemon
        const root = document.getElementById('root')
        console.log(pokemonList.length)
        console.log(pokemonList)
        for (let i = 0; i < pokemonList.length; i++) {
            const h2 = document.createElement('h2')
            const txtNode = document.createTextNode(`\n${pokemonList[i].name}\n`)
            h2.appendChild(txtNode)
            root.appendChild(h2)
        }
    }
}

xhr.open('GET', 'https://api.vschool.io/pokemon', true)

xhr.send()