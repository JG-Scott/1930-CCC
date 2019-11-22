var gasPrice;
var carWeight;
var tripDistance;
var stage;
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Get vehicle weight from the DB//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function getCoupWeight() {

    db.collection("Vehicles").doc("Coup").onSnapshot(function (doc) {
        carWeight = doc.get("weight");
        console.log(carWeight);
        goTrip();
    });
}

function getSUVWeight() {

    db.collection("Vehicles").doc("SUV").onSnapshot(function (doc) {
        carWeight = doc.get("weight");
        console.log(carWeight);
        goTrip();
    });
}

function getSedanWeight() {

    db.collection("Vehicles").doc("Sedan").onSnapshot(function (doc) {
        carWeight = doc.get("weight");
        console.log(carWeight);
        goTrip();
    });
}


function getTruckWeight() {

    db.collection("Vehicles").doc("Truck").onSnapshot(function (doc) {
        carWeight = doc.get("weight");
        console.log(carWeight);
        goTrip();
    });
}
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Get Distances From the DB/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function getLangleyDistance() {

    db.collection("Trips").doc("BCITtoLangley").onSnapshot(function (doc) {
        tripDistance = doc.get("Distance(KM)");
        console.log(tripDistance);
        goGas();
    });
}
function getAbbotsfordDistance() {

    db.collection("Trips").doc("BCITtoAbbotsford").onSnapshot(function (doc) {
        tripDistance = doc.get("Distance(KM)");
        console.log(tripDistance);
        goGas();
    });
}
function getPMDistance() {

    db.collection("Trips").doc("BCITtoPortMoody").onSnapshot(function (doc) {
        tripDistance = doc.get("Distance(KM)");
        console.log(tripDistance);
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




////////////////////////////////////////////////////////////////////////////
///////////////////////////////Code That Writes/////////////////////////////
////////////////////////////////////////////////////////////////////////////

// db.collection("users").doc(user.uid).update({
//     "Car Type": document.getElementById('carTypeinfo').value,
// });

///////////////////////////////////////////////////////////////////////////////
/////////////////////////Code that rebuilds the buttons////////////////////////
///////////////////////////////////////////////////////////////////////////////
function goVehicle() {

    document.getElementById("display").innerHTML = "Select a vehicle:"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getCoupWeight()">Coup</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getSUVWeight()">SUV</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getSedanWeight()">Sedan</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getTruckWeight()">Truck</button>';
}
function goTrip() {

    document.getElementById("display").innerHTML = "Select a Trip:"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getLangleyDistance()">BCIT to Langley</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getAbbotsfordDistance()">BCIT to Abbotsford</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPMDistance()">BCIT to Port Moody</button>';
    document.getElementById("b4").innerHTML = "";
}
function goGas() {

    document.getElementById("display").innerHTML = "Select gas grade:"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getRegPrice()">Regular</button>';
    document.getElementById("b2").innerHTML = '<button itype="button" class="btn btn-success" onclick="getMidPrice()">Mid-Gade</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPremPrice()">Premium</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getDieselPrice()">Diesel</button>'
}
function goResult() {
    document.getElementById("display").innerHTML = "Gas: " + gasPrice + " Distance: " + tripDistance + " Weight: " + carWeight
}