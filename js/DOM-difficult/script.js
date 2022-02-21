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
  // const section1Coords = section1.getBoundingClientRect();
  // console.log(section1Coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Scroll', window.pageXOffset, window.pageYOffset);
  // console.log('viewport', document.documentElement.clientHeight,document.documentElement.clientWidth);

  // window.scrollTo({
  //   left: section1Coords.left,
  //   top: section1Coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  section1.scrollIntoView({ behavior: "smooth" }); //// та же самая запись что и выше!
});

//////////////// Smooth page navigation

// document.querySelectorAll(".nav__link").forEach((htmlElem) => {   ///// рабочий но не еффективный способ, лучше делегировать событие на родителя
//   htmlElem.addEventListener('click', function(e) {
//     e.preventDefault();
//     const href = this.getAttribute('href')
//     // console.log(href);
//     document.querySelector(href).scrollIntoView({
//       behavior : 'smooth'
//     })

//   })
// });
////////// ДЕЛЕГИРОВАНИЯ СОБЫТИЯ
////\ 1. Добовляем слушателя на ОБЩЕГО родителя
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  ///// 2. Определить таргет элемент( на кого кликнули)
  console.log(e.target);
  if (e.target.classList.contains("nav__link")) {
    const href = e.target.getAttribute("href");
    // console.log(href);
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  }
});

const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelector(".operations__content");

tabContainer.addEventListener('click', function(e){
  const clickedBtn = e.target.closest('.operations__tab ');
  /// Guard clause - если клик будет не на кнорке то вернется налл и ивент остановится
  if(!clickedBtn) return  
  
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
  clickedBtn.classList.add('operations__tab--active')
})



///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//////// event
// const h1 = document.querySelector("h1");
// const logH1 = () => {
//   console.log("xyq")
//   h1.removeEventListener("mouseenter",logH1) /// ивент только 1 раз сработает
// };
// h1.addEventListener("mouseenter",logH1 );

// h1.onclick = () => console.log("xyq2");

/////////////////
//// ПЕРЕМЕЩЕНИЕ ПО ДОМ

// const h1 = document.querySelector('h1')
// console.log(h1);

//// Перемещение вниз(потомок Child)
// console.log(h1.querySelectorAll('.highlight'));  /// Даже если у других элементов будет такой клас их не выбирет, потому что ищем в Н1
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'yellow'
// console.log(h1.lastElementChild);

//// Перемещение вверх(родитель)parent

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// const h2 = document.querySelector('h2')
// h2.closest('.section').style.backgroundColor = 'red'

///// Перемещение на одном уровне( в сторону)

// console.log(h2.previousElementSibling);
// console.log(h2.nextElementSibling);
