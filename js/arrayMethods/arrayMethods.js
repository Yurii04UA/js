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

// const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
// const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
// const catsJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
// const catsJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

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
///////////////////////////////////////////////////
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

function createNicknames(arr) {
  arr.forEach((item) => {
    const userNameArray = item.userName.toLocaleLowerCase().split(" ");
    const userName = userNameArray.map((item) => item[0]).join("");
    item.userNickmases = userName;
  });
}

createNicknames(accounts);

// console.log(accounts);
/////////////////////////////////////////////////////////////////////// <----------FIlter
const withdrals = transactions.filter((trans) => trans < 0).join(" ");
// console.log(withdrals);

// const withdralsTest = [];
// for(const trans of transactions){
//   if(trans < 0){
//     withdralsTest.push(trans)
// }};
// console.log(withdralsTest);

const deposit = transactions.filter((item) => item > 0);
// console.log(deposit);

/////////////////////////////////////////////////////////////////// <----------Reduce

const balance = transactions.reduce((acc, item, index, array) => acc + item, 0);
// console.log(balance);

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
const min = transactions.reduce((acc, item) => {
  if (acc > item) {
    acc = item;
    // console.log(acc);
  }
  return acc;
}, 0);

// console.log(min);

const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

const getAverageHumanAge = (arr) => {
  const humanAges = arr
    .map((cat) => {
      return cat <= 2 ? cat * 10 : cat * 7;
    })
    .filter((item) => item >= 18);
  const averageAge =
    humanAges.reduce((acc, item) => {
      return acc + item;
    }, 0) / humanAges.length;
  return averageAge.toFixed(1);
};

// console.log(getAverageHumanAge(catsJane));

const a = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const b = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

// console.log(getAverageHumanAge(a));
// console.log(getAverageHumanAge(b));

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const totalWithdral = transactions
  .filter((transaction) => transaction < 0)
  .map((transaction) => transaction * 0.86)
  .reduce((acc, transaction) => acc + transaction, 0);
// console.log(totalWithdral);

///////////////////////////////////////////////////////////// <----------Find

const coreyMartinezAccount = accounts.find(
  (item) => item.userName === "Oliver Avila"
);
// console.log(coreyMartinezAccount);
const sd = "Jello asd s";

////////////////////////////////////////////////////
// const input_login = document.querySelector('.login_input_user');
// const input_pin = document.querySelector('.login_input_pin');
// const login_btn = document.querySelector('.login_btn');
// let currentAccount;
// login_btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const currentAccount = accounts.find(account => account.userNickmases === input_login.value)
//   if(currentAccount?.pin === +input_pin.value){
//     input_login.value = '';
//     input_pin.value = ''
//     input_pin.blur()
//     console.log(`Welcome ${currentAccount.userName}`);
//     document.body.style.background = 'green'
//   }else{
//     console.log('Your login or pin INCORECT!!');
//     document.body.style.background = 'red'
//   }
//   console.log(currentAccount);
// })

////////////////////////////////////////////////////  <---------- Some() and Every ()
////// <---------- Some()
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// console.log(transactions.includes(250)); /// includes() Проверяет есть ли такой елемент в массива и возвращает ТРУ

const hasWithdrawals = transactions.some((trans) => trans < 0); /// some() Проверяет есть ли елементы которые соответствуют требованиям и возвращает ТРУ
// console.log(hasWithdrawals);

// const hasWithdrawalsOver5000 = transactions.some(trans => trans < -5000)
// console.log(hasWithdrawalsOver5000);
const hasWithdrawalsOver5000 = transactions.some(function (trans) {
  return trans < -5000;
});
// console.log(hasWithdrawalsOver5000);

////// <---------- Every()   Проверяет все елементы на соответсвия условию и вывидит ТРУ
// console.log(transactions.every((trans) => trans < 0));

////////////////////////////////////////////////////  <---------- flat() and flatMap ()

const someArray = [
  [1, 2, 3],
  [2, 1, 3],
  [3, 4, 1],
];
// console.log(someArray.flat()); // <---------- flat() разворачивает внутрнение массивы

// const allTransactionsArray = accounts
//   .map((account) => account.transactions)
//   .flat()
//   .reduce((acc, trans) => acc + trans, 0);

