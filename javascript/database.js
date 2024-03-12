import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// ************************** FIREBASE **************************
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyB5t42GhysCIOJBGQ0IoHftfe3481h9oLA",
    authDomain: "personal-website-6c1eb.firebaseapp.com",
    projectId: "personal-website-6c1eb",
    storageBucket: "personal-website-6c1eb.appspot.com",
    messagingSenderId: "73260029859",
    appId: "1:73260029859:web:a3df6e70e6a4ca0b1cec16",
    measurementId: "G-DB74KTDP29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);