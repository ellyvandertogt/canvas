// https://www.youtube.com/watch?v=Yvz_axxWG4Y
// Particles - 17:50
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

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

});

// mousemove
canvas.addEventListener("mousemove", function(mousemove) {
    mouse.x = event.x;
    mouse.y = event.y;
    
});


class Particle {
    constructor() {
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1; //in order to move different direction= positive and negative
        this.speedY = Math.random() * 3 - 1; // (-) movement up and down
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY; // 2D vector
    }
    draw() {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2); // starting point to draw
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}
init();

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}
animate();

