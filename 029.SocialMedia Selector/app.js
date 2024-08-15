let selectField = document.getElementById('selectField');
let selectText = document.getElementById('selectText');
let list = document.getElementById('list');
let arrowIcon = document.getElementById('arrowIcon');
let options = document.querySelectorAll('.options');

selectField.addEventListener('click', () => {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
});

for (option of options) {
    option.onclick = function() {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}


// console.log(selectField);
// console.log(selectText);
// console.log(list);
// console.log(arrowIcon);
// console.log(options);
