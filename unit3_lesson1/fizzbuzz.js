$(document).ready(function() {

for (var x = 0; x < 101; x++)
{ 
  if ((x%5 == 0) && (x%3 == 0)) 
  { console.log("fizzbuzz"); $('.fizzbuzz').append('<p>fizzbuzz</p>'); }
  else if ((x%5 == 0) && (x%3 != 0))
  { 
    console.log("buzz"); 
    $('.fizzbuzz').append('<p>buzz</p>'); 
  }
  else if ((x%5 != 0) && (x%3 == 0))
  { 
    console.log("fizz"); 
    $('.fizzbuzz').append('<p>fizz</p>'); 
  }
  else
  { 
    console.log(x); 
    $('.fizzbuzz').append('<p>' + x + '</p>'); 
  }
}


});
