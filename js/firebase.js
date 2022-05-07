// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv4-NHRNAr8oVWYnLXeEzHs03n8gtJgXc",
  authDomain: "diegotiendacesde.firebaseapp.com",
  projectId: "diegotiendacesde",
  storageBucket: "diegotiendacesde.appspot.com",
  messagingSenderId: "808211683477",
  appId: "1:808211683477:web:0d0349d1b534967851a39c",
  measurementId: "G-TPRD62QC5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);