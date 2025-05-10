window.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.hero__video-file');
    const heroVideo = document.querySelector('.hero__video');
    const playBtn = document.querySelector('.hero__video-btn');

    heroVideo.addEventListener('click', firstPlay);

    function firstPlay() {
        video.currentTime = 0;
        video.controls = true;
        video.muted = false;
        video.style.pointerEvents = 'painted';
        video.play();
        playBtn.style.display = 'none';
        heroVideo.removeEventListener('click', firstPlay)
    };
});