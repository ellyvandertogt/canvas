// https://www.youtube.com/watch?v=Yvz_axxWG4Y

// Dot
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
});


ctx.fillStyle = "blue";
ctx.strokeStyle = "red";
ctx.lineWidth = 15;
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2); // starting point to draw 
ctx.stroke();
ctx.fill();
console.log(ctx);
