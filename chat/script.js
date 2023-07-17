
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  import { GoogleAuthProvider, getAuth, signInWithPopup  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
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
  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  auth.useDeviceLanguage();

  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
