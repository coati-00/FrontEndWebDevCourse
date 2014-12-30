$(document).ready(function(){
    /* When the page loads, JavaScript should start a new game, new games created via named function. */
    var new_game = newGame();
    
    
    
    /* Do function to take user input and provide feedback */
    /* User feed back based on how close they are to the number in ranges */
    /* Add user guesses to the guess list */
    /* Validate user input is a number between 1 and 100 */

    /* Start new game when user clicks on 'new game' button */
    $(".new").on('click', function(){
        //console.log("Inside a new game");
        //var new_game = newGame();
        new_game = newGame();  // this this is redefining var above need to double check scope
    });

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

/* New games should be created via new game function */
function newGame()
{
    console.log("This is a new game...");
    var secret_number = secretNumber();
    console.log("The secret number is : ");
    console.log("secretNumber()");
    console.log(secret_number);

    return this;
}

/* Do function to create random number between 1 and 100 - named function */
function secretNumber()
{
    //var new_secret_number = Math.floor((Math.random() * 100) + 1);
    //return new_secret_number;
    return Math.floor((Math.random() * 100) + 1);
}

