const openButton = document.getElementById("openButton");

const giftBox = document.getElementById("giftBox");

const giftPage = document.getElementById("giftPage");

const surprisePage = document.getElementById("surprisePage");

let opened = false;

// MỞ HỘP QUÀ

openButton.addEventListener("click", function () {
  if (opened) return;

  opened = true;

  giftBox.classList.add("opened");

  openButton.disabled = true;

  // Chuyển sang trang cây trái tim

  setTimeout(function () {
    giftPage.classList.add("hide");

    surprisePage.classList.add("show");

    // Bắt đầu hiệu ứng trái tim rơi

    setInterval(createHeart, 350);
  }, 1200);
});

// TẠO TRÁI TIM RƠI

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("falling-heart");

  const hearts = ["💗", "💖", "💕", "💓", "💜"];

  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 6000);
}
