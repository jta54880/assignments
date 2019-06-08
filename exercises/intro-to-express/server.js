const express = require("express")
const app = express()
const data = require("./database")
const uuid = require("uuid/v4")

app.use(express.json())

app.get("/destination", (request, response) => {
    response.send(data)
})

// get by id param
app.get("/destination/:id", (request, response) => {
    console.log(request.params)
    response.send("hello")
})

app.post("/destination", (request, response) => {
    const newDestination = request.body
    newDestination._id = uuid()
    data.push(newDestination)
    response.send(newDestination)
    // response.send({
    //     newObject: newDestination,
    //     database: data,
    //     message: "post successfult"
    // })
})

app.delete("/destination/:destinationID", (request, resopnse) => {
    // console.log(request.params)
    // const results = data.filter(destination => destination._id !== request.params.destinationID)
    // response.send(results)
    data.forEach((destination, i) => request.params.destinationID = destination._id && data.splice(i, 1))

    response.send({message: "deleted", data})
})

app.put("/destination/:destinationID", (request, response) => {
    console.log(request.body)
    const updatedDestination = request.body
    data.forEact(destination => {
        if (request.params.destinationID === destination._id) {
            return Object.assign(destination, updatedDestination)
        }
    })
    response.send({message: "successfully updated", data})
})

app.listen(9987, () => {
    console.log('server is running on port ' + 9987)
})