const promptMessage = document.querySelector('.prompt');

//buttons
const btnStart = document.querySelector('.start');
const btnCheck = document.querySelector('.check');

const input = document.querySelector('.input_number');
const secretNumber = document.querySelector('#secret_number');

function randomNumberFunction(){
   return Math.round(Math.random()*100+1)
};
const randomNumber = randomNumberFunction()
console.log(randomNumber)

let tryNumb = 10;
const showScore = document.querySelector('#score');
showScore.innerHTML = tryNumb

const BestResult = document.querySelector('#result');


// btn.addEventListener('click', ()=>{   /// check of working
//    promptMessage.innerHTML = 'well done! you did it';
//    document.body.style.backgroundColor = "#1e994af2";
// });


   
// btn again
// btnStart.addEventListener('click',() => {
//    window.location.reload();
// })
btnStart.addEventListener('click',() => {
   promptMessage.innerHTML = 'start quessing';
   // try
   tryNumb = 10;
   showScore.innerHTML = tryNumb;
   // best score
   BestResult.innerHTML = 0;

   //style
   document.querySelector('.secret_number').style.width = '200px';
   document.body.style.backgroundColor = '#000000de';
   secretNumber.innerHTML = '???';

   //random numb
   randomNumberFunction()
});


 // game
btnCheck.addEventListener('click', () => {
   const guessingNumber = +input.value;
   
      if(!guessingNumber){
         promptMessage.innerHTML = 'Insert the number';

         // player won
      } else if (guessingNumber == randomNumber){
         promptMessage.innerHTML = 'Yes, you are quite right. Well done';
         secretNumber.innerHTML = randomNumber;
         BestResult.innerHTML = 11 - tryNumb;
         document.body.style.backgroundColor = '#1e994af2';
         document.querySelector('.secret_number').style.width = '300px';

         // game over
      } else if(tryNumb <= 1){
         secretNumber.innerHTML = randomNumber;
         document.body.style.backgroundColor = 'rgba(145, 53, 11, 0.95)';
         showScore.innerHTML = --tryNumb;
         promptMessage.innerHTML = 'You didnt guess, start over';
         btnStart.innerHTML = 'Again'
         // setTimeout(()=>window.location.reload(),3000)
      }else if (guessingNumber > randomNumber){
         promptMessage.innerHTML = 'No,secret number <span style = "color: red">less</span> than';
         showScore.innerHTML = --tryNumb
      }else{
         promptMessage.innerHTML = 'No,secret number <span style = "color: red">more</span> than';
         showScore.innerHTML = --tryNumb
         
      }
      
});

