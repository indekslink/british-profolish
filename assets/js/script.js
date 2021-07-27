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
      window.scrollTo(0, el.offsetTop - 50);
    }
  });
});
document
  .querySelector("a.navbar-brand")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const el = document.querySelector(`.${e.target.getAttribute("data-area")}`);
    if (el) {
      window.scrollTo(0, el.offsetTop - 50);
    }
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

// scrollspy
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

// add lightbox
const containerImgLightBox = document.querySelectorAll(".flexbin");
containerImgLightBox.forEach((container, i) => {
  container.setAttribute("id", `lightbox-${i}`);
  let imgItem = document.querySelectorAll(`#lightbox-${i} img`);
  imgItem.forEach((img) => {
    let src = img.getAttribute("src");
    let caption = img.nextElementSibling.innerHTML;
    img.parentElement.setAttribute("href", src);
    img.parentElement.setAttribute("data-fancybox", "lightbox-" + i);
    img.parentElement.setAttribute("data-caption", caption);
  });
});

function toggleMyModal(target, add = null) {
  const myModal = document.querySelector(target);
  if (add) {
    var fnstring = add;

    // find object
    var fn = window[fnstring];

    // is object a function?
    if (typeof fn === "function") {
      myModal.innerHTML = fn();
    }
  }
  myModal.classList.toggle("show");

  setTimeout(() => {
    document.body.classList.toggle("overflow-hidden");
    if (add == null) {
      myModal.innerHTML = "";
    }
  }, 1000);
}
let showAnimate = true;

function showMoreAbout(e) {
  e.innerHTML = e.classList.contains("collapsed") ? "Read More" : "Read Less";

  if (showAnimate) {
    const areaReadMore = document.getElementById("tentang-kami-selengkapnya");
    gsap.from("#tentang-kami-selengkapnya span", {
      duration: 1,
      x: "-100%",
      opacity: 0,
    });
    gsap.from("#tentang-kami-selengkapnya p, #tentang-kami-selengkapnya ul", {
      duration: 1,
      y: "100%",
      opacity: 0,
    });
    showAnimate = false;
  }
}

document.querySelector(".to-layanan").addEventListener("click", function () {
  window.scrollTo(0, document.getElementById("service").offsetTop - 50);
});
