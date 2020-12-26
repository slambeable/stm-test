import { createArray } from '@/mixins/utils';

export default () => {
  const amountOfElements = createArray(12);

  const header = '<div class="page-loader__header"></div>';
  const loader = `<div  class="page-loader__lds-spinner">
    ${amountOfElements.map(() => '<div></div>').join('')}
  </div>`;

  return `<div class="page-loader">${header}${loader}</div>`;
};
