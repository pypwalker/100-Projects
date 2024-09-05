const searchContainer = document.querySelector('.container');
const magnifier = document.querySelector('.magnifier');
const mic = document.querySelector('.mic-icon');

magnifier.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    mic.classList.toggle('hidden');
})