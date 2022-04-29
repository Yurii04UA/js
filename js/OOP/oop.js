/// function counstrukror

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


// class expression
// const PersonClass = class{

// }

// class declaration
// class PersonClass{
//    constructor(firstName,birthYear){
//       this.firstName = firstName;
//       this.birthYear = birthYear;
//    }
//    // методы добавляются в protopype
//    printAge(){
//       console.log(2022 - this.birthYear);
//    }
//    greet(){
//       console.log(`hello my name is ${this.firstName}`);
//    }

//    static highFive(){
//       console.log('High five!');
//    }
// }


// const jack = new PersonClass('jacl',2000);
// console.log(jack);
// jack.printAge()
// jack.greet()
//1. Классы не "поднимаются" при помощи hoisting
//2. Классы являются "first class citizen"
//3. Все что в нутри класса запускается в стрикт моде


////////////////////////////////////////////////////
/// Object.create()
// const PersonProto ={
//    printAgeProto() {
//       console.log(2022-this.birthYear);
//    }
// }

// const jkack = Object.create(PersonProto)

// jkack.name = 'jkack',
// jkack.birthYear = 1999
// console.log(jkack);
// jkack.printAgeProto()

class CarClass {
   constructor(name,speed){
      this.name = name;
      this.speed = speed
   }
   accelerate(){
      this.speed = this.speed + 5;
      console.log(`${this.name} is accelerating ${this.speed}`);
   }
   breake(){
      this.speed = this.speed - 5;
      console.log(`${this.name} slow down ${this.speed}`);
   }
   get speedMph(){
      return `${this.speed/ 1.6} Mph `;
   }
   
   set speedMph(speed){
      this.speed = speed *1.6
   }
}

const audi = new CarClass('audi',100)
// console.log(audi);
// audi.accelerate()
// audi.breake()
// console.log(audi.speedMph);

///////////////////////////////////////////////////////////////////////////
// Наследование Функция конструктор 
const Persons = function(firstName,birthYear){
   // Instance properties - свойство эксземпляра
   this.firstName= firstName;
   this.birthYear = birthYear;
}
Persons.prototype.printAge = function(){
   console.log(new Date().getFullYear()-this.birthYear);
}

const Student = function (firstName,birthYear,dept){
   Persons.call(this, firstName,birthYear)
   this.dept = dept;

}
Student.prototype = Object.create(Persons.prototype)  /// связываем два прототипа 
Student.prototype.introduce = function(){
   console.log(`Hello my name is ${this.firstName}. I study ${this.dept} department.`);
}
const loh = new Student('Loh',1999,'Programming')
// console.log(loh);
// loh.introduce()
// loh.printAge()



const ElectricCar = function(name,speed, battery){
   Car.call(this,name,speed);
   this.battery = battery;
};
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar; // привязывает прототип
ElectricCar.prototype.chargeBattery = function(chargeLevel){
   this.battery = chargeLevel
}
ElectricCar.prototype.accelerate = function(){
   this.speed = this.speed + 10;
   this.battery = this.battery - 1;
   console.log(`${this.name} is accelerating. Speed = ${this.speed} km/h. Battery status ${this.battery}% `);
}
ElectricCar.prototype.breake = function(){
   this.speed = this.speed - 10;
   this.battery = this.battery - 0.5;
   console.log(`${this.name} slow down. Speed = ${this.speed} km/h. Battery status ${this.battery}% `);
}
const tesla = new ElectricCar('tesla',200,50);
tesla.chargeBattery(80)

// tesla.accelerate()
// tesla.breake()
// tesla.accelerate()



// const ElectricCarCoupe = function(name,speed,battery){
//    ElectricCar.call(this,name,speed,battery)
// }
// ElectricCarCoupe.prototype = Object.create(ElectricCar.prototype)

// const caa = new ElectricCarCoupe('a',1,2)
// caa.hello()
// console.log(caa);

// const tesla = new Car('Tesla',200);
// const tesla2 = new ElectricCar('Tesla2',200,80);
// tesla2.hello()
// console.log(tesla);
// console.log(tesla2);

/////////////////////////////////////////////////////////////
// Наследование классов. Class ES6


