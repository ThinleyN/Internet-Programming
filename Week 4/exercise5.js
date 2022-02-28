function h1Click() {
    const h1 = document.getElementById("heading");
    h1.innerHTML = "H1 changed";
}

function paragraphClick() {
    const h1 = document.getElementById("paragraph");
    h1.innerHTML = "p changed";
}

function loaded() {
    const h1 = document.getElementById("heading");
    h1.addEventListener("click", h1Click)

    const paragraph = document.getElementById("paragraph");
    paragraph.addEventListener("click", paragraphClick)
}

document.addEventListener("DOMContentLoaded",loaded);