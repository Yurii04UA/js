  /// Map    /// forEach     /// Filter     /// Reduce    /// Find    ///FindIndex

const people = [
    {name: 'Yurii', birthYear: 1992, city: 'Dnipro', email: 'par@gmail.com'},
    {name: 'Olga', birthYear: 1973, city: 'Lviv', email: 'paOlgar@gmail.com'},
    {name: 'Tosha', birthYear: 2016, city: 'Odessa', email: 'pTosar@gmail.com'},
    {name: 'Anatoly', birthYear: 2012, city: 'Kiev', email: 'Anaar@gmail.com'},
    {name: 'Yurii', birthYear: 1999, city: 'Lviv', email: 'pssd@gmail.com'},
];

  ////////////// <-- forEach
 /// с помощью forEach мы изменяем текущий массив

people.forEach((elem,index) => {
      elem.id = index;
      elem.age = 2022 -elem.birthYear;
      elem.country = 'Ukraine'
      return people
});

console.log(people);

  ////////////// <-- Map
//// с помощью forEach текущий массив перерабатывается в новый
  const newPeople = people.map((person,index) => {
    return `${person.name} (${person.birthYear} (${person.age}))`
    
  });
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



