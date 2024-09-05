const genBtn = document.querySelector('.btn1');
const copyBtn = document.querySelector('.btn2');
let password = document.getElementById('password').value;

genBtn.addEventListener('click', () => {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPJRSTUVWXYZ";
    passwordLenght = 7;
    password = "";
    for (let i = 0; i <= passwordLenght; i++) {
        let randdomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randdomNumber, randdomNumber + 1);
    }
    document.getElementById('password').value = password;
});

copyBtn.addEventListener('click', () => {
    let copyText = document.getElementById('password');
    copyText.select();
    document.execCommand('copy');
});