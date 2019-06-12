const express = require("express")
const app = express()
const PORT = 4000
const mongoose = require("mongoose")

app.use(express.json())

app.use("/inventory", require("./routes/inventoryRoutes"))

mongoose.connect("mongodb://localhost:27017/crud-store", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => {
    console.log("Connected to MongoDB")
})

app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`)
})