//////////////////////////////////////////////////////////////////////////////////////////
//                             Local Vehicle Information                                //
//////////////////////////////////////////////////////////////////////////////////////////
var gasPrice;
var MPG;
var carType;
var tripDistance;
var stage;

//////////////////////////////////////////////////////////////////////////////////////////
//                                    Determine MPG                                     //
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
            "car": "Coupe",
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
            "car": "SUV"
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
            "car": "Sedan"
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
            "car": "Truck"
        });
    });

}

//////////////////////////////////////////////////////////////////////////////////////////
//                                   Determine Distance                                 //
//////////////////////////////////////////////////////////////////////////////////////////
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
//                                  Determine Gas Price                                 //
//////////////////////////////////////////////////////////////////////////////////////////
function getRegPrice() {

    db.collection("Gas").doc("Regular").onSnapshot(function (doc) {
        gasPrice = doc.get("Price(CA)");
        console.log(gasPrice);

    });
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            "gas": "1.35",
            "gasType": "Regular"
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
            "gas": "1.47",
            "gasType": "Mid-grade"
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
            "gas": "1.53",
            "gasType": "Premium"
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
            "gas": "1.46",
            "gasType": "Diesel"
        });
    });
    getCurrentProfile();
}

//////////////////////////////////////////////////////////////////////////////////////////
//                                    Button Rebuild                                    //
//////////////////////////////////////////////////////////////////////////////////////////
function goVehicleProfile() {

    document.getElementById("ccPrompt").innerHTML = "<h2>Select a vehicle</h2>"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getCoupMPG()">Coupe</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getSUVMPG()">SUV</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getSedanMPG()">Sedan</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getTruckMPG()">Truck</button>';
    document.getElementById("current").innerHTML = "";
    document.getElementById("start").innerHTML = "";
}

function goCommute() {

    document.getElementById("ccPrompt").innerHTML = "<h2>Select a Trip</h2>"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getLangleyDistance()">BCIT to Langley</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getAbbotsfordDistance()">BCIT to Abbotsford</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPMDistance()">BCIT to Port Moody</button>';
    document.getElementById("b4").innerHTML = "";
    document.getElementById("current").innerHTML = "";
    document.getElementById("start").innerHTML = "";
}

function goGas() {

    document.getElementById("ccPrompt").innerHTML = "<h2>Select gas grade</h2>"
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getRegPrice()">Regular</button>';
    document.getElementById("b2").innerHTML = '<button itype="button" class="btn btn-success" onclick="getMidPrice()">Mid-Gade</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPremPrice()">Premium</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getDieselPrice()">Diesel</button>';
    document.getElementById("current").innerHTML = "";
    document.getElementById("start").innerHTML = "";
}

function newProfile() {
    document.getElementById("ccPrompt").innerHTML = "<h1>No Profile</h1>";
    document.getElementById("current").innerHTML = "<button type='button' id='btn1' class='btn btn-success' onclick='goVehicleProfile()'>New Profile</button>";
    document.getElementById("start").innerHTML = "";
}

//////////////////////////////////////////////////////////////////////////////////////////
//                       Get profile info and calculate cost                            //
//////////////////////////////////////////////////////////////////////////////////////////
function getCurrentProfile() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).onSnapshot(function (doc) {
            carType = doc.get("car");
            carType = (doc.get == null) ? "None" : doc.get("car").data;
            console.log(doc.get("car"));
            tripDistance = doc.get("commute");
            console.log(doc.get("commute"));
            gasPrice = doc.get("gas");
            console.log(doc.get("gas"));
            console.log(gasPrice);
            MPG = doc.get("mpg");
            console.log(MPG);
            document.getElementById("ccPrompt").innerHTML = "<h2>Current Profile</h2>" 
                                                            + "<h2>Car Type: " + doc.get('car') 
                                                            + "</h2><h2>Commute: " + doc.get('commute') 
                                                            + " miles</h2><h2>Fuel: " + doc.get('gas') + "</h2>";
            document.getElementById("b1").innerHTML = "";
            document.getElementById("b2").innerHTML = "";
            document.getElementById("b3").innerHTML = "";
            document.getElementById("b4").innerHTML = "";
            document.getElementById("current").innerHTML = "<button type='button' id='btn1' class='btn btn-success' onclick='goVehicleProfile()'>New Profile</button>";
            document.getElementById("start").innerHTML = "<button type='button' id='btn1' class='btn btn-success' onclick='getResult()'>Get Results</button>";
        });
    })
};

function getResult() {

    console.log("Determining cost...")

    //Determine cost per gallon.
    var costPerG = gasPrice * 3.78541;
    console.log("Cost Per Gallon: " + costPerG);

    //Determine cost per trip.
    var tripCost = (tripDistance / MPG) * costPerG * 2;
    console.log("Cost per round trip: " + tripCost);

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //  Trip is made THREE times a week. MATH.ROUND formats the number. Calculation done above.     //
    //////////////////////////////////////////////////////////////////////////////////////////////////
    var weekCost = "<h2>Per Week: $" + (Math.round((tripCost * 3) * 100 / 100)).toFixed(2); + "</h2>";
    var monthCost = "<h2>Per Month: $" + (Math.round((tripCost * 15) * 100 / 100)).toFixed(2); + "</h2>";
    var yearCost = "<h2>Per Year: $" + (Math.round((tripCost * 180) * 100) / 100).toFixed(2); + "</h2>";

    //Display results.
    document.getElementById("ccPrompt").innerHTML = "<h2>Gas Cost</h2><br />" + weekCost + monthCost + yearCost;

};