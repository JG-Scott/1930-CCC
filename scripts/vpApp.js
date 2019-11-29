var gasPrice;
var MPG;
var tripDistance;
var stage;
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Get vehicle weight from the DB//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function getCoupMPG() {

    db.collection("Vehicles").doc("Coup").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        carType = "Coupe"
        console.log(MPG);
        goCommute();
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "22",
        });
    });
}

function getSUVMPG() {

    db.collection("Vehicles").doc("SUV").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        console.log(MPG);
        goCommute();
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "30",
        });
    });

}

function getSedanMPG() {

    db.collection("Vehicles").doc("Sedan").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        console.log(MPG);
        goCommute();
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "45",
        });
    });

}


function getTruckMPG() {

    db.collection("Vehicles").doc("Truck").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        console.log(MPG);
        goCommute();
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "48",
        });
    });

}
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Get Distances From the DB/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function getLangleyDistance() {

    db.collection("Trips").doc("BCITtoLangley").onSnapshot(function (doc) {
        tripDistance = doc.get("Distance(KM)");
        console.log(tripDistance);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "commute": "23.8",
        });
    });
    goGas();
}

function getAbbotsfordDistance() {

    db.collection("Trips").doc("BCITtoAbbotsford").onSnapshot(function (doc) {
        tripDistance = doc.get("Distance(KM)");
        console.log(tripDistance);
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "commute": "39.2",
        });
    });
    goGas();
}

function getPMDistance() {

    db.collection("Trips").doc("BCITtoPortMoody").onSnapshot(function (doc) {
        tripDistance = doc.get("Distance(KM)");
        console.log(tripDistance);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "commute": "9.4",
        });
    });
    goGas();
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Get Gas Prices from the DB//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function getRegPrice() {

    db.collection("Gas").doc("Regular").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);
       
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "1.46",
        });
    });
    getCurrentProfile();
}

function getMidPrice() {

    db.collection("Gas").doc("Mid-Grade").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);
      
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "5.88",
        });
    });
    getCurrentProfile();
}

function getPremPrice() {

    db.collection("Gas").doc("Premium").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);
        
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "6.12",
        });
    });
    getCurrentProfile();
}

function getDieselPrice() {
    db.collection("Gas").doc("Diesel").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);
        
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "5.84",
        });
    });
    getCurrentProfile();
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
function goVehicleProfile() {

    document.getElementById("display").innerHTML = "Select a vehicle:"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getCoupMPG()">Coup</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getSUVMPG()">SUV</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getSedanMPG()">Sedan</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getTruckMPG()">Truck</button>';
}

function goCommute() {

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

////////////////////////////////////////////////////////////////////////////
///////////////////////////////Code That Builds The Display/////////////////
////////////////////////////////////////////////////////////////////////////
function getCurrentProfile() {
    document.getElementById("display").innerHTML = "(<h1>Car Type: " + carType + "</h1><h2>Commute: " + tripDistance + " miles</h2><h2>Gas Cost: " + gasPrice + "</h2>";
    document.getElementById("b1").innerHTML = "<button type='button' class='btn btn-success' onclick='goVehicleProfile()'>NEW</button>";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";
}