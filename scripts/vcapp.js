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
            document.getElementById("display").innerHTML = "<p>Car Type: " + doc.get("car") + "</p><p>Commute: " + doc.get("commute") + " miles</p><p>Fuel: " + doc.get("gas") + "</>";

        });

    })
    
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";

};







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
            document.getElementById("tempDisplay").innerHTML = "<p>Car Type: " + doc.get("Tempcar") + "</p><p>Commute: " + doc.get("commute") + " miles</p><p>Fuel: " + doc.get("Tempgas") + "</p>";
            document.getElementById("b6").innerHTML = "";
            document.getElementById("b7").innerHTML = "";
            document.getElementById("b8").innerHTML = "";
            document.getElementById("b9").innerHTML = "";
            document.getElementById("b10").innerHTML = '<button type="button" class="btn btn-success" onclick="goToStats()">Statistics</button>';
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
            "Tempgas": "5.53",
            "TempgasType": "Regular"
        });
    });
    getStatsButt();
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
    getStatsButt();
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
    getStatsButt();
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
    getStatsButt();
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
    goNewGas();
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
        goNewGas();
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
    goNewGas();
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
    goNewGas();
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
    var elem = document.getElementById('tempButton');
    elem.parentNode.removeChild(elem);

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
    document.getElementById("b9").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempDieselPrice()">Diesel</button>';
}




   /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////Calculate Gas price///////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getResult() {

    //Store cost per time frame.
    let weekCost;
    let monthCost;
    let yearCost;

    //Determine cost per gallon.
    
    console.log(gasPrice);
    //Determine cost per trip.
    let tripCost = (tripDistance / MPG) * gasPrice;
    console.log(tripCost);

    //Assume trip is made 3 times per week.
    weekCost = "<h2>Per Week: $" + (Math.round(tripCost * 5).toFixed(2)) + "</h2>";
    monthCost = "<h2>Per Month: $" + (Math.round(tripCost * 15).toFixed(2)) + "</h2>";
    yearCost = "<h2>Per Year: $" + (Math.round(tripCost * 253).toFixed(2)) + "</h2>";

    //Display results.
    document.getElementById("ccPrompt").innerHTML = "<h2>Gas Cost</h2><br />" + weekCost + monthCost + yearCost;

};

function getTempResult() {

    //Store cost per time frame.
    let weekCostTemp;
    let monthCostTemp;
    let yearCostTemp;

    //Determine cost per gallon.
    var costPerG = gasPrice * 0.26;
    console.log(costPerG);
    //Determine cost per trip.
    var tripCost = (tripDistance / MPG) * costPerG * 2;
    console.log(tripCost);

    //Assume trip is made 3 times per week.
    var weekCost = "<h2>Per Week: $" + (Math.round((tripCost * 5) * 100) / 100).toFixed(2); + "</h2>";
    var monthCost = "<h2>Per Month: $" + (Math.round((tripCost * 15) * 100) / 100).toFixed(2); + "</h2>";
    var yearCost = "<h2>Per Year: $" + (Math.round((tripCost * 180) * 100) / 100).toFixed(2); + "</h2>";

    //Display results.
    document.getElementById("ccPrompt").innerHTML = "<h2>Gas Cost</h2><br />" + weekCost + monthCost + yearCost;

};

function getStatsButt() {
    document.getElementById("b10").innerHTML = '<button type="button" class="btn btn-success" onclick="goToStats()">Statistics</button>';
    document.getElementById("tempDisplay").innerHTML = "";
    document.getElementById("b6").innerHTML = "";
    document.getElementById("b7").innerHTML = "";
    document.getElementById("b8").innerHTML = "";
    document.getElementById("b9").innerHTML = "";
    document.getElementById("newVehicle").innerHTML = "";
}

function goToStats() {

    window.location.href = "Stats.html";


};

