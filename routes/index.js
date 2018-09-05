var express = require("express");
var router  = express.Router();
var passport = require("passport");


// root route
router.get("/", function (req, res) {
    res.render("index");
});

// show login page
router.get("/login", function(req, res){
   res.render("login"); 
});

// signup
router.get("/signup", function(req, res){
   res.render("signup"); 
});

// show about page
router.get("/about", function(req, res){
   res.render("about"); 
});

// show contact page
router.get("/contact", function(req, res){
   res.render("contact"); 
});
// authentication

module.exports = router;