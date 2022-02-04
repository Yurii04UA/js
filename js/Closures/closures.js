// Замыкание, функция всегда имеет доступ к переменым в том контексте выполнения в котором эта функция была создана


// function safeBooking() {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// }
// const booker = safeBooking();
// booker()
// booker()
// booker()


// let f1;
// const f2 = function(){
//    const x = 11;
//    f1 = function(){
//       console.log(x** 2);
//    }
// }
// // f2();
// // f1()

(function(){
   const h2 = document.querySelector('h2');
   h2.style.color = 'red'
   const body = document.querySelector('#body')
   body.addEventListener('click', () => {
      h2.style.color = 'green'
   })
})();