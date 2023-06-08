// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6qUnDk5eEgb3kogoa-t4-wzGtYqDye2g",
    authDomain: "react-crud-app-d675a.firebaseapp.com",
    projectId: "react-crud-app-d675a",
    storageBucket: "react-crud-app-d675a.appspot.com",
    messagingSenderId: "327082261936",
    appId: "1:327082261936:web:710f054708c5e5346caa75",
    measurementId: "G-3LE55GR6PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);