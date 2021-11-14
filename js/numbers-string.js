        Number;
5,15,11,3.15,-18;
let a = 5;
let gg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11];

Math.random // случайное число от 0 до 1

function ranomNamb(min, max){   //случайное число в диапозоне
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}   

let minNamber = 1
let maxNumber = 10101
console.log(ranomNamb(minNamber, maxNumber))  //случайное число в диапозоне



// Math.max(1,5,15,11,-11) // максимальное число из перечисленных
// console.log(Math.random())
// console.log(Math.max.apply(null, gg)) //макс число из масива
// console.log(Math.min.apply(null, gg)) //мин число из масива

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

       
         Array; //  Массивы( Arrays)
    
let arr = [5,2,"str1", true]; // отсчет начинается с 0 ;
// 0: 5
// 1: 2
// 2: "str1"
// 3: true
// length: 4
arr[4] = 44 // добавил итем в масив 
arr[1] = 3 // изменить третий элемент
// console.log(arr[2]) // показать эдемент под номером 2 - "str1" (отсчет нач с 0)
    
let matrix =[  // массивы в масиве
[2,12,4],
[31,-14,7],
[-3,95,0],
[arr]
];
// console.log(matrix[2][0]) // вызываем 1е значение из 3 массива(нач с 0)

arr.shift(); // Убераем елем в начале массива
arr.push("Nadaaa") // Добовляем елем в конец (Имитация очереди)
console.log(arr)
