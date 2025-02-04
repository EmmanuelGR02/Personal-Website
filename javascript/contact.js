// Firebase info
const firebaseConfig = {
    apiKey: "AIzaSyB5t42GhysCIOJBGQ0IoHftfe3481h9oLA",
    authDomain: "personal-website-6c1eb.firebaseapp.com",
    databaseURL: "https://personal-website-6c1eb-default-rtdb.firebaseio.com",
    projectId: "personal-website-6c1eb",
    storageBucket: "personal-website-6c1eb.appspot.com",
    messagingSenderId: "73260029859",
    appId: "1:73260029859:web:a3df6e70e6a4ca0b1cec16",
    measurementId: "G-DB74KTDP29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// References to Firebase Database
var contactForm = firebase.database().ref('contact_form');
var websiteStats = firebase.database().ref('website_stats');

// Increment view count and save timestamp
function recordView() {
    const timeStamp = new Date().toISOString(); // Current timestamp

    websiteStats.child('views').transaction((currentViews) => {
        return (currentViews || 0) + 1; // Increment views count
    }).then(() => {
        console.log("View count incremented");
    }).catch((error) => {
        console.error("Error incrementing view count:", error);
    });

    websiteStats.child('timestamps').push(timeStamp).then(() => {
        console.log("Timestamp recorded:", timeStamp);
    }).catch((error) => {
        console.error("Error saving timestamp:", error);
    });
}

const currentPage = window.location.href;

// Call recordView when the script is executed (website is opened)
if (currentPage == "https://egr-portfolio.netlify.app/") {
    recordView();
}

document.getElementById("contact_form").addEventListener("submit", submitForm);

// Save info when the form is submitted
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

// Save contact form info to the database
const saveInfo = (name, lastname, email, message) => {
    var newContactForm = contactForm.push();

    // Get current date and time
    var timeStamp = new Date().toISOString();

    newContactForm.set({
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

// Get values from input placeholders
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
