
$(() => {
  $(window).scroll(function() {
    if ($(window).scrollTop() === 0) {
      $('#scrolltoTop').hide();
      $('#composeButton').show();
    } else {
      $('#scrolltoTop').show();
      $('#composeButton').hide();
    }
  });

  $("#scrolltoTop").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});
  
