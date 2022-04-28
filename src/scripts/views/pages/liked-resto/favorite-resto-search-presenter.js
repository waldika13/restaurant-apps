class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto }) {
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchResto(event.target.value);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery.trim();

<<<<<<< HEAD
<<<<<<< HEAD
    let foundResto;
    if (this.latestQuery.length > 0) {
      foundResto = await this._favoriteResto.searchResto(this.latestQuery);
    } else {
      foundResto = await this._favoriteResto.getAllResto();
    }
=======
    const foundResto = await this._favoriteResto.searchResto(this.latestQuery);
>>>>>>> 1141202093e624b06405dccd599843e25db893de
=======
    const foundResto = await this._favoriteResto.searchResto(this.latestQuery);
>>>>>>> 1141202093e624b06405dccd599843e25db893de

    this._showFoundResto(foundResto);
  }

  _showFoundResto(resto) {
<<<<<<< HEAD
<<<<<<< HEAD
    let html;

    if (resto.length > 0) {
      html = resto.reduce(
        (carry, restaurant) => carry.concat(`<li class="resto"><span class="resto__title">${restaurant.title || '-'}</span></li>`),
        '',
      );
    } else {
      html = '<div class="restaurant__not__found">Restaurant tidak ditemukan</div>';
    }
=======
=======
>>>>>>> 1141202093e624b06405dccd599843e25db893de
    const html = resto.reduce(
      (carry, restraurant) => carry.concat(`<li class="resto"><span class="resto__title">${restraurant.title || '-'}</span></li>`),
      '',
    );
<<<<<<< HEAD
>>>>>>> 1141202093e624b06405dccd599843e25db893de
=======
>>>>>>> 1141202093e624b06405dccd599843e25db893de

    document.querySelector('.restaurant').innerHTML = html;

    document.getElementById('resto-search-container')
      .dispatchEvent(new Event('restaurant:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
