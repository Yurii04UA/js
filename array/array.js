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

// arr.splice(1)  возвращает  масив удалив все елем начиная с 1 елем = -99 (удаленный елементы попадают в новый массив)
// arr.splice(1,1) возвращает  масив удалив один елем  с 1   (1,1 означает начиная с 1го индекса удалить 1 елем ) (удаленный елементы попадают в новый массив)
// arr.splice(1,2) возвращаетй масив удалив один елем  с 1 до 2 (1,2 означает начиная с 1го индекса удалить 2 елем)(удаленный елементы попадают в новый массив)
// arr.splice(-2) возвращает масив удалив последние два елем
// arr.splice(1,0, 2,3,"text") возвращает масив (1,0, 2,3,"text", где 1 с какого индс начать, 0 индекс удалить, 2,3,"text" добавить новые индексы)
// arr.splice(1,1, "Текст2")  начиная с первого индеса заменить 1 индекс новым "Текст2" 
// arr.splice(1,2, "Текст2","Текст3")  начиная с первого индеса заменить 1 и 2 индекс новым "Текст2" и "Текст3" 

let cars = ["Toyota","Opel","BMW","Pegout","KIA"]
// console.log(cars)

let germanCars = cars.slice(1,3)
// console.log(germanCars) // (2) ['Opel', 'BMW']
// console.log(cars) // (5) ['Toyota', 'Opel', 'BMW', 'Pegout', 'KIA']

let moreCars = cars.splice(1,2)
// console.log(moreCars) // (2) ['Opel', 'BMW']
// console.log(cars) // (3) ['Toyota', 'Pegout', 'KIA']

//////////
arr.includes() //метода для проверки есть ли такой елем в массиве
arr.includes(3) //вернет True так как 3 есть в массиве
arr.includes(-3) //вернет False так как -3 нет в массиве

arr.reverse() // возвращает массив в обратном порядке

// Превращение обычной строки в массив
let m = "vaza, peta, yura, oleg" 
m.split() //метод перевода строк в массив(в данном случае в 1 елем)
m.split(", ") //метод перевода строк в массив, ОБЯЗАТЕЛЬНО указать разделитель в данном случае ", и пробел"
// console.log(m.split(", "))



//////////////////////////////////////// Повтор
// Added item
let names = ["Yurii","Yurii1","Yurii2","Yurii3","Yurii4"];
// console.log(names);
names[5]= "Yurii5"; // added new item in array(one of the methods)
// console.log(names);
names[names.length]="Yurii6"; // added new item in array(one of the methods)
// console.log(names);
names.push("Yurii7") // added new item to the end of the array(one of the methods)
// console.log(names);

// Delete item

names.pop(); // delete item from end of  array
// console.log(names);

///////// method indexOf("yuryy")
names.indexOf("Yurii")
// console.log(names.indexOf("Yurii2")) // = 2
let x = names.indexOf("Yurii3");
// console.log(x); // = 3
///////////
let toyoya = ["camry",2010,"sedan","red"];
let isSedan = toyoya.indexOf("sedan") === -1 ? console.log("Type is not sedan") : console.log("Type is sedan")
////////////////
