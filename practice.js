//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAHsxpBVzG3j65GbBzlYQ5atNdhEmUbEZQ",
    authDomain: "kwitter-28075.firebaseapp.com",
    databaseURL: "https://kwitter-28075-default-rtdb.firebaseio.com",
    projectId: "kwitter-28075",
    storageBucket: "kwitter-28075.appspot.com",
    messagingSenderId: "615414386858",
    appId: "1:615414386858:web:655f6fd48d4c7686dcc0d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    }) 
}