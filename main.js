// const header = document.getElementById("header");
const udIndicator = document.getElementById("ud-indicator");

window.onscroll = () => {
  if (window.scrollY > 50) {
    // header.classList.add("grays1");
    udIndicator.classList.add("op0");
  } else {
    // header.classList.remove("grays1");
    setInterval(() => {
      udIndicator.classList.remove("op0");
    }, 4000);
  }
};
let s = true;
setInterval(() => {
  udIndicator.classList.remove(s ? "op0" : "");
  s = false;
}, 4000);
