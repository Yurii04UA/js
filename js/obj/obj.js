let personYurii = {
    firstName: "Yurii",
    lastName: "Paraka",
    age: 28,
    isMarried: false,
    pets: ["cat","mouse","snake"]
};
console.log(personYurii.pets[1])
let toyoya = ["camry",2010,"sedan","red", true];

let obj = {
    name: "key"
}

let carToyota={
    model: "Camry",
    year: 2010,
    carBody: "sedan",
    color: "red",
    hasAirbag: true
};
console.log(carToyota);  //{model: 'Camry', year: 2010, carBody: 'sedan', color: 'red', hasAirbag: true}
console.log(carToyota["color"]); // red
console.log(carToyota.color) // red

carToyota.color = "Yellow"
console.log(carToyota.color) // Yellow

let sellers = [
    {
        firstName: "Piter",
        lastName:"Muller",
        regDate:"09.01.19",
        age:22,
        hasDicount: false,
        cars: [
            {
                carProducer: "fiat",
                carModel: "punto"
            },
            {
                carProducer: "Opel",
                carModel: "zafira"
            }
        ]
    },
    {
        firstName: "Piter1",
        lastName:"Muller1",
        regDate:"08.08.18",
        age:28,
        hasDicount: false,
        cars: [
            "Toyota2","Toyota2","Toyota2","Toyota2"
        ]
    }
]

console.log(sellers[1].hasDicount)
console.log(sellers[0].cars[1])
console.log(sellers[0].cars[0].carModel)

// for (let i = 0; i < allCars.length; i++) {
//     if (allCars[i].isSold===true) {
//         console.log("Is  sold")
//          console.log(allCars[i])
//    }
    
// }


let allCars = [
    {
        carProducer: "BMW",
        carModel: "i3",
        collor: "orange",
        year: 2020,
        isSold: true
    },
    {
        carProducer: "BMW",
        carModel: "x6",
        collor: "black",
        year: 2021,
        isSold: false
    },{
        carProducer: "Opel",
        carModel: "Zafira",
        collor: "White",
        year: 2021,
        isSold: false
    },{
        carProducer: "Opel",
        carModel: "Corsa",
        collor: "Silver",
        year: 2020,
        isSold: true
    },{
        carProducer: "Skoda",
        carModel: "Octavia",
        collor: "Silver",
        year: 2020,
        isSold: true
    },{
        carProducer: "Audi",
        carModel: "a6",
        collor: "red",
        year: 2020,
        isSold: false
    }
]

allCars.forEach(function(el){
   if (el.isSold === false){
       console.log("Is not sold")
       console.log(el)
   }
});


for (let i = 0; i < allCars.length; i++) {
   if(allCars[i].isSold === true){
       console.log("Is sold")
       console.log(allCars[i])
   }
    
}