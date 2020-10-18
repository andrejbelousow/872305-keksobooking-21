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
const PIN_OFFSET_X = 50;
const PIN_OFFSET_Y = 70;
const MAP_WIDTH = 1200 - PIN_OFFSET_X - PIN_OFFSET_X;

const pinTemplate = document
  .querySelector(`#pin`)
  .content.querySelector(`.map__pin`);
const pinsMap = document.querySelector(`.map__pins`);
const getIntervalValue = (endValue, startValue = 0) => {
  return Math.floor(Math.random() * (endValue - startValue)) + startValue;
};

const createMocksArray = () => {
  const generatedMocks = [];
  for (let i = 0; i < 8; i++) {
    generatedMocks.push({
      author: {
        avatar: `img/avatars/user0${i + 1}.png`,
      },
      location: {
        x: getIntervalValue(MAP_WIDTH),
        y: getIntervalValue(630 - PIN_OFFSET_Y, 130),
      },
      offer: {
        title: `Невероятное предложение`,
        address: `600, 350`,
        price: 6500,
        type: OFFERS_TYPES[getIntervalValue(OFFERS_TYPES.length)],
        rooms: getIntervalValue(4, 1),
        guests: getIntervalValue(4, 1),
        checkin: CHECK_TIMES[getIntervalValue(CHECK_TIMES.length)],
        checkout: CHECK_TIMES[getIntervalValue(CHECK_TIMES.length)],
        features: OFFER_FEATURES.slice(getIntervalValue(OFFER_FEATURES.length)),
        description: `Аппартаменты рядом с центральной площадью, покушать можно совсем недалеко`,
        photos: OFFER_PHOTOS.slice(getIntervalValue(OFFER_PHOTOS.length)),
      }
    });
  }
  return generatedMocks;
};
const mocksArray = createMocksArray();

const showMap = () => {
  document.querySelector(`.map`).classList.remove(`map--faded`);
};

const createPin = (generatedMock) => {
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

const renderPins = () => {
  const pinsFragment = document.createDocumentFragment();
  mocksArray.forEach((currentMock) => {
    pinsFragment.appendChild(createPin(currentMock));
  });
  pinsMap.appendChild(pinsFragment);
};

const mainPin = document.querySelector(`.map__pin--main`);
const apartmentFilters = document.querySelector(`.map__filters`).children;
const advertForm = document.querySelector(`.ad-form`);
const advertFields = advertForm.children;
const advertAddressField = advertForm.querySelector(`#address`);
const roomQuantityField = advertForm.querySelector(`#room_number`);
const apartmentCapacityField = advertForm.querySelector(`#capacity`);

const fieldsStateSwitcher = function (fields) {
  Array.from(fields).forEach((field) => {
    field.disabled = !field.disabled;
  });
};

const getAddressValue = (mainPinYOffset = 31) => {
  const MAIN_PIN_X_OFFSET = 31;
  const x = parseInt(mainPin.style.left, 10) + MAIN_PIN_X_OFFSET;
  const y = parseInt(mainPin.style.top, 10) + mainPinYOffset;
  return `${x}, ${y}`;
};

const startActiveState = () => {
  showMap();
  renderPins();
  advertForm.classList.remove(`ad-form--disabled`);
  fieldsStateSwitcher(apartmentFilters);
  fieldsStateSwitcher(advertFields);
  advertAddressField.value = getAddressValue(84);
  mainPin.removeEventListener(`mousedown`, onMainPinPress);
  mainPin.removeEventListener(`keydown`, onMainPinPress);
};

const onMainPinPress = (evt) => {
  if (evt.button === 0 || evt.key === `Enter`) {
    startActiveState();
  }
};

const setInitState = () => {
  advertAddressField.value = getAddressValue();
  fieldsStateSwitcher(apartmentFilters);
  fieldsStateSwitcher(advertFields);
};

setInitState();
mainPin.addEventListener(`mousedown`, onMainPinPress);
mainPin.addEventListener(`keydown`, onMainPinPress);

apartmentCapacityField.addEventListener(`change`, () => {
  console.log(roomQuantityField.value, apartmentCapacityField.value);
  if (roomQuantityField.value !== `100` && apartmentCapacityField.value !== `0`) {
    apartmentCapacityField.setCustomValidity(``);
  } else if (roomQuantityField.value !== apartmentCapacityField.value) {
    apartmentCapacityField.setCustomValidity(`Количество мест не соответствует количеству комнат!`);
  }
  advertForm.reportValidity();
});
