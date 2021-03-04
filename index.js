const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())

let data = JSON.parse(fs.readFileSync("./data.json"))
app.use(bodyParser.urlencoded({ extended: false }))


app.post("/api/input", function(req, res) {
    const json = req.body
    console.log(req.body)
    data.concat(json)
    fs.writeFileSync("./data.json", JSON.stringify(data))
    res.send(`You sent: ${body}`)
    console.log(data)
})

app.get("/api/input", (req, res) => res.json(data))


app.use(express.static('public'))

app.listen(process.env.PORT || 5000)
