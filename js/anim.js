"use strict";

$(document).ready(function () {

    /* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	new Waypoint ({ 
		element: document.getElementById('content'),
		handler: function (direction) {
			if (direction === 'down') {
				$('#header').addClass('nav-solid fade');
			}
			else {
				$('#header').removeClass('nav-solid fade');
			}
		}		
	});

});
