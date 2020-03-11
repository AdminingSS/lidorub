var eventInput = new Event('input', {
    'bubbles': true,
    'cancelable': true
});

function isTouchDevice() {
    try {
        document.createEvent('TouchEvent');
        return true;
    }
    catch(e) {
        return false;
    }
}

// Детект мобильного браузера
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function getScrollWidth() {
    var div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    var sw = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    window.scrollWidth = sw;
}

var popup = {
    init: function(){
        $('.openPop').click(function(e) {
            e.preventDefault();
            popup.open($(this).attr('href'));

        });

        $('.closePop').click(function(e) {
            e.preventDefault();
            popup.close('#'+$(this).closest('.popup').attr('id'));

        });
        
        $('.popup').click(function(){
            popup.close('#'+$(this).attr('id'));
        });

        $('.popup__win').click(function(e) {
            e.stopPropagation();
        });
    },

    open: function(id) {
        popup.hideBody(id);
        bestEvents.loadBest();
    },
    close: function(id) {
        $('.popup'+ id).removeClass('popup_opened');
        setTimeout(function(){popup.showBody(id);}, 300);
    },

    hideBody: function(id){
        if ( $(document).height() >  $(window).height()) {
                // $('.header').css('right', scrollWidth+'px');
                // $('body').css({'padding-right': scrollWidth+'px', 'overflow-y':'hidden'});
            }
    },

    showBody: function(id) {
        // $('.header').css('right', 0);
        // $('body').css({'padding-right': 0, 'overflow-y': 'auto'});
    }
};

