'use strict';

(function () {
  const map = document.querySelector(`.map`);
  const mainPin = document.querySelector(`.map__pin--main`);
  const apartmentFiltersFields = document.querySelector(`.map__filters`).children;
  const {fieldsStateSwitcher, classRemover} = window.utils;
  const onMainPinPress = (evt) => {
    if (evt.button === 0 || evt.key === `Enter`) {
      window.pageActiveState.startActiveState();
    }
  };
  const onMainPinClickHandler = () => {
    mainPin.addEventListener(`mousedown`, onMainPinPress);
    mainPin.addEventListener(`keydown`, onMainPinPress);
  };
  const onMainPinClickRemover = () => {
    mainPin.removeEventListener(`mousedown`, onMainPinPress);
    mainPin.removeEventListener(`keydown`, onMainPinPress);
  };
  const apartmentFiltersStateSwitcher = () => {
    fieldsStateSwitcher(apartmentFiltersFields);
  };
  const mapActivator = classRemover(map, `map--faded`);

  window.map = {
    onMainPinClickHandler,
    onMainPinClickRemover,
    apartmentFiltersStateSwitcher,
    mapActivator
  };
})();
