const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');
const buttons = document.querySelectorAll('button');

inputField.addEventListener('keyup', () => outputField.innerHTML = inputField.value );

buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('uppercase') ) 
        return outputField.innerHTML = outputField.innerHTML.toUpperCase();
        
        if (btn.classList.contains('lowercase') ) 
        return outputField.innerHTML = outputField.innerHTML.toLowerCase(); 

        if (btn.classList.contains('capitalize') ) {
         outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() +
                                outputField.innerHTML.slice(1).toLowerCase(); }

        if (btn.classList.contains('italic') ) 
        return outputField.style.fontStyle = "italic"; 

        if (btn.classList.contains('bold') ) 
        return outputField.style.fontWeight = "800";

        if (btn.classList.contains('underline') ) 
        return outputField.style.textDecoration = "underline";       
    });
});

