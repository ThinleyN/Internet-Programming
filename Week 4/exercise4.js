function whenLoaded() {
    const element = document.getElementById("heading");
    element.firstChild.nodeValue = "Value Changed";

    const paragraph = document.getElementById("paragraph");
    paragraph.firstChild.nodeValue = "Paragraph is also changed";
}

document.addEventListener("click", whenLoaded);
