var express = require("express");
var firebase = require("firebase");
var app = express();

app.use("/static", express.static(__dirname + "/node_modules"));
app.use("/static", express.static(__dirname + "/assets"));
app.use("/static", express.static(__dirname + "/views"));

app.get("/", function (req,res){
  res.sendFile(__dirname + "/index.html")
});

app.listen(8080);
