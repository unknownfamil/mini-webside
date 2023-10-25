let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__ul');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})