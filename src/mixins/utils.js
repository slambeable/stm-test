import data from './data';

export const formateDate = (date) => date.toLocaleString('en-GB').split(',')[0];

export const createArray = (length) => Array.apply(null, ...[{ length }]).map(Number.call, Number);

export const decoratorDelay = function (callback, ms) {
  let timer = 0;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, arguments);
    }, ms || 0);
  };
};

export const errorHandler = (error) => {
  const app = document.querySelector('#app');
  app.innerHTML = '';

  const errorMessage = data.errorContent(error);

  app.insertAdjacentHTML('afterbegin', errorMessage);
};
