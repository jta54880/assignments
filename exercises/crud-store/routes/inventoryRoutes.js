const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")

inventoryRouter.route("/")
    // Post (.save)
    .post((request, response) => {
        const newInventory = new Inventory(request.body)
        newInventory.save((err, newItem) => {
            if (err) {
                return response.status(500).send(err)
            }
            return response.status(201).send(newItem)
        })
    })
    // Get All (.find)
    .get((request, response) => {
        // 
        Inventory.find((err, items) => {
            if (err) {
                return response.status(500).send(err)
            }
            return response.status(200).send(items)
        })
    })

inventoryRouter.route("/:_id")
    // Get One (.findOne)
    .get((request, response) => {
        Inventory.findOne({_id: request.params._id}, (err, foundItem) => {
            if (err) {
                response.status(500)
                return response.send(err)
            }
            return response.status(200).send(foundItem)
        })
    })

    .delete((request, response) => {
        Inventory.findOneAndDelete({_id: request.params._id}, (err, deletedItem) => {
            if (err) {
                response.status(500)
                return response.send(err)
            }
            return response.status(202).send(`Successfully deleted item ${deletedItem.productTitle}`)
        })
    })

    .put((request, response) => {
        Inventory.findOneAndUpdate(
            {_id: request.params._id}, 
            request.body,
            {new: true},
            (err, updatedItem) => {
                if (err) {
                    response.status(500)
                    return response.send(err)
                }
                return response.status(201).send(updatedItem)
            }
        )
    })

module.exports = inventoryRouter