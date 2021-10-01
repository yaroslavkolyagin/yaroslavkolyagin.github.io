//Скрипт меню в демо странице SG
    if (typeof Object.create !== 'function') {
        Object.create = function(obj) {
            function F() {}
            F.prototype = obj;
            return new F();
        };
    }
    (function($, window, document, undefined) {
        "use strict";
        var SinglePageNav = {
            init: function(options, container) {
                this.options = $.extend({}, $.fn.singlePageNav.defaults, options);
                this.container = container;
                this.$container = $(container);
                this.$links = this.$container.find('a');
                if (this.options.filter !== '') {
                    this.$links = this.$links.filter(this.options.filter);
                }
                this.$window = $(window);
                this.$htmlbody = $('html, body');
                this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));
                this.didScroll = false;
                this.checkPosition();
                this.setTimer();
            },
            handleClick: function(e) {
                var self = this,
                    link = e.currentTarget,
                    $elem = $(link.hash);
                e.preventDefault();
                if ($elem.length) { // Make sure the target elem exists
                    // Prevent active link from cycling during the scroll
                    self.clearTimer();
                    // Before scrolling starts
                    if (typeof self.options.beforeStart === 'function') {
                        self.options.beforeStart();
                    }
                    self.setActiveLink(link.hash);
                    self.scrollTo($elem, function() {
                        if (self.options.updateHash && history.pushState) {
                            history.pushState(null, null, link.hash);
                        }
                        self.setTimer();
                        // After scrolling ends
                        if (typeof self.options.onComplete === 'function') {
                            self.options.onComplete();
                        }
                    });
                }
            },
            scrollTo: function($elem, callback) {
                var self = this;
                var target = self.getCoords($elem).top;
                var called = false;
                self.$htmlbody.stop().animate({
                    scrollTop: target
                }, {
                    duration: self.options.speed,
                    easing: self.options.easing,
                    complete: function() {
                        if (typeof callback === 'function' && !called) {
                            callback();
                        }
                        called = true;
                    }
                });
            },
            setTimer: function() {
                var self = this;
                self.$window.on('scroll.singlePageNav', function() {
                    self.didScroll = true;
                });
                self.timer = setInterval(function() {
                    if (self.didScroll) {
                        self.didScroll = false;
                        self.checkPosition();
                    }
                }, 250);
            },
            clearTimer: function() {
                clearInterval(this.timer);
                this.$window.off('scroll.singlePageNav');
                this.didScroll = false;
            },
            // Check the scroll position and set the active section
            checkPosition: function() {
                var scrollPos = this.$window.scrollTop();
                var currentSection = this.getCurrentSection(scrollPos);
                if (currentSection !== null) {
                    this.setActiveLink(currentSection);
                }
            },
            getCoords: function($elem) {
                return {
                    top: Math.round($elem.offset().top) - this.options.offset
                };
            },
            setActiveLink: function(href) {
                var $activeLink = this.$container.find("a[href$='" + href + "']");
                if (!$activeLink.hasClass(this.options.currentClass)) {
                    this.$links.removeClass(this.options.currentClass);
                    $activeLink.addClass(this.options.currentClass);
                }
            },
            getCurrentSection: function(scrollPos) {
                var i, hash, coords, section;
                for (i = 0; i < this.$links.length; i++) {
                    hash = this.$links[i].hash;
                    if ($(hash).length) {
                        coords = this.getCoords($(hash));
                        if (scrollPos >= coords.top - this.options.threshold) {
                            section = hash;
                        }
                    }
                }
                // The current section or the first link if it is found
                return section || ((this.$links.length === 0) ? (null) : (this.$links[0].hash));
            }
        };
        $.fn.singlePageNav = function(options) {
            return this.each(function() {
                var singlePageNav = Object.create(SinglePageNav);
                singlePageNav.init(options, this);
            });
        };
        $.fn.singlePageNav.defaults = {
            offset: 0,
            threshold: 120,
            speed: 400,
            currentClass: 'sg-nav-active',
            easing: 'swing',
            updateHash: false,
            filter: '',
            onComplete: false,
            beforeStart: false
        };
    })(jQuery, window, document);

    $('.single-page-nav').singlePageNav();

    $(document).ready(function() {
        $(".menu-toggler").click(function() {
            $(".single-page-nav ul").slideToggle()
        });
    });

//Конец скрипта меню в демо странице SG


//Дроп блок
$(document).ready(function(){
    $(".drop_toogler").click(function() {
    $('.drop_block').fadeOut('300');
    $('.drop_arrow').css('transform','rotate(0deg)')
    if ($(this).parent().children('.drop_block').css('display') == 'none') {
          $(this).parent().children('.drop_block').fadeIn('300');
          $(this).children('.drop_arrow').css('transform','rotate(180deg)');
    }else {
      $(this).parent().children('.drop_block').fadeOut('300');
      $(this).children('.drop_arrow').css('transform','rotate(0deg)');
    }
  });
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".drop_item").length) {
    $('.drop_block').fadeOut('300');
    $('.drop_arrow').css('transform','rotate(0deg)')
  }
  e.stopPropagation();
});

//Сортировщик
$(document).ready(function(){
    $(".alternative_drop_toggler").click(function() {
        $(this).parent().children('.alternative_drop').slideToggle();
    });
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".alternative_drop_wrap").length) {
    $('.alternative_drop').fadeOut();
  }
  e.stopPropagation();
});

//Чекбоксы
$('input[type=checkbox]').css({
    'opacity': 0
}).each(function() {
    $(this).wrap('<span class="wrap-checkbox ' + ($(this).is(":checked") ? 'active' : '') + '"></span>');
});
$('.wrap-checkbox').click(function() {
    $(this).toggleClass('active'); /* переключатель класса .active */
})

//Валидация
$(document).ready(function(){
  $().ready(function() { $("#demoform").validate();});
})

//Выбранные теги
$(document).ready(function(){
    $(".i_close_choice_tag").click(function() {
        $(this).parent().fadeOut();
    });
});

//Счетчик
$(".count__snap").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("#product-count").val();

    if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    $button.parent().find("#product-count").val(newVal);
});

// Карусель SLick (не адаптивные)
$('.slick_base').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
});

// Карусель SLick Min (не адаптивные)
$('.slick_min').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
});
