var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    mongodb     =  mongoose.connection,
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override");
    
mongoose.connect("mongodb://localhost:27017/cuppamo", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("homepage");
});
    
    
    
    
    
    
    app.listen(process.env.PORT, process.env.IP, function () {
    // body...
    console.log("CuppaMo started");
});