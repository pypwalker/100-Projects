const cursor =document.querySelector(".cursor");

document.addEventListener('mousemove', function(e){
    //event.pageX --> across
    // event.pageY --> up and down

    // console.log('pageX', e.pageX);
    // console.log('pageY', e.pageY);
    // console.log('x-'+ e.pageX, 'y-'+ e.pageY);

    moveCursor(e.pageX, e.pageY);
});

const moveCursor = function(pageX, pageY){
    cursor.style.left = pageX + 'px';
    cursor.style.top = pageY + 'px';
};