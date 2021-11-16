$(document).ready(function(){

  //Валидация в чекауте
  $().ready(function() { $("#wholesale_checkout_form").validate();});

    //Сайдбар в истории заказов
    if ($('.history_sideblock_item').length > 10) {
        $('.history_sideblock_show').css('display','block');
    }

    var history_sideblock_item = 10; // - количество отображаемых блоков
    hide_history_sideblock_item = '<span class="snap_line_i snap_show_i snap_show_i_active"></span>Скрыть';
    show_history_sideblock_item = '<span class="snap_line_i snap_show_i "></span>Посмотреть всё';

    $(".history_sideblock_item_switcher").html( show_history_sideblock_item );
    $(".history_sideblock_item:not(:lt("+history_sideblock_item+"))").hide();

    $(".history_sideblock_item_switcher").click(function (e){
      e.preventDefault();
      if( $(".history_sideblock_item:eq("+history_sideblock_item+")").is(":hidden") )
      {
        $(".history_sideblock_item:hidden").fadeIn(300);
        $(".history_sideblock_item_switcher").html( hide_history_sideblock_item );
      }
      else
      {
        $(".history_sideblock_item:not(:lt("+history_sideblock_item+"))").fadeOut(300);
        $(".history_sideblock_item_switcher").html( show_history_sideblock_item );
      }
    });

    //Удаление элементов из корзины
    $('.cart_table_delete_item').click(function(){
      $(this).parent().parent().fadeOut(300);
    })

    //Активация слайдера на странице продукта
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,
    });

    //Выбор цвета
    $(".product_info_color_block div a").click(function(){
      $('.selected_color').remove();
      $(this).parent().append('<div class="selected_color"></div>');
    })

    //Количество элементов в карточках заказов на странице истории
    $('.history_card_col_right').each(function(){

      subCount = ($('.history_card_list', this).children().length);

      if (subCount < 4) {
        $('.history_card_switcher', this).css('display','none');
      }

    });

    //Списки в истории заказов
    var cardlistitem = 4; // - количество отображаемых новостей
    hidecarditem = '<span class="snap_line_i snap_show_i snap_show_i_active"></span>Скрыть';
    showcarditem = '<span class="snap_line_i snap_show_i "></span>Посмотреть всё';

    $( ".history_card_col_right" ).each(function(  ) {
      if ($('.history_sideblock_item').length > 10) {
          $('.history_sideblock_show').css('display','block');
      }
      var cardList = $(this);

      $(".history_card_switcher", cardList).html( showcarditem );
      $(".history_card_list_item:not(:lt("+cardlistitem+"))", cardList).hide();

      $(".history_card_switcher", cardList).click(function (e){
        e.preventDefault();
        if( $(".history_card_list_item:eq("+cardlistitem+")", cardList).is(":hidden") )
        {
          $(".history_card_list_item:hidden", cardList).show();
          $(".history_card_switcher", cardList).html( hidecarditem );
        }
        else
        {
          $(".history_card_list_item:not(:lt("+cardlistitem+"))", cardList).hide();
          $(".history_card_switcher", cardList).html( showcarditem );
        }
      });
    });

    $('ul.sf-menu').superfish({
      delay: 1000
    });

});







