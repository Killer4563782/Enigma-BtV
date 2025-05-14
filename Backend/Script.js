document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";

    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";

        const header = document.querySelector("header");
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
    }, 4000);
});
