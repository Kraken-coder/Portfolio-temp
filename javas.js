console.log("Hello")
const hoverSound = document.getElementById("sound");

  let canPlay = true; // Prevents replay while inside the box

  document.querySelector("about-box").addEventListener("mouseenter", () => {
      if (canPlay) {
          hoverSound.currentTime = 0; // Reset audio to start
          hoverSound.play();
          canPlay = false; // Block further playback until mouse leaves
      }
  });

  document.querySelector("about-box").addEventListener("mouseleave", () => {
      canPlay = true; // Allow playback on re-entry
  });