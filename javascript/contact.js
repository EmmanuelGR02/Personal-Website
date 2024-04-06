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
    saveInfo(name);
    // Reset form
    setTimeout(() => {
        document.getElementById("contact_form").reset()
    });
}

// Save info on databse
const saveInfo = (name) => {
    var newContactForm = contactForm.push();

    newContactForm.set({
        name : name
    });
};

// get values from placeholders
const getElementVal = (id) => {
    return document.getElementById(id).value
};