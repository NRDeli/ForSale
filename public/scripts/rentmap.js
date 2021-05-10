var bhk = document.getElementById('bhk').innerHTML;
var price = document.getElementById('price').innerHTML;


var mymap = L.map('map').setView([19.1,72.8], 12);

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const tiles = L.tileLayer(tileURL, { attribution });

tiles.addTo(mymap);

var house_icon = new L.icon({
    iconUrl: '/images/house.png',
    iconSize: [25,25]
});

function house(feature,layer){
    layer.setIcon(house_icon);
}

if(bhk==1){
    if(price==1){
        L.geoJSON(onebhk_lt40, {
            onEachFeature: house
        }).addTo(mymap);
    }
    else if(price==2){
        L.geoJSON(onebhk_gt40, {
            onEachFeature: house
        }).addTo(mymap);
    }
    else{
        L.geoJSON(onebhk_gt60, {
            onEachFeature: house
        }).addTo(mymap);
    }
}

if(bhk==2){
    if(price==1){
        L.geoJSON(twobhk_lt40, {
            onEachFeature: house
        }).addTo(mymap);
    }
    else if(price==2){
        L.geoJSON(twobhk_gt40, {
            onEachFeature: house
        }).addTo(mymap);
    }
    else{
        L.geoJSON(twobhk_gt60, {
            onEachFeature: house
        }).addTo(mymap);
    }
}

if(bhk==3){
    if(price==1){
        L.geoJSON(threebhk_lt80, {
            onEachFeature: house
        }).addTo(mymap);
    }
    else if(price==2){
        L.geoJSON(threebhk_gt80, {
            onEachFeature: house
        }).addTo(mymap);
    }
    else{
        L.geoJSON(threebhk_gt100, {
            onEachFeature: house
        }).addTo(mymap);
    }
}

if(bhk==4){
    if(price==1){
        L.geoJSON(fourbhk_lt100, {
            onEachFeature: house
        }).addTo(mymap);
    }
    else if(price==2){
        L.geoJSON(fourbhk_gt100, {
            onEachFeature: house
        }).addTo(mymap);
    }
    else{
        L.geoJSON(fourbhk_gt150, {
            onEachFeature: house
        }).addTo(mymap);
    }
}




var firelayer = L.geoJSON(fire_station_dissolved, {
    style: function (feature) {
        return {color: "red"};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var fire_icon = new L.icon({
    iconUrl: '/images/firestation.png',
    iconSize: [35,35]
});

function fire(feature,layer){
    layer.setIcon(fire_icon);
}

var firestations = L.geoJSON(fire_station, {
    onEachFeature: fire
});

function fir_change(e){
    if(e.checked){
        mymap.addLayer(firelayer);
        mymap.addLayer(firestations);
    }
    else{
        mymap.removeLayer(firelayer);
        mymap.removeLayer(firestations);
    }
}






var pollayer = L.geoJSON(police_dissolved, {
    style: function (feature) {
        return {color: "brown"};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
});

var pol_icon = new L.icon({
    iconUrl: '/images/police.png',
    iconSize: [35,35]
});

function pol(feature,layer){
    layer.setIcon(pol_icon);
}

var polstations = L.geoJSON(police, {
    onEachFeature: pol
});
function pol_change(e){
    if(e.checked){
        mymap.addLayer(pollayer);
        mymap.addLayer(polstations);
    }
    else{
        mymap.removeLayer(pollayer);
        mymap.removeLayer(polstations);
    }
}







var hoslayer = L.geoJSON(hospitals_dissolved, {
    style: function (feature) {
        return {color: "black"};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var hos_icon = new L.icon({
    iconUrl: '/images/hospital.png',
    iconSize: [35,35]
});

function hos(feature,layer){
    layer.setIcon(hos_icon);
}

var hosp = L.geoJSON(hospitals, {
    onEachFeature: hos
});

function hos_change(e){
    if(e.checked){
        mymap.addLayer(hoslayer);
        mymap.addLayer(hosp);
    }
    else{
        mymap.removeLayer(hoslayer);
        mymap.removeLayer(hosp);
    }
};





var raillayer = L.geoJSON(railways_dissolved, {
    style: function (feature) {
        return {color: "blue"};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var rail_icon = new L.icon({
    iconUrl: '/images/railway.png',
    iconSize: [35,35]
});

function rail(feature,layer){
    layer.setIcon(rail_icon);
}

var railstation = L.geoJSON(railway_stations, {
    onEachFeature: rail
});

function rail_change(e){
    if(e.checked){
        mymap.addLayer(raillayer);
        mymap.addLayer(railstation);
    }
    else{
        mymap.removeLayer(raillayer);
        mymap.removeLayer(railstation);
    }
}






var schlayer = L.geoJSON(schools_dissolved, {
    style: function (feature) {
        return {color: "orange"};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var sch_icon = new L.icon({
    iconUrl: '/images/school.png',
    iconSize: [35,35]
});

function sch(feature,layer){
    layer.setIcon(sch_icon);
}

var schoo = L.geoJSON(schools, {
    onEachFeature: sch
});

function sch_change(e){
    if(e.checked){
        mymap.addLayer(schlayer);
        mymap.addLayer(schoo);
        
    }
    else{
        mymap.removeLayer(schlayer);
        mymap.removeLayer(schoo);
    }
}







var parlayer = L.geoJSON(parks_dissolved, {
    style: function (feature) {
        return {color: "green"};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var par_icon = new L.icon({
    iconUrl: '/images/park.png',
    iconSize: [35,35]
});

function par(feature,layer){
    layer.setIcon(par_icon);
}

var parkk = L.geoJSON(parks, {
    onEachFeature: par
});

function par_change(e){
    if(e.checked){
        mymap.addLayer(parlayer);
        mymap.addLayer(parkk);
    }
    else{
        mymap.removeLayer(parlayer);
        mymap.removeLayer(parkk);
    }
}

