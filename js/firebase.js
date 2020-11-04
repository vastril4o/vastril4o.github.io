var firebaseConfig = {
    apiKey: "AIzaSyDxktoDIxnYSed6kbfHeSpGwakuJzLH6ac",
    authDomain: "vastril4o-64150.firebaseapp.com",
    databaseURL: "https://vastril4o-64150.firebaseio.com",
    projectId: "vastril4o-64150",
    storageBucket: "vastril4o-64150.appspot.com",
    messagingSenderId: "894835215019",
    appId: "1:894835215019:web:14c4abb2393a4d8d5945ee",
    measurementId: "G-6JFG87J1J1"
  };

// initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// listen
const counterLike = firebase.database().ref("like");
counterLike.on("value", (snapshot) => {
    document.getElementById("span_like").textContent = snapshot.val();
});

const counterDislike = firebase.database().ref("dislike");
counterDislike.on("value", (snapshot) => {
    document.getElementById("span_dislike").textContent = snapshot.val();
});

// update
function fbCounterIncrease(type) {
    // hide yes/no buttons
    document.getElementById("pFeedback").innerHTML = "Thanks for your feedback!";
    
    if (type == 'like') {
        counterLike.transaction(val => val + 1, (err) => {
            if (err) {
                alert(err);
            }
        });
    } else if (type == 'dislike') {
        counterDislike.transaction(val => val + 1, (err) => {
            if (err) {
                alert(err);
            }
        });
    }
};