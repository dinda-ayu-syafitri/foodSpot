import FavoriteRestoSearchPresenter
  from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import FavoriteRestoSearchView
  from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view';

describe('Searching resto', () => {
  let presenter;
  let favoriteResto;
  let view;

  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto,
      view,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchResto('resto a');

      expect(presenter.latestQuery)
        .toEqual('resto a');
    });

    it('should ask the model to search for resto', () => {
      searchResto('resto a');

      expect(favoriteResto.searchResto)
        .toHaveBeenCalledWith('resto a');
    });

    it('should show the found resto', () => {
      presenter._showFoundResto([{ id: 1 }]);
      expect(document.querySelectorAll('.resto-item').length)
        .toEqual(1);

      presenter._showFoundResto([{
        id: 1,
        name: 'Satu',
      }, {
        id: 2,
        name: 'Dua',
      }]);
      expect(document.querySelectorAll('.resto-item').length)
        .toEqual(2);
    });

    it('should show the title of the found resto', () => {
      presenter._showFoundResto([{
        id: 1,
        name: 'Satu',
      }]);
      expect(document.querySelectorAll('.resto__title')
        .item(0).textContent)
        .toEqual('Satu');
    });

    it('should show - when the resto returned does not contain a title', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([
        { id: 444 },
      ]);

      searchResto('resto a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchResto(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchResto('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchResto('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchResto('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite resto', () => {
      searchResto('    ');

      expect(favoriteResto.getAllResto)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite resto could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);

        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([]);

      searchResto('resto a');
    });

    it('should not show any resto', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item').length)
          .toEqual(0);
        done();
      });

      favoriteResto.searchResto.withArgs('resto a')
        .and
        .returnValues([]);

        searchResto('resto a');
    });
  });
});
