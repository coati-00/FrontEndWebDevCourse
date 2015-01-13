$(document).ready(function () {

  //when user wishes to add and item to the todo list...
  $('.add-item-section input[type=text]').on('keydown', function(event)
  {  //console.log(event.which);
     if ( event.which === 13 ) 
     {
       event.preventDefault();
       //console.log($(this).val());
       var temp_val = $(this).val();
       if(temp_val === '')
       {
           //console.log("there is nothing to add");
           //console.log();
           $('#item-entry').append("<p>Please enter something to add to the list</p>");
           return;
       }
       $('.to-buy-section ul').append('<li><input type="checkbox" />' + $(this).val() + '</li>');
       $(this).val("");
     }
  });

  /* When user checks the checkbox item is done - move item to the bottom list, keep checkbox checked and draw line through item */
  $('.to-buy-section ul li input[type=checkbox]').on('click', function(event){
    console.log($(this).parent().text().trim());
    $('.purchased-section ul').append('<li><input type="checkbox" checked />' + $(this).parent().text().trim() + '</li>');
    console.log($(this).parent().text().trim());
    $('.to-buy-section ul li').remove($(this));


  });
  //$('.purchased-section ul')
  //$('ul').on('click', 'li', function(event){});



});




