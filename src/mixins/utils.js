import data from './data';

// export: { Function } formats date in dd.mm.yyyy
// param { Date } data
// return { string } formatted date

export const formateDate = (date) => date.toLocaleString('en-GB').split(',')[0];

// export: { Function } creates an array of given length
// param { string } length of Array
// return { Array } array

export const createArray = (length) => Array.apply(null, ...[{ length }]).map(Number.call, Number);

// export: { Function } hangable delay decorator
// param { Function } callback
// param { number } time to delay
// return { Function } triggers a delayed callback

export const decoratorDelay = function (callback, ms) {
  let timer = 0;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, arguments);
    }, ms || 0);
  };
};

// export: { Function } error handler
// param { string|Error } error

export const errorHandler = (error) => {
  const app = document.querySelector('#app');
  app.innerHTML = '';

  const errorMessage = data.errorContent(error);

  app.insertAdjacentHTML('afterbegin', errorMessage);
};
