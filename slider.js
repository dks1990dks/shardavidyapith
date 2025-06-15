// Slider
let currentSlideIndex = 0;
const slider = document.getElementById('slider');
const slides = slider.children;
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = totalSlides - 1;
  else currentSlideIndex = index;

  const offset = -currentSlideIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

// Auto-slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);
