	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#up').fadeIn();
			$('#top').addClass('top');
			$('#menu').addClass('tofixed');
		} else {
			$('#up').fadeOut();
			$('#top').removeClass('top');
			$('#menu').removeClass('tofixed');
		}
	});

	$('#menu-button').click(function () {
		$('#menu').toggleClass('menu-mobile');
		return false;
	});

	// gallery
	$("[data-fancybox]").fancybox();

	$('#slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2000,
		fade: true,
		autoplay: true,
		arrows: false
	});

	$('#scroll').slick({
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 776,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.content_gallery').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		speed: 2000
	});

	$('.scroll').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 2000,
		responsive: [
			{
				breakpoint: 776,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$(".grid").gridalicious({
		width: 320,
		gutter: 20,
		selector: 'a'
	});

	// додаткові товари
	$('#offers').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 2000,
		autoplay: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 776,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	// товар у скролі і поцентрований
	$('.center-goods').slick({
		centerMode: true,
		slidesToShow: 5,
		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
	
	// додаткові категорії 
	$('#add-category').slick({
		slidesToShow: 4,
		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});

	// вгору
	$('#up').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600); return false;
	});

// плавне зникання сигнатури
$(window).on('scroll', function () {
	var percent = 0.003;

	$('.signature h1').css({
		opacity: 0.8 - $(window).scrollTop() * percent
	})
	$('.signature p').css({
		opacity: 1 - $(window).scrollTop() * percent
	})
});
