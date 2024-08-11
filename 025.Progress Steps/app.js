// progress 
const progerss = document.getElementById("progress");
// prevBtn
const prevBtn = document.getElementById("prev");
// nextBtn
const nextBtn = document.getElementById("next");
// circles
const circles = document.querySelectorAll(".circle");

let activeIndex = 1;
prevBtn.disabled = true;

nextBtn.addEventListener('click', () => {
    activeIndex++;
    if (activeIndex > circles.length) {
        activeIndex = circles.length;
    }

    // console.log(activeIndex,circles.length);
    
    updataUI();
});

prevBtn.addEventListener('click', () => {
    activeIndex--;
    if (activeIndex < 1) {
        activeIndex = 1;
    }
    // console.log(activeIndex,circles.length);
    updataUI();
});

function updataUI() {
    circles.forEach((circle, index) => {
        if (index < activeIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll(".active");
    progerss.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%' ;

    if (activeIndex === 1) {
        prevBtn.disabled = true;
    } else if (activeIndex === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
        
       
}