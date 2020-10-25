'use strict';

(function () {
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

  const getIntervalValue = (endValue, startValue = 0) => {
    return Math.floor(Math.random() * (endValue - startValue)) + startValue;
  };

  window.data = {
    PIN_OFFSET_X,
    PIN_OFFSET_Y,
    createMocksArray: () => {
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
    }
  };
})();
