// --- 1. Efeito de Digitação (Typewriter) ---
// Certifique-se de que o link do TypewriterEffect está no HTML
const typewriterSpan = document.getElementById('typewriter-text');

if (typewriterSpan) {
    const typewriter = new Typewriter(typewriterSpan, {
        loop: true,
        delay: 75,
    });

    typewriter
        .typeString('Full_Stack_Systems')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Mobile_Solutions')
        .pauseFor(2000)
        .deleteAll()
        .typeString('AI_Integrations')
        .pauseFor(2500)
        .start();
}

// --- 2. Efeito de Partículas Sutil no Fundo (Particles) ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    // Limitando o número para não pesar
    if (numberOfParticles > 100) numberOfParticles = 100;

    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 0.5; // Partículas pequenas
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2; // Movimento muito lento
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = 'rgba(0, 242, 255, 0.3)'; // Ciano transparente

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
}

init();
animate();

// Ajustar canvas no redimensionamento
window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});





window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 0';
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.padding = '1.5rem 0';
        nav.style.background = 'rgba(0, 0, 0, 0.7)';
    }
});



