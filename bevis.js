document.addEventListener('DOMContentLoaded', function() {
    // Add spooky sound effect on hover
    const links = document.querySelectorAll('a, h1');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const audio = new Audio('creepy-sound.mp3'); // Make sure you have this sound file
            audio.play();
        });
    });

    // Make images shake on hover
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            image.classList.add('shake');
        });
        image.addEventListener('mouseleave', function() {
            image.classList.remove('shake');
        });
    });
        // Add event listener for Home button click
        const homeButtons = document.querySelectorAll('.home-button');
        homeButtons.forEach(button => {
            button.addEventListener('click', function() {
                window.location.href = 'home.html'; // Change 'index.html' to the actual home page URL if different
            });
        });
    });
    
