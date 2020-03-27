if (typeof prod === "undefined") {
    var get_play_bill = function () {
        return $('.server-datas .event-list >*').clone();

    //return $('<div class="event-box"><strong>Sorry, no perfomances were found!</strong></div>');
    };

    var init_scheme = function () {

    };

    var recount = function () {

    };

    var input = document.querySelector("#ph");
    window.iti =window.intlTelInput(input,{
        utilsScript: "./vendor/tel4/utils.js?1549804213570",
    });
}
else {
    var input = document.querySelector("#ph");
    window.iti =window.intlTelInput(input,{
        utilsScript: "./s1/landing1/vendor/tel4/utils.js?1549804213570",
    });
}

var get_theater_info = function (locationHref) {
    //return $('.server-datas .theaters-data .container-white').clone();
    const fixedHref = locationHref + "?nolayout=true";

    return $.ajax({
        url: fixedHref,
        type: "GET"
    });
};

var get_event_info = function (href) {
    //return $('.server-datas #step2-inactive .container-white').clone();
    return $.ajax({
        url: href,
        type: "GET"
    });
};

var get_place_selector = function (href) {
    //return $('.server-datas .options .options').clone();
    return $.ajax({
        url: href,
        type: "GET"
    });
};


function isTouchDevice() {
    try {
        document.createEvent('TouchEvent');
        return true;
    }
    catch (e) {
        return false;
    }
}

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

(() => {
    const countryData = window.intlTelInputGlobals.getCountryData();

    fillSelect("#address-country");

    function fillSelect(selector) {
        const addressDropdown = document.querySelector(selector);
        const optionNode = document.createElement("option");
        optionNode.value = '';
        optionNode.selected = true;
        const textNode = document.createTextNode('-- Select Country --*');
        optionNode.appendChild(textNode);
        addressDropdown.appendChild(optionNode);

        for (var i = 0; i < countryData.length; i++) {
            const country = countryData[i];
            const optionNode = document.createElement("option");
            optionNode.value = country.iso2;
            //if(optionNode.value == 'us') optionNode.selected = true;
            const textNode = document.createTextNode(country.name);
            optionNode.appendChild(textNode);
            addressDropdown.appendChild(optionNode);
        }
    }
})();

