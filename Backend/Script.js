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

function showTab(tabName) 
{
    const tabs = document.querySelectorAll('.tabContent');
    tabs.forEach(tab => tab.style.display = 'none');
    
    document.getElementById(tabName).style.display = 'flex';
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

document.querySelectorAll('.chapterCard').forEach(card => {
    const color = card.getAttribute('data-color');
    card.style.setProperty('--card-color', color);
    card.style.setProperty('--card-hover-color', adjustColorBrightness(color, -20));
});

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
  
    if (r > 255) 
    {
        r = 255;
    }
    else if (r < 0) 
    {
        r = 0;
    }
  
    if (g > 255) 
    {
        g = 255;
    }
    else if (g < 0) 
    {
        g = 0;   
    }
  
    if (b > 255) 
    {
        b = 255;
    }
    else if (b < 0) 
    {
        b = 0;
    }
  
    return (usePound ? "#" : "") + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}

document.addEventListener('DOMContentLoaded', function() 
{
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImage');
    var closeBtn = document.getElementsByClassName('close')[0];

    var images = document.querySelectorAll('.chapterCard img');
    images.forEach(function(img) 
    {
        img.addEventListener('click', function() 
        {
            modal.style.display = 'block';
            modalImg.src = this.src; 
        });
    });

    closeBtn.onclick = function() 
    {
        modal.style.display = 'none';
    }

    window.onclick = function(event) 
    {
        if (event.target === modal) 
            {
            modal.style.display = 'none';
        }
    }
});

function createTeamMember(name, role, imgSrc, info, socialLinks) {
    const member = document.createElement('div');
    member.className = 'teamMember';

    const img = document.createElement('img');
    img.src = imgSrc;
    member.appendChild(img);

    const memberName = document.createElement('h3');
    memberName.textContent = name; 
    member.appendChild(memberName);

    const memberRole = document.createElement('p');
    memberRole.textContent = role;
    member.appendChild(memberRole);

    const memberInfo = document.createElement('p');
    memberInfo.textContent = info;
    member.appendChild(memberInfo);

    const socialLinksContainer = document.createElement('div');
    socialLinksContainer.className = 'socialLinks';

    socialLinks.forEach(({ platform, url, icon }) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.title = platform;
        const iconElement = document.createElement('i');
        iconElement.className = `fab fa-${icon}`;
        link.appendChild(iconElement);
        socialLinksContainer.appendChild(link);
    });

    member.appendChild(socialLinksContainer);

    return member;
}

const teamContainer = document.getElementById('teamContainer');
teamContainer.appendChild(createTeamMember(
    "lucreator245", 
    "Organizer", 
    "https://cdn.discordapp.com/avatars/503499156174798849/a_d3550c4484b0ee2ecdc60fdfb2e416d4?size=1024",
    "Creator and visionary behind the project.",
    [
        { 
            platform: 'Youtube', 
            url: 'https://www.youtube.com/channel/UC3guzwu-tLY0ZcITto33SMA', 
            icon: 'youtube'
         }, 
         {
             platform: 'GitHub', 
             url: 'https://github.com/lucreator245', 
             icon: 'github'
        },
        {
            platform: 'Steam', 
            url: 'https://steamcommunity.com/profiles/76561199274814454', 
            icon: 'steam'
        }, 
        {
            platform: 'Twitch', 
            url: 'https://www.twitch.tv/lucreator245', 
            icon: 'twitch'
        }
    ]
));

teamContainer.appendChild(createTeamMember(
    "Jxson", 
    "Plugin Developer", 
    "https://cdn.discordapp.com/avatars/287874774204547073/880dd669f46f303d2bf2d90d9197cecf?size=1024",
    "Developer with a passion for clean code.",
    [
        { 
            platform: 'Steam', 
            url: 'https://steamcommunity.com/id/jxsonrl/', 
            icon: 'steam' 
        }, 
        { 
            platform: 'Github', 
            url: 'https://github.com/dev-json', 
            icon: 'github' 
        }
    ]
));

teamContainer.appendChild(createTeamMember(
    "TheMSTAAcorn", 
    "Builder", 
    "https://cdn.discordapp.com/avatars/977926323248967690/5ffa85baa5652cb7412c297d98d1f223?size=1024",
    "Expert in creating immersive environments.",
    []
));

teamContainer.appendChild(createTeamMember(
    "Xei", 
    "Builder", 
    "https://cdn.discordapp.com/avatars/1251974341294424156/8fd135006b6de0637e1f4e5a0727333a?size=1024",
    "Designer with a knack for details.",
    []
));

teamContainer.appendChild(createTeamMember(
    "Will_Has_Tea", 
    "Builder", 
    "https://cdn.discordapp.com/avatars/397040544834125825/0d65a6b87013b0391dd7f6e0500faf78?size=1024",
    "Creative mind behind many designs.",
    []
));

teamContainer.appendChild(createTeamMember(
    "PeteThePirate", 
    "Builder", 
    "https://cdn.discordapp.com/avatars/827565942950461460/1824dda4c76d3a363289e1f230c25846?size=1024", 
    "no info there yet", 
    []
));

teamContainer.appendChild(createTeamMember(
    "cactoid", 
    "Builder", 
    "https://cdn.discordapp.com/avatars/772283951087747072/ed32dce64c04a557c7ec00614bb01e95?size=1024",
    "no info there yet", 
    []
));

teamContainer.appendChild(createTeamMember(
    "Black_Killer", 
    "Website Developer", 
    "https://cdn.discordapp.com/avatars/736282475818516560/7beb1b9aab684e62984215d0985f2404?size=1024", 
    "Created the website you're on right now", 
    []
))

const infoCardsContainer = document.getElementById('infoCardsContainer');
infoCardsContainer.appendChild(createInfoCard("Title 1", "This is the first info card text.", "https://cdn.discordapp.com/attachments/1204857073658241065/1272993887803277433/2024-08-13_21.02.47.png?ex=66be50f1&is=66bcff71&hm=f6f724cfaa3f68d104f9600695223ac8d4afebcfee1e373ed930eb0f70dfe66f&"));
infoCardsContainer.appendChild(createInfoCard("Title 2", "This is the second info card text.", null));
infoCardsContainer.appendChild(createInfoCard("Title 3", "This is the third info card text.", "https://cdn.discordapp.com/attachments/1204857073658241065/1272667842763817082/2024-08-12_23.27.00.png?ex=66bdca0a&is=66bc788a&hm=8819bc357c3311ed896545464b69c420c70207bf7f8c6b57f952490f9db6b73d&"));