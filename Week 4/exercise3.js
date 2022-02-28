function whenLoaded() {
    const element = document.getElementById("heading");
    element.innerHTML = "Value Changed";
}

addEventListener("DOMContentLoaded", whenLoaded);
