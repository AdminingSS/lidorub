(function($) {
	//is mobile
	var isMobile = { 
		Android: function() { return navigator.userAgent.match(/Android/i); }, 
		BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
		iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
		Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
		Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
		any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
	};
	var isiPad = navigator.userAgent.match(/iPad/i) != null;

	//wait until resize is done
	$(window).resize(function() {
		if(this.resizeTO) clearTimeout(this.resizeTO);
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		}, 500);
	});
	
	//wait until scroll is done
	$(window).scroll(function() {
		if(this.scrollTO) clearTimeout(this.scrollTO);
		this.scrollTO = setTimeout(function() {
			$(this).trigger('scrollEnd');
		}, 500);
	});
		
	$(document).ready(function () {
		
		$('.js-regaloeb-parallax').regaloebParallax();

	});
})(jQuery);