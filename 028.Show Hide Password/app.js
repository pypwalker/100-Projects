const input = document.querySelector('input');
const eye = document.querySelector('#eye-icon');

eye.addEventListener('click', () => {
    if(input.value === "") {
        console.log("Nothing input");
    }else {
        if(input.type === 'password') {
            eye.classList.remove('fa-eye');
            eye.classList.add('fa-eye-slash');
            input.type = 'text';
        } else {
            eye.classList.remove('fa-eye-slash');
            eye.classList.add('fa-eye');
            input.type = "password"
        }
    }

    

    // REACTOR
    // input.type === "password" ? (input.type = "text") : (input.type = "password");
});