function buttonClick() {
    const input = document.getElementById("text");
    const value = input.value;

    const valueDiv = document.getElementById("value");
    valueDiv.innerHTML = value;
}

function showValue() {
    const input = document.getElementById("text");
    const value = input.value;

    alert(value);
}

function load() {
    const text = document.getElementById("text");
    text.addEventListener("keyup",buttonClick );

    const button = document.getElementById("button")
    button.addEventListener("click", showValue);
}

document.addEventListener("DOMContentLoaded", load);

