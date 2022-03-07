function buttonClick() {
    const input = document.getElementById("text");
    const value = input.value;

    const valueDiv = document.getElementById("value");
    valueDiv.innerHTML = value;
}

function load() {
    const text = document.getElementById("text");
    text.addEventListener("keyup",buttonClick )
}

document.addEventListener("DOMContentLoaded", load);

