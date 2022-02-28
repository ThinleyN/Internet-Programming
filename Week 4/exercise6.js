function buttonClick() {
    const input = document.getElementById("text");
    const value = input.value;

    const valueDiv = document.getElementById("value");
    valueDiv.innerHTML = value;
    // alert(value);
}

function load() {
    const button = document.getElementById("button");
    button.addEventListener("click",buttonClick )
}

document.addEventListener("DOMContentLoaded", load);

