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


var leftTestimonial = 0;
var currentTestimonial = 0;
var nextTestimonial = 0;
var dotsTestimonial = document.getElementsByClassName('dot-testimonial');

function sliderTestimonial() {
	var slide = setInterval( (function() {
		leftTestimonial = leftTestimonial + ((testimonialWidth * (currentTestimonial - nextTestimonial)) / (testimonialWidth / 1));
		if (((Math.ceil(Math.abs(leftTestimonial))) == (nextTestimonial * testimonialWidth)) || (Math.floor(Math.abs(leftTestimonial))) == (nextTestimonial * testimonialWidth)) {
			if (((Math.ceil(Math.abs(leftTestimonial))) == (nextTestimonial * testimonialWidth))) {
				leftTestimonial = Math.ceil(leftTestimonial);
			} else if ((Math.floor(Math.abs(leftTestimonial))) == (nextTestimonial * testimonialWidth)) {
				leftTestimonial = Math.floor(leftTestimonial);
			}

			testimonialsWrapper.style.marginLeft = leftTestimonial + 'px';
			clearInterval(slide);
			initTestimonialSlider();
		}
		testimonialsWrapper.style.marginLeft = leftTestimonial + 'px';
	}), 1);
}

function initTestimonialSlider() {
	dotsTestimonial[currentTestimonial].classList.add('is-selected');

	setTimeout(function() {
		sliderTestimonial();
	}, 1500);

	dotsTestimonial[currentTestimonial].classList.remove('is-selected');
	dotsTestimonial[nextTestimonial].classList.add('is-selected');

	currentTestimonial = nextTestimonial;
	nextTestimonial += 1;
	if (nextTestimonial >= testimonialNumbers) {
		nextTestimonial = 0;
	}
}




initTestimonialSlider(testimonialsWrapper, testimonialWidth);

if (window.innerWidth <= 768) {

	var postWidth = document.getElementById('blog-posts').offsetWidth;
	var postsWrapper = document.getElementById('post-slide');
	var posts = document.getElementsByClassName('post');
	// var postWidth = document.getElementsByClassName('thumbnail')[0].offsetWidth;
	var postsNumbers = posts.length;
	postsWrapper.style.width = postsNumbers * postWidth + 'px';
	for (var i = 0; i < postsNumbers; i++) {
		posts[i].style.width = postWidth + 'px';
	}
	var leftPosts = 0;
	var currentPosts = 0;
	var nextPosts = 0;
	var dotsPosts = document.getElementsByClassName('dot-post');

	dotsPosts[1].classList.remove('is-selected');

	function sliderPosts() {
		var slidePosts = setInterval( (function() {
			leftPosts = leftPosts + ((postWidth * (currentPosts - nextPosts)) / (postWidth / 1));
			console.log(leftPosts);
			if (((Math.ceil(Math.abs(leftPosts))) == (nextPosts * postWidth)) || (Math.floor(Math.abs(leftPosts))) == (nextPosts * postWidth)) {
				if (((Math.ceil(Math.abs(leftPosts))) == (nextPosts * postWidth))) {
					leftPosts = Math.ceil(leftPosts);
				} else if ((Math.floor(Math.abs(leftPosts))) == (nextPosts * postWidth)) {
					leftPosts = Math.floor(leftPosts);
				}

				postsWrapper.style.marginLeft = leftPosts + 'px';
				clearInterval(slidePosts);
				initPostsSlider();
			}
			postsWrapper.style.marginLeft = leftPosts + 'px';
		}), 1);
	}

	function initPostsSlider() {
		dotsPosts[currentPosts].classList.add('is-selected');

		setTimeout(function() {
			sliderPosts();
		}, 1500);

		dotsPosts[currentPosts].classList.remove('is-selected');
		dotsPosts[nextPosts].classList.add('is-selected');

		currentPosts = nextPosts;
		nextPosts += 1;
		if (nextPosts >= postsNumbers) {
			nextPosts = 0;
		}
	}

	initPostsSlider();
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
