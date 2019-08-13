
//This function displays how many characters can be entered before the max count. 
//Shows character overflow in color 'red'.

$(document).ready(function() {
  
  $(".new-tweet textarea").on("keyup keypress", function(event) {

    $maxtextLength = 140; //maximum tweet length
    $textChars = $(this).val().length; //determine the length of 'this' value => which is user input in the 'textarea'
    $charsLeft = $maxtextLength - $textChars;

    //'form'=>parent element finds the respective sibling element => 'counter'
    $charsCounter = $(this).closest("form").find(".counter");
    $charsCounter.text($charsLeft); //sets the value of 'text' to 'charsLeft'

    //when the text exceeds the max text length(140) => charsLeft becomes negative and following changes occur
    if ($charsLeft < 0) {
      $charsCounter.css({'color': '#fd0707'}); //changes to color red
    } else {
      $charsCounter.css({'color': '#034058'}); //remains in original color
    }
  });
});

