const OFFERS_TYPES = [`palace`, `flat`, `house`, `bungalow`];
const CHECK_TIME = [`12:00`, `13:00`, `14:00`];
const OFFER_FEATURES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const OFFER_PHOTOS = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
const generatedObjects = [];

const getRandomValue = function(maxValue, minValue = 0) {
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const createObjectArray = function() {
  for (let i = 1; i <= 8; i++) {
    generatedObjects.push({
      author: {
        avatar: `img/avatars/user0${i}.png`,
      },
      offer: {
        title: `Невероятное предложение`,
        address: `${this.location.x}, ${this.location.y}`,
        price: 6500,
        type: OFFERS_TYPES[getRandomValue(OFFERS_TYPES.length)],
        rooms: 2,
        guests: 3,
        checkin: CHECK_TIME[getRandomValue(CHECK_TIME.length)],
        checkout: CHECK_TIME[getRandomValue(CHECK_TIME.length)],
        features: OFFER_FEATURES.slice(
          0,
          getRandomValue(OFFER_FEATURES.length)
        ),
        description: `Аппартаменты рядом с центральной площадью, покушать можно совсем недалеко`,
        photos: OFFER_PHOTOS.slice(0, getRandomValue(OFFER_PHOTOS.length)),
      },
      location: {
        x: getRandomValue(120),
        y: getRandomValue(630, 130),
      },
    });
  }
};

createObjectArray();

console.log(
  generatedObjects[0].offer.address,
  generatedObjects[0].offer.type,
  generatedObjects[0].offer.checkin,
  generatedObjects[0].offer.checkout,
  generatedObjects[0].offer.features,
  generatedObjects[0].offer.photos
);
