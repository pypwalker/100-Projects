const ratings = document.querySelectorAll('.rating');
const  ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satified';

ratingsContainer.addEventListener('click', e => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActives()
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML
    }
});

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
     <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThobTRnN2xlbnhpMndiN3lwNjQyOGh3bDRwMjZ4Mm9zN3p0eGd1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lrnCl728qgEkZl6sX2/giphy.webp" />
    <strong>Thank you ❤️❤️</strong>
    <br>
    <strong>✍️ ${selectedRating} </strong>
    
    `;
});

function removeActives() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}