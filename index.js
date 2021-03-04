const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())

let data = JSON.parse(fs.readFileSync("./data.json"))


app.post("/api/input", function(req, res) {
    const json = req.body
    console.log(json)
    data.concat(json)
    fs.writeFileSync("./data.json", JSON.stringify(data))
    res.send("Received")
})

app.get('/', (req, res) =>  response.sendFile(`${__dirname}/data.json`));


app.use(express.static('public'))

app.listen(process.env.PORT || 5000)
