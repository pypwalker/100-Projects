let btns = document.querySelectorAll('input');
let body = document.querySelector('body');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        body.className = btn.classList;

    });
});