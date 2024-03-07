

// Change background color between gray, black, and white based on mouse position
document.addEventListener('mousemove', function(event) {
    const body = document.querySelector('body');
    const mouseX = Math.round((event.clientX / window.innerWidth)); // Adjusted to fit within 0-2 range
    const colors = ['black', 'gray']; // Array of colors (gray, black, white)
    body.style.backgroundColor = colors[mouseX];
});

