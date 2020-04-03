// Like
const likeButtons = document.querySelectorAll('.btn_like');
console.log(likeButtons);

for (let i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener('click', function() {
		likeButtons[i].classList.toggle('liked');
	})
}


// Slick slider
$('.slider-block').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	customPaging : function(slider, i) {
        return '<a href="#"><img src="images/square.png" class="img_square" /><img src="images/square_white.png" class="img_square_active" /></a>';
    },
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
})

// Insert product counter
let productQuantityEl = document.querySelectorAll('.more_details');
console.log(productQuantityEl);


for (let i = 1; i < productQuantityEl.length; i++) {
	productQuantityEl[i].insertAdjacentHTML('beforebegin', '<div class="product-quantity"><button class="decrement-btn">-</button> <input class="product_quantity_input" type="text" value="1"> <button class="increment-btn">+</button></div>')
	}


//change quantity
let incrementBtn = document.querySelectorAll('.increment-btn');
let decrementBtn = document.querySelectorAll('.decrement-btn');
let quantityInput = document.querySelectorAll('.product_quantity_input');

for (let i = 0; i < incrementBtn.length; i++) {
	incrementBtn[i].addEventListener("click",function() {
		let currentValue = +quantityInput[i].value;
		let nextValue = currentValue + 1;
		quantityInput[i].value = nextValue;
		if(nextValue >= 5) {
			incrementBtn[i].disabled = true;
			decrementBtn[i].disabled = false
		} else {
			incrementBtn[i].disabled = false;
			decrementBtn[i].disabled = false;
		}
	})
}

for (let i = 0; i < decrementBtn.length; i++) {
	decrementBtn[i].addEventListener("click",function() {
			let currentValue = +quantityInput[i].value;
			let nextValue = currentValue - 1;
			quantityInput[i].value = nextValue;
			if(nextValue <= 1) {
				decrementBtn[i].disabled = true;
				incrementBtn[i].disabled = false;
			} else {
				decrementBtn[i].disabled = false;
				incrementBtn[i].disabled = false;
			}
	})
}
	
// Add to cart with product quantity
const productsCountEl = document.getElementById("products_count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const productCountInput = document.querySelectorAll(".product_quantity_input");
console.log(productCountInput);


for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', function() {
		productsCountEl.textContent = +productsCountEl.textContent + +productCountInput[i].value;
	})
}

// Selectize
$(function() {
	$('.catalog__sort').selectize('sort by price', 'sort by name', 'sort by date', 'sort by popularity');
});




