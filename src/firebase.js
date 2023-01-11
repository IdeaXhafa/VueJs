import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDCrOv4DeyYTAvBXJIIhGsMRuhrl6GApm0",
    authDomain: "vue-app-38a16.firebaseapp.com",
    projectId: "vue-app-38a16",
    storageBucket: "vue-app-38a16.appspot.com",
    messagingSenderId: "416252943148",
    appId: "1:416252943148:web:e2e62fd22a6a67975d2a89",
    measurementId: "G-MJ3R5RSSHC"
};

// const storageRef = firebase.storage().ref();
const fb = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const db = firebase.firestore();
const storage = getStorage(fb);

export { timestamp, fb, db };
// export const db = fb.firestore();