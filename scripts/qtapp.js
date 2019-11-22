//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Get Gas Prices from the DB//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function getRegPrice() {

    db.collection("Gas").doc("Regular").onSnapshot(function (doc) {
 
    });
}

function getMidPrice() {

    db.collection("Gas").doc("Mid").onSnapshot(function (doc) {

    });
}

function getPremPrice() {

    db.collection("Gas").doc("Premium").onSnapshot(function (doc) {
    
    });
}




////////////////////////////////////////////////////////////////////////////
///////////////////////////////Code That Writes/////////////////////////////
////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////Code That Writes///////////////////////////////
//////////////////////////////////////////////////////////////////////////////


db.collection("users").doc(user.uid).update({
    "Car Type": document.getElementById('carTypeinfo').value,
});

///////////////////////////////////////////////////////////////////////////////
/////////////////////////Code that rebuilds the buttons////////////////////////
///////////////////////////////////////////////////////////////////////////////
function goTrip() {
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getLangleyDistance()">BCIT to Langley</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getAbbotsfordDistance()">BCIT to Abbotsford</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getChilliwackDistance()">BCIT to chilliwack</button>';
    document.getElementById("b4").innerHTML = "";
}
function goVehicle() {
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getCoupWeight()">Coup</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getSUVWeight()">SUV</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="GetSedanWeight()">Sedan</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="getTruckWeight()">Truck</button>';
}
function goGas() {
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getRegPrice()">Regular</button>';
    document.getElementById("b2").innerHTML = '<button itype="button" class="btn btn-success" onclick="getMidPrice()">Mid-Gade</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getPremPrice()">Premium</button>';
    document.getElementById("b4").innerHTML = '<button type="button" class="btn btn-success" onclick="setRegPrice()">Diesel</button>'
}
