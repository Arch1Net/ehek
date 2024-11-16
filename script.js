onload = () => {
  document.body.classList.remove("container");
};

// Add hover effect on flowers
document.querySelectorAll('.flower__leaf').forEach(leaf => {
  leaf.addEventListener('mouseenter', () => {
    leaf.style.transform = 'scale(1.2) rotate(5deg)';
  });

  leaf.addEventListener('mouseleave', () => {
    leaf.style.transform = 'scale(1) rotate(0)';
  });
});

// Burst effect for bubbles
document.querySelectorAll('.bubble').forEach(bubble => {
  bubble.addEventListener('click', () => {
    bubble.style.animation = 'burst 0.5s forwards';
  });
});

const button = document.querySelector('.reveal-button');
const message = document.querySelector('.hidden-message');

button.addEventListener('click', () => {
  message.style.display = 'block';
  button.style.display = 'none';
});



const audioButton = document.getElementById('audioButton');
const backgroundAudio = document.getElementById('backgroundAudio');
const volumeControl = document.getElementById('volumeControl');

// Play or pause the audio when the button is clicked
audioButton.addEventListener('click', function() {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        audioButton.textContent = '⏸ Pause Music'; // Change button text to "Pause"
    } else {
        backgroundAudio.pause();
        audioButton.textContent = '🎵 Play Music'; // Change button text to "Play"
    }
});

// Adjust the volume based on the slider input
volumeControl.addEventListener('input', function() {
    backgroundAudio.volume = volumeControl.value; // Set audio volume
});