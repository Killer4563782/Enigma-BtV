function createTeamMember(name, role, imgSrc, info, socialLinks) 
{
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
    "Style/ProfilePictures/Jxson.png",
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
    [
        //Data would go here
    ]
));

teamContainer.appendChild(createTeamMember(
    "Xei", 
    "Builder", 
    "Style/ProfilePictures/Xei.png",
    "Designer with a knack for details.",
    [
        //Data would go here
    ]
));

teamContainer.appendChild(createTeamMember(
    "Will_Has_Tea", 
    "Builder", 
    "Style/ProfilePictures/WillHasTea.png",
    "Creative mind behind many designs.",
    [
        //Data would go here
    ]
));

teamContainer.appendChild(createTeamMember(
    "PeteThePirate", 
    "Builder", 
    "https://cdn.discordapp.com/avatars/827565942950461460/1824dda4c76d3a363289e1f230c25846?size=1024", 
    "no info there yet", 
    [
        //Data would go here
    ]
));

teamContainer.appendChild(createTeamMember(
    "cactoid", 
    "Builder", 
    "https://cdn.discordapp.com/avatars/772283951087747072/ed32dce64c04a557c7ec00614bb01e95?size=1024",
    "no info there yet", 
    [
        //Data would go here
    ]
));

teamContainer.appendChild(createTeamMember(
    "Black_Killer", 
    "Website Developer", 
    "https://cdn.discordapp.com/avatars/736282475818516560/7beb1b9aab684e62984215d0985f2404?size=1024", 
    "Created the website you're on right now", 
    [
        //Data would go here
    ]
))