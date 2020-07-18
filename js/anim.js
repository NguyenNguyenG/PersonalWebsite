"use strict";

$(document).ready(function () {

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
