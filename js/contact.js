// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const openMap = document.getElementById("openMap");

  openMap.addEventListener("click", function () {
    Fancybox.show(
      [
        {
          src: `
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9934.476456237355!2d-0.12585928564069795!3d51.501856726938485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1762619313157!5m2!1sen!2sin"
            width="800" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>`,
          type: "html",
        },
      ],
      {
        Toolbar: {
          display: ["close"],
        },
        dragToClose: false,
        closeButton: "inside",
        animated: true,
        mainClass: "map-popup",
      }
    );
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


///new overlay background
const openModalBtn1 = document.getElementById('openModalBtn');
const closeModalBtn1 = document.getElementById('closeModalBtn');
const loginModal1 = document.getElementById('loginModal');
const bodyOverlay = document.getElementById('bodyOverlay');

openModalBtn1.addEventListener('click', () => {
  loginModal1.style.display = 'flex';
  bodyOverlay.classList.add('active');
});

closeModalBtn1.addEventListener('click', () => {
  loginModal1.style.display = 'none';
  bodyOverlay.classList.remove('active');
});

bodyOverlay.addEventListener('click', () => {
  loginModal1.style.display = 'none';
  bodyOverlay.classList.remove('active');
});

