const express = require("express")
const app = express()
const PORT = 5555
const mongoose = require("mongoose")

app.use(express.json())

app.use("/bounty", require("./routes/bountyRoutes"))

mongoose.connect("mongodb://localhost:27017/bounty-hunter", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
        console.log("Connected to MongoDB")
})

app.listen(PORT, () => {
    console.log(`Server open on port ${PORT}`)
})