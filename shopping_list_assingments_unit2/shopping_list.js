$(document).ready(function () {

  //when user wishes to add and item to the todo list...
  $('.add-item-section input[type=text]').on('keydown',   function(event)
  {
     if ( event.which === 13 ) 
     {
       event.preventDefault();
       var temp_val = $(this).val();
       if(temp_val === '')
       {
           $('#item-entry').append("<p>Please enter something to add to the list</p>");
           return;
       }
       /* If something was entered add it to the bottom of the to buy list */
       $('.to-buy-section ul').append('<li><input type="checkbox" />' + $(this).val() + '<span class="close"><b>X</b></span></li>');
       /* clear text box */
       $(this).val("");
     }
  });

  /* When user checks the checkbox item is done - move item to the bottom list, keep checkbox checked and draw line through item */
  $('.to-buy-section ul').on('click', 'li input[type=checkbox]', function(event){
    $('.purchased-section ul').append($(this).parent());
    $('.to-buy-section ul').remove($(this).parent());
  });
  
  /* If user decides that they want to uncheck and add back to the to-buy list */
    $('.purchased-section').on('click', 'li input[type=checkbox]', function(event){
        alert("unchecked");
    $('.to-buy-section ul').append($(this).parent());
    $('.purchased-section ul').remove($(this).parent());
  });

});
