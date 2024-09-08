let btn = document.querySelector('.btn');
let body = document.body;
let audio = document.getElementById('audio');


btn.addEventListener('click', () => {
    body.classList.toggle("on");
    audio.play();
    // audio.pause();
})
