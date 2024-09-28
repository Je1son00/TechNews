document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

/* Cambio de imagenes */

const images = [
  './img/showcase2.jpg',
  './img/showcase/fake-news-4881488_1280.jpg',
  './img/showcase/newspapers-4565916_1280.jpg'
];

let currentImageIndex = 0;
const section = document.getElementById('inicio');

function changeBackgroundImage() {
  section.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3500);
changeBackgroundImage(); 
