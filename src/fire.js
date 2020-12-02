import firebase from 'firebase'
import 'firebase/firebase-firestore'

let firebaseConfig = {
    apiKey: "AIzaSyDcABDLUDwc77rZlIp3bovcFNpzzKPuZqM",
    authDomain: "wowprojetqem-15fa1.firebaseapp.com",
    databaseURL: "https://wowprojetqem-15fa1.firebaseio.com",
    projectId: "wowprojetqem-15fa1",
    storageBucket: "wowprojetqem-15fa1.appspot.com",
    messagingSenderId: "150341285556",
    appId: "1:150341285556:web:f7e27aa83a621dbb4fc9e1"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore()

export { db, fire }