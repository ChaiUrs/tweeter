/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
  // const daysAgo = function(time) {
  //   return new Date(time).getDate() - (new Date).getDate();
  // };
  
  const createTweetElement = function(tweetObj) {
    return `
    <article class="tweets-container">
      <header>
      <img class="header-image" src="${tweetObj.user.avatars}">
        <span class="header-name">${tweetObj.user.name}</span>
        <span class="handler-text">${tweetObj.user.handle}</span>
      </header>
      <main class="main-text">
        ${tweetObj.content.text}
      </main>
      <footer class="tweet-footer">
        <span>${tweetObj.created_at}</span>
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
  // $("#tweets-container").empty(); //clear the container before to read all tweets
  for(const tweetEle of tweets) {   //loops through tweets
    //console.log(tweets[tweetEle]);

    //calls createTweetElement for each tweet
    //takes return value and appends it to the tweets container
    $("#tweets-container").append(createTweetElement(tweetEle)); 
  };
}

renderTweets(data);

});

