function h1Click() {
    const h1 = document.getElementById("heading");
    h1.innerHTML = "H1 changed";
}

function paragraphClick() {
    const h1 = document.getElementById("paragraph");
    h1.innerHTML = "p changed";
}

function h1Entered(){
    const h1 = document.getElementById("heading");
    h1.style.color = "red";
}

function h1Exit() {
    const h1 = document.getElementById("heading");
    h1.style.color = "black";
}

function loaded() {
    const h1 = document.getElementById("heading");
    h1.addEventListener("click", h1Click);
    h1.addEventListener("mouseenter", h1Entered);
    h1.addEventListener("mouseleave", h1Exit);

    const paragraph = document.getElementById("paragraph");
    paragraph.addEventListener("click", paragraphClick)
}

document.addEventListener("DOMContentLoaded",loaded);