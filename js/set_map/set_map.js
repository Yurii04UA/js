///// <----SET  Множество 
//// Множество не упорядоченый массив

const oders = new Set([   /// убирает повторы
   `sushi`,
   `Ramen`,
   `Tempura`,
   `sushi`,
   `Ramen`,
   `Tempura`,
])

// console.log(oders);

const oder = [ 
   `sushi`,
   `Ramen`,
   `Tempura`,
   `sushi`,
   `Ramen`,
   `Tempura`,
];
// console.log(oder);
// const newOders = new Set(oder)
// newOders.add('Pizza')  // в множество мы можемдобовлять и удалять при помощи arr.add and arr.delete
// console.log(new Set(oder));
// console.log(newOders);
// console.log(new Set('Hello')); //{'H', 'e', 'l', 'o'}
// console.log(newOders.size); // size
// console.log(newOders.has('sushi')); // наличие выводит true
// console.log(newOders.has('pizza')); // наличие выводит false


// for(const oder of newOders){   /// Set являете итеребл, его можно перебирать
//    console.log(oder);
// };

/// Remuve dublicates

// const mealIngridients = ['Rice','Pepper','Garlic','Pepper','Garlic','Meat','Meat'];
// const newMealIng = new Set(mealIngridients);
// console.log(newMealIng);
// const newMealIngridients = [...newMealIng];
// console.log(newMealIngridients);


/// <----MAP

//  const restorant = new Map();
//  restorant.set('name','Bench');
//  restorant.set(1,'London');
//  restorant.set(2,'Kiev');
//  restorant.set(3,'Dnipro');

//  restorant.set('categiries', ['Japanse', 'Vegetarion', 'Oeganic'])
//  .set('open',0)
//  .set('closed',24)

//  console.log(restorant);



 ////////////////////////////////////////////////
// Task 3

// Let's get on with our soccer betting app ⚽💰!
// This time we have a map called events (see below) with a log of events that occurred during the game. The values ​​are the events themselves, and the keys are the minutes at which each event happened (the match had 90 minutes plus extra time).
// Your tasks:
// 1. Create an array of gameEvents with different game events that can happen (no duplicates).
// 2. After the end of the game, it turned out that the yellow card from minute 75 was unfair. So remove this event from the game events log.
// 3. Calculate and log the following in the console: “On average, an event happened every 11 minutes” (keep in mind that there are 90 minutes in the game).
// 4. Loop over the events map and log each item to the console, with mark whether it is in the first or second half (after 45 minutes) of the game, for example:
// [FIRST HALF] 19:  Goal

const events = new Map([
  [19, 'Goal'],
  [21, 'Substitution'],
  [43, 'Goal'],
  [56, 'Substitution'],
  [69, 'Yellow card'],
  [73, 'Substitution'],
  [75, 'Yellow card'],
  [79, 'Substitution'],
  [81, 'Red card'],
  [93, 'Goal'],
]);

/// 1. Create an array of gameEvents with different game events that can happen (no duplicates).

const gameEventsValues = new Set(events.values());
const gameEvents = [...gameEventsValues];
console.log(gameEvents);

// 2. After the end of the game, it turned out that the yellow card from minute 75 was unfair. So remove this event from the game events log.

events.delete(75);
console.log(events);

// 3. Calculate and log the following in the console: “On average, an event happened every 11 minutes” (keep in mind that there are 90 minutes in the game).
let averageTime = 0;
for (let average of events.keys()){
   averageTime= Math.round((average +averageTime) / events.size);
};
console.log(`On average, an event happened every ${averageTime} minutes`);

// 4. Loop over the events map and log each item to the console, with mark whether it is in the first or second half (after 45 minutes) of the game, for example:
// [FIRST HALF] 19:  Goal

// for(const [time,event] of events){
//    (time < 45) ? console.log(`[FIRST HALF] ${time}:  ${event}`) : console.log(`[SECOND HALF] ${time}:  ${event}`)
// }


// function capitalizeName (name){
//    const names = name.split(' ');
//    const capitalizedFullName = [];
//    for(const n of names){
//      capitalizedFullName.push(n[0].toUpperCase() + n.slice(1))
//    };
//    return capitalizedFullName.join(' ');
// }

const cardNumber = 1236444412345421;
const cardNumber2 = `2344444123488888`;
function maskCreditCard (cardNumber){
   const strCardNumber = String(cardNumber)
   lastFour = strCardNumber.slice(-4);
   firstFour = strCardNumber.slice(0,4)
   const maskCreditCard = firstFour.padEnd(strCardNumber.length-4, '*') + lastFour
   console.log(maskCreditCard);
}
// maskCreditCard(cardNumber)



// const n1 = 'yurii paraka';
// const n2 = 'jack white tiger jr.';
// console.log(capitalizeName('yurii paraka'));
// console.log(capitalizeName(n1));
// console.log(capitalizeName(n2));


// Task 4

/* Write a program that takes a list of variable names written in underscore_case and converts them to camelCase.
Input will come from a textarea html element inserted into the DOM (see code below to insert elements) and the transformation will happen when the button is clicked.

Test data (for inserting into the textarea including spaces):

underscore_case
  first_name
next_Variable
   Calculate_AGE
arrived_flight

This output should appear (5 separate console.log outputs):
underscoreCase 
firstName 
nextVariable 
calculateAge 
arrivedFlight

Hints:
Remember which character defines a newline in a textbox
The solution should only work for a two-word variable like first_second
This is a tricky task, so start watching the solution in case you get stuck. Then pause and continue! */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



const btn = document.querySelector('button');




function normalizedText  (text){
   const toLowerCase = text.toLowerCase().split('_');
   const messageForError = 'You enter incorrect data';
   const fixedText = [];
   if(toLowerCase.length > 2){
      let p = document.createElement('p');
   p.innerHTML = messageForError;
   document.body.append(p);;
   }else{
     for(const n of toLowerCase){
        fixedText.push(n[0].toUpperCase() + n.slice(1));
     };   
   };
   return fixedText.join('');
}console.log(normalizedText('next_Variable'));

function RenderData (){
   btn.addEventListener('click', () => {
      const text = document.querySelector('textarea').value;
      let FinalText = normalizedText(text);
      
      let p = document.createElement('p');
      p.innerHTML = FinalText;
      document.body.append(p);
      
   });
};
RenderData()
