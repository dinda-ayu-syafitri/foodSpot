import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
    <article class="container">
    <h2>Your Favourite Restaurants</h2>
    <div id="resto-list"></div>
  </article>
          `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restoList = document.querySelector('#resto-list');
    restaurants.forEach((resto) => {
      restoList.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favourite;
