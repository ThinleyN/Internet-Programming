function buttonClick() {
    const button = document.getElementById("circle");
    button.style.background = "blue";
    button.style.opacity = parseFloat(button.style.opacity) - 0.1;
}
function onload() {
    const button = document.getElementById("circle");
    button.style.opacity = 1;
    button.addEventListener("click", buttonClick)
}
document.addEventListener("DOMContentLoaded", onload);