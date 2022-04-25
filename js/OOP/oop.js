const Person = function(firstName,birthYear){
   // Instance properties - свойство эксземпляра
   this.firstName= firstName;
   this.birthYear = birthYear;


}

const yurii = new Person('yurii',1992)
const yurii2 = new Person('yurii2',1990)
console.log(yurii,yurii2);

// 1.Создает пустой обьект {}
// 2. Выхывается функция, this = {}
// 3. {} связывается с прототипом
// 4. Функция возвращает {}
