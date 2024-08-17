const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');
const buttons = document.querySelectorAll('button');

const upperBtn = document.querySelector('.uppercase');
const lowerBtn = document.querySelector('.lowercase');
const captBtn = document.querySelector('.capitalize');
const italicBtn = document.querySelector('.italic');
const boldBtn = document.querySelector('.bold');
const underlineBtn = document.querySelector('.underline');

inputField.addEventListener('keyup', () => {
    outputField.innerHTML = inputField.value;
    buttons.forEach(btn => {
    btn.style.pointerEvents = "all";
    });  
});

let p ;
// Uppercase Button
upperBtn.addEventListener('click', () => {
    upperBtn.classList.toggle('active');
    if (upperBtn.classList.contains('active')) {
        outputField.innerHTML = outputField.innerHTML.toUpperCase();
        

        lowerBtn.classList.remove('active');
        captBtn.classList.remove('active');
    }
});

// Lowercase Button
lowerBtn.addEventListener('click', () => {
    lowerBtn.classList.toggle('active');
    if (lowerBtn.classList.contains('active')) {
        outputField.innerHTML = outputField.innerHTML.toLowerCase(); 
        

        upperBtn.classList.remove('active');
        captBtn.classList.remove('active');
        
    }
});

// Lowercase Button
captBtn.addEventListener('click', () => {
    captBtn.classList.toggle('active');
    if (captBtn.classList.contains('active')) {
        outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() +
                                outputField.innerHTML.slice(1).toLowerCase();

        upperBtn.classList.remove('active');
        lowerBtn.classList.remove('active');
    }
});

// italic Button
italicBtn.addEventListener('click', () => {
    italicBtn.classList.toggle('active');
    if (italicBtn.classList.contains('active')) {
        outputField.style.fontStyle = "italic"; 
    } else { outputField.style.fontStyle = "normal" }
});

// Bold Button
boldBtn.addEventListener('click', () => {
    boldBtn.classList.toggle('active');
    if (boldBtn.classList.contains('active')) {
        outputField.style.fontWeight = "800";
    } else { outputField.style.fontWeight = "normal" }
});

// underline Button
underlineBtn.addEventListener('click', () => {
    underlineBtn.classList.toggle('active');
    if (underlineBtn.classList.contains('active')) {
        outputField.style.textDecoration = "underline"; 
    } else { outputField.style.textDecoration = "none";  }
});


//-----------------------------------------------------------------------------------
// buttons.forEach( btn => {
//     btn.addEventListener('click', () => {
//         if (btn.classList.contains('uppercase') ) 
//         return outputField.innerHTML = outputField.innerHTML.toUpperCase();
        
//         if (btn.classList.contains('lowercase') ) 
//         return outputField.innerHTML = outputField.innerHTML.toLowerCase(); 

//         if (btn.classList.contains('capitalize') ) {
//          outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() +
//                                 outputField.innerHTML.slice(1).toLowerCase(); }

//         if (btn.classList.contains('italic') ) 
//         return outputField.style.fontStyle = "italic"; 

//         if (btn.classList.contains('bold') ) 
//         return outputField.style.fontWeight = "800";

//         if (btn.classList.contains('underline') ) 
//         return outputField.style.textDecoration = "underline";       
//     });
// });

//-----------------------------------------------------------------------------------