// Детект мобильного браузера
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(function () {

    //Top block code from mariinski
    //какие-то манипуляции
    if (isTouchDevice())
        $('html').addClass('touch');
    window.scrollWidh = getScrollWidth();
    preventScale();

    // Слайдер на главной
    if ($('.slider-top').length) {
        $('.slider-top').slick({
            centerMode: true,
            arrows: false,
            centerPadding: 0
        });
    }
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

    //LIDO LEGACY CODE

    (this),
        function (t, e, i) {
            t.Browser = function () {
                function e() {
                }

                return e.WIDTH = {
                    xxl: 1280,
                    xl: 1140,
                    l: 1024,
                    m: 980,
                    s: 768,
                    xs: 680,
                    xxs: 450
                }, e.isMobile = function () {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                }, e.getIE = function () {
                    var e = t.navigator.userAgent, i = e.indexOf("MSIE ");
                    if (i > 0) return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);
                    if (e.indexOf("Trident/") > 0) {
                        var n = e.indexOf("rv:");
                        return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10)
                    }
                    var s = e.indexOf("Edge/");
                    return s > 0 && parseInt(e.substring(s + 5, e.indexOf(".", s)), 10)
                }, e
            }()
        }

        (window, document), window, document,
        function (t, e, i) {
            t.Event = function () {
                function t() {
                }

                return t.LOAD = "load", t.PLAY = "play", t.PAUSE = "pause", t.END = "end", t.CLICK = Browser.isMobile() ? "touchstart" : "click", t.UP = Browser.isMobile() ? "touchend" : "mouseup", t.ENTER = Browser.isMobile() ? "touchenter" : "mouseenter", t.LEAVE = Browser.isMobile() ? "touchleave" : "mouseleave", t.MOVE = Browser.isMobile() ? "touchmove" : "mousemove", t
            }()
        }

        (window, document), window, document, "function" != typeof Object.assign && (Object.assign = function (t) {
        "use strict";
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        t = Object(t);
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            if (null != i) for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
    }), function (t, e, i, n, s) {
        function r(e, i) {
            this.element = e;
            for (var n = {}, s = 0, r = e.attributes, l = r.length; s < l; s++) n[r[s].nodeName] = r[s].nodeValue;
            return this._options = i, this._attributes = n, this._settings = t.extend({}, o, i, n), this._name = a, this.init(), this
        }
    }

    //navbar and button
    (jQuery, window, document), function (t) {
        t.fixedNav = function (e, i) {
            var n = this;
            n.o = {};
            var s = t(e), r = {};
            n.init = function () {
                n.o = t.extend({}, r, i), t(window).scroll(function () {
                    requestAnimationFrame(w)
                }), t(window).resize(function () {
                    if (s.hasClass("fixed")) {
                        var e = 0;
                        s.parent().prevAll().each(function (i) {
                            e += t(this).outerHeight()
                        }), d = e
                    } else d = s.offset().top;
                    s.css({width: s.parent().width(), left: s.parent().offset().left}), y()
                }), w()
            };
            var a, o, l, c, h, u, d = s.offset().top, f = s.outerHeight(), p = !1, m = 0, g = t("#js-book-btn"),
                _ = Browser.isMobile() || t(window).width() <= Browser.WIDTH.l,
                v = t(_ ? "#js-book-btn-modele-mobile" : "#js-book-btn-modele-desktop");
            _ && g.css({display: "none"});
            var y = function () {
                var e = t(window).width() - (s.find(".container:first-child").offset().left + s.find(".container:first-child").outerWidth());
                g.css({right: e})
            }, w = function () {
                a = t(window).scrollTop(), o = 0, l = 0, n.o.mainHeader && (o = document.getElementById(n.o.mainHeader).offsetHeight, l = document.getElementById(n.o.mainHeader).offsetTop, m = o), s.hasClass("fixed") || (d = s.offset().top), c = d - o - l - 15, h = t(document).height(), a >= c && a <= h ? (p || (s.addClass("fixed"), s.addClass("fixedActive"), p = !0, s.addClass("fixed").css({
                    top: m,
                    left: s.parent().offset().left,
                    width: s.parent().width()
                }), s.next().css({"margin-top": f + o + l + parseInt(0, 10) + "px"}), v.addClass("visibility-hidden"), _ || (g.addClass("fixed"), y())), a > u ? !s.hasClass("topper") && a > 0 && (s.addClass("topper"), setTimeout(function () {
                    t("#js-book-btn").addClass("topper")
                }, 1300)) : a < u && s.hasClass("topper") && (s.removeClass("topper"), setTimeout(function () {
                    t("#js-book-btn").removeClass("topper")
                }, 500))) : (s.removeClass("topper"), s.removeClass("fixedActive"), s.next().css({"margin-top": 0}), p && (s.removeClass("fixed"), p = !1, _ || (g.removeClass("fixed"), v.removeClass("visibility-hidden")))), u = a
            };
            n.init()
        }, t.fn.fixedNav = function (e) {
            return this.each(function () {
                if (void 0 == t(this).data("fixedNav")) {
                    var i = new t.fixedNav(this, e);
                    t(this).data("fixedNav", i)
                }
            })
        }
    }

    //nav like language
    (jQuery, window, document), function (t, e, i, n, s) {
        function r(e, i) {
            this.element = e;
            for (var n = {}, s = 0, r = e.attributes, l = r.length; s < l; s++) n[r[s].nodeName] = r[s].nodeValue;
            return this._options = i, this._attributes = n, this._settings = t.extend({}, o, i, n), this._name = a, this.init(), this
        }

        var a = "nav", o = {position: "top"};
        r.prototype = {
            init: function () {
                this._nav = t(this.element), this._scrollTop = -1, this._height = t(this.element).outerHeight(), this._btn = t(".btn", this.element), this._burger = t(".burger", this.element), this._lang = t(".lang, .links li:first-of-type a", this.element);
                var e = this;
                t(i).on("scroll resize", function (t) {
                    e.onScroll()
                }), t(this._burger).on("click", function (t) {
                    e.toggle(t)
                }), this._lang.on(Event.CLICK, function (t) {
                    e.level(t)
                }), t(".language-switcher-language-url").on("click", function () {
                    0 == t(i).scrollTop() && t("html, body").animate({scrollTop: t(i).height() - 1}, 1e3, function () {
                        t(".topnav-container").removeClass("topper"), i.setTimeout(function () {
                            t(".topnav-container").removeClass("topper")
                        }, 300)
                    })
                })
            }, onScroll: function () {
                this._height = t(this.element).outerHeight();
                this.getVars()
            }, toggle: function (e) {
                e.preventDefault(), this._burger.toggleClass("active"), this._nav.toggleClass("active").removeClass("leveled"), Browser.isMobile() && this._nav.hasClass("active") ? t("body").css("overflow", "hidden") : t("body").css("overflow", "auto")
            }, level: function (t) {
                t.preventDefault(), this._nav.toggleClass("leveled")
            }, move: function (t) {
                e.to(this.element, t.duration, {top: t.top}), Browser.isMobile() || e.to(this._btn, t.duration, {top: t.top <= 0 ? -t.top : 0})
            }, getVars: function () {
                var e = t(i).scrollTop(), n = "top" == this._settings.position ? 0 : t(i).height() - this._height,
                    s = Math.max(-this._height, n - e), r = 0;
                return !this._scrollTop || e > n && this._scrollTop > e ? (s = Math.max(0, s), r = .27) : s == -this._height && (r = .27), this._scrollTop = e, {
                    top: s,
                    duration: r
                }
            }
        }, t.fn[a] = function (e) {
            return this.each(function (i, n) {
                t.data(this, a) || t.data(this, a, new r(this, e))
            })
        }
    }

    //popin (what?)
    (jQuery, window, document), function (t, e, i, n) {
        function s(e, i) {
            this.element = e;
            for (var n = {}, s = 0, o = e.attributes, l = o.length; s < l; s++) n[o[s].nodeName] = o[s].nodeValue;
            return this._options = i, this._attributes = n, this._settings = t.extend({}, a, i, n), this._name = r, this.init(), this
        }

        e.Popin = function () {
            function e() {
            }

            return e.open = function (e) {
                var i = t(e).data("popin");
                i && i.open()
            }, e
        }();
        var r = "popin", a = {};
        s.prototype = {
            init: function () {
                var e = this;
                this._popin = t(this.element), this._btns = t('[href="#' + this._popin.attr("id") + '"]'), this._close = t(".popin__close", this.element), this._overlay = t(".popin__bg", this.element), this._btns.on(Event.CLICK, function (t) {
                    e.onBtn(t)
                }), this._close.on(Event.CLICK, function (t) {
                    e.onClose(t)
                }), this._overlay.on(Event.CLICK, function (t) {
                    e.onClose(t)
                })
            }, onBtn: function (t) {
                t.preventDefault(), this.open()
            }, open: function () {
                this._popin.addClass("popin--active")
            }, onClose: function (t) {
                t.preventDefault(), this.close()
            }, close: function () {
                this._popin.removeClass("popin--active")
            }
        }, t.fn[r] = function (e) {
            return this.each(function (i, n) {
                t.data(this, r) || t.data(this, r, new s(this, e))
            })
        }
    }

    //rPopin (what?)
    (jQuery, window, document), function (t, e, i, n) {
        function s(e, i) {
            this.element = e;
            for (var n = {}, s = 0, o = e.attributes, l = o.length; s < l; s++) n[o[s].nodeName] = o[s].nodeValue;
            return this._options = i, this._attributes = n, this._settings = t.extend({}, a, i, n), this._name = r, this.init(), this
        }

        var r = "rPopin", a = {autoplay: !0};
        s.prototype = {
            init: function () {
                var e = this;
                t(this.element).on(Event.CLICK, function (n) {
                    n.preventDefault();
                    var s = t(this).attr("href");
                    i.getElementById(s.replace("#", "")) && e.showRpopin(s)
                })
            }, whichTransitionEvent: function () {
                var t, e = i.createElement("fakeelement"), n = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    MsTransition: "msTransitionEnd"
                };
                for (t in n) if (void 0 !== e.style[t]) return n[t]
            }, showRpopin: function (e) {
                function i(t) {
                    r[0].removeEventListener(s, i), a.addClass("open")
                }

                function n() {
                    function t(e) {
                        a[0].removeEventListener(s, t), a.removeClass("closing")
                    }

                    a.removeClass("open").addClass("closing"), a[0].addEventListener(s, t), r.removeClass("visible")
                }

                var s = this.whichTransitionEvent(), r = t("#r-popin-mask"), a = t(e), o = a.find(".r-popin-close"),
                    l = a.find(".btn.no");
                r.addClass("visible"), r[0].addEventListener(s, i), o.on(Event.CLICK, function (t) {
                    t.preventDefault(), n()
                }), l.on(Event.CLICK, function (t) {
                    t.preventDefault(), n()
                }), r.on(Event.CLICK, function (t) {
                    t.preventDefault(), n()
                })
            }
        }, t.fn[r] = function (e) {
            return this.each(function (i, n) {
                t.data(this, r) || t.data(this, r, new s(this, e))
            })
        }
    }

    //section reveal
    (jQuery, window, document), function (t, e, i, n) {
        function s(e, i) {
            this.element = e;
            for (var n = {}, s = 0, o = e.attributes, l = o.length; s < l; s++) n[o[s].nodeName] = o[s].nodeValue;
            return this._options = i, this._attributes = n, this._settings = t.extend({}, a, i, n), this._name = r, this.init(), this
        }

        var r = "section", a = {};
        s.prototype = {
            init: function () {
                t(this.element).find(".reveal").each(function (e, i) {
                    t(i).css("transition-delay", .1 * e + "s")
                });
                var i = this;
                t(e).scroll(function (t) {
                    i.onScroll()
                }), this.onScroll()
            }, onScroll: function () {
                var i = t(this.element);
                t(e).scrollTop() + .7 * t(e).height() > i.offset().top ? i.addClass("active") : i.removeClass("active")
            }
        }, t.fn[r] = function (e) {
            return this.each(function (i, n) {
                t.data(this, r) || t.data(this, r, new s(this, e))
            })
        }
    }

    //selects (obso?)
    (jQuery, window, document), function (t, e, i, n) {
        function s(e, i) {
            this.element = e;
            for (var n = {}, s = 0, o = e.attributes, l = o.length; s < l; s++) n[o[s].nodeName] = o[s].nodeValue;
            return this._options = i, this._attributes = n, this._settings = t.extend({}, a, i, n), this._name = r, this.init(), this
        }

        var r = "select", a = {};
        s.prototype = {
            init: function () {
                Browser.isMobile() || t(this.element).customSelect()
            }
        }, t.fn[r] = function (e) {
            return this.each(function (i, n) {
                t.data(this, r) || t.data(this, r, new s(this, e))
            })
        }
    }

    //dont delete --> selects somehow (obso?)
    (jQuery, window, document), function (t, e) {
    }

    //main
    (jQuery, window, document), function (t, e, i, n) {
        function s() {
            this.init()
        }

        s.prototype = {
            init: function () {
                function n(t, e) {
                    var n;
                    "createEvent" in i ? ((n = i.createEvent("HTMLEvents")).initEvent(e, !1, !0), t.dispatchEvent(n)) : ((n = i.createEventObject()).eventType = e, t.fireEvent("on" + n.eventType, n))
                }

                function s() {
                    if ((r.innerWidth || o.clientWidth || l.clientWidth) > 1024) {
                        if ("desktop" == c) return;
                        c = "desktop"
                    } else {
                        if ("mobile" == c) return;
                        c = "mobile"
                    }
                    i.querySelectorAll('[data-responsive="true"]').forEach(function (t) {
                        var e = "url(" + t.getAttribute("data-" + c) + ")";
                        t.style.backgroundImage = e
                    })
                }

                e.lang = t("html").attr("lang"),
                    e.dateFormat = "d.m.Y",
                    e.currency = "€",
                    t(".popin").popin(),
                    t(".section").section(),
                    Browser.isMobile(),
                    t(".full-height").css("height", t(e).height() + "px"),
                    t(e).on("resize", function () {
                        t(".full-height").css("height", t(e).height() + "px")
                    });
                var r = e, a = i, o = a.documentElement, l = a.getElementsByTagName("body")[0];
                e.addEventListener("resize", function () {
                    this.resizeTO && clearTimeout(this.resizeTO), this.resizeTO = setTimeout(function () {
                        n(this, "resizeEnd")
                    }, 500)
                }), NodeList.prototype.forEach || (NodeList.prototype.forEach = Array.prototype.forEach), HTMLCollection.prototype.forEach || (HTMLCollection.prototype.forEach = Array.prototype.forEach);
                var c = "desktop";

                s(),
                    e.addEventListener("resizeEnd", function () {
                        s()
                    }),
                    t("#nav").nav({position: t("#header").length && !Browser.isMobile() ? "bottom" : "top"}),
                    t(".topnav-container").fixedNav()
            }
        },
            t('[href="#"]').click(function () {
                return !1
            }),
            t(i).ready(function () {
                new s
            })
    }(jQuery, window, document);

    //END OF LIDO LEGACY CODE

    //custom flatpickr plugin
    (() => {
        const $flatPickr = $('.js-flatpickr');

        $flatPickr.flatpickr({
            mode: "range",
            minDate: "today",
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d"
        });

    })();

    //regaloeb plugin
    (() => {

        $(".js-regaloeb").regaloebParallax();

    })();

    //custom select plugin
    (() => {
        $('.form-item:not(".quantity") select').customSelect();
    })();

    //modals control (not done)
    (() => {
        const $orderModal = $('.js-order-modal');
        const $orderModalTrigger = $('.js-order-modal-trigger');
        const $orderModalClose = $('.js-order-modal-close');

        const $theaterModal = $('.js-theater-modal');
        const $theaterModalContent = $theaterModal.find('.tm-modal-content');
        const $theaterModalClose = $('.js-theater-modal-close, .js-theater-modal-close .tm-modal-close');

        const $orderModal2 = $('.js-order-modal-2');
        const $orderModalClose2 = $('.js-order-modal-close-2');
        const $orderModalReturn2 = $('.js-order-modal-return-2');

        const $termsModal = $('.js-terms-modal');
        const $termsModalTrigger = $('.js-terms-modal-trigger');
        const $termsModalClose = $('.js-terms-modal-close, .js-terms-modal-close .tm-modal-close');

        const $privacyModal = $('.js-privacy-modal');
        const $privacyModalTrigger = $('.js-privacy-modal-trigger');
        const $privacyModalClose = $('.js-privacy-modal-close, .js-privacy-modal-close .tm-modal-close');

        const $contactModal = $('.js-contact-modal');
        const $contactModalTrigger = $('.js-contact-modal-trigger');
        const $contactModalClose = $('.js-contact-modal-close, .js-contact-modal-close .tm-modal-close');

        const $jsSubmitStageOne = $('.js-submit-stage-1');

        const $mainForm = $('.js-form-main');
        const $modalFormOne = $orderModal.find('.step1 form');

        $theaterModalClose.on('click', function (e) {
            if (e.target !== this) return;
            $theaterModal.hide();
            //$('body').removeClass('body-noscroll');
        });

        $termsModalTrigger.on('click', function (e) {
            e.preventDefault();

            $termsModal.show();
            $('body').addClass('body-noscroll');
        });

        $termsModalClose.on('click', function (e) {
            if (e.target !== this) return;
            $termsModal.hide();
            $('body').removeClass('body-noscroll');
        });

        $privacyModalTrigger.on('click', function (e) {
            e.preventDefault();

            $privacyModal.show();
            $('body').addClass('body-noscroll');
        });

        $privacyModalClose.on('click', function (e) {
            if (e.target !== this) return;
            $privacyModal.hide();
            $('body').removeClass('body-noscroll');
        });

        $contactModalTrigger.on('click', function (e) {
            e.preventDefault();

            $contactModal.show();
            $('body').addClass('body-noscroll');
        });

        $contactModalClose.on('click', function (e) {
            if (e.target !== this) return;
            $contactModal.hide();
            $('body').removeClass('body-noscroll');
        });

        $mainForm.on('submit', function (e) {
            e.preventDefault();
        });

        $orderModalTrigger.on('click', function () {
            transferFormMain();
            $orderModal.show();
            $('body').addClass('body-noscroll');
        });

        $orderModalClose.on('click', function () {
            $orderModal.hide();
            $('body').removeClass('body-noscroll');
            // $orderModal.find('.reservation-tunnel .step.step2').removeClass('active');
            // $orderModal.find('.reservation-tunnel .step.step3').removeClass('active');
        });

        $orderModalClose2.on('click', function () {
            $orderModal2.hide();
            $('body').removeClass('body-noscroll');
            // $orderModal.find('.reservation-tunnel .step.step2').removeClass('active');
            // $orderModal.find('.reservation-tunnel .step.step3').removeClass('active');
        });

        $orderModalReturn2.on('click', function () {
            $orderModal2.hide();
            $orderModal.show();
            //$orderModal.find('.reservation-tunnel .step.step2').addClass('active');
        });

        $jsSubmitStageOne.on('click', async function (e) {
            if (!$(this).hasClass('active')) return;

            const $oldData = $('.step.step2 .offers >*:nth-child(n+2)');
            $oldData.remove();

            let $triggerButton;

            $(this).addClass('loading');
            await ajaxStageOne();
            $(this).removeClass('loading');

            const $jsSubmitStageTwo = $('.event-box .btn.btn-danger');

            $jsSubmitStageTwo.on('click', function (e) {
                e.preventDefault();
                const locationHref = $(this).attr('href');
                const fixedHref = locationHref.slice(0,-6) + "?nolayout=true";

                const $oldData = $('.step.step3 .options .options, .step.step3 .options >div');
                $oldData.remove();

                $('.reservation-tunnel .step.step3').addClass('loading');
                ajaxStageTwo(fixedHref);

            });

        });

        //ajax and processing / modal 1-2 (not done)
        async function ajaxStageOne() {
            const $destinationHolder = $('.reservation-tunnel .step.step2 .offers');
            const $rawData = await get_play_bill();
            const checkContent = $($rawData).find('.buttons');
            if(!checkContent.length) {
                //$('<div>Ничего не найдено.</div>').appendTo($destinationHolder);
                $rawData.appendTo($destinationHolder);
                readyStageTwo();
                return;
            }
            const $eventList = $('<div class="event-list js-custom-scrollbar"></div>');

            const $showMoreBlock = $(
                '<div class="show-more-block">\n' +
                '    <a href="#" class="show-menu">Show\n' +
                '    details</a>' +
                '</div>');

            $rawData.appendTo($eventList);
            $eventList.appendTo($destinationHolder);

            fixImages($destinationHolder, 2);

            const $eventBoxes = $destinationHolder.find('.event-box');
            $showMoreBlock.appendTo($eventBoxes);

            readyStageTwo();
            initTheaterModal();

            $eventBoxes.each(function () {
                const $moreBlock = $(this).find('.show-more-block');
                const $showTrigger = $moreBlock.find('.show-menu');
                const linkHref = $(this).find('.btn.btn-primary').attr('href');

                let openMore = false;
                let loaded = false;

                $showTrigger.on('click', async function (e) {
                    e.preventDefault();

                    if (!loaded) {
                        //ajax2 here
                        await ajaxStageOneShowMore($moreBlock, linkHref);
                        loaded = true;
                    }

                    const $containerWhite = $moreBlock.find('.container-white');

                    //$containerWhite.addClass('loaded');

                    if (!openMore) {
                        $containerWhite.slideDown(500).fadeIn({duration: 500, queue: false});
                        $showTrigger.html('Hide details');
                        openMore = true;
                        $containerWhite.find('.carousel-inner').slick();
                    }
                    else {
                        $containerWhite.fadeOut(500).slideUp({duration: 500, queue: false});
                        $showTrigger.html('Show details');
                        openMore = false;
                        $containerWhite.find('.carousel-inner').slick('unslick');
                    }
                });
            });

            initTriggerButton();
        }

        function readyStageTwo() {
            $orderModal.find('.step2 .inactive').fadeOut();
            $orderModal.find('.step2 .offers').slideDown(500).fadeIn({duration: 500, queue: false});

            $orderModal.find('.step3 .inactive').fadeIn();
            $orderModal.find('.step3 .options').fadeOut(500).slideUp({duration: 500, queue: false});

            $orderModal.find('.reservation-tunnel .step.step2').addClass('active');
            $orderModal.find('.reservation-tunnel .step.step3').removeClass('active');

            $orderModal.find('.reservation-tunnel .step.step2 .js-custom-scrollbar').mCustomScrollbar({
                scrollbarPosition: "outside",
                autoHideScrollbar: false,
                theme: "dark",
                mouseWheel: {scrollAmount: 200},
                advanced: {updateOnContentResize: true}
            });
        }

        function initTheaterModal($theaterModalTrigger = $('.event-list .event-header .place-info')) {

            //$theaterModalTrigger.attr('href', '#');

            $theaterModalTrigger.on('click', function (e) {
                e.preventDefault();

                const locationHref = $(this).attr('href');

                $theaterModalContent.mCustomScrollbar("destroy");

                const $oldData = $theaterModalContent.find('>*');
                $oldData.remove();

                ajaxStageOneTheaters(locationHref);
            });
        }

        //ajax and processing / modal 1-2 theaters modal (not done)
        async function ajaxStageOneTheaters(locationHref) {
            //ajax imitation
            const $destinationHolder = $theaterModalContent;
            const $rawHtml = await get_theater_info(locationHref);
            const $rawData = $($rawHtml);
            console.log($rawData);
            const $carouselPlace = $rawData.find('.carousel').parent();
            const $rawImages = $carouselPlace.find('.carousel-inner img');
            const $sliderHolder = $('<div></div>');
            const $panelAccordions = $rawData.find('.panel-group .panel');

            $rawData.find('>.row >*:nth-child(2),.btn.btn-primary, >.row:nth-child(2), >p, .jumbotron').remove();
            $rawData.find('>.row >*').removeClass('col-sm-8 col-md-8');

            $rawImages.each(function () {
                const $currImg = $(this);
                const oldSrc = $currImg.attr('src');
                const newSrc = 'https://russianbroadway.com' + oldSrc;

                $currImg.attr('src', newSrc);
                $currImg.appendTo($('<div></div>')).appendTo($sliderHolder);
            });


            $carouselPlace.find('.carousel').remove();

            fixImages($rawData);

            $sliderHolder.prependTo($carouselPlace);

            $rawData.appendTo($destinationHolder);

            // var $containerWhite = $holder.find('.container-white');

            $sliderHolder.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                infinite: true
            });

            $panelAccordions.each(function () {
                const $trigger = $(this).find('.panel-heading a');
                const $data = $(this).find('.panel-collapse');

                $trigger.on('click', function (e) {
                    e.preventDefault();
                    $data.toggleClass('open');
                    $(this).parent().toggleClass('active');
                })
            });

            $theaterModal.show();
            //$('body').addClass('body-noscroll');

            $theaterModalContent.mCustomScrollbar({
                //scrollbarPosition: "outside",
                autoHideScrollbar: false,
                theme: "dark",
                mouseWheel: {scrollAmount: 300},
                advanced: {updateOnContentResize: true}
            });
        }

        //ajax and processing / modal 1-2 show more (not done)
        async function ajaxStageOneShowMore($holder, rawHref) {
            //ajax imitation
            const $destinationHolder = $holder;
            const fixedHref = rawHref + "?nolayout2=true"
            const $rawHtml = await get_event_info(fixedHref);
            const $rawData = $($rawHtml).find('.container-white');
            const $rawImages = $rawData.find('.carousel-inner img');
            const $sliderHolder = $('<div></div>');
            const $panelAccordions = $rawData.find('.panel-group .panel');

            $rawImages.each(function () {
                const $currImg = $(this);
                const oldSrc = $currImg.attr('src');
                const newSrc = 'https://russianbroadway.com' + oldSrc;

                $currImg.attr('src', newSrc);
                $currImg.appendTo($('<div></div>')).appendTo($sliderHolder);
            });

            $rawData.find('.carousel').remove();

            fixImages($rawData);

            $sliderHolder.prependTo($rawData);

            $rawData.appendTo($destinationHolder);

            // var $containerWhite = $holder.find('.container-white');

            $sliderHolder.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                infinite: true
            });

            $('[data-gallery="multiimages"]').fancybox({

            });

            $panelAccordions.each(function () {
                const $trigger = $(this).find('.panel-heading a');
                const $data = $(this).find('.panel-collapse');

                $trigger.on('click', function (e) {
                    e.preventDefault();
                    $data.toggleClass('open');
                    $(this).parent().toggleClass('active');
                })
            })

        }

        //ajax and processing / modal 1-3 (not done)
        async function ajaxStageTwo(href) {
            //ajax imitation

            const $destinationHolder = $('.reservation-tunnel .step.step3 .options');
            const $rawHtml = await get_place_selector(href);
            const $rawData = $($rawHtml);
            const $wrapper = $('<div class="js-custom-scrollbar"></div>')

            $rawData.appendTo($wrapper);

            $wrapper.find('>*:nth-child(-n+1)').remove();
            //$rawData.filter('p:first-child').remove();
            //$rawData.filter('>.form-group:first-child').remove();
            //$rawData.filter('>.form-group:first-child').remove();
            // $rawData.filter('.form-group>p:last-child').remove();
            // $rawData.filter('>.form-group:last-child').remove();
            // $rawData.filter('>.form-group:last-child').remove();

            $wrapper.appendTo($destinationHolder);


            $('<div class="form-group button-group">\n' +
                '    <a class="btn next1 js-order-modal-trigger-2" href="#">Confirm order</a>\n' +
                '</div>').appendTo($destinationHolder);

            fixImages($destinationHolder);

            readyStageThree();
        }

        function readyStageThree() {
            $orderModal.find('.step3 .inactive').fadeOut();
            $orderModal.find('.step3 .options').slideDown(500).fadeIn({duration: 500, queue: false});

            $orderModal.find('.reservation-tunnel .step.step3').addClass('active').removeClass('loading');

            init_scheme();

            $orderModal.find('.reservation-tunnel .step.step3 .js-custom-scrollbar').mCustomScrollbar({
                scrollbarPosition: "outside",
                autoHideScrollbar: false,
                theme: "dark",
                mouseWheel: {scrollAmount: 200},
                advanced: {updateOnContentResize: true}
            });

            const $orderModalTrigger2 = $('.js-order-modal-trigger-2');

            $orderModalTrigger2.on('click', function (e) {
                e.preventDefault();
                $orderModal.hide();
                $orderModal2.show();
                recount();
            });
        }

        //main form transfer
        function transferFormMain() {
            const quantity = $mainForm.find('[name="na"]').val();
            const dateRange = $mainForm.find('.flatpickr-input').val();

            $modalFormOne.find('[name="na"]').val(quantity);
            $modalFormOne.find("#modalFlatpickr").each(function () {
                this._flatpickr.setDate(dateRange);
            })
        }

        //
        function initTriggerButton() {
            $triggerButton = $('.reservation-tunnel .buttons-action a');
            $triggerButton.attr('href', '#');

            const string = $triggerButton.attr('onclick');

            const dataStart = string.indexOf('getresult') + 11;
            const dataEnd = string.indexOf("'", dataStart);
            const pageStart = dataEnd + 3;
            const pageEnd = string.indexOf(")", pageStart);
            newData = string.slice(dataStart, dataEnd);
            newPage = string.slice(pageStart, pageEnd);

            $triggerButton.attr('onclick', '');

            $triggerButton.on('click', function () {
                getresult(newData, newPage, $(this));
            });
        }

        //load more pages
        async function getresult(date, page, $triggerButton) {
            const $destinationHolder = $triggerButton.parent().parent();
            const $rawData = await get_play_bill(date, page);

            const $showMoreBlock = $(
                '<div class="show-more-block">\n' +
                '    <a href="#" class="show-menu">Show\n' +
                '    details</a>' +
                '</div>');

            $rawData.appendTo($destinationHolder);

            const $eventBoxes = $rawData.filter('.event-box');

            $showMoreBlock.appendTo($eventBoxes);

            fixImages($rawData);

            initTheaterModal($rawData.find('.event-header .place-info'));

            $eventBoxes.each(function () {
                const $moreBlock = $(this).find('.show-more-block');
                const $showTrigger = $moreBlock.find('.show-menu');

                let openMore = false;
                let loaded = false;

                $showTrigger.on('click', async function (e) {
                    e.preventDefault();

                    if (!loaded) {
                        //ajax2 here
                        await ajaxStageOneShowMore($moreBlock);
                        loaded = true;
                    }

                    const $containerWhite = $moreBlock.find('.container-white');

                    //$containerWhite.addClass('loaded');

                    if (!openMore) {
                        $containerWhite.slideDown(500).fadeIn({duration: 500, queue: false});
                        $showTrigger.html('Hide details');
                        openMore = true;
                        $containerWhite.find('.carousel-inner').slick();
                    }
                    else {
                        $containerWhite.fadeOut(500).slideUp({duration: 500, queue: false});
                        $showTrigger.html('Show details');
                        openMore = false;
                        $containerWhite.find('.carousel-inner').slick('unslick');
                    }
                });
            });

            $triggerButton.remove();

            initTriggerButton();

        }

        //playbill images and image links fix (to check)
        function fixImages($holder, type = 1) {
            const $playbillContent = $holder;
            const $playbillImages = $playbillContent.find('img');
            if(type === 2) {
                const $playbillLinks = $playbillContent.find('>.panel a:not(.place-info, .btn)');
            }
            const $playbillLinks = $playbillContent.find('a:not(.place-info, .btn)');

            $playbillImages.each(function () {
                const $currImg = $(this);
                const oldSrc = $currImg.attr('src');
                const newSrc = 'https://russianbroadway.com' + oldSrc;

                $currImg.attr('src', newSrc);
            });

            $playbillLinks.each(function () {
                const $currLnk = $(this);
                const oldSrc = $currLnk.attr('href');
                const newSrc = 'https://russianbroadway.com' + oldSrc;

                $currLnk.attr('href', newSrc);
            });
        }

    })();

    //quantity controller
    (() => {
        const $quantityHolders = $('.quantity');

        $quantityHolders.each(function () {
            const $quantityHolder = $(this);
            const $quantityTriggerLess = $quantityHolder.find('.less');
            const $quantityTriggerMore = $quantityHolder.find('.more');
            const $quantitySelect = $quantityHolder.find('select');

            $quantityTriggerLess.on('click', function () {
                const selectedItem = $quantitySelect.find('option:selected').index();
                if (selectedItem === 0) return;
                $quantitySelect.find('option').removeAttr('selected');
                $quantitySelect.find('option:nth-child(' + (selectedItem) + ')').attr('selected', 'selected');
                $('#spinEdit').change();
            });

            $quantityTriggerMore.on('click', function () {
                const selectedItem = $quantitySelect.find('option:selected').index();
                if (selectedItem === $quantitySelect.find('option:last-child').index()) return;
                $quantitySelect.find('option').removeAttr('selected');
                $quantitySelect.find('option:nth-child(' + (selectedItem + 2) + ')').attr('selected', 'selected');
                $('#spinEdit').change();
            });
        })

    })();

    //gift check transfer
    (() => {
        const $giftTrigger = $('.js-gift-trigger');
        const $giftChecker = $('#edit-is-gift-yes, #edit-is-gift-yes1');

        $giftTrigger.on('click', function () {
            $giftChecker.click();
        })
    })();

    //dropdowns with checkboxes
    (() => {
        const $dropdownInputs = $('.tm-dropdown-inputs');
        const $allSelector = $('.js-all-trigger');
        const $clearSelector = $('.js-clear-trigger');

        $allSelector.on('click', function () {
            $(this).parent().find('[type="checkbox"]').prop('checked', true);
            $(this).parent().find('[type="checkbox"]:first-child').trigger('change');
        });

        $clearSelector.on('click', function () {
            $(this).parent().find('[type="checkbox"]:first-child').prop('checked', false);
            $(this).parent().find('[type="checkbox"]:first-child').trigger('change');
        });


        $dropdownInputs.each(function () {
            const $dropdownInput = $(this);
            const $dropdownSelect = $dropdownInput.find('>span');
            const $dropdownContainer = $dropdownInput.find('.tm-dropdown-content');
            const $dropdownCheckboxes = $dropdownContainer.find('.tm-input');
            const dropdownType = $dropdownInput.hasClass('tm-input-theaters') ? 'T' : 'G';

            $dropdownInput.on('click', function () {

                $dropdownInput.toggleClass('active');

                $(document).on('click', closeOutside);

                function closeOutside() {

                    if ($(event.target).parents('.tm-dropdown-inputs').length || $(event.target).is($dropdownInput)) return;
                    $dropdownInput.removeClass('active');
                    $(document).off('click', closeOutside);
                }

            })

            $dropdownCheckboxes.on('change', function () {
                $dropdownSelect.text(getTheaterName($dropdownContainer, dropdownType, $dropdownCheckboxes.length));
            })

        });

        function getTheaterName($container, type, max) {
            const $selectedItems = $container.find('.tm-input:checked');
            let allName;

            switch(type) {
                case 'T':
                    allName = " theaters";
                    break;
                case 'G':
                    allName = " genres";
                    break;
            }

            switch($selectedItems.length) {
                case 0:
                case max:
                    return "All" + allName;
                case 1:
                    return $selectedItems.parent().text();
                default:
                    return $selectedItems.length + allName;
            }
        }
    })();

    //
    (() => {
        const $scrollbars = $('.checkout__content, .reservation-tunnel .step.step1');

        $scrollbars.mCustomScrollbar({
            //scrollbarPosition: "outside",
            theme: "dark",
            mouseWheel: {scrollAmount: 300},
            advanced: {updateOnContentResize: true}
        });

    })();

    (() => {
        const $giftYes = $('#edit-is-gift-yes, #edit-is-gift-yes1');
        const $giftNo = $('#edit-is-gift-no, #edit-is-gift-no1');
        const $giftEdit = $('#edit-gift');

        $giftYes.on('change', function () {

            if($(this).prop('checked') === true) {
                $giftEdit.addClass('active');
                $giftYes.each(function () {
                    $(this).prop('checked', true);
                })
            }
        });

        $giftNo.on('change', function () {

            if($(this).prop('checked') === true) {
                $giftEdit.removeClass('active');
                $giftNo.each(function () {
                    $(this).prop('checked', true);
                })
            }
        });
    })();


});