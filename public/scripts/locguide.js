var x = document.getElementById("demo");
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, noPosition, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
            } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
        //x.innerHTML = position.coords.latitude + " " + position.coords.longitude;
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            window.location.href="/locguide/map?lat="+lat+"&long="+long;
        };

        function noPosition(){
            window.location.href="/error"
        };

        