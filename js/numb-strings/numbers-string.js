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

// METHODS

// (Имитация очереди)
arr.shift(); // Убераем елем в начале массива
arr.unshift(-99) // Добовляет елем в начало
arr.push("Nadaaa") // Добовляем елем в конец 
arr.pop() // забирает последний елем
// console.log(arr)

let arr1 = [1,2,3];
arr.concat(arr1) //склеиваем два масива

// console.log(arr.concat(arr1))
let arr2 = arr.concat(arr1)
arr2.indexOf("str1") // Узнать индекс если знаем название елем
// console.log(arr2.indexOf("str1")) 

arr.join() // Переводим весь массив в строку
arr.join("-") // Переводим весь массив в строку и добовляем как это будет вынлядиьт -99-3-str1-true-44

// arr.slice(1)  возвращает новый скопированый масив начиная с 1 елем
// arr.slice(1,2) возвращает новый скопированый масив начиная с 1 елем до 2
// arr.slice(1-2) возвращает новый скопированый масив и покажет послед 2

// arr.splice(1)  возвращает  масив удалив все елем начиная с 1 елем = -99
// arr.splice(1,1) возвращает  масив удалив один елем  с 1   (1,1 означает начиная с 1го индекса удалить 1 елем )
// arr.splice(1,2) возвращаетй масив удалив один елем  с 1 до 2 (1,2 означает начиная с 1го индекса удалить 2 елем)
// arr.splice(-2) возвращает масив удалив последние два елем
// arr.splice(1,0, 2,3,"text") возвращает масив (1,0, 2,3,"text", где 1 с какого индс начать, 0 индекс удалить, 2,3,"text" добавить новые индексы)
// arr.splice(1,1, "Текст2")  начиная с первого индеса заменить 1 индекс новым "Текст2" 
// arr.splice(1,2, "Текст2","Текст3")  начиная с первого индеса заменить 1 и 2 индекс новым "Текст2" и "Текст3" 

arr.includes() //метода для проверки есть ли такой елем в массиве
arr.includes(3) //вернет True так как 3 есть в массиве
arr.includes(-3) //вернет False так как -3 нет в массиве

arr.reverse() // возвращает массив в обратном порядке

// Превращение обычной строки в массив
let m = "vaza, peta, yura, oleg" 
m.split() //метод перевода строк в массив(в данном случае в 1 елем)
m.split(", ") //метод перевода строк в массив, ОБЯЗАТЕЛЬНО указать разделитель в данном случае ", и пробел"
// console.log(m.split(", "))



//////////////////////////////////
// if(isNaN(kk)) - проверяем является ли введеный данный числом
// function itsNan(){
//     let kk = prompt("number")
//     if(kk==null){
//         return console.log("cancel")
//     }else if(isNaN(kk)){
//         console.log("its not number")
//     }else if(kk>= 0 ){
//         console.log("Number")
//     }
// }

// itsNan(