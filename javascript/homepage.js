document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and insert header
    function fetchAndInsertHeader() {
        return fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('header').innerHTML = data;
            });
    }

    // Fetch and insert header, then execute the rest of the code
    fetchAndInsertHeader().then(() => {
        console.log("Header inserted successfully.");
        
        // Access the backgroundSwitch element
        const backgroundSwitch = document.getElementById('backgroundSwitch');
        const slider = document.querySelector('#backgroundSwitch .slider');
        const helloName = document.querySelectorAll('.hello, .name, .msg');
        const msg_div = document.querySelectorAll('.msg_div');
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
                msg_div.forEach(element => {
                    element.style.backgroundColor = 'white';
                    element.classList.remove('white-shadow');
                    element.classList.add('black-shadow');
                    element.classList.add('black-shadow:hover');
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
                msg_div.forEach(element => {
                    element.style.backgroundColor = 'black';
                    element.classList.remove('black-shadow');
                    element.classList.add('white-shadow');
                    element.classList.add('white-shadow:hover');
                });
                slider.classList.add('checked');
                slider.style.backgroundColor = 'black';
            }
            isBackgroundBlack = !isBackgroundBlack;
        });

        // Set opacity for specific page elements based on the current page
        var currentPage = window.location.href;
        console.log("Current page:", currentPage);
        if (currentPage.includes("index.html") || currentPage == "https://egr-portfolio.netlify.app") {
            document.getElementById('home_text').style.opacity = 0;
            document.getElementById('home_img').style.opacity = 1;
        }
        if (currentPage.includes("about.html") || currentPage == "https://egr-portfolio.netlify.app/about") {
            document.getElementById('about_text').style.opacity = 0;
            document.getElementById('about_img').style.opacity = 1;
        }
        if (currentPage.includes("projects.html") || currentPage == "https://egr-portfolio.netlify.app/projects") {
            document.getElementById('projects_text').style.opacity = 0;
            document.getElementById('projects_img').style.opacity = 1;
        }
        if (currentPage.includes("contact.html") || currentPage == "https://egr-portfolio.netlify.app/contact") {
            document.getElementById('contact_text').style.opacity = 0;
            document.getElementById('contact_img').style.opacity = 1;
        }
    }).catch(error => {
        console.error("Error fetching or inserting header:", error);
    });

    // Fetch and insert footer
    fetch('footer.html') 
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data
        }).catch(error => {
            console.error("Error fetching or inserting footer:", error);
        });
});
