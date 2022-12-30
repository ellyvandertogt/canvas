// https://www.youtube.com/watch?v=Yvz_axxWG4Y
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    // ctx.fillStyle = "white";
    // ctx.fillRect(10, 20, 150, 50);
});

// ctx.fillStyle = "white";
// ctx.fillRect(10, 20, 150, 50);

//Drawing a circle
ctx.fillStyle = "blue";
ctx.strokeStyle = "red";
ctx.lineWidth = 15;
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2); // startin point to draw 
ctx.stroke();
ctx.fill();
console.log(ctx);
