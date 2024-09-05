let result = document.querySelector('.result-btn');

result.addEventListener('click', decimal);

function decimal() {
    let decimal = document.getElementById('number').value;

    let binary = "";
    while ( decimal > 0 ) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);

    }

    const h1 = document.createElement('h1');
    h1.innerHTML = `${binary}`;
    const container = document.querySelector('.results-container');
    container.append(h1);
}