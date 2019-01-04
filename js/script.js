$(document).ready(function () {

	/// BEFORE - AFTER ///
	$('.cocoen').cocoen();

	/// SCRIPT ARROW MOVE ///

	function doSetTimeout(i) {
		setTimeout(function () {
			jQuery(".work__item-" + i).addClass("work__item--active");
			jQuery(".work__item-" + i).siblings().removeClass("work__item--active")
		}, i * 1000)
	}
	function myFuncSuper() {
		for (let i = 0; i <= 6; i++) {
			doSetTimeout(i)
		}
	}
	myFuncSuper();
	setInterval(myFuncSuper, 6000);

	/// OTHERS PROJECT ///
	$(".fresh__item").hide();
	$(".fresh__item:lt(6)").show();
	$(".fresh__list-more-link").click(function () {
		if ($(this).text() == "Показать ещё") {
			$(".fresh__item:lt(9)").show();
			$(this).text("Скрыть");
		} else {
			$(".fresh__item").hide();
			$(".fresh__item:lt(6)").show();
			$(this).text("Показать ещё");
		}
	});

	/// INPUT MASK'S ///


	$(".lead-phone").inputmask({ "mask": "+7(999) 999-9999" });

	/// smooth scroll to anchor JQ //

	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top - 50
		}, 450);
		return false;
	});

	/// OPEN FORMS ///

	var callWrapp = $('.popup-call__wrapper');

	$(".popup").click(function (e) {
		e.stopPropagation();
	})

	$(".to-call").click(function (e) {
		e.preventDefault();
		callWrapp.addClass("popup-call__wrapper--active");
	});

	$(".close").click(function () {
		callWrapp.removeClass("popup-call__wrapper--active");
	});

	callWrapp.click(function () {
		callWrapp.removeClass("popup-call__wrapper--active");
	});

	/// SLICK SLIDE ///

	$('.comments__slider').slick({
		prevArrow: $('.arrow--left'),
		nextArrow: $('.arrow--right'),
		dots: true
	});


	/// SLICK ON TABLETS /// 

	if (window.innerWidth <= 768) {
		$('.features-block__list').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			// autoplay: true,
			autoplaySpeed: 2000,
			dots: true,
			arrows: false,
			prevArrow: $('.arrow-mobile--left'),
			nextArrow: $('.arrow-mobile--right'),
			responsive: [
				{
					breakpoint: 480,
					settings: {
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: true,
						autoplaySpeed: 2000,
						dots: true,


					}
				}
			],
		});

		$('.work__list').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true,
			arrows: false,

		});
	};

	if (window.innerWidth <= 480) {

		$('.features-list').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
			autoplaySpeed: 2000,
			dots: false,
			arrows: false,

		});
	};

	/// MOBILE NAV AND HEADER ///

	$(window).scroll(function () {
		if ($(this).scrollTop() > 125) {
			$(".pre-header").fadeOut();

			$('.header').addClass('header--mobile');

		} else {
			$('.pre-header').fadeIn();
			$('.header').removeClass('header--mobile');
		}

	});

	$('.burger').click(function(){
		$('.mobile-menu__wrapper').addClass('mobile-menu__wrapper--active');
	});

	$('.mobile__close').click(function(){
		$('.mobile-menu__wrapper').removeClass('mobile-menu__wrapper--active');
	});

	$('.mobile__nav-link').click(function(){
		$('.mobile-menu__wrapper').removeClass('mobile-menu__wrapper--active');
	})

	$('.mobile-menu__wrapper').click(function(){
		$('.mobile-menu__wrapper').removeClass('mobile-menu__wrapper--active');
	});

	

///////// hack to safari vh ///////////////
// $('.wrapper').height(window.innerHeight + 'px');


});

/// YANDEX MAP ///

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
	// Создание карты.    
	var myMap = new ymaps.Map("map-container", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.76, 37.64],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 12
	});

	myMap.behaviors

		.disable(['scrollZoom', ''])




}





