function roomfunc(x){
    if(x <= 2){
        document.getElementById('price1').innerHTML = "< 40K";
        document.getElementById('price2').innerHTML = "40K-60K";
        document.getElementById('price3').innerHTML = "> 60K";

    }

    if(x == 3){
        document.getElementById('price1').innerHTML = "< 80K";
        document.getElementById('price2').innerHTML = "80K-100K";
        document.getElementById('price3').innerHTML = "> 100K";

    }

    if(x == 4){
        document.getElementById('price1').innerHTML = "< 100K";
        document.getElementById('price2').innerHTML = "100K-150K";
        document.getElementById('price3').innerHTML = "> 150K";

    }

    if(x == 5){
        document.getElementById('price1').innerHTML = "< 0K";
        document.getElementById('price2').innerHTML = "40K-60K";
        document.getElementById('price3').innerHTML = "> 60K";

    }
}