// isotope for food menu

var elem = document.querySelector(".grid");
var all = document.querySelector(".all");
var Indian = document.querySelector(".Indian");
var Italian = document.querySelector(".Italian");
var Arabian = document.querySelector(".Arabian");
var Mexican = document.querySelector(".Mexican");
var chinese = document.querySelector(".chinese");
var Japanese = document.querySelector(".Japanese");
var Bengali = document.querySelector(".Bengali");

var iso = new Isotope(elem, {
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
});

all.addEventListener("click", () => {
  iso.arrange({ filter: "*" });
});
Indian.addEventListener("click", () => {
  iso.arrange({ filter: ".Indian" });
});
Italian.addEventListener("click", () => {
  iso.arrange({ filter: ".Italian" });
});
Arabian.addEventListener("click", () => {
  iso.arrange({ filter: ".Arabian" });
});
Mexican.addEventListener("click", () => {
  iso.arrange({ filter: ".Mexican" });
});
chinese.addEventListener("click", () => {
  iso.arrange({ filter: ".chinese" });
});
Japanese.addEventListener("click", () => {
  iso.arrange({ filter: ".Japanese" });
});
Bengali.addEventListener("click", () => {
  iso.arrange({ filter: ".Bengali" });
});

// Select all heart icons
const hearts = document.querySelectorAll(".favorite-icon");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("liked"); // toggle red color
  });
});

// log in button
const modal = document.getElementById("loginModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//pre-loader

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.querySelector(".main-content");
  setTimeout(() => {
    preloader.classList.add("hidden");
    content.classList.add("show");
  }, 3000);
});

//add to cart

const cartIcons = document.querySelectorAll(".fa-basket-shopping");
const popup = document.getElementById("addToCartPopup");
const closeBtn1 = document.getElementById("closePopup");

const popupImg = document.querySelector(".popup-img");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupPrice = document.getElementById("popupPrice");

const quantityDisplay = document.getElementById("quantity");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let quantity = 1;

cartIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const card = e.target.closest(".food-card");

    const imgSrc = card.querySelector(".food-img").src;
    const title = card.querySelector(".food-title").textContent;
    const desc = card.querySelector(".food-text").textContent;
    const price = card.querySelector(".price").textContent;

    popupImg.src = imgSrc;
    popupTitle.textContent = title;
    popupDescription.textContent = desc;
    popupPrice.textContent = price;

    popup.style.display = "block";
    quantity = 1;
    quantityDisplay.textContent = quantity;
  });
});

closeBtn1.addEventListener("click", () => {
  popup.style.display = "none";
});

increaseBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > 1) quantity--;
  quantityDisplay.textContent = quantity;
});

// Optional: Close popup when clicking outside it
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});





//stop scrolling
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const loginModal = document.getElementById("loginModal");

openModalBtn.addEventListener("click", function () {
  loginModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", function () {
  loginModal.style.display = "none";
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
});
