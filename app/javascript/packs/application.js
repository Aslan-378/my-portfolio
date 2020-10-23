// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function scrollAppear() {
  var descText = document.querySelectorAll('.desc-text');
  var macBook = document.querySelectorAll('.macbook-animation');

  await sleep(400);

  descText.forEach(txt=>{
    var textPosition = txt.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(textPosition < screenPosition) {
    txt.classList.add('desc-text-appear');
  }

  });

  await sleep(700);

  macBook.forEach(mac=>{
    var macPosition = mac.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(macPosition < screenPosition) {
    mac.classList.add('macbook-animation-appear');
  }

  });
}

window.addEventListener('scroll', scrollAppear);



function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if( startTime === null ) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  requestAnimationFrame(animation);
}


var pr1 = document.querySelector('.project1');
var pr2 = document.querySelector('.project2');
var button = document.querySelector('#btnScrollToTop');

pr1.addEventListener('click', function(){
  smoothScroll('#project1', 500);
});

pr2.addEventListener('click', function(){
  smoothScroll('#project2', 500);
});

button.addEventListener('click', function(){
  smoothScroll('#project-navigation', 500);
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

const project = document.querySelector(".project3")
const project2 = document.querySelector(".project4")
const project3 = document.querySelector(".project5")

const image = document.querySelector(".js-image")
const image2 = document.querySelector(".js-image2")
const image3 = document.querySelector(".js-image3")


//mouseover first project

project.addEventListener('mouseover', function() {

  image.style.opacity = 1
  image.style.transition = "opacity 1s"

})

project.addEventListener('mouseout', function() {

  image.style.opacity = 0
  image.style.transition = "opacity 1s"

})

//mouseover second project

project2.addEventListener('mouseover', function() {

  image2.style.opacity = 1
  image2.style.transition = "opacity 1s"

})

project2.addEventListener('mouseout', function() {

  image2.style.opacity = 0
  image2.style.transition = "opacity 1s"

})

//mouseover third project

project3.addEventListener('mouseover', function() {

  image3.style.opacity = 1
  image3.style.transition = "opacity 1s"

})

project3.addEventListener('mouseout', function() {

  image3.style.opacity = 0
  image3.style.transition = "opacity 1s"

})
