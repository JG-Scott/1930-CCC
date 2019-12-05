
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Temporary Details//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function getTempDetails() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).onSnapshot(function (doc) {
             vehicleType = doc.get("Tempcar");
            vehicleType = (doc.get == null) ? "None" : doc.get("Tempcar").data;
            console.log(doc.get("Tempcar"));
             commute = doc.get("Tempcar");
            console.log(doc.get("Tempcommute"));
             gasGrade = doc.get("Tempgas");
            console.log(doc.get("Tempgas"));
            document.getElementById("tempDisplay").innerHTML = "<h1>Car Type: " + doc.get("Tempcar") + "</h1><h2>Commute: " + doc.get("Tempcommute") + " miles</h2><h2>Fuel: " + doc.get("Tempgas") + "</h2>";
            document.getElementById("b6").innerHTML = "";
            document.getElementById("b7").innerHTML = "";
            document.getElementById("b8").innerHTML = "";
            document.getElementById("b9").innerHTML = "";
        });
    })
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Temporary Gas Prices///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


function getTempRegPrice() {

    db.collection("Gas").doc("Regular").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "Tempgas": "1.46",
            "TempgasType": "Regular"
        });
    });
    getTempDetails();
}

function getTempMidPrice() {

    db.collection("Gas").doc("Mid-Grade").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "Tempgas": "5.88",
            "TempgasType": "Mid-grade"
        });
    });
    getTempDetails();
}

function getTempPremPrice() {

    db.collection("Gas").doc("Premium").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "Tempgas": "6.12",
            "TempgasType": "Premium"
        });
    });
    getTempDetails();
}

function getTempDieselPrice() {
    db.collection("Gas").doc("Diesel").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "Tempgas": "5.84",
            "TempgasType": "Diesel"
        });
    });
    getTempDetails();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Temporary Vehicles/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function getTempSUVMPG() {

    db.collection("Vehicles").doc("SUV").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        console.log(MPG);
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "Tempmpg": "30",
            "Tempcar": "SUV"
        });
    });
    goNewCommute();
}

function getTempCoupMPG() {

    db.collection("Vehicles").doc("Coup").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        carType = "Coupe"
        console.log(MPG);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "Tempmpg": "22",
            "Tempcar": "Coupe",
        });
        goNewCommute();
    });
}

function getTempSedanMPG() {

    db.collection("Vehicles").doc("Sedan").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        console.log(MPG);
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "Tempmpg": "45",
            "Tempcar": "Sedan"
        });
    });
    goNewCommute();
}

function getTempTruckMPG() {

    db.collection("Vehicles").doc("Truck").onSnapshot(function (doc) {
        MPG = doc.get("mpg");
        console.log(MPG);
        
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "Tempmpg": "48",
            "Tempcar": "Truck"
        });
    });
    goNewCommute();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Temporary Distances////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function getTempAbbotsfordDistance() {

    db.collection("Trips").doc("BCITtoAbbotsford").onSnapshot(function (doc) {
        tripDistance = doc.get("Distance(KM)");
        console.log(tripDistance);
    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "Tempcommute": "39.2",
        });
    });
    goNewGas();
}

function getTempLangleyDistance() {

    db.collection("Trips").doc("BCITtoLangley").onSnapshot(function (doc) {
        tripDistance = doc.get("Distance(KM)");
        console.log(tripDistance);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "commute": "23.8",
        });
    });
    goNewGas();
}


function getTempPMDistance() {

    db.collection("Trips").doc("BCITtoPortMoody").onSnapshot(function (doc) {
        tripDistance = doc.get("Distance(KM)");
        console.log(tripDistance);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "commute": "9.4",
        });
    });
    goNewGas();
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Temporary Go to's//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function goNewVehicleProfile() {

    document.getElementById("tempDisplay").innerHTML = "<h2>Select a vehicle:</h2>"
    document.getElementById("tempButton").innerHTML = "";
    document.getElementById("b6").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempCoupMPG()">Coup</button>';
    document.getElementById("b7").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempSUVMPG()">SUV</button>';
    document.getElementById("b8").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempSedanMPG()">Sedan</button>';
    document.getElementById("b9").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempTruckMPG()">Truck</button>';
}

function goNewCommute() {

    document.getElementById("tempDisplay").innerHTML = "<h2>Select a Trip:</h2>"
    document.getElementById("b6").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempLangleyDistance()">BCIT to Langley</button>';
    document.getElementById("b7").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempAbbotsfordDistance()">BCIT to Abbotsford</button>';
    document.getElementById("b8").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempPMDistance()">BCIT to Port Moody</button>';
    document.getElementById("b9").innerHTML = "";
}

function goNewGas() {

    document.getElementById("tempDisplay").innerHTML = "<h2>Select gas grade:</h2>"
    document.getElementById("b6").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempRegPrice()">Regular</button>';
    document.getElementById("b7").innerHTML = '<button itype="button" class="btn btn-success" onclick="getTempMidPrice()">Mid-Gade</button>';
    document.getElementById("b8").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempPremPrice()">Premium</button>';
    document.getElementById("b9").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempDieselPrice()">Diesel</button>'
}

