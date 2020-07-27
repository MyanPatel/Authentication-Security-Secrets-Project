//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

// MongoDB/ Mongoose Setup
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser:true});


app.route("/")
.get(function(req,res){
    res.render("home");
});

app.route("/login")
.get(function(req,res){
    res.render("login");
});

app.route("/register")
.get(function(req,res){
    res.render("register");
});


app.listen(3000, function(){
    console.log("server running on port 3000");
});