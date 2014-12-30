$(document).ready(function () {

  //when user wishes to add and item to the todo list...
  $('.add-item-section input[type=text]').on('keydown', function(event)
  {  console.log(event.which);
     if ( event.which === 13 ) 
     {
       event.preventDefault();
       console.log($(this).val())
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




