$(document).ready(function(){
	
        /* Start new game */
        $(".new").on('click', function(){
            //console.log("Inside a new game");
    	    //$(".overlay").fadeIn(1000);
            var new_game = newGame();
            console.log("new_game.secretNumber");
            console.log(new_game.secretNumber);
            console.log("New game is : ");
            console.log(new_game);
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

function newGame()
{
    //console.log("This is a new game...");
    var secret_number2 = secretNumber2();
    //console.log("The secret number is : ");
    
    console.log("secretNumber2()");
    console.log(secret_number2);


    this.secretNumber = function() {
        var new_secret_number = Math.floor((Math.random() * 100) + 1);
        return new_secret_number;
        //return Math.floor((Math.random() * 100) + 1);//message; // spit out the message
    }
    console.log(this.secretNumber);

    function otherSecretNumber() {
        //var new_secret_number = Math.floor((Math.random() * 100) + 1);
        //return new_secret_number;
        return Math.floor((Math.random() * 100) + 1);//message; // spit out the message
    }

    console.log("otherSecretNumber()");
    console.log(otherSecretNumber());

    var otherNumber = otherSecretNumber();

    console.log("otherNumber");
    console.log(otherNumber);

    return this;
}

function secretNumber2()
{
    var new_secret_number = Math.floor((Math.random() * 100) + 1);
    return new_secret_number;
    //return Math.floor((Math.random() * 100) + 1);
}

