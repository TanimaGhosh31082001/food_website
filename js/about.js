const featureSwiper = new Swiper(".feature-swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".feature-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    746: { slidesPerView: 2 },
    993: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
    1400: { slidesPerView: 5 },
  },
});

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".video-modal .close-btn");

document.querySelectorAll(".play-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const slide = btn.closest(".swiper-slide");
    const videoSrc = slide.getAttribute("data-video");
    modalVideo.src = videoSrc;
    modal.classList.add("active");
    modalVideo.play();
  });
});

// Close modal on "×" button
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modalVideo.pause();
  modalVideo.src = "";
});

// Close modal when clicking outside video
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.src = "";
  }
});

//log in button
const modal1 = document.getElementById("loginModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn1 = document.getElementById("closeModalBtn");

openBtn.addEventListener("click", () => {
  modal1.style.display = "flex";
});

closeBtn1.addEventListener("click", () => {
  modal1.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal1) {
    modal1.style.display = "none";
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

//accordian icon change

document.querySelectorAll(".accordion-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".icon-toggle").forEach((icon) => {
      icon.classList.replace("fa-minus", "fa-plus");
    });
    const icon = btn.querySelector(".icon-toggle");
    icon.classList.toggle("fa-plus", btn.classList.contains("collapsed"));
    icon.classList.toggle("fa-minus", !btn.classList.contains("collapsed"));
  });
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
