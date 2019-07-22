// DRUM KIT (Modified Wes Bos JS30 Challenge)
'use strict';
// Listen for key events
document.addEventListener('keydown', main);

// Event unction
function main(event) {
    console.log(event.keyCode);
    let key = event.keyCode;

    if (key == 65) { // "a"
        // Play A-clap
        let audio = document.getElementById('clap');
        audio.currentTime = 0; // .currentTime = 0, interupts current play and play at 0
        audio.play(); // .play
        document.getElementById('A').classList.add('playing');

    } else if (key == 83) { // "s"
        // Play S-hihat
        let audio = document.getElementById('hihat');
        audio.currentTime = 0; // .currentTime = 0, interupts current play and play at 0
        audio.play();
        document.getElementById('S').classList.add('playing');

    } else if (key == 68) {
        // Play D-kick
        let audio = document.getElementById('kick');
        audio.currentTime = 0; // .currentTime = 0, interupts current play and play at 0
        audio.play();
        document.getElementById('D').classList.add('playing');

    } else if (key == 70) {
        // Play F-openhat
        let audio = document.getElementById('openhat');
        audio.currentTime = 0; // .currentTime = 0, interupts current play and play at 0
        audio.play();
        document.getElementById('F').classList.add('playing');

    } else if (key == 71) {
        // Play G-boom
        let audio = document.getElementById('boom');
        audio.currentTime = 0; // .currentTime = 0, interupts current play and play at 0
        audio.play();
        document.getElementById('G').classList.add('playing');

    } else if (key == 72) {
        // Play H-ride
        let audio = document.getElementById('ride');
        audio.currentTime = 0; // .currentTime = 0, interupts current play and play at 0
        audio.play();
        document.getElementById('H').classList.add('playing');

    } else if (key == 74) {
        // Play J-snare
        let audio = document.getElementById('snare');
        audio.currentTime = 0; // .currentTime = 0, interupts current play and play at 0
        audio.play();
        document.getElementById('J').classList.add('playing');

    } else if (key == 75) {
        // Play K-tom
        let audio = document.getElementById('tom');
        audio.currentTime = 0; // .currentTime = 0, interupts current play and play at 0
        audio.play();
        document.getElementById('K').classList.add('playing');

    } else if (key == 76) {
        // Play L-tink
        let audio = document.getElementById('tink');
        audio.currentTime = 0; // .currentTime = 0, interupts current play and play at 0
        audio.play();
        document.getElementById('L').classList.add('playing');
    }
}
// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition and function
function removePlaying() {
    // console.log(this);

    // this variable uses ElementById used
    this.classList.remove('playing');
}