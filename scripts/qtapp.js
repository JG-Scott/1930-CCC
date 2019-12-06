var gasPrice;
var carWeight;
var tripDistance;
var stage;
///////////////////////////////////////////////////////////////////////////////
/////////////////////////Code that rebuilds the buttons////////////////////////
///////////////////////////////////////////////////////////////////////////////
function goVehicle() {

    document.getElementById("display").innerHTML = "Select a vehicle:";
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getCoupWeight()">Coupe</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getSUVWeight()">SUV</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getSedanWeight()">Sedan</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getTruckWeight()">Truck</button>';
}
function goTrip() {

    document.getElementById("display").innerHTML = "Select a Trip:";
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getLADistance()">Los Angeles</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getThunderBayDistance()">Thunder Bay</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getMCDistance()">Mexico City</button>';
    document.getElementById("b4").innerHTML = "";
}
function goGas() {

    document.getElementById("display").innerHTML = "Select gas grade:";
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getRegPrice()">Regular</button>';
    document.getElementById("b2").innerHTML = '<button itype="button" class="btn btn-success" onclick="getMidPrice()">Mid-Gade</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPremPrice()">Premium</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getDieselPrice()">Diesel</button>'
}
function goResult() {
    db.collection("empty").doc("empty").onSnapshot(function (doc) {  
    document.getElementById("display").innerHTML = doc.get("empty") + "Your trip will cost:  $" + ((tripDistance / carWeight) * (gasPrice * 3.875)).toFixed(2);
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="goVehicle()">New Trip</button>';
    document.getElementById("b2").innerHTML = '';
    document.getElementById("b3").innerHTML = '';
    document.getElementById("b4").innerHTML = ''

});
   
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Get vehicle weight from the DB//////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function getCoupWeight() {

    db.collection("Vehicles").doc("Coup").onSnapshot(function (doc) {
        carWeight = doc.get("mpg");
        console.log(carWeight);
        goTrip();
    });
}

function getSUVWeight() {

    db.collection("Vehicles").doc("SUV").onSnapshot(function (doc) {
        carWeight = doc.get("mpg");
        console.log(carWeight);
        goTrip();
    });
}

function getSedanWeight() {

    db.collection("Vehicles").doc("Sedan").onSnapshot(function (doc) {
        carWeight = doc.get("mpg");
        console.log(carWeight);
        goTrip();
    });
}


function getTruckWeight() {

    db.collection("Vehicles").doc("Truck").onSnapshot(function (doc) {
        carWeight = doc.get("mpg");
        console.log(carWeight);
        goTrip();
    });
}
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Get Distances From the DB/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function getLADistance() {

    db.collection("Trips").doc("LA").onSnapshot(function (doc) {
        tripDistance = doc.get("miles");
        console.log(doc.get("miles"));
        goGas();
    });
}
function getThunderBayDistance() {

    db.collection("Trips").doc("ThunderBay").onSnapshot(function (doc) {
        tripDistance = doc.get("miles");
        console.log(doc.get("miles"));
        goGas();
    });
}
function getMCDistance() {

    db.collection("Trips").doc("Mexico City").onSnapshot(function (doc) {
        tripDistance = doc.get("miles");
        console.log(doc.get("miles"));
        goGas();
    });
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Get Gas Prices from the DB//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function getRegPrice() {

    db.collection("Gas").doc("Regular").onSnapshot(function (doc) {

        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);
        goResult();
    });
}

function getMidPrice() {

    db.collection("Gas").doc("Mid-Grade").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);
        goResult();
    });
}


function getPremPrice() {

    db.collection("Gas").doc("Premium").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);
        goResult();
    });
}

function getDieselPrice() {
    db.collection("Gas").doc("Diesel").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);
        goResult();
    });
}
