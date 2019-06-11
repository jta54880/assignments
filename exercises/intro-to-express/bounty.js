const express = require("express")
const app = express()
const data = require("./bountyDB")
const uuid = require("uuid/v4")

app.use(express.json())

app.get("/bounty", (request, response) => {
    response.send(data)
})

app.post("/bounty", (request, response) => {
    const newBounty = request.body
    newBounty._id = uuid()
    data.push(newBounty)
    response.send(newBounty)
})

app.delete("/bounty/:_id", (request, response) => {
    data.forEach((target, i) => request.params._id === target._id && data.splice(i, 1))

    //why not comparison ===

    response.send({message: "deleted", data})
})

app.put("/bounty/:_id", (request, response) => {
    console.log(request.body)
    const updatedTarget = request.body
    data.forEach(target => {
        return request.params._id === target._id &&  Object.assign(target, updatedTarget)
    })
    response.send({message: "successfully updated", data})
})

app.listen(9999, () => {
    console.log("server is running on port " + 9999)
})