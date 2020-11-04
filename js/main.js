'use strict';
const {addressFieldAssigner, advertFieldsStateSwitcher} = window.form;
const {apartmentFiltersStateSwitcher, onMainPinClickHandler} = window.map;

const setInitState = () => {
  addressFieldAssigner();
  apartmentFiltersStateSwitcher();
  advertFieldsStateSwitcher();
};

setInitState();
onMainPinClickHandler();
