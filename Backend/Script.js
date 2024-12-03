document.getElementById("welcomeButton").addEventListener("click", function() 
{
    document.getElementById("welcomePage").style.animation = "fadeOut 1s ease-out forwards";
    setTimeout(function() 
    {
        document.getElementById("welcomePage").style.display = "none";
        document.getElementById("homePage").style.display = "flex";
        showTab('enigma');
    }, 1000); 
});

document.getElementById("overlay").addEventListener("click", () => 
{
    const expandedCard = document.querySelector(".chapterCard.expanded");
    if (expandedCard) 
    {
        expandedCard.classList.remove("expanded");
        document.getElementById("overlay").style.display = "none";
        document.body.style.overflow = "";
    }
});

function showTab(tabName) 
{
    const tabs = document.querySelectorAll('.tabContent');
    tabs.forEach(tab => tab.style.display = 'none');
    
    document.getElementById(tabName).style.display = 'flex';
}

function expandCard(card) 
{
    const overlay = document.getElementById('overlay');
    const expandedCards = document.querySelectorAll('.chapterCard.expanded');

    expandedCards.forEach(c => 
    {
        c.classList.remove('expanded');
        c.querySelector('.expandedContent').style.display = 'none'; 
    });

    const displayLine = card.querySelector('.displayLine');
    if (displayLine) {
        displayLine.style.display = 'none';
    }

    card.classList.add('expanded');
    const expandedContent = card.querySelector('.expandedContent');
    if (expandedContent) {
        expandedContent.style.display = 'block'; 
    }

    overlay.style.display = 'block';

    overlay.onclick = () => 
    {
        card.classList.remove('expanded');
        if (expandedContent) 
        {
            expandedContent.style.display = 'none'; 
        }

        if (displayLine) 
        {
            displayLine.style.display = 'block'; 
        }

        overlay.style.display = 'none';
    };
}

function createInfoCard(title, text, imgSrc)
{
    const card = document.createElement('div');
    card.className = 'infoCard';

    if (imgSrc) 
    {
        const img = document.createElement('img');
        img.src = imgSrc;
        card.appendChild(img);
    }

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.textContent = text;
    card.appendChild(cardText);

    return card;
}

function adjustColorBrightness(color, amount) 
{
    let usePound = false;

    if (color[0] === "#") 
    {
        color = color.slice(1);
        usePound = true;
    }

    let num = parseInt(color, 16);

    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;

    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    return (usePound ? "#" : "") + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

document.querySelectorAll('.chapterCard').forEach(card => {
    const color = card.getAttribute('data-color');
    card.style.setProperty('--card-color', color);
    card.style.setProperty('--card-hover-color', adjustColorBrightness(color, -20));
});

const infoCardsContainer = document.getElementById('infoCardsContainer');
infoCardsContainer.appendChild(createInfoCard("Info Card Title", "This is a god damn nice text.", null));