$(document).ready(function () {

    if ( isTouchDevice() )
        $('html').addClass('touch');

    window.scrollWidh = getScrollWidth();

    popup.init();

    preventScale();

    // Слайдер на главной
    if ($('.slider-top').length) {
        $('.slider-top').slick({
            centerMode: true,
            arrows: false,
            centerPadding: 0
        });
    }

    // Слайдер на моб. UTP
    if ($('.mob_utps').length) {
        $('.mob_utps').slick({
            centerMode: true,
            centerPadding: 0,
            mobileFirst: true,
            prevArrow: '<div class="mob_utps__arrow mob_utps__arrow-prev"></div>',
            nextArrow: '<div class="mob_utps__arrow mob_utps__arrow-next"></div>'
        });
    }

    // Открытие / закрытие меню в шапке
    $("body").on("click", ".header-icon", function () {
        $('.header-icon, .move-menu, .header__nav').toggleClass('active');

        if ($('.header-icon').hasClass('active') || $('.header__cart').hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    });

    // Открытие / закрытие корзины
    $("body").on("click.opencart", ".header__cart:not(.header__cart-mobile), .overplay, .cart-popup__close", function() {
        $('.header__cart, .cart-popup, .wrapper, .header, .logo-left, .overplay, .new_header__top, .new_header__bottom, .callback_right').toggleClass('active');
        $('.header-icon, .move-menu, .header__nav').removeClass('active');

        if ($('.header-icon').hasClass('active') || $('.header__cart').hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    });

    // Вызов поиска в шапке
    $("body").on("click", ".header__search", function () {
        $('.search-popup').addClass('active');
        $('body').css('overflow', 'hidden');

        setTimeout(function () {
            $('.search-popup input').focus();
        }, 50);
    });

    // Закрытие посика в шапке
    $("body").on("click", ".search-popup__close", function () {
        $('.search-popup').removeClass('active');
        $('body').css('overflow', 'visible');
    });

    // Плагин для селектов
    if (!!jQuery.fn.selectmenu) {
        $("#filter__select-1, #filter__select-2, #filter__select-3").selectmenu();
    }

    if (!!jQuery.fn.multipleSelect) {
        $("#cert_filter").multipleSelect({
            single: 'true',
            animate: 'slide'
        });
    }

    // Переключение табов
    $("body").on("click", ".performance__nav div", function () {
        $('.performance__nav div').removeClass('active');
        $(this).addClass('active');
        var id = $(this).data("tab");

        $('.performance__tab').removeClass('active');
        $('.performance__tab[data-tab=' + id + ']').addClass('active');
    });

    // Открытие / закрытие меню доплнительных дат на схеме
    $("body").on("click", ".map__more_dates", function () {
        $('.map__dates').toggleClass('active');
    });

    // Переключение подсказок у радио в корзине
    $("body").on("click", ".tickets__radio-cart, .new_cart_form__checkbox", function () {
        var id = $(this).data('id');

        $('.form-cart__more').removeClass('active');
        $('.form-cart__more-' + id).addClass('active');

        $('.cert_input, .cart_aletrs').removeClass('active');

        switch ($(this).data('id')) {
            case "cart_aletrs":
                $(this).find('.cart_aletrs').addClass('active');
                break;
            case "cert_input":
                $(this).find('.cert_input').addClass('active');
                break;
        }

        if (!$("body").data("email")) {
            if ($("#payment_2").is(':checked')) {
                $("#shopping-cart #email").attr("required", "");
                $("#shopping-cart #email").parent().addClass("new_cart_form__input-important");
            } else {
                $("#shopping-cart #email").removeAttr("required");
                $("#shopping-cart #email").parent().removeClass("new_cart_form__input-important");
            }
        }
    });

    // Скртие кнопки инфо и вызов подсказки на схеме
    $("body").on("click", ".info__close", function () {
        $('.info__more').removeClass('active');
        $('.info').addClass('active');
    });

    // Скртие подсказки и вызов кнопки инфо на схеме
    $("body").on("click", ".info", function () {
        $('.info').removeClass('active');
        $('.info__more').addClass('active');
    });

    // Вызов формы обратного звонка
    /*
    $("body").on("click", ".info__button", function () {
        $('.callback-modal__text').html(trans.phone_text);
        $('.callback').fadeIn();

        // Счетчики
        triggerCountersCallback();
    }); */

    // Вызов формы обратного звонка на кнопке "Под запрос"
    $("body").on("click", ".date__buy-inactive, .ev_date__link-inactive, .t3_ev__button-inactive, .l_event_top__button-inactive", function (e) {
        e.preventDefault();
        
        addCallbackForm(
            $(this).data("event_name"),
            $(this).data("event_date"),
            $(this).data("url"),
            false,
            false,
            $(this).data('event_id'),
            $(this).data('seance_id')
        );
        popup.open('#matchevents');

        // Счетчики
        triggerCountersCallback();
    });

    // Вызов нового модальника звноков
    $("body").on("click", ".callback_right", function () {
        if ($('.new_callback').length) {
            $('.new_callback').fadeIn();
        } else {
            $('.callback').fadeIn();
        }

        // Счетчики
        triggerCountersCallback();
    });

    // Вызов окна Живочата
    $("body").on("click", "#new_callback__jivosite", function () {
        $('.new_callback').fadeOut();
        $('.globalClass_ET, body div#jivo-iframe-container:not(.jivo-c-mobile)').show();
    });

    // Вызов окна Манго
    $("body").on("click", "#new_callback__mango", function () {
        $('.new_callback').fadeOut();
        $('#mango-widget-btn').trigger('click');
    });

    // Вызов формы обратного звонка с опопвещением
    $("body").on("click", ".performance__more-link", function () {
        addCallbackForm(
            $(this).data("event_name"),
            $(this).data("event_date"),
            $(this).data("url"),
            false,
            true,
            $(this).data("event_id"),
            $(this).data("seance_id")
        );
        popup.open('#matchevents');

        triggerCountersCallback();
    });

    // Закрытие формы обратного звонка
    $("body").on("click", ".callback-modal__close", function () {
        $('.callback').fadeOut();
    });

    // Вызов формы корпортативных клиентов
    $("body").on("click", ".corporate-show", function () {
        $('.corporate').fadeIn();
    });

    // Закрытие формы корпортативных клиентов
    $("body").on("click", "#corporate__close", function () {
        $('.corporate').fadeOut();
    });

    // Закрытие окна подписки на рассылку
    $("body").on("click", "#dispatch__close", function () {
        $('.dispatch').fadeOut();
    });

    // Закрытие нового модальника звноков
    $("body").on("click", "#new_callback__close", function () {
        $('.new_callback').fadeOut();
    });

    $('.callback:not(.callback_map), .corporate, .dispatch, .new_callback').on('click', function (e) {
        var targetbox = $('.callback-modal, .new_callback__wrp');
        if (!targetbox.is(e.target) && targetbox.has(e.target).length === 0) {
            $('.callback, .corporate, .dispatch, .new_callback').fadeOut();
        }
    });

    var lastScrollTop = $(window).scrollTop();

    $(window).scroll(function () {
        
        // Фильтры при скролинге
        if ($('.tickets__filter').length) {
            var offset = $('.tickets__filter').offset().top;
        }

        if ($('.tickets__filters').length) {
            var scroll = $(window).scrollTop() + 70;

            if (scroll >= offset) {
                $('.tickets__filter').css('padding-top', $('.tickets__filters:not(.active)').outerHeight());
                $('.tickets__filters, .mobile_months').addClass('active');
            } else {
                $('.tickets__filter').css('padding-top', 0);
                $('.tickets__filters, .mobile_months').removeClass('active');
            }
        }

        // Мобильная строка месяцев
        if ($('.date__content').length) {
            $('.date__content').each(function () {
                var offsetTop = $(this).offset().top;

                if ($(window).scrollTop() - offsetTop > 0 && $(window).scrollTop() - $(this).height() - offsetTop < 0) {
                    $(".mobile_months").html($(this).find(".ev_date__day").html() + " " + $(this).find(".ev_date__grey").html());
                }
            });
        }

        // Появление / скрытие окна на странице событий
        if ($('.info__more-performance').length) {
            var scroll = $(window).scrollTop();

            if ($('.new_event__title').length) {
                var photos = $('.seo_nav').offset().top - window.innerHeight + 200;

                if (scroll >= photos) {
                    $('.info__more-performance').addClass('show');
                } else {
                    $('.info__more-performance').removeClass('show');
                }
            } else if ($('.event-desc__text').length) {
                var photos = $('.event-desc__text').offset().top - window.innerHeight;

                if (scroll >= photos) {
                    $('.info__more-performance').addClass('show');
                } else {
                    $('.info__more-performance').removeClass('show');
                }
            }
        }

        // Появление сертификатов
        if ($('.certificate_image').length) {
            var scroll = $(window).scrollTop(),
                certificate = $('.certificate_image').offset().top;

            if (certificate > scroll) {
                $('.certificate_image').addClass('active');
            }
        }

        if ( $('.map_legend__wrp.colorized').length ) {
            var scroll = $(window).scrollTop();
            var top = $('.map_legend').offset().top - $('.header').height() - $('.map_line').height();
            if (scroll >= top)
                $('.map_legend__wrp.colorized').addClass('fixed');
            else
                $('.map_legend__wrp.colorized').removeClass('fixed');
        }
    });

    $(window).on("scroll load", function () {
        if ($(".slider-top").length || $(".t3_e__banner").length) {
            var t3_scroll = $(window).scrollTop();

            if (t3_scroll == 0) {
                $(".header").addClass("transparent");
            } else {
                $(".header").removeClass("transparent"); 
            }
        }
    });

    // Скролл до афиши с баннера
    // if ($('.slider-top').length) {
    //     var st;

    //     $(window).on('wheel mousewheel', function(e) { 
    //         st = $(window).scrollTop();

    //         if (e.originalEvent.deltaY > 0) {
    //             if (st == 0) {
    //                 $('body, html').animate({
    //                     scrollTop: $('.utp_theatre_main').offset().top - 56
    //                 }, 500);
    //             }
    //         }
    //     });
    // }

    if (window.location.href.split('/')[3] == "") {
        if ($('.info__more-performance').length) {
            setTimeout(function () {
                $('.info__more-performance').addClass('static_position');
                $('.info__more-performance').addClass('show');
            }, 1500)
        }
    }

    // Закрываем фильтры при скролле
    if ($('.tickets__filters, .filter__select').length) {
        window.addEventListener('wheel', function (e) {
            if (!$(".l_afisha__wrp").length) {
                if ($('.tickets__filters').hasClass('active')
                    || $('.l_afisha__wp').hasClass('active')) {
                    $('.filter__select').trigger('click');
                }
            }
        });
    }

    // Кнопка Схемы / списка на схеме зала
    $(".map__switch div").on("click", function () {
        $(".map__switch div, .map_top").removeClass("active");
        $(this).addClass("active");

        var id = $(this).data('id');

        if (!IS_CANVAS) {
            if (id == 1) {
                window.store.dispatch({
                    type: 'SELECT_TAB',
                    tab: 'scheme'
                })
            } else {
                window.store.dispatch({
                    type: 'SELECT_TAB',
                    tab: 'list'
                })

                $(".map_mob").addClass("active");
                $(".map_line").removeClass("active");

                if (!$(".main_map").length) {
                    $('body, html').animate({
                        scrollTop: 0
                    }, 500);
                }
            }
        }

        if (id == 2) {
            triggerCountersList();
        }

        $(".map__wrp").removeClass('active');
        $(".map").find("[data-id=" + id + "]").addClass('active');

        if ($('.map__switch div:nth-child(1)').hasClass('active')) {
            $('.info__more').addClass('active');
        } else {
            $('.info, .info__more').removeClass('active');
        }
    });

    // Кнопка "Подробная схема"
    $(".map__scheme-detail").on("click", function () {
        $('.map__modal').css('right', (window.innerWidth - parseInt($('.wrapper_1410').css('width'))) / 2);
        $(".map__modal").toggleClass("active");
    });

    // Кнопка закрыть "Подробная схема"
    $(".map__close").on("click", function () {
        $(".map__modal").removeClass("active");
    });

    // Убираем модальник с информацией
    if ($('.sector_scheme').length) {
        $('.info__more').remove();
    }

    if ($('.map__modal') && !!jQuery.fn.draggable) {
        $('.map__modal .img_wrp').draggable({ cursor: "move" });

        var scale = 1;

        $(".map_modal__plus").on("click", function () {
            if (scale <= 2) {
                scale = scale + .2;
                map_modal__scale();
                $(".map_modal__minus").removeClass('visibility');
            } else {
                $(".map_modal__plus").addClass('visibility');
            }
        });

        $(".map_modal__minus").on("click", function () {
            if (scale >= .5) {
                scale = scale - .2;
                map_modal__scale();
                $(".map_modal__plus").removeClass('visibility');
            } else {
                $(".map_modal__minus").addClass('visibility');
            }
        });

        function map_modal__scale() {
            $('.map__modal img').css('transform', 'scale(' + scale + ')');
        }
    }

    // Переход по кнопке "Выбрать билеты" с прелоадером, переход на страницу сеанса
    $("body").on("click", '.afishaList .date__content, .new_date', function (e) {
        if (!e.metaKey && ! e.ctrlKey) {
            e.preventDefault();
            var $parent = $(e.target).closest('.a_parent'),
                $seanceLink = $parent.find('.a_seance:not(.date__buy-inactive, .date__buy-cancel)'),
                eventLinkURL = $(e.target).closest('.a_event').attr('href'),
                seanceLinkURL = $seanceLink.attr('href');

            if (!eventLinkURL && !(!!seanceLinkURL)) {
                return;
            }
            else if (eventLinkURL) {
                window.location.href = eventLinkURL;
            }
            else {
                $('.date__buy').removeClass('loading');
                $seanceLink.addClass('loading');
                window.location.href = seanceLinkURL;
            }
        }
    });

    // Переход по кнопке "Выбрать билеты" на странице Сеанса
    $("body").on("click", '.performance__ticket', function (e) {
        e.preventDefault();
        var $parent       = $(e.target).closest('.performance__ticket'),
            $seanceLink   = $parent.find('.date__buy'),
            seanceLinkURL = $seanceLink.attr('href');
        if (!!seanceLinkURL) {
            $('.date__buy').removeClass('loading');
            $seanceLink.addClass('loading');
            window.location.href = seanceLinkURL;
        }
    });

    // Закртыие подробной схемы при переключении со списка на схему
    $(".map__switch > div[data-id='1']").on("click", function () {
        $('.map__modal').removeClass('active');
    });

    // Скрытие ga текста в корзине
    $("body").on("click", ".cart_ga__ok", function () {
        $('.cart_ga').hide();
    });

    // Переключение "Актеры"
    $("body").on("click", ".actors__tab", function () {
        $('.actors__tab, .actors__block').removeClass('active');
        $(this).addClass('active');

        var id = $(this).data('id');
        $('.actors__block[data-id="' + id + '"]').addClass('active');
    });

    // Закрыть алерт
    $("body").on("click", ".cart_alert", function () {
        $(this).removeClass('active');
    });

    // Алерт на главной
    if ($('.cart_alert-main').length) {
        setTimeout(function () {
            var random = Math.floor(Math.random() * 20) + 3;
            random = random + ' ' + declOfNum(random, ['билета', 'билетов', 'билетов']);

            $('.cart_alert-main span').html(random);
            $('.cart_alert-main').addClass('active');

            setTimeout(function () {
                $('.cart_alert-main').removeClass('active');
            }, 7000);
        }, 5000);
    }

    // Табы на странцие залов
    if ($('.hall__tab').length) {
        $('.hall__nav:first-child, .hall__tab:first-child').addClass('active');

        $('.hall__nav').on('click', function () {
            var id = parseInt($(this).index() + 1);

            $('.hall__nav, .hall__tab').removeClass('active');
            $(this).addClass('active');
            $('.hall__tab:nth-child(' + id + ')').addClass('active');
        });
    }

    // Закрыть выгодные цены
    $("body").on("click", ".map_profit", function () {
        $(this).removeClass('active');
    });

    setTimeout(function () {
        $('.ytplayer').each(function () {
            if (typeof YTPlayer !== "undefined") {
                $(this).YTPlayer({
                    fitToBackground: false,
                    mute: true,
                    videoId: $(this).data('id')
                });
            }
        });
    }, 400);

    // Поиск подсказка
    if ($('.search_help').length) {
        setTimeout(function () {
            $('.search_help').addClass('active');

            setTimeout(function () {
                $('.search_help').removeClass('active');
            }, 10000);
        }, 3000);

        if (localStorage.getItem('search_help')) {
            $('.search_help').remove();
        } else {
            localStorage.setItem('search_help', ' ');
        }
    }

    // Модальники в лейблах
    $('body').on('mouseenter', '.labels__label', function () {
        var h = $(this).find('.labels__modal').outerHeight();

        $(this).find('.labels__modal').css('top', -h - 7).addClass('active');
    });

    $('body').on('mouseleave', '.labels__label', function () {
        $(this).find('.labels__modal').removeClass('active');
    });

    // Программка
    $(".program_top__element").on("click", function () {
        $('.program_top__element, .program_bottom__wrp').removeClass('active');

        var id = $(this).index() + 1;
        $(this).addClass('active');
        $('.program_bottom__wrp:nth-child(' + id + ')').addClass('active');
    });

    // Валидация поля
    $("#shopping-cart input").on("input", function () {
        form_valid($(this), $(this).attr('id'));
    });

    // Смена способа оплаты
    $("#shopping-cart input[name='pay_type']").on("input", function () {
        cartSubmitConc();
    });

    cartSubmitConc();

    // Оформить заказ
    $("#shopping-cart .cart_submit__wrp").on("click", function () {
        
        // Валидация формы
        $("#shopping-cart input").each(function() {
            form_valid($(this), $(this).attr('id'));
        });

        if ( $("#shopping-cart .inp_wrp.error").length == 0 && $("#shopping-cart #agree").hasClass("ok")) {
            $("#cart_submit").addClass('active');
        } else {
            $("#cart_submit").removeClass('active');

            if ($("#shopping-cart #agree").hasClass("ok")) {
                $('body, html').animate({
                    scrollTop: $('#shopping-cart #name').offset().top - 200
                }, 500);
            }
        }

        if ($("#cart_submit").hasClass("active")
            && !$('.cart_submit__wrp').hasClass('loading')
            && $("#shopping-cart .inp_wrp.error").length == 0
        ) {
            $("#cart_submit").trigger("click");

            $('.cart_submit__wrp').addClass('loading');

            // Запись имени и телефона в local storage для автозаполнения
            localStorage.setItem('user_name', $("#shopping-cart #name").val());
            localStorage.setItem('user_surname', $("#shopping-cart #surname").val());
            localStorage.setItem('user_phone', $("#shopping-cart #phone").val());
            localStorage.setItem('user_email', $("#shopping-cart #email").val());

            // Очистка Sendsay
            sendsayClear();

            // Очистка таймера в корзине
            timerStop();
        }
    });

    // Валидация
    function form_valid(input, id) {
        switch (id) {
            case 'name':
                val = $.trim(input.val());

                if (val.length > 0) {
                    input.closest(".inp_wrp").removeClass('error');
                    input.addClass('ok');
                    localStorage.setItem('user_name', $("#shopping-cart #name").val());
                } else {
                    input.closest(".inp_wrp").addClass('error');
                    input.removeClass('ok')
                }
                break;

            case 'surname':
                val = $.trim(input.val());
                input.closest(".inp_wrp").removeClass('error');
                input.addClass('ok');

                if (val.length > 0)
                    localStorage.setItem('user_surname', $("#shopping-cart #surname").val());

                if ($("#shopping-cart #surname").prop('required')) {
                    if (val.length > 0) {
                        input.closest(".inp_wrp").removeClass('error');
                        input.addClass('ok')
                    } else {
                        input.closest(".inp_wrp").addClass('error');
                        input.removeClass('ok')
                    }
                }
                break;

            // Если выбрана Россия, то номер не может содержать меньше 10 цифр, для других стран 7
            // При расчете учитываются все символы, поэтому для России maxlength = 15
            case 'phone':
                var phoneNum = input.val(),
                    phoneCode = $("#shopping-cart #phone_code"),
                    russiaCode = phoneCode.val() != '+7' ? false : true,
                    specialCode = phoneCode.val() != '+380' && !russiaCode ? false : true,
                    minLen = specialCode ? ~~input.attr('maxlength') : ~~input.attr('minlength');

                if (~~input.attr('minlength') > ~~input.attr('maxlength')) minLen = ~~input.attr('maxlength');

                if (russiaCode && (phoneNum.substr(1,2) == '88' || phoneNum.substr(1,2) == '89' || phoneNum.substr(1,3) == '849')) {
                    input.val(phoneNum.substr(2));
                    input[0].dispatchEvent(eventInput);
                    input[0].setSelectionRange(input.val().length, input.val().length);
                }

                minLen = minLen - 5;

                if (input.val().length >= minLen) {
                    input.closest(".inp_wrp").removeClass('error');
                    input.addClass('ok');
                    if ( input.attr('placeholder') )
                        localStorage.setItem('user_phone', input.val());
                } else {
                    input.closest(".inp_wrp").addClass('error');
                    input.removeClass('ok');
                }
                break;

            case 'email':
                input.closest(".inp_wrp").removeClass('error');
                input.addClass('ok');
                email_val = $.trim(input.val());

                if (email_val.length > 0 && email_val.indexOf('@') >= 0 && email_val.indexOf('.') >= 0)
                    localStorage.setItem('user_email', input.val());

                if ($("body").data("email") || $("#shopping-cart #email").prop('required')) {
                    if (email_val.length > 0 && email_val.indexOf('@') >= 0 && email_val.indexOf('.') >= 0) {
                        input.closest(".inp_wrp").removeClass('error');
                        $('.cart_aletrs').fadeOut();
                    } else {
                        input.closest(".inp_wrp").addClass('error');
                        $('.cart_aletrs').fadeIn();
                        input.removeClass('ok');
                    }
                }
                break;

            case 'agree':
                if (input.is(':checked')) {
                    input.closest(".inp_wrp").removeClass('error');
                    input.addClass('ok'); 
                } else {
                    input.closest(".inp_wrp").addClass('error');
                    input.removeClass('ok');
                }
                break;

            case 'cert_id':
                cert_id_val = $.trim(input.val());

                if (cert_id_val.match('^[a-zA-Z0-9-]{1,12}$') || !input.closest('.cert_input').hasClass('active') ) {
                    input.closest(".inp_wrp").removeClass('error');
                    input.addClass('ok');
                } else {
                    input.closest(".inp_wrp").addClass('error');
                    input.removeClass('ok');
                }
                break;

            case 'cert_kynsi_id':
                cert_kynsi_id_val = $.trim(input.val());

                if (cert_kynsi_id_val.length > 0 || !input.closest('.cert_input').hasClass('active') ) {
                    input.closest(".inp_wrp").removeClass('error');
                    input.addClass('ok');
                } else {
                    input.closest(".inp_wrp").addClass('error');
                    input.removeClass('ok');
                }
                break;
        }
    }
    
    // Валидация поля сертификатов
    if ($("#shopping-cart #cert_id").length) {
        $('#shopping-cart #cert_id').mask('AAAAAAAAAAAA', {
            translation: {
                'A': {
                    pattern: "^[a-zA-Z0-9-]{1,12}$", optional: true
                }
            }
        });
    }

    // Валидация телефона
    function phone_deformat(val) {
        val = val.split('');
        if (val[0] == '+') {
            this.plus_phone = true;
            val.splice(0, 1);
        } else {
            this.plus_phone = false;
        }
        for (var i = 0; i < val.length; i++) {
            if (i == 1 && val[i] == ' ' && val[i + 1] == '(' && this.plus_phone)
                val.splice(i, 2);
            if (i == 4 && val[i] == ')' && val[i + 1] == ' ' && this.plus_phone)
                val.splice(i, 2);
        }
        return val.join('');
    }

    function phone_format(val) {
        val = val.split('');
        if (this.plus_phone)
            val.splice(0, 0, '+');
        for (var i = 0; i < val.length; i++) {
            if (i == 2 && val[i] !== ' ' && val[i + 1] !== '(' && this.plus_phone)
                val.splice(i, 0, ' (');
            if (i == 6 && val[i] !== ')' && val[i + 1] !== ' ' && this.plus_phone)
                val.splice(i, 0, ') ');
        }
        return val.join('');
    }

    // Страны у телефона
    if ($("#shopping-cart #phone").length) {

        if ($("#shopping-cart #phone").attr('value')) {
            $("#shopping-cart #phone").attr('initial', $("#shopping-cart #phone").attr('value'));
            $("#shopping-cart #phone").val('');
        }

        window.intlTelInput($("#shopping-cart #phone")[0], {
            initialCountry: "auto",
            geoIpLookup: function(callback) {
                $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "RU";
                    callback(countryCode);

                    setTimeout(function () {
                        $("input[name='phone_code']").attr("value", $(".selected-flag").attr("code"));
                        if ( localStorage.getItem('user_phone') )
                            $("#shopping-cart #phone").attr("value", localStorage.getItem('user_phone'));
                    }, 100);
                });
            },
            customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                phoneMask(selectedCountryPlaceholder);
                return selectedCountryPlaceholder;
            }
        });

        var input = document.querySelector("#shopping-cart #phone"),
        handleChange = function() {
            $("input[name='phone_code']").attr("value", $(".selected-flag").attr("code"));
        };

        input.addEventListener('change', handleChange);
        input.addEventListener('keyup', handleChange);

        input.addEventListener('open:countrydropdown', function() {
            $(this).attr('maxlength', 25);
        });

        $(document).on("click", ".country", function(){
            $('#shopping-cart #phone').val('');
            phoneMask();

            setTimeout(function () {
                $("input[name='phone_code']").attr("value", $(".selected-flag").attr("code"));
            }, 100);
        });

        // Автозаполнение имени и телефона
        setTimeout(function () {
            if (localStorage.getItem('user_name') || localStorage.getItem('user_email') || localStorage.getItem('user_surname')) {
                $("#shopping-cart #name").attr("value", localStorage.getItem('user_name'));
                $("#shopping-cart #surname").attr("value", localStorage.getItem('user_surname'));
                $("#shopping-cart #email").attr("value", localStorage.getItem('user_email'));
                $("#shopping-cart #phone")[0].dispatchEvent(eventInput);
            }
        }, 100);
    }

    // Смотреть афишу
    $(".to_afisha").on("click", function () {
        $('body, html').animate({
            scrollTop: $('#tickets').offset().top
        }, 500);
    });
    
    // Открыть мобильную корзину
    $(".mobile_cart").on("click", function() {
        $('.mobile_cart').removeClass('active');
        $('.cart-popup').addClass('active-mobile');
    });

    // Скрыть мобильную корзину
    $(".cart-popup__down").on("click", function() {
        $('.mobile_cart').addClass('active');
        $('.cart-popup').removeClass('active-mobile');
    });

    // Открыть навигацию на схеме
    $(".map__mob").on("click", function() {
        $('.map_top').addClass('active');
    });

    // Скрыть навигацию на схеме
    $(".map__wrp").on("click touchstart", function() {
        $('.map_top').removeClass('active');
    });

    // Маска для телефона
    function phoneMask(pattern) {
        var placeholder = pattern || $('#shopping-cart #phone').attr('placeholder');

        $('#shopping-cart #phone').mask(placeholder.replace(/\d/g, "0") + "0000000000");
        $('#shopping-cart #phone').attr('maxlength', placeholder.length + 5);

        if ( $("#shopping-cart #phone").attr('initial') ) {
            $("#shopping-cart #phone").val($("#shopping-cart #phone").attr('initial'));
            $("#shopping-cart #phone").attr('initial', '');
        }
    }

    $("#shopping-cart #phone").on("click", function () {
        phoneMask();
    });

    // Помощь менеджера
    $('.sold_modal__lined').on('click', function(){
        $('.sold_modal').addClass('big');
    });

    $('.sold_modal_close').on('click', function(e){
        $(this).closest('.sold_modal').removeClass('active');
    });

    // Скрыть Cookies
    $('.cookies__close').on('click', function(){
        $('.cookies').removeClass('active');
        localStorage.setItem('cookies_modal', ' ');
    });

    if ($('.cookies').length) {
        if (!localStorage.getItem('cookies_modal')) {
            $('.cookies').addClass('active');

            setTimeout(function () {
                $('.cookies').removeClass('active');
                localStorage.setItem('cookies_modal', ' ');
            }, 5000);
        }
    }

    // Скрытие календаря
    $('#dateFilter').on('click', function(){
        if ($(this).hasClass("active")) {
            $(".date-picker-wrapper").hide();
        }

        $(this).toggleClass("active");
    });

    // Показать инфо - моб.
    $('.map_mob__down').on('click', function(){
        $(".map_mob").removeClass("active");
        $(".map_line").addClass("active");
    });

    $('#map').on('click touchstart', function(){
        $(".map_mob").addClass("active");
        $(".map_line").removeClass("active");
    });

    // Добавить отзыв для сайта
    $('.send_feedback').on('click', function(){
        if ($("#revSucces #text").val().length > 0) {
            var csrf = $("#revSucces").find('input[name="csrfmiddlewaretoken"]').val();

            $.ajax({
                type: 'POST',
                url: '/feedback/',
                processData: false,
                data: $("#revSucces").serialize(),
                cache: false,
                success: function (response) {
                    if (response.status == "success") {
                        $(".subscription_stage").removeClass("active");
                        $(".subscription_stage-2").addClass("active");
                    }
                }
            });            
        }
    });

    // Добавить отзыв для события
    $('#rev_submit').on('click', function(){
        var error = false;
        $("#rev_form input, #rev_form textarea").removeClass("error");

        if (!$("#rev_form #name").val().length > 0) {
            error = true;
            !$("#rev_form #name").addClass("error");
        }

        if (!$("#rev_form #text").val().length > 0) {
            error = true;
            !$("#rev_form #text").addClass("error");
        }

        if (!error) {
            var csrf = $("#rev_form").find('input[name="csrfmiddlewaretoken"]').val();

            $.ajax({
                type: "POST",
                url: "/api/events/" + eventId + "/reviews/",
                processData: false,
                data: $("#rev_form").serialize(),
                cache: false,
                success: function (response) {
                    if (response) {
                        $("#rev_form input, #rev_form textarea").removeClass("error");
                        $(".rev_form").removeClass("active");
                        $(".rev_form__success").addClass("active");
                    }
                }
            });            
        }
    });

    // Открыть список праздников
    $('.holidays_list').on('click', function(){
        $(this).toggleClass('active');
    });

    // Выбрать праздник в списке
    $('.holidays_list__row').on('click', function(){
        id = $(this).data("holiday");

        $(".cert_certs__block[data-holiday=" + id + "]").trigger("click");
    });

    // Фильтр моб.
    $('#mobile_filter').on('click', function(){
        $(".filters_left, .t_filter_show, #mobile_filter").toggleClass('active');

        if ($(".filters_left").hasClass("active")) {
            $(".tickets__filters").addClass('fixed');
        } else {
            $(".tickets__filters").removeClass('fixed');
        }
    });

    // Закрыть фильтр
    $('.filter_button').on('click', function(){
        $(".filters_left, .mobile_filter").removeClass('active');
        $(".tickets__filters").removeClass('fixed');
    });

    $('.nerv_modal__button').on('click', function(){
        $(".nerv_modal").removeClass("active");
    });

    // Продлаить таймер
    $('#nerv_more').on('click', function(){
        timerStart();
    });

    // Очистить корзину
    $('#nerv_clear').on('click', function(){
        timerStop();
    });

    // Алерт с процентами
    if ($(".nerv__right").length) {
        setTimeout(function () {
            $('.nerv__right').addClass('active');
        }, 4000);
    }

    // Закрыть алерт с процентами
    $('.nerv__right').on('click', function(){
        $(this).removeClass("active");
    });

     // Отзывы звезды
     $('.rev_stars__wrp div').on('click', function(){
        var rating = $(this).index();

        $("#rating").attr("value", rating + 1);

        $('.rev_stars__wrp div').removeClass("active");

        for (i = 0; i <= rating; i++) {
            $('.rev_stars__wrp div').eq(i).addClass('active');
        }
    });

    // Открыть моб корзину
    $('.map__cart').on('click', function(){
        $(".cart-popup").addClass("active-mobile");
    });

    // Открыть модальник
    $('.info_block__show').on('click', function(){
        if ($(this).hasClass("info_block__show-subscribe")) {
            addSubscribeForm();
        }
        
        $(this).parent().find(".info_block__modal").addClass("active");
    });

    // Закрыть модальник
    $('.subscription__close').on('click', function(){
        $(this).parent().removeClass("active");
    });

    // Открыть Живочат
    $('.info_block__show-jivo').on('click', function(){
        $('.globalClass_ET, body div#jivo-iframe-container:not(.jivo-c-mobile)').show();
        jivo_api.open({start: 'chat'});
    });

    // Скрыть Живочат
    $('body').on('touchend click', '.closeIcon_1U, .closeBox_3L', function(){
        $('.globalClass_ET, body div#jivo-iframe-container:not(.jivo-c-mobile)').hide();
        jivo_api.close();
    });

    // Открыть / скрыть Яндекс чат
    $('.info_block__show-yandexchat').on('click', function(){
        var $yandexchat = $(".ya-chat-widget_theme_light.ya-chat-widget_desktop.ya-chat-widget_theme_light"),
            $yandexchat_popup = $(".ya-chat-popup_desktop");

        if ($yandexchat.hasClass("active") && $yandexchat_popup.hasClass("ya-chat-popup_visible")) {
            $yandexchat.removeClass("active");
        } else {
            $yandexchat.addClass("active");  
        }

        $(".ya-chat-button").trigger("click");
    });

    // Подгрузка SEO текстов
    if ($('#map_seo').length) {
        var slug = $("#map_seo").data("slug");
        
        $.ajax({
            type: 'GET',
            url: '/event_data/?slug=' + slug + '&lang=' + LANG_CODE + '&type=description',
            success: function (response) {
                $(".map_seo__description").html(response);
            }
        });

        $.ajax({
            type: 'GET',
            url: '/event_data/?slug=' + slug + '&lang=' + LANG_CODE + '&type=tech_info',
            success: function (response) {
                $(".map_seo__tech_info").html(response);
            }
        });
    }

    // Цель на корпоративную заявку
    $("#corporate-form-submit").on("click", function(){
        var err = false,
            name = $('#corporate-form #name').val(),
            phone = $('#corporate-form #phone').val();

        $('#corporate-form .crp__input').removeClass("error");

        if (!name.length) {
            $('#corporate-form #name').parent().addClass("error");
            err = true;
        }

        if (!phone.length) {
            $('#corporate-form #phone').parent().addClass("error");
            err = true;
        }

        if (!err) {
            $(".crp__submit").addClass("loading");
            triggerCorporate();
        }
    });

    // Подписаться заново
    $(".subscription__row_2 span").on("click", function(){
        $("#subscription_email").val();
        
        $(".subscription_stage").removeClass("active");
        $(".subscription_stage-1").addClass("active");
    });


    // Активация промокода
    $("body").on("click", ".promocode__button-active", function(){
        var code = $("#code").val(), 
            email = $("#shopping-cart #email").val();
            
        $(".promocode__alert, .promocode__text").removeClass("active");
        $(".promocode__wrp input").removeClass("error");

        if (code.length && email.length) {
            $.ajax({
                type: 'GET',
                url: '/apply_promocode/?email=' + email + '&code=' + code,
                success: function (response) {
                    if (response.is_valid) {
                        cartSidebar.initTickets();

                        $(".promocode__button").removeClass("active");
                        $(".promocode__button-deactive").addClass("active");
                    } else {
                        $(".promocode__alert").addClass("active");
                        $(".promocode__text-error").addClass("active");
                    }
                }
            });   
        } else {
            $(".promocode__alert").addClass("active");

            if (!code.length) {
                $(".promocode__text-code").addClass("active");
                $(".promocode__wrp input").addClass("error");
            }

            if (!email.length) {
                $(".promocode__text-email").addClass("active");
                $("#shopping-cart #email").parent().addClass("error");
            }
        }
    });

    // Деактивация промокода
    $("body").on("click", ".promocode__button-deactive", function(){
        cartSidebar.cancelCode();

        $(".promocode__button").removeClass("active");
        $(".promocode__button-active").addClass("active");
    });

    if ($('.success_slider').length) {
        $('.success_slider').slick({
            slidesToScroll: 1,
            slidesToShow: 3,
            prevArrow: '<div class="success_slider__nav success_slider__nav-prev"></div>',
            nextArrow: '<div class="success_slider__nav success_slider__nav-next"></div>',
            centerMode: true,
            responsive: [{
                breakpoint: 800,
                settings: {
                slidesToShow: 2
                }

            }, {

                breakpoint: 500,
                settings: {
                slidesToShow: 1
                }

            }]
        });
    }
    
    //setSEOText(0, 'footer__text', footerSeoText);
    //setSEOText(0, 'callback_title', callbackTitleText);

    $('#subscribe_form').submit(function (e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function (data) {

                $('.bSubscribeSendStatus').show().text(trans.inquiry_received);
                $('#subscribe_form').hide();

            },
            error: function () {
                $('.bSubscribeSendStatus').show().text(trans.error);
            }
        });
    });

    // Отправить форму обратного звонка
    $('.callback_form').on('click', '#callback-modal__submit', function(e){
        e.preventDefault();

        var name = $("#callback-form #id_name").val(),
            phone = $("#callback-form #id_phone").val(),
            email = $("#callback-form #id_email").val(),
            valid = true,
            lang = window.LANG_CODE != "ru" ? "/" + window.LANG_CODE : "";

        $(".form-cart__input").removeClass("error");

        if (!name.length) {
            $("#callback-form #id_name").parent().addClass("error");
            valid = false;
        }

        if (!phone.length) {
            $("#callback-form #id_phone").parent().addClass("error");
            valid = false;
        }

        if (!email.length > 0 || !email.indexOf('@') == -1 || !email.indexOf('.') == -1) {
            $("#callback-form #id_email").parent().addClass("error");
            valid = false;
        }

        if (valid) {
            $(".callback-modal__submit").addClass("inactive");

            $.ajax({
                type: 'POST',
                url: '/callback-ajax/',
                data: $(this).parent().serialize(),
                success: function (response) {
                    if (response.status == "success") {
                        window.location.replace(lang + "/order_success/");
                    }
                }
            });
        }
    });

    // Модальник подписки
    $('.subscription__wrp').on('click', '#subscribe-form-submit', function(e){
        e.preventDefault();

        $('#subscribe-form input').removeClass("error");

        var email = $("#subscribe-form #email").val();

        if (email.length > 0 && email.indexOf('@') >= 0 && email.indexOf('.') >= 0) {
            $("#subscribe-form").append($("<input type='hidden' name='g-recaptcha-response' value=''>").val($("[name='g-recaptcha-response']").val()));

            $.ajax({
                type: 'POST',
                url: '/subscribe-ajax/',
                data: $("#subscribe-form").serialize(),
                success: function (response) {
                    $(".info_block__modal-subscription .subscription_stage").removeClass("active");
            
                    if (response.status == 'success') {
                        $(".info_block__modal-subscription .subscription_stage-2").addClass("active");
                        localStorage.setItem('subscription', ' ');
                        localStorage.setItem('user_email', email);
                    }
                },
                error: function (err) {
                    var error = err.responseJSON.error_msg.__all__;

                    $(".info_block__modal-subscription .subscription_stage").removeClass("active");

                    if (typeof error == "undefined" || error == "Введённый вами адрес уже был подписан на рассылки ранее. Если вы не получаете наши рассылки позвоните нам по телефону:") {
                        $(".info_block__modal-subscription .subscription_stage-3").addClass("active"); 
                        localStorage.setItem('subscription', ' ');
                        localStorage.setItem('user_email', email);
                    }
                }
            });
        } else {
            $('#subscribe-form input').addClass("error");
        }
    });

    // Клики на фиьтры
    $(".filter_wrp li, .filter__select li").on("click", function(){
        triggerFilter();
    });

    // Открыть форму покупки билетов
    $(".sell_tickets").on("click", function(){
        $(".buy_t_modal").addClass("active");
    });

    // Закрыть форму покупки билетов
    $(".buy_t_modal__close").on("click", function(){
        $(".buy_t_modal").removeClass("active");
    });

    $('.buy_t_modal').on("click", function(e){
        var targetbox = $('.buy_t_modal__wrp');
        
        if (!targetbox.is(e.target) && targetbox.has(e.target).length === 0){
            $(".buy_t_modal").removeClass("active");
        }
    });

    // Форма купить билеты
    $(".buy_t_modal__button").on("click", function(){
        var $wrp = $(this).closest(".buy_t_modal__form"),
            name = $wrp.find("#name").val(),
            surname = $wrp.find("#surname").val(),
            phone = $wrp.find("#phone").val(),
            email = $wrp.find("#email").val(),
            valid = true;

        $(".buy_t_modal__input").removeClass("error");

        if (!name.length) {
            $("#name").parent().addClass("error");
            valid = false;
        }

        if (!surname.length) {
            $("#surname").parent().addClass("error");
            valid = false;
        }

        if (!phone.length) {
            $("#phone").parent().addClass("error");
            valid = false;
        }

        if (!email.length > 0 || !email.indexOf('@') == -1 || !email.indexOf('.') == -1) {
            $("#email").parent().addClass("error");
            valid = false;
        }

        if (valid) {
            $(".buy_t_modal__form").hide();
            $(".buy_t_modal__text").show();
        }
    });

    // Включить подкаст
    $("body").on("click", ".podcast_play", function () {
        if ($(this).hasClass("active")) {
            $(".podcast__audio")[0].pause();
        } else {
            $(".podcast__audio")[0].play();
        }

        $(this).toggleClass("active");
    });

    // Открыть жанры
    $(".afisha_tags__all").on("click", function () {
        $(".afisha_tags__all, .afisha_popup").toggleClass("active");
    });

    // Закрыть жанры
    $(".afisha_popup__close").on("click", function () {
        $(".afisha_tags__all, .afisha_popup").removeClass("active");
    });

    // Зум на схеме
    $("body").on("mouseenter", ".leaflet-control-container", function () {
        triggerZoom();
    });

    // Клик на календарь
    $("#dateFilter").on("click", function () {
        triggerCalendar();
    });

    // Клик на месяц
    $(".filter__select-month li, .new__month").on("click", function () {
        triggerMonth();
    });

    // Клик на жанры
    $(".filter_wrp__genres li").on("click", function () {
        triggerGenre();
    });

    // Клик на сцены
    $(".filter_wrp__halls li, #stage_filter li").on("click", function () {
        triggerScene();
    });

    // Клик на поиск
    $(".header__search").on("click", function () {
        triggerSearch();
    });

    // Клик на краткое содержание
    $("[data-tab='2']").on("click", function () {
        triggerTabsSummary();
    });

    // Клик на программку
    $("[data-tab='3']").on("click", function () {
        triggerProgramTabs();
    });

    // Клик на отзывы
    $("[data-tab='4']").on("click", function () {
        triggerTabsReviews();
    });

    // Клик на хлебные крошки
    $(".breadcrumbs a, .new_bread a").on("click", function () {
        triggerBreadCrumbs();
    });

    // Клик на цветовую легенду
    $("body").on("click", ".map_legend__element", function () {
        triggerColorLegend();
    });

    // Клик на удалению билетов на схеме
    $(".delete_from_cart").on("click", function () {
        triggerRemoveFromBasket();
    });

    // Клик на наведение на стикер
    $(".date_str, .labels").on("mouseenter", function () {
        triggerStickers();
    });

    // Клик на краткое содержание
    $("[data-tab='2']").on("click", function () {
        triggerTabsSummary();
    });

});

