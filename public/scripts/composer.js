
$(() => {
  $(window).scroll(function() {
    if ($(window).scrollTop() === 0) {
      $('#scrolltoTop').hide();
    } else {
      $('#scrolltoTop').show();
    }
  });

  $("#scrolltoTop").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});
  
