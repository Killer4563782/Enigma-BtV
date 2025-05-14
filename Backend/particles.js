const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle 
{
    constructor(x, y, speedX, speedY, size) 
    {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.size = size;
    }

    move() 
    {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() 
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#5800a1";
        ctx.fill();
    }
}

function createParticles(count) 
{
    particles = [];
    for (let i = 0; i < count; i++) 
    {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 1;
        let speedY = (Math.random() - 0.5) * 1;
        particles.push(new Particle(x, y, speedX, speedY, size));
    }
}

function animate() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => 
    {
        p.move();
        p.draw();
    });
    requestAnimationFrame(animate);
}

createParticles(80);
animate();