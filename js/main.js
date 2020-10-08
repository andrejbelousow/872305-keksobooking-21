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
const MAP_WIDTH = 600;
const generatedObjects = [];

const PIN_TEMPLATE = document
  .querySelector(`#pin`)
  .content.querySelector(`.map__pin`);
const PIN_OFFSET_X = 50;
const PIN_OFFSET_Y = 70;
const PINS_MAP = document.querySelector(`.map__pins`);

const createObjectArray = function () {
  const getRandomValue = function (maxValue, minValue = 0) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  };

  for (let i = 1; i <= 8; i++) {
    generatedObjects.push({
      "author": {
        "avatar": `img/avatars/user0${i}.png`,
      },
      "location": {
        "x": `${getRandomValue(MAP_WIDTH)}`,
        "y": `${getRandomValue(630, 130)}`,
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
  document.querySelector(`.map`).classList.remove(`map--faded`);
};

const createPins = function (generatedObject) {
  const PIN_ELEMENT = PIN_TEMPLATE.cloneNode(true);
  const PIN_ELEMENT_IMAGE = PIN_ELEMENT.querySelector(`img`);
  PIN_ELEMENT.style = `
  left: ${generatedObject.location.x + PIN_OFFSET_X}px;
  top: ${generatedObject.location.y + PIN_OFFSET_Y}px;`;
  PIN_ELEMENT_IMAGE.src = `${generatedObject.author.avatar}`;
  PIN_ELEMENT_IMAGE.alt = `${generatedObject.offer.title}`;
  console.log(
    generatedObject.location.y + PIN_OFFSET_Y,
    generatedObject.location.x + PIN_OFFSET_X
  );
  return PIN_ELEMENT;
};

const renderPins = function () {
  const PINS_FRAGMENT = document.createDocumentFragment();
  for (let i = 0; i < generatedObjects.length; i++) {
    PINS_FRAGMENT.appendChild(createPins(generatedObjects[i]));
  }
  PINS_MAP.appendChild(PINS_FRAGMENT);
};

createObjectArray();
showMap();
renderPins();
