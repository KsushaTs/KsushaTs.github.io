// modal

function toggleModal(block, open, close) {
	let cart_open = document.querySelector(open);
	let modal_close = document.querySelector(close);
	let modal = document.querySelector(block);

	cart_open.onclick = function () {
		modal.style.display = 'block';
	}

	modal_close.onclick = function () {
		modal.style.display = 'none';
	}
}

toggleModal('.modal-cart', '.cart', '.modal-close');

toggleModal('.top-nav', '.mob-menu', '.menu-close');

// slick

$(document).ready(function () {

	$('.main-slider-plugin').slick({
		//   setting-name: setting-value
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});

	$('.product-slider-plugin').slick({

	});

});