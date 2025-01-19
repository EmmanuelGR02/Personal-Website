import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push } from 'firebase/database';

// Firebase info
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize firebase db
const app = initializeApp(firebaseConfig);

// Reference to the database
const database = getDatabase(app);

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
    // Wait until DOM is fully loaded before adding event listeners
    const contactForm = document.getElementById("contact_form");

    if (contactForm) {
        contactForm.addEventListener("submit", submitForm);
    } else {
        console.error("Contact form not found");
    }
});

// save info when form is submitted
function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("form_name");
    var lastname = getElementVal("form_lastname");
    var email = getElementVal("form_email");
    var message = getElementVal("form_message");
    saveInfo(name, lastname, email, message);
    
    // Reset form
    setTimeout(() => {
        document.getElementById("contact_form").reset();
    });
}

// Save info to the database
const saveInfo = (name, lastname, email, message) => {
    const contactFormRef = ref(database, 'contact_form'); // Create reference to 'contact_form'

    const newContactFormRef = push(contactFormRef); // Create a new push reference under 'contact_form'
    
    const timeStamp = new Date().toISOString('en-US', { hour12: false });

    set(newContactFormRef, {
        name: name,
        lastname: lastname,
        email: email,
        message: message,
        timeStamp: timeStamp
    }).then(() => {
        console.log("Data saved successfully");
    }).catch((error) => {
        console.error("Error saving data:", error);
    });
};

// get values from placeholders
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
