const express = require('express');
const path = require('path');
const app = express();
const url = require('url');
const bodyParser = require('body-parser');
const { ppid } = require('process');

//passport
var mongoose = require("mongoose");
var passport = require("passport");
var localStrategy = require("passport-local");
var pspLclMng = require("passport-local-mongoose");
USER = require("./models/user.js");

mongoose.connect("mongodb://localhost:27017/igt", {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(() => {
    console.log("Database sucessfully Connected!");
}, error => {
    console.log("Error in database connectivity");
});
//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
    secret: "MEET AAYUSH NIRMIT MANN",
    resave: false,
    saveUninitialized: false
}))

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
})

//setting up passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(USER.authenticate()));
passport.serializeUser(USER.serializeUser());
passport.deserializeUser(USER.deserializeUser());

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/locguide', (req, res) => {
    res.render('locguide');
});

app.get('/locguide/map', (req, res) => {
    var lat = url.parse(req.url, true).query.lat;
    var long = url.parse(req.url, true).query.long;
    res.render('geocode', { latitude: lat, longitude: long })
});

app.get('/houserent', (req, res) => {
    res.render('rentform');
});

app.post('/houserent/maps', (req, res) => {
    var bhk = req.body.bhk;
    var price = req.body.price;
    var area = req.body.area;
    res.render('rentmap', { bhk: bhk, price: price, area: area });
});

app.get('/houserent/maps/details', (req, res) => {
    var desc = req.query.desc;
    var lat = req.query.lat;
    var long = req.query.long;
    var price = req.query.price;
    var title = req.query.title;
    var loc = req.query.loc;
    var user_type = req.query.user_type;
    var id = req.query.id;
    var bhk = req.query.bhk;
    var p = req.query.p;
    res.render('house_details', { desc: desc, lat: lat, long: long, price: price, title: title, loc: loc, user_type: user_type, id: id, bhk: bhk, p: p });
})

app.post('/locguide/maps', (req, res) => {
    var pin = req.body.pin;
    var area = req.body.area;
    res.render('geocoding', { pin: pin, area: area });
});

app.post('/locguide/map', (req, res) => {
    res.render('geocode');
});

app.get("/wishlist", isLoggedIn, function (req, res) {
    USER.findById(req.user._id).populate("wishlist").exec(function (err, foundUser) {
        if (err) {
            console.log("Error in wishlist get");
            console.log(err);
        } else {
            res.render("wishlist", { foundUser: foundUser });
        }
    })

});

var itemSchema = new mongoose.Schema({
    title: String,
    price: Number,
    Desc: String,
    Latitude: String,
    Longitude: String,
    Locality: String,
    user_type: String,
})

var item = mongoose.model("item", itemSchema);
app.post("/houserent/maps/details/wishlist", isLoggedIn, function (req, res) {
    console.log(req.body.itemId);
    var desc = req.query.desc;
    var lat = req.query.lat;
    var long = req.query.long;
    var price = req.query.price;
    var title = req.query.title;
    var loc = req.query.loc;
    var user = req.query.user;
    USER.findOne({ _id: req.user._id }, function (err, foundUser) {
        if (err) {
            console.log("ERROR in post wishlist 1");
            console.log(err);
        } else {
            var tempItem = {
                title: title,
                price: price,
                Desc: desc,
                Latitude: lat,
                Longitude: long,
                Locality: loc,
                user_type: user,
            };
            item.create(tempItem, function (err, newItem) {
                if (err) {
                    console.log("error in itemcreate");
                } else {
                    foundUser.wishlist.push(newItem);
                    foundUser.save(function (err, saved) {
                        if (err) {
                            console.log("ERROR in post wishlist 2");
                            console.log(err);
                        } else {
                            console.log("added to wishlist sucessfully!");
                            res.redirect("/");
                        }
                    })
                }
            })

        }
    });
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.post("/register", function (req, res) {

    USER.register(new USER({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            console.log("OOPS ! Something went wrong");
            console.log(err);
            return res.redirect("/");
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/");
            });
        }
    });
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/wishlist",
    failureRedirect: "/login"
}), function (req, res) { });


app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.get('*', (req, res) => {
    res.send("Page Not found");
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
