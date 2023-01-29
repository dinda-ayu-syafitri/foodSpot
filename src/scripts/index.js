import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/components/hero';
import './views/components/navbar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#nav-icon'),
  drawer: document.querySelector('#offsetNav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
