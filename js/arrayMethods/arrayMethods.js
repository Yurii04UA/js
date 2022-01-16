  /// Map    /// forEach     /// Filter     /// Reduce    /// Find    ///FindIndex

const people = [
    {name: 'Yurii', birthYear: 1992, location: 'Dnipro', email: 'par@gmail.com'},
    {name: 'Olga', birthYear: 1973, location: 'Lviv', email: 'paOlgar@gmail.com'},
    {name: 'Tosha', birthYear: 1990, location: 'Odessa', email: 'pTosar@gmail.com'},
    {name: 'Anatoly', birthYear: 1981, location: 'Kiev', email: 'Anaar@gmail.com'},
    {name: 'Yurii', birthYear: 1999, location: 'Praha', email: 'pssd@gmail.com'},
];

  /// <-- forEach

console.log(people);

people.forEach((elem,index) => {
  console.log(elem,index)
});