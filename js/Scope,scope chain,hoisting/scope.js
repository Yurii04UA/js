`use strict`
// Variable Environment --- Scope chain --- this



// function getAge (birthYear){
//    const age = 2022 - birthYear;  // age - function scope
   
//    function printAge(){
//       const info = `You are ${age}, born in ${birthYear}`;
//       console.log(info)
//    }

//    printAge()
//    return age
// };

const name = 'Yurii';   // /global scope
// console.log(getAge(1992));

// console.log();

function age (age){
   if (age < 18){
      let message = "You too young";   // // message - block scope
      // console.log(message);
   } else{
      message = 'You too old';
      // console.log(message);
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

// console.log(sum(),sum2(),sum3())


 //////////////////////////// this <<----
//  const user1 = {
//     name: 'Yurii',
//     birthYear: 1992,
//     getAge: function(){
//       //  return 2022 - this.birthYear
//       console.log(this);
//       console.log(2022 - this.birthYear);
//     }
//  };
//  user1.getAge();
// // console.log(user1.getAge());

// console.log(this);

// const getAge = function (birthYear){
//     console.log(2022 - birthYear)
//     console.log(this)
// };
// getAge(1992);

const user2 = {
   birthYear: 1993
};
// user2.getAge = user1.getAge;
// user2.getAge();

const user1 = {
   name: 'Yurii',
   birthYear: 1992,
   getAge: function(){
   //   console.log(2022 - this.birthYear);

     const isAdult =  () => {
      console.log(2022 - this.birthYear >= 18)
      console.log(this)
     }
     isAdult()
   }
};

user1.getAge();