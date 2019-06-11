const express = require("express")
const data = require("./inventory")
const thingRouter = express.Router()

thingRouter.route("/")
    .get((request, response) => {
        let filteredData = data
        for(let propKey in request.query) {
            filteredData = filteredData.filter(thing => 
                thing[propKey].toString() === request.query[propKey]
            )
        }
        response.send(filteredData)
    })

module.exports = thingRouter