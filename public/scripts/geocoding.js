var pin = document.getElementById('pin').innerHTML;
var area = document.getElementById('area').innerHTML;
 var latitude = this.latitude;

var mymap= L.map('map');
 

geocode(pin,area,mymap);

function geocode(pin=null,area=null,mymap,fir){
    var pin = pin;
    var area = area;
    var location="";
    if(pin!=""){
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

        mymap.setView([lat,long],14);
        //var mymap = L.map('map').setView([lat,long], 14);

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
        
        

        


    })
    .catch(function(e){
        console.log(e);
    });
}

















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
        mymap.addLayer(firestations);
    }
    else{
        mymap.removeLayer(firestations);
    }
}






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
        mymap.addLayer(polstations);
    }
    else{
        mymap.removeLayer(polstations);
    }
}







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
        mymap.addLayer(hosp);
    }
    else{
        mymap.removeLayer(hosp);
    }
};





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
        mymap.addLayer(railstation);
    }
    else{
        mymap.removeLayer(railstation);
    }
}





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
        mymap.addLayer(schoo);
        
    }
    else{
        mymap.removeLayer(schoo);
    }
}






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
        mymap.addLayer(parkk);
    }
    else{
        mymap.removeLayer(parkk);
    }
}








