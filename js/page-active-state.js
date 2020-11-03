'use strict';

(function () {
  const map = document.querySelector(`.map`);
  const {classRemover} = window.utils;
  window.pageActiveState = {
    startActiveState: () => {
      classRemover(map, `map--faded`);
      window.pin.renderPins();
      window.form.formActivator();
      window.map.apartmentFiltersStateSwitcher();
      window.map.onMainPinClickRemover();
    }
  };
})();

