function windowSize(){
    if ($(window).width() <= '991'){
        var s = skrollr.destroy();
    } else {
        var s = skrollr.init()
    }
}

function checkForm() {
    var ok = true;

    var name = $('#testdrive-registration-form input[name=name]').val();
    var email = $('#testdrive-registration-form input[name=email]').val();
    var phone = $('#testdrive-registration-form input[name=phone]').val();
    var variant = $('#testdrive-registration-form input[name=variant]:checked').val();
    var agree = $('#testdrive-registration-form input[name=agree]').prop('checked');

    if (!name) {
        ok = false;
    }
    if (!email) {
        ok = false;
    }
    if (!phone) {
        ok = false;
    }
    if (variant != 'offline' && variant != 'online') {
        ok = false;
    }
    if (!agree) {
        ok = false;
    }

    return ok;
}

$(window).on('load resize',windowSize);

$(document).ready(function() {

    $('.flexslider').flexslider({
        animation: "slide",
    });

    $('a[href^="#"]').click(function() {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 500);
        return false;
    });

    //Демо работы формы

    $('#testdrive-registration-form').on('submit', function() {

        if (checkForm()) {

            var name = $('#testdrive-registration-form input[name=name]').val();
            var email = $('#testdrive-registration-form input[name=email]').val();
            var phone = $('#testdrive-registration-form input[name=phone]').val();
            var variant = $('#testdrive-registration-form input[name=variant]:checked').val();

            $.ajax({
                method: "POST",
                url: "/ajax/testdrive_registration.php",
                data: { name: name, email: email, phone: phone, variant: variant }
            })
                .done(function( msg ) {
                    var result = JSON.parse(msg);
                    var success = result.success;
                    if (success) {
                        dataLayer.push({"event": "testdrive_reg_complete"});
                        $('.form_wrap').css('display','none');
                        $('.reg_tit').html('<span>Успешная регистрация</span>');
                        $('.form_send ').fadeIn();

                    } else {

                        var error = result.error;
                        $('.form_wrap').css('display','none');
                        $('#dop_text').css('display','none');
                        $('.reg_tit').html('<span>' + error +'</span>');
                        $('.form_send ').fadeIn();

                    }
                });

        }

        return false;
    });
    //Конец демо

});

 jQuery(function($){
   $("#phone").mask("+7 (999) 999-9999");
});

 $('.brand_carousel').slick({
  autoplay: true,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 979,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
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

  $('.gift_param_blocks').slick({
  autoplay: true,
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 979,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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

//Демонстрация работы новой формы
$(document).ready(function(){
    $('.step_1').click(function(){
        $('.form_wrap_step_1').css('display','none');
        $('.form_wrap_step_2').css('display','block');
    });
    $('.step_2').click(function(){
        $('.form_wrap_step_2').css('display','none');
        $('.form_wrap_step_3').css('display','block');
        $('html, body').animate({scrollTop: $('#timepad').offset().top}, 800);
        return false;
    });
});

//Добавление ребенка на втором шаге
$(document).ready(function(){
    $('.add_children').click(function(){
        $('.children_wrap').append('<div class="children not_one_children"><div class="inputs"><div class="inp_block"><p class="inp_placeholder">Имя ребенка</p><input type="text" placeholder="Имя ребенка" required name=""></div><div class="inp_block"><p class="inp_placeholder">Дата (предполагаемая) рождения</p><input id="" type="text" placeholder="Дата рождения" required name=""></div></div><div class="male-female"><p class="inp_placeholder">Пол</p><label class="switch-light switch-candy" onclick=""><input type="checkbox"><span><span>Мальчик</span><span>Девочка</span><a></a></span></label></div></div>');
    });
});





