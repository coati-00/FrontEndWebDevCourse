$(document).ready(function() {

  /* Other:
	* convert the value the user supplies from a string to a number solution provided: +'number'
	* if conversion results in NaN tell user to enter a number
	* can do code to prevent user from entering a decimal
  */

  /* Prompt user to enter a number */
  var usr_num = prompt("Please enter a number for fizzbuzz");
  fizzbuzz(usr_num);

});

/* Create function to do the fizzbuzz thing until the number the user entered is reached */
function fizzbuzz(num)
{
    var y = parseInt(num);

    for (var x = 0; x <= y; x++)
    { 
      if ((x%5 == 0) && (x%3 == 0)) 
      {  
        $('.fizzbuzz').append('<p>fizzbuzz</p>'); 
      }
      else if ((x%5 == 0) && (x%3 != 0))
      { 
        $('.fizzbuzz').append('<p>buzz</p>'); 
      }
      else if ((x%5 != 0) && (x%3 == 0))
      { 
        $('.fizzbuzz').append('<p>fizz</p>'); 
      }
      else
      { 
        $('.fizzbuzz').append('<p>' + x + '</p>'); 
      }
    }
}
