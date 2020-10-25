'use strict';

(function () {
  const map = document.querySelector(`.map`);
  const mainPin = document.querySelector(`.map__pin--main`);
  const apartmentFiltersFields = document.querySelector(`.map__filters`).children;
  const onMainPinPress = (evt) => {
    if (evt.button === 0 || evt.key === `Enter`) {
      window.pageActiveState.startActiveState();
    }
  };

  window.map = {
    onMainPinClickHandler: () => {
      mainPin.addEventListener(`mousedown`, onMainPinPress);
      mainPin.addEventListener(`keydown`, onMainPinPress);
    },
    onMainPinClickRemover: () => {
      mainPin.removeEventListener(`mousedown`, onMainPinPress);
      mainPin.removeEventListener(`keydown`, onMainPinPress);
    },
    apartmentFiltersStateSwitcher() {
      window.util.fieldsStateSwitcher(apartmentFiltersFields);
    },
    mapActivator: window.util.classRemover(map, `map--faded`)
  };
})();
