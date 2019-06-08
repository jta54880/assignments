const stringifyUrl = (url, {color, species}) => `${url}?color=${color}&species=${species}`

const url = "http://localhost:8080/monkeys"
const query = {
    color: "black",
    species: "howler"
}

console.log(stringifyUrl(url, query))

const objectifyUrl = url => {
    const query = {
        color: "",
        species: ""
    }

    const querySplit = url.split("?")
    // console.log(querySplit.length - 1)
    const queries = querySplit[1].split("&")
    const queryItems = queries.map(query => query.split("="))
    query.color = queryItems[0][1]
    query.species = queryItems[1][1]

    console.log(query)
}

objectifyUrl(stringifyUrl(url, query))