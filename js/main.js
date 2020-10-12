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

const pinTemplate = document
  .querySelector(`#pin`)
  .content.querySelector(`.map__pin`);
const PIN_OFFSET_X = 50;
const PIN_OFFSET_Y = 70;
const MAP_WIDTH = 1200 - PIN_OFFSET_X - PIN_OFFSET_X;
const pinsMap = document.querySelector(`.map__pins`);

const createMocksArray = function () {
  const getRandomValue = function (maxValue, minValue = 0) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  };

  const generatedMocks = [];
  for (let i = 1; i <= 8; i++) {
    generatedMocks.push({
      "author": {
        "avatar": `img/avatars/user0${i}.png`,
      },
      "location": {
        "x": getRandomValue(MAP_WIDTH),
        "y": getRandomValue(630 - PIN_OFFSET_Y, 130),
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
  return generatedMocks;
};
const mocksArray = createMocksArray();

const showMap = function () {
  document.querySelector(`.map`).classList.remove(`map--faded`);
};

const createPins = function (generatedMock) {
  const pinElement = pinTemplate.cloneNode(true);
  const pinElementImage = pinElement.querySelector(`img`);
  const leftCoordinate = generatedMock.location.x + PIN_OFFSET_X;
  const topElement = generatedMock.location.y + PIN_OFFSET_Y;
  pinElement.style = `
  left: ${leftCoordinate}px;
  top: ${topElement}px;`;
  pinElementImage.src = `${generatedMock.author.avatar}`;
  pinElementImage.alt = `${generatedMock.offer.title}`;
  return pinElement;
};

const renderPins = function () {
  const pinfragment = document.createDocumentFragment();
  for (let i = 0; i < mocksArray.length; i++) {
    pinfragment.appendChild(createPins(mocksArray[i]));
  }
  pinsMap.appendChild(pinfragment);
};

showMap();
renderPins();
