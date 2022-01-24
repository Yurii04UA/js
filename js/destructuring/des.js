///// <--- Array destructuring

const japaneseRestaurant = {
    name : 'Banzai',
    location: '108 Midl street, London',
    categories: ['Japaneseeee', 'Sushiii', 'Vegetarion', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura', 'Edamame', 'Sushi org'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
    oderFood: function(appetizersIndex, mainMenuIndex){
        return [this.appetizers[appetizersIndex] , this.mainMenu[mainMenuIndex]]
    },
};
console.log(japaneseRestaurant.oderFood(1,1));
// Возвращаем значение из функции
const [appetizersOder, mainMenuOder] = japaneseRestaurant.oderFood(1,1);
console.log(appetizersOder, mainMenuOder)
// const arr = [1, 2, 3];
// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[2];
// console.log(x1, x2, x3);

// const [a1, a2, a3] = arr; // деструктуризационная запись(распоковка массива)
// console.log(a1, a2, a3);

// const [categorie1, categorie2] = japaneseRestaurant.categories; // распаковка первых двук
let [japanese, , vegetarion] = japaneseRestaurant.categories; // распаковка первый и третий
console.log(japanese, vegetarion);

//// Мы можем менять элементы местами( старый способ)
// const temp = japanese; // временная переменная
// japanese = vegetarion;
// vegetarion = temp;
// console.log(japanese, vegetarion);

//// тоже самое с деструктуризацией
// [vegetarion, japanese] = [japanese, vegetarion]
//  console.log(japanese, vegetarion);

const nestedArr = [11,2,[3,4]];
// const [numb1, ,numb3] = nestedArr;
// console.log(numb1,numb3);
const [numb1, , [numb3, numb4]] = nestedArr   /// Вложеная деструктуризация!!!! распылили из масивы внутри массива
console.log(numb1, numb3, numb4);