$(document).ready(function () {
  $('.dots').on('click', 'span', function () {
    $("#slider_images").css("transform", "translateX(" + $(this).index() * -431 + "px)");
    $(".dots span").removeClass("active");
    $(this).addClass("active");
  });

  var first_slide = $("#slider_images").find("img:first-child");
  var second_slide = $("#slider_images").find("img:nth-child(2)");
  var third_slide = $("#slider_images").find("img:nth-child(3)");
  var fourth_slide = $("#slider_images").find("img:nth-child(4)");
  var last_slide = $("#slider_images").find("img:last-child");

  // Clone the last slide and add as first li element
  last_slide.clone().prependTo($("#slider_images"));
  second_slide.clone().prependTo($("#slider_images"));
  third_slide.clone().prependTo($("#slider_images"));
  fourth_slide.clone().prependTo($("#slider_images"));
  first_slide.clone().prependTo($("#slider_images"));

  // Clone the first slide and add as last li element
  first_slide.clone().appendTo($("#slider_images"));
  second_slide.clone().appendTo($("#slider_images"));
  third_slide.clone().appendTo($("#slider_images"));
  fourth_slide.clone().appendTo($("#slider_images"));
  last_slide.clone().appendTo($("#slider_images"));
});