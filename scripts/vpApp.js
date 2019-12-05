let vehicleType = "";
let commute = 00;
let gasGrade = 00;

////////////////////////////////////////////////////////////////////////////
///////////////////////////////Code That Builds The Display/////////////////
////////////////////////////////////////////////////////////////////////////

function getUserDetails() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).onSnapshot(function (doc) {
             vehicleType = doc.get("car");
            vehicleType = (doc.get == null) ? "None" : doc.get("car").data;
            console.log(doc.get("car"));
             commute = doc.get("car");
            console.log(doc.get("commute"));
             gasGrade = doc.get("gas");
            console.log(doc.get("gas"));
            document.getElementById("display").innerHTML = "<h1>Car Type: " + doc.get("car") + "</h1><h2>Commute: " + doc.get("commute") + " miles</h2><h2>Fuel: " + doc.get("gas") + "</h2>";
            document.getElementById("b1").innerHTML = "<button type='button' class='btn btn-success' onclick='goVehicleProfile()'>NEW</button>";
            document.getElementById("b2").innerHTML = "";
            document.getElementById("b3").innerHTML = "";
            document.getElementById("b4").innerHTML = "";
        });
    })
};

function newProfile() {

    document.getElementById("display").innerHTML = "<h1>No Profile</h1>";
    document.getElementById("b1").innerHTML = "<button type='button' class='btn btn-success' onclick='goVehicleProfile()'>NEW</button>";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Get vehicle type and mpg DB/////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function getCoupMPG() {

    db.collection("Vehicles").doc("Coup").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        carType = "Coupe"
        console.log(MPG);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "22",
            "car": "Coupe",
        });
        goCommute();
    });
}

function getSUVMPG() {

    db.collection("Vehicles").doc("SUV").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        console.log(MPG);
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "30",
            "car": "SUV"
        });
    });
    goCommute();
}

function getSedanMPG() {

    db.collection("Vehicles").doc("Sedan").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        console.log(MPG);
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "45",
            "car": "Sedan"
        });
    });
    goCommute();
}


function getTruckMPG() {

    db.collection("Vehicles").doc("Truck").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        console.log(MPG);
        
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "mpg": "48",
            "car": "Truck"
        });
    });
    goCommute();
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
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////Get Gas Prices from the DB//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function getRegPrice() {

    db.collection("Gas").doc("Regular").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "1.46",
            "gasType": "Regular"
        });
    });
    getUserDetails();
}



function getMidPrice() {

    db.collection("Gas").doc("Mid-Grade").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "5.88",
            "gasType": "Mid-grade"
        });
    });
    getUserDetails();
}

function getPremPrice() {

    db.collection("Gas").doc("Premium").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "6.12",
            "gasType": "Premium"
        });
    });
    getUserDetails();
}

function getDieselPrice() {
    db.collection("Gas").doc("Diesel").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "5.84",
            "gasType": "Diesel"
        });
    });
    getUserDetails();
}


///////////////////////////////////////////////////////////////////////////////
/////////////////////////Code that rebuilds the buttons////////////////////////
///////////////////////////////////////////////////////////////////////////////
function goVehicleProfile() {

    document.getElementById("display").innerHTML = "<h2>Select a vehicle:</h2>"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getCoupMPG()">Coup</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getSUVMPG()">SUV</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getSedanMPG()">Sedan</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getTruckMPG()">Truck</button>';
}

function goCommute() {

    document.getElementById("display").innerHTML = "<h2>Select a Trip:</h2>"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getLangleyDistance()">BCIT to Langley</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getAbbotsfordDistance()">BCIT to Abbotsford</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPMDistance()">BCIT to Port Moody</button>';
    document.getElementById("b4").innerHTML = "";
}

function goGas() {

    document.getElementById("display").innerHTML = "<h2>Select gas grade:</h2>"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getRegPrice()">Regular</button>';
    document.getElementById("b2").innerHTML = '<button itype="button" class="btn btn-success" onclick="getMidPrice()">Mid-Gade</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPremPrice()">Premium</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getDieselPrice()">Diesel</button>'
}

////////////////////////////////////////////////////////////////////////////
///////////////////////////////Code That Builds The Display/////////////////
////////////////////////////////////////////////////////////////////////////
function getCurrentProfile() {

    document.getElementById("display").innerHTML = "<h1>Car Type: " + carType + "</h1><h2>Commute: " + tripDistance + " miles</h2><h2>Fuel: " + gasPrice + "</h2>";
    document.getElementById("b1").innerHTML = "<button type='button' class='btn btn-success' onclick='goVehicleProfile()'>NEW</button>";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";
}

// function getUserDetails() {
//     firebase.auth().onAuthStateChanged(function (user) {
//         db.collection("users").doc(user.uid).onSnapshot(function (doc) {
//             carType = doc.get("car");
//             tripDistance = doc.get("commute");
//             gasPrice = doc.get("gasType)");
//             console.log(gasPrice);
//         });
//     })
// };
function newProfile() {

    document.getElementById("display").innerHTML = "<h1>No Profile</h1>";
    document.getElementById("b1").innerHTML = "<button type='button' class='btn btn-success' onclick='goVehicleProfile()'>NEW</button>";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";
}
