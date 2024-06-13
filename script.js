// script.js
document.addEventListener('DOMContentLoaded', function() {
    paper.install(window);
    paper.setup('landingCanvas');

    // Create a Paper.js project
    const canvas = paper.project.view;

    // Generate random colored circles
    const circles = [];
    for (let i = 0; i < 50; i++) {
        const circle = new paper.Path.Circle({
            center: [Math.random() * canvas.bounds.width, Math.random() * canvas.bounds.height],
            radius: Math.random() * 50 + 10,
            fillColor: new paper.Color({
                hue: Math.random() * 360,
                saturation: 1,
                brightness: 1
            })
        });
        circles.push(circle);
    }

    // Animation loop
    paper.view.onFrame = (event) => {
        circles.forEach(circle => {
            circle.position.x += Math.sin(event.time + circle.bounds.height) * 0.5;
            circle.position.y += Math.cos(event.time + circle.bounds.width) * 0.5;
        });
    };

    // Sample images for gallery
    const galleryImages = [
        'https://source.unsplash.com/random/300x300?trash',
        'https://source.unsplash.com/random/301x301?trash',
        'https://source.unsplash.com/random/302x302?trash',
        'https://source.unsplash.com/random/303x303?trash',
        'https://source.unsplash.com/random/304x304?trash',
        'https://source.unsplash.com/random/305x305?trash'
    ];

    const galleryGrid = document.querySelector('.gallery-grid');
    galleryImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Gallery image';
        galleryGrid.appendChild(img);
    });
});
