'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--temp');
const inputElevation = document.querySelector('.form__input--climb');

if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(
      function (position){
         const {latitude,longitude} = position.coords
         console.log(latitude,longitude);
         console.log(`https://www.google.com.ua/maps/@${latitude},${longitude},14z?hl=ru`);
      },
      function(){
         alert("Ti huy")
      }
   )
}

