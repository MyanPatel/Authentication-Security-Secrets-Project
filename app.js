//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const e = require("express");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

// MongoDB/ Mongoose Setup
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser:true, useUnifiedTopology:true});

const userSchema = {
    email: String,
    password: String
};

const User = new mongoose.model("User", userSchema);


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
})
.post(function(req,res){
    const newUser = new User({
        email:req.body.username,
        password:req.body.password
    });
    newUser.save(function(err){
        if (err){
            console.log(err);
        }else{
            res.render("secrets");
        }
    });
});


app.listen(3000, function(){
    console.log("server running on port 3000");
});