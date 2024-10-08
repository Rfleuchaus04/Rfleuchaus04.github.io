var images = [
    document.getElementById('image1'),
    document.getElementById('image2'),
    document.getElementById('image3')
];

var currentImageIndex = 0;

document.getElementById('backgroundImage').addEventListener('click', function() {
    // Hide the current image
    images[currentImageIndex].classList.remove('visible');
    images[currentImageIndex].classList.add('hidden');

    // Move to the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Show the next image
    images[currentImageIndex].classList.remove('hidden');
    images[currentImageIndex].classList.add('visible');
});
