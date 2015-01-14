$(document).ready(function () {

  // Add Item: when user wishes to add and item to the todo list...
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

  /* Check Item: When user checks the checkbox item is done - move item to the bottom list, keep checkbox checked and draw line through item */
  $('.to-buy-section ul').on('click', 'li input[type=checkbox]', function(event){
    $('.purchased-section ul').append($(this).parent());
    $('.to-buy-section ul').remove($(this).parent());
  });
  
  /* Uncheck Item: If user decides that they want to uncheck and add back to the to-buy list */
  $('.purchased-section').on('click', 'li input[type=checkbox]', function(event){
    $('.to-buy-section ul').append($(this).parent());
    $('.purchased-section ul').remove($(this).parent());
  });

  /* Remove Item: User wishes to remove the item from the list completely - could be in either list */

  $('ul').on('click', 'li span.close', function(event){
    alert($(event.target).parent());//.nodeName);
    $('ul').remove($(event.target).parent());
    //$('div ul').remove($(this));//.parent());    
  });

  //$('section .close').on('click', 'b', function(event){
    //alert(".close");
    //alert($('section .close b')[0]);
    //alert($(this).parent().parent().text());
    //$('section .close b').remove($(this).parent().parent());
    //$('section').remove($(this).parent().parent());
  //});

});
