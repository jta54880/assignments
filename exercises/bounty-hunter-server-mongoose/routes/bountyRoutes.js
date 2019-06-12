const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/Bounty")

bountyRouter.route("/")
    // POST
    .post((request, response) => {
        const newBounty = new Bounty(request.body)
        newBounty.save((err, createdBounty) => {
            if (err) {
                return response.status(500).send(err)
            }
            return response.status(201).send(createdBounty)
        })
    })

    // Get All
    .get((request, response) => {
        Bounty.find((err, bountyList) => {
            if (err) {
                return response.status(500).send(err)
            }
            return response.status(200).send(bountyList)
        })
    })

bountyRouter.route("/:_id")
    // Get (Find One)
    .get((request, response) => {
        Bounty.findOne({_id: request.params._id}, (err, foundBounty) => {
            if (err) {
                response.status(500)
                return response.send(err)
            }
            return response.status(200).send(foundBounty)
        })
    })

    // Delete One
    .delete((request, response) => {
        Bounty.findOneAndDelete({_id: request.params._id}, (err, deletedBounty) => {
            if (err) {
                response.status(500)
                return response.send(err)
            }
            return response.status(202).send(`Successfully deleted bounty ${deletedBounty.firstName} ${deletedBounty.lastName}`)
        })
    })

    // Put - Update
    .put((request, response) => {
        Bounty.findOneAndUpdate(
            {_id: request.params._id},
            request.body,
            {new: true},
            (err, updatedBounty) => {
                if (err) {
                    response.status(500)
                    return response.send(err)
                }
                return response.status(201).send(updatedBounty)
            }
        )
    })

module.exports = bountyRouter