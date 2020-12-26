import { errorHandler } from './utils';

const handleErrors = (res) => {
  if (!res.ok) {
    throw new Error(res.status);
  }
  return res.json();
};

const handleSuccess = (res) => res.results;

function showError(error) {
  errorHandler(error);
  console.error(error);
}

export default async (path) => fetch(path)
  .then(handleErrors)
  .then(handleSuccess)
  .catch(showError);
