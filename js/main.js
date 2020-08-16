$(document).ready(function () {
  $('.dots').on('click', 'span', function () {
    $("#slider_images").css("transform", "translateX(" + $(this).index() * -431 + "px)");
    $(".dots span").removeClass("active");
    $(this).addClass("active");
  });
});