"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--temp");
const inputElevation = document.querySelector(".form__input--climb");

let map, mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      console.log(
        `https://www.google.com.ua/maps/@${latitude},${longitude},14z?hl=ru`
      );

      const coords = [latitude, longitude];
      map = L.map("map").setView(coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      /// обработка клика на карте
      map.on("click", (event) => {
        mapEvent = event;
        form.classList.remove("hidden");
        inputDistance.focus();
      });
    },
    function () {
      alert("Ti huy");
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // очистка форм
  inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '' 
  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        autoClose: false,
        closeOnClick: false,
        className: "running-popup",
      })
    )
    .setPopupContent("workout")
    .openPopup();
  form.classList.add("hidden");
});

inputType.addEventListener('change',()=>{
   inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
   inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})