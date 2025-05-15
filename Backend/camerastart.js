document.addEventListener("DOMContentLoaded", () => {
    const glyphs = document.querySelectorAll(".glyph");
    const glyphContainer = document.querySelector(".glyph-container");
    const uiText = document.querySelector(".ui-text");
    const totalGlyphs = glyphs.length;
    let foundGlyphs = 0;

    glyphContainer.classList.remove("hidden");
    glyphContainer.classList.add("show");

    glyphs.forEach(g => {
        g.style.visibility = "hidden";
        g.style.opacity = "0";
    });

    function activateGlyph(glyph) {
        glyph.style.visibility = "visible";
        glyph.style.opacity = "1";
        glyph.classList.add("found");
    }

    function flashGlyph() {
        if (foundGlyphs < totalGlyphs) {
            const glyph = glyphs[foundGlyphs];
            activateGlyph(glyph);
            foundGlyphs++;

            if (foundGlyphs === totalGlyphs) {
                setTimeout(() => {
                    uiText.textContent = "All Glyphs Found! Opening Portal...";
                    setTimeout(() => {
                        glyphs.forEach(g => g.classList.add("active"));
                        setTimeout(() => {
                            window.location.href = "Landingpage.html";
                        }, 2000);
                    }, 500);
                }, 500);
            }
        }
    }

    setTimeout(() => {
        const interval = setInterval(flashGlyph, 1000);
        setTimeout(() => {
            clearInterval(interval);
        }, totalGlyphs * 1000);
    }, 1000);
});
