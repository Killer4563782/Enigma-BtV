const starContainer = document.getElementById('stars');
for (let i = 0; i < 50; i++) {
    const star = Object.assign(document.createElement('div'), { className: 'star' });
    star.style.cssText = `
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    animation-duration: ${1 + Math.random() * 2}s;`;
    starContainer.appendChild(star);
}

const spawnMeteor = () => {
    const container = document.querySelector('.oracle-container');
    const distance = 300 + Math.random() * 200;
    const meteor = Object.assign(document.createElement('div'), { className: 'meteor' });

    meteor.style.setProperty('--dx', `${distance}px`);
    meteor.style.setProperty('--dy', `${distance}px`);
    meteor.style.width = `${1 + Math.random() * 2}px`;
    meteor.style.height = `${60 + Math.random() * 40}px`;

    container.appendChild(meteor);
    setTimeout(() => meteor.remove(), 1600);
};
setInterval(spawnMeteor, 1200);

const oracleText = document.getElementById('oracleText');
const textArray = [
    "Retrieving Clues",
    "Listening to Echoes",
    "Watching Stars",
    "Reading Forgotten Pages",
    "Studying Floorplans",
    "Trading Loot",
    "Awakening Mobs",
    "Opening Traveling Bag",
    "Following the Path",
    "What is my purpose?" //Chance of this needs to be decreased so it only appears every 10 times
];
setInterval(() => oracleText.textContent = textArray[Math.floor(Math.random() * textArray.length)], 2500);

document.addEventListener('mousemove', e => {
    const swirl = document.getElementById('swirl');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    swirl.style.transform = `rotate(360deg) translate(${x}px, ${y}px)`;
});

let progress = 0;
const progressBar = document.getElementById('progressBar');
const targetProgress = 100;
const progressSpeed = 0.2;
const updateProgress = () => {
    if (progress >= targetProgress) {
        progressBar.style.width = '100%';
        oracleText.textContent = "Void is Ready.";
         setTimeout(() => window.location.href = "Landingpage.html", 500);
        return;
    }
    progress += progressSpeed * (Math.random() * 0.7 + 0.3);
    progressBar.style.width = `${Math.min(progress, targetProgress).toFixed(1)}%`;
    requestAnimationFrame(updateProgress);
};
requestAnimationFrame(updateProgress);

const glyphs = [...document.querySelectorAll('.floating-glyphs span')];
const bounds = { x: window.innerWidth, y: window.innerHeight };
const flySpeed = 0.3;
const glyphStates = glyphs.map(el => ({
    el,
    pos: {
        x: parseFloat(el.style.left) / 100 * bounds.x,
        y: parseFloat(el.style.top) / 100 * bounds.y
    },
    vel: {
        x: (Math.random() * 2 - 1) * flySpeed,
        y: (Math.random() * 2 - 1) * flySpeed
    }
}));
const updateGlyphPositions = () => {
    glyphStates.forEach(g => {
        g.pos.x += g.vel.x;
        g.pos.y += g.vel.y;
        if (g.pos.x < 0 || g.pos.x > bounds.x) g.vel.x *= -1;
        if (g.pos.y < 0 || g.pos.y > bounds.y) g.vel.y *= -1;
        g.el.style.left = `${g.pos.x}px`;
        g.el.style.top = `${g.pos.y}px`;
    });
    requestAnimationFrame(updateGlyphPositions);
};
updateGlyphPositions();

const particleContainer = document.createElement('div');
particleContainer.className = 'particles';
document.body.appendChild(particleContainer);
for (let i = 0; i < 40; i++) {
    const p = Object.assign(document.createElement('div'), { className: 'particle' });
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${5 + Math.random() * 5}s`;
    p.style.animationDelay = `${Math.random() * 5}s`;
    particleContainer.appendChild(p);
}

document.addEventListener('mousemove', e => {
    document.querySelectorAll('.parallax-layer').forEach((layer, i) => {
        const depth = (i + 1) * 10;
        const x = (e.clientX / window.innerWidth - 0.5) * depth;
        const y = (e.clientY / window.innerHeight - 0.5) * depth;
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
});

const highlightOrder = [0, 1, 2, 3, 4, 5, 5, 4, 6, 7, 8, 9, 10, 11, 12];

const flashWhite = idx => {
    const el = glyphs[idx];
    if (!el) return;
    el.style.transition = "color 0.3s, text-shadow 0.3s";
    el.style.color = "white";
    el.style.textShadow = "0 0 10px white, 0 0 20px white";
    setTimeout(() => {
        el.style.color = "";
        el.style.textShadow = "";
    }, 500);
};

const startWhiteFlashSequence = () => {
    highlightOrder.forEach((idx, i) =>
        setTimeout(() => flashWhite(idx), i * 300)
    );
};

setTimeout(startWhiteFlashSequence, 2000);