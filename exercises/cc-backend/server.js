const express = require("express")
const app = express()
const PORT = 4111
const mongoose = require("mongoose")

app.use(express.json())

app.use((err, request, response, next) => {
    console.log(err)
    return response.send("There was an error")
})

app.use("/menu", require("./routes/menuRoutes"))

mongoose.connect("mongodb://localhost:27017/cc-menu", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
        console.log("Connected to MongoDB")
    })

app.listen(PORT, () => {
    console.log(`Server Connected on Port: ${PORT}`)
})