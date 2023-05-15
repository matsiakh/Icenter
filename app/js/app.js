document.addEventListener("DOMContentLoaded", function() {

	//------------------------------SLIDER---------------------------
	var swiper = new Swiper(".mySwiper", {
		freeMode: false,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.present__next',
			prevEl: '.present__prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 15
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			900: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		},
	});

});
	