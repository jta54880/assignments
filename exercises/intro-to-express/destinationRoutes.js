const express = require("express")
const destinationRouter = express.Router()

destinationRouter.route("/destination")

//turns json into js object -- gives us access to request.body
app.use(express.json())

// app.get("/destination", (request, response) => {
//     console.log(request.query)
//     if (request.query.timeToGo && request.query.price) {
//          const timeToGoResults = data.filter(destination => request.query.timeToGo === destination.timeToGo)

//         const results = timeToGoResults.filter(destination => 
//         // because request.query will parse datatypes into string use == not ===    
//         request.query.price == destination.price)
//         response.send(results)
//     } else {
//         response.send({message: "no results", data})
//     }

//     response.send(data)

// })

// app.get('/destination', (request, response) => {
//     let filteredResults = data
//     console.log(request.query)
//     for(let propKey in request.query){
//         filteredResults = filteredResults.filter(destination => destination[propKey].toString() === request.query[propKey])
//     }
//     response.send(filteredResults)
//  })

//dynamic propkey query
.get((request, response) => {
    let filteredResults = data
    console.log(request.query)
    for(let propKey in request.query) {
        filteredResults = filteredResults.filter(destination => destination[propKey].toString() === request.query[propKey])
    }
    response.send(filteredResults)
})

app.get("/destination", (request, response) => {
    response.send(data)
})

.post((request, response) => {
    const newDestination = request.body
    newDestination._id = uuid()
    data.push(newDestination)
    response.send(newDestination)
})

destinationRouter.route("/destination/:_id")
app.get("/destination/:_id"), (request, response) => {
    // match request.params._id with objects in data with same id
    const searchedDestination = data.find(destination => request.params._id === destination._id)
    response.send(searchedDestination)
}


app.delete("/destination/:_id", (request, response) => {
    data.forEach((destination, i) => request.params._id === destination._id && data.splice(i, 1))
    
    response.send({message: "successfully deleted", data})
})

app.put("/destination/:_id", (request, response) => {
    const updatedDestination = request.body
    data.forEach(destination => 
        request.params.destination._id === destination._id && Object.assign(destination, updatedDestination)
    )
})

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})

module.exports = destinationRouter