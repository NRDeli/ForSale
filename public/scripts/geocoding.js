var pin = document.getElementById('pin').innerHTML;
var area = document.getElementById('area').innerHTML;
 var latitude = this.latitude;

var coords = geocode(pin,area);

function geocode(pin=null,area=null){
    var pin = pin;
    var area = area;
    var location='';
    if(pin!=null){
        location = pin+",Mumbai";
    }
    else{
        location = area+",Mumbai";
    }
    axios.get('https://api.opencagedata.com/geocode/v1/json',{
        params:{
            q: location,
            key:'2c289f4ef5c54aea80a4af1777abf758'
        }
    })
    .then(function(response){
        console.log(location);
        lat= response.data.results[0].geometry.lat;
        long = response.data.results[0].geometry.lng


        var mymap = L.map('map').setView([lat,long], 14);

        const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

        const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

        const tiles = L.tileLayer(tileURL, { attribution });

        tiles.addTo(mymap);

        var marker = L.marker([lat, long]).addTo(mymap);

        var circle = L.circle([lat, long], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.4,
        radius: 1000
        }).addTo(mymap);

        var house_icon = new L.icon({
            iconUrl: '/images/house.png',
            iconSize: [25,25]
        });
        
        function house(feature,layer){
            layer.setIcon(house_icon);
        }
        L.geoJSON(onebhk_lt40, {
            onEachFeature: house
        }).addTo(mymap);


    })
    .catch(function(e){
        console.log(e);
    });
}

/*var mymap = L.map('map').setView([0,0], 2);

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const tiles = L.tileLayer(tileURL, { attribution });

tiles.addTo(mymap);*/