// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Select all text boxes
    var textBoxes = document.querySelectorAll('.text-box');

    // Set the initial background image to image01.jpg
    document.body.style.backgroundImage = 'url(images/image01.jpg)';

    // Create an IntersectionObserver
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            // Check if the element is intersecting and the top part of the element is becoming visible
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                // Get the background image URL from the data attribute of the next section
                var newBg = entry.target.getAttribute('data-bg');
                // Change the background image of the body
                document.body.style.backgroundImage = 'url(' + newBg + ')';
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the next element is visible
    });

    // Observe each text box
    textBoxes.forEach(function (box) {
        observer.observe(box);
    });
});
