var bhk = document.getElementById('bhk').innerHTML;
var price = document.getElementById('price').innerHTML;
var area = document.getElementById('area').innerHTML;

var mymap = L.map('map');



geocode(area, mymap);

function geocode(area, mymap) {
    var area = area;
    var location = area + ",Mumbai";
    axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
            q: location,
            key: '2c289f4ef5c54aea80a4af1777abf758'
        }
    })
        .then(function (response) {
            console.log(location);
            lat = response.data.results[0].geometry.lat;
            long = response.data.results[0].geometry.lng

            mymap.setView([lat, long], 14.5);
            //var mymap = L.map('map').setView([lat,long], 14);

            const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

            const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

            const tiles = L.tileLayer(tileURL, { attribution });

            tiles.addTo(mymap);

            






        })
        .catch(function (e) {
            console.log(e);
        });
}





var house_icon = L.icon({
    iconUrl: '/images/house.png',
    iconSize: [35, 35], // size of the icon
});

if (bhk == 1) {
    if (price == 1) {
        L.geoJSON(onebhk_lt40, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
    else if (price == 2) {
        L.geoJSON(onebhk_gt40, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
    else {
        L.geoJSON(onebhk_gt60, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
}

if (bhk == 2) {
    if (price == 1) {
        L.geoJSON(twobhk_lt40, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
    else if (price == 2) {
        L.geoJSON(twobhk_gt40, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
    else {
        L.geoJSON(twobhk_gt60, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
}

if (bhk == 3) {
    if (price == 1) {
        L.geoJSON(threebhk_lt80, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
    else if (price == 2) {
        L.geoJSON(threebhk_gt80, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
    else {
        L.geoJSON(threebhk_gt100, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
}

if (bhk == 4) {
    if (price == 1) {
        L.geoJSON(fourbhk_lt100, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
    else if (price == 2) {
        L.geoJSON(fourbhk_gt100, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
    else {
        L.geoJSON(fourbhk_gt150, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h6>${feature.properties.title}</h6><h6>Price: ${feature.properties.price}</h6><a href="/houserent/maps/details?desc=${feature.properties.desc}&lat=${feature.properties.latitude}&long=${feature.properties.longitude}&price=${feature.properties.price}&loc=${feature.properties.locality}&title=${feature.properties.title}&user_type=${feature.properties.user_type}&id=${feature.properties.id}&bhk=${bhk}&p=${price}"><h6>More Details</h6></a>`);
            },
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: house_icon });
            }
        }).addTo(mymap);
    }
}




var firelayer = L.geoJSON(fire_station_dissolved, {
    style: function (feature) {
        return { color: "red" };
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var fire_icon = L.icon({
    iconUrl: '/images/firestation.png',
    iconSize: [35, 35], // size of the icon
});

var firestations = L.geoJSON(fire_station, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h5>' + feature.properties.name + '</h5>')
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: fire_icon });
    }
});

function fir_change(e) {
    if (e.checked) {
        mymap.addLayer(firelayer);
        mymap.addLayer(firestations);
    }
    else {
        mymap.removeLayer(firelayer);
        mymap.removeLayer(firestations);
    }
}






var pollayer = L.geoJSON(police_dissolved, {
    style: function (feature) {
        return { color: "brown" };
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
});

var pol_icon = L.icon({
    iconUrl: '/images/police.png',
    iconSize: [35, 35], // size of the icon
});

var polstations = L.geoJSON(police, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h5>' + feature.properties.name + '</h5>')
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: pol_icon });
    }
});
function pol_change(e) {
    if (e.checked) {
        mymap.addLayer(pollayer);
        mymap.addLayer(polstations);
    }
    else {
        mymap.removeLayer(pollayer);
        mymap.removeLayer(polstations);
    }
}







var hoslayer = L.geoJSON(hospitals_dissolved, {
    style: function (feature) {
        return { color: "black" };
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var hos_icon = L.icon({
    iconUrl: '/images/hospital.png',
    iconSize: [35, 35], // size of the icon
});

var hosp = L.geoJSON(hospitals, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h5>' + feature.properties.name + '</h5>')
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: hos_icon });
    }
});

function hos_change(e) {
    if (e.checked) {
        mymap.addLayer(hoslayer);
        mymap.addLayer(hosp);
    }
    else {
        mymap.removeLayer(hoslayer);
        mymap.removeLayer(hosp);
    }
};





var raillayer = L.geoJSON(railways_dissolved, {
    style: function (feature) {
        return { color: "blue" };
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var rail_icon = L.icon({
    iconUrl: '/images/railway.png',
    iconSize: [35, 35], // size of the icon
});

var railstation = L.geoJSON(railway_stations, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h5>' + feature.properties.name + '</h5>')
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: rail_icon });
    }

})

function rail_change(e) {
    if (e.checked) {
        mymap.addLayer(raillayer);
        mymap.addLayer(railstation);
    }
    else {
        mymap.removeLayer(raillayer);
        mymap.removeLayer(railstation);
    }
}






var schlayer = L.geoJSON(schools_dissolved, {
    style: function (feature) {
        return { color: "orange" };
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var school_icon = L.icon({
    iconUrl: '/images/school.png',
    iconSize: [35, 35], // size of the icon
});

var schoo = L.geoJSON(schools, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h5>' + feature.properties.name + '</h5>')
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: school_icon });
    }
});

function sch_change(e) {
    if (e.checked) {
        mymap.addLayer(schlayer);
        mymap.addLayer(schoo);

    }
    else {
        mymap.removeLayer(schlayer);
        mymap.removeLayer(schoo);
    }
}







var parlayer = L.geoJSON(parks_dissolved, {
    style: function (feature) {
        return { color: "green" };
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
})

var park_icon = L.icon({
    iconUrl: '/images/park.png',
    iconSize: [35, 35], // size of the icon
});

var parkk = L.geoJSON(parks, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h5>' + feature.properties.name + '</h5>')
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: park_icon });
    }
});

function par_change(e) {
    if (e.checked) {
        mymap.addLayer(parlayer);
        mymap.addLayer(parkk);
    }
    else {
        mymap.removeLayer(parlayer);
        mymap.removeLayer(parkk);
    }
}
