var testimonialWidth = document.getElementById('testimonials-view').offsetWidth;
var testimonialsWrapper = document.getElementById('testimonials-text');
var testimonials = document.getElementsByClassName('testimonial');
var testimonialNumbers = testimonials.length;

testimonialsWrapper.style.width = testimonialWidth * testimonialNumbers + 'px';
for (var i = 0; i < testimonialNumbers; i++) {
	testimonials[i].style.width = testimonialWidth + 'px';
}

var flagPostSlider = false;
var postsTimeout;
var slidePosts;
var postWidth = document.getElementById('blog-posts').offsetWidth;
var postsWrapper = document.getElementById('post-slide');
var posts = document.getElementsByClassName('post');
// var postWidth = document.getElementsByClassName('thumbnail')[0].offsetWidth;
var postsNumbers = posts.length;
var leftPosts = 0;
var currentPosts = 0;
var nextPosts = 0;
var dotsPosts = document.getElementsByClassName('dot-post');

function sliderPosts() {
	slidePosts = setInterval( (function() {
		leftPosts = leftPosts + ((postWidth * (currentPosts - nextPosts)) / (postWidth / 1));
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
	flagPostSlider = true;
	dotsPosts[currentPosts].classList.add('is-selected');

	postsTimeout = setTimeout(function() {
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


var onResize = function (width) {
	testimonialsWrapper.style.width = testimonialWidth * testimonialNumbers + 'px';
	for (var i = 0; i < testimonialNumbers; i++) {
		testimonials[i].style.width = testimonialWidth + 'px';
	}

	if (window.innerWidth > 768 && window.innerWidth < 992) {
		clearInterval(slidePosts);
		clearTimeout(postsTimeout);
		flagPostSlider = false;
		document.getElementsByClassName('post-slide')[0].style.margin = '0 auto';
		document.getElementsByClassName('post-slide')[0].style.width = '675px';
		for (var i = 0; i < postsNumbers; i++) {
			posts[i].style.width = 'auto';
		}
	} else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
		document.getElementsByClassName('post-slide')[0].style.width = '900px';
	} else if (window.innerWidth >= 1200) {
		document.getElementsByClassName('post-slide')[0].style.width = '1110px';
	} else if (window.innerWidth <= 768) {
		postWidth = document.getElementById('blog-posts').offsetWidth;
		posts = document.getElementsByClassName('post');
		postsNumbers = posts.length;
		document.getElementsByClassName('post-slide')[0].style.width =  postsNumbers * postWidth + 'px';
		for (var i = 0; i < postsNumbers; i++) {
			posts[i].style.width = postWidth + 'px';
		}
	}
}

var resizeCallback = function () {
	testimonialWidth = document.getElementById('testimonials-view').offsetWidth;
	if (window.innerWidth <= 768) {
		postsWrapper.style.width = postsNumbers * postWidth + 'px';
		for (var i = 0; i < postsNumbers; i++) {
			posts[i].style.width = postWidth + 'px';
		}
		dotsPosts[1].classList.remove('is-selected');
		if (!flagPostSlider) {
			initPostsSlider();
		}
	}
	onResize(testimonialWidth);
}


window.addEventListener('resize', resizeCallback);
resizeCallback();

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
