////////////////////////////////////////////////////////////////////////////
///////////////////////////////Code That Builds The Display/////////////////
////////////////////////////////////////////////////////////////////////////

function getUserDetails() {
    document.getElementById("display").innerHTML = "<h2>Loading...</h2>"
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).onSnapshot(function (doc) {
            document.getElementById("display").innerHTML = "<h1>Car Type: " + doc.get("car") + "</h1><h2>Commute: " + doc.get("commute") + " miles</h2><h2>Fuel: " + doc.get("gasType") + "</h2>";
            console.log('user details');

        });
    });
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="goHome()">Back to Compare</button>';
    console.log('new');
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";
};

function goHome(){
    window.location.href = 'VehicleComparer.html';
}
///////////////////////////////////////////////////////////////////////////////
/////////////////////////Code that rebuilds the buttons////////////////////////
///////////////////////////////////////////////////////////////////////////////
function goVehicleProfile() {

    document.getElementById("display").innerHTML = "<h2>Select a vehicle:</h2>"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getCoupMPG()">Coupe</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getSUVMPG()">SUV</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getSedanMPG()">Sedan</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getTruckMPG()">Truck</button>';
    console.log('go vehicle profile')

}

function goCommute() {

    document.getElementById("display").innerHTML = "<h2>Select a Trip:</h2>"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getLangleyDistance()">BCIT to Langley</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getAbbotsfordDistance()">BCIT to Abbotsford</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPMDistance()">BCIT to Port Moody</button>';
    document.getElementById("b4").innerHTML = "";
    console.log('go commute');

}

function goGas() {

    document.getElementById("display").innerHTML = "<h2>Select gas grade:</h2>"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getRegPrice()">Regular</button>';
    document.getElementById("b2").innerHTML = '<button itype="button" class="btn btn-success" onclick="getMidPrice()">Mid-Grade</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPremPrice()">Premium</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getDieselPrice()">Diesel</button>';
    console.log('go gas')

}

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Get vehicle type and mpg DB/////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function getCoupMPG() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "28",
            "car": "Coupe",
        });
        goCommute();
    });
}

function getSUVMPG() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "24",
            "car": "SUV"
            
        });
        goCommute();
    });
 
}

function getSedanMPG() {


    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "25",
            "car": "Sedan"
        });
        goCommute();
    });

}


function getTruckMPG() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "23",
            "car": "Truck"
        });
        goCommute();
    });
  
}
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Get Distances From the DB/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function getLangleyDistance() {


    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "commute": "23.8",
        });
        goGas();
    });
  
}

function getAbbotsfordDistance() {


    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "commute": "39.2",
        });
        goGas();
    });

}

function getPMDistance() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "commute": "9.4",
        });
        goGas();
    });
 
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////Get Gas Prices from the DB//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function getRegPrice() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "1.35",
            "gasType": "Regular"
        });
        getUserDetails();
    });
  
}



function getMidPrice() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "1.47",
            "gasType": "Mid-grade"
        });
        getUserDetails();
    });
   
}

function getPremPrice() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "1.53",
            "gasType": "Premium"
        });
        getUserDetails();
    });

}

function getDieselPrice() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "1.46",
            "gasType": "Diesel"
        });
        getUserDetails();
    });
   
}