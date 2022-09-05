// iterator: this is an object which has method next and method next return object with two field 'done' and 'value'

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

// console.log(...allusers);

/////////////////////////////////////

class UsersGen {
  constructor(users) {
    this.users = users;
    this.len = users.length;
  }

  *getIterator() {
    for (let i in this.users) {
      yield this.users[i];
    }
  }
}

const allUsers = new UsersGen([
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

const allUsersIterator = allUsers.getIterator();
// console.log(...allUsersIterator);

/// or
function* UsersGenerator(users) {
  for (let i in users) {
    yield users[i];
  }
}

const aa = UsersGenerator([
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
// console.log(...aa);

function* generator(a, b) {
  // return result a + b
  // also store any new input in K (not the result of a + b)
  let k = yield a + b;
  let m = yield a + b + k;
  yield a + b + k + m;
}

// let gen = generator(10,20)

// console.log(gen);
// console.log(gen.next());
// console.log(gen.next(50));
// console.log(gen);
// console.log(gen.next(100));
// console.log(gen);

const async = (generator) => {
  const g = generator();

  (function next(value) {
    console.log(value);
    const n = g.next(value);
    console.log(n.value);
    console.log(n);
    if (n.done) return;
    n.value.then(next);
  })();
};

async(function* () {
  const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = yield response.json();
  console.log(data);
});

/*
Thus, we need our async “polyfill” to instantiate the generator, recursively nesting next for each yield statement inside its Promise’s then callback until done is true. In other words, when each Promise resolves, its value will be passed as an argument to next, whereby g.next will replace its corresponding yield statement with that value.

Таким образом, нам нужен наш асинхронный «полифилл» для создания экземпляра генератора, рекурсивно вложенного next для каждого оператора yield внутри обратного вызова его промиса then до тех пор, пока не будет выполнено. Другими словами, когда каждое обещание разрешается, его значение будет передано в качестве аргумента функции next, в результате чего g.next заменит соответствующий оператор yield этим значением.
*/
