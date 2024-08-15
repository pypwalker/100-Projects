const allLables = document.querySelectorAll('.form-control label');

allLables.forEach((lable) => {
    lable.innerHTML = lable.innerHTML
    .split("")
    .map((letter, index) => 
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});

// console.log(allLables); // >NodeList(2)