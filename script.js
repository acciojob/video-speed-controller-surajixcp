const video = document.getElementById('video');
const playerButton = document.getElementById('player__button');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playbackSpeed');
const progressFilled = document.getElementById('progress__filled');

playerButton.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', updateProgress);
rewindButton.addEventListener('click', () => rewind(10));
forwardButton.addEventListener('click', () => forward(25));
volumeInput.addEventListener('input', updateVolume);
playbackSpeedInput.addEventListener('input', updatePlaybackSpeed);

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playerButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playerButton.textContent = '►';
    }
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

function rewind(seconds) {
    video.currentTime = Math.max(0, video.currentTime - seconds);
}

function forward(seconds) {
    video.currentTime = Math.min(video.duration, video.currentTime + seconds);
}

function updateVolume() {
    video.volume = volumeInput.value;
}

function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeedInput.value;
}
