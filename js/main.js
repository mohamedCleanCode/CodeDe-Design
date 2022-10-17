// [1] --> Logic Of Seetinges Box

// Main
let icon = document.querySelector(".icon i");
let settingesBox = document.querySelector(".settinges-box");
icon.onclick = function () {
  this.classList.toggle("fa-spin");
  settingesBox.classList.toggle("open");
};

// Colors List
let colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});

// [2] --> Logic Of Lnading Page

let landingPage = document.querySelector(".landing-page");
let imgsOfArray = ["1bg.jpg", "2bg.jpg", "3bg.jpg", "4bg.jpg"];
let counter = setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgsOfArray.length);
  landingPage.style.backgroundImage = `url(imgs/${imgsOfArray[randomNumber]})`;
}, 3000);
