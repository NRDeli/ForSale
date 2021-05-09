const express = require('express');
const path = require('path');
const app = express();
const url = require('url');
const bodyParser = require('body-parser');

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

function geocode(req,res,next){
    console.log(req.body);
    var pin = req.body.pin;
    next(pin);

    
    var location= pin;
            axios.get('https://api.opencagedata.com/geocode/v1/json',{
                params:{
                    q: location,
                    key:'2c289f4ef5c54aea80a4af1777abf758'
                }
            })
            .then(function(response){
                console.log(response);
                next();
            })
            .catch(function(e){
                console.log(e);
            });
    
};

app.post('/locguide/maps',(req,res) => {
    var pin = req.body.pin;
    var area = req.body.area;
    res.render('geocoding',{ pin: pin , area: area });
})

app.post('/locguide/map',(req,res)=>{
    res.render('geocode');
});

app.get('*',(req,res)=>{
    res.send("Page Not found");
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});