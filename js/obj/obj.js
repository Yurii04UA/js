// let personYurii = {
//     firstName: "Yurii",
//     lastName: "Paraka",
//     age: 28,
//     isMarried: false,
//     pets: ["cat","mouse","snake"]
// };
// console.log(personYurii.pets[1])
// let toyoya = ["camry",2010,"sedan","red", true];

// let obj = {
//     name: "key"
// }

// let carToyota={
//     model: "Camry",
//     year: 2010,
//     carBody: "sedan",
//     color: "red",
//     hasAirbag: true
// };
// console.log(carToyota);  //{model: 'Camry', year: 2010, carBody: 'sedan', color: 'red', hasAirbag: true}
// console.log(carToyota["color"]); // red
// console.log(carToyota.color) // red

// carToyota.color = "Yellow"
// console.log(carToyota.color) // Yellow

// let sellers = [
//     {
//         firstName: "Piter",
//         lastName:"Muller",
//         regDate:"09.01.19",
//         age:22,
//         hasDicount: false,
//         cars: [
//             {
//                 carProducer: "fiat",
//                 carModel: "punto"
//             },
//             {
//                 carProducer: "Opel",
//                 carModel: "zafira"
//             }
//         ]
//     },
//     {
//         firstName: "Piter1",
//         lastName:"Muller1",
//         regDate:"08.08.18",
//         age:28,
//         hasDicount: false,
//         cars: [
//             "Toyota2","Toyota2","Toyota2","Toyota2"
//         ]
//     }
// ]

// console.log(sellers[1].hasDicount)
// console.log(sellers[0].cars[1])
// console.log(sellers[0].cars[0].carModel)

// // for (let i = 0; i < allCars.length; i++) {
// //     if (allCars[i].isSold===true) {
// //         console.log("Is  sold")
// //          console.log(allCars[i])
// //    }
    
// // }


// let allCars = [
//     {
//         carProducer: "BMW",
//         carModel: "i3",
//         collor: "orange",
//         year: 2020,
//         isSold: true
//     },
//     {
//         carProducer: "BMW",
//         carModel: "x6",
//         collor: "black",
//         year: 2021,
//         isSold: false
//     },{
//         carProducer: "Opel",
//         carModel: "Zafira",
//         collor: "White",
//         year: 2021,
//         isSold: false
//     },{
//         carProducer: "Opel",
//         carModel: "Corsa",
//         collor: "Silver",
//         year: 2020,
//         isSold: true
//     },{
//         carProducer: "Skoda",
//         carModel: "Octavia",
//         collor: "Silver",
//         year: 2020,
//         isSold: true
//     },{
//         carProducer: "Audi",
//         carModel: "a6",
//         collor: "red",
//         year: 2020,
//         isSold: false
//     }
// ]

// allCars.forEach(function(el){
//    if (el.isSold === false){
//        console.log("Is not sold")
//        console.log(el)
//    }
// });


// for (let i = 0; i < allCars.length; i++) {
//    if(allCars[i].isSold === true){
//        console.log("Is sold")
//        console.log(allCars[i])
//    }
    
// }
 ////// ------------------- вывод свойтв через ТОЧКУ или КВАДРАТНЫЕ СКОБКИ
// let yuriiObject = {
//     name: "Yurii",
//     lastName: "Paraka",
//     birthYear: 1992,
//     job: "no",
//     familyMembers: ["Evheniay","Kosmos","Yurii"],
//     hasDriverLicense: true,
//     // calcAge: function (birthYear){
//     //     return 2022- this.birthYear
//     // }
//     calcAge: function (){
//         this.age = 2022- this.birthYear
//     }
// };

// console.log(yuriiObject.familyMembers);
// console.log(yuriiObject['familyMembers']);

// const baseName = "Name";
// console.log(yuriiObject['last'+ baseName]); // при записи через скобки можно внутрь помещать другие выражения

// const userInput = prompt("What do you want to know about me? Choose between name, lastName, age, job, familyMembers");
// console.log(userInput);

// switch(userInput){
//     case "name" : alert('My name is ' + yuriiObject[userInput]);
//         break
//     case "lastName" : alert('My last name is ' + yuriiObject[userInput]);
//         break
//     case "familyMembers" : alert('My family members is :' + yuriiObject[userInput]);
//         break
//     default : alert("you xuy")
// }

// if(yuriiObject[userInput]){
//     console.log(yuriiObject[userInput])
// } else{
//     console.log('Ti debil')
// }

//////////////////////////////// <--- Create new properties

// yuriiObject.lacation = "Dnipro";
// yuriiObject['Email'] = "uyriparaka@gmail.com";
// console.log(yuriiObject);

////// Challenge
// Yurii has 3 family members adn the first one is Evheniay;

// console.log(yuriiObject.name + ' has '+ yuriiObject.familyMembers.length + ' family members and the first one is ' + yuriiObject.familyMembers[0])



/////////// function if object

// console.log(yuriiObject.calcAge());
// console.log(yuriiObject['calcAge']());
// console.log(yuriiObject.age);

// /////////////// Chalange
// let yuriiObject = {
//     name: "Yurii",
//     lastName: "Paraka",
//     birthYear: 1992,
//     job: "no working",
//     familyMembers: ["Evheniay","Kosmos","Yurii"],
//     hasDriverLicense: true,
//     calcAge: function (birthYear){
//         return 2022- this.birthYear
//     },
//     getSummary: function(){
//         // let hasDriverLicense1  //// <-- можно сделать тоже самое тернарным оператором
//         // if(this.hasDriverLicense){
//         //     hasDriverLicense1 = "he has a driver license"
            
//         // }else{
//         //     hasDriverLicense1 = "he has a not driver license"
//         // }
//         return  `${this.name} is a ${this.calcAge()}-year old,${this.job} and ${this.hasDriverLicense ? "he has a driver licence" : "he has a not driver license"}`;
//     }
// };


// yuriiObject.calcAge
// console.log(yuriiObject.getSummary())
// console.log(yuriiObject)



//// /////////////////

// Test Data: Jack weight 79 kg, height 1.70 m. Mike weighs 91 kg and his height is 1.93 m.
//first person
const objJack = {
    name : 'Jack',
    lastName: 'White',
    weight: 79,
    height: 1.70,
    BMI: function(){
        this.bodyMassIndex = (this.weight/(this.height*this.height)).toFixed(1);
        console.log(this)
        return this.bodyMassIndex   
    }

};

// second person
const objMike = {
    name : 'Mike',
    lastName: 'Black',
    weight: 91,
    height: 1.93,
    BMI: function(){
        this.bodyMassIndex = (this.weight/(this.height*this.height)).toFixed(1);
        console.log(this)
        return this.bodyMassIndex   
    }

};
console.log(objJack.BMI());


console.log(objMike.BMI());

console.log(`${objJack.name} ${objJack.lastName} BMI (${objJack.bodyMassIndex}) is higher than ${objMike.name} ${objMike.lastName} BMI (${objMike.bodyMassIndex})`)