/// Map    /// forEach     /// Filter     /// Reduce    /// Find    ///FindIndex

const people = [
  {
    name: "Yurii",
    birthYear: 1992,
    city: "Dnipro",
    email: "par@gmail.com",
  },
  {
    name: "Olga",
    birthYear: 1973,
    city: "Lviv",
    email: "paOlgar@gmail.com",
  },
  {
    name: "Tosha",
    birthYear: 2016,
    city: "Odessa",
    email: "pTosar@gmail.com",
  },
  {
    name: "Anatoly",
    birthYear: 2012,
    city: "Kiev",
    email: "Anaar@gmail.com",
  },
  {
    name: "Yurii",
    birthYear: 1999,
    city: "Lviv",
    email: "pssd@gmail.com",
  },
];

////////////// <-- forEach
/// с помощью forEach мы изменяем текущий массив

people.forEach((elem, index) => {
  elem.id = index;
  elem.age = 2022 - elem.birthYear;
  elem.country = "Ukraine";
  return people;
});

// console.log(people);

////////////// <-- Map
//// с помощью Map текущий массив перерабатывается в новый
// const newPeople = people.map((person, index) => {
//    nreturn `${person.name} (${person.birthYear} (${person.age}))`

// });
// console.log(newPeople);

//////////////// <--Filter
// const more18 = [];
//   for (i = 0; i < people.length; i++){
//       if ((2022 - people[i].birthYear) >= 18){
//        more18.push(people[i])
//       };
//   };
//   console.log(more18);

///// таже запись чере метод filter

// const more18 = people.filter(person => {
//   if (person.age >=18){
//     return true
//   }
// })
// console.log(more18);

// const more18 = people.filter(person => person.age >= 18);   ///<--- та же самая запись с полным функционалом стрелочной функции
// console.log(more18);

////// <----------- Find

const yurii = people.find((person) => person.name === "Yurii");
// console.log(yurii);

const currencies = new Map([
  ["USD", "United Stats dollar"],
  ["EUR", "Euro"],
  ["UAN", "Ukrainian hryvhya"],
]);
// console.log(currencies);

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
///////////////
let arr = ["a", "b", "c", "d", "e", "f"];

// console.log(arr);
// console.log(arr.slice(1,4)); // возвращает новый вырезаный массив

// for(const transaction of transactions){
//   if(transaction > 0){
//     console.log(`${transaction} was deposit`);
//   } else{
//     console.log(`${Math.abs(transaction)} was withdrew `);
//   }
// }

// transactions.forEach((item, i) =>{
//   item > 0 ? console.log(`${item} was deposit, index ${i}`) : console.log(`${Math.abs(item)} was withdrew, index ${i}`)
// })

// currencies.forEach((value,key) => {
//   console.log(`key: ${key}//// value: ${value}`);
// })

const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const catsJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const catsJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

function verifyCats(arr1, arr2) {
  const fixedArr = arr1.slice(1, -1);
  const allCats = [...fixedArr, ...arr2];
  console.log(allCats);
  allCats.forEach((item, index) => {
    item > 2
      ? console.log(`cats # ${index + 1} is adult, cat is ${item} eyars old`)
      : console.log(`cats # ${index + 1} is young`);
  });
}

// verifyCats(catsJane,catsJulia)
// verifyCats(catsJane2,catsJulia2)

const newTransactions = transactions.map((item) => item * 0.86);

const newTransactions1 = [];
for (const n of transactions) {
  newTransactions1.push(n * 0.86);
}
/////////////////////////////////////
const account1 = {
  userName: "Cecil Ireland",
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: "Amani Salt",
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: "Corey Martinez",
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: "Kamile Searle",
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: "Oliver Avila",
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

const userNameArray = account1.userName.toLocaleLowerCase().split(" ");
const userName = userNameArray[0][0] + userNameArray[1][0];

function createNicknames (arr){
  arr.forEach((item) => {
    const userNameArray = item.userName.toLocaleLowerCase().split(" ");
    const userName = userNameArray.map((item) => item[0]).join("");
    item.userNickmases = userName;
  });
}

createNicknames(accounts)

console.log(accounts);
