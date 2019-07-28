var testimonialWidth = document.getElementById('testimonials-view').offsetWidth;
var testimonialsWrapper = document.getElementById('testimonials-text');
var testimonials = document.getElementsByClassName('testimonial');
var testimonialNumbers = testimonials.length;

testimonialsWrapper.style.width = testimonialWidth * testimonialNumbers + 'px';
for (var i = 0; i < testimonialNumbers; i++) {
	testimonials[i].style.width = testimonialWidth + 'px';
}


window.onresize = function() {
	testimonialWidth = document.getElementById('testimonials-view').offsetWidth;
	testimonialsWrapper.style.width = testimonialWidth * testimonialNumbers + 'px';
	for (var i = 0; i < testimonialNumbers; i++) {
		testimonials[i].style.width = testimonialWidth + 'px';
	}
};


var left = 0;
var current = 0;
var next = 0;
var dots = document.getElementsByClassName('dot');

function slider(current, next, element, width) {
	var slide = setInterval( (function() {
		console.log(current, next);
		left = left + ((width * (current - next)) / (0.1 * 1000));
		console.log(left, (next * width));
		if (((Math.ceil(Math.abs(left))) == (next * width)) || (Math.floor(Math.abs(left))) == (next * width)) {
			if (((Math.ceil(Math.abs(left))) == (next * width))) {
				left = Math.ceil(left);
			} else if ((Math.floor(Math.abs(left))) == (next * width)) {
				left = Math.floor(left);
			}

			element.style.marginLeft = left + 'px';
			clearInterval(slide);
			initSlider(element, width);
		}
		element.style.marginLeft = left + 'px';
	}), 1);
}

function initSlider(element, width) {
	dots[current].classList.add('is-selected');

	console.log(current, next);
	setTimeout(function() {
		slider(current, next, element, width);
	}, 1500);

	dots[current].classList.remove('is-selected');
	dots[next].classList.add('is-selected');

	current = next;
	next += 1;
	if (next >= testimonialNumbers) {
		next = 0;
	}
}

if (window.innerWidth >= 1200){
	initSlider(testimonialsWrapper, testimonialWidth);
}










window.onscroll = function() {
	var currentScroll = window.pageYOffset;

	var h = document.getElementById("header");
	var black = document.getElementsByClassName("blackIcons");
	var white = document.getElementsByClassName("whiteIcons");
	if (currentScroll > 80) {
		h.style.backgroundColor = 'white';
		for(var i = 0; i < black.length; i++) {
			black[i].style.display = 'block';
		}
		for(var i = 0; i < white.length; i++) {
			white[i].style.display = 'none';
		}
	} else {
		h.style.backgroundColor = 'transparent';
		for(var i = 0; i < white.length; i++) {
			white[i].style.display = 'block';
		}
		for(var i = 0; i < black.length; i++) {
			black[i].style.display = 'none';
		}
	}
};


function openSidebar() {
	document.getElementById('sidebar').style.width = '100%';
}

function closeSidebar() {
	document.getElementById('sidebar').style.width = '0';
}
