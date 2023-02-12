import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <article class="container">
      <div class="search">      
      <input id="query" type="text" placeholder="Search your favourite resto...">
      </div>
      <h2 class="content__heading">Your Liked Resto</h2>
        <div id="restos" class="restos resto-list">
        </div>
      </article>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(resto) {
    this.showFavoriteMovies(resto);
  }

  showFavoriteResto(resto = []) {
    let html;
    if (resto.length) {
      html = resto.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found resto__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
