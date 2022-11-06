window.addEventListener('DOMContentLoaded', () => {

    const pianoKeys = document.querySelectorAll('.piano svg a');
    const audio = [];

    pianoKeys.forEach((key,i) => {
        key.addEventListener('click', () => {
            audio[i] = new Audio();
            audio[i].src = `audio/key-${i}.mp3`;
            audio[i].volume = 0.3;
            audio[i].play();
        })
    })

})