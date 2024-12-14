document.addEventListener('DOMContentLoaded', function() {
    // Play spooky sound on page load
    const spookySound = document.getElementById('spooky-sound');
    if (spookySound) {
        spookySound.play();
    }

    // Add spooky elements to the page
    const body = document.body;
    const spookyElements = document.createElement('div');
    spookyElements.classList.add('spooky-elements');
    body.appendChild(spookyElements);

    const icons = [
        'anime/halloween-1166_512.gif',
        'anime/ghost-15692_512.gif',
        'anime/halloween-15592_512.gif',
        'anime/halloween-7291_512.gif',
        'anime/cat-1423_512.gif',
        'anime/witch-7518_512.gif',
        'anime/halloween-1166_512.gif',
        'anime/ghost-15692_512.gif',
        'anime/halloween-15592_512.gif',
        'anime/halloween-7291_512.gif',
        'anime/cat-1423_512.gif',
        'anime/witch-7518_512.gif'
    ];

    // Function to generate random positions while avoiding the center text area
    function randomPosition() {
        let top, left;
        do {
            top = Math.random() * 100;
            left = Math.random() * 100;
        } while (top > 20 && top < 80 && left > 20 && left < 80);
        return { top, left };
    }

    icons.forEach((icon, index) => {
        const { top, left } = randomPosition();
        const spookyElement = document.createElement('img');
        spookyElement.src = icon;
        spookyElement.classList.add('spooky-element');
        spookyElement.style.top = `${top}%`;
        spookyElement.style.left = `${left}%`;
        spookyElement.style.width = '50px';
        spookyElement.style.height = '50px';
        spookyElement.style.animationDelay = `${index * 0.5}s`;
        spookyElements.appendChild(spookyElement);
    });
});
