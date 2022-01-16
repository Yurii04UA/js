const promptMessage = document.querySelector('.prompt');

//buttons
const btnStart = document.querySelector('.start');
const btnCheck = document.querySelector('.check');

const input = document.querySelector('.input_number');
const secretNumber = document.querySelector('#secret_number');

const randomNumber = Math.round(Math.random()*100+1);
console.log(randomNumber)

let tryNumb = 10;
const showScore = document.querySelector('#score');
showScore.innerHTML = tryNumb

const BestResult = document.querySelector('#result');


// btn.addEventListener('click', ()=>{   /// check of working
//    promptMessage.innerHTML = 'well done! you did it';
//    document.body.style.backgroundColor = "#1e994af2";
// });


   

btnStart.addEventListener('click',() => {
   window.location.reload();
})

btnCheck.addEventListener('click', () => {
   const guessingNumber = +input.value;
   
      if(!guessingNumber){
         promptMessage.innerHTML = 'Insert the number';
      } else if (guessingNumber == randomNumber){
         promptMessage.innerHTML = 'Yes, you are quite right. Well done';
         secretNumber.innerHTML = randomNumber;
         BestResult.innerHTML = 10 - tryNumb;
         document.body.style.backgroundColor = '#1e994af2';
      } else if(tryNumb <= 1){
         secretNumber.innerHTML = randomNumber;
         document.body.style.backgroundColor = 'rgba(145, 53, 11, 0.95)';
         showScore.innerHTML = --tryNumb;
         promptMessage.innerHTML = 'You didnt guess, start over';
      }else if (guessingNumber > randomNumber){
         promptMessage.innerHTML = 'No,secret number <span style = "color: red">less</span> than';
         showScore.innerHTML = --tryNumb
      }else{
         promptMessage.innerHTML = 'No,secret number <span style = "color: red">more</span> than';
         showScore.innerHTML = --tryNumb
         
      }
      
});

