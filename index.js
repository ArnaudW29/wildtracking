const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())

let data = JSON.parse(fs.readFileSync("./data.json"))


app.post("/data", function(req, res) {
    const json = req.body
    console.log(req.body)
    data.concat(json)
    fs.writeFileSync("./data.json", JSON.stringify(data))
    console.log("POST request")
    console.log(data)
    conosle.log(fs.writeFileSync("./data.json", JSON.stringify(data)))
});

app.get("/data", (req, res) => res.json(data))
app.use(express.static('public'))
app.listen(process.env.PORT || 5000,function() {
    console.log("server is running");
  });

