// food swipper
const foodSwiper = new Swiper(".food-swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".food-button-next",
    prevEl: ".food-button-prev",
  },
  pagination: {
    el: ".food-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    993: { slidesPerView: 2 },
    1400: { slidesPerView: 3 },
  },
});

//chef swipper
const chefSwiper = new Swiper(".chef-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    993: { slidesPerView: 3 },
    1400: { slidesPerView: 4 },
  },
});

//testinominal swipper
const testinominalSwiper = new Swiper(".testinominal-swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".testinominal-button-next",
    prevEl: ".testinominal-button-prev",
  },
  pagination: {
    el: ".testinominal-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    993: { slidesPerView: 2 },
    1400: { slidesPerView: 3 },
  },
});
// counter

const counters = document.querySelectorAll(".feedback-number");
const speed = 100;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText.replace("+", "").trim();
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment) + "+";
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      updateCount();
      observer.unobserve(counter);
    }
  });

  observer.observe(counter);
});

// -----------------background slider

const swiper = new Swiper(".banner-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: { crossFade: true },
  pagination: { el: ".banner-swipper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

// -----
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
// const openModalBtn = document.getElementById("openModalBtn");
// const closeModalBtn = document.getElementById("closeModalBtn");
// const loginModal = document.getElementById("loginModal");

// openModalBtn.addEventListener("click", function () {
//   loginModal.style.display = "flex";
//   document.body.style.overflow = "hidden";
//   document.documentElement.style.overflow = "hidden";
// });

// closeModalBtn.addEventListener("click", function () {
//   loginModal.style.display = "none";
//   document.body.style.overflow = "";
//   document.documentElement.style.overflow = "";
// });
openModalBtn.addEventListener("click", function () {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  loginModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = scrollBarWidth + "px";
});

closeModalBtn.addEventListener("click", function () {
  loginModal.style.display = "none";
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
});

///new overlay background
const openModalBtn1 = document.getElementById("openModalBtn");
const closeModalBtn1 = document.getElementById("closeModalBtn");
const loginModal1 = document.getElementById("loginModal");
const bodyOverlay = document.getElementById("bodyOverlay");

openModalBtn1.addEventListener("click", () => {
  loginModal1.style.display = "flex";
  bodyOverlay.classList.add("active");
});

closeModalBtn1.addEventListener("click", () => {
  loginModal1.style.display = "none";
  bodyOverlay.classList.remove("active");
});

bodyOverlay.addEventListener("click", () => {
  loginModal1.style.display = "none";
  bodyOverlay.classList.remove("active");
});
