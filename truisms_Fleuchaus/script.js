// JavaScript to handle video switching and state preservation
var videoPlayer = document.getElementById("videoPlayer");
var textBox = document.getElementById("text-box");

// Store video paths for three videos
var videoSources = ["videos/video01.mp4", "videos/video02.mp4", "videos/video03.mp4"];
// Store current video index (0 for video01, 1 for video02, 2 for video03)
var currentVideoIndex = 0;
// Store playback time for each video
var videoTime = [0, 0, 0];
// Flag to check if the first click has occurred
var isFirstClick = true;

// Start the video muted initially
videoPlayer.muted = true;

// Function to switch video
function switchVideo() {
    // Unmute sound only after the first click
    if (isFirstClick) {
        videoPlayer.muted = false;
        isFirstClick = false;
    }

    // Save the current playback time of the current video
    videoTime[currentVideoIndex] = videoPlayer.currentTime;

    // Increment the video index (cycle through 0, 1, 2)
    currentVideoIndex = (currentVideoIndex + 1) % 3;

    // Set the new video source and load it
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.currentTime = videoTime[currentVideoIndex];
    videoPlayer.play();
}

// Event listener for text box click
textBox.addEventListener("click", switchVideo);