class PersonClass{
   constructor(fullName,birthYear){
      this.fullName = fullName;
      this.birthYear = birthYear;
   }
   // методы добавляются в protopype
   printAge(){
      console.log(2022 - this.birthYear);
   }
   greet(){
      console.log(`hello my name is ${this.fullName}`);
   }

   get age(){
      return 2022- this.birthYear
   }
   set fullName(name){
      
      if(name.includes(' ')){
         this._fullName = name;
      }else{
         alert('ti xuy')
      }
   }
   get fullName(){
      return this._fullName
   }
   static highFive(){
      console.log('High five!');
   }
}

class Workerdd extends PersonClass{
   constructor(fullName,birthYear,position){
      super(fullName,birthYear);
      this.position = position;
   }
   includesWorkerdd(){
      console.log(`hello my name ${this.fullName}. I am ${this.position}`);
   }
   greet(){
      console.log(`Hello i am ${this.fullName}. I am work at ofice`);
   }
}

const jan = new Workerdd('Jan Podolac',2000,'chef');



/////////////////////////////////////////////////////////////
// Наследования классов Object.create()
// const PersonProto ={
//    printAgeProto() {
//       console.log(2022-this.birthYear);
//    },
//    initPerson(firstName,birthYear){
//       this.firstName = firstName;
//       this.birthYear = birthYear;
//    }
// }

// const StudentProto = Object.create(PersonProto)
// const jkack = Object.create(StudentProto)
// jkack.initPerson('k',1999)
// console.log(jkack);


//// //////////////////////////
// class Account {
//    constructor(owner,currenty,pin){
//       this.owner = owner;
//       this.currenty = currenty;
//       this.pin = pin;
//       this.transaction = [];
//       this.local = navigator.language

//       // console.log(`Hello ${this.owner}`); 
//    }
//    deposit(value){
//       this.transaction.push(value)
//    }
//    withdraw(value){
//       this.deposit(-value)
//    }

//    approvedLoan(value){
//       return true
//    }
//    requestLoan(value){
//       if(this.approvedLoan(value)){
//          this.deposit(value)
//       }
//    }
// }

// const account1= new Account('jack','usd',1111)
// // console.log(account1);
// // account1.deposit(100)
// // account1.deposit(300)
// // console.log(account1);
// // account1.withdraw(500)
// account1.requestLoan(5000)

// console.log(account1);

///////////////////////////////////////////////////////////
// Инкапсуляция 

// public fields
// private fields
// public methods
// private methods

class Account {
   // public fields
   local = navigator.language;
   // private fields
   #transaction = [];
   #pin;
   constructor(owner,currenty,pin){
      this.owner = owner;
      this.currenty = currenty;
      this.#pin = pin;
      

      // console.log(`Hello ${this.owner}`); 
   }
   deposit(value){
      this.#transaction.push(value)
   }
   withdraw(value){
      this.deposit(-value)
   }

   
   requestLoan(value){
      if(this.#approvedLoan(value)){
         this.deposit(value)
      }
   }
   // public methods
   getTransaction(){
      return this.#transaction
   }
   // private methods
   #approvedLoan(value){
      return true
   }

}

const account2= new Account('jack','usd',1111)
// console.log(account1);
// account1.deposit(100)
// account1.deposit(300)
// console.log(account1);
// account1.withdraw(500)
account2.requestLoan(5000)

console.log(account2);
console.log(account2.getTransaction());


//////////// 
 // task

 class ElectricCarClass extends CarClass{
    constructor(name,speed,battery){
       super(name,speed);
       this.battery = battery;
    }
    accelerate(){
       this.speed+=10
       this.battery-=1
       console.log(`${this.name} is accelating. Speed ${this.speed}. Batterrt ${this.battery}`);
       return this
    }
    breake(){
      this.speed-=10
      this.battery-=1
      console.log(`${this.name} slow down. Speed ${this.speed}. Batterrt ${this.battery}`);
      return this
    }
    chargeBattery(chargeLevel){
       this.battery = chargeLevel;
       return this
    }
 }
 const i3 = new ElectricCarClass('i3',120,33)
 console.log(i3);
i3.accelerate().accelerate().accelerate().breake().breake()

