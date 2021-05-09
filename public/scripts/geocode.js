var lat = document.getElementById('lat').innerHTML;
var long = document.getElementById('long').innerHTML;

var mymap = L.map('map').setView([lat,long], 15);

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