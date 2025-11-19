const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 150, y = 150;
let score = 0;

let star = {
    x: Math.random() * 280 + 10,
    y: Math.random() * 280 + 10
};

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") y -= 10;
    if (e.key === "ArrowDown") y += 10;
    if (e.key === "ArrowLeft") x -= 10;
    if (e.key === "ArrowRight") x += 10;
});

function loop() {
    ctx.clearRect(0, 0, 400, 400);

    // player
    ctx.fillStyle = "#4A8BFF";
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();

    // star
    ctx.fillStyle = "#FFE15D";
    ctx.beginPath();
    ctx.arc(star.x, star.y, 10, 0, Math.PI * 2);
    ctx.fill();

    // check collision
    if (Math.hypot(x - star.x, y - star.y) < 20) {
        score++;
        star.x = Math.random() * 280 + 10;
        star.y = Math.random() * 280 + 10;
    }

    ctx.fillStyle = "#333";
    ctx.font = "20px Nunito";
    ctx.fillText("Score: " + score, 10, 25);

    requestAnimationFrame(loop);
}
loop();
