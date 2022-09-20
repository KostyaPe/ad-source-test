const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.burger-menu');
const prevSlide = document.querySelector('.arrow.prev');
const nextSlide = document.querySelector('.arrow.next');
const slides = document.querySelectorAll('.slider__list');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.modal-form');

let currentSlideIndex = 0;

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

function setActiveSlide(index) {
  slides.forEach((slide, i) => {
    i == index ? slide.classList.add('active', 'fade-in') : slide.classList.remove('active', 'fade-in')
  })
}

prevSlide.addEventListener('click', function(e) {
  e.stopPropagation();

    if(!currentSlideIndex) {
      currentSlideIndex = slides.length - 1;
      setActiveSlide(currentSlideIndex);
    } else {
      setActiveSlide(--currentSlideIndex);
    }
});

nextSlide.addEventListener('click', function(e) {
  e.stopPropagation();

    if(currentSlideIndex == slides.length - 1) {
      currentSlideIndex = 0;
      setActiveSlide(currentSlideIndex);
    } else {
      setActiveSlide(++currentSlideIndex);
    }
});


$('.modal-open').on('click', function() {
  $('.overlay').fadeIn();
});

$('.overlay__close-button').on('click', function() {
  $('.overlay').fadeOut();
});

$(".tel").intlTelInput({
  initialCountry:"ua",
  autoPlaceholder:"aggressive",
  utilsScript: "js/input-mask/build/js/utils.js",
  nationalMode: false,
});

form.addEventListener('submit', function(e) {

  if(!form.elements.name.value.length) {
    isAllValid = false;

    form.elements.name.labels[0].classList.add('active');
    form.elements.name.classList.add('invalid');
  } else {
    form.elements.name.labels[0].classList.remove('active');
    form.elements.name.classList.remove('invalid');
  }


  if(!/^(?:\+38)?(0\d{9})$/.test(form.elements.tel.value)) {

    form.elements.tel.labels[0].classList.add('active');
    form.elements.tel.classList.add('invalid');

  } else {

    form.elements.tel.labels[0].classList.remove('active');
    form.elements.tel.classList.remove('invalid');
  }

  if(!/.*?\@.*?\..*?/.test(form.elements.email.value)) {

    form.elements.email.labels[0].classList.add('active');
    form.elements.email.classList.add('invalid');

  } else {

    form.elements.email.labels[0].classList.remove('active');
    form.elements.email.classList.remove('invalid');

  }

  if(!document.querySelectorAll('.invalid').length) return true;

  e.preventDefault();
  return false;
});

$('.burger-menu a').on('click', () => {
  menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

$(".more").click(function () {
  $('html, body').animate({
    scrollTop: parseInt($("#howworks").offset().top)
  }, 2000);
});