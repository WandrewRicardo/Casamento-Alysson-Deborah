const express = require("express")
const path = require("path")
const rsvpRoute = require("./routes/rsvp.js")
const app = express()

module.exports = app

app.use(express.json())

app.post('/rsvp', rsvpRoute)

app.use("/assets", express.static(
    path.join(__dirname, "../../frontend/assets")
))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/index.html"))
})
app.get("/confirmacao", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/confirmacao.html"))
})
app.get("/presentes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/presentes.html"))
})