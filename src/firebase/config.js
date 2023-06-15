// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi0JACcuX7V5KrGOqHOmFkXFYcwYG-3qM",
  authDomain: "miniblog-2ff44.firebaseapp.com",
  projectId: "miniblog-2ff44",
  storageBucket: "miniblog-2ff44.appspot.com",
  messagingSenderId: "890486880638",
  appId: "1:890486880638:web:7a5670d3b0449883565b2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFireStore(app);

export { db };
