function remuveSpace(text) {
  return text.replaceAll(" ", "").toLowerCase();
}

// console.log(remuveSpace("Hello world ! sd sd asdAD AAD SS SS"));

function upperFirstWord(text) {
  const [first, ...other] = text.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
}

console.log(upperFirstWord("Hello my world !"));

function converter(text, func) {
  console.log(`Original text : ${text}`);
  console.log(`Converter text : ${func(text)}`);
}

// converter('Hello my friend !', remuveSpace);
// converter('Hello my friend !', upperFirstWord);

// let f = [1,2,3,5];
// const asd = num => console.log(num * 2);
// f.forEach(asd)

/// Function return func
// function greet (greetingText){
//    return function(name){
//       console.log(`${greetingText} ${name} !`);
//    }
// }

const greet = (text) => (name) => console.log(`${text} ${name}!!!`);

greet("HELLLO11")("my friend");

/// Methods CALL APPLY

const airline123 = {
  airlineName: "SkyUP",
  airlineCode: "SU",
  bookings: [],
  book: function book(flightNumb, passengerName) {
    console.log(
      `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.airlineCode}${flightNumb}`
    );
    this.bookings.push({
      flight: `${this.airlineCode}${flightNumb}`,
      passenger: passengerName,
    });
  },
};

// airline123.book(321, 'Yurii Paraka');
// airline123.book(512, 'Para Olf');

// console.log(airline123);

const airline666 = {
  airlineName: "UkrLine",
  airlineCode: "UA",
  bookings: [],
};
// airline666.book(222,'sd dd');
// airline666.book(111,'sd dd');
// console.log(airline666);

// const books = airline123.book;
// books.call(airline666, 666,'Linda Pizda');  /// call - явно указывает на что указывает THIS
// books.call(airline666, 555,'Li Pia');
// console.log(airline666);

// books.call(airline123, 777,'Liza Piza');
// console.log(airline123);
// books(1222, 'Sdf sf');
// airline666.book(666, 'Holy Shit');

///// Methods Bind

airline666.airplanes = 200;
console.log(airline666);
airline666.buyAirplanes = function () {
  console.log(this);
  this.airplanes++;
  console.log(this.airplanes);
};

// document.querySelector('.btn').addEventListener('click',airline666.buyAirplanes.bind(airline666));;

/// Partial app

const getPercentage = (totalValue, value) => (value / totalValue) * 100;

console.log(getPercentage(20, 111));
const getPercentage28123 = getPercentage.bind(null, 28123);
console.log(getPercentage28123(10000));

/////
const survey = {
  question: "What programming language would you like to learn?",
  options: ["1: JavaScript", "2: Python", "3: Ruby", "4: Java", "5: C#"],
  answers: new Array(5).fill(0),
  logNewAnswer() {
    const showPrompt = +prompt(
      `${this.question}\n ${this.options.join("\n")}\n(Enter your number)`
    );

    if (!Number(showPrompt) || showPrompt >= 6) {
      alert("Enter you number");
    } else {
      alert(`your number: ${showPrompt}`);
      this.answers[showPrompt - 1]++
      // div.innerHTML = this.answers;
    }
  },
};

const btnShowPrompt = document.querySelector(".btn");
btnShowPrompt.addEventListener("click", survey.logNewAnswer.bind(survey));

// const div = document.createElement("p");

// document.body.append(div);
