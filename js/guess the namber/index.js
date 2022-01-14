const promptMessage = document.querySelector('.prompt');

//buttons
const btnStart = document.querySelector('.start');
const btnCheck = document.querySelector('.check');

const input = document.querySelector('.input_number');
const secretNumber = document.querySelector('#secret_number');
// btn.addEventListener('click', ()=>{   /// check of working
//    promptMessage.innerHTML = 'well done! you did it';
//    document.body.style.backgroundColor = "#1e994af2";
// });

btnCheck.addEventListener('click', () => {
   const quessingNumber = +input.value;
   
   if(!quessingNumber){
      promptMessage.innerHTML = 'Insert the number'
   }
   
});

