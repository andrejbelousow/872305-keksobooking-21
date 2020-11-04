'use strict';

(function () {
  const MAIN_PIN_Y_OFFSET = 84;
  const advertForm = document.querySelector(`.ad-form`);
  const advertFields = advertForm.children;
  const advertAddressField = advertForm.querySelector(`#address`);
  const roomQuantityField = advertForm.querySelector(`#room_number`);
  const apartmentCapacityField = advertForm.querySelector(`#capacity`);
  const advertTitle = advertForm.querySelector(`#title`);
  const advertPrice = advertForm.querySelector(`#price`);
  const apartmentType = advertForm.querySelector(`#type`);
  const submitButton = advertForm.querySelector(`.ad-form__submit`);
  const {fieldsStateSwitcher, classRemover, addressValueGetter} = window.utils;

  const advertFieldsStateSwitcher = () => {
    fieldsStateSwitcher(advertFields);
  };
  const addressFieldAssigner = (mainPinYOffset) => {
    advertAddressField.value = addressValueGetter(mainPinYOffset);
  };
  const apartmentMinPriceChanger = () => {
    if (apartmentType.value === `bungalow`) {
      advertPrice.minLength = 0;
      advertPrice.placeholder = 0;
    } else if (apartmentType.value === `flat`) {
      advertPrice.minLength = 1000;
      advertPrice.placeholder = 1000;
    } else if (apartmentType.value === `house`) {
      advertPrice.minLength = 5000;
      advertPrice.placeholder = 5000;
    } else if (apartmentType.value === `palace`) {
      advertPrice.minLength = 10000;
      advertPrice.placeholder = 10000;
    }
  };
  const formFieldsValidator = () => {
    if ((apartmentCapacityField.value > roomQuantityField.value)
    && roomQuantityField.value !== `100`
    && apartmentCapacityField.value !== `0`) {
      apartmentCapacityField.setCustomValidity(`Количество мест не соответствует количеству комнат`);
    } else {
      apartmentCapacityField.setCustomValidity(``);
    }

    if (advertTitle.validity.valueMissing) {
      advertTitle.setCustomValidity(`Название обязательно для заполнения`);
    } else if (advertTitle.validity.tooShort) {
      advertTitle.setCustomValidity(`Длина названия объявления - не менее 30 симв.`);
    } else if (advertTitle.validity.tooLong) {
      advertTitle.setCustomValidity(`Длина названия объявления - не более 100 симв.`);
    } else {
      advertTitle.setCustomValidity(``);
    }

    if (advertPrice.validity.valueMissing) {
      advertPrice.setCustomValidity(`Цена обязательна для заполнения`);
    } else if (advertPrice.value < advertPrice.minLength) {
      advertPrice.setCustomValidity(`Цена за ночь - не менее ${advertPrice.minLength}`);
    } else if (advertPrice.value > advertPrice.maxLength) {
      advertPrice.setCustomValidity(`Цена за ночь - не более 1 000 000`);
    } else {
      advertPrice.setCustomValidity(``);
    }
    advertForm.reportValidity();
  };
  const formActivator = () => {
    addressFieldAssigner(MAIN_PIN_Y_OFFSET);
    classRemover(advertForm, `ad-form--disabled`);
    advertFieldsStateSwitcher();
    apartmentType.addEventListener(`change`, () => {
      apartmentMinPriceChanger();
    });
    submitButton.addEventListener(`click`, () => {
      formFieldsValidator();
    });
  };

  window.form = {
    advertFieldsStateSwitcher,
    addressFieldAssigner,
    formActivator
  };
})();
