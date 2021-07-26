const titleSection = document.querySelectorAll("section .display-5.fw-bold");
const markContent = document.querySelectorAll("section.mark-content .column");
const KontenLayananKami = document.querySelectorAll(
  "section#service .row .d-flex"
);

const informationProduk = document.querySelectorAll(
  "section.information .list"
);

const imageGroup = document.querySelectorAll(".flexbin a");

imageGroup.forEach((ig, i) => {
  ig.dataset.aos = "zoom-in-up";
});
markContent.forEach((mc, i) => {
  mc.dataset.aos = "fade-up";
  mc.dataset.aosDelay = (i + 1) * 100;
});
informationProduk.forEach((ip, i) => {
  ip.dataset.aos = "fade-right";
  ip.dataset.aosDelay = (i + 1) * 100;
});

KontenLayananKami.forEach((kl, i) => {
  kl.dataset.aos = "zoom-out-right";
  kl.dataset.aosDelay = (i + 1) * 100;
});

titleSection.forEach((title) => {
  title.dataset.aos = "fade-up";
});

AOS.init({
  easing: "ease-in-sine",
});
