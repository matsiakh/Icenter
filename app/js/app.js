document.addEventListener("DOMContentLoaded", function() {
	//------------------------------SLIDER---------------------------
	var swiper = new Swiper(".mySwiper", {
		freeMode: false,
		loop: true,
		effect: "fade",
	});

	function changeTab(index) {
		// Отримати всі елементи табів та слайдів
		var tabs = document.getElementsByClassName('tab');
		var slides = document.getElementsByClassName('slide');
	
		// Зняти активний клас з усіх табів та слайдів
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove('active');
			slides[i].classList.remove('active');
		}
	
		// Додати активний клас до обраного табу та слайда
		tabs[index].classList.add('active');
		slides[index].classList.add('active');
	}

});
	