var header = document.querySelector('.header');
var text = document.querySelector('.t');
window.addEventListener('scroll', function() {
    header.style.opacity = 1 - +window.pageYOffset/700+''; 
    header.style.top = +window.pageYOffset + 'px'; 
    header.style.backgroundPositionY = - +window.pageYOffset / 2 + 'px'; 
});