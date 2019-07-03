const express = require("express")
const menuRouter = express.Router()
const Menu = require("../models/menuItem")

// POST and GET requests through HOME "/" route
menuRouter.route("/")
    // POST (.save)
    .post((request, response, next) => {
        const newMenu = new Menu(request.body)
        newMenu.save((err, newMenuItem) => {
            if (err) {
                response.status(500)
                return next(err)
            }
            return response.status(201).send(newMenuItem)
        })
    })

    // GET ALL (.find)
    .get((request, response, next) => {
        Menu.find((err, menuItems) => {
            if (err) {
                response.status(500)
                return next(err)
            }
            return response.status(200).send(menuItems)
        })
    })

// GET ONE, DELETE and PUT requests through id param "/:_id" route
menuRouter.route("/:_id")
    // GET ONE (.findOne)
    .get((request, response, next) => {
        Menu.findOne({_id: request.params._id}, (err, foundMenuItem) => {
            if(err) {
                response.status(500)
                return next(err)
            }
            return response.status(200).send(foundMenuItem)
        })
    })

    // DELETE (.findOneAndDelete)
    .delete((request, response, next) => {
        Menu.findOneAndDelete({_id: request.params._id}, (err, deletedMenuItem) => {
            if (err) {
                response.status(500)
                return next(err)
            }
            return response.status(202).send(`Successfully Deleted Menu Item ${deletedMenuItem.title}`)
        })
    })

    // PUT (.findOneAndUpdate)
    .put((request, response, next) => {
        Menu.findOneAndUpdate(
            {_id: request.params._id}, 
            request.body, 
            {new: true}, 
            (err, updatedMenuItem) => {
                if (err) {
                    response.status(500)
                    return next(err)
                }
                return response.status(201).send(updatedMenuItem)
            })
    })

module.exports = menuRouter