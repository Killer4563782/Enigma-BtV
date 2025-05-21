document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";
});

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('chapterModal').style.display = 'none';
    document.body.style.overflow = 'auto'; 
});

document.getElementById('toggleInfo').addEventListener('click', () => {
    const info = document.getElementById('extraInfo');
    const btn = document.getElementById('toggleInfo');
    const visible = !info.classList.contains('hidden');
    info.classList.toggle('hidden');
    btn.textContent = visible ? 'Show More' : 'Show Less';
});

document.getElementById('prevImage').addEventListener('click', () => {
    if (images.length > 1) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById('modalImage').src = images[currentIndex];
    }
});

document.getElementById('nextImage').addEventListener('click', () => {
    if (images.length > 1) {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('modalImage').src = images[currentIndex];
    }
});

const chapterData = {
    "chapter-1": {
        title: "Mischievous Mansion",
        description: "Uncover the secrets hidden within an illager fortress, tainted by something dark.",
        images: [
            "Style/Assets/Mansion.png",
            "img/ch1-2.jpg",
            "img/ch1-3.jpg"
        ],
        extra: 
        `<p>Step into the shadows of the <strong>Mischievous Mansion</strong>. Recently appeared without a trace, its eerie halls hold secrets waiting to be unraveled. Explore its many twisting passages, face challenging enemies, and uncover the mysteries that have been concealed for so long.</p>
            <p>Within the mansion, every room reveals a new puzzle, every flickering candle a clue, every creaking floorboard a warning, and every shadow a potential threat. Work together with your team to overcome the unpredictable dangers lurking around every corner. Upgrade your gear, uncover custom armor, and unlock powerful abilities as you progress.</p>
            <p><em>What lies beneath the surface of this unsettling place?</em> Why did it appear so suddenly? And what forgotten secrets does it guard? Are you willing to risk it all?</p>
            <p><strong>Rumor has it:</strong> the mobs have become more evolved over the years… adapting to those who dare enter.</p>`
    },
    "chapter-2": {
        title: "Baneful Bastion",
        description: "Venture into the depths of the Nether's cindering realm.",
        images: [
            "Style/Assets/Bastion.png",
            "img/ch2-2.jpg"
        ],
        extra: "Details zu Kapitel 2"
    }
};


let images = [];
let currentIndex = 0;

document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', function () {
        const chapterId = this.dataset.chapter;
        console.log('Clicked button for:', chapterId);
        const data = chapterData[chapterId];
        console.log('Data loaded:', data);
        if (!data) return;

        images = data.images;
        currentIndex = 0;

        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('modalImage').src = images[currentIndex];
        document.getElementById('extraInfo').innerHTML = `<p>${data.extra}</p>`;
        document.getElementById('extraInfo').classList.add('hidden');
        document.getElementById('toggleInfo').textContent = 'Show More';

        document.body.style.overflow = 'hidden'; 
        document.getElementById('chapterModal').style.display = 'flex';

        console.log('Modal should be visible now.');
    });
});