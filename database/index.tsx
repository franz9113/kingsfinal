import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyA3x4-zPaPdVOVIqe0WRj912VYGmpTQKi0",
    authDomain: "kings-74193.firebaseapp.com",
    projectId: "kings-74193",
    storageBucket: "kings-74193.appspot.com",
    messagingSenderId: "984808096819",
    appId: "1:984808096819:web:f9c4e49dc3ff5a98660f46",
    measurementId: "G-R4N0VYZ737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);