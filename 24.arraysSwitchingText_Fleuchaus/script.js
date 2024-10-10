var sentences = [
    "This image is a picture I took at the top of Sandia Mountains in New Mexico.",
    "The image to me is a reminder of the connections I made in New Mexico and what my future holds.",
    "One thing from my teenage years I remember is my friends and I going on a lot of adventures.",
    "Mountains make you work hard to get to the top.",
    "Life is a mountain of solvable problems, and I enjoy that.."
];

var index = 0;

document.getElementById('clickableImage').addEventListener('click', function() {
    index = (index + 1) % sentences.length; // Increment index and reset if it exceeds array length
    document.getElementById('dynamicText').innerText = sentences[index];
});