// Падеж слова
function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function preventScale() {
    window.addEventListener('wheel', function (e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    });

    window.addEventListener("gesturestart", function (e) {
        e.preventDefault();
    });

    window.addEventListener("gesturechange", function (e) {
        e.preventDefault();
    });

    window.addEventListener("gestureend", function (e) {
        e.preventDefault();
    });
}

// Блоки на схеме
function showBlocks() {
    
    // Сколько еще человек в данный момент выбирают билеты
    if ($('.cart_alert-map').length) {
        setTimeout(function () {
            var random = Math.floor(Math.random() * 42) + 3;

            if (window.LANG_CODE == "ru") {
                random = random + ' ' + declOfNum(random, ['человек', 'человека', 'человек']);
            }

            $('.cart_alert-map span').html(random);
            $('.cart_alert-map').addClass('active');

            setTimeout(function () {
                $('.cart_alert-map').removeClass('active');
            }, 7000);
        }, 5000);
    }

    // Подарок
    if ($('.present').length) {
        $(".present__close").on("click", function () {
            $('.present__big').removeClass('active');
            $('.present__small').addClass('active');
        });

        $(".present__small").on("click", function () {
            $('.present__small').removeClass('active');
            $('.present__big').addClass('active');
        });
    }
}

// Таймер в корзине
var interval;

