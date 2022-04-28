import { async } from 'regenerator-runtime';
import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Searching resto', () => {
  let presenter;
  let favoriteResto;

  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
    <div id="resto-search-container">
        <input id="query" type="text">
        <div class="resto-result-container">
            <ul class="restaurant">
            </ul>
        </div>
    </div>
    `;
  };

  const constructorPresenter = () => {
    favoriteResto = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructorPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchResto('film a');

      expect(presenter.latestQuery)
        .toEqual('film a');
    });

    it('should ask the model to search for liked resto', () => {
      searchResto('film a');

      expect(favoriteResto.searchResto)
        .toHaveBeenCalledWith('film a');
    });

    it('should show the found resto', () => {
      presenter._showFoundResto([{ id: 1 }]);
      expect(document.querySelectorAll('.resto').length).toEqual(1);

      presenter._showFoundResto([{
        id: 1,
        title: 'Satu',
      },
      {
        id: 2,
        title: 'Dua',
      }]);
      expect(document.querySelectorAll('.resto').length)
        .toEqual(2);
    });

    it('should show the title of the found resto', () => {
      presenter._showFoundResto([{
        id: 1,
        title: 'Satu',
      }]);
      expect(document.querySelectorAll('.resto__title').item(0).textContent)
        .toEqual('Satu');
    });

    it('should show the title of the found resto', () => {
      presenter._showFoundResto([{ id: 1, title: 'Satu' }]);
      expect(document.querySelectorAll('.resto__title').item(0).textContent)
        .toEqual('Satu');

      presenter._showFoundResto(
        [{
          id: 1,
          title: 'Satu',
        },
        {
          id: 2,
          title: 'Dua',
        }],
      );

      const restoTitles = document.querySelectorAll('.resto__title');
      expect(restoTitles.item(0).textContent).toEqual('Satu');
      expect(restoTitles.item(1).textContent).toEqual('Dua');
    });

    it('should show - for found resto without title', () => {
      presenter._showFoundResto([{ id: 1 }]);

      expect(document.querySelectorAll('.resto__title').item(0).textContent)
        .toEqual('-');
    });

    it('should show the movies found by Favorite Resto', (done) => {
      document.getElementById('resto-search-container')
        .addEventListener('restaurant:searched:updated', () => {
          expect(document.querySelectorAll('.resto').length).toEqual(3);
          done();
        });

      favoriteResto.searchResto.withArgs('film a').and.returnValues([
        {
          id: 111,
          title: 'film abc',
        },
        {
          id: 222,
          title: 'ada juga film abcde',
        },
        {
          id: 333,
          title: 'ini juga boleh film a',
        },
      ]);

      searchResto('film a');
    });

    it('should show the name of the movies found by Favorite Resto', (done) => {
      document.getElementById('resto-search-container').addEventListener('restaurant:searched:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('film abc');
        expect(restoTitles.item(1).textContent).toEqual('ada juga film abcde');
        expect(restoTitles.item(2).textContent).toEqual('ini juga boleh film a');

        done();
      });

      favoriteResto.searchResto.withArgs('film a').and.returnValues([
        { id: 111, title: 'film abc' },
        { id: 222, title: 'ada juga film abcde' },
        { id: 333, title: 'ini juga boleh film a' },
      ]);

      searchResto('film a');
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

<<<<<<< HEAD
<<<<<<< HEAD
    it('should show all favorite restos', () => {
      searchResto('    ');
      expect(favoriteResto.getAllResto)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite resto could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('resto-search-container')
        .addEventListener('restaurant:searched:updated', () => {
          expect(document.querySelectorAll('.restaurant__not__found').length)
            .toEqual(1);
          done();
        });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([]);

      searchResto('resto a');
    });

    it('should not show any resto', (done) => {
      document.getElementById('resto-search-container').addEventListener('restaurant:searched:updated', () => {
        expect(document.querySelectorAll('.resto').length).toEqual(0);
        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([]);

      searchResto('resto a');
    });
=======
=======
>>>>>>> 1141202093e624b06405dccd599843e25db893de
    // it('should show all favorite restos', () => {
    //   searchResto('    ');
    //   expect(favoriteResto.getAllResto)
    //     .toHaveBeenCalled();
    // });
<<<<<<< HEAD
>>>>>>> 1141202093e624b06405dccd599843e25db893de
=======
>>>>>>> 1141202093e624b06405dccd599843e25db893de
  });
});
