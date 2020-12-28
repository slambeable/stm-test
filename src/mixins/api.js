import { errorHandler } from './utils';

// handler on error response from the server
// parameter { response } response from server
// throw: { Error } response status
// return { Promise } response parsing in JSON

const handleErrors = (res) => {
  if (!res.ok) {
    throw new Error(res.status);
  }
  return res.json();
};

// handler on successful response from the server
// parameter { Promise } response from server
// return { Promise } results

const handleSuccess = (res) => res.results;

// shows error in console and in DOM
// parameter { string|Error} path to server

function showError(error) {
  errorHandler(error);
  console.error(error);
}

// export { Promise } api for interacting with the server
// parameter { string } path to server
// return { Promise|Error } response from server

export default async (path) => fetch(path)
  .then(handleErrors)
  .then(handleSuccess)
  .catch(showError);
