import template from './template';
import './style.css';
import { decoratorDelay } from '../../mixins/utils';

// components for interface for filtering user data
// export { UsersFilter } class

export default class UsersFilter {
  // constructor
  // parameter { DOMElement } application root element

  constructor(app) {
    this.app = app;
    this.element = '';
  }

  // method for rendering element in DOM
  // return { DOMElement } element

  render() {
    this.app.insertAdjacentHTML('afterbegin', template(this.userData));
    this.element = this.app.querySelector('.users-filter');

    return this.element;
  }

  // method for remove element from DOM

  remove() {
    this.app.removeChild(this.element);
  }

  // method adds handlers to the filtering component
  // parameter { DOMElement } table with users data

  addFilterHandler(table) {
    const input = this.element.querySelector('.users-filter__input');
    const button = this.element.querySelector('.users-filter__button');
    const emptyUsers = this.element.querySelector('.users-filter__empty');
    const nameElements = [...table.querySelectorAll('.users-data__name')];
    const tableElement = table.querySelector('table');

    const inputHandler = (e) => {
      const { value } = e.target;
      const formateValue = value.trim().toLowerCase();
      let counter = 0;

      nameElements.forEach((element) => {
        const name = element.textContent.trim().toLowerCase();
        const sliceName = name.slice(0, formateValue.length);
        const { parentElement } = element;

        if (sliceName !== formateValue) {
          parentElement.classList.add('users-data__row_hide');
          counter -= 1;
        } else {
          parentElement.classList.remove('users-data__row_hide');
          counter += 1;
        }
      });

      if (counter === -nameElements.length) {
        emptyUsers.classList.add('users-filter__empty_visible');
        tableElement.classList.add('users-data__table_hide');
      } else {
        emptyUsers.classList.remove('users-filter__empty_visible');
        tableElement.classList.remove('users-data__table_hide');
      }
    };

    const buttonHandler = () => {
      input.value = '';

      nameElements.forEach((element) => {
        const { parentElement } = element;

        parentElement.classList.remove('users-data__row_hide');
        emptyUsers.classList.remove('users-data__empty-users_visible');
        tableElement.classList.remove('users-data__table_hide');
      });
    };

    input.addEventListener('input', decoratorDelay(inputHandler, 500));
    button.addEventListener('click', buttonHandler);
  }
}
