var express = require("express");
var bodyParser = require("body-parser");
var userCtrl = require("./userCtrl.js")

var app = express();

app.use(bodyParser.json());

app.get("/api/users", function(req, res, next){
  userCtrl.readAll();
})
app.get("/api/users/:userId", function(req, res, next){
  userCtrl.findUserById();
})

var port = 5000
app.listen(port, console.log("Listening on port " + port))















module.exports = app;
