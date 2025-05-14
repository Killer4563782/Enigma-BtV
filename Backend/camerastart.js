document.addEventListener("DOMContentLoaded", () => {
    const glyphs = document.querySelectorAll(".glyph");
    const glyphContainer = document.querySelector(".glyph-container");
    const totalGlyphs = glyphs.length;
    let foundGlyphs = 0;

    function activateGlyph(glyph) {
        glyph.classList.add("active");
    }

    function flashGlyph() {
        if (foundGlyphs < totalGlyphs) {
            const glyph = glyphs[foundGlyphs];
            activateGlyph(glyph);
            foundGlyphs++;
            if (foundGlyphs === totalGlyphs) {
                setTimeout(() => {
                    document.querySelector(".ui-text").textContent = "All Glyphs Found! Opening Portal...";
                    setTimeout(() => {
                        glyphs.forEach(glyph => {
                            glyph.classList.add("active");
                        });
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
        }, 7000);
    }, 1000);
});
