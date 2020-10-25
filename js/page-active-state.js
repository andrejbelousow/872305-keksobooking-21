'use strict';

(function () {
  const map = document.querySelector(`.map`);
  window.pageActiveState = {
    startActiveState: () => {
      window.util.classRemover(map, `map--faded`);
      window.pin.renderPins();
      window.form.formActivator();
      window.map.apartmentFiltersStateSwitcher();
      window.map.onMainPinClickRemover();
    }
  };
})();

