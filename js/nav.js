document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("avatarBtn");
    const menu = document.getElementById("avatarMenu");

    btn.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});
