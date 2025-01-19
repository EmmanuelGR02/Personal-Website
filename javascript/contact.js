// toISISString()
// Firebase info
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize firebase db
firebase.initializeApp(firebaseConfig);

// Reference to db
var contactForm = firebase.database().ref('contact_form');

document.getElementById("contact_form").addEventListener("submit", submitForm);

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
        document.getElementById("contact_form").reset()
    });
}

// Save info on database
const saveInfo = (name, lastname, email, message) => {
    var newContactForm = contactForm.push();

    // get current date and time
    var timeStamp = new Date().toISOString('en-US', { hour12: false});

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

// get values from placeholders
const getElementVal = (id) => {
    return document.getElementById(id).value;
};

