
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMSwUOXMfMWiWFPzu7sysHRClT3Eur26A",
  authDomain: "class-test-635ba.firebaseapp.com",
  databaseURL: "https://class-test-635ba-default-rtdb.firebaseio.com",
  projectId: "class-test-635ba",
  storageBucket: "class-test-635ba.appspot.com",
  messagingSenderId: "86097918167",
  appId: "1:86097918167:web:afc4a46611d94f144cd892",
  measurementId: "G-YYH373WBX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function addUser()
{
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child("user_name").update({
        purpose : "adding user"
    });
}