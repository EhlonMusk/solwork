// open aside navigation
const hamburger = () => {
  const hamburger = document.querySelector(".hamburgerIcon");
  hamburger.classList.toggle("inactive");
};

const openMenu = () => {
  document.querySelector(".backdropnav").className = "backdropnav active";
  document.querySelector("aside").className = "active";
  document.body.style.overflow = "hidden";
  hamburger();
};

const closeMenu = () => {
  document.querySelector(".backdropnav").className = "backdropnav";
  document.querySelector("aside").className = "";
  document.body.style.overflow = "auto";
};

document.getElementById("menuBtn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};

// close aside navigation

document.querySelector("aside button.close").onclick = (e) => {
  closeMenu();
  hamburger();
  å;
};

document.querySelector(".backdropnav").onclick = (e) => {
  closeMenu();
};