// console.log(allTransactionsArray);

const allTransactionsArray = accounts
  .flatMap((account) => account.transactions) //<---------- flatMap() заменяет два метора МАР И flat
  .reduce((acc, trans) => acc + trans, 0);

// console.log(allTransactionsArray);

//////////////////////////////////// Sorting
/////// String
const names = ["Yurii", "Sara", "Alex", "Devid"];
// console.log(names.sort());

///////// Number
const newTrans = [...transactions];
// console.log(newTrans);
const sortTransLowToHigh = newTrans.sort(
  (a, b) => a - b /// тоже самое как и код ниже
  /* {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
}  //// result [-750, -500, -350, -180, -120, 50, 250, 300, 1400, 5000] 
*/
);

// const sortTransHighToLow = transactions.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }
// });  /// result [5000, 1400, 300, 250, 50, -120, -180, -350, -500, -750]

// console.log(sortTransLowToHigh, sortTransHighToLow);

const bankDepositTotal = accounts
  .flatMap((acc) => acc.transactions)
  .filter((trans) => trans > 0)
  .reduce((acc, deposit) => acc + deposit, 0);
// console.log(bankDepositTotal);

const bankWithdroOver300 = accounts
  .flatMap((acc) => acc.transactions)
  .filter((trans) => trans < -300); //.length
// console.log(bankWithdroOver300);

const depositAndWithdrowal = accounts
  .flatMap((acc) => acc.transactions)
  .reduce(
    (acc, trans) => {
      // trans > 0 ? (acc.depositTotal += trans) : (acc.withdrawalsTotal += trans);
      acc[trans > 0 ? "depositTotal" : "withdrawalsTotal"] += trans;
      return acc;
    },
    { depositTotal: 0, withdrawalsTotal: 0 }
  );
// console.log(depositAndWithdrowal);

/// welcome work with array in the javascript -> Welcome,Work with Array in the Javascript

function textToTitleCase(text) {
  const exeption = ["in", "the", "with", "at", "on", "to"];
  const arrayFromText = text
    .toLowerCase()
    .trim()
    .split(" ")
    .map((item) => {
      if (exeption.includes(item)) {
        return item;
      } else {
        return item[0].toUpperCase() + item.slice(1);
      }
    })
    .join(" ");

  // console.log(arrayFromText);
}
textToTitleCase(
  " to welcome Work with array in the javascript Asgard TO THE aT my HOMe WITH you "
);

const cats = [
  { catWeight: 3, foodWeight: 25, owners: ["Natali"] },
  { catWeight: 6, foodWeight: 90, owners: ["Maria", "Alice"] },
  { catWeight: 4, foodWeight: 45, owners: ["Alex", "Iren"] },
  { catWeight: 7, foodWeight: 80, owners: ["Boris"] },
];
/// 1.
cats.forEach((cat) => {
  cat.recomedPortion = cat.catWeight * 0.75 * 12;
});
console.log(cats);

/// 2.
const ownerAlex = cats.find((cat) => {
  return cat.owners.includes("Alex");
});

console.log(ownerAlex);
console.log(
  `cats mr. Alexa eat ${
    ownerAlex.foodWeight < ownerAlex.recomedPortion * 0.9
      ? "too lose"
      : "too more"
  } `
);

const catsEatTooMachOwners = cats
  .filter((cats) => cats.foodWeight > cats.recomedPortion * 1.1)
  .flatMap((cat) => cat.owners);
const catsEatTooLittleOwners = cats
  .filter((cats) => cats.foodWeight < cats.recomedPortion * 0.9)
  .flatMap((cat) => cat.owners);

console.log(
  `"${catsEatTooMachOwners.join(
    ", "
  )} - хозяева кошек, которые едят слишком много!" `
);
console.log(catsEatTooLittleOwners);

console.log(cats.some((cat) => cat.foodWeight === cat.recomedPortion));

function catEat(cat) {
  return (
    cat.foodWeight > cat.recomedPortion * 0.9 &&
    cat.foodWeight < cat.recomedPortion * 1.1
  );
}
console.log(cats.some(catEat));
console.log(cats.filter(catEat));

const cats1 = cats.slice().sort((a,b)=> a.recomedPortion - b.recomedPortion)
console.log(cats1);
