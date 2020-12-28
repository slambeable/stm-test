import template from './template';
import './style.css';

// components for show table with users data
// export { UsersData } class

export default class UsersData {
  // constructor
  // parameter { DOMElement } application root element
  // parameter { Object } users data

  constructor(app, userData) {
    this.app = app;
    this.userData = userData;
    this.element = '';
  }

  // method for rendering element in DOM
  // return { DOMElement } element

  render() {
    this.app.insertAdjacentHTML('afterbegin', template(this.userData));
    this.element = this.app.querySelector('.users-data');

    return this.element;
  }

  // method for remove element from DOM

  remove() {
    this.app.removeChild(this.element);
  }
}
