const game = { timer: 0, start: null }

// Create Message Element
const message = document.createElement('div');
message.classList.add('message');
document.body.prepend(message);
message.textContent = "Press To Start";

// Create a Box 
const box = document.createElement('div');
box.classList.add('box');

box.addEventListener('click', () => {

    box.textContent = ""
    box.style.display = 'none'
    game.timer = setTimeout(addBox, randomNumbers(3000))

    if (!game.start) {
        message.textContent = "Watch for element and click it"
    } else {
        const current = new Date().getTime();
        const duration = (current - game.start) / 1000;
        message.textContent = `It took ${duration} seconds to click.`
    }
});

const output = document.querySelector(".output");
output.append(box);




function addBox() {
    game.start = new Date().getTime();
    const container = output.getBoundingClientRect();               //  toget the final output_div 's width & height
    const dim = [randomNumbers(50) + 20, randomNumbers(50) + 20];   // it just an array of two random value
    box.style.display = 'block'
    box.style.width = `${dim[0]}px`;
    box.style.height = `${dim[1]}px`;
    box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6)
    box.style.left = randomNumbers(container.width - dim[0]) + "px";    // container.width = output.offsetWidth
    box.style.top = randomNumbers(container.height - dim[1]) + "px";    // container.height = output.offsetHeight
    box.style.borderRadius = randomNumbers(50) + "%";
}


function randomNumbers(max) {
    return Math.floor(Math.random() * max);
}

//------------------------------------------------------------------
// Instead of addBox() ,  rdnBox() is also fine✔️

// function rdnBox() {
//     let r1 = randomNumbers(50) + 20;
//     let r2 = randomNumbers(50) + 20;
//     game.start = new Date().getTime();
//     box.style.display = 'block';
//     box.style.width = `${r1}px`;
//     box.style.height = `${r2}px`;
//     box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6)
//     box.style.left = randomNumbers(output.offsetWidth - r1) + "px";
//     box.style.top = randomNumbers(output.offsetHeight - r2) + "px";
//     box.style.borderRadius = randomNumbers(50) + "%";
// }