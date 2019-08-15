
"use strict";

/*** Global Functions ***/

const remainingChars = function() {
  return 140 - $("textarea").val().length;
}

const updateCounter = function(charsCount) {
  $("span.counter").text(charsCount);
  if (charsCount < 0) {
    $("span.counter").addClass('red');
  } else {
    $("span.counter").removeClass('red');
  }
}


/*
 * Client-side JS logic goes here
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
  
  
  const createTweetElement = function(tweetsObj) {
    return `
    <article class="tweets-container">
      <header>
      <img class="header-image" src="${tweetsObj.user.avatars}">
        <span class="header-name">${tweetsObj.user.name}</span>
        <span class="handler-text">${tweetsObj.user.handle}</span>
      </header>
      <main class="main-text">
        ${tweetsObj.content.text}
      </main>
      <footer class="tweet-footer">
        <span class="days-ago">${timeDifference(Date.now(), tweetsObj.created_at)}</span>
        <span class="tweet-icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
        </span>
      </footer>
    </article>
    `;
  };
  

  const renderTweets = function(tweets) {
    $("#tweets-container").empty(); //clear the container before to read all tweets
    tweets.reverse();
    for(const tweetEle of tweets) {   //loops through tweets
      //console.log(tweets[tweetEle]);
      //calls createTweetElement for each tweet
      //takes return value and appends it to the tweets container
      $("#tweets-container").append(createTweetElement(tweetEle));
    }
  };
  

  //this function will use jQuery to make a request to /tweets and receive the array of tweets as JSON.
  const loadTweets = function() {
    return $.ajax({
      url: "/tweets/",
      type: "GET",
    })
  }
  

  $("section.new-tweet > form").on("submit", function(event) {
    event.preventDefault(); // to prevent the default form submission behaviour
    
    //Form Validation
    $(".error").slideUp();
    const $tweetCount = $("section.new-tweet > form > textarea.form-submit")
    if ($tweetCount.val() === null || $tweetCount.val() === "") {
      $(".error").text("ERROR: This field cannot be empty! Please input some text.").slideDown();
    } else if ($tweetCount.val().length > 140) {
      $(".error").text("Your message is way too much!!!").slideDown();
    } else {
      $.ajax({
        url: "/tweets/",
        type: "POST",
        data: $(this).serialize()
      })
      .then(() => {
        $textarea.val("");
        updateCounter(remainingChars());
        refreshTweets();
        $textarea.focus();
      });
    }
  });


  //Expands new tweet form when scroll down tweet button is clicked
  $(".composeButton").on("click", function() {
    $(".new-tweet").slideToggle();
    $("textarea").focus();
  });

   //Load and Render tweets
   const refreshTweets = function() {
    loadTweets()
    .then(renderTweets)
    .fail(error => console.log(error.statusText));
  }
  refreshTweets();
});

