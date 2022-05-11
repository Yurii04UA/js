"use strict";
////////////////////////// XML REQUEST
const btn = document.querySelector(".btn");
const cardContainer = document.querySelector(".card");
//////////////////////////////////////

// const getCountryData = (country) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

//   request.send();
//   request.addEventListener("load", function () {
//    const [data] = JSON.parse(this.responseText);

//    const currencies = data.currencies;
//    const currensyName = Object.values(currencies)[0].name;
//    const languages = data.languages
//    const language = Object.values(languages)[0]

//    const html = `
//    <article class="country">
//      <img class="country__img" src="${data.flags.svg}" />
//      <div class="country__data">
//        <h3 class="country__name">${data.name.common}</h3>
//        <h4 class="country__region">${data.region}</h4>
//        <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
//          +data.population / 1000000
//        ).toFixed(2)} milions</p>
//        <p class="country__row"><span>🗣️</span>${language}</p>
//        <p class="country__row"><span>💰</span>${currensyName}</p>
//      </div>
//    </article>
//    `;
//     cardContainer.insertAdjacentHTML("beforeend", html);
//     cardContainer.style.opacity = 1;
//   });
// };
// getCountryData("ukraine");

///////////////////////////////////

const displayCountry = (data, clasName = "") => {
  const currencies = data.currencies;
  const currensyName = Object.values(currencies)[0].name;
  const languages = data.languages;
  const language = Object.values(languages)[0];

  const html = `
   <article class="country ${clasName}">
     <img class="country__img" src="${data.flags.svg}" />
     <div class="country__data">
       <h3 class="country__name">${data.name.common}</h3>
       <h4 class="country__region">${data.region}</h4>
       <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
         +data.population / 1000000
       ).toFixed(2)} milions</p>
       <p class="country__row"><span>🗣️</span>${language}</p>
       <p class="country__row"><span>💰</span>${currensyName}</p>
     </div>
   </article>
   `;
  cardContainer.insertAdjacentHTML("beforeend", html);
  // cardContainer.style.opacity = 1;
};

const getCountryAndBorderCountries = (country) => {
  const request1 = new XMLHttpRequest();
  request1.open("GET", `https://restcountries.com/v3.1/name/${country}`);

  request1.send();
  request1.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    displayCountry(data);

    // get border countries
    const [first] = data.borders;
    console.log(first);
    if (!first) return;
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${first}`);
    request2.send();
    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      displayCountry(data2, "neighbour");
    });
  });
};
// getCountryAndBorderCountries("ukraine");
///////// CALL BACK HELL
// setTimeout(() => {
//   console.log("1 second");
//   setTimeout(() => {
//     console.log("2 second");
//     setTimeout(() => {
//       console.log("3 second");
//       setTimeout(()=>{
//         console.log('4 second')}
//         ,1000)
//     }, 1000);
//   }, 1000);
// }, 1000);

// const getCountryAndBorderCountries = (country) => {
  // const request1 = new XMLHttpRequest();
  // request1.open("GET", `https://restcountries.com/v3.1/name/${country}`);

  // request1.send();

  const responseFetch = fetch(`https://restcountries.com/v3.1/name/ukraine`)

  const createMassage = (e) =>{
    cardContainer.insertAdjacentText("beforeend", e);
    // cardContainer.style.opacity = 1;
  } 

  const getData = (url,errorMassage = 'ops. Something happened') => {
    return fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error(` Error ${response.status}.  ${errorMassage}`)
      }
      return response.json()})
  }

  const getCountryData = (country) =>  {
    getData(`https://restcountries.com/v3.1/name/${country}`,'Country not found')
    
    .then(([data]) => {
      displayCountry(data)
      if(!data.borders) throw new Error('borders no')
      const first = data.borders[0]
      // const first = 'sgyghghd'
      
      return getData(`https://restcountries.com/v3.1/alpha/${first}`,'Country not found')
     
    })
    .then(([data]) => displayCountry(data, 'neighbour'))
    .catch(e => {
      createMassage(e.message)
      console.log(`${e} 😤`)
    })
    .finally(()=>{
      cardContainer.style.opacity = 1;
      cardContainer.style.opacity = 1;
    })
  }
  

btn.addEventListener('click', ()=> {
  getCountryData('peru')
})

