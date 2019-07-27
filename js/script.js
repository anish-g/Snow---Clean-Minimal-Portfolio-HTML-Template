
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
}