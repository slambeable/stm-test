import template from './template';
import './style.css';

export default class PageLoader {
  constructor(app) {
    this.app = app;
    this.element = '';
  }

  render() {
    this.app.insertAdjacentHTML('afterbegin', template());
    this.element = this.app.querySelector('.page-loader');

    return this.element;
  }

  remove() {
    this.app.removeChild(this.element);
  }
}
