/////////// while

// let x = 1;

// while(x < 10){
//     console.log(x);
//     x++; 
// }
////// x++; - значение х+1
////// х+=2 - значение х+2

let string = "Hello world!";
let count = 0;

// while( count < string.length){
//     console.log(string[count]);
//     count++;
// }

// while( count < string.length){
//     console.log(string.slice(count));
//     count++;
// }

let a = 1;

// while( a <= 30){    вывели все нечетные числа
//     console.log(a);
//     a+=2;
// }



// while( a <= 30){
//     if (a % 5 === 0){ 
//         console.log(a)
//     }  
//     a++; 
// }  /////// (a % 5 === 0) - % остаток деления (если в остатке деления а на 5 будет 0 выплдняьб функцию)

let b = 30;

// while(b >= 1){
//     console.log(b)
//     b-=2;
// }


//////////// For (for -более упрощенная форма записи цикла while )
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }  ///////////// let i = 0 -инициализация переменной    i <= 10 - условия выполнения     i++ шаг цикла

//////////// таже запись while
// let ii = 0;
// while(ii <= 10){
//     console.log(ii);
//     ii++
// }

// for (let i = 2; i <= 30; i+=2 ) {
//     console.log(i);
// } ////// выводим все четные числа

// for (let i = 1; i <=30; i++) {
//     switch(true){
//         case i % 7 ===0:
//             console.log(i)
//     }   
// } /////% остаток деления (если в остатке деления а на 7 будет 0 выплдняьб функцию)

// for (let i = 29; i >= 1; i-=2) {
//     console.log(i);
    
// }



////////////////// for of -  для массивоов
// let arr = [1,2,3,4,5,6,-10];

// for( let arrInf of arr ){
//     console.log(arrInf);
// }

////////////////// for in - для перебора обьектов  (Ключ : Значение "name": "Yurii")
// let obj = {
//     "name": "Yurii",
//     "sureName":"Paraka",
//     "age": 28,
//     "weight": 86
// }

// for(let key in obj){
//     console.log(`key : ${key} ; value : ${obj[key]} `)
// }
// //  console.log(key) - что бы вывести ключ and console.log(obj[key]) что бы вывести значение  

/////////////// ForEach -позволяет выполнить переданную функцию один раз для каждого элемента в массиве в порядке возрастания индекса

// arr.forEach(function(item,i,array){
//     console.log(`elem : ${item} index : ${i} array : ${array}`)
// });
//         // elem : 1 index : 0 array : 1,2,3,4,5,6,-10
//         // elem : 2 index : 1 array : 1,2,3,4,5,6,-10
//         // elem : 3 index : 2 array : 1,2,3,4,5,6,-10
//         // elem : 4 index : 3 array : 1,2,3,4,5,6,-10
//         // elem : 5 index : 4 array : 1,2,3,4,5,6,-10
//         // elem : 6 index : 5 array : 1,2,3,4,5,6,-10
//         // elem : -10 index : 6 array : 1,2,3,4,5,6,-10

////// search in array!!!!

// let people = [
//     {id: 1, name: "yurii1"},
//     {id: 2, name: "yurii2"},
//     {id: 3, name: "yurii3"},
//     {id: 4, name: "yurii4"}
// ]
// people[4] = {id: 5, name: "yurii5"}

// let as = people.find(function(elem){
    
//     if(elem.id==2) return elem
// })

// console.log(as)
////////////////////////// map -- создает копирут массив с новыми параметрами
// let arr = [1,2,3,4,5,6,-10];

// let newArr = arr.map(function(el){
//     return el*3
// })

// console.log(newArr)
// console.log(arr)



/////////////////////// практика
// let arr = []
// for(i =30; i >=1; i--){
//     if (i%3 ==0){
//         arr.push(i)
//     }
// }
// console.log(arr)

// let arr = []

// for(let i= 0; i<10;i++){
//     arr.push(i*i)
// }
// console.log(arr)


///////////////////////////////////////////////////////////////
// outer: - при отмене найдет такую метку и перейдет к ней

