import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCrOv4DeyYTAvBXJIIhGsMRuhrl6GApm0",
    authDomain: "vue-app-38a16.firebaseapp.com",
    projectId: "vue-app-38a16",
    storageBucket: "vue-app-38a16.appspot.com",
    messagingSenderId: "416252943148",
    appId: "1:416252943148:web:e2e62fd22a6a67975d2a89",
    measurementId: "G-MJ3R5RSSHC"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();