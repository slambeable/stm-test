import template from './template';
import './style.css';

export default class PageLoader {
  constructor(app, userData) {
    this.app = app;
    this.userData = userData;
    this.element = '';
  }

  render() {
    this.app.insertAdjacentHTML('afterbegin', template(this.userData));
    this.element = this.app.querySelector('.users-data');

    return this.element;
  }

  remove() {
    this.app.removeChild(this.element);
  }
}
