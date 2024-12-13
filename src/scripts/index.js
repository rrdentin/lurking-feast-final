import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const showButton = document.querySelector('.navbar-toggler');
const sidebar = document.querySelector('.collapsible');
const closeButton = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');
const content = document.querySelector('main');

const app = new App({ showButton, closeButton, sidebar, overlay, content });

window.addEventListener('hashchange', () => {

  app.renderPage();
  swRegister();

});
window.addEventListener('load', () => {
  app.renderPage();
});

document.addEventListener('DOMContentLoaded', () => {
  const skipLinkElem = document.querySelector('.skip-to-content');
  skipLinkElem.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#main').focus();
    document.querySelector('#main').scrollIntoView();
  });
});
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});