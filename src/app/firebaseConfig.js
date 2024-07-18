// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaZlJy_BlQWIbofUd143xw-NYDNFiRYEY",
    authDomain: "yash-korat.firebaseapp.com",
    projectId: "yash-korat",
    storageBucket: "yash-korat.appspot.com",
    messagingSenderId: "827958753517",
    appId: "1:827958753517:web:00e6c73c52520d224134e4",
    measurementId: "G-ED2TW1PM2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);