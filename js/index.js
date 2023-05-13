$(document).ready(function() {
    $(".down").on("click", function() {
      var target = $(".travelbuddy").offset().top;
      $("html, body").animate({
        scrollTop: target
      }, 700);
    });
  });
       
$("#about").on("click", function() {
  window.location.href = "about.html";
});

$("#home").on("click", function() {
  window.location.href = "index.html";
});