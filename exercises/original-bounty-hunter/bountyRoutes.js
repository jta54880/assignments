const express = require("express")
const data = require("./bountyData")
// const uuid = require("uuid/v4")
const bountyRouter = express.Router()

bountyRouter.route("/")
    .get((request, response) => {
        response.send(data)
    })

    .post((request, response) => {
        console.log(request.body)
        const newBounty = request.body
        // newBounty._id = uuid()
        data.push(newBounty)
        console.log(data)
        response.send(newBounty)
    })

bountyRouter.route("/:_id")
    .delete((request, response) => {
        data.forEach((target, i) => request.params._id === target._id && data.splice(i, 1))
    
        response.send({message: "deleted", data})
    })

    .put((request, response) => {
        console.log(request.body)
        const updatedTarget = request.body
        data.forEach(target => {
            return request.params._id === target._id && Object.assign(target, updatedTarget)
        })
        response.send({message: "successfully updated", data})
    })

module.exports = bountyRouter