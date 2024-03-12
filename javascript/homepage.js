
// get switch components
const backgroundSwitch = document.getElementById('backgroundSwitch');
const slider = document.querySelector('#backgroundSwitch .slider');
const helloName = document.querySelectorAll('.hello, .name');
let isBackgroundBlack = true;

// set the start background colors
document.body.style.backgroundColor = 'black';
slider.style.backgroundColor = 'black'; 
slider.classList.add('checked'); 
slider.style.backgroundColor = 'black'; 

// Add event listener for switch toggle
backgroundSwitch.addEventListener('change', function() {
    if (isBackgroundBlack) {
        // Change background to white and text color to black
        document.body.style.backgroundColor = 'white';
        helloName.forEach(element => {
            element.style.color = 'black';
        });
        // Toggle switch colors
        slider.classList.remove('checked');
        slider.style.backgroundColor = 'white';
    } else {
        // Change background to black and text color to white
        document.body.style.backgroundColor = 'black';
        helloName.forEach(element => {
            element.style.color = 'white';
        });
        slider.classList.add('checked');
        slider.style.backgroundColor = 'black';
    }
    isBackgroundBlack = !isBackgroundBlack;
});



// ************************** FIREBASE **************************
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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