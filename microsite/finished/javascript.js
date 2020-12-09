window.onscroll = function() {scrollFunc()};
var links = document.getElementsByTagName("A");

function scrollFunc() {
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("header").classList.add("active");
		for(var i = 0; i < links.length; ++i) {
			links[i].classList.add("active1");
		}
	
	}
	else {
		document.getElementById("header").classList.remove("active");
		for(var i = 0; i < links.length; ++i) {
			links[i].classList.remove("active1");
		}
	}
}