// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD1FT2taDg0C7hxBGmS8kYD8d7qmaj-sE",
    authDomain: "clothesshop-c3837.firebaseapp.com",
    projectId: "clothesshop-c3837",
    storageBucket: "clothesshop-c3837.firebasestorage.app",
    messagingSenderId: "9061606856",
    appId: "1:9061606856:web:24213529883a5ce13bccfd",
    measurementId: "G-BSC8PS9NW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;