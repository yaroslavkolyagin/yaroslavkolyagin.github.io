$(document).ready(function() {
$("a.scrollto").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
});

$('.loop').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    responsive:{
        600:{
          items:2
        }
    }
});
