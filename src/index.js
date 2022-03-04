import "./style.scss";

// LOGO
const logo = document.querySelector(".logo");

// logo.addEventListener("click", function () {
//   window.open("https://alimbolar.netlify.app");
// });

// NAVIGATION LINKS

const sections = document.querySelectorAll("main>section");
console.log(sections);
const nav = document.querySelector(".nav");
const navLinks = nav.querySelectorAll(".nav__item");

console.log(nav);

nav.addEventListener("click", displayView);

function displayView(e) {
  e.preventDefault();

  const targetlink = e.target.closest(".nav__item");

  if (!targetlink) return;
  const clickedLink = targetlink.dataset.link;

  const targetSection = document.querySelector(`.${clickedLink}`);

  sections.forEach((section) => section.classList.add("hidden"));

  console.log(targetSection);

  targetSection.classList.remove("hidden");

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  targetlink.classList.add("active");
}

// MODAL

const tools = document.querySelector(".tools");
const overlay = document.querySelector(".overlay");

console.log(tools);

tools.addEventListener("click", displayModal);

function displayModal(e) {
  e.preventDefault();

  const clickedTool = e.target.closest(".tool");

  console.log(clickedTool);

  if (!clickedTool) return;

  const modalName = clickedTool.dataset.modal;

  console.log(modalName);

  const modal = document.querySelector(`.${modalName}.hidden`);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach((item) =>
  item.addEventListener("click", closeActiveModal)
);

overlay.addEventListener("click", closeActiveModal);
// closeButtons.foaddEventListener("click", closeActiveModal);

function closeActiveModal() {
  overlay.classList.add("hidden");
  const footer = document.querySelector("footer");

  const allModals = footer.querySelectorAll(".modal");
  overlay.classList.add("hidden");

  allModals.forEach((modal) => modal.classList.add("hidden"));
}
