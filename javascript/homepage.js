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


    // keep the header links in an icon while in that page
    window.onload = function() {
        // Get the current page URL
        var currentPage = window.location.pathname;
        
        if (currentPage.includes("index.html")) {
            document.getElementById('home_text').style.opacity = 0;
            document.getElementById('home_img').style.opacity = 1;
        } else if (currentPage.includes("about.html")) {
            document.getElementById('about_text').style.opacity = 0;
            document.getElementById('about_img').style.opacity = 1;
        } else if (currentPage.includes("projects.html")) {
            document.getElementById('projects_text').style.opacity = 0;
            document.getElementById('projects_img').style.opacity = 1;
        }else if (currentPage.includes("contact.html")) {
            document.getElementById('contact_text').style.opacity = 0;
            document.getElementById('contact_img').style.opacity = 1;
        }
    };

});
