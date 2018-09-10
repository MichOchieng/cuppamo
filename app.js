var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    mongodb     =  mongoose.connection,
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    googlepassport = require("passport-google-oauth");
    

    
// route files
var homepageRoutes = require("./routes/index"),
    loginRoutes    = require("./routes/login"),
    signupRoutes   = require("./routes/signup"),
    aboutRoutes    = require("./routes/about"),
    contactRoute   = require("./routes/contact");
    
mongoose.connect("mongodb://localhost:27017/cuppamo", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use("/", homepageRoutes);
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);
app.use("/about", aboutRoutes);
app.use("/contact", contactRoute);

    // use route files
app.use(homepageRoutes);
    
    app.listen(process.env.PORT, process.env.IP, function () {
    // body...
    console.log("CuppaMo started");
});

module.exports = app;