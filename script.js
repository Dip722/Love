// -------------------------------
// Floating Hearts Animation
// -------------------------------
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "?";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);

// -------------------------------
// Envelope Opening Animation
// -------------------------------
const envelope = document.getElementById("envelope");
const button = document.getElementById("openBtn");
const message = document.getElementById("loveMessage");
const music = document.getElementById("bgmusic");

button.addEventListener("click", function () {

    // Open envelope
    envelope.classList.add("open");

    // Play music
    music.play().catch(() => {
        console.log("Music autoplay blocked until user interaction.");
    });

    // Hide envelope after animation
    setTimeout(() => {
        envelope.style.display = "none";
        message.classList.add("show");
    }, 1800);

});

// -------------------------------
// Create Hearts on Mouse Click
// -------------------------------
document.addEventListener("click", function(e){

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "?";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.position = "fixed";
    heart.style.fontSize = "30px";
    heart.style.animationDuration = "2s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },2000);

});
