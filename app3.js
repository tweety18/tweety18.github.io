document.querySelector('.c-burger').addEventListener('click', function (e){
	e.preventDefault();
	// this.classList.toggle('is-active');
	if (this.classList.contains('is-active')) {
		this.classList.remove('is-active');
		document.querySelector('.burger_menu_list').classList.remove('nav-active')
	}
	else {
		this.classList.add('is-active');
		document.querySelector('.burger_menu_list').classList.add('nav-active')
	}
})