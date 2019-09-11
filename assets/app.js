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
 
$("#submit").on("click", function() {
  
  const trainN = $("#train-name").val().trim();
  console.log(trainN);

  const destinationN = $("#destination-name").val().trim();
  console.log(destinationN);
  
  const trainT = $("#train-time").val();
  console.log(trainT);
  const trainF = $("#train-frequency").val();
  console.log(trainF);

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
// $(".table").empty();
var trainN = dataSnapshot.val().Name;
var destinationN = dataSnapshot.val().Destination;
var firstTime = dataSnapshot.val().Time;
var tFrequency = dataSnapshot.val().Frequency;
console.log("nickname"+trainN);
console.log("where"+destinationN);
console.log("what time"+firstTime);
console.log("how often"+tFrequency);


//function using moment.js

//This is very strongly inspired by exercise 21 TrainPredictions

var firstTimeConverted = moment(firstTime, 'HH:mm').subtract(1, "month");
    console.log(firstTimeConverted);



var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));




    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var minutesAway = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + minutesAway);

    // Next Train
    var nextArrival = moment().add(minutesAway, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextArrival).format('hh:mm'));

    $("tbody").append("<tr> '<td>  " + trainN + " </td> <td> " + destinationN + " </td> <td> " + dataSnapshot.val().Frequency + " </td> <td> " + moment(nextArrival).format('hh:mm') + " </td> <td> " + minutesAway + " </td>' </tr>")
    
  });


