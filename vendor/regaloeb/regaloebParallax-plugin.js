(function($) {
	$.regaloebParallax = function(element, options) {
		// Pour éviter la confusion avec $(this)on declare plugin comme variable pour l'instance de notre plugin
		var plugin = this;
		// On crée un objet vide qui contiendra les options de notre plugin
		plugin.o = {}
		// Référence à l'élément jQuery que le plugin affecte
		var $elem = $(element);
		// Référence à l'élément HTML que le plugin affecte
		var elem = element;
		// Mise en place des options par défaut et/ou en attributs data de $elem
		var defaults = {
			end: ($elem.attr('data-end') && $elem.attr('data-end') != '') ? $elem.attr('data-end') : 2 
		};		
		// La méthode dite "constructeur" qui sera appelée lorsque l'objet sera crée
		plugin.init = function() {
			// on stocke les options dans un objet en fusionnant les options par defaut et celles ajoutées en parametre
			plugin.o = $.extend({}, defaults, options);
			function  testScroll(){
				scrolled = $(window).scrollTop();
				windowHeight = $(window).height();
				top = Math.round($elem.offset().top);
				h = Math.round($elem.outerHeight());
				if(scrolled != lastScroll){
					if(top <= scrolled + 150 + windowHeight && top + h > scrolled){ //+ 150 pour appliquer les effets avant apparition à l'écran sinon ça sursaute !
						parallaxit();
					}
				}
				lastScroll = scrolled;
				requestAnimationFrame(testScroll);
			}
			testScroll();
			parallaxit();
		}
		// Ici on va coder nos méthodes privées / publiques
		//publiques : plugin.nomFonction = function(){}
		//privées : var nomFonction = function(){}
		var lastScroll = $(window).scrollTop();
		var scrolled = $(window).scrollTop();
		var windowHeight = $(window).height();
		var top = Math.round($elem.offset().top);
		var h = Math.round($elem.outerHeight());
		//IE version
		var isIE = function() {
			var myNav = navigator.userAgent.toLowerCase();
			return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
		}
		var parallaxit = function(){			
			var distance = scrolled + windowHeight - top;
			
			var ratio = (distance / ((windowHeight + h) / (100 * plugin.o.end)));
			ratio = (ratio <= 0) ? 0 : ratio;
			ratio = (ratio >= 100) ? 100 : ratio;
			
			var cssparam = {};
			
			var translateX = 0;
			if($elem.attr('data-x')){				
				var x0 = parseFloat($elem.attr('data-x').split('#')[0], 10);
				var x1 = parseFloat($elem.attr('data-x').split('#')[1], 10);
				var deltaX = x1 - x0;
				translateX = (x0 + (ratio*deltaX/100)).toFixed(0) + 'px';
			}
			
			var translateY = 0;
			if($elem.attr('data-y')){				
				var y0 = parseFloat($elem.attr('data-y').split('#')[0], 10);
				var y1 = parseFloat($elem.attr('data-y').split('#')[1], 10);
				var deltaY = y1 - y0;
				translateY = (y0 + (ratio*deltaY/100)).toFixed(0) + 'px';
			}
			
			if(translateX != 0 || translateY != 0){
				if(cssparam.transform){
					if(isIE() && isIE() <= 9){
						cssparam.transform += 'translate(' + translateX + ', ' + translateY + ') ';
					}
					else{
						cssparam.transform += 'translate3d(' + translateX + ', ' + translateY + ', 0) ';
					}
				}
				else{
					if(isIE() && isIE() <= 9){
						cssparam.transform = 'translate(' + translateX + ', ' + translateY + ') ';
					}
					else{
						cssparam.transform = 'translate3d(' + translateX + ', ' + translateY + ', 0) ';
					}
				}
			}
			
			if ($elem.attr('data-scale') && $elem.attr('data-scale') != ''){
				var scale0 = parseFloat($elem.attr('data-scale').split('#')[0], 10);
				var scale1 = parseFloat($elem.attr('data-scale').split('#')[1], 10);
				var deltaS = scale1 - scale0;
				if(cssparam.transform){
					cssparam.transform += 'scale('+ (scale0 + (ratio*deltaS/100)).toFixed(2) + ') ';
				}
				else{
					cssparam.transform = 'scale('+ (scale0 + (ratio*deltaS/100)).toFixed(2) + ') ';
				}
			}	
			
			if ($elem.attr('data-rotate') && $elem.attr('data-rotate') != ''){
				var rotate0 = parseInt($elem.attr('data-rotate').split('#')[0], 10);
				var rotate1 = parseInt($elem.attr('data-rotate').split('#')[1], 10);
				var deltaR = rotate1 - rotate0;
				if(cssparam.transform){
					cssparam.transform += 'rotate('+ (rotate0 +  (ratio*deltaR/100)).toFixed(0) + 'deg) ';
				}
				else{
					cssparam.transform = 'rotate('+ (rotate0 +  (ratio*deltaR/100)).toFixed(0) + 'deg) ';
				}
			}
			
			if ($elem.attr('data-skewX') && $elem.attr('data-skewX') != ''){
				var skewX0 = parseInt($elem.attr('data-skewX').split('#')[0], 10);
				var skewX1 = parseInt($elem.attr('data-skewX').split('#')[1], 10);
				var deltaS = skewX1 - skewX0;
				if(cssparam.transform){
					cssparam.transform += 'skewX('+(skewX0 +  (ratio*deltaS/100)).toFixed(0) + 'deg) ';
				}
				else{
					cssparam.transform = 'skewX('+(skewX0 +  (ratio*deltaS/100)).toFixed(0) + 'deg) ';
				}
			}
			
			if ($elem.attr('data-skewY') && $elem.attr('data-skewY') != ''){
				var skewY0 = parseInt($elem.attr('data-skewY').split('#')[0], 10);
				var skewY1 = parseInt($elem.attr('data-skewY').split('#')[1], 10);
				var deltaS = skewY1 - skewY0;
				if(cssparam.transform){
					cssparam.transform += 'skewY('+(skewY0 +  (ratio*deltaS/100)).toFixed(0) + 'deg) ';
				}
				else{
					cssparam.transform = 'skewY('+(skewY0 +  (ratio*deltaS/100)).toFixed(0) + 'deg) ';
				}
			}				
			
			if ($elem.attr('data-o') && $elem.attr('data-o') != ''){
				var o0 = parseFloat($elem.attr('data-o').split('#')[0], 10);
				var o1 = parseFloat($elem.attr('data-o').split('#')[1], 10);
				var deltaO = o1 - o0;
				ratiopacity = (o0 + (ratio*deltaO))/100;
				ratiopacity = (ratiopacity >= 1) ? 1 : (ratiopacity <= 0) ? 0 : ratiopacity;
				cssparam.opacity = ratiopacity.toFixed(2);
			}	
			
			//cssparam['-webkit-filter'] = cssparam.filter;
			cssparam['-webkit-transform'] = cssparam.transform;
			$elem.css(cssparam);
		}		
		// On appele la méthode publique init qui va se charger de mettre en place toutes les méthodes de notre plugin pour qu'il fonctionne
		plugin.init();
	}

	// On ajoute le plugin à l'objet jQuery $.fn
	$.fn.regaloebParallax = function(options) {
		// Pour chacun des élément du dom à qui on a assigné le plugin
		return this.each(function() {
			// Si le plugin n'as pas deja été assigné à l'élément
			if (undefined == $(this).data('regaloebParallax')) {
				// On crée une instance du plugin avec les options renseignées
				var plugin = new $.regaloebParallax(this, options);
				// on stocke une référence de notre plugin pour pouvoir accéder à ses méthode publiques
				$(this).data('regaloebParallax', plugin);
				// appel depuis ext : $('#objet').data('regaloebParallax').fonctionPublique(params);
			}
		});
	}
})(jQuery);

;(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
			timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}
	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());