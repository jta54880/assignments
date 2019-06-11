const express = require("express")
const app = express()
const PORT = 8000

app.use(express.json())

app.use("/thing", require("./thingRoutes"))

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})