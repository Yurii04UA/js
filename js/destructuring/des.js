///// <--- Array destructuring

const japaneseRestaurant = {
    name : 'Banzai',
    location: '108 Midl street, London',
    categories: ['Japaneseeee', 'Sushiii', 'Vegetarion', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura', 'Edamame', 'Sushi org'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura']
};

// const arr = [1, 2, 3];
// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[2];
// console.log(x1, x2, x3);

// const [a1, a2, a3] = arr; // деструктуризационная запись(распоковка массива)
// console.log(a1, a2, a3);

// const [categorie1, categorie2] = japaneseRestaurant.categories; // распаковка первых двук
const [categorie1, , categorie3] = japaneseRestaurant.categories; // распаковка первый и третий
console.log(categorie1, categorie3)
