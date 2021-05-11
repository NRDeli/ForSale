const express = require('express');
const path = require('path');
const app = express();
const url = require('url');
const bodyParser = require('body-parser');
const { ppid } = require('process');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/locguide',(req,res) => {
    res.render('locguide');
})

app.get('/locguide/map',(req,res) => {
    var lat = url.parse(req.url,true).query.lat;
    var long = url.parse(req.url,true).query.long;
    res.render('geocode',{ latitude: lat ,longitude: long})
})

app.get('/houserent',(req,res) => {
    res.render('rentform');
});

app.post('/houserent/maps',(req,res) => {
    var bhk = req.body.bhk;
    var price = req.body.price;
    res.render('rentmap',{ bhk: bhk, price: price });
})

app.post('/locguide/maps',(req,res) => {
    var pin = req.body.pin;
    var area = req.body.area;
    res.render('geocoding',{ pin: pin , area: area });
});

app.post('/locguide/map',(req,res)=>{
    res.render('geocode');
});




app.get('*',(req,res)=>{
    res.send("Page Not found");
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});