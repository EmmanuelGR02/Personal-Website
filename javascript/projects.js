const slider = document.querySelector('.project_slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');

let index = 0;

function showSlide(index) {
  const width = slides[0].clientWidth;
  slider.style.transform = `translateX(${-index * width}px)`;
}

prevBtn.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : slides.length - 1;
  showSlide(index);
});

nextBtn.addEventListener('click', () => {
  index = (index < slides.length - 1) ? index + 1 : 0;
  showSlide(index);
});

// Initialize the first slide
showSlide(index);