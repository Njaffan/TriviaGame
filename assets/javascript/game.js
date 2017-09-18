
 $(document).ready(function() { 


 // Generate a random number to match
 
 var counter = 0;
 var targetNumber = Math.floor(Math.random() * 50) + 50 ;

 $("#number-to-guess").text(targetNumber);
 


   
var numberOptions = [20, 15, 5, 1];



  // Next we create a for loop to create Sigilss for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {
  	console.log (i)	

    // For each iteration, we will create an imageSigils
    var imageSigils = $("<img>"); 



    // First each Sigils will be given the class ".Sigils-image".
    // This will allow the CSS to take effect.
    imageSigils.addClass("Sigils-image");

    // Each imageSigils will be given a src link to the Sigils image
    

     imageSigils.attr("src", "assets/images/HouseLannister.png");
   

    // Each imageSigils will be given a data attribute called data-SigilsValue.
    // This data attribute will be set equal to the array value.
    imageSigils.attr("data-Sigilsvalue", numberOptions[i]);

    // Lastly, each Sigils image (with all it classes and attributes) will get added to the page.
    $("#Sigils").append(imageSigils);
  }

  // This time, our click event applies to every single Sigils on the page. Not just one.
  $(".Sigils-image").on("click", function() {

    // Determining the Sigils's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the Sigils value of the clicked Sigils.
    // Using the .attr("data-Sigilsvalue") allows us to grab the value out of the "data-Sigilsvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var SigilsValue = ($(this).attr("data-Sigilsvalue"));
    SigilsValue = parseInt(SigilsValue);
    // We then add the SigilsValue to the user's "counter" which is a global variable.
    // Every click, from every Sigils adds to the global counter.
    counter += SigilsValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });





         });
