var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    mongodb     =  mongoose.connection,
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override");
    
    
// route files
var homepageRoutes = require("./routes/homepage");
    
mongoose.connect("mongodb://localhost:27017/cuppamo", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.use("/", homepageRoutes);
    // use route files
app.use(homepageRoutes);
    
    app.listen(process.env.PORT, process.env.IP, function () {
    // body...
    console.log("CuppaMo started");
});