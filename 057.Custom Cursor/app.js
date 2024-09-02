let innerCursor = document.querySelector('.inner-cursor')
let outerCursor = document.querySelector('.outer-cursor')

console.log(innerCursor,outerCursor);

document.addEventListener('mousemove', (e) => {

    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
});

