const p = document.getElementById('p')
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', () => {
    let input = document.getElementById("input").value;
    // console.log(input);


    if (input !== "") {
        let regExp = new RegExp(input,'gi')
        p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>")
    }
})