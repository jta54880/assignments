const express = require('express')
const destinationRouter = express.Router()
const Destination = require('./models/Destination')

destinationRouter.route('/')

    .get((request, response) => {
        Destination.find((err, destinations)=> {
            if(err){
                return response.status(500).send(err)
            }
            return response.status(200).send(destinations)
        })
    })

    .post((request, response) => {
        const newDestination = new Destination(request.body)
        newDestination.save((err, new_destination) => {
            if(err) {
                return response.status(500).send(err)
            }
            return response.status(201).send(new_destination)
        })
      
    })

destinationRouter.route('/:id')

    .get((request, response) => {
        Destination.findById(request.params.id, (err, destination) => {
            if(err){
                return response.status(500).send(err)
            }
            return response.status(200).send(destination)
        })
    })

    .delete((request, response) => {
        //id is found: request.params.id
        Destination.findByIdAndDelete(request.params.id, (err)=> {
            if(err) {
                return response.status(500).send(err)
            }
            return response.status(200).send('Successfully Deleted Destination')
        })
        
    })

    .put((request, response) => {
        Destination.findByIdAndUpdate(
            request.params.id, 
            request.body, 
            {new: true}, 
            (err, destination) => {
                if(err){
                    return response.status(500).send(err)
                }
                return response.status(201).send(destination)
            })
    })


module.exports = destinationRouter