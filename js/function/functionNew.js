function remuveSpace (text){
   return text.replaceAll(' ', '').toLowerCase()
};

// console.log(remuveSpace("Hello world ! sd sd asdAD AAD SS SS"));

function upperFirstWord (text){
    const [first, ...other] = text.split(' ');
    return [first.toUpperCase(), ...other].join(' ')
    
}

console.log(upperFirstWord('Hello my world !'));

function converter (text, func){
   console.log(`Original text : ${text}`);
   console.log(`Converter text : ${func(text)}`);
};

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

const greet = text => name => console.log(`${text} ${name}!!!`);

greet('HELLLO11')('my friend')


