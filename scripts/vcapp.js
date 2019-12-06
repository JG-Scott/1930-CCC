//variable to hold the changing 
var time = "week";


///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////User Details///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var gasValue = 0;
var gasmult = 7;
function getUserDetails() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).onSnapshot(function (doc) {
             var vehicleType = doc.get("car");
        
            console.log(doc.get("car"));
             var commute = doc.get("car");
            console.log(doc.get("commute"));
             var gasGrade = doc.get("gas");
            console.log(doc.get("gas"));
            document.getElementById("display").innerHTML = "<p>Car Type: " 
                + doc.get("car") + "</p><p>Commute: " + doc.get("commute") 
                + " miles</p><p>Fuel: $" + (doc.get("gas") * (3.875)).toFixed(2) 
                + "</p><p>Gas Total: $" + (doc.get("commute") / doc.get("mpg") 
                    * (doc.get("gas") * 3.875)).toFixed(2) + "</p>";

 
        });

    })
    

};







///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Temporary Details//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function getTempDetails() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).onSnapshot(function (doc) {
             var tempVehicleType = doc.get("Tempcar");
            tempVehicleType = (doc.get == null) ? "None" : doc.get("Tempcar").data;
            console.log(doc.get("Tempcar"));
             var tempCommute = doc.get("Tempcar");
            console.log(doc.get("Tempcommute"));
             var tempGasGrade = doc.get("Tempgas");
            console.log(doc.get("Tempgas"));
            
            document.getElementById("tempDisplay").innerHTML = "<p>Car Type: " + doc.get("Tempcar") + "</p><p>Commute: " + doc.get("commute") + " miles</p><p>Fuel: $" + doc.get("Tempgas") + "</p><p>Gas Total: $" + (doc.get("Tempcommute") / doc.get("Tempmpg") * doc.get("Tempgas")).toFixed(2) + "</p>";

           
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
    var elem2 = document.getElementById('tempButton2')
    elem.parentNode.removeChild(elem);
    elem2.parentNode.removeChild(elem2);

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
    document.getElementById("b7").innerHTML = '<button itype="button" class="btn btn-success" onclick="getTempMidPrice()">Mid-Grade</button>';
    document.getElementById("b8").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempPremPrice()">Premium</button>';
    document.getElementById("b9").innerHTML = '<button type="button" class="btn btn-success" onclick="getTempDieselPrice()">Diesel</button>';
}




   /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////Calculate Gas price///////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

function getInfo() {
 
        firebase.auth().onAuthStateChanged(function (user) {
            
            db.collection("users").doc(user.uid).onSnapshot(function (doc) {
                var normGas = (doc.get("commute") / doc.get("mpg") * (doc.get("gas") * (3.875)));
                var tempGas = (doc.get("Tempcommute") / doc.get("Tempmpg") * doc.get("Tempgas"));
                if (tempGas < normGas) {
                    var gasValue = ((normGas - tempGas)).toFixed(2);
                    var changer = "lose";
                } else if (tempGas > normGas) {
                    var gasValue = ((tempGas - normGas)).toFixed(2);
                    var changer = "save";
            
                }

                document.getElementById("info").innerHTML = "<p>By switching from your " + doc.get("car") + " to a " + doc.get("Tempcar") + ", you will " + changer + " a total of $" + ((gasValue) * gasmult).toFixed(2) + " over a one " + time + " period</p>";
     
            });
    
        })
    };




    function changeTimeYear() {
        time = "year";
        
        document.getElementById("changeable").innerHTML = '<button id="logout2" type="button" class="btn btn-success" onclick="changeTimeMonth()" id="changeable">See Monthly</button>';
        gasmult = gasmult * (253 / 7);
        getInfo();
}

function changeTimeMonth() {
    time = "month";
    getInfo();
    document.getElementById("changeable").innerHTML = '<button id="logout2" type="button" class="btn btn-success" onclick="changeTimeWeek()" id="changeable">See Weekly</button>';
    gasmult = gasmult * (20 / 253);

}

function changeTimeWeek() {
    time = "week";
    gasmult = gasmult * (7 / 20);
    getInfo();

    document.getElementById("changeable").innerHTML = '<button id="logout2" type="button" class="btn btn-success" onclick="changeTimeYear()" id="changeable">See Yearly</button>';


}
