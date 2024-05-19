// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsUVDQFAIE9aAgL6SeM1kb6JwIIZMGMSI",
  authDomain: "game-co-vua-ne.firebaseapp.com",
  projectId: "game-co-vua-ne",
  storageBucket: "game-co-vua-ne.appspot.com",
  messagingSenderId: "161192743334",
  appId: "1:161192743334:web:d3da36990f314655e27f67",
  measurementId: "G-H7EQ2N4W0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);