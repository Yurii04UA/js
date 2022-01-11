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

const user = ['Yurii','Paraka',1992,'no work',['Jeniy','Koss']];
// console.log(user);

// console.log(user.length)
const typeArray = [];
for( let i = 0; i < user.length; i++){
    console.log(user[i], typeof(user[i]));

    // typeArray.push(typeof(user[i]));  // сделаем по другому

    typeArray[i] = typeof(user[i]);   // результат одинаков
};
console.log(typeArray);