'use strict';

const OFFERS_TYPES = [`palace`, `flat`, `house`, `bungalow`];
const CHECK_TIMES = [`12:00`, `13:00`, `14:00`];
const OFFER_FEATURES = [
  `wifi`,
  `dishwasher`,
  `parking`,
  `washer`,
  `elevator`,
  `conditioner`,
];
const OFFER_PHOTOS = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`,
];
const MAP_WIDTH = 1200;
const generatedObjects = [];

const createObjectArray = function() {
  const getRandomValue = function(maxValue, minValue = 0) {
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  };

  for (let i = 1; i <= 8; i++) {
    generatedObjects.push({
      "author": {
        "avatar": `img/avatars/user0${i}.png`,
      },
      "location": {
        "x": getRandomValue(MAP_WIDTH),
        "y": getRandomValue(630, 130),
      },
      "offer": {
        "title": `Невероятное предложение`,
        "address": `600, 350`,
        "price": 6500,
        "type": OFFERS_TYPES[getRandomValue(OFFERS_TYPES.length)],
        "rooms": 2,
        "guests": 3,
        "checkin": CHECK_TIMES[getRandomValue(CHECK_TIMES.length)],
        "checkout": CHECK_TIMES[getRandomValue(CHECK_TIMES.length)],
        "features": OFFER_FEATURES.slice(getRandomValue(OFFER_FEATURES.length)),
        "description": `Аппартаменты рядом с центральной площадью, покушать можно совсем недалеко`,
        "photos": OFFER_PHOTOS.slice(getRandomValue(OFFER_PHOTOS.length)),
      }
    });
  }
};

const showMap = function () {
  document.querySelector(".map").classList.remove("map--faded");
};

const createAndRenderPins = function () {
  const PIN_TEMPLATE = document
    .querySelector("#pin")
    .content.querySelector(".map__pin");

    for (let i = 0; i < generatedObjects.length; i++) {
      const PIN_ELEMENT = PIN_TEMPLATE.cloneNode(true);
      const PIN_IMAGE = PIN_ELEMENT.querySelector("img");
      const objectItem = generatedObjects[i];
      pinElement.style = `left: 200 + ${objectItem.location.x}px; top: 400 + ${objectItem.location.y}px;`; // Куда здесь прибавлять\убавлять размеры картинок меток?
      PIN_IMAGE.src = `${objectItem.author.avatar}`;
      PIN_IMAGE.alt = `${objectItem.offer.title}`;
    }
};

createObjectArray();
showMap();
