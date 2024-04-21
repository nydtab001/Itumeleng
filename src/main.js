const hambut = document.getElementById("hamburg");
const nav = document.getElementById("navlist");

hambut.addEventListener("click", toggleButton)

function toggleButton(){
    nav.classList.toggle("show")
}

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
        slide.style.opacity = 1; // Show the slide by setting opacity to 1
    } else {
        slide.style.opacity = 0; // Hide the slide by setting opacity to 0
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//nextSlide();

showSlide(currentIndex);

setInterval(nextSlide, 5000);