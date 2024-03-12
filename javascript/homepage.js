document.addEventListener('DOMContentLoaded', function() {
    // get switch contents
    const backgroundSwitch = document.getElementById('backgroundSwitch');
    const slider = document.querySelector('#backgroundSwitch .slider');
    const helloName = document.querySelectorAll('.hello, .name');
    let isBackgroundBlack = true;

    // set the start background colors
    document.body.style.backgroundColor = 'black';
    slider.style.backgroundColor = 'black'; 
    slider.classList.add('checked'); 
    slider.style.backgroundColor = 'black'; 

    // Add event listener for switch toggle
    backgroundSwitch.addEventListener('change', function() {
        if (isBackgroundBlack) {
            // Change background to white and text color to black
            document.body.style.backgroundColor = 'white';
            helloName.forEach(element => {
                element.style.color = 'black';
            });
            // Toggle switch colors
            slider.classList.remove('checked');
            slider.style.backgroundColor = 'white';
        } else {
            // Change background to black and text color to white
            document.body.style.backgroundColor = 'black';
            helloName.forEach(element => {
                element.style.color = 'white';
            });
            slider.classList.add('checked');
            slider.style.backgroundColor = 'black';
        }
        isBackgroundBlack = !isBackgroundBlack;
    });
});
