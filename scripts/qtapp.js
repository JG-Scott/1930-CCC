var gasPrice;
//All of theses read from the database
        function getRegPrice() {

            db.collection("gas").doc("regular").onSnapshot(function(doc) {
                 document.getElementById("display").innerHTML = "Price: " + doc.get("price");                
            });
        }
        function getMidPrice() {
            
            db.collection("gas").doc("mid").onSnapshot(function(doc) {
                 document.getElementById("display").innerHTML = "Price: " + doc.get("price");                
            });
        }
        function getPremPrice() {
            
            db.collection("gas").doc("premium").onSnapshot(function(doc) {
                 document.getElementById("display").innerHTML = "Price: " + doc.get("price");                
            });
        }
        //This one dont work yet
        function setRegGas() {
            db.collection("gas").doc("regular").set({
                price: 122
            })
        }