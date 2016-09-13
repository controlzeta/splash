/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();

	});

	$(document).ready(function () {
	    $("#owl-demo").owlCarousel({
	        navigation: false,
	        autoPlay: 3000,
	        stopOnHover: true,
	        paginationSpeed: 1000,
	        goToFirstSpeed: 2000,
	        singleItem: true,
	        autoHeight: true,
	        autoWidth: true,
	        transitionStyle: "fade"
	    });
	    $("#owl-demo2").owlCarousel({
	        navigation: false,
	        autoPlay: 3000,
	        stopOnHover: true,
	        paginationSpeed: 2000,
	        goToFirstSpeed: 3000,
	        singleItem: true,
	        autoHeight: true,
	        autoWidth: true,
	        transitionStyle: "fade"
	    });
	    $("#owl-demo3").owlCarousel({
	        navigation: false,
	        autoPlay: 3000,
	        stopOnHover: true,
	        paginationSpeed: 4000,
	        goToFirstSpeed: 4000,
	        singleItem: true,
	        autoHeight: true,
	        autoWidth: true,
	        transitionStyle: "fade"
	    });
	});

})(jQuery);