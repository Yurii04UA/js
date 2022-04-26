const Person = function(firstName,birthYear){
   // Instance properties - свойство эксземпляра
   this.firstName= firstName;
   this.birthYear = birthYear;


}

const yurii = new Person('yurii',1992)
const yurii2 = new Person('yurii2',1990)
// console.log(yurii,yurii2);

// 1.Создает пустой обьект {}
// 2. Выхывается функция, this = {}
// 3. {} связывается с прототипом
// 4. Функция возвращает {}
////////////////////////////////////////
//Prototype 

Person.prototype.printAge = function(){
   console.log(new Date().getFullYear()-this.birthYear);
}
// yurii.printAge()
// yurii2.printAge()

////////
// task

const Car = function(name,speed){
   this.name = name;
   this.speed = speed;
}

Car.prototype.accelerate = function(){
   this.speed = this.speed + 5
   console.log(`${this.name} speed = ${this.speed} km `);
}
Car.prototype.breake = function(){
   this.speed = this.speed -5;
   console.log(`${this.name} speed = ${this.speed} km `);
}

const honda = new Car('honda',120)
const bmw = new Car('bmw',150)
// honda.accelerate()
// honda.breake()
// honda.accelerate()
// honda.accelerate()
// honda.breake()
// honda.breake()
// honda.breake()
// honda.breake()

// bmw.accelerate()
// bmw.accelerate()
// bmw.accelerate()
// bmw.accelerate()


///// Classes ES6

