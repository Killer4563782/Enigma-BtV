const starContainer = document.getElementById('stars');
for (let i = 0; i < 50; i++) 
{
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (1 + Math.random() * 2) + 's';
    starContainer.appendChild(star);
}

function spawnMeteor() 
{
    const container = document.querySelector('.oracle-container');

    const distance = 300 + Math.random() * 200;
    const dx = distance;
    const dy = distance;

    const meteor = document.createElement('div');
    meteor.className = 'meteor';

    meteor.style.setProperty('--dx', dx + 'px');
    meteor.style.setProperty('--dy', dy + 'px');

    meteor.style.width = (1 + Math.random() * 2) + 'px';
    meteor.style.height = (60 + Math.random() * 40) + 'px';

    container.appendChild(meteor);

    setTimeout(() => meteor.remove(), 1600);
}

setInterval(spawnMeteor, 1200);

const oracleText = document.getElementById('oracleText');
const textArray = [
    "Decoding Celestial Prophecies...",
    "Aligning Star Patterns...",
    "Reading Temporal Echoes...",
    "Summoning the Oracle..."
];

setInterval(() => {
    const index = Math.floor(Math.random() * textArray.length);
    oracleText.textContent = textArray[index];
}, 5000);

document.addEventListener('mousemove', (e) => {
    const swirl = document.getElementById('swirl');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    swirl.style.transform = `rotate(360deg) translate(${x}px, ${y}px)`;
});

let progress = 0;
const progressBar = document.getElementById('progressBar');
const targetProgress = 100;
const progressSpeed = 0.2; 

function updateProgress() {
  if (progress >= targetProgress) {
    progress = targetProgress;
    progressBar.style.width = progress + '%';
    oracleText.textContent = "Oracle Ready.";
    setTimeout(() => {
      window.location.href = "Landingpage.html";
    }, 500);
    return;
  }

  progress += progressSpeed * (Math.random() * 0.7 + 0.3); // etwas Variation
  progressBar.style.width = Math.min(progress, targetProgress).toFixed(1) + '%';
  requestAnimationFrame(updateProgress);
}

requestAnimationFrame(updateProgress);