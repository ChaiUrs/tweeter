
//This function displays how many characters can be entered before the max count. 
//Shows character overflow in color 'red'.

$(document).ready(function() {
  
  $(".new-tweet textarea").on("keyup keypress", function(event) {

    $maxtextLength = 140; //maximum tweet length
    $textChars = $(this).val().length; //determine the length of 'this' value => which is user input in the 'textarea'
    $charsLeft = $maxtextLength - $textChars;

    //The next() method returns the next sibling element of the selected element.
    $charsCounter = $(this).closest("form").find(".counter");
    $charsCounter.text($charsLeft);

    if ($charsLeft < 0) {
      $charsCounter.css({'color': '#fd0707'});
    } else {
      $charsCounter.css({'color': '#034058'});
    }
  });
});

