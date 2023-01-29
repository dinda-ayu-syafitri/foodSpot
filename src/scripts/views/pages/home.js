import DicodingRestoSrc from '../../data/dicoding_resto_src';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <hero-element></hero-element>
        <article class="container">
        <h2>Awesome Food Spot</h2>
        <div id="resto-list"></div>
      </article>
      `;
  },

  async afterRender() {
    const restaurants = await DicodingRestoSrc.listResto();
    const restoList = document.querySelector('#resto-list');
    restaurants.forEach((resto) => {
      restoList.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
