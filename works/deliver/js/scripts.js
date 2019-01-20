$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
  });
});

$(document).ready(function(){
    $(".for_scroll").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready (function() {
    $("#show_search").click(function() {
        $(".search_block").slideToggle("slow");
     });
    $("main").fadeIn(500);
});