function cartTimer(is_tickets) {
    if ($(".nerv__timer").length) {
        if (is_tickets) {
            $(".nerv, .cart_red").addClass("active");
            $(".nerv__percents").html(Math.floor(Math.random() * 55) + 30);
    
            timerStart();
    
            // Алерт в корзине
            setTimeout(function () {
                $('.cart_alert-cart').addClass('active');
            }, 3000);
        } else {
            $(".nerv, .cart_alert-cart, .cart_red").removeClass("active");

            timerStop();
        }
    }
}

function timerStart() {
    var date_end,
        date_now,
        date_timer,
        minutes,
        seconds;
    
    if (localStorage.getItem('nerv__timer')) {
        if (Date.parse(localStorage.getItem('nerv__timer')) - new Date() > 0) {
            date_end = localStorage.getItem('nerv__timer');
        } else {
            $(".nerv_modal").addClass("active");   
            timerStop();
        }
    } else {
        date_end = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
        localStorage.setItem('nerv__timer', date_end);
    }

    clearInterval(interval);
    
    interval = setInterval(function() {
        date_now = new Date(),
        date_timer = Date.parse(date_end) - Date.parse(date_now),
        minutes = Math.floor((date_timer % (1000 * 60 * 60)) / (1000 * 60)).toString(),
        seconds = Math.floor((date_timer % (1000 * 60)) / 1000).toString(),
        minutes = (minutes.length == 1) ? '0' + minutes : minutes,
        seconds = (seconds.length == 1) ? '0' + seconds : seconds;     
        
        $(".nerv__timer").html(minutes + ":" + seconds);
        if (seconds < 0 || (minutes == 0 && seconds == 0)) {
            $(".nerv_modal").addClass("active");   
            timerStop();
        }
    }, 1000);
}

