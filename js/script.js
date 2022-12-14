const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

const doc = document.querySelector.bind(document);
const items = document.getElementsByClassName('item');
const thumbs = document.getElementsByClassName('thumbnail');
const slider = doc('.img-container');
const gallery = doc('.gallery');
let imgTags = '', thumbTags = '';
let cont = 0, clock;
let isOver = false;

for (let i = 0; i < images.length; i++) {
  imgTags += `
  <img class="item " src="assets/img/${images[i]}" alt="">
  `;

  thumbTags += `
  <img class="thumbnail " src="assets/img/${images[i]}" alt="">
  `;
}

slider.innerHTML += imgTags;
gallery.innerHTML += thumbTags;

//? Buttons
const btnUp = doc(".fa-chevron-up"), btnDown = doc(".fa-chevron-down");

//? Init items & thumbnails
items[cont].classList.add('d-block');
thumbs[cont].classList.add('active');
initClock();

//? Listener btnUp
btnUp.addEventListener("click", function () {
  moveSlider(false);
});

//? Listener btnDown
btnDown.addEventListener("click", function () {
  moveSlider(true);
});

slider.addEventListener('mouseenter', function () {
  isOver = true;
});

slider.addEventListener("mouseleave", function () {
  isOver = false;
});

function addClasses() {
  items[cont].classList.add('d-block');
  thumbs[cont].classList.add('active');
}

function removesClasses() {
  items[cont].classList.remove('d-block');
  thumbs[cont].classList.remove('active');
}

function initClock() {
  clock = setInterval(function () {
    if (!isOver) moveSlider(true);
  }, 1000);
}

function moveSlider(value) {
  removesClasses();
  if (value){
    if (cont === (images.length - 1)) cont = -1;
    cont++;
  }
  
  else{
    if (cont === 0) cont = images.length;
    cont--;
  } 
  addClasses();
}

