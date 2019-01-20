$(document).ready(function(){

  $().ready(function() { $("#order_form").validate();});

  // Демо скрипты
  alert('Демо лоадера(2сек) и появления блока для незалогиненных')
  $('.not_login_block').delay(3000).fadeIn(300);
  $('.not_login_block_close').click(function(){
    $('.not_login_block').fadeOut(300);
  });

  $( ".loader_wrap" ).fadeIn( 300 ).delay( 2000 ).fadeOut( 300 );
  // Конец демо скриптов

  $('.add_comment').click(function(){
    $('.checkout_block__comment').delay(300).fadeIn(300);
    $('.add_commetn_wrap').fadeOut(300);
  });

  $('.checkout_block_comment_close').click(function(){
    $('.checkout_block__comment').fadeOut(300);
    $('.container_plus_toggler').delay(300).fadeIn(300);
  });

  $('.arrow_toggler').click(function(){
      $('.order_table').slideToggle( 300, function() {
        if ($('.order_table').css('display') == 'none') {
          $('.arrow_toggler').html('Раскрыть');
          $('.i_arrow_toggler').css('transform','rotate(0deg)')
          //Раскоментировать в случае проблем с transform (+раскоментировать нужные правила в css)
          // $('.i_arrow_toggler').removeClass('i_arrow_toggler_up');
          // $('.i_arrow_toggler').addClass('i_arrow_toggler_down');
      } else {
          $('.arrow_toggler').html('Скрыть');
          $('.i_arrow_toggler').css('transform','rotate(180deg)')
          //Раскоментировать в случае проблем с transform (+раскоментировать нужные правила в css)
          // $('.i_arrow_toggler').removeClass('i_arrow_toggler_down');
          // $('.i_arrow_toggler').addClass('i_arrow_toggler_up');
      }
      });
    });

    $('input[type=checkbox]').css({
        'opacity': 0
    }).each(function() {
        $(this).wrap('<span class="wrap-checkbox ' + ($(this).is(":checked") ? 'active' : '') + '"></span>');
    });

    $('.wrap-checkbox').click(function() {
        $(this).toggleClass('active'); /* переключатель класса .active */
    })



    $('.add_baby').click(function(event){
      $( ".children_line_wrap" ).append(
           '<div class="children_line clearfix">' +
           '<div class="children_line_col">' +
           '<p class="children_line_col_tit">Пол ребенка</p>' +
           '<div class="children_block">' +
           '<div class="male">' +
           '<a class="baby" href="" onclick="return false">' +
           '<svg width="24" height="24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#male"></use></svg>' +
           '<span>Мальчик</span>' +
           '</a>' +
           '</div>' +
           '<div class="female">' +
           '<a class="baby" href="" onclick="return false">' +
           '<svg width="24" height="24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#female"></use></svg>' +
           '<span>Девочка</span>' +
           '</a>' +
           '</div>' +
           '<div class="unknown">' +
           '<a class="baby" href="" onclick="return false">' +
           '<svg width="24" height="24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#unknown"></use></svg>' +
           '<span>Пока<br>неизвестно</span>' +
           '</a>' +
           '</div>' +
           '</div>' +
           '</div>' +
           '<div class="children_line_col">' +
           '<p class="children_line_col_tit">День рождения</p>' +
           '<div>' +
           '<input type="text" class="checkout_input datepicker-here" placeholder="10.10.1000">' +
           '</div>' +
           '</div>' +
           '<a href="" class="children_line_delete" onclick="return false">&#10005;</a>'+
           '</div>'
        );
    });

    $( "body" ).delegate( ".baby", "click", function() {
        $(this).parent().parent('.children_block').children().children().children().removeClass( "baby_active" );
        $(this).children().addClass( "baby_active" );
    });

    $( "body" ).delegate( ".children_line_delete", "click", function() {
        $(this).parent('.children_line').fadeOut(300);
        $(this).children().addClass( "baby_active" );
    });

    $(".price").hover(
      function () {
        $(this).children('.custom_tooltip').css('display','block')
      },
      function () {
        $(this).children('.custom_tooltip').css('display','none')
      }
    );

    $( ".delivery_type" ).on( "click", function() {
      $( ".checkout_block__payment_methods" ).css('display','block');
    });

    $('.radio').click(function(){
      if($("input:radio[name=delivery_method]").is(":checked")){
        $( ".checkout_block__payment_methods" ).css('display','block');
      }
    })

    $("#phone").inputmask("+7(999)9999999");

    $( "body" ).delegate( ".outpost_item__bottom_line .btn", "click", function() {
      $('.outpost_item__bottom_line .btn').removeClass('selected_btn');
      $(this).addClass('selected_btn');
    });

  $(".drop_toogler").click(function() {
    $('.filters_drop').fadeOut('300');
    $('.filter_arrow').css('transform','rotate(0deg)')
    if ($(this).parent().children('.filters_drop').css('display') == 'none') {
          $(this).parent().children('.filters_drop').fadeIn('300');
          $(this).children('.filter_arrow').css('transform','rotate(180deg)')
    }else {
      $(this).parent().children('.filters_drop').fadeOut('300');
      $(this).children('.filter_arrow').css('transform','rotate(0deg)')
    }
  });

});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".filter-item-wrap").length) {
    $('.filters_drop').fadeOut('300');
    $('.filter_arrow').css('transform','rotate(0deg)')
  }
  e.stopPropagation();
});

window.onload = function() {
  var divs = document.querySelectorAll('.checkout_block__delivery_type'),
      inp = document.querySelectorAll('[name="delivery_method"]'),
      fn = function(input) {
        input.onclick = function() {
          Array.prototype.forEach.call(divs, function(div, i) {
            div.style.display = inp[i].checked ? "block" : "none"
          })
        }
      };
  Array.prototype.forEach.call(inp, fn);}



