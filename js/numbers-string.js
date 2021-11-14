Number;
5,15,11,3.15,-18;
let a = 5;
let gg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11];

Math.random // случайное число от 0 до 1

function ran(min, max){   //случайное число в диапозоне
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}   

console.log(ran(1,500))  //случайное число в диапозоне


Math.max(1,5,15,11,-11) // максимальное число из перечисленных
console.log(Math.random())
console.log(Math.max.apply(null, gg)) //макс число из масива
console.log(Math.min.apply(null, gg)) //мин число из масива

// gg[11] = 19;
// console.log(gg)
// console.log(Math.max.apply(null, gg))

// console.log(`How much? ${a}`)  - в одинарных скобках `` записуют если нужно добавить переменную в строку. Переменная записывается так ${a}

String;
"Hello", "Hello world";
let b = "Hello my world"

// console.log(b);

b.length //- длина строки
// console.log(b.length)

 b.slice //- показывает значение в диапозоне

//  console.log(b.slice(0,3)) - показывает значения от 0 знака до 3 знака
//  =Hel;

//  console.log(b.slice(7)) -показывает начиная со 7 знака
//  =y world; 