'use strict';

(function () {
  const map = document.querySelector(`.map`);
  const {classRemover} = window.utils;
  const {apartmentFiltersStateSwitcher, onMainPinClickRemover} = window.map;
  const {renderPins} = window.pin;
  const {formActivator} = window.form;
  const startActiveState = () => {
    classRemover(map, `map--faded`);
    renderPins();
    formActivator();
    apartmentFiltersStateSwitcher();
    onMainPinClickRemover();
  };
  window.pageActiveState = {
    startActiveState
  };
})();

