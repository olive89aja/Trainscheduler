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

  var database = firebase.database();
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
  console.log(trainT);
  const trainF = $("#train-frequency").val();
  console.log(trainF);

$("#newtrain").text(trainN); 
$("#newtrain0").text(destinationN);
$("#newtrain1").text(trainF);

var nTrain = {
  Name: trainN,
  Destination: destinationN,
  Time: trainT,
  Frequency:trainF
}

database.ref().push(nTrain);
console.log(nTrain.Name);
console.log(nTrain.Destination);
console.log(nTrain.Time);
console.log(nTrain.Frequency);

})

// source for child_added : class + https://firebase.google.com/docs/database/admin/retrieve-data

database.ref().on("child_added",function(dataSnapshot,prevChildKey){

var trainN = dataSnapshot.val().Name;
var destinationN = dataSnapshot.val().Destination;
var trainT = dataSnapshot.val().Time;
var trainF = dataSnapshot.val().Frequency;
console.log("where"+destinationN);
$("#newtrain").text(trainN); 
$("#newtrain0").text(destinationN);
$("#newtrain1").text(trainF);

})


//moment
function calculateTrains(){

//Copy paste from exercise 21 TrainPredictions

let tFrequency = 60;


let firstTime = "09:35";



let firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    let currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    let diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    let tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    let tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    let nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
}

calculateTrains();
