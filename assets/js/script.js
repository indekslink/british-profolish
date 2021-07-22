const toggleMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("nav");
const toTop = document.querySelector(".to-top");
const navlink = document.querySelectorAll("nav a.nav-link");
const loader = document.getElementById("loader");

navlink.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    e.preventDefault();
    const el = document.querySelector(`.${nav.getAttribute("data-area")}`);
    if (el) {
      window.scrollTo(0, el.offsetTop - 60);
    }
  });
});

toggleMenu.addEventListener("click", function () {
  this.classList.toggle("show");
  if (window.scrollY > 50) return false; // stop execute next program
  navbar.classList.toggle("scroller", this.classList.contains("show"));
});
toTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.onload = () => {
  loader.classList.toggle("close");
};

window.onscroll = () => {
  const scroll = window.scrollY;
  navbar.classList.toggle(
    "scroller",
    scroll > 50 || toggleMenu.classList.contains("show")
  );
  activeMenu(scroll);
  toTop.classList.toggle("show", scroll > 100);
};

function activeMenu(scroll) {
  navlink.forEach((nav) => {
    const el = document.querySelector(`.${nav.getAttribute("data-area")}`);
    nav.classList.remove("active");

    if (el) {
      const heightEl = el.clientHeight;
      const offsetTop = el.offsetTop - 70;
      const total = offsetTop + heightEl;
      if (scroll > offsetTop && scroll < total) {
        nav.classList.add("active");
      }
    }
  });
}
