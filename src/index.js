import {
  Swiper,
  Parallax,
  Mousewheel,
  Controller,
  Pagination,
  Scrollbar,
  Navigation
} from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css/parallax';

import './styles/normalize.css';
import './styles/index.css';

Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation]);

const swiperImg = new Swiper('.slider-img', {
  loop: false,
  speed: 2500,
  parallax: true,
  mousewheel: {
    invert: false,
  },

});

const swiperText = new Swiper('.slider-text', {
  loop: false,
  speed: 2500,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiperImg.controller.control = swiperText;
swiperText.controller.control = swiperImg;

const buttonShare = document.querySelector('.botton-share');
const blockShare = document.querySelector('.slider__share');

buttonShare.addEventListener('click', () => {
  if (blockShare.classList.contains('hidden')) {
    blockShare.classList.remove('hidden');
  } else {
    blockShare.classList.add('hidden');
  }
});

// Анимациия lottie!
// import lottie from 'lottie-web';
// import animation from './assets/animation.json';

// const element = document.querySelector('.top-line');

// lottie.loadAnimation({
//     container: element, // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     animationData: animation
//     // path: '../imgase/lottie-animation/animation.json' // the path to the animation json
//   })