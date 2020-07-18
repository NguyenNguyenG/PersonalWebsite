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

$(document).on('scroll', function() {
	console.log(($('#skills').position().top - $(this).scrollTop()));
	console.log(($('#skills').position().top - $(this).scrollTop()) <= 560)
    if(($('#skills').position().top - $(this).scrollTop()) <= 560){
		$('#skill-tag').addClass('active');
		$('#abt-tag').removeClass('active');
		$('#exp-tag').removeClass('active');
		$('#edu-tag').removeClass('active');
    } else if ($(this).scrollTop()>=$('#education').position().top){
		$('#edu-tag').addClass('active');
		$('#abt-tag').removeClass('active');
		$('#exp-tag').removeClass('active');
		$('#skill-tag').removeClass('active');
    } else if ($(this).scrollTop()>=$('#experience').position().top){
		$('#exp-tag').addClass('active');
		$('#edu-tag').removeClass('active');
		$('#abt-tag').removeClass('active');
		$('#skill-tag').removeClass('active');
    } else {
		$('#abt-tag').addClass('active');
		$('#edu-tag').removeClass('active');
		$('#exp-tag').removeClass('active');
		$('#skill-tag').removeClass('active');
    }
})
