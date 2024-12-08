window.onload = function () {
  // Paths to the two audio tracks
  var audioTracks = ["sound/audio1.mp3", "sound/audio2.mp3"];
  var currentAudioIndex = 0;

  // Create two audio elements
  var audio1 = new Audio(audioTracks[0]);
  var audio2 = new Audio(audioTracks[1]);

  // Enable looping for both audio tracks
  audio1.loop = true;
  audio2.loop = true;

  // Start playing the first audio track
  audio1.play();

  // Add click event listener to switch audio tracks
  document.addEventListener("click", function () {
    if (currentAudioIndex === 0) {
      // Pause the first track, retain currentTime, and switch to the second track
      audio1.pause();
      audio2.currentTime = audio1.currentTime; // Sync to the same point
      audio2.play();
      currentAudioIndex = 1;
    } else {
      // Pause the second track, retain currentTime, and switch to the first track
      audio2.pause();
      audio1.currentTime = audio2.currentTime; // Sync to the same point
      audio1.play();
      currentAudioIndex = 0;
    }
  });
};
