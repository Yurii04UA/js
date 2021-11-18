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

for (let i = 29; i >= 1; i-=2) {
    console.log(i);
    
}
