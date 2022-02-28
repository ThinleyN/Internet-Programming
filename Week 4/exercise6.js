function buttonClick() {
    const input = document.getElementById("text");
    const value = input.value;
    alert(value);
}

function load() {
    const button = document.getElementById("button");
    button.addEventListener("click",buttonClick )
}

document.addEventListener("DOMContentLoaded", load);

