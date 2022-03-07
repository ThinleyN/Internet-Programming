function buttonClick() {
    const button = document.getElementById("circle");
    button.style.background = "blue";
    button.style.opacity = 1;
}
function onload() {
    const button = document.getElementById("circle");
    button.addEventListener("click", buttonClick)
}
document.addEventListener("DOMContentLoaded", onload);