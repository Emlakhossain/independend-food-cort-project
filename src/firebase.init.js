// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw_IufvhXRatUzKT0SuT1417XUJFv31aI",
    authDomain: "assignment-10-madang-food.firebaseapp.com",
    projectId: "assignment-10-madang-food",
    storageBucket: "assignment-10-madang-food.appspot.com",
    messagingSenderId: "86935757967",
    appId: "1:86935757967:web:b1b51acb2942ac1f0d3cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;