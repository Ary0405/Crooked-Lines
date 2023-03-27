// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDEnMIhm9-1mYUOy7y4A4kHPVowIEAIM6I",
    authDomain: "crooked-lines.firebaseapp.com",
    projectId: "crooked-lines",
    storageBucket: "crooked-lines.appspot.com",
    messagingSenderId: "178059282596",
    appId: "1:178059282596:web:c8511cdcedc846318a3e31",
    measurementId: "G-4F94P22VRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export {auth, provider , storage};