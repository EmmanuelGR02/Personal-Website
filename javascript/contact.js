// toISISString()
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
    var timeStamp = new Date().toLocaleDateString('en-US', { hour12: false});

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

