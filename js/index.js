let burger = document.querySelector('.burger');
let navList = document.querySelector('.nav-list');
let body = document.querySelector('body');

burger.addEventListener('click', function() {
  burger.classList.toggle('active');
  navList.classList.toggle('active');
  body.classList.toggle('active');
});

let removeBurger = document.querySelector('.nav-item');

removeBurger.addEventListener('click', function() {
  burger.classList.remove('active');
  navList.classList.remove('active');
  body.classList.remove('active');
});

const container = document.querySelector(".swiper-container, .projects-container")
const swiper = new Swiper('.hero-swiper, .projects-swiper', {
  speed: 300,
  pagination: {
    el: '.hero__pagination, .projects-steps',
    type: 'bullets',
    clickable: true
  },
  loop: true,
  a11y: {
    prevSlideMessage: 'первый слайд {{index}}',
    nextSlideMessage: 'следующий слайд {{index}}',
  },
});

let projectsLink = document.querySelectorAll('.projects-link');
let projectsLeft = document.querySelectorAll('.projects-left');

projectsLink.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    projectsLink.forEach(function(btn) {
      btn.classList.remove('projects-link--active')
    });

    e.currentTarget.classList.add('projects-link--active');

    projectsLeft.forEach(function(element){
      element.classList.remove('projects-left--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('projects-left--active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.question-list', {
  duration: 700,
  elementClass:	'question-list-item',
  triggerClass: 'question-list-item-top',
  panelClass: 'question-list-item-bottom',
  showMultiple: false,
    collapse: true,
    active: false
})
});
