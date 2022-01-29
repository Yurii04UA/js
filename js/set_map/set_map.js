///// <----SET  Множество 
//// Множество не упорядоченый массив

const oders = new Set([   /// убирает повторы
   `sushi`,
   `Ramen`,
   `Tempura`,
   `sushi`,
   `Ramen`,
   `Tempura`,
])

// console.log(oders);

const oder = [ 
   `sushi`,
   `Ramen`,
   `Tempura`,
   `sushi`,
   `Ramen`,
   `Tempura`,
];
// console.log(oder);
// const newOders = new Set(oder)
// newOders.add('Pizza')  // в множество мы можемдобовлять и удалять при помощи arr.add and arr.delete
// console.log(new Set(oder));
// console.log(newOders);
// console.log(new Set('Hello')); //{'H', 'e', 'l', 'o'}
// console.log(newOders.size); // size
// console.log(newOders.has('sushi')); // наличие выводит true
// console.log(newOders.has('pizza')); // наличие выводит false


// for(const oder of newOders){   /// Set являете итеребл, его можно перебирать
//    console.log(oder);
// };

/// Remuve dublicates

// const mealIngridients = ['Rice','Pepper','Garlic','Pepper','Garlic','Meat','Meat'];
// const newMealIng = new Set(mealIngridients);
// console.log(newMealIng);
// const newMealIngridients = [...newMealIng];
// console.log(newMealIngridients);


/// <----MAP

 const restorant = new Map();
 restorant.set('name','Bench');
 restorant.set(1,'London');
 restorant.set(2,'Kiev');
 restorant.set(3,'Dnipro');

 restorant.set('categiries', ['Japanse', 'Vegetarion', 'Oeganic'])
 .set('open',0)
 .set('closed',24)

 console.log(restorant);