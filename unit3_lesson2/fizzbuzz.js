$(document).ready(function() {

/* Other:
	* convert the value the user supplies from a string to a number solution provided: +'number'
	* if conversion results in NaN tell user to enter a number
	* can do code to prevent user from entering a decimal
 */

/* Prompt user to enter a number */
  var usr_num = prompt("Please enter a number for fizzbuzz");

//console.log(usr_num);

//console.log(fizzbuzz(usr_num));


  fizzbuzz(usr_num);





});
/* Create function to do the fizzbuzz thing until the number the user entered is reached */
function fizzbuzz(num)
{
    var y = parseInt(num);
    //console.log(num);
    //console.log(parseInt(num));
    //return num;
    for (var x = 0; x <= y; x++)
    { 
      if ((x%5 == 0) && (x%3 == 0)) 
      { 
        //console.log("fizzbuzz"); 
        $('.fizzbuzz').append('<p>fizzbuzz</p>'); 
      }
      else if ((x%5 == 0) && (x%3 != 0))
      { 
        //console.log("buzz"); 
        $('.fizzbuzz').append('<p>buzz</p>'); 
      }
      else if ((x%5 != 0) && (x%3 == 0))
      { 
        //console.log("fizz"); 
        $('.fizzbuzz').append('<p>fizz</p>'); 
      }
      else
      { 
        //console.log(x); 
        $('.fizzbuzz').append('<p>' + x + '</p>'); 
      }
    }
    //return parseInt(num);
}
