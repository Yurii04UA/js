"use strict";

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const btnCloseModalWindow = document.querySelector(".btn--close-modal-window");
const btnsOpenModalWindow = document.querySelectorAll(
  ".btn--show-modal-window"
);

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalWindow = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModalWindow.length; i++)
//   btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnsOpenModalWindow.forEach((elem) =>
  elem.addEventListener("click", openModalWindow)
);

btnCloseModalWindow.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
    closeModalWindow();
  }
});

////////////////////////  Create element

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent ='We using coolie for wesite';
message.innerHTML =
  'We using cookie on our website <buuton class="btn btn-cookie btn--close-cookie"> ok </button>';

// console.log(message);

const header = document.querySelector(".header");
// header.prepend(message) /// added elem in start  elem"Header"
header.prepend(message); //// added elem in end elem"Header"
// header.before(message) //// added elem do elem"Header"
// header.after(message) //// added elem posle end elem"Header"

/////////////////////////////////////////// Delite elem
const btnCloseCookie = document.querySelector(".btn--close-cookie");
btnCloseCookie.addEventListener("click", () => {
  message.remove();
});

/////////////////////////////////////  Styles

message.style.backgroundColor = "rgb(205 205 205)";
message.style.color = "black";
message.style.borderRadius = "8px";
message.style.width = "120%";

///////////////////////////////////// Atribute

// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt);
// console.log(logo.src);

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  const section1Coords = section1.getBoundingClientRect();
  console.log(section1Coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Scroll', window.pageXOffset, window.pageYOffset);
  // console.log('viewport', document.documentElement.clientHeight,document.documentElement.clientWidth);
  window.scrollTo({
    left: section1Coords.left, 
    top: section1Coords.top + window.pageYOffset,
    behavior: 'smooth'
  });
});
