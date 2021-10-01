$('.screen_3_slider').slick({
  fade: true,
});

$('.brand_carousel').slick({
  arrows: false,
  dots: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

(function($){
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);
$(document).ready(function(){
    $(".tabs").lightTabs();
});

$(document).ready(function(){

    $(".burger").click(function(){
      $('.nav_mobile_list').slideToggle();
    });

    $("#form_phone").inputmask("+7 (999) 999-9999");

    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top
        }, 500);
        return false;
    });

});
