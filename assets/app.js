const firebaseConfig = {
    apiKey: "AIzaSyDutRlgxvLMQtSke_eCUR_kg9jmykXqWCQ",
    authDomain: "trainscheduler-9c47c.firebaseapp.com",
    databaseURL: "https://trainscheduler-9c47c.firebaseio.com",
    projectId: "trainscheduler-9c47c",
    storageBucket: "trainscheduler-9c47c.appspot.com",
    messagingSenderId: "885554738746",
    appId: "1:885554738746:web:3c654b6ca7cb4444d92703"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //#train-name
  //#destination-name
  //#train-time
  //#train-frequency
  //#submit

  

$("#submit").on("click", function() {
  
  const trainN = $("#train-name").val().trim();
  console.log(trainN);

  const destinationN = $("#destination-name").val().trim();
  console.log(destinationN);
  
  const trainT = $("#train-time").val();
  
  const trainF = $("#train-frequency").val();
// $("#newtrain").text(trainN);
// $("#newtrain1").text(destinationN);
// $("#newtrain2").text("test2");
// $("#newtrain3").text("test3");
// $("#destination-name").val().trim();
// $("#train-time").val().trim();
// $("#train-frequency").val().trim();


})