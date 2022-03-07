function buttonClick() {
    setInterval(opacityTimer,10);
}

function opacityTimer() {
    const button = document.getElementById("circle");
    button.style.background = "blue";
    button.style.opacity = parseFloat(button.style.opacity) - 0.01;
}

function onload() {
    const button = document.getElementById("circle");
    button.style.opacity = 1;
    button.addEventListener("click", buttonClick)
}
document.addEventListener("DOMContentLoaded", onload);