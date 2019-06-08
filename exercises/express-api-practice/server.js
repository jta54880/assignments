const express = require("express")
const app = express()
const data = require("./database")

app.use(express.json())

app.get("/person", (request, response) => {
    response.send(data)
})

app.post("/person", (request, response) => {
    const newPerson = request.body
    data.push(newPerson)
    response.send(newPerson)
})

app.listen(9000, () => {
    console.log("server is running on port " + 9000)
})