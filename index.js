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


//authentication setUP

//setting up express-session

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
//*********************************************************************************8


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
    res.render('rentmap', { bhk: bhk, price: price });
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
    res.render('house_details', { desc: desc, lat: lat, long: long, price: price, title: title, loc: loc, user_type: user_type, id: id });
})


app.post('/locguide/maps', (req, res) => {
    var pin = req.body.pin;
    var area = req.body.area;
    res.render('geocoding', { pin: pin, area: area });
});

app.post('/locguide/map', (req, res) => {
    res.render('geocode');
});
// wishlist
// app.get("/wishlist",isLoggedIn,function(req,res){	
// 	// console.log(req.params.userId);
// 	USER.findById(req.user._id).populate("wishlist").exec(function(err,foundUser){
// 		if(err){
// 			console.log("Error in wishlist get");
// 			console.log(err);
// 		}else{
// 			// console.log(req.user.username);
// 			res.render("wishlist",{foundUser:foundUser});
// 			// console.log(foundUser);
// 		}
// 	})

// });
//itemSchema

var itemSchema = new mongoose.Schema({
    _id: String,
    title: String,
    price: Number,
    Desc: String,
    Latitude: String,
    Longitude: String,
    Locality: String,
    user_type: String,
})

var item = mongoose.model("item", itemSchema);

//******************** *
app.post("/houserent/maps/details/:id/wishlist", isLoggedIn, function (req, res) {
    console.log(req.body.itemId);
    var desc = req.query.desc;
    var lat = req.query.lat;
    var long = req.query.long;
    var price = req.query.price;
    var title = req.query.title;
    var loc = req.query.loc;
    var user = req.query.user;
    var id = req.query.id;
    let itemToBeAdded;

    USER.findOne({ _id: req.user._id }, function (err, foundUser) {
        if (err) {
            console.log("ERROR in post wishlist 1");
            console.log(err);
        } else {
            var tempItem = {
                _id: id,
                title: title,
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
                    comment.save();
                    foundUser.wishlist.push(comment);
                    foundUser.save(function (err) {
                        if (err) {
                            console.log("kuch toh gadbad hai daya in save");
                        } else {
                            console.log("saved into wishlist!");
                            res.redirect("/");
                        }
                    });
                }
            });
            foundUser.wishlist.push(tempItem);
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
    });


});





//auth routes
//added login sign up
app.get("/register", function (req, res) {
    res.render("register");
});
//sign up logic
app.post("/register", function (req, res) {
    // console.log("password:" + req.body.password);
    // console.log("username" + req.body.username);

    USER.register(new USER({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            console.log("kuch toh gadbad hai!");
            console.log(err);
            return res.redirect("/");
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/");
            });
        }
    });
});


//login form
app.get("/login", function (req, res) {
    res.render("login");
});

//login logic


app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}), function (req, res) { });


//logout!
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
//middleware                   	//we will mention this in the secret route
function isLoggedIn(req, res, next) {    		//the syntax is typical for middleware
    if (req.isAuthenticated()) {
        return next();
    }							//since return is there no else needed
    res.redirect("/login");
}


app.get('*', (req, res) => {
    res.send("Page Not found");
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
