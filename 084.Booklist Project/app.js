const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const booklist = document.getElementById('book-list')
const btn = document.querySelector('.btn')


btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (title.value == "" && author.value == "" && year.value == "") {
        alert("✍️ Fill the Form!")
    } else {

        const newRow = document.createElement('section')

        newRow.innerHTML = 
        `<div>${title.value}</div>
         <div>${author.value}</div>
         <div>${year.value}</div>
        `;  

        booklist.appendChild(newRow);
        
    }

    
})