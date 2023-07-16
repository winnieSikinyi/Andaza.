
$(document).ready(function() {
    $(".delayed-image").each(function(index) {
      var image = $(this);
      setTimeout(function() {
        image.addClass("show");
      }, index * 500);
    });
  });
  
  