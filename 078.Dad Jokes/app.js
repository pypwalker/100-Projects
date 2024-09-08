// https://icanhazdadjoke.com/
const btn = document.getElementById('btn');

btn.addEventListener('click', joke);


async function joke() {
    let config = {
        headers: {
            Accept: "application/json",
        },
    };

    let a = await fetch("https://icanhazdadjoke.com/", config)
    console.log(typeof(a)); // Object
    let b = await a.json();
    document.getElementById("content").innerHTML = b.joke;
}