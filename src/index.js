import "./style.scss";

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
