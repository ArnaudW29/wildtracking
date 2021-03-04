const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())



app.post("/api/input", function(req, res) {
    const json = req.body
    console.log(req.body)
    data.concat(json)
    console.log("POST request")
});

app.get("/api/input", (req, res) => res.json(data))
app.use(express.static('public'))
app.listen(process.env.PORT || 5000,function() {
    console.log("server is running");
  });

