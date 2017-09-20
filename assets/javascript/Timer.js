
// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {

  stopwatch.start ()


};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = true;

// Our stopwatch object
var stopwatch = {

  time: 10,


  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
       
    }
  },

  
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;
      if (stopwatch.time  === 0){
    var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/images/you-know-nothing-jon-snow.mp3");
        audioElement.play();
        clearInterval(intervalId);


    }

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);


    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#remainingTime").html(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};


