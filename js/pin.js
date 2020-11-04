'use strict';

(function () {
  const PIN_OFFSET_X = 50;
  const PIN_OFFSET_Y = 70;
  const mocksArray = window.data.createMocksArray();
  const pinTemplate = document
  .querySelector(`#pin`)
  .content.querySelector(`.map__pin`);
  const pinsMap = document.querySelector(`.map__pins`);

  const createPin = (generatedMock) => {
    const pinElement = pinTemplate.cloneNode(true);
    const pinElementImage = pinElement.querySelector(`img`);
    const leftCoordinate = generatedMock.location.x + PIN_OFFSET_X;
    const topElement = generatedMock.location.y + PIN_OFFSET_Y;
    pinElement.style = `
    left: ${leftCoordinate}px;
    top: ${topElement}px;`;
    pinElementImage.src = `${generatedMock.author.avatar}`;
    pinElementImage.alt = `${generatedMock.offer.title}`;
    return pinElement;
  };
  const renderPins = () => {
    const pinsFragment = document.createDocumentFragment();
    mocksArray.forEach((currentMock) => {
      pinsFragment.appendChild(createPin(currentMock));
    });
    pinsMap.appendChild(pinsFragment);
  };

  window.pin = {
    renderPins
  };
})();

