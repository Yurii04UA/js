///// <--- Array destructuring

// const japaneseRestaurant = {
//     name : 'Banzai',
//     location: '108 Midl street, London',
//     categories: ['Japaneseeee', 'Sushiii', 'Vegetarion', 'Organic'],
//     appetizers: ['Seaweed salad', 'Tempura', 'Edamame', 'Sushi org'],
//     mainMenu: ['Sushi', 'Ramen', 'Tempura'],
//     oderFood: function(appetizersIndex, mainMenuIndex){
//         return [this.appetizers[appetizersIndex] , this.mainMenu[mainMenuIndex]]
//     },
// };
// console.log(japaneseRestaurant.oderFood(1,1));
// // Возвращаем значение из функции
// const [appetizersOder, mainMenuOder] = japaneseRestaurant.oderFood(1,1);
// console.log(appetizersOder, mainMenuOder)
// // const arr = [1, 2, 3];
// // const x1 = arr[0];
// // const x2 = arr[1];
// // const x3 = arr[2];
// // console.log(x1, x2, x3);

// // const [a1, a2, a3] = arr; // деструктуризационная запись(распоковка массива)
// // console.log(a1, a2, a3);

// // const [categorie1, categorie2] = japaneseRestaurant.categories; // распаковка первых двук
// let [japanese, , vegetarion] = japaneseRestaurant.categories; // распаковка первый и третий
// console.log(japanese, vegetarion);

//// Мы можем менять элементы местами( старый способ)
// const temp = japanese; // временная переменная
// japanese = vegetarion;
// vegetarion = temp;
// console.log(japanese, vegetarion);

//// тоже самое с деструктуризацией
// [vegetarion, japanese] = [japanese, vegetarion]
//  console.log(japanese, vegetarion);

// const nestedArr = [11,2,[3,4]];
// const nestedArr2 = [11,2,3,42];
// // const [numb1, ,numb3] = nestedArr;
// // console.log(numb1,numb3);
// const [numb1, , [numb3, numb4]] = nestedArr   /// Вложеная деструктуризация!!!! распылили из масивы внутри массива
// console.log(numb1, numb3, numb4);
// const [...last] = nestedArr2
// console.log(last)


// const sum = function(...mumbs){   
//     let sum = 0;
//     for(i = 0; i< mumbs.length; i++){
//         sum = sum+ mumbs[i]
//     };
//     console.log(sum);
// };

// sum(...nestedArr2);

// const sum2 = function(arr){
//     let sum = 0;
//     for(i=0; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     console.log(sum)
// };
// sum2(nestedArr2)

////////////////////////////////////////////////
// Task 1
// We are creating a soccer betting app ⚽💰!
// Let's say we are getting data about a specific game from a web service (the game variable below). Your tasks:

// 1. Create separate arrays with players for each team (variables players1 and players2).
// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players. For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array (fieldPlayers) with all the remaining 10 field players.
// 3. Create an array allPlayers containing all players from both teams (22 players).
// 4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.
// 5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).
// 6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).
// 7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.
// Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.

const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

////// 1. Create separate arrays with players for each team (variables players1 and players2).

const [players1 , players2] = game.players;
// console.log(players1,players2);

////// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players. For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array (fieldPlayers) with all the remaining 10 field players.
const [goalkeeperTeam1, ...fieldPlayersTeam1] = players1;
const [goalkeeperTeam2, ...fieldPlayersTeam2] = players2;

// console.log(goalkeeperTeam1,fieldPlayersTeam1);
// console.log(goalkeeperTeam2,fieldPlayersTeam2);

////// 3. Create an array allPlayers containing all players from both teams (22 players).

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

////// 4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.

const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz' , 'Odrizola' ];
console.log(players1Total);

////// 5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).

const {team1: team1Odds,team2: team2Odds, draw} = game.odds;
console.log(team1Odds,team2Odds,draw);

///// 6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).
///// Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.
function printGoals (...items){
    for(i=0; i < items.length; i++){
        console.log(`${items[i]}  Score: (${items.length})`)
    }
};
printGoals('Mingueza', 'Messi', 'Modrich','Nacho');
printGoals(...game.scored);

///// 7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.
