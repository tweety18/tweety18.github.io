const productsCountEl = document.getElementById("products_count");
console.log(productsCountEl);

// document.getElementsByClassName
// document.getElementsByTagName

const addToCartButtons = document.querySelectorAll(".add-to-cart");
// addToCartButtons.onclick = function () {
// 	alert('Hello World')
// }

// addToCartButtons.addEventListener('click', function() {
// 	alert('Hello World')
// });

// addToCartButtons.addEventListener('click', function() {
// 	alert('Bye-bye')
// } )

// console.log(addToCartButtons);

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', function() {
		// let prevProductsCount = +productsCountEl.textContent;
		// productsCountEl.textContent = prevProductsCount + 1;
		productsCountEl.textContent = +productsCountEl.textContent + 1;
	})
}



const likeBtnEl = document.querySelectorAll(".btn_like");
console.log(likeBtnEl);



for (let i = 0; i < likeBtnEl.length; i++) {
	likeBtnEl[i].addEventListener('click', function() {
		console.log(likeBtnEl[i].style.backgroundColor);

		if (likeBtnEl[i].style.backgroundColor == '') {
			likeBtnEl[i].style.backgroundColor = 'rgb(44, 113, 184)';
			likeBtnEl[i].style.backgroundImage = 'url(images/like_white.png)'
		} else {
			likeBtnEl[i].style.backgroundColor = '';
			likeBtnEl[i].style.backgroundImage = 'url(images/like.png)';

		}

		
		console.log(likeBtnEl[i].style.backgroundColor);
		
	})
}

