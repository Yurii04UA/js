const account = {
   owner :'yurii',
   transaction: [0,15,22,11,100,222],

   getLastTransaction(){
      return this.transaction.pop()
   }
}
console.log(account.getLastTransaction());


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
      console.log(name);
      if(name.includes(' ')){
         this._fullName = name;
      }else{
         alert('ti xuy')
      }
   }
   get fullName(){
      return this._fullName
   }
}

const yurii = new PersonClass('Yurii Paraka',2000)
console.log(yurii);
