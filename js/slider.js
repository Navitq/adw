let sliders = document.getElementsByClassName('slider__item');
length = sliders.length;
let dots = document.getElementsByClassName("slider__dot");
let sliderChanger = document.getElementsByClassName("slider__arrow slider__arrow_next");
let counter = 0;
dots[counter].classList.add("slider__dot_active");
sliderChanger[0].onclick = function () {
	for (let a = 0; a < dots.length; a++) {
		dots[a].classList.remove("slider__dot_active")
	}
	sliders[counter].classList.remove("slider__item_active");
	counter += 1;
	counter %= length;
	dots[counter].classList.add("slider__dot_active");
	sliders[counter].classList.add("slider__item_active");
}

sliderChanger = document.getElementsByClassName("slider__arrow slider__arrow_prev");

sliderChanger[0].onclick = function () {
	for (let a = 0; a < dots.length; a++) {
		dots[a].classList.remove("slider__dot_active")
	}
	sliders[counter].classList.remove("slider__item_active");
	counter -= 1;
	if (counter < 0) { counter = 4; };
	counter %= length;
	dots[counter].classList.add("slider__dot_active");
	sliders[counter].classList.add("slider__item_active");
}
for (let i = 0; i < length; ++i)
	dots[i].onclick = function () {
		for (let a = 0; a < dots.length; a++) {
			dots[a].classList.remove("slider__dot_active")
		}
		this.classList.add("slider__dot_active");
		sliders[counter].classList.remove("slider__item_active");
		sliders[i].classList.add("slider__item_active");
		counter = i;
	}