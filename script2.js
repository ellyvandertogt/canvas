// https://www.youtube.com/watch?v=Yvz_axxWG4Y
// Drawing - 
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
});


//Drawinginteractive

const mouse = {
    x: undefined,
    y: undefined,
}

//click

canvas.addEventListener("click", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle()
});

// mousemove
canvas.addEventListener("mousemove", function(mousemove) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle()
});


function drawCircle() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2); // starting point to draw
    ctx.fill();
}
drawCircle()



