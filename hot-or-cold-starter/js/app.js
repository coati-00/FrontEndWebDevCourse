$(document).ready(function(){
    /* When the page loads, JavaScript should start a new game, new games created via named function. */
    var new_game = newGame();
    
    /* Start new game when user clicks on 'new game' button */
    $(".new").on('click', function(){
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
    /* When new game is created we want counting to start over and inital state of html to be restored e.g. no guesses, guess number set to 0, etc. */
    var start_count = 0;
    $('#count').html(start_count);
    
    $('ul#guessList').html("");
    var secret_number = secretNumber();
    

    $("form #guessButton").on('click', function(evt){
        evt.preventDefault();
        //if you do not prevent default it will 'submit' and create a new game with a new random number
        var guess = userNumber($("form #userGuess").val(), secret_number);

        //ADD CHECK - IF INVALID NUMBER DO NOT INCREMENT
        start_count = start_count + 1;
        $('#count').html(start_count);

    });

    return this;
}

/* Do function to create random number between 1 and 100 - named function */
function secretNumber()
{   // does this create random numbers in global scope? are they removed when new game is created
    return Math.floor((Math.random() * 100) + 1);
}


function guessGreaterThan(user_guess, target_number)
{
    /* I am using return because I want to exit the function once the condition is met */
    if ((user_guess - target_number) <= 10)
    {
        alert("You are very close! Try again.");
        return;
    }

    else if (((user_guess - target_number) > 10 ) && ((user_guess - target_number) <= 20))
    {
        alert("Close!");
        return;
    }

    else if (((user_guess - target_number) > 20) && ((user_guess - target_number) <= 30))
    {
        alert("Not too close, Not too far");
        return;
    }

    else if((user_guess - target_number) > 30)
    {
        alert("Way far! Try again.");
        return;
    }

}

function guessLessThan(user_guess, target_number)
{

    if ((target_number - user_guess) <= 10)
    {
        alert("You are very close! Try again.");
        return;
    }

    else if (((target_number - user_guess) > 10 ) && ((target_number - user_guess) <= 20))
    {
        alert("Close!");
        return;
    }

    else if (((target_number - user_guess) > 20) && ((target_number - user_guess) <= 30))
    {
        alert("Not too close, Not too far");
        return;
    }
    else if((target_number - user_guess) > 30)
    {
        alert("Way far! Try again.");
        return;
    }
}

/* Do function to take user input and provide feedback */
/* User feed back based on how close they are to the number in ranges */
function userNumber(user_guess, target_number)
{   
    /* Returning if validation fails otherwise we will get really annoying blank guesses */
    /* Validate user input is a number between 1 and 100 */
    if (isNaN(parseInt(user_guess)))
    {
        alert( String(user_guess)  + "Is not a valid number between 1 an 100 - try again.");
        return;
    }
    else if (0 > parseInt(user_guess) || 100 < parseInt(user_guess))
    {
        alert("You must enter a number between 1 an 100 - try again.");
        return;
    }
    //what other checks are needed???

    /* Add user guesses to the guess list */
    $('ul#guessList').append('<li>' + String(user_guess) + '</li>');

    var new_guess = parseInt(user_guess);

    if (new_guess > target_number)
    {
        guessGreaterThan(new_guess, target_number);
    }
    else if (new_guess < target_number)
    {
        guessLessThan(new_guess, target_number);
    }
    else if (new_guess === target_number)
    {
        alert("You guessed it!");
    }
}


