//=================================================
// This files contains all the javascript functions
// used in the project
//
// @author Fierce Brosnan
// @version 0.1
//=================================================

// ---------------------------------------------
// Display the current Date (id="today")
// ---------------------------------------------
function showDate() {
  var d = new Date();
  var line = d.toDateString().slice(0, 15);
  document.getElementById("today").innerHTML = line;
}

// ---------------------------------------------
// Setup a Listener for the Logout button called "btnLogout"
// When button is clicked, increment the "total" field in database.
// Also, add a document to the "history" sub-collection
// ---------------------------------------------
function setAddListener() {
  document.getElementById("addBtn").addEventListener("click", function (e) {

    //---------------------------
    // Event Handler begins here
    //---------------------------
    firebase.auth().onAuthStateChanged(function (user) {
      var userRef = db.collection('users').doc(user.uid);

      // add a date to the history sub-collection
      var d = new Date();
      userRef.collection("history").add({
        date: d
      })

      // increment total field
      // use FieldValue.increment function to increment a field
      var incByOne = firebase.firestore.FieldValue.increment(1);
      userRef.update({
          total: incByOne
        })
        .then(function () {
          showCaffeineCount();
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    });
    //----------------------
    // End of event handling
    //----------------------

  })
}

// ---------------------------------------------
// If the currently logged in user is authenticated,
// then signout this person "user".
// ---------------------------------------------
function logoutUser() {
  firebase.auth().onAuthStateChanged(function (user) {
    var promise = firebase.auth().signOut();
    promise.then(function () {
      //alert("logged out");
    });
  });
}

// ---------------------------------------------
// If the currently logged in user is authenticated,
// then show the person's name in the header (id="name")
// ---------------------------------------------
function showName() {
  firebase.auth().onAuthStateChanged(function (user) {
    //console.log(user);
    document.getElementById("name").innerHTML = user.displayName;
  });
}

// ---------------------------------------------
// If the currently logged in user is authenticated,
// then show the person's history (id="history")
// by reading from database, then display history.
// ---------------------------------------------
function showHistory() {
  firebase.auth().onAuthStateChanged(function (user) {

    var dbRef = db.collection('users').doc(user.uid).collection('history');
    dbRef.onSnapshot(function (snap) {
      //console.log(snap);
      snap.forEach(function (doc) {
        var date = doc.data().date.toDate();
        console.log(date);
        var para = document.createElement("p");
        document.getElementById("history").appendChild(para);
        var node = document.createTextNode(date);
        para.appendChild(node);
      });
    });

  });
}



// ---------------------------------------------
// If the currently logged in user is authenticated,
// then save the person's goal (id = "goal")
// ---------------------------------------------
function saveGoal() {

  // firebase.auth().onAuthStateChanged(function (user) {
  //   let document.getElementById("goal").
  //     db.collection("users/").doc(user.uid)
  //       .update({
  //           goal: g
  //         })
  // })
}