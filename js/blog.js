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
    1400: { slidesPerView: 3 },
  },
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