// outer: for(let i = 0;i<3;i++){
//     for(let j = 0; j < 3; j++){
//         let input = prompt(`Numbers:(${i},${j})`)

//         if(!input) break outer
//     }
    
// }
// alert("Okey")

/////////////////////////////

// for(let i =1 ; i <= 10; i++){
//     console.log(`Heey i have a ${i} cookies`)
// };

// const user = ['Yurii','Paraka',1992,'no work',['Jeniy','Koss']];
// // console.log(user);

// // console.log(user.length)
// const typeArray = [];
// for( let i = 0; i < user.length; i++){
//     console.log(user[i], typeof(user[i]));

//     // typeArray.push(typeof(user[i]));  // сделаем по другому

//     typeArray[i] = typeof(user[i]);   // результат одинаков
// };
// console.log(typeArray);

// const birthYears = [1992,1993,1994,1995,1999];
// const ages = [];

// for (i = 0; i< birthYears.length; i++){
//     ages.push(2022-birthYears[i]);
//     console.log(ages);
// }


// <----------- Continue & break 
      //<---с помощью Continue можно выводить какие то одни значения например строки
      //<---break выходит с цикла при соответствии
// const user = ['Yurii','Paraka',1992,'no work',['Jeniy','Koss'],'Hello',false];

// for( let i = 0; i < user.length; i++){   
//    // if (typeof(user[i]) !== 'string') continue; //<--- тут мы проверяем является ли элем массива стоковым значением, если да то выполняется код и переходит на следующую итерацию, если элем не является стоковым то переходит на следюющую иттерацию без выполнения кода
//    // if (typeof(user[i]) !== 'boolean') continue; // <---выводим только булеан значения
//     console.log(user[i], typeof(user[i])); 
// };
//    console.log("///////////////////////")
// for( let i = 0; i < user.length; i++){   
//    //  if (typeof(user[i]) === 'number') break; //<--- тут мы проверяем является ли элем массива чистловым значением, если да то цикл останавливается( будет выводится все до того момента пока элемент не будет равен числу)
//     if (typeof(user[i]) === 'boolean') break; // <---выводит все до булеан значения булеан значения
//     console.log(user[i], typeof(user[i])); 
// };


// const user = ['Yurii','Paraka',1992,'no work',['Jeniy','Koss'],'Hello',false];

//    for(let i = user.length - 1; i >= 0; i-- ){
//       console.log(i,user[i]);
//    }
//////// <------------- loops in loops


// for (let i = 1; i <= 10; i++){
//    console.log(`Exercise ${i}`);   
// }


/// <--- While loop
// let i = 1;
// while( i <=10){
//    console.log(i)
//    i++
// }

/// <--- While loop можно делать без определенного счетчика
// let diceNumb = Math.trunc(Math.random()*6)+1;
// console.log(`Number before loop ${diceNumb}`);

// while(diceNumb !==6){
//    console.log(diceNumb);  // будем выводить в консоль до тех пор пока в случайном порядка попажеься 6
//    diceNumb= Math.trunc(Math.random()*6)+1;
// }


// test 
let bills = [31,95,276,540,27,205,11,1180,96,57];

let tips = [];
let totals = [];

const calculateTips = (bill) => {
   let tipsCalc
   if(bill <= 20){
      tipsCalc = (bill*20)/100;
      //  console.log('20%')
   }else {
      tipsCalc = (bill*15)/100;
      //  console.log('15%')
   }
      return tipsCalc; 
   };

   for(let i = 0; i < bills.length; i++){
      let a = calculateTips(bills[i]);
      tips.push(a);
      totals.push(a+bills[i]);
   };
   
   console.log(`Show the tips 
      ${tips}`);
   console.log(`Show the total bells 
      ${totals}`);
   

/////// test

function calculateAverage (arr){
   let summ = 0;
   let calcAver 
   for(let i = 0; i < arr.length; i++){
      summ = summ + arr[i]
   }
   // return summ
   return calcAver = summ / arr.length
}

// const ss = [1,2,3,4,5,6,7,8,9,10,11,12,13]

console.log(bills, tips, totals, calculateAverage(totals))

// console.log(calculateAverage(ss))