function timerStop() {
    localStorage.setItem('nerv__timer', '');
    clearInterval(interval);
}

// Валюта
function formatCurrency(cur) {
    switch (cur.toLowerCase()) {
        case 'rub': return "<span class='rur'>руб</span>"; break;
        case 'rur': return "<span class='rur'>руб</span>"; break;
        case 'eur': return '€'; break;
        case 'kzt': return "₸"; break;
        case 'usd': return "$"; break;
        case 'gbp': return "£"; break;
        case 'byn': return " Br"; break;
        case 'uan': return " грн"; break;
        case 'uah': return " грн"; break;
    }
}

// Номер места
function hoveredNumber(id, s, dc, cx, cy, tr) {
    if ($(".map_place[data-text='" + id + "']").length > 0)
        return;
    var $text = document.createElementNS('http://www.w3.org/2000/svg', 'text'),
        s = s.toString(),
        tr_x = 0,
        tr_y = 0,
        left, 
        top, 
        font_size,
        radius = parseInt($("circle[data-id=" + id + "]").css("r")),
        left_1 = 3.4,
        top_1 = 3,
        font_size_1 = 7,
        left_2 = 3,
        top_2 = 2,
        font_size_2 = 4,
        left_3 = 1.6,
        left_4 = 7;
        
    if (tr && tr.indexOf('rotate') < 0) {
        tr_x = parseInt(tr.slice(tr.indexOf('(') + 1, tr.indexOf(',')));
        tr_y = parseInt(tr.slice(tr.indexOf(',') + 1, tr.indexOf(')')));
    }

    if (radius >= 10) {
        left_1 = 5;
        left_2 = 5.5;
        left_3 = 2.5;

        top_1 = 3.5;
        top_2 = 2.5;

        font_size_1 = 10;
        font_size_2 = 7;
    }

    if (s.length > 1) {
        left = left_1;
        top = top_1;
        font_size = font_size_1;

        if (s.length > 2) {
            left = left_2;
            top = top_2;
            font_size = font_size_2;

            if (s.length > 3) {
                left = left_4;
            }
        }
    } else {
        left = left_3;
        top = top_1;
        font_size = font_size_1;
    }

    // Задаем нужные аттрибуты
    if (!isNaN(cx) && !isNaN(cy) && !isNaN(dc)) {
        $text.setAttribute('data-text', id);
        $text.setAttribute('class', "map_place map_place-" + dc);
        $text.setAttribute('x', cx + tr_x - left);
        $text.setAttribute('y', cy + tr_y + top);
        $text.setAttribute('style', 'font-size: ' + font_size + 'px;');
        $text.innerHTML = s;

        var $check = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        $check.setAttribute('data-path', id);
        $check.setAttribute('style', 'stroke-width: 2; fill: #000000; stroke: #000000; opacity: 1; pointer-events: none !important; display: none;');
        $check.setAttribute('transform', 'translate('+(cx-3)+', '+(cy-2)+') scale(0.65)');
        $check.setAttribute('d', "M10.5793 1.13952L3.7222 7.99666L0.579346 4.8538L1.38506 4.04809L3.7222 6.37952L9.77363 0.333801L10.5793 1.13952Z");

        $("#map svg")[0].appendChild($text);
        $("#map svg")[0].appendChild($check);
    }
}

