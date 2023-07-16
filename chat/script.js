
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDFlmUGMQa-aWXCNxUWZ8_5QVsQdzpnHPY",
    authDomain: "chatroom-6a9ea.firebaseapp.com",
    projectId: "chatroom-6a9ea",
    storageBucket: "chatroom-6a9ea.appspot.com",
    messagingSenderId: "757424021763",
    appId: "1:757424021763:web:efc1776a31d86bad398936",
    measurementId: "G-TP1GDRTTLN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
