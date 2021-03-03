const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())

let data = JSON.parse(fs.readFileSync("./data.json"))


app.post("/input", function(req, res) {
    const json = req.body
    console.log(req.body)
    data.concat(json)
    fs.writeFileSync("./data.json", JSON.stringify(data))
    res.send("yes")
})

app.get("/input", (req, res) => res.json(data), res.sendfile("./data.json"))
app.use(express.static('public'))

app.listen(process.env.PORT || 5000,function() {
    console.log("server is running");
  });

