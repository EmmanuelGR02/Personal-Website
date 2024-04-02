// Define Firebase configuration and initialize Firebase
const firebaseConfig = {
    // Your Firebase config here
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  const database = firebase.database();
  const ref = database.ref();
  
  // Function to set data
  function setData() {
      ref.set({
          key1: "value1",
          key2: "value2"
      });
  }
  
  // Function to update data
  function updateData() {
      ref.update({
          key1: "new value"
      });
  }
  
  // Function to push data
  function pushData() {
      ref.push({
          key3: "value3"
      });
  }
  