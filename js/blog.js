//chef swipper

const chefSwiper = new Swiper(".chef-swiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      grid: { rows: 2 },
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      grid: { rows: 2 },
      spaceBetween: 20,
    },
    746: {
      slidesPerView: 2,
      grid: { rows: 2 },
      spaceBetween: 25,
    },
    993: {
      slidesPerView: 3,
      grid: { rows: 2 },
      spaceBetween: 30,
    },
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

const fixedElements = document.querySelectorAll("header, .fixed, .sticky");

function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function openModal() {
  const scrollBarWidth = getScrollBarWidth();

  loginModal.style.display = "flex";

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  document.body.style.paddingRight = scrollBarWidth + "px";
  fixedElements.forEach((el) => {
    el.style.paddingRight = scrollBarWidth + "px";
  });
}

function closeModal() {
  loginModal.style.display = "none";

  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  document.body.style.paddingRight = "";
  fixedElements.forEach((el) => {
    el.style.paddingRight = "";
  });
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

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
