const inputs = document.querySelectorAll(".controls input");

function controles() {
    const sufijo = this.dataset.sizing || ""
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sufijo)
}


inputs.forEach(input => input.addEventListener("change", controles))
inputs.forEach(input => input.addEventListener("mousemove", controles))