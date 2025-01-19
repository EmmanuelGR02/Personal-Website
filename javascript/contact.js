// toISISString()
// Firebase info
const firebaseConfig = {
    apiKey: window.REACT_APP_FIREBASE_API_KEY,
    authDomain: window.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: window.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: window.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: window.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: window.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: window.REACT_APP_FIREBASE_APP_ID,
    measurementId: window.REACT_APP_FIREBASE_MEASUREMENT_ID
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

