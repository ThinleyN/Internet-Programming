function buttonClick() {
    setInterval(opacityTimer,10);
}

function opacityTimer() {
    const button = document.getElementById("circle");
    button.style.background = "blue";
    button.style.opacity = parseFloat(button.style.opacity) - 0.01;
}

let interval;
function moveButton(event){
    const button = document.getElementById("circle");
    if(interval){
        clearInterval(interval)
    }
    if(event.keyCode === 37){
      interval =  setInterval(function(){
            button.style.left = (button.offsetLeft - 10) + "px";
        },100)
    }
    if(event.keyCode === 38){
        interval =  setInterval(function(){
            button.style.top = (button.offsetTop - 10) + "px";
        },100)
    }
    if(event.keyCode === 39){
        interval =  setInterval(function(){
            button.style.left = (button.offsetLeft + 10) + "px";
        },100)
    }
    if(event.keyCode === 40) {
        interval = setInterval(function(){
            button.style.top = (button.offsetTop + 10) + "px";
        },100)
    }

}

function onload() {
    const button = document.getElementById("circle");
    button.style.opacity = 1;
    button.addEventListener("click", buttonClick)
    document.addEventListener("keydown", moveButton);
}
document.addEventListener("DOMContentLoaded", onload);