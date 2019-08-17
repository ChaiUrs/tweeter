
"use strict";

/*** Global Function ***/
const updateCharCounter = function() {
  const $maxtextLength = 140; //maximum tweet length
  const $textChars = $("textarea").val().length; //determine the length of 'this' value => which is user input in the 'textarea'
  const $charsLeft = $maxtextLength - $textChars;
  
  //'form'=>parent element finds the respective sibling element => 'counter'
  $(".counter").text($charsLeft); //sets the value of 'text' to 'charsLeft'
  //when the text exceeds the max text length(140) => charsLeft becomes negative and following changes occur
  if ($charsLeft < 0) {
    $(".counter").css({'color': '#fd0707'}); //changes to color red
  } else {
    $(".counter").css({'color': '#034058'}); //remains in original color
  }
}

/* Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

//adapted from https://stackoverflow.com/
  const timeDifference = function(current, previous) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
  
    const elapsed = current - previous;
    let plural = 's';
  
    if (elapsed < msPerMinute) {
      const seconds = Math.round(elapsed / 1000);
      if (seconds === 1) plural = '';
      return seconds + ' second' + plural + ' ago';
    } else if (elapsed < msPerHour) {
      const minutes = Math.round(elapsed / msPerMinute);
      if (minutes === 1) plural = '';
      return minutes + ' minute' + plural + ' ago';
    } else if (elapsed < msPerDay) {
      const hours = Math.round(elapsed / msPerHour);
      if (hours === 1) plural = '';
      return hours + ' hour' + plural + ' ago';
    } else if (elapsed < msPerMonth) {
      const days = Math.round(elapsed / msPerDay);
      if (days === 1) plural = '';
      return days + ' day' + plural + ' ago';
    } else if (elapsed < msPerYear) {
      const months = Math.round(elapsed / msPerMonth);
      if (months === 1) plural = '';
      return months + ' month' + plural + ' ago';
    } else {
      const years = Math.round(elapsed / msPerYear);
      if (years === 1) plural = '';
      return years + ' year' + plural + ' ago';
    }
  };
  
  
  //Converts single tweet object into jQuery HTML
  const createTweetElement = function(tweetsObj) {
    const $avatar = $('<img>').attr("src", `${tweetsObj.user.avatars}`).addClass("header-image");
    const $username = $('<span>').text(`${tweetsObj.user.name}`).addClass("header-name");
    const $handle = $('<span>').text(`${tweetsObj.user.handle}`).addClass("handler-text");
    const $header = $('<header>')
    .append($avatar)
    .append($username)
    .append($handle);

    const $main = $('<main>').text(`${tweetsObj.content.text}`).addClass("main-text");

    const $timeDifference = $('<span>').text(`${timeDifference(Date.now(), tweetsObj.created_at)}`).addClass("days-ago");
    const $tweetIcons = $('<span>').addClass("tweet-icons")
    .append('<i class="fas fa-flag"></i>')
    .append('<i class="fas fa-retweet"></i>')
    .append('<i class="fas fa-heart"></i>');

    const $footer = $('<footer>').addClass("tweet-footer")
    .append($timeDifference)
    .append($tweetIcons);

    return $('<article>').addClass("tweets-container")
    .append($header)
    .append($main)
    .append($footer);
  };

  
  //Expands new tweet form when scroll down tweet button is clicked.
  $("#composeButton").on("click", function() {
    $(".new-tweet").slideToggle();
    $("textarea").val("").focus();
    updateCharCounter();  
  });


  const renderTweets = function(tweets) {
    $("#tweets-container").empty(); //clears the container before reading all tweets
    tweets.reverse(); //to dispaly tweets in reverse-chronological order
    for(const tweetEle of tweets) {   //loops through all tweets

      //calls createTweetElement for each tweet
      //takes return value and appends it to the tweets-container
      $("#tweets-container").append(createTweetElement(tweetEle));
    }
  };
  

  /* this function will use jQuery to make a request to /tweets/,
  receives an array of tweets as JSON and updates the page. */
  const loadTweets = function() {
    $.ajax({
      url: "/tweets/",
      type: "GET",
    })
    .then(function(tweets) {
      renderTweets(tweets);
    })
    .fail(function() {
      alert("Failed to retrieve tweets data!!");
    });
  }
  loadTweets();
  

  //Form Validation
  $("form").on("submit", function(event) {
    event.preventDefault(); //to prevent the default form submission behaviour
    
    if ($("textarea").val() === null || $("textarea").val() === "") {
      $(".error").text("ERROR: This field cannot be empty. Please input some text")
      .slideDown()
      .delay(1200)
      .fadeOut(300);
      return;

    } else if ($("textarea").val().length > 140) {
      $(".error").text("Your tweet is way too much and out of limit!!!")
      .slideDown()
      .delay(1200)
      .fadeOut(300);
      return;

    } else {
      $.ajax({
        url: "/tweets/",
        type: "POST",
        //when a AJAX request is made => it creates a URL encoded string by serializing "textarea" values.
        data: $("textarea").serialize() 
      })
      .then(() => {
        $(".success").text("Your tweet was sent successfully.")
        .slideDown()
        .delay(1200)
        .fadeOut(300);
        $("textarea").val("").focus(); //text area is emptied and focused to enter a new tweet
        updateCharCounter(); //resets the tweet length to 140
        loadTweets(); //loads the latest tweet message without having to refresh the page
      })
      .fail(function() {
        alert("Something went wrong!!");
      });
    }
  });
  
});

