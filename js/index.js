$(document).ready(function() {
    $(".down").on("click", function() {
      var target = $(".travelbuddy").offset().top;
      $("html, body").animate({
        scrollTop: target
      }, 700);
    });
  });
       

