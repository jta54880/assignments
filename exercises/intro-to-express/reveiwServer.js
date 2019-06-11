const express = require("express")
const data = require("./reviewDatabase")
const app = express()
const PORT = 4444

app.use("/", require("./destinationRoutes"))