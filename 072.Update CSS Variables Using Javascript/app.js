const input = document.querySelectorAll('input');


input.forEach((input) => input.addEventListener('change', handleUpdate));

function handleUpdate() {
    // console.log(this.name)
    this.name == "base" ? (suppix = "") : (suppix = "px")
    document.documentElement.style.setProperty(`--${this.name}`,
    this.value + suppix)
}