var gasPrice;
//All of theses read from the database
function getRegPrice() {

    db.collection("Gas").doc("Regular").onSnapshot(function (doc) {
        document.getElementById("display").innerHTML = "Price: " + doc.get("Price(CA)");
        goTrip();
    });
}

function getMidPrice() {

    db.collection("Gas").doc("Mid").onSnapshot(function (doc) {
        document.getElementById("display").innerHTML = "Price: " + doc.get("Price(CA)");
    });
}

function getPremPrice() {

    db.collection("Gas").doc("premium").onSnapshot(function (doc) {
        document.getElementById("display").innerHTML = "Price: " + doc.get("Price(CA)");
    });
}



////////////////////////////////////////////////////////////////////////////
///////////////////////////////Code That Writes//////////////////////////////
////////////////////////////////////////////////////////////////////////////

db.collection("users").doc(user.uid).update({
    "Car Type": document.getElementById('carTypeinfo').value,
});

///////////////////////////////////////////////////////////////////////////////
/////////////////////////Code that rebuilds the buttons////////////////////////
///////////////////////////////////////////////////////////////////////////////
function goTrip() {
    document.getElementById("b1").innerHTML = '<button type="button" class="btn btn-success" onclick="getRegPrice()">BCIT to Langley</button>';
    document.getElementById("b2").innerHTML = '<button type="button" class="btn btn-success" onclick="getRegPrice()">BCIT to Abbotsford</button>';
    document.getElementById("b3").innerHTML = '<button type="button" class="btn btn-success" onclick="getRegPrice()">BCIT to chilliwack</button>';
    document.getElementById("b4").innerHTML ="";
}