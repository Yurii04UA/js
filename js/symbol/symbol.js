
// iterator: this is an object which has method next and return object with two field 'done' and 'value'

class Users {
  constructor(users) {
    this.users = users;
  }
  [Symbol.iterator]() {
    let i = 0;
    let users = this.users;

    return {
      next() {
        if (i < users.length) {
          return { done: false, value: users[i++] };
        }
        return { done: true };
      },
    };
  }
}

const allusers = new Users([
  {
    name: "aa0",
  },
  {
    name: "aa1",
  },
  {
    name: "aa2",
  },
]);

console.log(...allusers);


/////////////////////////////////////

