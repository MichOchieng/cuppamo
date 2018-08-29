var express = require("express");
var router  = express.Router();
var passport = require("passport");


// root route
router.get("/", function (req, res) {
    res.render("homepage");
});

// authentication

module.exports = router;