function tellPos(p) {
            var height = parseInt($(".window-map").css("height")),
                width = parseInt($(".window-map").css("max-width"));

            if (!p.clientX && !p.clientY && window.hoveredEm) {
                var bounds = window.hoveredEm.getBoundingClientRect();
                p.clientX = bounds.x + bounds.width / 2;
                p.clientY = bounds.y + bounds.height / 2;
            }

            $(".window-map").css({
                left: p.clientX - width / 2,
                top: p.clientY - height - from_top
            });
}

function setSEOText(cl, id, phrase) {
    if (phrase.length > cl) {
        $phraseElements = $('[class*=' + id + ']');
        if (cl === 0) {
            $phraseElements.hide();
        } else if (cl === phrase.length - 1) {
            $phraseElements.show();
        } 
        rndTime = Math.floor(Math.random() * 20);
        $phraseElements.append(phrase[cl]);
        setTimeout(function() {setSEOText(cl+1, id, phrase)}, rndTime);
    }
}

// Добавление формы обратного звонка на страницу
function addCallbackForm(event_name, event_date, event_url, selector, is_completed, event_id, seance_id) {
    var event_name__row = "",
        event_date__row = "",
        is_completed__row = "",
        selec = ".callback_form",
        event_id__row = "",
        seance_id__row = "";

    if (typeof selector !== 'undefined' && selector){
        selec = selector;
    }

    if (typeof event_name !== 'undefined' && event_name.length) {
        event_name__row = "event_name=" + encodeURIComponent(event_name);
    }

    if (typeof event_date !== 'undefined' && event_date.length) {
        event_date__row = "&event_date=" + encodeURIComponent(event_date);
    }

    if (typeof is_completed !== 'undefined' && is_completed) {
        is_completed__row = "&is_completed=1";
    }

    if (typeof event_id !== 'undefined' && event_id) {
        event_id__row = "&event_id=" + event_id;
    }

    if (typeof seance_id !== 'undefined' && seance_id) {
        seance_id__row = "&seance_id=" + seance_id;
    }

    $.ajax({
        type: 'GET',
        url: '/callback-ajax/?' + event_name__row + event_date__row + is_completed__row + event_id__row + seance_id__row,
        headers: {
          'lang': window.LANG_CODE
        },
        success: function (response) {
            $(selec).html(response);

            if (event_url && 
                $("body").data("place") == 9 &&
                event_url.indexOf("schelkunchik") != -1) {
                var shel_row = "Цены:\nПартер - 45000 - 95000 руб\nАмфитеатр - 40000 - 90000 руб\nБельэтаж - 40000 - 70000 руб\nБалкон - 20000 - 60000 руб"

                if (window.LANG_CODE != "ru") {
                    shel_row = "Prices:\nParter - 650 - 1350 eur\nAmphitheatre - 550 - 1250 eur\nMezzanine - 550 - 1000 eur\nBalcony - 300 - 850 eur"
                }

                $(".callback_text_normal").hide();
                $(".callback_text_shel").addClass("active");

                $("#callback-form #comment").attr("placeholder", shel_row);
            } else {
                $(".callback_text_normal").show();
                $(".callback_text_shel").removeClass("active");
                $("#callback-form #comment").attr("placeholder", trans.corp_comment);
            }
        }
    });
}

// Добавление формы подписки на страницу
function addSubscribeForm() {
    $.ajax({
        type: 'GET',
        url: '/subscribe-ajax/',
        headers: {
            'lang': window.LANG_CODE
        },
        success: function (response) {
            $(".subscription__wrp").html(response);
        }
    });
}

function getCookie(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

// Кнопка оформить заказ на консьерж сайте
function cartSubmitConc() {
    if ($("body").data('conc') && $("#payment_2").is(':checked')) {
        $(".cart_submit__wrp").addClass("conc");
    } else {
        $(".cart_submit__wrp").removeClass("conc");  
    }
}