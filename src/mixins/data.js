export default {
  headersName: [
    'Name',
    'Picture',
    'Location',
    'Email',
    'Phone',
    'Registration date',
  ],
  errorContent(error) {
    return `<div class="alert-error">
      <div class="alert-error__content">
        <h2 class="alert-error__title">
          It look like there was a problem.
        </h2>
        <div class="alert-error__body">
          <p>An error occurred: 
            <span class="alert-error__status">${error}</span>. Please try again later.</p>
        </div>
      </div>
    </div>`;
  },
};
