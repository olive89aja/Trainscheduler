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

database.ref().on("child_added",function(snapshot,prevChildKey){

var trainN
var destinationN
var trainT
var trainF



})


//Convert time in minutes. 1440 in 24hours 

//x = frequency 

//y = train 1

//y+x = train2

//7. 60. Next train : 8,9,10,11...

//convertTime = hours*60+minutes
//const nextTrain = convertTime+frequency
//const nextTrain = convertTime+2*frequency
//var nextTrain = convertTime+n*frequency
