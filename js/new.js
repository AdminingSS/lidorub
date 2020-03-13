$(document).ready(function () {

    //LEGACY CODE

    (this),
        // function (t) {
        //     var e = !1;
        //     if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
        //         var i = window.Cookies, n = window.Cookies = t();
        //         n.noConflict = function () {
        //             return window.Cookies = i, n
        //         }
        //     }
        // }
        //
        // (function () {
        //     function t() {
        //         for (var t = 0, e = {}; t < arguments.length; t++) {
        //             var i = arguments[t];
        //             for (var n in i) e[n] = i[n]
        //         }
        //         return e
        //     }
        //
        //     function e(i) {
        //         function n(e, s, r) {
        //             var a;
        //             if ("undefined" != typeof document) {
        //                 if (arguments.length > 1) {
        //                     if ("number" == typeof(r = t({path: "/"}, n.defaults, r)).expires) {
        //                         var o = new Date;
        //                         o.setMilliseconds(o.getMilliseconds() + 864e5 * r.expires), r.expires = o
        //                     }
        //                     r.expires = r.expires ? r.expires.toUTCString() : "";
        //                     try {
        //                         a = JSON.stringify(s), /^[\{\[]/.test(a) && (s = a)
        //                     } catch (t) {
        //                     }
        //                     s = i.write ? i.write(s, e) : encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
        //                     var l = "";
        //                     for (var c in r) r[c] && (l += "; " + c, !0 !== r[c] && (l += "=" + r[c]));
        //                     return document.cookie = e + "=" + s + l
        //                 }
        //                 e || (a = {});
        //                 for (var h = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < h.length; d++) {
        //                     var f = h[d].split("="), p = f.slice(1).join("=");
        //                     this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));
        //                     try {
        //                         var m = f[0].replace(u, decodeURIComponent);
        //                         if (p = i.read ? i.read(p, m) : i(p, m) || p.replace(u, decodeURIComponent), this.json) try {
        //                             p = JSON.parse(p)
        //                         } catch (t) {
        //                         }
        //                         if (e === m) {
        //                             a = p;
        //                             break
        //                         }
        //                         e || (a[m] = p)
        //                     } catch (t) {
        //                     }
        //                 }
        //                 return a
        //             }
        //         }
        //
        //         return n.set = n, n.get = function (t) {
        //             return n.call(n, t)
        //         }, n.getJSON = function () {
        //             return n.apply({json: !0}, [].slice.call(arguments))
        //         }, n.defaults = {}, n.remove = function (e, i) {
        //             n(e, "", t(i, {expires: -1}))
        //         }, n.withConverter = e, n
        //     }
        //
        //     return e(function () {
        //     })
        // }),
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

    //popin
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

    //rPopin
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

    //selects
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

    //dont delete --> selects somehow
    (jQuery, window, document), function (t, e) {
    }

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
                    //t(".booking").booking(),
                    t("#nav").nav({position: t("#header").length && !Browser.isMobile() ? "bottom" : "top"}),
                    t(".topnav-container").fixedNav()//,
                //t(".ticketing").ticketing()//,
                //t(".checkout").checkout()
            }
        },
            t('[href="#"]').click(function () {
                return !1
            }),
            t(i).ready(function () {
                new s
            })
    }(jQuery, window, document);

    //END OF LEGACY CODE

    //custom flatpickr
    (() => {
        const $flatPickr = $('.js-flatpickr');

        $flatPickr.flatpickr({
            mode: "range",
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d"
        });

    })();

    //modals control
    (() => {
        const $orderModal = $('.js-order-modal');
        const $orderModalTrigger = $('.js-order-modal-trigger');
        const $orderModalClose = $('.js-order-modal-close');

        const $orderModal2 = $('.js-order-modal-2');
        const $orderModalClose2 = $('.js-order-modal-close-2');
        const $orderModalReturn2 = $('.js-order-modal-return-2');

        const $jsSubmitStageOne = $('.js-submit-stage-1');

        const $mainForm = $('.js-form-main');
        const $modalFormOne = $orderModal.find('.step1 form');

        $mainForm.on('submit', function (e) {
            e.preventDefault();
        });

        //main form transfer
        function transferFormMain() {
            const quantity = $mainForm.find('[name="na"]').val();
            const dateRange = $mainForm.find('.flatpickr-input').val();

            $modalFormOne.find('[name="na"]').val(quantity);
            $modalFormOne.find("#modalFlatpickr").each(function () {
                this._flatpickr.setDate(dateRange);
            })
        }

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

        $jsSubmitStageOne.on('click', function (e) {
            if (!$(this).hasClass('active')) return;

            const $oldData = $('.step.step2 .offers .event-list');
            $oldData.remove();

            ajaxStageOne();
            //ajax things
            // const $formElement = $(this).parents('form');
            // const $aForm = $formElement[0];
            // const data = new FormData($aForm);
            //let allowContinue = sendData(data) || false;
            // function sendData(data) {
            //
            //     $.ajax({
            //         url:     '/dir/site.php',
            //         type:     "POST",
            //         enctype: 'multipart/form-data',
            //         processData: false,
            //         contentType: false,
            //         data: data,
            //         success: function(response) {
            //             return true;
            //             //здесь если надо обработать выдачу
            //         },
            //         error: function(response) {
            //             setTimeout(function () {
            //                 alert('Ошибка. Данные не отправлены.');
            //             }, 2000);
            //         }
            //     });
            // }
            //if(!allowContinue) return;

            $orderModal.find('.step2 .inactive').fadeOut();
            $orderModal.find('.step2 .offers').slideDown(500).fadeIn({duration: 500, queue: false});

            $orderModal.find('.step3 .inactive').fadeIn();
            $orderModal.find('.step3 .options').fadeOut(500).slideUp({duration: 500, queue: false});

            $orderModal.find('.reservation-tunnel .step.step2').addClass('active');
            $orderModal.find('.reservation-tunnel .step.step3').removeClass('active');

            //$(".js-custom-scrollbar").mCustomScrollbar("update");

            $orderModal.find('.reservation-tunnel .step.step2 .js-custom-scrollbar').mCustomScrollbar({
                scrollbarPosition: "outside",
                autoHideScrollbar: false,
                theme: "dark",
                mouseWheel: {scrollAmount: 200},
                advanced: {updateOnContentResize: true}
            });

            //theater modals
            const $theaterModal = $('.js-theater-modal');
            const $theaterModalContent = $theaterModal.find('.tm-modal-content');
            const $theaterModalTrigger = $('.event-list .event-header .place-info');
            const $theaterModalClose = $('.js-theater-modal-close, .tm-modal-close');

            // $theaterModalContent.mCustomScrollbar({
            //     //scrollbarPosition: "outside",
            //     autoHideScrollbar: false,
            //     theme: "dark",
            //     mouseWheel: {scrollAmount: 300},
            //     advanced: {updateOnContentResize: true}
            // });

            $theaterModalTrigger.attr('href','#');

            $theaterModalTrigger.on('click', function (e) {
                e.preventDefault();

                $theaterModalContent.mCustomScrollbar("destroy");

                const $oldData = $theaterModalContent.find('>*');
                $oldData.remove();

                ajaxStageOneTheaters($theaterModalContent);

                $theaterModal.show();
                //$('body').addClass('body-noscroll');

                $theaterModalContent.mCustomScrollbar({
                    //scrollbarPosition: "outside",
                    autoHideScrollbar: false,
                    theme: "dark",
                    mouseWheel: {scrollAmount: 300},
                    advanced: {updateOnContentResize: true}
                });
            });

            $theaterModalClose.on('click', function (e) {
                if(e.target !== this) return;
                $theaterModal.hide();
                //$('body').removeClass('body-noscroll');
            });
            //theater modals end

            //more button
            const $eventBoxes = $orderModal.find('.event-box');

            $eventBoxes.each(function () {
                const $moreBlock = $(this).find('.show-more-block');
                const $showTrigger = $moreBlock.find('.show-menu');

                let openMore = false;
                let loaded = false;

                $showTrigger.on('click', function (e) {
                    e.preventDefault();

                    if (!loaded) {
                        //ajax2 here
                        ajaxStageOneShowMore($moreBlock);
                        loaded = true;
                    }

                    const $containerWhite = $moreBlock.find('.container-white');

                    //$containerWhite.addClass('loaded');

                    if (!openMore) {
                        $containerWhite.slideDown(500).fadeIn({duration: 500, queue: false});
                        $showTrigger.html('Скрыть подробности');
                        openMore = true;
                        $containerWhite.find('.carousel-inner').slick();
                    }
                    else {
                        $containerWhite.fadeOut(500).slideUp({duration: 500, queue: false});
                        $showTrigger.html('Показать подробности');
                        openMore = false;
                        $containerWhite.find('.carousel-inner').slick('unslick');
                    }


                });
            });

            const $jsSubmitStageTwo = $('.event-box .btn.btn-danger');

            $jsSubmitStageTwo.on('click', function (e) {
                e.preventDefault();

                const $oldData = $('.step.step3 .options .options, .step.step3 .options .form-group');
                $oldData.remove();

                ajaxStageTwo();

                $orderModal.find('.step3 .inactive').fadeOut();
                $orderModal.find('.step3 .options').slideDown(500).fadeIn({duration: 500, queue: false});

                $orderModal.find('.reservation-tunnel .step.step3').addClass('active');

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
                });
            });

        });


    })();

    function ajaxStageOne() {
        //ajax imitation
        const $destinationHolder = $('.reservation-tunnel .step.step2 .offers');
        const $rawData = $('.server-datas .event-list').clone();
        const $eventBoxes = $rawData.find('.event-box');
        const $showMoreBlock = $(
            '<div class="show-more-block">\n' +
            '    <a href="#" class="show-menu">Показать\n' +
            '    подробности</a>' +
            '</div>');

        $showMoreBlock.appendTo($eventBoxes);

        $rawData.appendTo($destinationHolder);

        fixImages($destinationHolder);
    }

    function ajaxStageOneTheaters($holder) {
        //ajax imitation
        const $destinationHolder = $holder;
        const $rawData = $('.server-datas .theaters-data .container-white').clone();
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
    }

    function ajaxStageOneShowMore($holder) {
        //ajax imitation
        const $destinationHolder = $holder;
        const $rawData = $('.server-datas #step2-inactive .container-white').clone();
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

    function ajaxStageTwo() {
        //ajax imitation
        const $destinationHolder = $('.reservation-tunnel .step.step3 .options');
        const $rawData = $('.server-datas .options .options').clone();

        $rawData.find('>.form-group:first-child').remove();
        $rawData.find('>.form-group:first-child').remove();
        $rawData.find('.form-group>p:last-child').remove();
        $rawData.find('>.form-group:last-child').remove();
        $rawData.find('>.form-group:last-child').remove();

        $rawData.appendTo($destinationHolder);

        $('<div class="form-group button-group">\n' +
            '    <a class="btn next1 js-order-modal-trigger-2" href="#">Подтвердить заказ</a>\n' +
            '</div>').appendTo($destinationHolder);

        fixImages($destinationHolder);

    }

    // //playbill slidesFix
    // function getSlides($holder) {
    //     const $rawImages = $();
    //
    //
    //     const $playbillContent = $('.event-list');
    //     const $playbillImages = $playbillContent.find('img.img-thumbnail, img.img-responsive, .carousel-inner img');
    //     const $playbillLinks = $playbillContent.find('.col-md-12 p a');
    //
    //     $playbillImages.each(function () {
    //         const $currImg = $(this);
    //         const oldSrc = $currImg.attr('src');
    //         const newSrc = 'https://russianbroadway.com' + oldSrc;
    //
    //         $currImg.attr('src', newSrc);
    //     });
    //
    //     $playbillLinks.each(function () {
    //         const $currLnk = $(this);
    //         const oldSrc = $currLnk.attr('href');
    //         const newSrc = 'https://russianbroadway.com' + oldSrc;
    //
    //         $currLnk.attr('href', newSrc);
    //     });
    // }

    //playbill images fix
    function fixImages($holder) {
        const $playbillContent = $holder;
        const $playbillImages = $playbillContent.find('img');
        const $playbillLinks = $playbillContent.find('a');

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

    //regaloeb
    (() => {

        $(".js-regaloeb").regaloebParallax();

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
            });

            $quantityTriggerMore.on('click', function () {
                const selectedItem = $quantitySelect.find('option:selected').index();
                if (selectedItem === $quantitySelect.find('option:last-child').index()) return;
                $quantitySelect.find('option').removeAttr('selected');
                $quantitySelect.find('option:nth-child(' + (selectedItem + 2) + ')').attr('selected', 'selected');
            });
        })

    })();

    (() => {
        $('.form-item:not(".quantity") select').customSelect();
    })();

});