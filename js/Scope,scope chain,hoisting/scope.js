`use strict`
function getAge (birthYear){
   const age = 2022 - birthYear;  // age - function scope
   
   function printAge(){
      const info = `You are ${age}, born in ${birthYear}`;
      console.log(info)
   }

   printAge()
   return age
};

const name = 'Yurii';   // /global scope
console.log(getAge(1992));

console.log();

function age (age){
   if (age < 18){
      let message = "You too young";   // // message - block scope
      console.log(message);
   } else{
      message = 'You too old';
      console.log(message);
   }
}

age(121)

//////////////////////////// HOISTING
 ///// Variables
// console.log(aa);  // undefinde
// console.log(lastName); // reference error
// console.log(age2);  // reference error

// var aa = 'Yurii';
// let lastName = 'Paraka';
// const age2 = 29;


/// //// Functions
// console.log(sum());  /// will show 3 
// // console.log(sum2()); /// Cannot access 'sum2' before initialization
// console.log(sum3()); ///Cannot access 'sum3' before initialization

function sum (){   /// function declatation
   return 1+2
}; 
const sum2 = function(){  /// function expression
   return 2+2
};

const sum3 = () =>{  /// arrow function
   return 2+3
}

console.log(sum(),sum2(),sum3())