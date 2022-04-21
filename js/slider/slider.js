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
