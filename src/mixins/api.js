import data from './data';

const handleErrors = (res) => {
  if (!res.ok) {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    const errorMessage = data.errorContent(res);

    app.insertAdjacentHTML('afterbegin', errorMessage);
    throw new Error(res.status);
  }
  return res.json();
};

const handleSuccess = (res) => res.results;

function printError(error) {
  console.error(error);
}

export default async (path) => fetch(path)
  .then(handleErrors)
  .then(handleSuccess)
  .catch(printError);
