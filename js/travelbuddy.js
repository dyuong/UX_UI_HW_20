$(document).ready(function() {
    $("#one").on("click", function() {
      var target = $(".research").offset().top;
      var offset = target - (target * 0.05);
      $("html, body").animate({
        scrollTop: offset
      }, 100);
    });
  });

$(document).ready(function() {
    $("#two").on("click", function() {
      var target = $(".define").offset().top;
      var offset = target - (target * 0.03);
      $("html, body").animate({
        scrollTop: offset
      }, 100);
    });
  });

$(document).ready(function() {
    $("#three").on("click", function() {
      var target = $(".ideate").offset().top;
      var offset = target - (target * 0.016);
      $("html, body").animate({
        scrollTop: offset
      }, 100);
    });
  });

  $(document).ready(function() {
    $("#four").on("click", function() {
      var target = $(".prototype").offset().top;
      var offset = target - (target * 0.013);
      $("html, body").animate({
        scrollTop: offset
      }, 100);
    });
  });

  $(document).ready(function() {
    $("#five").on("click", function() {
      var target = $(".prototype").offset().top;
      var offset = target - (target * 0.013);
      $("html, body").animate({
        scrollTop: offset
      }, 100);
    });
  });