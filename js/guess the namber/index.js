const promptMessage = document.querySelector('.prompt');

//buttons
const btnAgain = document.querySelector('.start');
const btnCheck = document.querySelector('.check');

const input = document.querySelector('.input_number');
const secretNumber = document.querySelector('#secret_number');


let randomNumber = Math.round(Math.random()*100+1)
console.log(randomNumber)

let tryNumb = 10;
const showScore = document.querySelector('#score');
showScore.innerHTML = tryNumb

const BestResult = document.querySelector('#result');
let highscore = 10;


// btn.addEventListener('click', ()=>{   /// check of working
//    promptMessage.innerHTML = 'well done! you did it';
//    document.body.style.backgroundColor = "#1e994af2";
// });

 // game
btnCheck.addEventListener('click', () => {
   const guessingNumber = +input.value;
   
      if(!guessingNumber){
         promptMessage.innerHTML = 'Insert the number';

         // player won
      } else if (guessingNumber == randomNumber){
         promptMessage.innerHTML = 'Yes, you are quite right. Well done';
         secretNumber.innerHTML = randomNumber;
         showScore.innerHTML = --tryNumb;
         document.body.style.backgroundColor = '#1e994af2';
         document.querySelector('.secret_number').style.width = '300px';
         if(highscore > 10 - tryNumb){
            highscore = 10 - tryNumb
            BestResult.innerHTML = highscore;
         }

         // game over
      } else if(tryNumb <= 1){
         secretNumber.innerHTML = randomNumber;
         document.body.style.backgroundColor = 'rgba(145, 53, 11, 0.95)';
         showScore.innerHTML = --tryNumb;
         promptMessage.innerHTML = 'You didnt guess, start over';
         btnAgain.innerHTML = 'Again'
         // setTimeout(()=>window.location.reload(),3000)
      }else if (guessingNumber > randomNumber){
         promptMessage.innerHTML = 'No,secret number <span style = "color: red">less</span> than';
         showScore.innerHTML = --tryNumb
      }else{
         promptMessage.innerHTML = 'No,secret number <span style = "color: red">more</span> than';
         showScore.innerHTML = --tryNumb
         
      }
});

// btn again
btnAgain.addEventListener('click',() => {
   promptMessage.innerHTML = 'start quessing';
   // try
   tryNumb = 10;
   showScore.innerHTML = tryNumb;
   // style
   document.querySelector('.secret_number').style.width = '200px';
   document.body.style.backgroundColor = '#000000de';
   secretNumber.innerHTML = '???';
   input.value = '';
   // random number
   randomNumber = Math.round(Math.random()*100+1);
   console.log(randomNumber) 
});
