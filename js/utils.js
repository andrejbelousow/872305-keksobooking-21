'use strict';

(function () {
  const mainPin = document.querySelector(`.map__pin--main`);
  window.utils = {
    classRemover: (domElement, className) => {
      domElement.classList.remove(className);
    },
    fieldsStateSwitcher: (fields) => {
      Array.from(fields).forEach((field) => {
        field.disabled = !field.disabled;
      });
    },
    addressValueGetter: (mainPinYOffset = 31) => {
      const MAIN_PIN_X_OFFSET = 31;
      const x = parseInt(mainPin.style.left, 10) + MAIN_PIN_X_OFFSET;
      const y = parseInt(mainPin.style.top, 10) + mainPinYOffset;
      return `${x}, ${y}`;
    }
  };
})();
