'use strict';

const setInitState = () => {
  window.form.addressFieldAssigner();
  window.map.apartmentFiltersStateSwitcher();
  window.form.advertFieldsStateSwitcher();
};

setInitState();
window.map.onMainPinClickHandler();
