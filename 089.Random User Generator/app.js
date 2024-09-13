const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    getPerson(getData);
})


function getPerson(cb) {
    const url = 'https://randomuser.me/api/';
    const request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.onload = function() {
        if (this.status === 200) {
            cb(this.responseText, showData);
        }
    };

    request.send();
}

function getData(response, cb) {
    const data = JSON.parse(response)

    const {
        name: {first},
        name: {last},
        picture: {large},
        location: {street},
        phone,
        email,
    } = data.results[0]
    cb(first, last, large, street, phone, email);
}

function showData(first, last, large, street, phone, email) {
    document.getElementById('name').textContent = `${first} ${last}`;
    document.getElementById('first').textContent = first;
    document.getElementById('last').textContent = last;
    document.getElementById('street').textContent = street.name;
    document.getElementById('phone').textContent = phone;
    document.getElementById('email').textContent = email;
    document.getElementById('photo').src = large;
}

// ------------------------------------------------------------------------
// fetch method 
// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {

//     getPerson();
// });

// function getPerson() {
//     const url = 'https://randomuser.me/api/';

//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         }).then( data => {
//             console.log(data.results[0])

//     document.getElementById('name').textContent = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
//     document.getElementById('first').textContent = data.results[0].name.first;
//     document.getElementById('last').textContent = data.results[0].name.last;
//     document.getElementById('street').textContent = data.results[0].location.city;
//     document.getElementById('phone').textContent = data.results[0].phone;
//     document.getElementById('email').textContent = data.results[0].email;
//     document.getElementById('photo').src = data.results[0].picture.large;
//         }    
//         )
//         .catch(error => console.error('Fetch error:', error));
// }