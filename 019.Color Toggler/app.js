let toggler = document.getElementById('switch');

toggler.addEventListener('click', () => {
    // console.log(toggler.checked);

    // if(toggler.checked === true){
    //     document.body.style.backgroundColor = 'black';
    // }else {
    //     document.body.style.backgroundColor = 'white';
    // }

    toggler.checked === true
    ? (document.body.style.backgroundColor = 'black')
    : (document.body.style.backgroundColor = 'white')
});