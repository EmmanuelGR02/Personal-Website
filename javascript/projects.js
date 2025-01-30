const sliderImages = document.querySelectorAll('.image_slider > *');
const imageSlider = document.getElementById('image_slider');
const prevBtnImage = document.querySelector('.prev_btn_image');
const nextBtnImage = document.querySelector('.next_btn_image');
const showBtn = document.getElementById('showProject_images');
const hideBtn = document.getElementById('hideProject_images');
const showHideBtnContainer = document.getElementById('showHideImages_container')
let currentImage = 0;

// image slider is invisible by default
imageSlider.style.display = 'none';
showHideBtnContainer.style.display = 'none';
hideBtn.style.display = 'none';

// show image slider when button is sclicked
showBtn.addEventListener('click', () => {
  imageSlider.style.display = 'flex';
  showHideBtnContainer.style.display = 'flex';
  hideBtn.style.display = 'flex';
  showBtn.style.display = 'none';
})

hideBtn.addEventListener('click', () => {
  imageSlider.style.display = 'none';
  showHideBtnContainer.style.display = 'none';
  hideBtn.style.display = 'none';
  showBtn.style.display = 'flex';
})

function showImage(index) {
    if (index < 0) {
        currentImage = sliderImages.length - 1;
    } else if (index >= sliderImages.length) {
        currentImage = 0;
    }

    // Hide all images and display only the current one
    sliderImages.forEach((img, i) => {
        img.style.display = i === currentImage ? 'block' : 'none';
    });
}

// Initialize the image slider by showing the first image
showImage(currentImage);

// Event listeners for image slider buttons
prevBtnImage.addEventListener('click', () => {
    currentImage--;
    showImage(currentImage);
});

nextBtnImage.addEventListener('click', () => {
    currentImage++;
    showImage(currentImage);
});

// project slider
const projectSlides = document.querySelectorAll('.project_slider .slide');
const prevBtnProject = document.querySelector('.prev_btn_project');
const nextBtnProject = document.querySelector('.next_btn_project');
let currentProject = 0;

function showProject(index) {
    if (index < 0) {
        currentProject = projectSlides.length - 1;
    } else if (index >= projectSlides.length) {
        currentProject = 0;
    }

    // Hide all project slides and display only the current one
    projectSlides.forEach((slide, i) => {
        slide.style.display = i === currentProject ? 'block' : 'none';
    });
}

// Initialize the project slider by showing the first project
showProject(currentProject);

// Event listeners for project slider buttons
prevBtnProject.addEventListener('click', () => {
    currentProject--;
    showProject(currentProject);
});

nextBtnProject.addEventListener('click', () => {
    currentProject++;
    showProject(currentProject);
});
