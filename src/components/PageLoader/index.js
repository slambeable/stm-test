import template from './template';
import './style.css';

// components for show loader
// export { PageLoader } class

export default class PageLoader {
  // constructor
  // parameter { DOMElement } application root element

  constructor(app) {
    this.app = app;
    this.element = '';
  }

  // method for rendering element in DOM
  // return { DOMElement } element

  render() {
    this.app.insertAdjacentHTML('afterbegin', template());
    this.element = this.app.querySelector('.page-loader');

    return this.element;
  }

  // method for remove element from DOM

  remove() {
    this.app.removeChild(this.element);
  }
}
