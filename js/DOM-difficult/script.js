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
const tabContents = document.querySelectorAll(".operations__content");

/// Active tabs by click
tabContainer.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".operations__tab ");
  /// Guard clause - если клик будет не на кнорке то вернется налл и ивент остановится
  if (!clickedBtn) return;
  /// Active tabs
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clickedBtn.classList.add("operations__tab--active");

  //// Active content
  tabContents.forEach((cont) =>
    cont.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clickedBtn.dataset.tab}`)
    .classList.add("operations__content--active");
});

//// Animations show links for navigation

const navLinksHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest(".nav__links")
      .querySelectorAll(".nav__link");
    const logo = linkOver.closest(".nav").querySelector("img");
    const text = linkOver.closest(".nav").querySelector(".nav__text");

    siblingLinks.forEach((el) => {
      if (el !== linkOver) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
    text.style.opacity = opacity;
  }
};

const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", function (e) {
  navLinksHover(e, 0.4);
});

nav.addEventListener("mouseout", function (e) {
  navLinksHover(e, 1);
});

/// sticky navigation Intersection Observer API
// const observerCallback = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }
// const observerOpsions = {
//   root:null,
//   threshold: [0,0.2]
// }

// const observer = new IntersectionObserver(observerCallback,observerOpsions);
// observer.observe(section1)

const getStickeNav = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(getStickeNav, {
  root: null,
  threshold: 0,
  rootMargin: "-150px",
});

headerObserver.observe(header);

///// Появления секций сайта

const allSections = document.querySelectorAll(".section");

const apperSection = function (entries, observer) {
  const entry = entries[0];
  if(entry.isIntersecting)entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
};
const sectionObserver = new IntersectionObserver(apperSection, {
  root: null,
  threshold: 0.1,
});

// allSections.forEach((section) => {
//   sectionObserver.observe(section)
//   section.classList.add("section--hidden");
// });
//section--hidden
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


/////////////// Slider
const slides = document.querySelectorAll(".slide");
const btnNext = document.querySelector(".slider__btn--right");
const btnPrev = document.querySelector(".slider__btn--left");

const dots = document.querySelectorAll('.dots__dot')
const dotsBox = document.querySelector('.dots')
// позичии для слайдов
let currentSlideFirst = 0;
let currentSlideLast = slides.length - 1;

// функция которая заменяеет постояный вызов фор ич
const moveSlide = function (slide) {
  slides.forEach((s, index) => {
    s.style.transform = `translateX(${(index - slide) * 100}%)`;
    // 1 - -100%, 2- 0%,3 - 100%,4 - 200%
    
  });
};

// slides.forEach((slide,index) => {
//   slide.style.transform = `translateX(${index*100}%)`
// })
moveSlide(0); // вызывает начальное состояние слайдера позиция 0 слайд

const btnToNext = () => {
  if (currentSlideFirst === currentSlideLast) {
    currentSlideFirst = 0;
  } else if(currentSlideFirst >= currentSlideLast){
    currentSlideFirst = 0;
  }else {
    currentSlideFirst++;
  }
  console.log(currentSlideFirst);
 
  moveSlide(currentSlideFirst);
  activeDots(currentSlideFirst)
  // 1 - -100%, 2- 0%,3 - 100%,4 - 200%
};

const btnToLast = () => {
  if (currentSlideFirst === 0) {
    currentSlideFirst = currentSlideLast;
  }else if(currentSlideFirst <= 0){
    currentSlideFirst = currentSlideLast;
  } else {
    currentSlideFirst--;
  }
  moveSlide(currentSlideFirst);
  activeDots(currentSlideFirst)
};

btnNext.addEventListener("click", btnToNext);
btnPrev.addEventListener("click",btnToLast);

/////// рабочий вариант, но лучше вынести в отдельную функцию, функция выше
// btnNext.addEventListener('click',()=> {
//   if(currentSlideFirst === currentSlideLast){
//     currentSlideFirst = 0
//   }else{
//     currentSlideFirst++
//   }

//   moveSlide(currentSlideFirst)
//   // 1 - -100%, 2- 0%,3 - 100%,4 - 200%
// })
// btnPrev.addEventListener('click',()=> {
//   if(currentSlideFirst === 0){
//     currentSlideFirst = currentSlideLast
//   }else{
//     currentSlideFirst--
//   }
//   moveSlide(currentSlideFirst)
// })

// event keybord
document.addEventListener("keydown", (e) => {
  if(e.key === 'ArrowRight'){
    btnToNext()
    
  }
   if(e.key === 'ArrowLeft'){
    btnToLast()
  }
 
});

// создаем кнопки переключения внизу
const createDots = () => {
  slides.forEach((e,inedx) => {
    dotsBox.insertAdjacentHTML('beforeend',`<div class="dots__dot" data-slide="${inedx}"></div>`)
  })
}
createDots()

dotsBox.addEventListener('click',(e)=>{ 
  if(e.target.classList.contains('dots__dot')){
    const slide = e.target.dataset.slide
    moveSlide(slide)
    currentSlideFirst = slide
    activeDots(slide)
  }
})

const activeDots = (slide) => {
  document.querySelectorAll('.dots__dot').forEach(e=> e.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}
activeDots(0)




/////////////////////////////////////////////////////////
// lifecycle DOM Events

// document.addEventListener('DOMContentLoaded', (e)=> console.log('DOM was created',e)); /// выполнится после загрузки и создания дом дерева
// window.addEventListener('load', (e)=> console.log('pages was loaded',e));  /// выполниться когда загрузится полносью сайт 

// window.addEventListener('beforeunload',(e)=>{
//   e.preventDefault();
//   e.returnValue =''
// });   /// спрашивает точно ли закрыть страницу, актуально для форм 

