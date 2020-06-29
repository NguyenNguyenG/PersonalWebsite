"use strict";

$(document).ready(function () {

    /* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	new Waypoint ({ 
		element: document.getElementById('waypoint'),
		handler: function () {
			if (direction === 'down') {
				$('#header').addClass('nav-solid fadeInDown');
			}
			else {
				$('#header').removeClass('nav-solid fadeInDown');
			}
		}		
	});
	console.log("ready");

});

$(window).load(function () { // makes sure the whole site is loaded

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});

